import React from 'react';
import { Helmet } from 'react-helmet-async';

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Digital Transformation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business for the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600">
                Automate your business processes to increase efficiency and reduce manual work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Integration</h3>
              <p className="text-gray-600">
                Integrate new technologies into your existing systems for enhanced capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;
