import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">News</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Stay updated with the latest news and announcements from Zion Tech Group.
          </p>
          <p className="text-gray-600">
            Check back regularly for updates on our services, partnerships, and industry insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

