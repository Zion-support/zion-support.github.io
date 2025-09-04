import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Key, Shield, Lock, User } from 'lucide-react';

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
        <meta name="description" content="Learn how to authenticate with Zion Tech Group's APIs using API keys, OAuth 2.0, and JWT tokens." />
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
              Secure authentication methods for accessing Zion Tech Group's APIs and services.
            </p>
          </div>

          {/* Authentication Methods */}
          <div className="space-y-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">API Key Authentication</h2>
              </div>
              <p className="text-gray-600 mb-6">
                The simplest way to authenticate with our APIs is using an API key.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">How to get your API key:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Sign up for a free account at <a href="/signup" className="text-blue-600 hover:underline">ziontechgroup.com/signup</a></li>
                  <li>Navigate to the API section in your dashboard</li>
                  <li>Generate a new API key</li>
                  <li>Copy and securely store your API key</li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">OAuth 2.0</h2>
              </div>
              <p className="text-gray-600 mb-6">
                For more advanced integrations, we support OAuth 2.0 authentication.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">OAuth 2.0 Flow:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Register your application in the developer dashboard</li>
                  <li>Redirect users to our authorization endpoint</li>
                  <li>Handle the authorization callback</li>
                  <li>Exchange the authorization code for an access token</li>
                  <li>Use the access token to make API requests</li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">JWT Tokens</h2>
              </div>
              <p className="text-gray-600 mb-6">
                For server-to-server communication, we support JWT (JSON Web Token) authentication.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">JWT Token Structure:</h3>
                <pre className="text-sm text-gray-700">
{`{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user_id",
    "iat": 1640995200,
    "exp": 1641081600
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Security Best Practices */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Never expose your API keys in client-side code</li>
              <li>Use environment variables to store sensitive credentials</li>
              <li>Rotate your API keys regularly</li>
              <li>Use HTTPS for all API requests</li>
              <li>Implement proper error handling for authentication failures</li>
            </ul>
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