import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">News</h1>
        <div className="cyber-card p-8">
          <p className="text-gray-300 mb-6">
            This page contains the latest news and updates from Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;