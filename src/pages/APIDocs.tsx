import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, BookOpen, Zap, Database, Cloud, Shield, Users, Globe, Terminal, FileText, Download, Play, Search, Filter, Key, Crown, MessageCircle } from 'lucide-react';

export const APIDocs: React.FC = () => {
  const apiEndpoints = [
    {
      name: 'Authentication',
      description: 'Secure API authentication and authorization',
      endpoints: [
        { method: 'POST', path: '/api/auth/login', description: 'User login' },
        { method: 'POST', path: '/api/auth/logout', description: 'User logout' },
        { method: 'POST', path: '/api/auth/refresh', description: 'Refresh token' }
      ]
    },
    {
      name: 'AI Services',
      description: 'AI-powered business intelligence and automation',
      endpoints: [
        { method: 'POST', path: '/api/ai/analyze', description: 'Data analysis' },
        { method: 'POST', path: '/api/ai/generate', description: 'Content generation' },
        { method: 'POST', path: '/api/ai/optimize', description: 'Process optimization' }
      ]
    },
    {
      name: 'Data Management',
      description: 'Data storage, retrieval, and analytics',
      endpoints: [
        { method: 'GET', path: '/api/data/query', description: 'Query data' },
        { method: 'POST', path: '/api/data/upload', description: 'Upload data' },
        { method: 'PUT', path: '/api/data/update', description: 'Update data' }
      ]
    },
    {
      name: 'User Management',
      description: 'User accounts and permissions',
      endpoints: [
        { method: 'GET', path: '/api/users/profile', description: 'Get user profile' },
        { method: 'PUT', path: '/api/users/profile', description: 'Update profile' },
        { method: 'DELETE', path: '/api/users/account', description: 'Delete account' }
      ]
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Get API Key',
      description: 'Sign up and obtain your unique API key from the dashboard',
      icon: Key
    },
    {
      step: 2,
      title: 'Choose Endpoint',
      description: 'Select the appropriate API endpoint for your use case',
      icon: Search
    },
    {
      step: 3,
      title: 'Make Request',
      description: 'Send HTTP requests with proper authentication headers',
      icon: Terminal
    },
    {
      step: 4,
      title: 'Handle Response',
      description: 'Process the JSON response and implement error handling',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group's AI-powered services and solutions. Get started with our RESTful APIs, authentication, and integration guides."
      />
      
      {/* Header */}
      <div className="container-responsive py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate Zion Tech Group's AI-powered services into your applications with our comprehensive RESTful API documentation.
          </p>
        </motion.div>

        {/* Quick Start Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 rounded-2xl p-8 mb-16 border border-slate-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-cyan-400" />
            Quick Start Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            API Endpoints
          </h2>
          
          {apiEndpoints.map((category, index) => (
            <div key={category.name} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              
              <div className="space-y-4">
                {category.endpoints.map((endpoint, endpointIndex) => (
                  <div key={endpointIndex} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono text-sm">{endpoint.path}</code>
                      <span className="text-gray-400 text-sm">{endpoint.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Authentication Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-slate-800/50 rounded-2xl p-8 mt-16 border border-slate-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-cyan-400" />
            Authentication
          </h2>
          
          <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
            <p className="text-gray-300 mb-4">
              All API requests require authentication using an API key in the request header:
            </p>
            <code className="block bg-slate-800 rounded-lg p-4 text-cyan-400 font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
        </motion.div>

        {/* Rate Limiting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-slate-800/50 rounded-2xl p-8 mt-16 border border-slate-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Cloud className="w-8 h-8 text-cyan-400" />
            Rate Limiting & Usage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Tier</h3>
              <p className="text-gray-400 text-sm">1,000 requests/month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pro Tier</h3>
              <p className="text-gray-400 text-sm">100,000 requests/month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm">Unlimited requests</p>
            </div>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 mt-16 border border-cyan-500/20"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </a>
              <a
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5" />
                View Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default APIDocs;