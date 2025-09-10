import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play
} from 'lucide-react';

export default function APIDocsPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and solutions." />
      </Head>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            API <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Documentation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Integrate our AI services into your applications with our comprehensive REST API. 
            Get started with our easy-to-use endpoints and code examples.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get API Key
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/enhanced-services"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
=======
import Head from 'next/head';

export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
    </>
>>>>>>> origin/automation/changelog
  );
}