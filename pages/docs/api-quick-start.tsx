import Link from 'next/link';
import Head from 'next/head';

export default function ApiQuickStart() {
  return (
    <>
      <Head>
        <title>API Quick Start - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide for Zion Tech Group APIs. Learn how to make your first API call and integrate our services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api-quick-start" />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/docs" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Documentation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Quick Start
          </h1>
          <p className="text-lg text-gray-600">
            Get up and running with Zion Tech Group APIs in minutes. This guide covers authentication, making your first request, and common use cases.
          </p>
        </div>

        <div className="space-y-8">
          {/* Authentication */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔐 Authentication</h2>
            <p className="text-gray-600 mb-6">All API requests require authentication using your API key.</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Header Authentication</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X GET "https://api.ziontechgroup.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-600">JavaScript Example</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`const response = await fetch('https://api.ziontechgroup.com/v1/services', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
              </pre>
            </div>
          </section>

          {/* First API Call */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Your First API Call</h2>
            <p className="text-gray-600 mb-6">Let's start with a simple request to list available services.</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3 text-green-600">Request</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`GET /v1/services
Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-green-600">Response</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "data": [
    {
      "id": "micro-saas",
      "name": "Micro SaaS Products",
      "description": "Ready-to-use software solutions",
      "category": "software",
      "endpoints": ["/v1/micro-saas"]
    },
    {
      "id": "ai-services",
      "name": "AI Services",
      "description": "AI and machine learning solutions",
      "category": "ai",
      "endpoints": ["/v1/ai"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 67
  }
}`}
              </pre>
            </div>
          </section>

          {/* Common Use Cases */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Common Use Cases</h2>
            <div className="grid gap-6">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">1. List Available Services</h3>
                <p className="text-gray-600 mb-3 text-sm">Get a comprehensive list of all available services and their details.</p>
                <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">GET /v1/services</code>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-lg mb-2 text-purple-600">2. Request Service Quote</h3>
                <p className="text-gray-600 mb-3 text-sm">Submit a request for a custom service quote or consultation.</p>
                <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">POST /v1/quotes</code>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg mb-2 text-green-600">3. Get Service Details</h3>
                <p className="text-gray-600 mb-3 text-sm">Retrieve detailed information about a specific service.</p>
                <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">GET /v1/services/&#123;service_id&#125;</code>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Error Handling</h2>
            <p className="text-gray-600 mb-6">Our API uses standard HTTP status codes and returns detailed error information.</p>
            
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-semibold text-lg mb-3 text-red-600">Error Response Example</h3>
              <pre className="bg-gray-900 text-red-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired",
    "details": "Please check your API key and try again"
  },
  "timestamp": "2025-01-26T10:30:00Z"
}`}
              </pre>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Next Steps</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">📖</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Read the Full API Reference</h3>
                  <p className="text-gray-600 text-sm">Explore all available endpoints and parameters.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">💻</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Try Integration Examples</h3>
                  <p className="text-gray-600 text-sm">See real-world examples of API integration.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Get API Access</h3>
                  <p className="text-gray-600 text-sm">Contact us to get your API credentials and start building.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}