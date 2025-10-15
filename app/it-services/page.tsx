import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, security, and support solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to keep your business running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Management</h3>
              <p className="text-gray-600">
                Manage and maintain your IT infrastructure with our expert support team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Solutions</h3>
              <p className="text-gray-600">
                Protect your business with comprehensive cybersecurity solutions and monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Support</h3>
              <p className="text-gray-600">
                24/7 technical support to ensure your systems are always running optimally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;