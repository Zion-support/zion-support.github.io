import React, { useState, useEffect, useCallback } from "react";
import {
  performanceOptimizer,
  PerformanceMetrics,
  OptimizationSuggestion,
} from "../utils/performanceOptimizer";
import {
  accessibilityEnhancer,
  AccessibilityMetrics,
  AccessibilityIssue,
} from "../utils/accessibilityEnhancer";
import { seoOptimizer, SEOMetrics, SEOIssue } from "../utils/seoOptimizer";

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
  seoMetrics: SEOMetrics;
  optimizationSuggestions: OptimizationSuggestion[];
  accessibilityIssues: AccessibilityIssue[];
  seoIssues: SEOIssue[];
  lastUpdated: number;
}

const ComprehensiveSystemDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "overview" | "performance" | "accessibility" | "seo"
  >("overview");
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Initialize monitoring systems
  const initializeMonitoring = useCallback(() => {
    try {
<<<<<<< HEAD
      performanceOptimizer.startMonitoring();
      accessibilityEnhancer.startMonitoring();
      seoOptimizer.startMonitoring();
      setIsMonitoring(true);
=======
      setIsLoading(true);
      
      // Load performance metrics
      const performanceData = await enhancedPerformanceMonitor.getMetrics();
      const performanceScore = 85; // Mock performance score
      
      // Load security metrics
      const securityData = enhancedSecurityManager.getSecurityReport();
      
      // Load analytics data
      const analyticsReport = enhancedAnalytics.generateReport();
      // const advancedEvents = advancedAnalytics?.getEvents();
      
      // Load system metrics
      const systemData = {
        memoryUsage: ((performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize ?? 0) / 1024 / 1024,
        cpuUsage: Math.random() * 100, // Placeholder
        networkLatency: Math.random() * 100 // Placeholder
      };

      setMetrics({
        performance: {
          score: performanceScore,
          lcp: performanceData.get('lcp')?.[0]?.value || 0,
          fcp: performanceData.get('fcp')?.[0]?.value || 0,
          ttfb: performanceData.get('ttfb')?.[0]?.value || 0
        },
        security: {
          score: enhancedSecurityManager.getSecurityScore(),
          totalEvents: securityData.totalEvents || 0,
          criticalEvents: securityData.eventsBySeverity?.critical || 0
        },
        analytics: {
          pageViews: analyticsReport.pageViews || 0,
          uniqueVisitors: analyticsReport.uniqueVisitors || 0,
          bounceRate: analyticsReport.bounceRate || 0
        },
        system: systemData
      });

      // Generate real-time data
      const realTime: RealTimeDataPoint[] = Array.from({ length: 20 }, (_, i) => ({
        timestamp: Date.now() - (19 - i) * 1000,
        value: Math.random() * 100,
        metric: 'performance'
      }));
      setRealTimeData(realTime as any);
>>>>>>> 4ba245a45fc5 (Checkpoint before follow-up message)
    } catch (error) {
      console.error("Error initializing monitoring systems:", error);
    }
  }, []);

  // Stop monitoring systems
  const stopMonitoring = useCallback(() => {
    try {
      performanceOptimizer.stopMonitoring();
      accessibilityEnhancer.stopMonitoring();
      seoOptimizer.stopMonitoring();
      setIsMonitoring(false);
    } catch (error) {
      console.error("Error stopping monitoring systems:", error);
    }
  }, []);

  // Update dashboard data
  const updateDashboardData = useCallback(() => {
    try {
      const performanceMetrics = performanceOptimizer.getMetrics();
      const performanceReport = performanceOptimizer.generateReport();
      const accessibilityMetrics = accessibilityEnhancer.getMetrics();
      const accessibilityIssues = accessibilityEnhancer.getIssues();
      const seoMetrics = seoOptimizer.getMetrics();
      const seoIssues = seoOptimizer.getIssues();

      const systemHealth: SystemHealth = {
        performance: performanceReport.score,
        accessibility: accessibilityMetrics.score,
        seo: seoMetrics.score,
        overall: Math.round(
          (performanceReport.score +
            accessibilityMetrics.score +
            seoMetrics.score) /
            3,
        ),
      };

      setData({
        systemHealth,
        performanceMetrics,
        accessibilityMetrics,
        seoMetrics,
        optimizationSuggestions: performanceReport.suggestions,
        accessibilityIssues,
        seoIssues,
        lastUpdated: Date.now(),
      });
    } catch (error) {
      console.error("Error updating dashboard data:", error);
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
  const handleTabChange = (
    tab: "overview" | "performance" | "accessibility" | "seo",
  ) => {
    setActiveTab(tab);
  };

  // Get health status color
  const getHealthColor = (score: number): string => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  // Get health status text
  const getHealthStatus = (score: number): string => {
    if (score >= 90) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Needs Improvement";
    return "Poor";
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
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isMonitoring
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {isMonitoring ? "Monitoring Active" : "Monitoring Inactive"}
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
              <p className="text-sm font-medium text-gray-600">
                Overall Health
              </p>
              <p
                className={`text-2xl font-bold ${getHealthColor(data.systemHealth.overall)}`}
              >
                {data.systemHealth.overall}%
              </p>
              <p className="text-sm text-gray-500">
                {getHealthStatus(data.systemHealth.overall)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Performance</p>
              <p
                className={`text-2xl font-bold ${getHealthColor(data.systemHealth.performance)}`}
              >
                {data.systemHealth.performance}%
              </p>
              <p className="text-sm text-gray-500">
                {getHealthStatus(data.systemHealth.performance)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Accessibility</p>
              <p
                className={`text-2xl font-bold ${getHealthColor(data.systemHealth.accessibility)}`}
              >
                {data.systemHealth.accessibility}%
              </p>
              <p className="text-sm text-gray-500">
                {getHealthStatus(data.systemHealth.accessibility)}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">SEO</p>
              <p
                className={`text-2xl font-bold ${getHealthColor(data.systemHealth.seo)}`}
              >
                {data.systemHealth.seo}%
              </p>
              <p className="text-sm text-gray-500">
                {getHealthStatus(data.systemHealth.seo)}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "performance", label: "Performance" },
            { id: "accessibility", label: "Accessibility" },
            { id: "seo", label: "SEO" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === "overview" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Issues Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Performance Issues:
                    </span>
                    <span className="text-sm font-medium">
                      {data.optimizationSuggestions.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Accessibility Issues:
                    </span>
                    <span className="text-sm font-medium">
                      {data.accessibilityIssues.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">SEO Issues:</span>
                    <span className="text-sm font-medium">
                      {data.seoIssues.length}
                    </span>
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
                    onClick={() => seoOptimizer.optimizePage()}
                    className="w-full text-left px-3 py-2 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100"
                  >
                    Optimize SEO
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
            {data.performanceMetrics ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Core Web Vitals</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">LCP:</span>
                      <span className="text-sm font-medium">
                        {data.performanceMetrics.largestContentfulPaint.toFixed(
                          0,
                        )}
                        ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">FID:</span>
                      <span className="text-sm font-medium">
                        {data.performanceMetrics.firstInputDelay.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">CLS:</span>
                      <span className="text-sm font-medium">
                        {data.performanceMetrics.cumulativeLayoutShift.toFixed(
                          3,
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Resource Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Load Time:</span>
                      <span className="text-sm font-medium">
                        {data.performanceMetrics.loadTime.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Memory Usage:
                      </span>
                      <span className="text-sm font-medium">
                        {(
                          data.performanceMetrics.memoryUsage /
                          1024 /
                          1024
                        ).toFixed(1)}
                        MB
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Network Requests:
                      </span>
                      <span className="text-sm font-medium">
                        {data.performanceMetrics.networkRequests}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Optimization Suggestions
                  </h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {data.optimizationSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="p-2 bg-yellow-50 rounded text-sm"
                      >
                        <div className="font-medium text-yellow-800">
                          {suggestion.title}
                        </div>
                        <div className="text-yellow-700">
                          {suggestion.description}
                        </div>
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

        {activeTab === "accessibility" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Accessibility Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Issues Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Issues:</span>
                    <span className="text-sm font-medium">
                      {data.accessibilityMetrics.totalIssues}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-red-600">Errors:</span>
                    <span className="text-sm font-medium">
                      {data.accessibilityMetrics.errors}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-yellow-600">Warnings:</span>
                    <span className="text-sm font-medium">
                      {data.accessibilityMetrics.warnings}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-600">Info:</span>
                    <span className="text-sm font-medium">
                      {data.accessibilityMetrics.info}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Recent Issues</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {data.accessibilityIssues.slice(0, 5).map((issue, index) => (
                    <div key={index} className="p-2 bg-red-50 rounded text-sm">
                      <div className="font-medium text-red-800">
                        {issue.message}
                      </div>
                      <div className="text-red-700">{issue.suggestion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "seo" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">SEO Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Page Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Page Title:</span>
                    <span className="text-sm font-medium truncate max-w-xs">
                      {data.seoMetrics.pageTitle}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Meta Description:
                    </span>
                    <span className="text-sm font-medium">
                      {data.seoMetrics.metaDescription.length} chars
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Images:</span>
                    <span className="text-sm font-medium">
                      {data.seoMetrics.imageCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Links:</span>
                    <span className="text-sm font-medium">
                      {data.seoMetrics.linkCount}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">SEO Issues</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {data.seoIssues.slice(0, 5).map((issue, index) => (
                    <div
                      key={index}
                      className="p-2 bg-orange-50 rounded text-sm"
                    >
                      <div className="font-medium text-orange-800">
                        {issue.message}
                      </div>
                      <div className="text-orange-700">{issue.suggestion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;
