'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Professional main services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Main Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Service 1</h2>
            <p className="text-gray-600">Description of service 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Service 2</h2>
            <p className="text-gray-600">Description of service 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Service 3</h2>
            <p className="text-gray-600">Description of service 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;