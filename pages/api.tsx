import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
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
  },
  {
    title: 'Database APIs',
    description: 'Direct database access through secure, optimized API endpoints.',
    icon: Database,
    features: ['CRUD Operations', 'Query Optimization', 'Data Validation', 'Connection Pooling']
  },
  {
    title: 'Server Management',
    description: 'Comprehensive server management and monitoring APIs.',
    icon: Server,
    features: ['Health Monitoring', 'Performance Metrics', 'Resource Management', 'Alerting']
  }
];

const apiFeatures = [
  {
    title: "RESTful APIs",
    description: "Clean, intuitive REST API endpoints for easy integration",
    icon: Globe,
    features: ["JSON responses", "HTTP status codes", "Error handling", "Rate limiting"]
  },
  {
    title: "GraphQL Support",
    description: "Flexible GraphQL API for efficient data fetching",
    icon: Code,
    features: ["Schema definition", "Query optimization", "Real-time subscriptions", "Type safety"]
  },
  {
    title: "Authentication",
    description: "Secure authentication and authorization",
    icon: Shield,
    features: ["JWT tokens", "OAuth2 integration", "API keys", "Role-based access"]
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications",
    icon: Zap,
    features: ["Event triggers", "Retry logic", "Signature verification", "Custom endpoints"]
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

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                API <span className="text-blue-300">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Powerful APIs designed for developers. Build amazing applications with our comprehensive 
                set of RESTful APIs, GraphQL endpoints, and developer tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/api-docs" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Documentation
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get API Access
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our API Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API solutions designed to integrate seamlessly with your applications and workflows.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with developers in mind, our APIs offer powerful features and comprehensive documentation.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.features.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Building?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get started with our APIs today and unlock the full potential of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/api-docs" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Documentation
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get API Access
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}