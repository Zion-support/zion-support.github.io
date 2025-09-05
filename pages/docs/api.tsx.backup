import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, BookOpen, Shield, Zap, ChevronRight, ExternalLink, Copy, Check } from 'lucide-react';

const endpoints = [
  {
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
      { name: 'message', type: 'string', required: true, description: 'The email message to respond to' },
      { name: 'context', type: 'object', required: false, description: 'Additional context for the response' }
    ],
    response: {
      status: 200,
      data: {
        response: 'string',
        confidence: 'number',
        suggestions: 'array'
      }
    }
  },
  {
    name: 'Predictive Analytics',
    method: 'POST',
    path: '/api/ai/predictive-analytics',
    description: 'Generate business predictions and forecasts',
    parameters: [
      { name: 'data', type: 'array', required: true, description: 'Historical data for analysis' },
      { name: 'period', type: 'string', required: false, description: 'Time period for prediction' }
    ],
    response: {
      status: 200,
      data: {
        predictions: 'array',
        confidence: 'number',
        insights: 'array'
      }
    }
  },
  {
    name: 'Document Processor',
    method: 'POST',
    path: '/api/ai/document-processor',
    description: 'Process and extract information from documents',
    parameters: [
      { name: 'document', type: 'file', required: true, description: 'Document file to process' },
      { name: 'type', type: 'string', required: true, description: 'Document type (pdf, docx, etc.)' }
    ],
    response: {
      status: 200,
      data: {
        extractedText: 'string',
        entities: 'array',
        summary: 'string'
      }
    }
  }
];

export default function APIDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const codeExamples = {
    javascript: `// JavaScript/Node.js Example
const response = await fetch('https://api.ziontechgroup.com/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data);`,
    python: `# Python Example
import requests

url = 'https://api.ziontechgroup.com/api/v1/auth/login'
data = {
    'email': 'user@example.com',
    'password': 'your-password'
}

response = requests.post(url, json=data)
result = response.json()
print(result)`,
    curl: `# cURL Example
curl -X POST https://api.ziontechgroup.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your-password"
  }'`
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">API Documentation</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                Get API Key
              </Link>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('authentication')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === 'authentication' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Authentication
              </button>
              <button
                onClick={() => setActiveTab('endpoints')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === 'endpoints' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Endpoints
              </button>
              <button
                onClick={() => setActiveTab('examples')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === 'examples' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Code Examples
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">API Overview</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our comprehensive API provides access to all our AI, IT, and micro SAAS services. 
                    Built with modern REST principles, it's designed for easy integration and scalability.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <Shield className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
                    <p className="text-gray-600">Enterprise-grade security with OAuth 2.0 and API key authentication</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <Zap className="h-8 w-8 text-yellow-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
                    <p className="text-gray-600">High-performance API with sub-100ms response times</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Well Documented</h3>
                    <p className="text-gray-600">Comprehensive documentation with interactive examples</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'authentication' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    All API requests require authentication. We support both API key and OAuth 2.0 authentication methods.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">API Key Authentication</h3>
                  <p className="text-gray-600 mb-4">
                    Include your API key in the Authorization header:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <pre className="text-sm">Authorization: Bearer YOUR_API_KEY</pre>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">OAuth 2.0</h3>
                  <p className="text-gray-600 mb-4">
                    For more secure applications, use OAuth 2.0:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <pre className="text-sm">{`POST /oauth/token
{
  "grant_type": "client_credentials",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}`}</pre>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'endpoints' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Explore our comprehensive API endpoints for AI, IT, and micro SAAS services.
                  </p>
                </div>

                <div className="space-y-6">
                  {endpoints.map((endpoint, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm border"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{endpoint.name}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {endpoint.method}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{endpoint.description}</p>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <code className="text-sm">{endpoint.path}</code>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Parameters</h4>
                          <div className="space-y-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <div key={paramIndex} className="flex justify-between items-center">
                                <span className="font-mono text-sm">{param.name}</span>
                                <span className={`px-2 py-1 rounded text-xs ${
                                  param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {param.type} {param.required ? '(required)' : '(optional)'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <div className="bg-gray-100 p-3 rounded-lg">
                            <pre className="text-sm">{JSON.stringify(endpoint.response, null, 2)}</pre>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'examples' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Get started quickly with these code examples in multiple programming languages.
                  </p>
                </div>

                <div className="space-y-6">
                  {Object.entries(codeExamples).map(([language, code]) => (
                    <motion.div
                      key={language}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-6 rounded-lg shadow-sm border"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 capitalize">{language}</h3>
                        <button
                          onClick={() => copyToClipboard(code)}
                          className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          {copiedCode === code ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                          {copiedCode === code ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">{code}</pre>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}