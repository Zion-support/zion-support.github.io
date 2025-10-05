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
    // Simulate data loading
    const mockData: DashboardData = {
      analytics: {
        pageViews: 12543,
        sessions: 8921,
        bounceRate: 0.23
      },
      performance: {
        loadTime: 1.2,
        responseTime: 89
      },
      security: {
        threatsBlocked: 47,
        vulnerabilities: 2
      }
    };
    setData(mockData);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        title="Open Advanced Dashboard"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Advanced Dashboard</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Analytics Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Analytics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-600">Page Views</span>
                  <span className="font-bold text-blue-800">{data.analytics.pageViews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-600">Sessions</span>
                  <span className="font-bold text-blue-800">{data.analytics.sessions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-600">Bounce Rate</span>
                  <span className="font-bold text-blue-800">{(data.analytics.bounceRate * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Performance Section */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-green-600">Load Time</span>
                  <span className="font-bold text-green-800">{data.performance.loadTime}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-600">Response Time</span>
                  <span className="font-bold text-green-800">{data.performance.responseTime}ms</span>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Security</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-red-600">Threats Blocked</span>
                  <span className="font-bold text-red-800">{data.security.threatsBlocked}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-red-600">Vulnerabilities</span>
                  <span className="font-bold text-red-800">{data.security.vulnerabilities}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;