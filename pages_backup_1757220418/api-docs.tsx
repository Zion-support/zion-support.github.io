import React from 'react';
import Head from 'next/head';
import { 
  Code, 
  Database, 
  Shield, 
  Zap,
  Globe,
  Lock
} from 'lucide-react';

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for our services." />
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
            <Code className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">REST API</h3>
            <p className="text-gray-300">
              RESTful API endpoints for all our services.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <Database className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Database API</h3>
            <p className="text-gray-300">
              Database access and management APIs.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <Shield className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Security API</h3>
            <p className="text-gray-300">
              Security and authentication APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
