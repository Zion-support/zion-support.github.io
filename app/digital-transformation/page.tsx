import React from 'react';
import { Helmet } from 'react-helmet-async';

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Business Modernization</title>
        <meta name="description" content="Transform your business with our digital transformation services. Modernize processes, systems, and operations for the digital age." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Digital Transformation</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Transform your business for the digital age. We help organizations modernize their 
                processes, systems, and operations to stay competitive and efficient.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Transformation Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital transformation solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-6">Automate repetitive tasks and streamline workflows</p>
                <div className="text-2xl font-bold text-purple-600 mb-2">$10,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
                <p className="text-gray-600 mb-6">Move your infrastructure to the cloud for scalability</p>
                <div className="text-2xl font-bold text-purple-600 mb-2">$15,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Modernization</h3>
                <p className="text-gray-600 mb-6">Modernize your data infrastructure and analytics</p>
                <div className="text-2xl font-bold text-purple-600 mb-2">$20,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;