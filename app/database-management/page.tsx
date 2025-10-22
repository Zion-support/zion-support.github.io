import React from 'react';
import { Helmet } from 'react-helmet-async';

const DatabaseManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Database Management - Zion Tech Group</title>
        <meta name="description" content="Comprehensive database management services including design, optimization, and maintenance." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Database Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive database solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Database Design</h3>
              <p className="text-gray-600">
                Design efficient, scalable database schemas optimized for your specific use cases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Optimize your database performance for faster queries and better user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseManagementPage;
