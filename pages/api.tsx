import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function API() {
  const apiEndpoints = [
    {
      name: 'Services API',
      endpoint: '/api/services',
      method: 'GET',
      description: 'Retrieve all available services',
      response: 'Array of services'
    },
    {
      name: 'Contact API',
      endpoint: '/api/contact',
      method: 'POST',
      description: 'Submit contact form',
      response: 'Success message'
    },
    {
      name: 'Quote API',
      endpoint: '/api/quote',
      method: 'POST',
      description: 'Request a quote',
      response: 'Quote details'
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive API documentation for integrating with Zion Tech Group services
            </p>
          </div>
        </section>

        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Endpoints</h2>
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'GET' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <div className="space-y-2">
                  <p><strong>Endpoint:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{endpoint.endpoint}</code></p>
                  <p><strong>Description:</strong> {endpoint.description}</p>
                  <p><strong>Response:</strong> {endpoint.response}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Integration?</h2>
            <p className="text-gray-600 text-xl mb-8">
              Our team is here to help you integrate our APIs into your applications.
            </p>
            <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
              Contact Our API Team
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}