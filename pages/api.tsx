import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const ApiPage = () => {
  const apiServices = [
    {
      title: 'RESTful API',
      description: 'Clean, intuitive REST API design',
      icon: Globe,
      features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling'],
      pricing: 'Starting at $500/month'
    },
    {
      title: 'GraphQL API',
      description: 'Flexible query language for APIs',
      icon: Database,
      features: ['Single Endpoint', 'Real-time Subscriptions', 'Type Safety', 'Efficient Queries'],
      pricing: 'Starting at $750/month'
    },
    {
      title: 'WebSocket API',
      description: 'Real-time bidirectional communication',
      icon: Zap,
      features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven'],
      pricing: 'Starting at $600/month'
    },
    {
      title: 'API Security',
      description: 'Enterprise-grade security features',
      icon: Shield,
      features: ['OAuth 2.0', 'Rate Limiting', 'API Keys', 'Encryption'],
      pricing: 'Starting at $400/month'
    }
  ];

  return (
    <Layout 
      title="API Services - Zion Tech Group" 
      description="Professional API development and integration services for modern applications."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Professional API development and integration services to power your applications.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {service.pricing}
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApiPage;