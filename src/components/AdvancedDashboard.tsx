import React, { useState, useEffect } from "react";
// import { advancedAnalytics as analytics } from '../utils/advancedAnalytics';
// import AdvancedCacheManager from '../utils/advancedCache';
import { enhancedAccessibility } from '../utils/enhancedAccessibility';
import { securityAuditor } from '../utils/securityAuditor';
// import EnhancedUXManager from '../utils/enhancedUXManager';

interface DashboardData {
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  performance: {
    loadTime: number;
    responseTime: number;
  };
  security: {
    threatsBlocked: number;
    vulnerabilities: number;
  };
}

const AdvancedDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (isOpen) {
      updateData();
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const updateData = () => {
    // Mock analytics data for now
    const events: Array<{ name: string; timestamp?: number }> = [];
    const cacheStats = { hits: 0, misses: 0, size: 0 };

    // Convert analytics events to analytics data format
    const analyticsData: AnalyticsData = {
      id: `session_${Date.now()}`,
      startTime: Date.now() - 300000, // 5 minutes ago
      lastActivity: Date.now(),
      pageViews: events.filter((e) => e.name === "page_view").length,
      events: events.map((e) => ({
        event: e.name,
        timestamp: e.timestamp || Date.now(),
        properties: (e as any).properties || {}
      })),
      deviceInfo: {
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    // Convert cache stats to proper format
    const cache: CacheData = {
      size:
        typeof cacheStats === "object" && cacheStats !== null
          ? ((cacheStats as Record<string, unknown>).size as number) || 0
          : 0,
      totalSize:
        typeof cacheStats === "object" && cacheStats !== null
          ? ((cacheStats as Record<string, unknown>).totalSize as number) || 0
          : 0,
      maxSize:
        typeof cacheStats === "object" && cacheStats !== null
          ? ((cacheStats as Record<string, unknown>).maxSize as number) || 0
          : 0,
      hitRate:
        typeof cacheStats === "object" && cacheStats !== null
          ? ((cacheStats as Record<string, unknown>).hitRate as number) || 0
          : 0
    };

    setData({
      analytics: analyticsData || {},
      cache: cache || {},
      performance: {
        memoryUsage:
          (
            performance as Performance & {
              memory?: { usedJSHeapSize?: number };
            }
          ).memory?.usedJSHeapSize || 0,
        memoryLimit:
          (
            performance as Performance & {
              memory?: { jsHeapSizeLimit?: number };
            }
          ).memory?.jsHeapSizeLimit || 0
      },
      security: {
        vulnerabilities: 0,
        threats: 0,
        score: 100
      },
      ux: {
        loadTime: 0,
        interactivity: 0,
        visualStability: 0
      }
    });
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDuration = (ms: number): string => {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${(ms / 60000).toFixed(1)}m`;
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Open Dashboard"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Advanced Dashboard</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 border-b">
          <div className="flex space-x-1 p-2">
              {[
                { id: "overview", label: "Overview" },
                { id: "analytics", label: "Analytics" },
                { id: "performance", label: "Performance" },
                { id: "cache", label: "Cache" },
                { id: "security", label: "Security" },
                { id: "accessibility", label: "Accessibility" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {activeTab === "overview" && data && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Analytics</h3>
                <div className="space-y-1 text-sm">
                  <div>
                      Session: {data.analytics?.id?.substring(0, 12) || "N/A"}...
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Sessions</h3>
                    <p className="text-2xl font-bold text-green-600">{data.analytics.sessions}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800">Bounce Rate</h3>
                    <p className="text-2xl font-bold text-yellow-600">{(data.analytics.bounceRate * 100).toFixed(1)}%</p>
                  </div>
                </div>
              )}
              
              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Analytics Data</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-gray-600">Page Views</p>
                      <p className="text-xl font-bold">{data.analytics.pageViews}</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-gray-600">Sessions</p>
                      <p className="text-xl font-bold">{data.analytics.sessions}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "performance" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-gray-600">Load Time</p>
                      <p className="text-xl font-bold">{data.performance.loadTime.toFixed(0)}ms</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-gray-600">Response Time</p>
                      <p className="text-xl font-bold">{data.performance.responseTime.toFixed(0)}ms</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "security" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Security Status</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-gray-600">Threats Blocked</p>
                      <p className="text-xl font-bold text-red-600">{data.security.threatsBlocked}</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-gray-600">Vulnerabilities</p>
                      <p className="text-xl font-bold text-orange-600">{data.security.vulnerabilities}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            {data && (
              <div className="space-y-2">
                <p>Page Views: {data.analytics.pageViews}</p>
                <p>Sessions: {data.analytics.sessions}</p>
                <p>Bounce Rate: {(data.analytics.bounceRate * 100).toFixed(1)}%</p>
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            {data && (
              <div className="space-y-2">
                <p>Load Time: {data.performance.loadTime.toFixed(0)}ms</p>
                <p>Response Time: {data.performance.responseTime.toFixed(0)}ms</p>
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Security</h3>
            {data && (
              <div className="space-y-2">
                <p>Threats Blocked: {data.security.threatsBlocked}</p>
                <p>Vulnerabilities: {data.security.vulnerabilities}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;
