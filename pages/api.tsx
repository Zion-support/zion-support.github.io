<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
=======
<<<<<<< HEAD

import Layout from '../components/Layout';
=======
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb

const apiServices = [
  {
    title: 'RESTful API',
<<<<<<< HEAD
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling'],
    pricing: 'Included with all plans'
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs with real-time subscriptions.',
    icon: Database,
    features: ['Single Endpoint', 'Real-time Subscriptions', 'Type Safety', 'Introspection'],
    pricing: 'Starting at $99/month'
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication for live updates.',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven'],
    pricing: 'Starting at $149/month'
  },
  {
    title: 'API Security',
    description: 'Enterprise-grade security with authentication and authorization.',
    icon: Shield,
    features: ['JWT Authentication', 'OAuth 2.0', 'Rate Limiting', 'API Keys'],
    pricing: 'Included with all plans'
  },
  {
    title: 'API Monitoring',
    description: 'Comprehensive monitoring and analytics for API performance.',
    icon: Server,
    features: ['Performance Metrics', 'Usage Analytics', 'Error Tracking', 'Uptime Monitoring'],
    pricing: 'Starting at $79/month'
  },
  {
    title: 'API Documentation',
    description: 'Interactive documentation with code examples and testing tools.',
    icon: Book,
    features: ['Interactive Docs', 'Code Examples', 'Testing Tools', 'SDK Generation'],
    pricing: 'Included with all plans'
  }
];

const integrationExamples = [
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

// Make API calls
const response = await api.ai.generateContent({
  prompt: 'Write a blog post about AI trends',
  type: 'blog'
});`
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

# Make API calls
response = api.ai.generate_content(
    prompt='Write a blog post about AI trends',
    type='blog'
)`
  },
  {
    language: 'cURL',
    code: `# Make API calls with cURL
curl -X POST "https://api.ziontechgroup.com/api/ai/content-generator" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog"
  }'`
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small projects and startups',
    features: [
      '1,000 API calls/month',
      'RESTful API access',
      'Basic documentation',
      'Email support',
      '99.9% uptime SLA'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      '10,000 API calls/month',
      'All API types included',
      'Advanced monitoring',
      'Priority support',
      '99.95% uptime SLA',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited API calls',
      'Dedicated infrastructure',
      '24/7 phone support',
      '99.99% uptime SLA',
      'Custom development',
      'SLA guarantees'
    ],
    popular: false
  }
];

export default function API() {
  return (
    <Layout
      title="API Services - Zion Tech Group"
      description="Powerful API services for AI, IT, and Micro SaaS solutions. Integrate our services into your applications with our comprehensive APIs."
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
              API Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Integrate Zion Tech Group's powerful services into your applications 
              with our comprehensive API suite. RESTful, GraphQL, and WebSocket APIs available.
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
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/api-docs"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                View Documentation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of API services designed for modern applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-blue-600">{service.pricing}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integration Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our SDKs and code examples
            </p>
          </div>
          
          <div className="space-y-8">
            {integrationExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{example.language}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <Lock className="w-4 h-4" />
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your API needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  tier.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our APIs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers, by developers with enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">99.9% uptime with sub-second response times</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security with encryption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Well Documented</h3>
              <p className="text-gray-600">Comprehensive docs with code examples</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Handles millions of requests effortlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get your API key and start integrating our services into your applications today
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
              href="/api-docs"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Documentation
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
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs',
    icon: Code,
    features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connection', 'Event-driven']
  },
  {
    title: 'Authentication API',
    description: 'Secure user authentication and authorization',
    icon: Lock,
    features: ['OAuth 2.0', 'JWT Tokens', 'Multi-factor Auth', 'Session Management']
  },
  {
    title: 'Data API',
    description: 'Access and manage your data',
    icon: Database,
    features: ['CRUD Operations', 'Data Validation', 'Query Optimization', 'Caching']
  },
  {
    title: 'Analytics API',
    description: 'Track and analyze usage patterns',
    icon: Server,
    features: ['Usage Metrics', 'Performance Data', 'Custom Events', 'Real-time Dashboards']
  }
];
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      benefits: [
        "Standard HTTP methods",
        "JSON request/response format",
        "Comprehensive error handling",
        "Rate limiting and throttling"
      ]
    },
    {
      title: "Real-time Communication",
      description: "WebSocket and Server-Sent Events for live updates",
      icon: Zap,
      benefits: [
        "Instant data synchronization",
        "Low-latency communication",
        "Scalable connection management",
        "Automatic reconnection"
      ]
    },
    {
      title: "Security & Authentication",
      description: "Enterprise-grade security with multiple auth methods",
      icon: Shield,
      benefits: [
        "OAuth 2.0 and OpenID Connect",
        "JWT token management",
        "API key authentication",
        "Role-based access control"
      ]
    },
    {
      title: "Developer Experience",
      description: "Comprehensive documentation and developer tools",
      icon: Book,
      benefits: [
        "Interactive API documentation",
        "SDKs for multiple languages",
        "Code examples and tutorials",
        "Sandbox environment"
      ]
    }
  ];

  return (
<<<<<<< HEAD
    <Layout>
      <div className="min-h-screen bg-gray-50">
=======
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our AI, cloud, and enterprise APIs with detailed examples and guides."
      keywords="API documentation, REST API, AI API, cloud API, developer resources"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powerful APIs
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Build amazing applications with our comprehensive suite of APIs. 
                From REST to GraphQL, we provide the tools you need to succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Documentation
<<<<<<< HEAD
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get API Key
                </a>
=======
                </button>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              </div>
=======
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's powerful APIs to build amazing applications 
                with AI, cloud services, and enterprise solutions.
              </p>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
=======
        {/* API Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-12"
=======
        {/* API Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available APIs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
=======
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our API Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                Choose from our comprehensive suite of APIs designed for modern applications.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
<<<<<<< HEAD
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
=======
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our APIs?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built with developers in mind, our APIs offer the perfect balance of power and simplicity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  </p>
                  <ul className="space-y-2">
<<<<<<< HEAD
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
=======
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Features Section */}
=======
    title: 'GraphQL API',
    description: 'Flexible GraphQL API for complex queries',
    icon: Code,
    features: ['Flexible Queries', 'Real-time Subscriptions', 'Schema Introspection', 'Type Safety']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time communication and updates',
    icon: Zap,
    features: ['Real-time Updates', 'Bidirectional Communication', 'Low Latency', 'Event-driven']
  },
  {
    title: 'SDK Libraries',
    description: 'Official SDKs for popular programming languages',
    icon: Book,
    features: ['JavaScript/TypeScript', 'Python', 'Java', 'C#/.NET']
  }
];
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
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

export default function APIPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">API Documentation</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">{endpoint.title}</h2>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <p className="text-sm text-blue-600">{endpoint.baseUrl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Secure authentication and authorization endpoints',
      baseUrl: '/api/v1/auth',
      methods: [
        {
          method: 'POST',
          endpoint: '/login',
          description: 'Authenticate user with email and password',
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
        },
        {
          method: 'POST',
          endpoint: '/register',
          description: 'Register a new user account',
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "name": "John Doe"
  }'`
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Access our AI-powered services and models',
      baseUrl: '/api/v1/ai',
      methods: [
        {
          method: 'POST',
          endpoint: '/chat',
          description: 'Send messages to our AI chat service',
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "model": "gpt-4",
    "temperature": 0.7
  }'`
        }
      ]
    }
  ];

  const responseExamples = {
    success: {
      status: 200,
      data: {
        message: "Request successful",
        data: {
          id: "12345",
          name: "Example Response",
          created_at: "2024-01-01T00:00:00Z"
        }
      }
    },
    error: {
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request parameters",
        details: {
          field: "email",
          issue: "Invalid email format"
        }
      }
    }
  };

  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our AI, cloud, and enterprise APIs with detailed examples and guides."
      keywords="API documentation, REST API, AI API, cloud API, developer resources"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's powerful APIs to build amazing applications 
                with AI, cloud services, and enterprise solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Start Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started with our APIs in minutes. Follow these simple steps to make your first API call.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Get API Key</h3>
                  <p className="text-gray-600">Sign up and obtain your API key from the dashboard</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Make Request</h3>
                  <p className="text-gray-600">Use our RESTful APIs with your preferred language</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Build & Scale</h3>
                  <p className="text-gray-600">Create powerful applications with our APIs</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Examples */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
        <section className="py-20 bg-gray-50">
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
                Our APIs are built with developers in mind, offering powerful features and excellent documentation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Start Example
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with our APIs in just a few lines of code.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
              <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                <div className="text-green-400 mb-2"># Install the SDK</div>
                <div className="text-blue-400 mb-4">npm install zion-tech-api</div>
                
                <div className="text-green-400 mb-2"># Initialize the client</div>
                <div className="text-white mb-4">import {'{ ZionTechAPI }'} from 'zion-tech-api';</div>
                <div className="text-white mb-4">const api = new ZionTechAPI('your-api-key');</div>
                
                <div className="text-green-400 mb-2"># Make API calls</div>
                <div className="text-white mb-2">// Get all services</div>
                <div className="text-white mb-4">const services = await api.services.list();</div>
                
                <div className="text-white mb-2">// Create a new service</div>
                <div className="text-white">const newService = await api.services.create({'{'}</div>
                <div className="text-white ml-4">name: 'My Service',</div>
                <div className="text-white ml-4">description: 'A new service'</div>
                <div className="text-white">{'}'});</div>
=======
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Check className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Success Response</h3>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>{JSON.stringify(responseExamples.success, null, 2)}</code>
                    </pre>
                  </div>
                </motion.div>

<<<<<<< HEAD
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                <motion.div
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <XCircle className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Error Response</h3>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-red-400 text-sm font-mono">
                      <code>{JSON.stringify(responseExamples.error, null, 2)}</code>
                    </pre>
                  </div>
                </motion.div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
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
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Start building with our APIs today and join thousands of developers creating innovative applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get API Key
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Documentation
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
                  <ArrowRight className="ml-2 w-4 h-4" />
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                </a>
=======
                </button>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </MainLayout>
=======
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </Layout>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  );
}