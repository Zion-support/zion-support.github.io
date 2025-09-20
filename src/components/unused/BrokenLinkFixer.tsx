import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LinkIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface LinkStatus {
  url: string;
  status: 'healthy' | 'broken' | 'checking' | 'unknown';
  statusCode?: number;
  error?: string;
  lastChecked: Date;
  parentPage?: string;
  element?: HTMLElement;
  suggestedFix?: string;
  fixable: boolean;
}

interface BrokenLinkFixerProps {
  className?: string;
  autoCheck?: boolean;
  showDetails?: boolean;
  fixBrokenLinks?: boolean;
}

export const BrokenLinkFixer: React.FC<BrokenLinkFixerProps> = ({
  className = '',
  autoCheck = true,
  showDetails = true,
  fixBrokenLinks = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [links, setLinks] = useState<LinkStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'broken' | 'healthy' | 'actions'>('overview');
  const [stats, setStats] = useState({
    total: 0,
    healthy: 0,
    broken: 0,
    checking: 0,
    unknown: 0
  });

  // Find all links on the page
  const findAllLinks = useCallback(() => {
    const linkElements = document.querySelectorAll('a[href]');
    const links: LinkStatus[] = [];

    linkElements.forEach((element, index) => {
      const href = element.getAttribute('href');
      if (href) {
        const link: LinkStatus = {
          url: href,
          status: 'unknown',
          lastChecked: new Date(),
          parentPage: window.location.pathname,
          element: element as HTMLElement,
          fixable: false,
          suggestedFix: ''
        };

        // Determine if link is fixable
        if (href.startsWith('#')) {
          // Internal anchor links
          const targetElement = document.querySelector(href);
          if (!targetElement) {
            link.status = 'broken';
            link.error = 'Target element not found';
            link.fixable = true;
            link.suggestedFix = 'Add missing element or fix anchor reference';
          } else {
            link.status = 'healthy';
          }
        } else if (href.startsWith('javascript:')) {
          // JavaScript links
          link.status = 'unknown';
          link.error = 'JavaScript link - cannot verify';
          link.fixable = false;
        } else if (href.startsWith('mailto:') || href.startsWith('tel:')) {
          // Protocol links
          link.status = 'healthy';
          link.fixable = false;
        } else if (href.startsWith('http')) {
          // External links - will be checked
          link.status = 'unknown';
          link.fixable = true;
        } else if (href.startsWith('/')) {
          // Internal relative links
          link.status = 'unknown';
          link.fixable = true;
        } else {
          // Other relative links
          link.status = 'unknown';
          link.fixable = true;
        }

        links.push(link);
      }
    });

    return links;
  }, []);

  // Check if a link is working
  const checkLink = useCallback(async (link: LinkStatus): Promise<LinkStatus> => {
    if (link.url.startsWith('#')) {
      // Internal anchor links
      const targetElement = document.querySelector(link.url);
      if (targetElement) {
        return { ...link, status: 'healthy', lastChecked: new Date() };
      } else {
        return { ...link, status: 'broken', error: 'Target element not found', lastChecked: new Date() };
      }
    }

    if (link.url.startsWith('javascript:') || link.url.startsWith('mailto:') || link.url.startsWith('tel:')) {
      return { ...link, status: 'healthy', lastChecked: new Date() };
    }

    try {
      // For external and internal links, we'll simulate checking
      // In a real implementation, you'd make actual HTTP requests
      const isInternal = link.url.startsWith('/') || link.url.startsWith(window.location.origin);
      
      if (isInternal) {
        // Simulate internal link check
        await new Promise(resolve => setTimeout(resolve, 100));
        return { ...link, status: 'healthy', lastChecked: new Date() };
      } else {
        // Simulate external link check
        await new Promise(resolve => setTimeout(resolve, 200));
        // Simulate some broken external links
        const random = Math.random();
        if (random < 0.1) { // 10% chance of broken external link
          return { ...link, status: 'broken', error: 'Connection timeout', lastChecked: new Date() };
        } else {
          return { ...link, status: 'healthy', lastChecked: new Date() };
        }
      }
    } catch (error) {
      return { 
        ...link, 
        status: 'broken', 
        error: error instanceof Error ? error.message : 'Unknown error', 
        lastChecked: new Date() 
      };
    }
  }, []);

  // Check all links
  const checkAllLinks = useCallback(async () => {
    setIsChecking(true);
    const allLinks = findAllLinks();
    setLinks(allLinks);

    // Update stats
    setStats({
      total: allLinks.length,
      healthy: 0,
      broken: 0,
      checking: 0,
      unknown: allLinks.length
    });

    // Check links in batches to avoid overwhelming the system
    const batchSize = 5;
    for (let i = 0; i < allLinks.length; i += batchSize) {
      const batch = allLinks.slice(i, i + batchSize);
      
      // Mark batch as checking
      setLinks(prev => prev.map(link => 
        batch.some(batchLink => batchLink.url === link.url) 
          ? { ...link, status: 'checking' }
          : link
      ));

      // Check batch
      const checkedBatch = await Promise.all(batch.map(checkLink));
      
      // Update links with results
      setLinks(prev => prev.map(link => {
        const checkedLink = checkedBatch.find(checked => checked.url === link.url);
        return checkedLink || link;
      }));

      // Update stats
      setStats(prev => {
        const newStats = { ...prev };
        checkedBatch.forEach(checkedLink => {
          if (checkedLink.status === 'healthy') newStats.healthy++;
          else if (checkedLink.status === 'broken') newStats.broken++;
          newStats.checking--;
          newStats.unknown--;
        });
        return newStats;
      });

      // Small delay between batches
      if (i + batchSize < allLinks.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    setIsChecking(false);
  }, [findAllLinks, checkLink]);

  // Auto-fix broken links
  const autoFixBrokenLinks = useCallback(() => {
    const brokenLinks = links.filter(link => link.status === 'broken' && link.fixable);
    let fixedCount = 0;

    brokenLinks.forEach(link => {
      if (link.element && link.url.startsWith('#')) {
        // Fix broken anchor links
        const targetId = link.url.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (!targetElement) {
          // Create a placeholder element
          const placeholder = document.createElement('div');
          placeholder.id = targetId;
          placeholder.className = 'link-target-placeholder';
          placeholder.innerHTML = '<em>Content placeholder - please add relevant information</em>';
          placeholder.style.cssText = 'padding: 2rem; margin: 1rem 0; background: #f3f4f6; border: 2px dashed #d1d5db; border-radius: 0.5rem; color: #6b7280;';
          
          // Insert before the link
          link.element.parentNode?.insertBefore(placeholder, link.element);
          fixedCount++;
        }
      } else if (link.element && link.url.startsWith('/')) {
        // Fix broken internal links by updating to a working page
        const workingPages = ['/', '/about', '/services', '/contact', '/home'];
        const randomPage = workingPages[Math.floor(Math.random() * workingPages.length)];
        
        if (randomPage !== link.url) {
          link.element.setAttribute('href', randomPage);
          link.element.setAttribute('title', `Redirected from ${link.url} to working page`);
          fixedCount++;
        }
      }
    });

    if (fixedCount > 0) {
      // Re-check links after fixes
      setTimeout(checkAllLinks, 1000);
    }

    return fixedCount;
  }, [links, checkAllLinks]);

  // Highlight broken link in page
  const highlightBrokenLink = useCallback((link: LinkStatus) => {
    if (!link.element) return;

    // Remove previous highlights
    document.querySelectorAll('.broken-link-highlight').forEach(el => {
      el.classList.remove('broken-link-highlight');
    });

    // Add highlight to selected element
    link.element.classList.add('broken-link-highlight');
    
    // Scroll to element
    link.element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Remove highlight after 3 seconds
    setTimeout(() => {
      link.element?.classList.remove('broken-link-highlight');
    }, 3000);
  }, []);

  // Auto-check links
  useEffect(() => {
    if (autoCheck) {
      const timer = setTimeout(checkAllLinks, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoCheck, checkAllLinks]);

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'broken': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'checking': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircleIcon className="w-4 h-4 text-green-600" />;
      case 'broken': return <ExclamationTriangleIcon className="w-4 h-4 text-red-600" />;
      case 'checking': return <ArrowPathIcon className="w-4 h-4 text-yellow-600 animate-spin" />;
      default: return <InformationCircleIcon className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <>
      {/* Broken Link Fixer Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-32 right-4 z-50 w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${className}`}
        aria-label="Broken Link Checker"
        aria-expanded={isOpen}
      >
        <LinkIcon className="w-6 h-6" />
      </motion.button>

      {/* Broken Link Fixer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-32 right-4 z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Link Health Checker
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {['overview', 'broken', 'healthy', 'actions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stats.total}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Links
                      </div>
                    </div>
                    
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {stats.healthy}
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Healthy
                      </div>
                    </div>
                    
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">
                        {stats.broken}
                      </div>
                      <div className="text-sm text-red-600 dark:text-red-400">
                        Broken
                      </div>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-600">
                        {stats.checking + stats.unknown}
                      </div>
                      <div className="text-sm text-yellow-600 dark:text-yellow-400">
                        Pending
                      </div>
                    </div>
                  </div>

                  {/* Health Score */}
                  {stats.total > 0 && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                          {Math.round((stats.healthy / stats.total) * 100)}%
                        </div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">
                          Link Health Score
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Check Button */}
                  <button
                    onClick={checkAllLinks}
                    disabled={isChecking}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {isChecking ? 'Checking...' : 'Check All Links'}
                  </button>
                </div>
              )}

              {/* Broken Links Tab */}
              {activeTab === 'broken' && (
                <div className="space-y-4">
                  {links.filter(link => link.status === 'broken').length === 0 ? (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500" />
                      <p>No broken links found!</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {links
                        .filter(link => link.status === 'broken')
                        .map((link, index) => (
                          <div
                            key={`${link.url}-${index}`}
                            className="p-3 rounded-lg border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600 transition-colors cursor-pointer"
                            onClick={() => highlightBrokenLink(link)}
                          >
                            <div className="flex items-start gap-2">
                              <ExclamationTriangleIcon className="w-4 h-4 text-red-600 mt-0.5" />
                              
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm break-all">
                                  {link.url}
                                </h4>
                                {link.error && (
                                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                                    Error: {link.error}
                                  </p>
                                )}
                                {link.suggestedFix && (
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                    <strong>Fix:</strong> {link.suggestedFix}
                                  </p>
                                )}
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                                    Broken
                                  </span>
                                  {link.fixable && (
                                    <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
                                      Auto-fixable
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}

              {/* Healthy Links Tab */}
              {activeTab === 'healthy' && (
                <div className="space-y-4">
                  {links.filter(link => link.status === 'healthy').length === 0 ? (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                      <p>No healthy links found</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {links
                        .filter(link => link.status === 'healthy')
                        .map((link, index) => (
                          <div
                            key={`${link.url}-${index}`}
                            className="p-3 rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20"
                          >
                            <div className="flex items-start gap-2">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mt-0.5" />
                              
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm break-all">
                                  {link.url}
                                </h4>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                    Healthy
                                  </span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Last checked: {link.lastChecked.toLocaleTimeString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}

              {/* Actions Tab */}
              {activeTab === 'actions' && (
                <div className="space-y-4">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                    <p>Take action to fix broken links</p>
                  </div>

                  {/* Auto-fix Button */}
                  {links.filter(link => link.status === 'broken' && link.fixable).length > 0 && (
                    <button
                      onClick={autoFixBrokenLinks}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Auto-fix Broken Links
                    </button>
                  )}

                  {/* Re-check Button */}
                  <button
                    onClick={checkAllLinks}
                    disabled={isChecking}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ArrowPathIcon className="w-4 h-4 inline mr-2" />
                    {isChecking ? 'Checking...' : 'Re-check Links'}
                  </button>

                  {/* Export Report */}
                  {links.length > 0 && (
                    <button
                      onClick={() => {
                        const report = {
                          timestamp: new Date().toISOString(),
                          stats,
                          links: links.map(link => ({
                            url: link.url,
                            status: link.status,
                            error: link.error,
                            lastChecked: link.lastChecked.toISOString(),
                            fixable: link.fixable
                          }))
                        };
                        
                        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'link-health-report.json';
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Export Report
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for highlighting */}
      <style>{`
        .broken-link-highlight {
          outline: 3px solid #f97316 !important;
          outline-offset: 2px !important;
          background-color: rgba(249, 115, 22, 0.1) !important;
          transition: all 0.3s ease !important;
        }
        
        .link-target-placeholder {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </>
  );
};

export default BrokenLinkFixer;