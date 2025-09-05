<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Code, Book, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';
=======
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> main

const apiServices = [
  {
    title: 'RESTful API',
<<<<<<< HEAD
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
=======
    description: 'Clean, intuitive REST API design',
>>>>>>> main
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
<<<<<<< HEAD
    title: 'GraphQL Support',
    description: 'Flexible GraphQL API for efficient data fetching and real-time updates.',
    icon: Code,
    features: ['Schema Definition', 'Query Optimization', 'Real-time Subscriptions', 'Type Safety']
  },
  {
    title: 'Authentication',
    description: 'Secure authentication with JWT tokens and OAuth2 support.',
    icon: Shield,
    features: ['JWT Tokens', 'OAuth2', 'API Keys', 'Rate Limiting']
  },
  {
    title: 'Webhooks',
    description: 'Real-time event notifications with reliable webhook delivery.',
    icon: Zap,
    features: ['Event Triggers', 'Retry Logic', 'Signature Verification', 'Delivery Tracking']
  }
];

export default function ApiPage() {
  return (
    <>
      <Head>
        <title>API Services - Zion Tech Group | Developer APIs</title>
        <meta name="description" content="Comprehensive API services from Zion Tech Group. RESTful APIs, GraphQL, authentication, and developer tools for seamless integration." />
        <meta name="keywords" content="API services, REST API, GraphQL, developer tools, API integration, webhooks" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              API Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Powerful APIs designed for developers. Build amazing applications with our 
              comprehensive API services and developer tools.
            </motion.p>
          </div>
        </section>

        {/* API Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our API Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API solutions designed to integrate seamlessly with your applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <service.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
=======
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> main

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }
  ];
<<<<<<< HEAD
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Globe,
  Users,
  Settings
} from 'lucide-react';

const apiFeatures = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee',
    features: ['JWT Authentication', 'Rate Limiting', 'SSL Encryption', 'Data Validation']
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast responses with global CDN and caching',
    features: ['Global CDN', 'Response Caching', 'Compression', 'Load Balancing']
  },
  {
    icon: BookOpen,
    title: 'Developer Friendly',
    description: 'Comprehensive documentation and SDKs for easy integration',
    features: ['REST API', 'GraphQL', 'Webhooks', 'SDKs']
  },
  {
    icon: Terminal,
    title: 'Easy Integration',
    description: 'Simple endpoints with clear error messages and examples',
    features: ['RESTful Design', 'JSON Responses', 'Error Handling', 'Testing Tools']
  }
];

const endpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    url: '/api/auth/login',
    description: 'Authenticate users and get access tokens'
  },
  {
    name: 'Get Services',
    method: 'GET',
    url: '/api/services',
    description: 'Retrieve all available services'
  },
  {
    name: 'Create Contact',
    method: 'POST',
    url: '/api/contact',
    description: 'Submit contact forms and inquiries'
  },
  {
    name: 'Get Analytics',
    method: 'GET',
    url: '/api/analytics',
    description: 'Retrieve usage analytics and metrics'
  }
];

export default function APIPage() {

  const apiEndpoints = [{
    method: 'GET',
    path: '/api/v1/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'limit', type: 'integer', required: false, description: 'Number of services to return (max 100)' },
      { name: 'offset', type: 'integer', required: false, description: 'Number of services to skip' },
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' }
    ],
    responses: [
      { code: 200, description: 'Success', example: '{ "services": [...], "total": 45 }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }]
  },
  {
    title: 'Authentication',
    description: 'Secure API key authentication',
    icon: Key
  },
  {
  },
  {
    method: 'POST',
    endpoint: '/api/v1/ai-services',
    description: 'Create a new AI service request',
    parameters: ['service_type', 'requirements', 'budget'],
    response: 'Service request object'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/it-services',
    description: 'Retrieve all IT services',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of IT service objects'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/micro-saas',
    description: 'Retrieve all Micro SaaS products',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of Micro SaaS product objects'
  }
];

export default function API() {
  return (
          <div className="container mx-auto px-4">
            <motion.div
                </Link>
=======

  return (
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
                API <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Integrate our AI and technology services into your applications with our powerful, 
                easy-to-use APIs. Built for developers, by developers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/api-docs"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get API Key
                </a>
>>>>>>> main
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
                const IconComponent = feature.icon;
                return (;
                  <motion.div);
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  </motion.div>
                );
              })}
            </div>,
          </div>;
        </section>;

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our APIs?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features and excellent documentation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
>>>>>>> main
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
=======
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start building with our APIs today. Get access to comprehensive documentation and developer support.
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
            >
              Get API Access <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
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

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Access Zion Tech Group's powerful APIs for AI, IT, and micro SaaS solutions. Comprehensive developer resources and documentation." />
        <meta name="keywords" content="API, developer resources, REST API, GraphQL, WebSocket, SDK" />
      </Head>

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
              Powerful APIs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Integrate with our comprehensive APIs to build powerful applications 
              using our AI, IT, and micro SaaS services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of APIs designed for modern applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
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
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{feature.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/api-docs"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start building with our APIs today. Get your API key and begin integration.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
              Get API Access
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> main
=======
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
                Get your API key and start building amazing applications with our services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
  );
}