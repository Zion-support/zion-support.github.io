import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer, PerformanceMetrics, OptimizationSuggestion } from '../utils/performanceOptimizer';
import { accessibilityEnhancer, AccessibilityMetrics, AccessibilityIssue } from '../utils/accessibilityEnhancer';
import { seoOptimizer } from '../utils/seoOptimizer';
import { SEOIssue } from '../types/comprehensive';

interface ComprehensiveSystemDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

/**
 * Comprehensive System Dashboard
 * Advanced monitoring and management interface
 */
const ComprehensiveSystemDashboard: React.FC<ComprehensiveSystemDashboardProps> = ({
  isVisible,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'accessibility' | 'seo' | 'security'>('overview');
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [accessibilityMetrics, setAccessibilityMetrics] = useState<AccessibilityMetrics | null>(null);
  const [seoIssues, setSeoIssues] = useState<SEOIssue[]>([]);
  const [alerts, setAlerts] = useState<Array<{
    id: string;
    type: 'error' | 'warning' | 'info';
    message: string;
    timestamp: number;
  }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Initialize metrics
      const loadMetrics = async () => {
        try {
          const perfMetrics = await performanceOptimizer.getMetrics();
          setMetrics(perfMetrics);

          const accMetrics = await accessibilityEnhancer.getMetrics();
          setAccessibilityMetrics(accMetrics);

          const seoData = await seoOptimizer.analyze();
          setSeoIssues(seoData.issues);
        } catch (error) {
          console.error('Error loading metrics:', error);
        }
      };

      loadMetrics();
    }
  }, [isVisible]);

  const handleOptimize = useCallback(async (type: string) => {
    try {
      switch (type) {
        case 'performance':
          await performanceOptimizer.optimize();
          break;
        case 'accessibility':
          await accessibilityEnhancer.enhance();
          break;
        case 'seo':
          await seoOptimizer.optimize();
          break;
      }
      
      // Refresh metrics
      const perfMetrics = await performanceOptimizer.getMetrics();
      setMetrics(perfMetrics);
    } catch (error) {
      console.error('Error optimizing:', error);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Comprehensive System Dashboard</h2>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Recent Errors</h4>
        {errors.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No errors detected
          </div>
        ) : (
          errors.slice(0, 5).map(error => (
            <div
              key={error.id}
              className={`p-3 rounded-lg border-l-4 ${
                error.resolved
                  ? 'bg-green-50 border-green-500 text-green-800'
                  : 'bg-red-50 border-red-500 text-red-800'
              }`}
            >
              <div className="font-medium">{error.error.message}</div>
              <div className="text-sm mt-1">{error.context.url}</div>
              <div className="text-xs mt-2 text-gray-600">
                {new Date(error.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const CachingTab: React.FC = () => {
  const [statistics, setStatistics] = useState(advancedCachingSystem.getStatistics());
  const [, setCacheInfo] = useState(advancedCachingSystem.getCacheInfo());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistics(advancedCachingSystem.getStatistics());
      setCacheInfo(advancedCachingSystem.getCacheInfo());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Caching System</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{statistics.hitRate.toFixed(2)}%</div>
          <div className="text-sm text-blue-800">Hit Rate</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{formatBytes(statistics.totalSize)}</div>
          <div className="text-sm text-green-800">Cache Size</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-purple-600">{statistics.hits}</div>
          <div className="text-sm text-purple-800">Cache Hits</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-orange-600">{statistics.misses}</div>
          <div className="text-sm text-orange-800">Cache Misses</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-red-600">{statistics.evictions}</div>
          <div className="text-sm text-red-800">Evictions</div>
        </div>
      </div>
    </div>
  );
};

const SecurityTab: React.FC = () => {
  const [events, setEvents] = useState(advancedSecurityManager.getSecurityEvents());
  const [metrics, setMetrics] = useState(advancedSecurityManager.getSecurityMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(advancedSecurityManager.getSecurityEvents());
      setMetrics(advancedSecurityManager.getSecurityMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Security Monitor</h3>
      
      <div className={`p-4 rounded-lg ${
        metrics.threatLevel === 'critical' ? 'bg-red-50 border-red-500' :
        metrics.threatLevel === 'high' ? 'bg-orange-50 border-orange-500' :
        metrics.threatLevel === 'medium' ? 'bg-yellow-50 border-yellow-500' :
        'bg-green-50 border-green-500'
      } border-l-4`}>
        <div className="text-xl font-bold capitalize">{metrics.threatLevel} Threat Level</div>
        <div className="text-sm text-gray-600">Security Status</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{metrics.totalEvents}</div>
          <div className="text-sm text-blue-800">Total Events</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{metrics.blockedEvents}</div>
          <div className="text-sm text-red-800">Blocked Events</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Recent Security Events</h4>
        {events.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No security events detected
          </div>
        ) : (
          events.slice(0, 5).map(event => (
            <div
              key={event.id}
              className={`p-3 rounded-lg border-l-4 ${
                event.severity === 'critical'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : event.severity === 'high'
                  ? 'bg-orange-50 border-orange-500 text-orange-800'
                  : event.severity === 'medium'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{event.description}</div>
              <div className="text-sm mt-1">Type: {event.type} | Severity: {event.severity}</div>
              <div className="text-xs mt-2 text-gray-600">
                {new Date(event.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const ComprehensiveSystemDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const tabs: DashboardTab[] = [
    { id: 'performance', label: 'Performance', icon: '⚡', component: PerformanceTab },
    { id: 'accessibility', label: 'Accessibility', icon: '♿', component: AccessibilityTab },
    { id: 'seo', label: 'SEO', icon: '🔍', component: SEOTab },
    { id: 'errors', label: 'Error Recovery', icon: '🛠️', component: ErrorRecoveryTab },
    { id: 'caching', label: 'Caching', icon: '💾', component: CachingTab },
    { id: 'security', label: 'Security', icon: '🔒', component: SecurityTab },
  ];

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex">
          <div className="w-64 bg-gray-50 border-r">
            <nav className="p-4">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'performance', label: 'Performance', icon: '⚡' },
                { id: 'accessibility', label: 'Accessibility', icon: '♿' },
                { id: 'seo', label: 'SEO', icon: '🔍' },
                { id: 'security', label: 'Security', icon: '🔒' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Performance Score</h3>
                    <div className="text-3xl font-bold text-blue-600">
                      {metrics?.overallScore ? Math.round(metrics.overallScore) : '--'}
                    </div>
                    <div className="text-sm text-blue-700 mt-1">out of 100</div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Accessibility Score</h3>
                    <div className="text-3xl font-bold text-green-600">
                      {accessibilityMetrics?.overallScore ? Math.round(accessibilityMetrics.overallScore) : '--'}
                    </div>
                    <div className="text-sm text-green-700 mt-1">out of 100</div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">SEO Issues</h3>
                    <div className="text-3xl font-bold text-purple-600">
                      {seoIssues.length}
                    </div>
                    <div className="text-sm text-purple-700 mt-1">issues found</div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
                  {alerts.length === 0 ? (
                    <p className="text-gray-500">No recent alerts</p>
                  ) : (
                    alerts.map((alert) => (
                      <div key={alert.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg mb-2">
                        <div className={`w-2 h-2 rounded-full ${
                          alert.type === 'error' ? 'bg-red-500' :
                          alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                          <div className="text-xs mt-2 text-gray-600">
                            {new Date(alert.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'performance' && metrics && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Performance Metrics</h3>
                  <button
                    onClick={() => handleOptimize('performance')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Optimize Performance
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">LCP</span>
                        <span className="font-semibold">{metrics.lcp}ms</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">FID</span>
                        <span className="font-semibold">{metrics.fid}ms</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">CLS</span>
                        <span className="font-semibold">{metrics.cls}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Optimization Suggestions</h4>
                    <div className="space-y-2">
                      {metrics.suggestions?.slice(0, 3).map((suggestion, index) => (
                        <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-sm text-yellow-800">{suggestion.description}</p>
                          <div className="text-xs text-yellow-600 mt-1">
                            Impact: {suggestion.impact}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'accessibility' && accessibilityMetrics && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Accessibility Metrics</h3>
                  <button
                    onClick={() => handleOptimize('accessibility')}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Enhance Accessibility
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h4>
                    <div className="space-y-3">
                      {accessibilityMetrics.issues?.slice(0, 5).map((issue: any, index: number) => (
                        <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm font-medium text-red-800">{issue.type}</p>
                          <p className="text-xs text-red-600 mt-1">{issue.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Improvements</h4>
                    <div className="space-y-2">
                      {accessibilityMetrics.improvements?.slice(0, 3).map((improvement: string, index: number) => (
                        <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-green-800">{improvement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">SEO Analysis</h3>
                  <button
                    onClick={() => handleOptimize('seo')}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Optimize SEO
                  </button>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h4>
                  <div className="space-y-3">
                    {seoIssues.slice(0, 5).map((issue, index) => (
                      <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm font-medium text-yellow-800">{issue.type}</p>
                        <p className="text-xs text-yellow-600 mt-1">{issue.description}</p>
                        <div className="text-xs text-yellow-600 mt-1">
                          Priority: {issue.priority}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Security Dashboard</h3>
                <div className="bg-white border rounded-lg p-6">
                  <p className="text-gray-600">Security monitoring features coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;