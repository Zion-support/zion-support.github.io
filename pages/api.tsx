import React from 'react';
import MainLayout from './components/layout/MainLayout';
import { motion } from 'framer-motion';
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

export default function APIDocumentation() {
  return (
    <MainLayout
      title="API Documentation | Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group's services and solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive API documentation for all our services and solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">REST API</h3>
              <p className="text-gray-600 mb-4">
                Complete REST API documentation with examples and endpoints
              </p>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                View Documentation <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <Terminal className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SDK</h3>
              <p className="text-gray-600 mb-4">
                Software development kits for multiple programming languages
              </p>
              <button className="text-green-600 hover:text-green-800 flex items-center">
                Download SDK <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-gray-600 mb-4">
                Secure authentication and authorization methods
              </p>
              <button className="text-purple-600 hover:text-purple-800 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}