import React, { useState, useEffect, useCallback } from 'react';
import { 
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
    }
  };

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
    </div>
  );
};

export default LinkHealthMonitor;