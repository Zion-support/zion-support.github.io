import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Code, Key, Globe, Database, Shield, Zap, ArrowRight, Copy, CheckCircle, ExternalLink, Clock, Users } from 'lucide-react';

export default function API() {
  const apiEndpoints = [
    {
      name: 'Authentication',
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate users and get access tokens',
      parameters: ['email', 'password'],
      response: 'JWT token'
    },
    {
      name: 'User Profile',
      method: 'GET',
      endpoint: '/api/user/profile',
      description: 'Get user profile information',
      parameters: ['token'],
      response: 'User profile data'
    },
    {
      name: 'Services List',
      method: 'GET',
      endpoint: '/api/services',
      description: 'Get list of available services',
      parameters: ['category', 'limit'],
      response: 'Array of services'
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
        </div>

        {/* API Endpoints */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Endpoint:</span>
                    <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">{endpoint.endpoint}</code>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Description:</span>
                    <p className="text-gray-600 mt-1">{endpoint.description}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Parameters:</span>
                    <div className="mt-1">
                      {endpoint.parameters.map((param, i) => (
                        <span key={i} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2">
                          {param}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Response:</span>
                    <p className="text-gray-600 mt-1">{endpoint.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}