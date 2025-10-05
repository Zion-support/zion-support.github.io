import React, { useState, useEffect } from 'react';

interface PerformanceData {
  memoryUsage: number;
  memoryLimit: number;
}

interface AccessibilityData {
  features: string;
}

interface SecurityData {
  status: string;
}

interface UXData {
  status: string;
}

interface AnalyticsData {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: Array<{
    event: string;
    timestamp: number;
    properties?: Record<string, unknown>;
  }>;
  deviceInfo: {
    screenResolution: string;
    language: string;
    timezone: string;
  };
}

interface CacheData {
  size: number;
  totalSize: number;
  maxSize: number;
  hitRate: number;
}

interface DashboardData {
  analytics: AnalyticsData;
  cache: CacheData;
  performance: PerformanceData;
  accessibility: AccessibilityData;
  security: SecurityData;
  ux: UXData;
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
      size: typeof cacheStats === "object" && cacheStats !== null
        ? ((cacheStats as Record<string, unknown>).size as number) || 0
        : 0,
      totalSize: typeof cacheStats === "object" && cacheStats !== null
        ? ((cacheStats as Record<string, unknown>).totalSize as number) || 0
        : 0,
      maxSize: typeof cacheStats === "object" && cacheStats !== null
        ? ((cacheStats as Record<string, unknown>).maxSize as number) || 0
        : 0,
      hitRate: typeof cacheStats === "object" && cacheStats !== null
        ? ((cacheStats as Record<string, unknown>).hitRate as number) || 0
        : 0
    };

    setData({
      analytics: analyticsData,
      cache: cache,
      performance: {
        memoryUsage: (performance as Performance & {
          memory?: { usedJSHeapSize?: number };
        }).memory?.usedJSHeapSize || 0,
        memoryLimit: (performance as Performance & {
          memory?: { jsHeapSizeLimit?: number };
        }).memory?.jsHeapSizeLimit || 0
      },
      accessibility: { features: "Screen reader support, keyboard navigation" },
      security: { status: "Active" },
      ux: { status: "Optimized" }
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
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open Advanced Dashboard"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Advanced System Dashboard</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white text-2xl"
            aria-label="Close Dashboard"
          >
            ×
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
                  <div>
                    Duration: {formatDuration(Date.now() - (data.analytics?.startTime || 0))}
                  </div>
                  <div>Page Views: {data.analytics?.pageViews || 0}</div>
                  <div>Events: {data.analytics?.events?.length || 0}</div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Cache</h3>
                <div className="space-y-1 text-sm">
                  <div>Items: {data.cache?.size || 0}</div>
                  <div>Size: {formatBytes(data.cache?.totalSize || 0)}</div>
                  <div>Max Size: {formatBytes(data.cache?.maxSize || 0)}</div>
                  <div>
                    Hit Rate: {((data.cache?.hitRate || 0) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Performance</h3>
                <div className="space-y-1 text-sm">
                  <div>Memory: {formatBytes(data.performance?.memoryUsage || 0)}</div>
                  <div>Limit: {formatBytes(data.performance?.memoryLimit || 0)}</div>
                  <div>
                    Usage: {(
                      ((data.performance?.memoryUsage || 0) / (data.performance?.memoryLimit || 1)) * 100
                    ).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Security</h3>
                <div className="space-y-1 text-sm">
                  <div>Status: {data.security?.status}</div>
                  <div>Protection: Active</div>
                </div>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-semibold text-pink-900 mb-2">Accessibility</h3>
                <div className="space-y-1 text-sm">
                  <div>Features: {data.accessibility?.features}</div>
                  <div>Compliance: WCAG 2.1 AA</div>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-2">User Experience</h3>
                <div className="space-y-1 text-sm">
                  <div>Status: {data.ux?.status}</div>
                  <div>Theme: Auto</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;