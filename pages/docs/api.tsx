import React, { useState } from 'react';
import MainLayout from '../../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Code, Copy, Check, ExternalLink, ArrowRight, Terminal, Globe, Shield, Zap } from 'lucide-react';

export default function APIDocsPage() {
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
      description: 'Secure user authentication and authorization',
      method: 'POST',
      endpoint: '/api/v1/auth/login',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        success: true,
        data: {
          token: 'string',
          user: 'object',
          expires: 'string'
        }
      }
    },
    {
      id: 'ai-email',
      title: 'AI Email Responder',
      description: 'Generate intelligent email responses using AI',
      method: 'POST',
      endpoint: '/api/v1/ai/email-responder',
      parameters: [
        { name: 'message', type: 'string', required: true, description: 'The email message to respond to' },
        { name: 'context', type: 'object', required: false, description: 'Additional context for the response' }
      ],
      response: {
        success: true,
        data: {
          response: 'string',
          confidence: 'number',
          suggestions: 'array'
        }
      }
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics',
      description: 'Get predictive insights from your data',
      method: 'POST',
      endpoint: '/api/v1/analytics/predict',
      parameters: [
        { name: 'data', type: 'array', required: true, description: 'Input data for prediction' },
        { name: 'model', type: 'string', required: true, description: 'Model type to use for prediction' }
      ],
      response: {
        success: true,
        data: {
          predictions: 'array',
          confidence: 'number',
          accuracy: 'number'
        }
      }
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript/Node.js Example
const response = await fetch('https://api.ziontechgroup.com/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
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

url = "https://api.ziontechgroup.com/api/v1/auth/login"
payload = {
    "email": "user@example.com",
    "password": "your-password"
}

response = requests.post(url, json=payload)
data = response.json()
print(data)`,
    curl: `# cURL Example
curl -X POST https://api.ziontechgroup.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "email": "user@example.com",
    "password": "your-password"
  }'`
  };

  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for integrating with Zion Tech Group services. Build powerful applications with our RESTful APIs."
      keywords="API documentation, developer resources, REST API, integration, SDK"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group services. 
                Build powerful applications with our RESTful APIs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for seamless integration with our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.id}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{endpoint.title}</h3>
                      <p className="text-gray-600 mb-4">{endpoint.description}</p>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                          {endpoint.endpoint}
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-start gap-2">
                            <span className="text-sm font-medium text-gray-900 min-w-0 flex-shrink-0">
                              {param.name}
                            </span>
                            <span className="text-sm text-gray-500">({param.type})</span>
                            {param.required && (
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                                Required
                              </span>
                            )}
                            <p className="text-sm text-gray-600">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Response</h4>
                      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Code Examples</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with our code examples in multiple programming languages.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(codeExamples).map(([language, code], index) => (
                <motion.div
                  key={language}
                  className="bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 capitalize">
                      {language}
                    </h3>
                    <button
                      onClick={() => copyToClipboard(code, language)}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {copiedCode === language ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}