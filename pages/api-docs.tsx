import React from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, ExternalLink, ArrowRight, CheckCircle, AlertCircle, Info } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/health",
    description: "Check the health status of the API",
    parameters: [],
    response: {
      status: 200,
      data: {
        status: "healthy",
        timestamp: "2024-01-15T10:30:00Z",
        version: "1.0.0"
      }
    }
  },
  {
    method: "POST",
    endpoint: "/api/v1/ai/analyze",
    description: "Analyze text using AI-powered natural language processing",
    parameters: [
      { name: "text", type: "string", required: true, description: "Text to analyze" },
      { name: "analysis_type", type: "string", required: false, description: "Type of analysis (sentiment, entities, keywords)" }
    ],
    response: {
      status: 200,
      data: {
        analysis: {
          sentiment: "positive",
          confidence: 0.85,
          entities: ["Zion Tech", "AI", "technology"],
          keywords: ["innovation", "digital", "transformation"]
        }
      }
    }
  },
  {
    method: "GET",
    endpoint: "/api/v1/services",
    description: "Retrieve list of available services",
    parameters: [
      { name: "category", type: "string", required: false, description: "Filter by service category" },
      { name: "limit", type: "integer", required: false, description: "Number of results to return (default: 10)" }
    ],
    response: {
      status: 200,
      data: {
        services: [
          {
            id: 1,
            name: "AI Services",
            category: "AI",
            description: "Machine learning and AI solutions"
          }
        ],
        total: 1,
        page: 1,
        limit: 10
      }
    }
  },
  {
    method: "POST",
    endpoint: "/api/v1/contact",
    description: "Submit a contact form or inquiry",
    parameters: [
      { name: "name", type: "string", required: true, description: "Contact person's name" },
      { name: "email", type: "string", required: true, description: "Contact email address" },
      { name: "message", type: "string", required: true, description: "Message content" },
      { name: "company", type: "string", required: false, description: "Company name" }
    ],
    response: {
      status: 201,
      data: {
        message: "Contact form submitted successfully",
        id: "contact_123456"
      }
    }
  }
];

const sdkExamples = [
  {
    language: "JavaScript",
    code: `// Install the SDK
npm install @ziontech/api-client

// Initialize the client
import { ZionTechAPI } from '@ziontech/api-client';

const client = new ZionTechAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ziontechgroup.com'
});

// Make a request
const response = await client.ai.analyze({
  text: "Zion Tech Group provides excellent AI services",
  analysis_type: "sentiment"
});

console.log(response.data);`
  },
  {
    language: "Python",
    code: `# Install the SDK
pip install ziontech-api

# Initialize the client
from ziontech_api import ZionTechAPI

client = ZionTechAPI(
    api_key='your-api-key',
    base_url='https://api.ziontechgroup.com'
)

# Make a request
response = client.ai.analyze(
    text="Zion Tech Group provides excellent AI services",
    analysis_type="sentiment"
)

print(response.data)`
  },
  {
    language: "cURL",
    code: `curl -X POST "https://api.ziontechgroup.com/api/v1/ai/analyze" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Zion Tech Group provides excellent AI services",
    "analysis_type": "sentiment"
  }'`
  }
];

const features = [
  {
    icon: Code,
    title: "RESTful API",
    description: "Clean, intuitive REST API design following industry best practices"
  },
  {
    icon: CheckCircle,
    title: "High Availability",
    description: "99.9% uptime guarantee with redundant infrastructure"
  },
  {
    icon: AlertCircle,
    title: "Rate Limiting",
    description: "Built-in rate limiting to ensure fair usage and system stability"
  },
  {
    icon: Info,
    title: "Comprehensive Documentation",
    description: "Detailed API documentation with examples and code snippets"
  }
];

const statusCodes = [
  { code: 200, description: "Success - Request completed successfully" },
  { code: 201, description: "Created - Resource created successfully" },
  { code: 400, description: "Bad Request - Invalid request parameters" },
  { code: 401, description: "Unauthorized - Invalid or missing API key" },
  { code: 403, description: "Forbidden - Insufficient permissions" },
  { code: 404, description: "Not Found - Resource not found" },
  { code: 429, description: "Too Many Requests - Rate limit exceeded" },
  { code: 500, description: "Internal Server Error - Server error occurred" }
];

export default function APIDocsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Integrate with our powerful APIs to access AI services, data analytics, and cloud solutions programmatically.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed for developers, by developers, with simplicity and power in mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for AI services, data analytics, and more.
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">{endpoint.description}</p>

                  {endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Name</th>
                              <th className="text-left py-2">Type</th>
                              <th className="text-left py-2">Required</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b">
                                <td className="py-2 font-mono">{param.name}</td>
                                <td className="py-2">{param.type}</td>
                                <td className="py-2">
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {param.required ? 'Yes' : 'No'}
                                  </span>
                                </td>
                                <td className="py-2">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Response:</h4>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK Examples */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SDK Examples
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with our official SDKs and code examples.
              </p>
            </motion.div>

            <div className="space-y-8">
              {sdkExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-100 px-6 py-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">{example.language}</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-gray-300 text-sm">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Status Codes */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                HTTP Status Codes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding our API response codes and what they mean.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Code</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {statusCodes.map((status, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                            status.code >= 200 && status.code < 300 ? 'bg-green-100 text-green-800' :
                            status.code >= 400 && status.code < 500 ? 'bg-yellow-100 text-yellow-800' :
                            status.code >= 500 ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {status.code}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{status.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our powerful APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Get API Key
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}