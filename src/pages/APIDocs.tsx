import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function APIDocs() {
  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's AI, IT, and Micro SaaS services. Developer resources, endpoints, and integration guides." />
        <meta name="keywords" content="API documentation, developer resources, integration guides, Zion Tech Group, AI services API" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive developer resources and integration guides for Zion Tech Group's 
              cutting-edge AI, IT, and Micro SaaS services.
            </p>
          </div>

          {/* API Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Services API */}
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">AI Services API</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI Enterprise Automation</li>
                <li>• AI Data Analytics</li>
                <li>• AI Business Intelligence</li>
                <li>• AI Cybersecurity</li>
                <li>• AI Healthcare Platform</li>
                <li>• AI Quantum Computing</li>
              </ul>
              <button className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors">
                View Documentation
              </button>
            </div>

            {/* IT Infrastructure API */}
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">IT Infrastructure API</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Cloud & DevOps</li>
                <li>• Cybersecurity</li>
                <li>• Edge Computing</li>
                <li>• Blockchain Solutions</li>
                <li>• IoT Services</li>
                <li>• Digital Transformation</li>
              </ul>
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                View Documentation
              </button>
            </div>

            {/* Micro SaaS API */}
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Micro SaaS API</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI Sales Copilot</li>
                <li>• AI Compliance Assistant</li>
                <li>• Cloud FinOps Optimizer</li>
                <li>• AI Content Studio</li>
                <li>• AI HR Platform</li>
                <li>• Customer Support Automation</li>
              </ul>
              <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Authentication</h3>
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400">
                    curl -X POST https://api.ziontechgroup.com/auth/login \<br/>
                    &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                    &nbsp;&nbsp;-d '{"email": "your@email.com", "password": "yourpassword"}'
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">API Key</h3>
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400">
                    Authorization: Bearer YOUR_API_KEY<br/>
                    X-API-Version: v1
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* SDKs and Libraries */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript/Node.js</h3>
                <p className="text-gray-400 text-sm mb-4">Official SDK for web and Node.js applications</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Download
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">PY</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Python</h3>
                <p className="text-gray-400 text-sm mb-4">Python client library for data science and AI</p>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Download
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">GO</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Go</h3>
                <p className="text-gray-400 text-sm mb-4">High-performance Go client for microservices</p>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully. 
              Get in touch for technical assistance, custom integrations, and enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg transition-colors">
                Contact Developer Support
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors">
                Join Developer Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}