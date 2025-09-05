import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Copy, 
  ExternalLink,
  Server,
  Database,
  Cloud,
  Lock,
  Globe,
  Settings,
  Monitor,
  Brain
} from 'lucide-react';

const ApiDocsPage = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'Authentication API',
      description: 'Secure authentication and authorization endpoints',
      icon: Shield,
      methods: ['POST', 'GET'],
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          description: 'User login',
          requestBody: {
            email: 'string',
            password: 'string'
          },
          response: {
            token: 'string',
            user: 'object'
          }
        },
        {
          method: 'POST',
          path: '/api/v1/auth/register',
          description: 'User registration',
          requestBody: {
            email: 'string',
            password: 'string',
            name: 'string'
          },
          response: {
            token: 'string',
            user: 'object'
          }
        }
      ]
    },
    {
      title: 'Services API',
      description: 'Access to our micro SaaS and IT services',
      icon: Server,
      methods: ['GET', 'POST'],
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/services',
          description: 'Get all available services',
          response: {
            services: 'array',
            total: 'number',
            page: 'number'
          }
        },
        {
          method: 'POST',
          path: '/api/v1/services/request',
          description: 'Request a new service',
          requestBody: {
            serviceId: 'string',
            requirements: 'object',
            contactInfo: 'object'
          },
          response: {
            requestId: 'string',
            status: 'string'
          }
        }
      ]
    },
    {
      title: 'AI Services API',
      description: 'AI-powered services and machine learning endpoints',
      icon: Brain,
      methods: ['POST', 'GET'],
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/analyze',
          description: 'AI content analysis',
          requestBody: {
            content: 'string',
            type: 'string'
          },
          response: {
            analysis: 'object',
            confidence: 'number'
          }
        },
        {
          method: 'POST',
          path: '/api/v1/ai/generate',
          description: 'AI content generation',
          requestBody: {
            prompt: 'string',
            type: 'string'
          },
          response: {
            content: 'string',
            metadata: 'object'
          }
        }
      ]
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Authentication Example',
      code: `// Login request
const response = await fetch('/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data.token);`
    },
    {
      language: 'Python',
      title: 'Services API Example',
      code: `import requests

# Get all services
response = requests.get('https://api.ziontechgroup.com/v1/services')
services = response.json()

# Request a service
service_request = {
    "serviceId": "ai-content-generation",
    "requirements": {
        "contentType": "blog",
        "length": 1000
    },
    "contactInfo": {
        "email": "client@example.com"
    }
}

response = requests.post(
    'https://api.ziontechgroup.com/v1/services/request',
    json=service_request
)`
    },
    {
      language: 'cURL',
      title: 'AI Services Example',
      code: `# AI Content Analysis
curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{
    "content": "Your content here",
    "type": "sentiment"
  }'`
    }
  ];

  return (
    <Layout title="API Documentation - Zion Tech Group" description="Comprehensive API documentation for Zion Tech Group's services and solutions.">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Integrate with our powerful APIs to access AI services, IT solutions, and Micro SAAS platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#getting-started" 
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="#examples" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Examples
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Get Your API Key</h3>
                    <p className="text-gray-600 mb-4">
                      Sign up for an account and generate your API key from the dashboard.
                    </p>
                    <Link 
                      href="/register" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Sign Up Now
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Choose Your Endpoint</h3>
                    <p className="text-gray-600 mb-4">
                      Select from our comprehensive range of APIs for AI, IT, and Micro SAAS services.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Make Your First Request</h3>
                    <p className="text-gray-600 mb-4">
                      Use our code examples to integrate with our APIs in your preferred language.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <nav className="space-y-2">
                    <a href="#authentication" className="block text-blue-600 hover:text-blue-700">Authentication</a>
                    <a href="#services" className="block text-blue-600 hover:text-blue-700">Services API</a>
                    <a href="#ai-services" className="block text-blue-600 hover:text-blue-700">AI Services</a>
                    <a href="#examples" className="block text-blue-600 hover:text-blue-700">Code Examples</a>
                    <a href="#support" className="block text-blue-600 hover:text-blue-700">Support</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">API Endpoints</h2>
            <div className="space-y-8">
              {apiEndpoints.map((api, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <api.icon className="h-6 w-6 text-blue-600 mr-3" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{api.title}</h3>
                          <p className="text-gray-600">{api.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {api.methods.map((method, methodIndex) => (
                          <span 
                            key={methodIndex}
                            className={`px-2 py-1 text-xs font-medium rounded ${
                              method === 'GET' ? 'bg-green-100 text-green-800' :
                              method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {api.endpoints.map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <span className={`px-2 py-1 text-xs font-medium rounded mr-3 ${
                                endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {endpoint.method}
                              </span>
                              <code className="text-sm font-mono text-gray-900">{endpoint.path}</code>
                            </div>
                            <button
                              onClick={() => copyToClipboard(endpoint.path, `${api.title}-${endpointIndex}`)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              {copiedEndpoint === `${api.title}-${endpointIndex}` ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                          <p className="text-gray-600 mb-3">{endpoint.description}</p>
                          {endpoint.requestBody && (
                            <div className="mb-3">
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Request Body:</h4>
                              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
                                {JSON.stringify(endpoint.requestBody, null, 2)}
                              </pre>
                            </div>
                          )}
                          {endpoint.response && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Response:</h4>
                              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
                                {JSON.stringify(endpoint.response, null, 2)}
                              </pre>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section id="examples" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Code Examples</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{example.language}</span>
                    <button
                      onClick={() => copyToClipboard(example.code, `example-${index}`)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedEndpoint === `example-${index}` ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{example.title}</h3>
                    <pre className="text-sm text-gray-800 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our developer support team is here to help you integrate with our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/docs" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Full Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApiDocsPage;