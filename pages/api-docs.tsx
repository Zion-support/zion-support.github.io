import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Server, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Copy, 
  ExternalLink,
  Terminal,
  Key,
  Clock,
  Users,
  BarChart3,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const apiFeatures = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
    icon: Code,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible GraphQL API for efficient data fetching and real-time updates.',
    icon: Database,
    features: ['Schema Definition', 'Query Optimization', 'Real-time Subscriptions', 'Type Safety']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication for live updates.',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven']
  },
  {
    title: 'API Security',
    description: 'Enterprise-grade security with authentication and authorization.',
    icon: Shield,
    features: ['JWT Authentication', 'OAuth 2.0', 'Rate Limiting', 'API Keys']
  },
  {
    title: 'API Monitoring',
    description: 'Comprehensive monitoring and analytics for API performance.',
    icon: BarChart3,
    features: ['Performance Metrics', 'Usage Analytics', 'Error Tracking', 'Uptime Monitoring']
  },
  {
    title: 'API Documentation',
    description: 'Interactive documentation with code examples and testing tools.',
    icon: Book,
    features: ['Interactive Docs', 'Code Examples', 'Testing Tools', 'SDK Generation']
  }
];

const apiEndpoints = [
  {
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
      { name: 'message', type: 'string', required: true, description: 'Email message to respond to' },
      { name: 'tone', type: 'string', required: false, description: 'Response tone (professional, casual, friendly)' }
    ]
  },
  {
    name: 'Content Generator',
    method: 'POST',
    path: '/api/ai/content-generator',
    description: 'Generate high-quality content using AI',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
      { name: 'type', type: 'string', required: true, description: 'Content type (blog, social, email)' }
    ]
  },
  {
    name: 'Data Analytics',
    method: 'GET',
    path: '/api/analytics/data',
    description: 'Retrieve analytics data and insights',
    parameters: [
      { name: 'start_date', type: 'string', required: true, description: 'Start date for analytics' },
      { name: 'end_date', type: 'string', required: true, description: 'End date for analytics' }
    ]
  },
  {
    name: 'User Management',
    method: 'GET',
    path: '/api/users',
    description: 'Retrieve user information and management data',
    parameters: [
      { name: 'page', type: 'integer', required: false, description: 'Page number for pagination' },
      { name: 'limit', type: 'integer', required: false, description: 'Number of users per page' }
    ]
  }
];

const sdkExamples = [
  {
    language: 'JavaScript',
    code: `// Install the SDK
npm install @ziontechgroup/api-sdk

// Initialize the client
import { ZionAPI } from '@ziontechgroup/api-sdk';

const api = new ZionAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ziontechgroup.com'
});

// Generate AI content
const response = await api.ai.generateContent({
  prompt: 'Write a blog post about AI trends',
  type: 'blog'
});

console.log(response.data);`
  },
  {
    language: 'Python',
    code: `# Install the SDK
pip install ziontechgroup-api

# Initialize the client
from ziontechgroup import ZionAPI

api = ZionAPI(
    api_key='your-api-key',
    base_url='https://api.ziontechgroup.com'
)

# Generate AI content
response = api.ai.generate_content(
    prompt='Write a blog post about AI trends',
    type='blog'
)

print(response.data)`
  },
  {
    language: 'cURL',
    code: `# Generate AI content
curl -X POST "https://api.ziontechgroup.com/api/ai/content-generator" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog"
  }'`
  }
];

export default function APIDocs() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate our AI, IT, and Micro SaaS solutions into your applications."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              API Documentation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Integrate Zion Tech Group's powerful APIs into your applications. 
              Comprehensive documentation, SDKs, and examples to get you started quickly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Get API Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#quick-start"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                Quick Start Guide
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, secure, and easy-to-use APIs designed for modern applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for AI, IT, and Micro SaaS services
            </p>
          </div>
          
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{endpoint.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{endpoint.path}</code>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                  <div className="space-y-2">
                    {endpoint.parameters.map((param) => (
                      <div key={param.name} className="flex items-center space-x-4 text-sm">
                        <code className="bg-gray-100 px-2 py-1 rounded">{param.name}</code>
                        <span className="text-gray-600">{param.type}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {param.required ? 'Required' : 'Optional'}
                        </span>
                        <span className="text-gray-500">{param.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Examples */}
      <section id="quick-start" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our APIs using our SDKs and code examples
            </p>
          </div>
          
          <div className="space-y-8">
            {sdkExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{example.language}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="p-6 text-green-400 text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authentication
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your API calls with our authentication methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Key className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">API Keys</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Use API keys for simple authentication. Include your key in the Authorization header.
              </p>
              <code className="bg-gray-100 p-2 rounded text-sm block">
                Authorization: Bearer your-api-key
              </code>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">OAuth 2.0</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Use OAuth 2.0 for more secure authentication with token refresh capabilities.
              </p>
              <code className="bg-gray-100 p-2 rounded text-sm block">
                Authorization: Bearer oauth-token
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rate Limits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fair usage policies to ensure optimal performance for all users
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Tier</h3>
              <p className="text-gray-600 mb-2">1,000 requests/day</p>
              <p className="text-sm text-gray-500">Perfect for testing and small projects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro Tier</h3>
              <p className="text-gray-600 mb-2">10,000 requests/day</p>
              <p className="text-sm text-gray-500">Ideal for growing businesses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-2">Unlimited requests</p>
              <p className="text-sm text-gray-500">Custom solutions for large organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get your API key and start building amazing applications with our powerful APIs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Get API Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Need Help?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}