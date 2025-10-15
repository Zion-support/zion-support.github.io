import React from 'react';
import { Helmet } from 'react-helmet-async';

const APIDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Development & Integration - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API development services including RESTful APIs, GraphQL, microservices, and third-party integrations." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">API Development & Integration</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build powerful APIs for your business with comprehensive development services and integrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• RESTful API Development</li>
                <li>• GraphQL Implementation</li>
                <li>• Microservices Architecture</li>
                <li>• API Gateway Setup</li>
                <li>• Authentication & Security</li>
                <li>• Third-party Integrations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$1,500 - $20,000</div>
              <p className="text-gray-600">Flexible pricing based on API complexity and integration requirements</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDevelopmentPage;