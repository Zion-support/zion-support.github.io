import React from 'react';
import { SEOHead } from '@/components/SEOHead';

export default function EnhancedLoading() {
  return (
    <>
      <SEOHead 
        title="EnhancedLoading - Zion Tech Group"
        description="Professional EnhancedLoading services by Zion Tech Group"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">EnhancedLoading</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-4">
              Welcome to our EnhancedLoading service page. We provide comprehensive solutions 
              tailored to your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Feature 1</h3>
                <p className="text-blue-700">Description of the first key feature</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Feature 2</h3>
                <p className="text-green-700">Description of the second key feature</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Feature 3</h3>
                <p className="text-purple-700">Description of the third key feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}