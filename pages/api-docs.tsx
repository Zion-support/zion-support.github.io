import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Code, 
  ArrowRight,
<<<<<<< HEAD
  Book,
  Zap,
  Shield,
=======
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Book,
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import { 
  Code, 
  ArrowRight,
  Book,
  Zap,
  Shield,
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  Globe,
  Database,
  Server,
  Lock,
<<<<<<< HEAD
<<<<<<< HEAD
  CheckCircle,
  Brain,
  Cloud
=======
import Layout from '../components/Layout';
=======
<<<<<<< HEAD
import Layout from '../components/Layout';

export default function APIDocs() {
  return (
    <Layout title="API Documentation - Zion Tech Group" description="Comprehensive API documentation for all our services">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
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
<<<<<<< HEAD
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
=======
  Brain,
  Cloud
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
  CheckCircle,
  Brain,
  Cloud
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
} from 'lucide-react';

const apiEndpoints = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
<<<<<<< HEAD
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
=======
  Brain, 
  Cloud 
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
} from 'lucide-react';

const apiEndpoints = [
  {
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'User Management',
    description: 'User profile and account management',
    icon: Globe,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    endpoint: '/api/users'
  },
  {
    title: 'Services API',
    description: 'Access to our micro SaaS and IT services',
    icon: Server,
    methods: ['GET', 'POST'],
    endpoint: '/api/services'
  },
  {
    title: 'AI Services',
    description: 'AI-powered solutions and machine learning APIs',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Analytics',
    description: 'Data analytics and reporting endpoints',
    icon: Database,
    methods: ['GET', 'POST'],
    endpoint: '/api/analytics'
  },
  {
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment APIs',
    icon: Cloud,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    endpoint: '/api/cloud'
  }
];

<<<<<<< HEAD
const features = [
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security with OAuth 2.0 and JWT tokens'
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'High-performance APIs with sub-100ms response times'
  },
  {
    icon: CheckCircle,
    title: 'Reliable',
    description: '99.9% uptime with comprehensive error handling'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Clear documentation and SDKs for all major languages'
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  }
];

export default function APIDocs() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and solutions." />
      </Head>

<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
=======
=======
export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />
      </Head>

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiEndpoints.map((endpoint, index) => {
              const IconComponent = endpoint.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{endpoint.title}</h3>
                      <code className="text-sm text-blue-600">{endpoint.endpoint}</code>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{endpoint.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Supported Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.methods.map((method, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/api-docs/${endpoint.endpoint.replace('/api/', '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Integration?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
              Contact Developer Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Code Examples */}
        <section className="py-16 bg-white">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
          <div className="max-w-7xl mx-auto px-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6 }}
              className="text-center"
=======
              transition={{ duration: 0.8 }}
              className="text-center text-white"
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
<<<<<<< HEAD
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation and integration guides for all our services
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs provide powerful, easy-to-use endpoints for all your integration needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Code className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">RESTful APIs</h3>
                <p className="text-gray-600">
                  Clean, intuitive REST endpoints that follow industry best practices.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Docs</h3>
                <p className="text-gray-600">
                  Detailed documentation with examples and interactive testing.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">
                  High-performance APIs with 99.9% uptime guarantee.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with OAuth 2.0 and API key authentication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
=======
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for all our services and solutions. 
                Build amazing applications with our powerful APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features and excellent documentation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for all services and solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <endpoint.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {endpoint.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-mono">
                        {endpoint.endpoint}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {endpoint.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.methods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          method === 'GET' ? 'bg-green-100 text-green-800' :
                          method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
=======
    <Layout>
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
                  <ArrowRight className="ml-2 w-4 h-4" />
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Quick Start Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Start Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with our APIs in minutes with our comprehensive quick start guide.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                <div className="text-green-400 mb-2"># Install our SDK</div>
                <div className="text-blue-400 mb-4">npm install zion-tech-sdk</div>
                
                <div className="text-green-400 mb-2"># Initialize the client</div>
                <div className="text-white mb-4">const client = new ZionTechClient('your-api-key');</div>
                
                <div className="text-green-400 mb-2"># Make your first API call</div>
                <div className="text-white">const services = await client.services.list();</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of developers building amazing applications with our APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
      </div>
    </>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}