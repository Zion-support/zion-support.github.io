import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, ArrowRight, CheckCircle, Database, Server, Lock } from 'lucide-react';

export default function ApiPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Globe,
      features: ["RESTful Design", "JSON Responses", "HTTP Status Codes", "Error Handling"]
    },
    {
      title: "GraphQL Support",
      description: "Flexible GraphQL API for efficient data fetching",
      icon: Code,
      features: ["Schema Definition", "Query Optimization", "Real-time Subscriptions", "Type Safety"]
    },
    {
      title: "Authentication",
      description: "Secure authentication with JWT tokens and OAuth2",
      icon: Shield,
      features: ["JWT Tokens", "OAuth2", "API Keys", "Rate Limiting"]
    },
    {
      title: "Webhooks",
      description: "Real-time event notifications with reliable delivery",
      icon: Zap,
      features: ["Event Triggers", "Retry Logic", "Signature Verification", "Delivery Tracking"]
    },
    {
      title: "Database APIs",
      description: "Direct database access with optimized queries",
      icon: Database,
      features: ["Query Optimization", "Connection Pooling", "Data Validation", "Caching"]
    },
    {
      title: "Server Management",
      description: "Comprehensive server monitoring and management APIs",
      icon: Server,
      features: ["Health Monitoring", "Performance Metrics", "Log Management", "Auto-scaling"]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>API Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API services and developer tools from Zion Tech Group. RESTful APIs, GraphQL, authentication, and more." />
        <meta name="keywords" content="API services, REST API, GraphQL, developer tools, webhooks, authentication" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Powerful APIs and developer tools to integrate our services into your applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs/api"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API solutions designed for developers and businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Features:</h4>
                      <ul className="space-y-1">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your API needs and get started with our developer tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}