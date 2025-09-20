import React from 'react';

const InteractiveDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Interactive Dashboard</h1>
          <p className="text-gray-300 text-lg">Manage your projects and analytics</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-blue-400">24</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-green-400">1,247</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-purple-400">$45.2K</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
            <p className="text-3xl font-bold text-orange-400">+12.5%</p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div>
                <p className="text-white">New project created</p>
                <p className="text-gray-400 text-sm">2 hours ago</p>
              </div>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Completed</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div>
                <p className="text-white">User registration</p>
                <p className="text-gray-400 text-sm">4 hours ago</p>
              </div>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Active</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-white">System update</p>
                <p className="text-gray-400 text-sm">1 day ago</p>
              </div>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;