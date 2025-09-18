<<<<<<< HEAD
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
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
      { name: 'period', type: 'string', required: true, description: 'Time period for prediction' }
    ],
    response: {
      status: 200,
      data: {
        predictions: 'array',
        accuracy: 'number',
        trends: 'array'
      }
    }
  },
  {
    name: 'Content Generation',
    method: 'POST',
    path: '/api/ai/content-generation',
    description: 'Generate AI-powered content for various purposes',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
      { name: 'type', type: 'string', required: true, description: 'Type of content to generate' }
    ],
    response: {
      status: 200,
      data: {
        content: 'string',
        metadata: 'object'
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
console.log(data.response);`
  },
  {
    language: 'Python',
    code: `# Predictive Analytics
import requests

response = requests.post(
    'https://api.ziontechgroup.com/ai/predictive-analytics',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'data': historical_data,
        'period': '30_days'
    }
)

predictions = response.json()
print(predictions['predictions'])`
  },
  {
    language: 'cURL',
    code: `# Content Generation
curl -X POST https://api.ziontechgroup.com/ai/content-generation \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog_post"
  }'`
  }
];

export default function APIDocumentationPage() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services. Learn how to integrate with our APIs, view endpoints, and access code examples."
      keywords="API documentation, REST API, integration, developer docs, endpoints, Zion Tech Group API"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="text-blue-600">Documentation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Integrate our AI services into your applications with our comprehensive REST API. 
                Get started with our easy-to-use endpoints and code examples.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get API Key
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">API Endpoints</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive API endpoints for AI services.
              </p>
            </motion.div>
            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{endpoint.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-center justify-between text-sm">
                            <span className="font-mono">{param.name}</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {param.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Response</h4>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <pre className="text-sm font-mono">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Examples</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get started quickly with our code examples in multiple programming languages.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get your API key and start integrating our AI services into your applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
