import React from 'react';

export const FeaturedListingsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600">Discover our most popular and highly-rated solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                AI Services
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Business Intelligence</h3>
            <p className="text-gray-600 mb-4">Transform your data into actionable insights with our advanced AI solutions.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm font-medium">4.9</span>
              </div>
              <div className="text-lg font-bold text-blue-600">$15,000</div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Cloud Solutions
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Infrastructure Setup</h3>
            <p className="text-gray-600 mb-4">Scalable and secure cloud infrastructure for your business needs.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm font-medium">4.8</span>
              </div>
              <div className="text-lg font-bold text-blue-600">$8,000</div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Security
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity Assessment</h3>
            <p className="text-gray-600 mb-4">Comprehensive security audit and protection implementation.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm font-medium">4.9</span>
              </div>
              <div className="text-lg font-bold text-blue-600">$5,000</div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
