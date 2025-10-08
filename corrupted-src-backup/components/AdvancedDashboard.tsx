import React, { useState, useEffect } from 'react';

interface DashboardStats {
  totalUsers: number;
  activeSessions: number;
  cacheHitRate: number;
  responseTime: number;
}

const AdvancedDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeSessions: 0,
    cacheHitRate: 0,
    responseTime: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchStats = async () => {
      try {
        // Mock data for demonstration
        const mockStats: DashboardStats = {
          totalUsers: 1250,
          activeSessions: 89,
          cacheHitRate: 94.5,
          responseTime: 120,
        };

        setStats(mockStats);
        setLoading(false);
      } catch (error) {
        // console.error('Failed to fetch dashboard stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-900 flex items-center justify-center'>
        <div className='text-white text-xl'>Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-900 p-6'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-white mb-8'>
          Advanced Dashboard
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className='text-gray-300 text-sm font-medium'>Total Users</h3>
            <p className='text-2xl font-bold text-white'>
              {stats.totalUsers.toLocaleString()}
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className='text-gray-300 text-sm font-medium'>
              Active Sessions
            </h3>
            <p className='text-2xl font-bold text-white'>
              {stats.activeSessions}
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className='text-gray-300 text-sm font-medium'>
              Cache Hit Rate
            </h3>
            <p className='text-2xl font-bold text-white'>
              {stats.cacheHitRate}%
            </p>
          </div>

          <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className='text-gray-300 text-sm font-medium'>Response Time</h3>
            <p className='text-2xl font-bold text-white'>
              {stats.responseTime}ms
            </p>
          </div>
        </div>

        <div className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold text-white mb-4'>
            System Overview
          </h2>
          <p className='text-gray-300'>
            Advanced monitoring and analytics dashboard for system performance
            and user metrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;
