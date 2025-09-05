import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
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
  return (
    <Layout
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and reference for integrating with Zion Tech Group services."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group services using our comprehensive APIs.
                Build powerful applications with our developer-friendly platform.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-indigo-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive API endpoints for AI services, IT solutions, and micro SaaS platforms.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/analyze</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/predict</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/process</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/infrastructure/status</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/security/scan</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/cloud/resources</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/saas/subscribe</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/saas/usage</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/saas/configure</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Building Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to integrate with our APIs? Get started with our comprehensive documentation and developer tools.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get API Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
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
