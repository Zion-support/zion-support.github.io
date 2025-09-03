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
        <title>API - Zion Tech Group</title>
        <meta name="description" content="API documentation and endpoints for Zion Tech Group services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive API documentation for integrating with Zion Tech Group services.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{endpoint.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-300">
                    <Code className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {endpoint.endpoint}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <Key className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    Parameters: {endpoint.parameters.join(', ')}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <Database className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    Response: {endpoint.response}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}