import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Code, 
  ArrowRight,
  Copy,
  ExternalLink,
  Key,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/auth/verify",
    description: "Verify authentication token",
    category: "Authentication",
    parameters: [
      { name: "token", type: "string", required: true, description: "JWT authentication token" }
    ],
    response: {
      status: 200,
      data: {
        valid: true,
        user: { id: "123", email: "user@example.com" }
      }
    }
  },
  {
    method: "POST",
    endpoint: "/api/v1/ai/analyze",
    description: "Analyze text using AI models",
    category: "AI Services",
    parameters: [
      { name: "text", type: "string", required: true, description: "Text to analyze" },
      { name: "model", type: "string", required: false, description: "AI model to use" }
    ],
    response: {
      status: 200,
      data: {
        analysis: "Positive sentiment detected",
        confidence: 0.95,
        keywords: ["positive", "excellent", "great"]
      }
    }
  },
  {
    method: "GET",
    endpoint: "/api/v1/cloud/status",
    description: "Get cloud infrastructure status",
    category: "Cloud Services",
    parameters: [],
    response: {
      status: 200,
      data: {
        status: "healthy",
        uptime: "99.9%",
        services: ["compute", "storage", "database"]
      }
    }
  }
];

const sdkLanguages = [
  { name: "JavaScript", version: "2.1.0", icon: "JS" },
  { name: "Python", version: "1.8.2", icon: "PY" },
  { name: "Java", version: "3.0.1", icon: "JAVA" },
  { name: "C#", version: "2.5.0", icon: "C#" },
  { name: "Go", version: "1.3.0", icon: "GO" },
  { name: "PHP", version: "2.0.0", icon: "PHP" }
];

const quickStartSteps = [
  {
    step: 1,
    title: "Get API Key",
    description: "Sign up and get your API key from the dashboard",
    code: "curl -X POST https://api.ziontechgroup.com/v1/auth/register"
  },
  {
    step: 2,
    title: "Install SDK",
    description: "Install our SDK for your preferred language",
    code: "npm install @ziontechgroup/sdk"
  },
  {
    step: 3,
    title: "Make First Request",
    description: "Test your connection with a simple API call",
    code: `const client = new ZionClient('your-api-key');
const result = await client.ai.analyze('Hello World');`
  }
];

export default function ApiDocsPage() {
  return (
    <MainLayout 
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services. REST APIs, SDKs, authentication, and integration guides."
      keywords="API docs, REST API, SDK, authentication, integration, developer documentation, API reference"
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete API documentation for all Zion Tech Group services. 
                REST APIs, SDKs, authentication, and everything you need to integrate with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#quick-start"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Quick Start
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#endpoints"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Browse Endpoints
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="quick-start" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quick Start Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with our API in just a few minutes.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {quickStartSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-start space-x-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 relative">
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-white">
                          <Copy className="w-4 h-4" />
                        </button>
                        <code className="text-green-400 text-sm font-mono">
                          {step.code}
                        </code>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Official SDKs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs to integrate with our APIs quickly and easily.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdkLanguages.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {sdk.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Version {sdk.version}
                    </p>
                    <div className="space-y-2">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                        Install
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                        Documentation
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section id="endpoints" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for all services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.endpoint}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-600' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">
                        {endpoint.endpoint}
                      </code>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {endpoint.description}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium mr-2">
                      {endpoint.category}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="text-sm">
                            <code className="text-blue-600">{param.name}</code>
                            <span className="text-gray-500"> ({param.type})</span>
                            {param.required && <span className="text-red-500 ml-1">*</span>}
                            <p className="text-gray-600 text-xs mt-1">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                      <div className="bg-gray-900 rounded-lg p-3">
                        <code className="text-green-400 text-xs font-mono">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </code>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Authentication
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Secure your API calls with our authentication system.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Key className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      API Key Authentication
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Include your API key in the Authorization header for all requests.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400 text-sm font-mono">
                        Authorization: Bearer your-api-key-here
                      </code>
                    </div>
                    <div className="flex space-x-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                        Get API Key
                      </button>
                      <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                        View Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Start building with our APIs today. Get your API key and begin integrating in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get API Key
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Full Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======

export default function Apidocs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Apidocs - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      
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
              Apidocs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-cac2
  );
}