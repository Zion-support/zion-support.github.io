import React from 'react';
import { Helmet } from 'react-helmet-async';

const NetworkInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Network Infrastructure - Zion Tech Group | Network Solutions</title>
        <meta name="description" content="Professional network infrastructure services. Design, implement, and maintain robust network solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Network Infrastructure</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Professional network infrastructure services to design, implement, and maintain 
                robust network solutions that keep your business connected and secure.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Network Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive network infrastructure solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Network Design</h3>
                <p className="text-gray-600 mb-6">Design scalable and secure network architectures</p>
                <div className="text-2xl font-bold text-green-600 mb-2">$5,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Network Implementation</h3>
                <p className="text-gray-600 mb-6">Implement and configure network infrastructure</p>
                <div className="text-2xl font-bold text-green-600 mb-2">$10,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Network Monitoring</h3>
                <p className="text-gray-600 mb-6">24/7 network monitoring and maintenance</p>
                <div className="text-2xl font-bold text-green-600 mb-2">$2,000</div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;