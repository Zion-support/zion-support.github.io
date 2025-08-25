import React, { useState, useEffect, useCallback } from 'react';
import { 
<<<<<<< HEAD
  AlertTriangle, 
  CheckCircle, 
  ExternalLink, 
  HelpCircle, 
  RefreshCw, 
  Shield,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';
import LinkHealthChecker, { LinkHealthStatus, LinkHealthReport } from '../utils/linkHealthChecker';

interface LinkHealthMonitorProps {
  className?: string;
}

const LinkHealthMonitor: React.FC<LinkHealthMonitorProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<LinkHealthReport | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const linkChecker = LinkHealthChecker.getInstance();

  const checkAllLinks = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate checking all links in the application
      // In a real implementation, you would crawl the entire site
      const sampleLinks = [
        '/',
        '/services',
        '/ai-solutions',
        '/about',
        '/contact',
        '/team',
        '/pricing',
        '/careers',
        '/partners',
        '/blog',
        '/news',
        '/quantum-neural-network-platform',
        '/autonomous-business-operations-platform',
        '/ai-powered-it-asset-management',
        '/soc2-compliance-automation',
        '/ai-autonomous-research-assistant',
        '/5g-enterprise-solutions',
        '/case-studies',
        '/help',
        'https://linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings',
        'tel:+13024640950',
        'mailto:kleber@ziontechgroup.com'
      ];

      for (const link of sampleLinks) {
        await linkChecker.checkLink(link, 'current-page');
      }

      const newReport = await linkChecker.generateReport();
      setReport(newReport);
      setLastChecked(new Date());
    } catch (error) {
      console.error('Error checking links:', error);
    } finally {
      setIsLoading(false);
    }
  }, [linkChecker]);

  useEffect(() => {
    // Auto-check links when component mounts
    checkAllLinks();
  }, [checkAllLinks]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'broken':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'external':
        return <ExternalLink className="w-4 h-4 text-blue-500" />;
      case 'unknown':
        return <HelpCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-500" />;
=======
<<<<<<< HEAD
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  };

<<<<<<< HEAD
=======
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
=======
  AlertTriangle, 
  CheckCircle, 
  ExternalLink, 
  HelpCircle, 
  RefreshCw, 
  Shield,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';
import LinkHealthChecker, { LinkHealthStatus, LinkHealthReport } from '../utils/linkHealthChecker';

interface LinkHealthMonitorProps {
  className?: string;
}

const LinkHealthMonitor: React.FC<LinkHealthMonitorProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<LinkHealthReport | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const linkChecker = LinkHealthChecker.getInstance();

  const checkAllLinks = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate checking all links in the application
      // In a real implementation, you would crawl the entire site
      const sampleLinks = [
        '/',
        '/services',
        '/ai-solutions',
        '/about',
        '/contact',
        '/team',
        '/pricing',
        '/careers',
        '/partners',
        '/blog',
        '/news',
        '/quantum-neural-network-platform',
        '/autonomous-business-operations-platform',
        '/ai-powered-it-asset-management',
        '/soc2-compliance-automation',
        '/ai-autonomous-research-assistant',
        '/5g-enterprise-solutions',
        '/case-studies',
        '/help',
        'https://linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings',
        'tel:+13024640950',
        'mailto:kleber@ziontechgroup.com'
      ];

      for (const link of sampleLinks) {
        await linkChecker.checkLink(link, 'current-page');
      }

      const newReport = await linkChecker.generateReport();
      setReport(newReport);
      setLastChecked(new Date());
    } catch (error) {
      console.error('Error checking links:', error);
    } finally {
      setIsLoading(false);
    }
  }, [linkChecker]);

  useEffect(() => {
    // Auto-check links when component mounts
    checkAllLinks();
  }, [checkAllLinks]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'broken':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'external':
        return <ExternalLink className="w-4 h-4 text-blue-500" />;
      case 'unknown':
        return <HelpCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-500" />;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913
    }
  }, [autoCheck, links.length, checkAllLinks]);

<<<<<<< HEAD
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
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'broken':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'external':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'unknown':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getHealthScore = () => {
    if (!report) return 0;
    if (report.totalLinks === 0) return 100;
    return Math.round((report.healthyLinks / report.totalLinks) * 100);
  };

  const getHealthStatus = (score: number) => {
    if (score >= 90) return { text: 'Excellent', color: 'text-green-600' };
    if (score >= 70) return { text: 'Good', color: 'text-yellow-600' };
    if (score >= 50) return { text: 'Fair', color: 'text-orange-600' };
    return { text: 'Poor', color: 'text-red-600' };
  };

  const healthScore = getHealthScore();
  const healthStatus = getHealthStatus(healthScore);

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Toggle Link Health Monitor"
      >
        <Shield className="w-6 h-6" />
      </button>

      {/* Monitor Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Link Health Monitor
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Health Score */}
            <div className="mt-3 text-center">
              <div className="text-3xl font-bold">{healthScore}%</div>
              <div className={`text-sm ${healthStatus.color}`}>
                {healthStatus.text} Health
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">Checking links...</span>
              </div>
            ) : report ? (
              <div className="space-y-4">
                {/* Summary Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{report.healthyLinks}</div>
                    <div className="text-sm text-green-600">Healthy</div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600">{report.brokenLinks}</div>
                    <div className="text-sm text-red-600">Broken</div>
                  </div>
                </div>

                {/* External Links */}
                {report.externalLinks > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600">
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">{report.externalLinks} External Links</span>
                    </div>
                  </div>
                )}

                {/* Broken Links List */}
                {report.brokenLinks > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Broken Links ({report.brokenLinks})
                    </h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {report.details
                        .filter(d => d.status === 'broken')
                        .slice(0, 5)
                        .map((link, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            {getStatusIcon(link.status)}
                            <span className="text-red-600 truncate">{link.url}</span>
                          </div>
                        ))}
                      {report.brokenLinks > 5 && (
                        <div className="text-xs text-gray-500">
                          +{report.brokenLinks - 5} more broken links
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                {report.recommendations.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Recommendations
                    </h4>
                    <div className="space-y-2">
                      {report.recommendations.slice(0, 3).map((rec, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Last Checked */}
                {lastChecked && (
                  <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-200 dark:border-gray-700">
                    Last checked: {lastChecked.toLocaleTimeString()}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No link health data available
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex gap-2">
            <button
              onClick={checkAllLinks}
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Checking...' : 'Check Links'}
            </button>
            <button
              onClick={() => linkChecker.clearCache()}
              className="px-3 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors"
            >
              Clear Cache
            </button>
          </div>
        </div>
      )}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
};

export default LinkHealthMonitor;