'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate user and get access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      example: {
        request: `{
  "email": "user@example.com",
  "password": "your_password"
}`,
        response: `{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}`
      }
    },
    {
      id: 'ai-predict',
      title: 'AI Prediction',
      method: 'POST',
      endpoint: '/api/ai/predict',
      description: 'Get AI predictions for your data',
      parameters: [
        { name: 'model_id', type: 'string', required: true, description: 'AI model identifier' },
        { name: 'data', type: 'object', required: true, description: 'Input data for prediction' }
      ],
      example: {
        request: `{
  "model_id": "sentiment_analysis_v1",
  "data": {
    "text": "This is a great product!"
  }
}`,
        response: `{
  "success": true,
  "prediction": {
    "sentiment": "positive",
    "confidence": 0.95
  }
}`
      }
    },
    {
      id: 'data-upload',
      title: 'Data Upload',
      method: 'POST',
      endpoint: '/api/data/upload',
      description: 'Upload data for processing',
      parameters: [
        { name: 'file', type: 'file', required: true, description: 'Data file to upload' },
        { name: 'format', type: 'string', required: false, description: 'File format (csv, json, xml)' }
      ],
      example: {
        request: `Content-Type: multipart/form-data

file: data.csv
format: csv`,
        response: `{
  "success": true,
  "file_id": "file_123456789",
  "status": "uploaded",
  "size": 1024000
}`
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              API <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive API reference for integrating with Zion Tech Group's AI and IT solutions. 
              Get started with our powerful APIs in minutes.
            </p>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Key className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Authentication</h3>
                <p className="text-gray-300 text-sm">Secure API access with JWT tokens and OAuth 2.0 support</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-time</h3>
                <p className="text-gray-300 text-sm">WebSocket support for real-time data streaming and updates</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">RESTful</h3>
                <p className="text-gray-300 text-sm">RESTful API design with comprehensive error handling</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              API <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Endpoints</span>
            </h2>
            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <div key={endpoint.id} className="cyber-card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{endpoint.title}</h3>
                      <p className="text-gray-300">{endpoint.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'POST' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="bg-gray-800 text-cyan-400 px-3 py-1 rounded text-sm">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Parameters */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                      <div className="space-y-3">
                        {endpoint.parameters.map((param, idx) => (
                          <div key={idx} className="border-l-2 border-cyan-400 pl-4">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-white font-semibold">{param.name}</span>
                              <span className="text-cyan-400 text-sm">{param.type}</span>
                              {param.required && (
                                <span className="text-red-400 text-xs">required</span>
                              )}
                            </div>
                            <p className="text-gray-300 text-sm">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Example</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Request</h5>
                          <div className="relative">
                            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
                              <code>{endpoint.example.request}</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(endpoint.example.request, `${endpoint.id}-request`)}
                              className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                            >
                              {copiedCode === `${endpoint.id}-request` ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Response</h5>
                          <div className="relative">
                            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
                              <code>{endpoint.example.response}</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(endpoint.example.response, `${endpoint.id}-response`)}
                              className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                            >
                              {copiedCode === `${endpoint.id}-response` ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              SDKs & <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Libraries</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'JavaScript', version: 'v2.1.0', icon: 'JS' },
                { name: 'Python', version: 'v1.8.2', icon: 'PY' },
                { name: 'Java', version: 'v1.5.1', icon: 'J' },
                { name: 'C#', version: 'v1.3.0', icon: 'C#' }
              ].map((sdk, index) => (
                <div key={sdk.name} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{sdk.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sdk.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{sdk.version}</p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your API key and start building amazing applications with our powerful APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get API Key
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Full Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APIDocsPage;