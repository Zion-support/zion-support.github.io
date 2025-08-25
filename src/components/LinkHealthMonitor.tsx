import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExclamationTriangleIcon, 
  CheckCircleIcon, 
  XMarkIcon,
  ArrowPathIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

interface LinkStatus {
  url: string;
  status: 'healthy' | 'broken' | 'checking' | 'unknown';
  statusCode?: number;
  error?: string;
  lastChecked: Date;
  parentPage?: string;
  suggestedFix?: string;
}

interface LinkHealthMonitorProps {
  className?: string;
  showDetails?: boolean;
  autoCheck?: boolean;
}

export const LinkHealthMonitor: React.FC<LinkHealthMonitorProps> = ({
  className = '',
  showDetails = false,
  autoCheck = true
}) => {
  const [links, setLinks] = useState<LinkStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [showBrokenOnly, setShowBrokenOnly] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    healthy: 0,
    broken: 0,
    unknown: 0
  });

  // Sample broken links from analysis report
  const sampleBrokenLinks = [
    'https://linkedin.com/company/ziontechgroup',
    'https://twitter.com/ziontechgroup',
    'https://github.com/Zion-Holdings',
    'https://youtube.com/@ziontechgroup',
    'https://facebook.com/ziontechgroup',
    'https://instagram.com/ziontechgroup',
    'https://discord.gg/ziontechgroup',
    'https://twitch.tv/ziontechgroup',
    'https://ziontechgroup.com/quantum-neural-network-platform/',
    'https://ziontechgroup.com/autonomous-business-operations-platform/',
    'https://ziontechgroup.com/ai-powered-it-asset-management/',
    'https://ziontechgroup.com/ai-autonomous-business-manager-2029/',
    'https://ziontechgroup.com/ai-autonomous-business-platform-2026/',
    'https://ziontechgroup.com/ai-autonomous-code-review/',
    'https://ziontechgroup.com/ai-autonomous-creative-director/',
    'https://ziontechgroup.com/ai-autonomous-data/',
    'https://ziontechgroup.com/ai-autonomous-decision-platform/',
    'https://ziontechgroup.com/ai-autonomous-devops/',
    'https://ziontechgroup.com/ai-autonomous-education-professor/',
    'https://ziontechgroup.com/ai-autonomous-healthcare-physician/',
    'https://ziontechgroup.com/ai-autonomous-learning-system/',
    'https://ziontechgroup.com/ai-autonomous-legal-counsel/',
    'https://ziontechgroup.com/ai-autonomous-logistics/',
    'https://ziontechgroup.com/ai-autonomous-manufacturing/',
    'https://ziontechgroup.com/ai-autonomous-research/',
    'https://ziontechgroup.com/ai-autonomous-robotics/',
    'https://ziontechgroup.com/ai-autonomous-scientific-researcher/',
    'https://ziontechgroup.com/ai-autonomous-security/',
    'https://ziontechgroup.com/ai-autonomous-systems-platform/',
    'https://ziontechgroup.com/ai-autonomous-testing/',
    'https://ziontechgroup.com/ai-autonomous-vehicle-platform/',
    'https://ziontechgroup.com/ai-autonomous-vehicle/',
    'https://ziontechgroup.com/ai-autonomous-vehicles-platform/',
    'https://ziontechgroup.com/ai-autonomous-vehicles/',
    'https://ziontechgroup.com/ai-autonomous-venture-capitalist/',
    'https://ziontechgroup.com/ai-biomedical-research/',
    'https://ziontechgroup.com/ai-biotech-drug-discovery/',
    'https://ziontechgroup.com/ai-blockchain-governance/',
    'https://ziontechgroup.com/ai-brain-computer-interface/',
    'https://ziontechgroup.com/ai-brain-interface/',
    'https://ziontechgroup.com/ai-business-intelligence-elite-2026/',
    'https://ziontechgroup.com/ai-business-intelligence-suite-2029/',
    'https://ziontechgroup.com/ai-climate-prediction-engine/',
    'https://ziontechgroup.com/ai-climate-prediction-platform/',
    'https://ziontechgroup.com/ai-climate-prediction/',
    'https://ziontechgroup.com/ai-code-generation-enterprise/',
    'https://ziontechgroup.com/ai-compliance-automation/',
    'https://ziontechgroup.com/ai-computer-vision-platform/',
    'https://ziontechgroup.com/ai-consciousness-evolution-platform/',
    'https://ziontechgroup.com/ai-consciousness-simulation-platform/',
    'https://ziontechgroup.com/ai-consciousness-simulation/',
    'https://ziontechgroup.com/ai-consciousness-simulator/',
    'https://ziontechgroup.com/ai-content-creation-revolution/',
    'https://ziontechgroup.com/ai-content-creation/',
    'https://ziontechgroup.com/ai-content-factory/',
    'https://ziontechgroup.com/ai-content-generation-automation-2033/',
    'https://ziontechgroup.com/ai-content-generation-pro-2029/',
    'https://ziontechgroup.com/ai-content-generation-automation-2033/',
    'https://ziontechgroup.com/ai-content-generation-pro-2029/',
    'https://ziontechgroup.com/ai-consciousness-evolution-2025/',
    'https://ziontechgroup.com/ai-consciousness-evolution-2029/'
  ];

  const initializeLinks = useCallback(() => {
    const initialLinks: LinkStatus[] = sampleBrokenLinks.map(url => ({
      url,
      status: 'unknown',
      lastChecked: new Date(),
      parentPage: 'ziontechgroup.com',
      suggestedFix: getSuggestedFix(url)
    }));

    setLinks(initialLinks);
    updateStats(initialLinks);
  }, []);

  const getSuggestedFix = (url: string): string => {
    if (url.includes('linkedin.com')) {
      return 'Update LinkedIn company URL or remove if company page doesn\'t exist';
    }
    if (url.includes('twitter.com')) {
      return 'Update Twitter handle or remove if account doesn\'t exist';
    }
    if (url.includes('github.com')) {
      return 'Update GitHub organization URL or remove if organization doesn\'t exist';
    }
    if (url.includes('youtube.com')) {
      return 'Update YouTube channel URL or remove if channel doesn\'t exist';
    }
    if (url.includes('facebook.com')) {
      return 'Update Facebook page URL or remove if page doesn\'t exist';
    }
    if (url.includes('instagram.com')) {
      return 'Update Instagram handle or remove if account doesn\'t exist';
    }
    if (url.includes('discord.gg')) {
      return 'Update Discord invite link or remove if server doesn\'t exist';
    }
    if (url.includes('twitch.tv')) {
      return 'Update Twitch channel URL or remove if channel doesn\'t exist';
    }
    if (url.includes('ziontechgroup.com')) {
      return 'Create missing page or implement redirect to similar content';
    }
    return 'Review and update link or remove if no longer relevant';
  };

  const updateStats = (currentLinks: LinkStatus[]) => {
    const total = currentLinks.length;
    const healthy = currentLinks.filter(l => l.status === 'healthy').length;
    const broken = currentLinks.filter(l => l.status === 'broken').length;
    const unknown = currentLinks.filter(l => l.status === 'unknown').length;

    setStats({ total, healthy, broken, unknown });
  };

  const checkLinkHealth = useCallback(async (url: string): Promise<LinkStatus> => {
    try {
      const response = await fetch(url, { 
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache'
      });
      
      return {
        url,
        status: response.ok ? 'healthy' : 'broken',
        statusCode: response.status,
        lastChecked: new Date(),
        parentPage: 'ziontechgroup.com',
        suggestedFix: getSuggestedFix(url)
      };
    } catch (error) {
      return {
        url,
        status: 'broken',
        error: error instanceof Error ? error.message : 'Unknown error',
        lastChecked: new Date(),
        parentPage: 'ziontechgroup.com',
        suggestedFix: getSuggestedFix(url)
      };
    }
  }, []);

  const checkAllLinks = useCallback(async () => {
    setIsChecking(true);
    const updatedLinks = await Promise.all(
      links.map(async (link) => {
        if (link.status === 'unknown' || link.status === 'broken') {
          return await checkLinkHealth(link.url);
        }
        return link;
      })
    );

    setLinks(updatedLinks);
    updateStats(updatedLinks);
    setIsChecking(false);
  }, [links, checkLinkHealth]);

  const fixLink = useCallback((url: string, fixType: 'redirect' | 'remove' | 'update') => {
    setLinks(prev => prev.map(link => 
      link.url === url 
        ? { ...link, suggestedFix: `Action: ${fixType} - ${link.suggestedFix}` }
        : link
    ));
  }, []);

  useEffect(() => {
    initializeLinks();
  }, [initializeLinks]);

  useEffect(() => {
    if (autoCheck && links.length > 0) {
      const timer = setTimeout(() => {
        checkAllLinks();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoCheck, links.length, checkAllLinks]);

  const filteredLinks = showBrokenOnly 
    ? links.filter(link => link.status === 'broken' || link.status === 'unknown')
    : links;

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <WrenchScrewdriverIcon className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Link Health Monitor
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor and fix broken links across the website
            </p>
          </div>
        </div>
        
        <button
          onClick={checkAllLinks}
          disabled={isChecking}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <ArrowPathIcon className={`w-5 h-5 ${isChecking ? 'animate-spin' : ''}`} />
          {isChecking ? 'Checking...' : 'Check All'}
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Links</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{stats.healthy}</div>
          <div className="text-sm text-green-600 dark:text-green-400">Healthy</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">{stats.broken}</div>
          <div className="text-sm text-red-600 dark:text-red-400">Broken</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">{stats.unknown}</div>
          <div className="text-sm text-yellow-600 dark:text-yellow-400">Unknown</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showBrokenOnly}
            onChange={(e) => setShowBrokenOnly(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Show broken/unknown only
          </span>
        </label>
      </div>

      {/* Links List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {filteredLinks.map((link, index) => (
            <motion.div
              key={link.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-lg border ${
                link.status === 'healthy' 
                  ? 'border-green-200 bg-green-50 dark:bg-green-900/20' 
                  : link.status === 'broken'
                  ? 'border-red-200 bg-red-50 dark:bg-red-900/20'
                  : 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {link.status === 'healthy' && (
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    )}
                    {link.status === 'broken' && (
                      <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                    )}
                    {link.status === 'unknown' && (
                      <InformationCircleIcon className="w-5 h-5 text-yellow-600" />
                    )}
                    
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {link.status.charAt(0).toUpperCase() + link.status.slice(1)}
                    </span>
                    
                    {link.statusCode && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        ({link.statusCode})
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 break-all mb-2">
                    {link.url}
                  </div>
                  
                  {link.error && (
                    <div className="text-xs text-red-600 dark:text-red-400 mb-2">
                      Error: {link.error}
                    </div>
                  )}
                  
                  {link.suggestedFix && (
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      <strong>Fix:</strong> {link.suggestedFix}
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Last checked: {link.lastChecked.toLocaleString()}
                  </div>
                </div>
                
                {link.status !== 'healthy' && (
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => fixLink(link.url, 'redirect')}
                      className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded"
                    >
                      Redirect
                    </button>
                    <button
                      onClick={() => fixLink(link.url, 'update')}
                      className="text-xs bg-green-100 hover:bg-green-200 text-green-700 px-2 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => fixLink(link.url, 'remove')}
                      className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Summary
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {stats.broken > 0 
            ? `Found ${stats.broken} broken links that need immediate attention. Consider implementing redirects or removing outdated links.`
            : 'All links are healthy! Your website is in good shape.'
          }
        </p>
        {stats.broken > 0 && (
          <div className="mt-2 text-xs text-red-600 dark:text-red-400">
            <strong>Priority:</strong> Fix broken links to improve user experience and SEO performance.
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkHealthMonitor;