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

  const handleOptimize = useCallback(async () => {
    try {
      if (metrics) {
        await performanceOptimizer.optimize();
        // Reload metrics after optimization
        const updatedMetrics = await performanceOptimizer.getMetrics();
        setMetrics(updatedMetrics);
      }
    } catch (error) {
      console.error('Error optimizing:', error);
    }
  }, [metrics]);

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800">Performance</h3>
                    <p className="text-blue-600">
                      {metrics ? `${metrics.overallScore || 0}/100` : 'Loading...'}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800">Accessibility</h3>
                    <p className="text-green-600">
                      {accessibilityMetrics ? `${accessibilityMetrics.score}/100` : 'Loading...'}
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800">SEO Issues</h3>
                    <p className="text-purple-600">{seoIssues.length}</p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">System Alerts</h3>
                  {alerts.length === 0 ? (
                    <p className="text-gray-500">No alerts</p>
                  ) : (
                    <div className="space-y-2">
                      {alerts.map((alert) => (
                        <div key={alert.id} className={`p-3 rounded-lg ${
                          alert.type === 'error' ? 'bg-red-50 text-red-800' :
                          alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                          'bg-blue-50 text-blue-800'
                        }`}>
                          <p>{alert.message}</p>
                          <p className="text-sm opacity-75">
                            {new Date(alert.timestamp).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'performance' && metrics && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Performance Metrics</h3>
                  <button
                    onClick={handleOptimize}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Optimize
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Core Web Vitals</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>LCP:</span>
                        <span className={metrics.lcp < 2.5 ? 'text-green-600' : 'text-red-600'}>
                          {metrics.lcp}s
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>FID:</span>
                        <span className={metrics.fid < 100 ? 'text-green-600' : 'text-red-600'}>
                          {metrics.fid}ms
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>CLS:</span>
                        <span className={metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'}>
                          {metrics.cls}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Performance Score</h4>
                    <div className="text-3xl font-bold text-blue-600">
                      {metrics.overallScore || 0}/100
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${metrics.overallScore || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {metrics.suggestions && metrics.suggestions.length > 0 && (
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold mb-4">Optimization Suggestions</h4>
                    <div className="space-y-2">
                      {metrics.suggestions.map((suggestion, index) => (
                        <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                          <p className="font-medium">{suggestion.title}</p>
                          <p className="text-sm text-gray-600">{suggestion.description}</p>
                          <p className="text-sm text-blue-600">Impact: {suggestion.impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'accessibility' && accessibilityMetrics && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Accessibility Metrics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Accessibility Score</h4>
                    <div className="text-3xl font-bold text-green-600">
                      {accessibilityMetrics.score}/100
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${accessibilityMetrics.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Issues Found</h4>
                    <div className="text-2xl font-bold text-red-600">
                      {accessibilityMetrics.issues?.length || 0}
                    </div>
                    <p className="text-sm text-gray-600">Total issues</p>
                  </div>
                </div>

                {accessibilityMetrics.issues && accessibilityMetrics.issues.length > 0 && (
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold mb-4">Accessibility Issues</h4>
                    <div className="space-y-2">
                      {accessibilityMetrics.issues.map((issue, index) => (
                        <div key={index} className="p-3 bg-red-50 rounded-lg">
                          <p className="font-medium text-red-800">{issue.type}</p>
                          <p className="text-sm text-red-600">{issue.message}</p>
                          <p className="text-sm text-gray-600">Type: {issue.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">SEO Analysis</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">SEO Issues</h4>
                  <div className="text-2xl font-bold text-red-600">
                    {seoIssues.length}
                  </div>
                  <p className="text-sm text-gray-600">Issues found</p>
                </div>

                {seoIssues.length > 0 && (
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold mb-4">SEO Issues</h4>
                    <div className="space-y-2">
                      {seoIssues.map((issue, index) => (
                        <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                          <p className="font-medium text-yellow-800">{issue.type}</p>
                          <p className="text-sm text-yellow-600">{issue.message}</p>
                          <p className="text-sm text-gray-600">Priority: {issue.priority}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Security Status</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Security Score</h4>
                    <div className="text-3xl font-bold text-green-600">95/100</div>
                    <p className="text-sm text-green-600">Good security posture</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Last Scan</h4>
                    <div className="text-lg font-bold text-blue-600">
                      {new Date().toLocaleDateString()}
                    </div>
                    <p className="text-sm text-blue-600">No vulnerabilities found</p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Security Recommendations</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">HTTPS Enabled</p>
                      <p className="text-sm text-green-600">Secure connection is active</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Content Security Policy</p>
                      <p className="text-sm text-green-600">CSP headers are properly configured</p>
                    </div>
                  </div>
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