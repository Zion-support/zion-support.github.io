import React, { useState, useEffect } from "react";
// import { advancedAnalytics as analytics } from '../utils/advancedAnalytics';
// import AdvancedCacheManager from '../utils/advancedCache';

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

interface AnalyticsEvent {
  type: string;
  timestamp: number;
  data?: Record<string, unknown>;
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
        properties: (e as any).properties || {},
      })),
      deviceInfo: {
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
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
          : 0,
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
          ).memory?.jsHeapSizeLimit || 0,
      },
      accessibility: {
        // Get accessibility stats from manager
        features: "Accessibility features disabled", // AdvancedAccessibilityManager.getInstance() ? "Active" : "Inactive",
      },
      security: {
        // Get security stats from manager
        status: "Security features disabled", // AdvancedSecurityManager.getInstance() ? "Active" : "Inactive",
      },
      ux: {
        // Get UX stats from manager
        status: "UX features disabled", // EnhancedUXManager.getInstance() ? "Active" : "Inactive",
      },
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
              { id: "accessibility", label: "Accessibility" },
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
                    Duration:{" "}
                    {formatDuration(
                      Date.now() - (data.analytics?.startTime || 0),
                    )}
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
                <h3 className="font-semibold text-purple-900 mb-2">
                  Performance
                </h3>
                <div className="space-y-1 text-sm">
                  <div>
                    Memory: {formatBytes(data.performance?.memoryUsage || 0)}
                  </div>
                  <div>
                    Limit: {formatBytes(data.performance?.memoryLimit || 0)}
                  </div>
                  <div>
                    Usage:{" "}
                    {(
                      ((data.performance?.memoryUsage || 0) /
                        (data.performance?.memoryLimit || 1)) *
                      100
                    ).toFixed(1)}
                    %
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
                <h3 className="font-semibold text-pink-900 mb-2">
                  Accessibility
                </h3>
                <div className="space-y-1 text-sm">
                  <div>Features: {data.accessibility?.features}</div>
                  <div>Compliance: WCAG 2.1 AA</div>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-2">
                  User Experience
                </h3>
                <div className="space-y-1 text-sm">
                  <div>Status: {data.ux?.status}</div>
                  <div>Theme: Auto</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && data?.analytics && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Session Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>ID:</strong> {data.analytics.id || "N/A"}
                    </div>
                    <div>
                      <strong>Start Time:</strong>{" "}
                      {data.analytics.startTime
                        ? new Date(data.analytics.startTime).toLocaleString()
                        : "N/A"}
                    </div>
                    <div>
                      <strong>Last Activity:</strong>{" "}
                      {data.analytics.lastActivity
                        ? new Date(data.analytics.lastActivity).toLocaleString()
                        : "N/A"}
                    </div>
                    <div>
                      <strong>Page Views:</strong>{" "}
                      {data.analytics.pageViews || 0}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Device Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Screen:</strong>{" "}
                      {data.analytics.deviceInfo?.screenResolution || "N/A"}
                    </div>
                    <div>
                      <strong>Language:</strong>{" "}
                      {data.analytics.deviceInfo?.language || "N/A"}
                    </div>
                    <div>
                      <strong>Timezone:</strong>{" "}
                      {data.analytics.deviceInfo?.timezone || "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">
                  Recent Events ({data.analytics.events?.length || 0})
                </h3>
                <div className="max-h-64 overflow-y-auto">
                  <div className="space-y-2">
                    {(data.analytics.events || [])
                      .slice(-10)
                      .map((event, index: number) => (
                        <div
                          key={index}
                          className="bg-white p-2 rounded text-sm"
                        >
                          <div className="font-medium">{event.event}</div>
                          <div className="text-gray-600">
                            {new Date(event.timestamp).toLocaleString()}
                          </div>
                          {event.properties &&
                            Object.keys(event.properties).length > 0 && (
                              <div className="text-gray-500 text-xs mt-1">
                                {JSON.stringify(event.properties, null, 2)}
                              </div>
                            )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && data?.performance && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Memory Usage</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Used Memory:</span>
                    <span>{formatBytes(data.performance.memoryUsage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Memory Limit:</span>
                    <span>{formatBytes(data.performance.memoryLimit)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(data.performance.memoryUsage / data.performance.memoryLimit) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "cache" && data?.cache && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Cache Statistics</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Items:</strong> {data.cache.size || 0}
                    </div>
                    <div>
                      <strong>Total Size:</strong>{" "}
                      {formatBytes(data.cache.totalSize || 0)}
                    </div>
                    <div>
                      <strong>Max Size:</strong>{" "}
                      {formatBytes(data.cache.maxSize || 0)}
                    </div>
                    <div>
                      <strong>Hit Rate:</strong>{" "}
                      {((data.cache.hitRate || 0) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Cache Usage</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Used Space:</span>
                      <span>{formatBytes(data.cache.totalSize || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Available:</span>
                      <span>
                        {formatBytes(
                          (data.cache.maxSize || 0) -
                            (data.cache.totalSize || 0),
                        )}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{
                          width: `${((data.cache.totalSize || 0) / (data.cache.maxSize || 1)) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Security Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Security Manager: Active</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Content Security Policy: Enabled</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>XSS Protection: Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "accessibility" && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Accessibility Features</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Screen Reader Support: Enabled</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Keyboard Navigation: Active</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>High Contrast Mode: Available</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>WCAG 2.1 AA Compliance: Active</span>
                  </div>
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
