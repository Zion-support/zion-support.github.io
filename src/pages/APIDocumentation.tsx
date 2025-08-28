import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain, 
  Lock,
  Key,
  Terminal,
  Globe,
  Server,
  Cpu,
  Network,
  BarChart3,
  MessageSquare,
  FileText,
  Play,
  Download,
  Github
} from 'lucide-react';

export default function APIDocumentation() {
  const apiEndpoints = [
    {
      category: 'AI Services',
      endpoints: [
        { method: 'POST', path: '/api/v1/ai/content-generate', description: 'Generate AI content' },
        { method: 'POST', path: '/api/v1/ai/analyze', description: 'AI data analysis' },
        { method: 'POST', path: '/api/v1/ai/chat', description: 'AI chat completion' },
        { method: 'POST', path: '/api/v1/ai/translate', description: 'AI translation service' }
      ]
    },
    {
      category: 'Data Analytics',
      endpoints: [
        { method: 'GET', path: '/api/v1/analytics/dashboard', description: 'Get analytics dashboard data' },
        { method: 'POST', path: '/api/v1/analytics/export', description: 'Export analytics data' },
        { method: 'GET', path: '/api/v1/analytics/reports', description: 'Get analytics reports' }
      ]
    },
    {
      category: 'User Management',
      endpoints: [
        { method: 'POST', path: '/api/v1/auth/login', description: 'User authentication' },
        { method: 'POST', path: '/api/v1/auth/register', description: 'User registration' },
        { method: 'GET', path: '/api/v1/users/profile', description: 'Get user profile' },
        { method: 'PUT', path: '/api/v1/users/profile', description: 'Update user profile' }
      ]
    },
    {
      category: 'Services',
      endpoints: [
        { method: 'GET', path: '/api/v1/services', description: 'List all services' },
        { method: 'GET', path: '/api/v1/services/{id}', description: 'Get service details' },
        { method: 'POST', path: '/api/v1/services/quote', description: 'Request service quote' }
      ]
    }
  ];

  const sdkLanguages = [
    { name: 'JavaScript/Node.js', icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'Python', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Java', icon: Code, color: 'from-red-500 to-pink-500' },
    { name: 'C#', icon: Code, color: 'from-purple-500 to-indigo-500' },
    { name: 'Go', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { name: 'PHP', icon: Code, color: 'from-indigo-500 to-purple-500' }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Get API Key',
      description: 'Sign up and obtain your unique API key from the dashboard',
      icon: Key
    },
    {
      step: 2,
      title: 'Install SDK',
      description: 'Install the SDK for your preferred programming language',
      icon: Download
    },
    {
      step: 3,
      title: 'Make First Call',
      description: 'Test the API with a simple authentication request',
      icon: Play
    },
    {
      step: 4,
      title: 'Build & Deploy',
      description: 'Integrate the API into your application and deploy',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group's AI-powered services and solutions. Get started with our RESTful APIs, SDKs, and integration guides."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Developer Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build powerful applications with our comprehensive APIs. Access AI services, data analytics, and enterprise solutions through our well-documented RESTful endpoints.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#quick-start"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-4 h-4" />
                Quick Start
              </a>
              <a
                href="#endpoints"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <BookOpen className="w-4 h-4" />
                View Endpoints
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to integrate our APIs into your application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Official SDKs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Use our official SDKs for seamless integration with your preferred programming language
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdkLanguages.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${sdk.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sdk.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</h3>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm rounded-lg transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Docs
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section id="endpoints" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive API endpoints for all services and features
            </p>
          </motion.div>

          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div
                      key={endpointIndex}
                      className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono text-sm">{endpoint.path}</code>
                        <span className="text-gray-400 text-sm">{endpoint.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Authentication</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure your API calls with our robust authentication system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">API Key Authentication</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Include your API key in the request headers for secure access to all endpoints.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/50">
                <code className="text-sm text-cyan-400">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Rate Limiting</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We implement rate limiting to ensure fair usage and optimal performance for all users.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Free Tier: 1,000 requests/hour</div>
                <div>• Pro Tier: 10,000 requests/hour</div>
                <div>• Enterprise: Custom limits</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building amazing applications with our APIs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                Get API Access
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}