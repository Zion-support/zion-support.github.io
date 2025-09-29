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
          setSeoIssues(seoData.issues.map(issue => ({
            type: 'warning' as const,
            message: issue.message,
            impact: 'medium' as const
          })));
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
          await performanceOptimizer.startMonitoring();
          break;
        case 'accessibility':
          // Accessibility enhancer doesn't have enhance method, skip
          break;
        case 'seo':
          // SEO optimizer doesn't have optimize method, skip
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
                      {performanceOptimizer.getSuggestions().slice(0, 3).map((suggestion, index) => (
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
                          <p className="text-xs text-red-600 mt-1">{issue.message}</p>
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
                        <p className="text-xs text-yellow-600 mt-1">{issue.message}</p>
                        <div className="text-xs text-yellow-600 mt-1">
                          Impact: {issue.impact || 'medium'}
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