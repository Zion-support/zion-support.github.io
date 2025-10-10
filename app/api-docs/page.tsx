'use client';
import React from 'react';
import { Code, Terminal, Zap, Shield, BarChart, CheckCircle, ArrowRight, Star, Brain, Cloud, Database, Users, Smartphone, Lock, TrendingUp, Settings, Calendar, Target, Clock, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, FileText, BookOpen } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/users',
      description: 'Retrieve all users',
      auth: 'Required',
      rateLimit: '100/hour'
    },
    {
      method: 'POST',
      path: '/api/v1/users',
      description: 'Create a new user',
      auth: 'Required',
      rateLimit: '50/hour'
    },
    {
      method: 'GET',
      path: '/api/v1/users/{id}',
      description: 'Retrieve a specific user',
      auth: 'Required',
      rateLimit: '200/hour'
    },
    {
      method: 'PUT',
      path: '/api/v1/users/{id}',
      description: 'Update a user',
      auth: 'Required',
      rateLimit: '100/hour'
    },
    {
      method: 'DELETE',
      path: '/api/v1/users/{id}',
      description: 'Delete a user',
      auth: 'Required',
      rateLimit: '50/hour'
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get analytics data',
      auth: 'Required',
      rateLimit: '500/hour'
    }
  ];

  const features = [
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Clean, intuitive REST endpoints following industry standards',
      benefits: ['HTTP methods', 'Status codes', 'JSON responses', 'Error handling']
    },
    {
      icon: Shield,
      title: 'Authentication',
      description: 'Secure API access with multiple authentication methods',
      benefits: ['API Keys', 'OAuth 2.0', 'JWT tokens', 'Rate limiting']
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'WebSocket support for real-time data streaming',
      benefits: ['Live updates', 'Event streaming', 'Push notifications', 'Low latency']
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Comprehensive analytics and monitoring endpoints',
      benefits: ['Usage metrics', 'Performance data', 'Custom reports', 'Export options']
    },
    {
      icon: Terminal,
      title: 'SDKs',
      description: 'Official SDKs for popular programming languages',
      benefits: ['JavaScript/Node.js', 'Python', 'PHP', 'Java', 'C#']
    },
    {
      icon: Settings,
      title: 'Webhooks',
      description: 'Event-driven notifications for real-time integrations',
      benefits: ['Event triggers', 'Custom payloads', 'Retry logic', 'Security validation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              API Documentation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              API
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Reference
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Complete API documentation for integrating with our services. 
              Build powerful applications with our comprehensive REST and GraphQL APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#endpoints"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Explore API</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                Get API Key
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              API <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, secure, and easy-to-use APIs designed for modern applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 transition-all duration-700 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section id="endpoints" className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              API <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Endpoints</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for all major operations.
            </p>
          </div>

          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Auth: {endpoint.auth}</span>
                    <span>Rate: {endpoint.rateLimit}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-300 font-semibold text-sm"
                  >
                    Try it out
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Code Examples</h2>
            <p className="text-gray-300">Get started quickly with these code examples</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">JavaScript/Node.js</h3>
              <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">
{`const response = await fetch('https://api.ziontechgroup.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const users = await response.json();
console.log(users);`}
                </code>
              </pre>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Python</h3>
              <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">
{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/users',
    headers=headers
)

users = response.json()
print(users)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API key and start integrating with our services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10">Get API Key</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/docs"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
            >
              View Full Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocsPage;