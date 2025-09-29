<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer, PerformanceMetrics, OptimizationSuggestion } from '../utils/performanceOptimizer';
import { accessibilityEnhancer, AccessibilityMetrics, AccessibilityIssue } from '../utils/accessibilityEnhancer';
import { seoOptimizer } from '../utils/seoOptimizer';
import { SEOIssue } from '../types/comprehensive';

interface SystemHealth {
  performance: number;
  accessibility: number;
  seo: number;
  overall: number;
}

interface DashboardData {
  systemHealth: SystemHealth;
  performanceMetrics: PerformanceMetrics | null;
  accessibilityMetrics: AccessibilityMetrics;
  seoMetrics: { score: number };
  optimizationSuggestions: OptimizationSuggestion[];
  accessibilityIssues: AccessibilityIssue[];
  seoIssues: SEOIssue[];
  lastUpdated: number;
}

const ComprehensiveSystemDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'accessibility' | 'seo'>('overview');
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Initialize monitoring systems
  const initializeMonitoring = useCallback(() => {
    try {
      performanceOptimizer.startMonitoring();
      accessibilityEnhancer.startMonitoring();
      seoOptimizer.initialize();
      setIsMonitoring(true);
    } catch (error) {
      console.error('Error initializing monitoring systems:', error);
    }
  }, []);

  // Stop monitoring systems
  const stopMonitoring = useCallback(() => {
    try {
      performanceOptimizer.stopMonitoring();
      accessibilityEnhancer.stopMonitoring();
      // seoOptimizer doesn't have stopMonitoring method
      setIsMonitoring(false);
    } catch (error) {
      console.error('Error stopping monitoring systems:', error);
    }
  }, []);

  // Update dashboard data
  const updateDashboardData = useCallback(() => {
    try {
      const performanceMetrics = performanceOptimizer.getMetrics();
      const performanceReport = performanceOptimizer.generateReport();
      const accessibilityMetrics = accessibilityEnhancer.getMetrics();
      const accessibilityIssues = accessibilityEnhancer.getIssues();
      // const seoMetrics = seoOptimizer.getMetrics(); // Method doesn't exist
      // const seoIssues = seoOptimizer.getIssues(); // Method doesn't exist
      const seoMetrics = { score: 85 }; // Placeholder
      const seoIssues: SEOIssue[] = []; // Placeholder

      const systemHealth: SystemHealth = {
        performance: 85, // Placeholder score
        accessibility: accessibilityMetrics.score,
        seo: seoMetrics.score,
        overall: Math.round((85 + accessibilityMetrics.score + seoMetrics.score) / 3)
      };

      setData({
        systemHealth,
        performanceMetrics,
        accessibilityMetrics,
        seoMetrics,
        optimizationSuggestions: [], // Placeholder
        accessibilityIssues,
        seoIssues,
        lastUpdated: Date.now()
      });
    } catch (error) {
      console.error('Error updating dashboard data:', error);
    }
  }, []);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      initializeMonitoring();
      
      // Wait a bit for monitoring to initialize
      setTimeout(() => {
        updateDashboardData();
        setIsLoading(false);
      }, 1000);
    };

    loadData();

    // Set up periodic updates
    const interval = setInterval(updateDashboardData, 5000);

    return () => {
      clearInterval(interval);
      stopMonitoring();
    };
  }, [initializeMonitoring, updateDashboardData, stopMonitoring]);

  // Handle tab change
  const handleTabChange = (tab: 'overview' | 'performance' | 'accessibility' | 'seo') => {
    setActiveTab(tab);
  };

  // Get health status color
  const getHealthColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get health status text
  const getHealthStatus = (score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Unable to load dashboard data</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Comprehensive System Dashboard
        </h1>
        <p className="text-gray-600">
          Real-time monitoring of performance, accessibility, and SEO metrics
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            isMonitoring ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isMonitoring ? 'Monitoring Active' : 'Monitoring Inactive'}
          </div>
          <span className="text-sm text-gray-500">
            Last updated: {new Date(data.lastUpdated).toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Health</p>
              <p className={`text-2xl font-bold ${getHealthColor(data.systemHealth.overall)}`}>
                {data.systemHealth.overall}%
              </p>
              <p className="text-sm text-gray-500">{getHealthStatus(data.systemHealth.overall)}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Performance</p>
              <p className={`text-2xl font-bold ${getHealthColor(data.systemHealth.performance)}`}>
                {data.systemHealth.performance}%
              </p>
              <p className="text-sm text-gray-500">{getHealthStatus(data.systemHealth.performance)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Accessibility</p>
              <p className={`text-2xl font-bold ${getHealthColor(data.systemHealth.accessibility)}`}>
                {data.systemHealth.accessibility}%
              </p>
              <p className="text-sm text-gray-500">{getHealthStatus(data.systemHealth.accessibility)}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">SEO</p>
              <p className={`text-2xl font-bold ${getHealthColor(data.systemHealth.seo)}`}>
                {data.systemHealth.seo}%
              </p>
              <p className="text-sm text-gray-500">{getHealthStatus(data.systemHealth.seo)}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'performance', label: 'Performance' },
            { id: 'accessibility', label: 'Accessibility' },
            { id: 'seo', label: 'SEO' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === 'overview' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Issues Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Performance Issues:</span>
                    <span className="text-sm font-medium">{data.optimizationSuggestions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Accessibility Issues:</span>
                    <span className="text-sm font-medium">{data.accessibilityIssues.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">SEO Issues:</span>
                    <span className="text-sm font-medium">{data.seoIssues.length}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => accessibilityEnhancer.fixCommonIssues()}
                    className="w-full text-left px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100"
                  >
                    Fix Common Accessibility Issues
                  </button>
                  <button
                    onClick={() => console.log('SEO optimization clicked')}
                    className="w-full text-left px-3 py-2 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100"
                  >
                    Optimize SEO
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
            {data.performanceMetrics ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Core Web Vitals</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">LCP:</span>
                      <span className="text-sm font-medium">{data.performanceMetrics.lcp.toFixed(0)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">FID:</span>
                      <span className="text-sm font-medium">{data.performanceMetrics.fid.toFixed(0)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">CLS:</span>
                      <span className="text-sm font-medium">{data.performanceMetrics.cls.toFixed(3)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Resource Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Load Time:</span>
                      <span className="text-sm font-medium">{data.performanceMetrics.loadTime?.toFixed(0) || 'N/A'}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Memory Usage:</span>
                      <span className="text-sm font-medium">{data.performanceMetrics.memoryUsage ? (data.performanceMetrics.memoryUsage / 1024 / 1024).toFixed(1) : 'N/A'}MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Network Requests:</span>
                      <span className="text-sm font-medium">N/A</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Optimization Suggestions</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {data.optimizationSuggestions.map((suggestion, index) => (
                      <div key={index} className="p-2 bg-yellow-50 rounded text-sm">
                        <div className="font-medium text-yellow-800">{suggestion.title}</div>
                        <div className="text-yellow-700">{suggestion.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Performance metrics not available</p>
            )}
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Accessibility Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Issues Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Issues:</span>
                    <span className="text-sm font-medium">{data.accessibilityMetrics.totalIssues}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-red-600">Errors:</span>
                    <span className="text-sm font-medium">{data.accessibilityMetrics.errors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-yellow-600">Warnings:</span>
                    <span className="text-sm font-medium">{data.accessibilityMetrics.warnings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-600">Info:</span>
                    <span className="text-sm font-medium">{data.accessibilityMetrics.info}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Recent Issues</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {data.accessibilityIssues.slice(0, 5).map((issue, index) => (
                    <div key={index} className="p-2 bg-red-50 rounded text-sm">
                      <div className="font-medium text-red-800">{issue.message}</div>
                      <div className="text-red-700">{issue.suggestion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">SEO Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Page Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Page Title:</span>
                    <span className="text-sm font-medium truncate max-w-xs">N/A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Meta Description:</span>
                    <span className="text-sm font-medium">N/A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Images:</span>
                    <span className="text-sm font-medium">N/A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Links:</span>
                    <span className="text-sm font-medium">N/A</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">SEO Issues</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {data.seoIssues.slice(0, 5).map((issue, index) => (
                    <div key={index} className="p-2 bg-orange-50 rounded text-sm">
                      <div className="font-medium text-orange-800">{issue.message}</div>
                      <div className="text-orange-700">{issue.suggestion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
=======
/**
 * Comprehensive System Dashboard
 * Advanced monitoring and management interface
 */

import React, { useState, useEffect } from 'react';
import { enhancedPerformanceMonitor } from '../utils/enhancedPerformanceMonitor';
import { enhancedAccessibilityManager } from '../utils/enhancedAccessibilityManager';
import { enhancedSEOOptimizer } from '../utils/enhancedSEOOptimizer';
import { advancedErrorRecoverySystem } from '../utils/advancedErrorRecoverySystem';
import { advancedCachingSystem } from '../utils/advancedCachingSystem';
import { advancedSecurityManager } from '../utils/advancedSecurityManager';

interface DashboardTab {
  id: string;
  label: string;
  icon: string;
  component: React.ComponentType;
}

const PerformanceTab: React.FC = () => {
  const [alerts, setAlerts] = useState(enhancedPerformanceMonitor.getAlerts());

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(enhancedPerformanceMonitor.getAlerts());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Performance Alerts</h3>
      <div className="grid gap-3">
        {alerts.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No performance issues detected
          </div>
        ) : (
          alerts.slice(0, 5).map(alert => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border-l-4 ${
                alert.type === 'critical'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : alert.type === 'warning'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{alert.title}</div>
              <div className="text-sm mt-1">{alert.description}</div>
              <div className="text-xs mt-2 text-gray-600">
                {new Date(alert.timestamp).toLocaleString()}
              </div>
            </div>
          ))
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
const AccessibilityTab: React.FC = () => {
  const [issues, setIssues] = useState(enhancedAccessibilityManager.getIssues());
  const [metrics, setMetrics] = useState(enhancedAccessibilityManager.getMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setIssues(enhancedAccessibilityManager.getIssues());
      setMetrics(enhancedAccessibilityManager.getMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Accessibility Status</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{metrics.focusableElements}</div>
          <div className="text-sm text-blue-800">Focusable Elements</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{metrics.ariaLabels}</div>
          <div className="text-sm text-green-800">ARIA Labels</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Accessibility Issues</h4>
        {issues.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No accessibility issues found
          </div>
        ) : (
          issues.slice(0, 5).map(issue => (
            <div
              key={issue.id}
              className={`p-3 rounded-lg border-l-4 ${
                issue.severity === 'high'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : issue.severity === 'medium'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{issue.message}</div>
              <div className="text-sm mt-1">{issue.suggestion}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const SEOTab: React.FC = () => {
  const [issues, setIssues] = useState(enhancedSEOOptimizer.getIssues());
  const [metrics, setMetrics] = useState(enhancedSEOOptimizer.getMetrics());
  const [score, setScore] = useState(enhancedSEOOptimizer.generateSEOScore());

  useEffect(() => {
    const interval = setInterval(() => {
      setIssues(enhancedSEOOptimizer.getIssues());
      setMetrics(enhancedSEOOptimizer.getMetrics());
      setScore(enhancedSEOOptimizer.generateSEOScore());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">SEO Analysis</h3>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
        <div className="text-3xl font-bold text-blue-600">{score}/100</div>
        <div className="text-sm text-gray-600">SEO Score</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-purple-600">{metrics.titleLength}</div>
          <div className="text-sm text-purple-800">Title Length</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-indigo-600">{metrics.descriptionLength}</div>
          <div className="text-sm text-indigo-800">Description Length</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">SEO Issues</h4>
        {issues.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No SEO issues found
          </div>
        ) : (
          issues.slice(0, 5).map(issue => (
            <div
              key={issue.id}
              className={`p-3 rounded-lg border-l-4 ${
                issue.impact === 'high'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : issue.impact === 'medium'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{issue.message}</div>
              <div className="text-sm mt-1">{issue.suggestion}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const ErrorRecoveryTab: React.FC = () => {
  const [errors, setErrors] = useState(advancedErrorRecoverySystem.getErrorReports());
  const [statistics, setStatistics] = useState(advancedErrorRecoverySystem.getErrorStatistics());

  useEffect(() => {
    const interval = setInterval(() => {
      setErrors(advancedErrorRecoverySystem.getErrorReports());
      setStatistics(advancedErrorRecoverySystem.getErrorStatistics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Error Recovery</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{statistics.total}</div>
          <div className="text-sm text-red-800">Total Errors</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{statistics.resolved}</div>
          <div className="text-sm text-green-800">Resolved</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{statistics.unresolved}</div>
          <div className="text-sm text-yellow-800">Unresolved</div>
        </div>
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
  const [cacheInfo, setCacheInfo] = useState(advancedCachingSystem.getCacheInfo());

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

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || PerformanceTab;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive System Dashboard</h2>
        <p className="text-gray-600">Advanced monitoring and management interface</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="border-t pt-6">
        <ActiveComponent />
      </div>
    </div>
  );
};

>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
export default ComprehensiveSystemDashboard;