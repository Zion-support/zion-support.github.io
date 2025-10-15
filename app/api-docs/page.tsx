import React from 'react';
import { Helmet } from 'react-helmet-async';

const ApiDocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Access our API documentation and developer resources. Integrate with our services using our comprehensive APIs." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">API Documentation</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Comprehensive API documentation and developer resources to help you integrate 
                with our services and build amazing applications.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Available APIs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API offerings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services API</h3>
                <p className="text-gray-600 mb-6">Access our AI services through RESTful APIs</p>
                <div className="text-blue-600 font-medium">REST API • JSON</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Webhook API</h3>
                <p className="text-gray-600 mb-6">Real-time notifications and event handling</p>
                <div className="text-blue-600 font-medium">Webhooks • JSON</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics API</h3>
                <p className="text-gray-600 mb-6">Access analytics data and insights</p>
                <div className="text-blue-600 font-medium">REST API • JSON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDocsPage;