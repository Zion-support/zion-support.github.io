import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Code, BookOpen, Zap, Shield } from 'lucide-react';

export default function APIDocs() {
  return (
    <Layout title="API Documentation - Zion Tech Group" description="Comprehensive API documentation for all our services">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
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
  );
}