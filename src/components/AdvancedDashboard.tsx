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
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Open Dashboard
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Advanced Dashboard</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
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
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;