import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Latest News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Breakthrough</h3>
            <p className="text-gray-600 mb-4">
              Our latest AI solution achieves 99% accuracy in business process automation.
            </p>
            <span className="text-sm text-gray-500">December 2024</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
            <p className="text-gray-600 mb-4">
              Successfully migrated 100+ enterprise clients to our cloud platform.
            </p>
            <span className="text-sm text-gray-500">November 2024</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Partnership</h3>
            <p className="text-gray-600 mb-4">
              Announcing strategic partnership with leading technology providers.
            </p>
            <span className="text-sm text-gray-500">October 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;