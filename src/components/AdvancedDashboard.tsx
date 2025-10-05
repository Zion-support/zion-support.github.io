import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if (isOpen) {
      updateData();
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const updateData = () => {
    // Mock data for demonstration
    const mockData: DashboardData = {
      analytics: {
        pageViews: Math.floor(Math.random() * 1000) + 500,
        sessions: Math.floor(Math.random() * 100) + 50,
        bounceRate: Math.random() * 0.5 + 0.2
      },
      performance: {
        loadTime: Math.random() * 2000 + 500,
        responseTime: Math.random() * 500 + 100
      },
      security: {
        threatsBlocked: Math.floor(Math.random() * 10),
        vulnerabilities: Math.floor(Math.random() * 5)
      }
    };
    
    setData(mockData);
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

        <div className="flex space-x-1 mb-6">
          {["overview", "analytics", "performance", "security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {data && (
          <div className="space-y-6">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800">Analytics</h3>
                  <p className="text-2xl font-bold text-blue-600">{data.analytics.pageViews}</p>
                  <p className="text-sm text-blue-600">Page Views</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800">Performance</h3>
                  <p className="text-2xl font-bold text-green-600">{formatDuration(data.performance.loadTime)}</p>
                  <p className="text-sm text-green-600">Load Time</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800">Security</h3>
                  <p className="text-2xl font-bold text-red-600">{data.security.threatsBlocked}</p>
                  <p className="text-sm text-red-600">Threats Blocked</p>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Page Views</h3>
                    <p className="text-3xl font-bold text-blue-600">{data.analytics.pageViews}</p>
                  </div>
                  <div className="bg-white p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Sessions</h3>
                    <p className="text-3xl font-bold text-green-600">{data.analytics.sessions}</p>
                  </div>
                </div>
                <div className="bg-white p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Bounce Rate</h3>
                  <p className="text-3xl font-bold text-orange-600">{(data.analytics.bounceRate * 100).toFixed(1)}%</p>
                </div>
              </div>
            )}

            {activeTab === "performance" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Load Time</h3>
                    <p className="text-3xl font-bold text-blue-600">{formatDuration(data.performance.loadTime)}</p>
                  </div>
                  <div className="bg-white p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                    <p className="text-3xl font-bold text-green-600">{formatDuration(data.performance.responseTime)}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Threats Blocked</h3>
                    <p className="text-3xl font-bold text-red-600">{data.security.threatsBlocked}</p>
                  </div>
                  <div className="bg-white p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Vulnerabilities</h3>
                    <p className="text-3xl font-bold text-orange-600">{data.security.vulnerabilities}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedDashboard;
