'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Key, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  FileText,
  Bell,
  Settings,
  Database,
  Globe
} from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/ai-services',
      description: 'Retrieve all available AI services',
      icon: Code
    },
    {
      method: 'POST',
      path: '/api/v1/ai-services/analyze',
      description: 'Analyze data using AI services',
      icon: Zap
    },
    {
      method: 'GET',
      path: '/api/v1/projects',
      description: 'List all projects for authenticated user',
      icon: FileText
    },
    {
      method: 'POST',
      path: '/api/v1/projects',
      description: 'Create a new project',
      icon: Target
    }
  ];

  const features = [
    {
      icon: Key,
      title: 'Authentication',
      description: 'Secure API access with JWT tokens and OAuth 2.0'
    },
    {
      icon: Shield,
      title: 'Rate Limiting',
      description: 'Fair usage policies with configurable rate limits'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'Live data updates with WebSocket connections'
    },
    {
      icon: Globe,
      title: 'RESTful Design',
      description: 'Clean, intuitive REST API following best practices'
    }
  ];

  return (
    <>
      <Helmet>
        <title>API Reference - Zion Tech Group Developer API</title>
        <meta name="description" content="Complete API reference for Zion Tech Group services. Authentication, endpoints, SDKs, and integration guides." />
        <meta name="keywords" content="API reference, developer API, REST API, SDK, integration, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                API Reference
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete API reference for Zion Tech Group services. 
                Build powerful integrations with our RESTful APIs and SDKs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our API is designed for developers, by developers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for all services.
              </p>
            </div>
            
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <endpoint.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                        </div>
                        <p className="text-gray-300">{endpoint.description}</p>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your API key and start integrating with our services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get API Key
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View SDKs
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiDocsPage;