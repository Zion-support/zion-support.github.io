import React from 'react';
import { Helmet } from 'react-helmet-async';

const NetworkInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Design and implement robust network infrastructure solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Network Infrastructure</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust network infrastructure solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Design</h3>
              <p className="text-gray-600">
                Design secure, scalable network architectures tailored to your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Security</h3>
              <p className="text-gray-600">
                Implement comprehensive security measures to protect your network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;