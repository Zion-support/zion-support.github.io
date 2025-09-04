import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Key, Shield, Clock, Users } from 'lucide-react';

export default function Authentication() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>Authentication - Zion Tech Group Documentation</title>
        <meta name="description" content="Learn how to authenticate with Zion Tech Group APIs using API keys, OAuth 2.0, and other secure methods." />
        <link rel="canonical" href={`${contact.site}/docs/authentication`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Authentication</h1>
            <p className="text-xl text-gray-600">
              Secure authentication methods for accessing Zion Tech Group APIs and services.
            </p>
          </div>

          {/* Authentication Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Key className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">API Key Authentication</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Simple and secure authentication using your personal API key.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-700 mb-2">Header Format</h3>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">OAuth 2.0</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Industry-standard OAuth 2.0 flow for secure third-party integrations.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-700 mb-2">Authorization URL</h3>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
{`https://api.ziontechgroup.com/oauth/authorize`}
                </pre>
              </div>
            </div>
          </div>

          {/* Getting Your API Key */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Your API Key</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Create an Account</h3>
                  <p className="text-gray-600">Sign up for a Zion Tech Group account or log in to your existing account.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Navigate to API Settings</h3>
                  <p className="text-gray-600">Go to your account settings and find the API section.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Generate API Key</h3>
                  <p className="text-gray-600">Click "Generate New API Key" and copy your key securely.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rate Limits */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rate Limits</h2>
            <p className="text-gray-600 mb-6">
              API requests are rate limited to ensure fair usage and system stability.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Free Tier</h3>
                <p className="text-gray-600">1,000 requests/hour</p>
              </div>
              <div className="bg-white rounded p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600">10,000 requests/hour</p>
              </div>
              <div className="bg-white rounded p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">Unlimited requests</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Authentication?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team is here to help you implement secure authentication.
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