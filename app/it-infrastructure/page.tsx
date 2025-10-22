'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Build robust, scalable IT infrastructure with our comprehensive technology solutions and support services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build robust, scalable IT infrastructure with our comprehensive technology solutions and expert support services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Network Design</h3>
              <p className="text-gray-600">Design and implement secure, high-performance network infrastructure.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Server Management</h3>
              <p className="text-gray-600">Comprehensive server setup, configuration, and ongoing management.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-600">Seamlessly migrate your infrastructure to cloud platforms.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default ItInfrastructurePage;