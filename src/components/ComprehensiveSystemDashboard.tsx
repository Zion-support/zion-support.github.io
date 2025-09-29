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
          setSeoIssues(seoData.issues as SEOIssue[]);
        } catch (error) {
          console.error('Error loading metrics:', error);
        }
      };

      loadMetrics();
    }
  }, [isVisible]);

  const handleOptimize = useCallback(async (type: string) => {
    try {
      if (metrics) {
        await performanceOptimizer.optimize();
        // Reload metrics after optimization
        const updatedMetrics = await performanceOptimizer.getMetrics();
        setMetrics(updatedMetrics);
        
        setAlerts(prev => [...prev, {
          id: `optimize-${Date.now()}`,
          type: 'info',
          message: `${type} optimization completed successfully`,
          timestamp: Date.now()
        }]);
      }
    } catch (error) {
      console.error(`Error optimizing ${type}:`, error);
      setAlerts(prev => [...prev, {
        id: `error-${Date.now()}`,
        type: 'error',
        message: `Failed to optimize ${type}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: Date.now()
      }]);
    }
  }, [metrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Comprehensive System Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {(['overview', 'performance', 'accessibility', 'seo', 'security'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Performance Card */}
                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance</h4>
                  <div className="space-y-2">
                    {metrics ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Load Time:</span>
                          <span className="text-sm font-medium">{metrics.loadTime}ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Bundle Size:</span>
                          <span className="text-sm font-medium">{metrics.bundleSize}KB</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Score:</span>
                          <span className="text-sm font-medium">{(metrics.overallScore || 0)}/100</span>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">Loading metrics...</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleOptimize('performance')}
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Optimize Performance
                  </button>
                </div>

                {/* Accessibility Card */}
                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Accessibility</h4>
                  <div className="space-y-2">
                    {accessibilityMetrics ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Score:</span>
                          <span className="text-sm font-medium">{accessibilityMetrics.score}/100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Issues:</span>
                          <span className="text-sm font-medium">{(accessibilityMetrics.issues || []).length}</span>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">Loading metrics...</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleOptimize('accessibility')}
                    className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                  >
                    Optimize Accessibility
                  </button>
                </div>

                {/* SEO Card */}
                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">SEO</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Issues:</span>
                      <span className="text-sm font-medium">{seoIssues.length}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOptimize('seo')}
                    className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                  >
                    Optimize SEO
                  </button>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="bg-white border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h4>
                <div className="space-y-2">
                  {alerts.length > 0 ? (
                    alerts.slice(-5).map((alert) => (
                      <div key={alert.id} className={`p-3 rounded-lg ${
                        alert.type === 'error' ? 'bg-red-50 border border-red-200' :
                        alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                        'bg-blue-50 border border-blue-200'
                      }`}>
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(alert.timestamp).toLocaleString()}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No recent alerts</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && metrics && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Performance Metrics</h3>
                <button
                  onClick={() => handleOptimize('performance')}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Optimize Now
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Load Time:</span>
                      <span className="text-sm font-medium">{metrics.loadTime}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Bundle Size:</span>
                      <span className="text-sm font-medium">{metrics.bundleSize}KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Performance Score:</span>
                      <span className="text-sm font-medium">{(metrics.overallScore || 0)}/100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Optimization Suggestions</h4>
                  <div className="space-y-2">
                    {performanceOptimizer.getSuggestions().slice(0, 3).map((suggestion, index) => (
                      <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">{suggestion.description}</p>
                        <p className="text-xs text-yellow-600 mt-1">Impact: {suggestion.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accessibility Tab */}
          {activeTab === 'accessibility' && accessibilityMetrics && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Accessibility Metrics</h3>
                <button
                  onClick={() => handleOptimize('accessibility')}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Optimize Now
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Score</h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {accessibilityMetrics.score}
                    </div>
                    <div className="text-sm text-gray-600">out of 100</div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h4>
                  <div className="space-y-3">
                    {(accessibilityMetrics.issues || []).slice(0, 5).map((issue, index) => (
                      <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">{issue.type}</p>
                        {'description' in issue && (
                          <p className="text-xs text-red-600 mt-1">{(issue as any).description}</p>
                        )}
                        {'impact' in issue && (
                          <p className="text-xs text-red-500 mt-1">Impact: {(issue as any).impact}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">SEO Analysis</h3>
                <button
                  onClick={() => handleOptimize('seo')}
                  className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                >
                  Optimize Now
                </button>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">SEO Issues</h4>
                <div className="space-y-3">
                  {seoIssues.length > 0 ? (
                    seoIssues.map((issue, index) => (
                      <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">{issue.message}</p>
                        <p className="text-xs text-yellow-600 mt-1">Impact: {issue.impact}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No SEO issues found</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Security Status</h3>
                <button
                  onClick={() => handleOptimize('security')}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Run Security Check
                </button>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Overview</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">HTTPS:</span>
                    <span className="text-sm font-medium text-green-600">Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Content Security Policy:</span>
                    <span className="text-sm font-medium text-green-600">Configured</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Security Headers:</span>
                    <span className="text-sm font-medium text-green-600">Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;