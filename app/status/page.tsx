'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of our services and systems." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check the current status of our services and systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">API Services</h3>

              </div>
              <p className="text-gray-600">All systems operational</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">Web Platform</h3>
              </div>
              <p className="text-gray-600">All systems operational</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <p className="text-gray-600">All systems operational</p>
            </div>
          </div>
        </div>
      </div>
    </>);
};
export default StatusPage;