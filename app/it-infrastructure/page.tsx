'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
const ItInfrastructurePage: React.FC = () => {  return (
    <>
      <Helmet>
        <title>IT Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and maintain robust IT infrastructure with our comprehensive solutions for servers, networks, and cloud systems." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build and maintain robust IT infrastructure with our comprehensive solutions for servers, networks, and cloud systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Server Management</h3>
              <p className="text-gray-600">Comprehensive server setup, configuration, and maintenance services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Network Design</h3>
              <p className="text-gray-600">Scalable network architecture design and implementation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-600">Seamless migration to cloud infrastructure platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ItInfrastructurePage;