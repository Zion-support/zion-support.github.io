import React from 'react';

export default function UnifiedContentPromotion() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Unified Content Promotion
      </h2>
      <p className="text-gray-600 mb-6">
        Discover our latest content and promotional offers designed to help your enterprise succeed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">AI Solutions</h3>
          <p className="text-blue-700">Advanced AI-powered solutions for your business needs.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-2">Cloud Services</h3>
          <p className="text-green-700">Scalable cloud infrastructure and services.</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Security</h3>
          <p className="text-purple-700">Comprehensive cybersecurity solutions.</p>
        </div>
      </div>
    </div>
  );
}