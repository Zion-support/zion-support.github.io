import React from 'react';
import { Helmet } from 'react-helmet-async';

const DigitalTransformationPage = () => {
  return (
    <>
      <Helmet>
        <title>DigitalTransformation - Zion Tech Group</title>
        <meta name="description" content="End-to-end digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DigitalTransformation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital transformation services.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600">
                This page is currently under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;