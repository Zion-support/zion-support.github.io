import React from 'react';
import Layout from '../../components/Layout';

export default function APIDocumentationPage() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services."
      keywords="API documentation, REST API, integration, developer docs"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete reference for integrating with Zion Tech Group APIs
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                <p className="text-gray-600 mb-6">
                  Our API provides programmatic access to all Zion Tech Group services. 
                  Get started by obtaining your API key and exploring our endpoints.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                    <p className="text-gray-600 mb-4">
                      All API requests require authentication using your API key.
                    </p>
                    <code className="bg-gray-100 p-2 rounded block">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Base URL</h3>
                    <p className="text-gray-600 mb-4">
                      All API requests should be made to:
                    </p>
                    <code className="bg-gray-100 p-2 rounded block">
                      https://ziontechgroup.com/api/v1
                    </code>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4">Contact for API Access</h3>
                  <p className="text-gray-600 mb-4">
                    To get started with our API, please contact our team:
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800">
                      <strong>Email:</strong> kleber@ziontechgroup.com<br />
                      <strong>Phone:</strong> +1 302 464 0950
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}