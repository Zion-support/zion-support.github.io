import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting Services | Zion Tech Group',
  description: 'Expert technology consulting to help your business grow and succeed.',
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Consulting Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert technology consulting to help your business grow and succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Technology Strategy</h3>
            <p className="text-gray-600">
              Develop comprehensive technology strategies for your business.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-gray-600">
              Guide your organization through digital transformation initiatives.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
            <p className="text-gray-600">
              Design scalable and robust system architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
}}}}}})))))