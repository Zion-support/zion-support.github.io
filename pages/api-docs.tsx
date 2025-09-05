import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  Key, 
  Globe, 
  Shield,
  ArrowRight,
  Copy,
  ExternalLink,
  Clock,
  Zap,
  BookOpen,
  Settings,
  Database,
  Cloud
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const apiSections = [
  {
    title: "Authentication",
    description: "Learn how to authenticate with our API using various methods",
    icon: Key,
    color: "bg-blue-600",
    endpoints: [
      { method: "POST", path: "/auth/login", description: "Authenticate user credentials" },
      { method: "POST", path: "/auth/refresh", description: "Refresh access token" },
      { method: "POST", path: "/auth/logout", description: "Invalidate access token" }
    ]
  },
  {
    title: "AI Services",
    description: "Access our AI-powered services and machine learning models",
    icon: Zap,
    color: "bg-purple-600",
    endpoints: [
      { method: "POST", path: "/ai/analyze", description: "Analyze text or images" },
      { method: "POST", path: "/ai/generate", description: "Generate content using AI" },
      { method: "POST", path: "/ai/predict", description: "Make predictions using ML models" }
    ]
  },
  {
    title: "Cloud Services",
    description: "Manage cloud resources and infrastructure",
    icon: Cloud,
    color: "bg-green-600",
    endpoints: [
      { method: "GET", path: "/cloud/instances", description: "List cloud instances" },
      { method: "POST", path: "/cloud/deploy", description: "Deploy application" },
      { method: "PUT", path: "/cloud/scale", description: "Scale resources" }
    ]
  },
  {
    title: "Data Management",
    description: "Store, retrieve, and manage your data",
    icon: Database,
    color: "bg-orange-600",
    endpoints: [
      { method: "GET", path: "/data/query", description: "Query data" },
      { method: "POST", path: "/data/insert", description: "Insert new data" },
      { method: "PUT", path: "/data/update", description: "Update existing data" }
    ]
  }
];

const sdks = [
  { name: "JavaScript", version: "2.1.0", language: "js", href: "/api-docs/sdks/javascript" },
  { name: "Python", version: "1.8.2", language: "py", href: "/api-docs/sdks/python" },
  { name: "Java", version: "3.0.1", language: "java", href: "/api-docs/sdks/java" },
  { name: "C#", version: "2.5.0", language: "csharp", href: "/api-docs/sdks/csharp" },
  { name: "Go", version: "1.3.0", language: "go", href: "/api-docs/sdks/go" },
  { name: "PHP", version: "2.0.0", language: "php", href: "/api-docs/sdks/php" }
];

const quickStart = {
  title: "Quick Start",
  description: "Get up and running with our API in just a few minutes",
  steps: [
    "Get your API key from the dashboard",
    "Install the SDK for your preferred language",
    "Make your first API call",
    "Explore the available endpoints"
  ]
};

export default function ApiDocsPage() {
  return (
    <MainLayout 
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for our AI and cloud platform. Get started quickly with our comprehensive guides, SDKs, and interactive examples."
      keywords="API documentation, REST API, SDK, developer tools, API reference, authentication, endpoints"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Comprehensive API documentation for our AI and cloud platform. 
                Build amazing applications with our powerful and easy-to-use APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#quick-start"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get API Key
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="quick-start" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Start</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running with our API in just a few minutes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {quickStart.title}
                </h3>
                <p className="text-gray-300 mb-8">
                  {quickStart.description}
                </p>
                <div className="space-y-4">
                  {quickStart.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Example Request
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello, world!",
    "analysis_type": "sentiment"
  }'`}
                  </pre>
                </div>
                <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Code
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* API Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Reference</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API reference with detailed documentation 
                for all available endpoints and services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`${section.color} p-3 rounded-lg mr-4`}>
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded text-sm font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-900 text-green-300' :
                            endpoint.method === 'POST' ? 'bg-blue-900 text-blue-300' :
                            endpoint.method === 'PUT' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-red-900 text-red-300'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-blue-400 text-sm">
                            {endpoint.path}
                          </code>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {endpoint.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/api-docs/${section.title.toLowerCase().replace(' ', '-')}`}
                    className="mt-6 text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                  >
                    View Full Documentation <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Software Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Use our official SDKs to integrate our APIs into your applications 
                with ease and efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 group text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-4">
                    {sdk.language}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {sdk.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    v{sdk.version}
                  </p>
                  <Link 
                    href={sdk.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center justify-center group"
                  >
                    View Docs <ExternalLink className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your API key and start building amazing applications with our 
                powerful AI and cloud platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get API Key <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/docs"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Full Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}