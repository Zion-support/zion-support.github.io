import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs',
    icon: Database,
    features: ['Single Endpoint', 'Real-time Subscriptions', 'Type Safety', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven']
  }
];

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

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure user authentication and authorization',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'AI Services API',
    description: 'Machine learning and AI model endpoints',
    icon: Code,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Micro SaaS API',
    description: 'Manage micro SaaS applications and subscriptions',
    icon: Server,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/micro-saas'
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Database,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/it-services'
  }
];

export default function APIPage() {
  return (
    <Layout 
      title="API Services - Zion Tech Group"
      description="Comprehensive API services for AI, IT, and micro SaaS solutions. Build powerful applications with our developer-friendly APIs."
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
                API <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Powerful, developer-friendly APIs for AI, IT, and micro SaaS solutions. 
                Build amazing applications with our comprehensive API ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#api-features" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore APIs
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features Section */}
        <section id="api-features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features 
                and comprehensive documentation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
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

        {/* API Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                API Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of API services designed for different use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Available Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for different services and integrations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <endpoint.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{endpoint.title}</h3>
                      <p className="text-sm text-gray-600">{endpoint.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.methods.map((method, methodIndex) => (
                          <span 
                            key={methodIndex}
                            className={`px-2 py-1 rounded text-xs font-mono ${
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
                    <div>
                      <h4 className="font-semibold mb-2">Endpoint</h4>
                      <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get API access and start building amazing applications with our services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="/api-docs" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
import Head from 'next/head';
import Link from 'next/link';
import { Code, Key, Globe, Database, Shield, Zap, ArrowRight, Copy, CheckCircle, ExternalLink, Clock, Users } from 'lucide-react';
export default function API() {;
  const apiEndpoints = [;
    {;
      name: 'Authentication',
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate users and get access tokens',
      parameters: ['email', 'password'],
      response: 'JWT token',,
},
    {;
      name: 'User Profile',
      method: 'GET',
      endpoint: '/api/user/profile',
      description: 'Get user profile information',
      parameters: ['token'],
      response: 'User profile data';
},
    {;
      name: 'Services List',
      method: 'GET',
      endpoint: '/api/services',
      description: 'Get list of available services',
      parameters: ['category', 'limit'],
      response: 'Array of services';
}
  ];
  return (;
    <>;
      <Head>;
        <title>API Documentation - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">;
          <div className="container mx-auto px-4 text-center">;
            <h1 className=text-4xl md:text-5xl font-bold mb-4">;
              API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400>Documentation</span>;
            </h1>;
            <p className=text-xl text-gray-200 max-w-2xl mx-auto">;
              Comprehensive API documentation for integrating with Zion Tech Group services;
            </p>;
          </div>;
        </div>;

        {/* API Overview */}
        <div className="py-16 bg-white>;
          <div className=container mx-auto px-4">;
            <div className="grid md: grid-cols-3 gap-8>;
              <div className=text-center">;
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4>;
                  <Code className=w-8 h-8 text-blue-600" />;
                </div>;
                <h3 className="text-xl font-semibold text-gray-900 mb-2>RESTful APIs</h3>;
                <p className=text-gray-600">Clean, intuitive REST endpoints for easy integration</p>;
              </div>;
              <div className="text-center>;
                <div className=w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Shield className="w-8 h-8 text-green-600 />;
                </div>;
                <h3 className=text-xl font-semibold text-gray-900 mb-2">Secure</h3>;
                <p className="text-gray-600>Enterprise-grade security with JWT authentication</p>;
              </div>;
              <div className=text-center">;
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4>;
                  <Zap className=w-8 h-8 text-purple-600" />;
                </div>;
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Fast</h3>;
                <p className=text-gray-600">High-performance APIs with sub-100ms response times</p>;
              </div>;
            </div>;
          </div>;
        </div>;

        {/* API Endpoints */}
        <div className="py-16 bg-gray-50>;
          <div className="container mx-auto px-4">;
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2>;
            <div className="space-y-6">;
              {apiEndpoints.map((endpoint, index) => (;
                <div key={index} className="bg-white rounded-lg shadow-md p-6">;
                  <div className="flex items-center justify-between mb-4">;
                    <h3 className={`text-xl font-semibold text-gray-900`}>{endpoint.name}</h3>;
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${;
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :;
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :;
                      'bg-gray-100 text-gray-800';
}`}>;
                      {endpoint.method}
                    </span>;
                  </div>;
                  <div className=`bg-gray-100 rounded-lg p-4 mb-4`}>;
                    <code className="text-gray-800 font-mono>{endpoint.endpoint}</code>;
                  </div>;
                  <p className=text-gray-600 mb-4">{endpoint.description}</p>;
                  <div className="grid md: grid-cols-2 gap-4>;
                    <div>;
                      <h4 className=font-semibold text-gray-900 mb-2">Parameters:</h4>;
                      <ul className="text-sm text-gray-600>;
                        {endpoint.parameters.map((param, i) => (;
                          <li key={i} className=flex items-center">;
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2></span>;
                            {param}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
                    <div>;
                      <h4 className=font-semibold text-gray-900 mb-2">Response</h4>                      <p className="text-sm text-gray-600>{endpoint.response}</p>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </div>;

        {/* Getting Started */}
        <div className=py-16 bg-white">;
          <div className="container mx-auto px-4>;
            <div className=max-w-3xl mx-auto text-center">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6>Getting Started</h2>;
              <p className=text-lg text-gray-600 mb-8">;
                Ready to integrate with our APIs? Get your API key and start building amazing applications.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center>;
                <Link href=/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300>;
                  Get API Key;
                  <ArrowRight className=ml-2 w-5 h-5" />;
                </Link>;
                <Link href="/docs className=inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">                  View Full Documentation;
                  <ExternalLink className="ml-2 w-5 h-5" />;
                </Link>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  )}
>>>>>>> origin/automation-fixes
