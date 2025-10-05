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
>>>>>>> cursor/fix-errors-and-merge-to-main-5246
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;
