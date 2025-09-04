import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, Shield, Clock } from 'lucide-react';

export default function ApiReference() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group Documentation</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's micro SaaS, AI, and IT services." />
        <link rel="canonical" href={`${contact.site}/docs/api-reference`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600">
              Complete reference for all Zion Tech Group APIs and endpoints.
            </p>
          </div>

          {/* Authentication */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Authentication</h2>
            </div>
            <p className="text-gray-600 mb-6">
              All API requests require authentication using a Bearer token in the Authorization header.
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Header Format</h3>
              <pre className="text-green-400 text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>
          </section>

          {/* Services Endpoints */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">📋 Services Endpoints</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GET /v1/services</h3>
                <p className="text-gray-600 mb-4">Retrieve all available services</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Response Example</h4>
                  <pre className="text-sm text-gray-700">
{`{
  "success": true,
  "data": {
    "services": [
      {
        "id": "micro-saas",
        "name": "Micro SaaS Products",
        "description": "Custom micro SaaS solutions",
        "pricing": "Starting at $2,500"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 67,
      "pages": 7
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">POST /v1/contact</h3>
                <p className="text-gray-600 mb-4">Submit a contact form or quote request</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>
                  <pre className="text-sm text-gray-700">
{`{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "phone": "+1-555-0123",
  "service": "micro-saas",
  "message": "Looking for a custom solution...",
  "budget_range": "1000-5000",
  "additional_notes": "Looking for a custom solution..."
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Rate Limiting */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Rate Limiting</h2>
            </div>
            <p className="text-gray-600 mb-6">
              API requests are rate limited to ensure fair usage and system stability.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Free Tier</h3>
                  <p className="text-gray-600">100 requests/hour</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>
                  <p className="text-gray-600">10,000 requests/hour</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600">Unlimited requests</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with the API?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Support
              </Link>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}