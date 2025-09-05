import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Terminal,
  Globe,
  Shield,
  Zap,
  Database,
  Cpu,
  Cloud,
  XCircle
} from 'lucide-react';

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
        timestamp: 'string'
      }
    }
  },
  {
    name: 'AI Content Generator',
    method: 'POST',
    path: '/api/ai/content-generator',
    description: 'Generate high-quality content using AI',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'The content prompt' },
      { name: 'type', type: 'string', required: true, description: 'Content type (blog, social, email)' },
      { name: 'tone', type: 'string', required: false, description: 'Content tone (professional, casual, formal)' }
    ],
    response: {
      status: 200,
      data: {
        content: 'string',
        wordCount: 'number',
        suggestions: 'array'
      }
    }
  },
  {
    name: 'AI Code Review',
    method: 'POST',
    path: '/api/ai/code-review',
    description: 'Automated code review and suggestions',
    parameters: [
      { name: 'code', type: 'string', required: true, description: 'The code to review' },
      { name: 'language', type: 'string', required: true, description: 'Programming language' },
      { name: 'rules', type: 'array', required: false, description: 'Custom review rules' }
    ],
    response: {
      status: 200,
      data: {
        issues: 'array',
        suggestions: 'array',
        score: 'number',
        project: 'object'
      }
    }
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    code: `// AI Email Responder
const response = await fetch('/api/ai/email-responder', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    message: 'I need help with my account',
    context: { userId: '12345' }
  })
});

const data = await response.json();
console.log(data);`
  },
  {
    language: 'Python',
    code: `# AI Content Generator
import requests

url = "https://api.ziontechgroup.com/api/ai/content-generator"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "prompt": "Write a blog post about AI trends",
    "type": "blog",
    "tone": "professional"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`
  },
  {
    language: 'cURL',
    code: `# AI Code Review
curl -X POST "https://api.ziontechgroup.com/api/ai/code-review" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "code": "function hello() { console.log(\"Hello World\"); }",
    "language": "javascript",
    "rules": ["eslint", "prettier"]
  }'`
  }
];

export default function APIDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Endpoints for user authentication and authorization',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/auth',
      endpoints: [
        {
          method: 'POST',
          path: '/login',
          description: 'Authenticate user and return access token',
          parameters: [
            { name: 'email', type: 'string', required: true },
            { name: 'password', type: 'string', required: true }
          ],
          response: {
            status: 200,
            data: {
              token: 'string',
              user: 'object',
              expiresIn: 'number'
            }
          }
        },
        {
          method: 'POST',
          path: '/register',
          description: 'Register a new user account',
          parameters: [
            { name: 'email', type: 'string', required: true },
            { name: 'password', type: 'string', required: true },
            { name: 'name', type: 'string', required: true }
          ],
          response: {
            status: 201,
            data: {
              user: 'object',
              message: 'string'
            }
          }
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Services',
      description: 'AI-powered endpoints for various services',
      methods: ['POST', 'GET'],
      baseUrl: '/api/v1/ai',
      endpoints: [
        {
          method: 'POST',
          path: '/chat',
          description: 'Chat with AI assistant',
          parameters: [
            { name: 'message', type: 'string', required: true },
            { name: 'context', type: 'object', required: false }
          ],
          response: {
            status: 200,
            data: {
              response: 'string',
              confidence: 'number'
            }
          }
        }
      ]
    }
  ];

  const copyToClipboard = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(index);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">API Documentation</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for all Zion Tech Group services and endpoints.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Zap className="w-5 h-5 mr-2" />
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Database className="w-5 h-5 mr-2" />
                  <span>Real-time Data</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
              <p className="text-gray-600">Explore our comprehensive API endpoints and their usage.</p>
            </div>

            <div className="space-y-8">
              {apiEndpoints.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600 mt-1">{section.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-500 mr-4">Base URL: {section.baseUrl}</span>
                      <div className="flex gap-2">
                        {section.methods.map((method) => (
                          <span
                            key={method}
                            className={`px-2 py-1 text-xs rounded ${
                              method === 'POST' ? 'bg-green-100 text-green-800' :
                              method === 'GET' ? 'bg-blue-100 text-blue-800' :
                              method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-6">
                      {section.endpoints.map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="border-l-4 border-blue-500 pl-4">
                          <div className="flex items-center mb-2">
                            <span className={`px-2 py-1 text-xs rounded mr-3 ${
                              endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                              endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                              {endpoint.path}
                            </code>
                          </div>
                          <p className="text-gray-600 mb-3">{endpoint.description}</p>

                          {endpoint.parameters && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                              <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="px-3 py-2 text-left">Name</th>
                                      <th className="px-3 py-2 text-left">Type</th>
                                      <th className="px-3 py-2 text-left">Required</th>
                                      <th className="px-3 py-2 text-left">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {endpoint.parameters.map((param, paramIndex) => (
                                      <tr key={paramIndex} className="border-t">
                                        <td className="px-3 py-2 font-mono">{param.name}</td>
                                        <td className="px-3 py-2">{param.type}</td>
                                        <td className="px-3 py-2">
                                          <span className={`px-2 py-1 text-xs rounded ${
                                            param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                          }`}>
                                            {param.required ? 'Yes' : 'No'}
                                          </span>
                                        </td>
                                        <td className="px-3 py-2">{param.description}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {endpoint.response && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                              <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                                <pre className="text-sm">
                                  {JSON.stringify(endpoint.response, null, 2)}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
              <p className="text-gray-600">Get started quickly with these code examples in multiple languages.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <Terminal className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{example.language}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example.code, index)}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      {copiedCode === index ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm text-gray-800 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with our APIs today. Get your API key and begin integrating our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get API Key
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}