import React from 'react';
import Head from 'next/head';

export default function APIDocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for our services." />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/api-documentation"
        />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive API documentation for our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">REST API</h3>
            <p className="text-gray-300">
              RESTful API endpoints for all our services.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">GraphQL API</h3>
            <p className="text-gray-300">
              GraphQL API for flexible data querying.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">WebSocket API</h3>
            <p className="text-gray-300">
              Real-time WebSocket API for live updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
