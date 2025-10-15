import React from 'react';
import { Helmet } from 'react-helmet-async';

const DatabaseManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Database Management - Zion Tech Group | Data Solutions</title>
        <meta name="description" content="Professional database management services. Optimize, secure, and maintain your databases with our expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Database Management</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Professional database management services to optimize, secure, and maintain your data infrastructure. 
                We ensure your databases perform at their best.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Database Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive database management solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Database Optimization</h3>
                <p className="text-gray-600 mb-6">Improve performance and efficiency of your databases</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$3,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Database Security</h3>
                <p className="text-gray-600 mb-6">Secure your databases with advanced security measures</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$5,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Database Migration</h3>
                <p className="text-gray-600 mb-6">Migrate your databases to new platforms safely</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$8,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseManagementPage;