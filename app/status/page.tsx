import React from 'react';

const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">System Status</h1>
        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="text-green-400 font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
