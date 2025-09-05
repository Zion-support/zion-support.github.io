import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  Copy, 
  Check,
  ArrowRight,
  ExternalLink,
  Shield,
  Zap,
  Database,
  Globe,
  Settings,
  Search,
  BookOpen,
  Terminal
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const apiCategories = [
  {
    title: "Authentication",
    description: "Secure authentication and authorization",
    icon: Shield,
    color: "from-red-600 to-red-800",
    endpoints: [
      { method: "POST", path: "/auth/login", description: "User login" },
      { method: "POST", path: "/auth/register", description: "User registration" },
      { method: "POST", path: "/auth/refresh", description: "Refresh token" },
      { method: "POST", path: "/auth/logout", description: "User logout" }
    ]
  },
  {
    title: "Core APIs",
    description: "Main application functionality",
    icon: Database,
    color: "from-blue-600 to-blue-800",
    endpoints: [
      { method: "GET", path: "/api/users", description: "Get all users" },
      { method: "GET", path: "/api/users/{id}", description: "Get user by ID" },
      { method: "POST", path: "/api/users", description: "Create user" },
      { method: "PUT", path: "/api/users/{id}", description: "Update user" },
      { method: "DELETE", path: "/api/users/{id}", description: "Delete user" }
    ]
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications",
    icon: Zap,
    color: "from-green-600 to-green-800",
    endpoints: [
      { method: "POST", path: "/webhooks/events", description: "Event webhook" },
      { method: "GET", path: "/webhooks/subscriptions", description: "List subscriptions" },
      { method: "POST", path: "/webhooks/subscriptions", description: "Create subscription" },
      { method: "DELETE", path: "/webhooks/subscriptions/{id}", description: "Delete subscription" }
    ]
  },
  {
    title: "Analytics",
    description: "Data analytics and reporting",
    icon: Globe,
    color: "from-purple-600 to-purple-800",
    endpoints: [
      { method: "GET", path: "/api/analytics/dashboard", description: "Dashboard data" },
      { method: "GET", path: "/api/analytics/reports", description: "Generate reports" },
      { method: "POST", path: "/api/analytics/export", description: "Export data" },
      { method: "GET", path: "/api/analytics/metrics", description: "Get metrics" }
    ]
  }
];

const sdks = [
  {
    name: "JavaScript/Node.js",
    description: "Official SDK for JavaScript and Node.js applications",
    icon: "🟨",
    version: "v2.1.0",
    downloads: "125K/month"
  },
  {
    name: "Python",
    description: "Python SDK with full API support",
    icon: "🐍",
    version: "v1.8.2",
    downloads: "89K/month"
  },
  {
    name: "PHP",
    description: "PHP SDK for web applications",
    icon: "🐘",
    version: "v1.5.1",
    downloads: "67K/month"
  },
  {
    name: "Java",
    description: "Java SDK for enterprise applications",
    icon: "☕",
    version: "v2.0.3",
    downloads: "45K/month"
  },
  {
    name: "C#",
    description: ".NET SDK for Windows applications",
    icon: "🔷",
    version: "v1.7.0",
    downloads: "38K/month"
  },
  {
    name: "Go",
    description: "Go SDK for high-performance applications",
    icon: "🐹",
    version: "v1.3.2",
    downloads: "29K/month"
  }
];

const codeExamples = [
  {
    title: "Authentication",
    language: "javascript",
    code: `// Initialize the SDK
const zion = require('zion-sdk');

const client = new zion.Client({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Authenticate user
const auth = await client.auth.login({
  email: 'user@example.com',
  password: 'password123'
});

`
  },
  {
    title: "Create User",
    language: "javascript",
    code: `// Create a new user
const user = await client.users.create({
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
});

`
  },
  {
    title: "Webhook Setup",
    language: "javascript",
    code: `// Set up webhook subscription
const webhook = await client.webhooks.create({
  url: 'https://your-app.com/webhooks',
  events: ['user.created', 'user.updated'],
  secret: 'your-webhook-secret'
});

`
  }
];

export default function ApiDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <MainLayout 
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group's platform. RESTful APIs, webhooks, SDKs, and code examples."
      keywords="API documentation, REST API, webhooks, SDKs, developer tools, API reference"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
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
              <div className="flex items-center justify-center mb-6">
                <Code className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  API Documentation
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete API reference for integrating with Zion Tech Group's platform. 
                RESTful APIs, webhooks, SDKs, and comprehensive code examples.
              </p>
              
              {/* API Base URL */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Base URL</div>
                      <div className="text-lg font-mono text-white">https://api.ziontechgroup.com/v1</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('https://api.ziontechgroup.com/v1', 'base-url')}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'base-url' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Full Docs
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                API Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive API endpoints organized by functionality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2">
                      {category.endpoints.slice(0, 3).map((endpoint, endpointIndex) => (
                        <div key={endpointIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <span className={`px-2 py-1 text-xs rounded font-mono mr-3 ${
                              endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                              endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {endpoint.method}
                            </span>
                            <span className="font-mono text-sm text-gray-700">{endpoint.path}</span>
                          </div>
                          <span className="text-xs text-gray-500">{endpoint.description}</span>
                        </div>
                      ))}
                      {category.endpoints.length > 3 && (
                        <div className="text-center">
                          <span className="text-sm text-gray-500">
                            +{category.endpoints.length - 3} more endpoints
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Official SDKs
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get started quickly with our official SDKs for popular programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{sdk.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>
                      <div className="text-sm text-gray-500">{sdk.version}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {sdk.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{sdk.downloads}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Code Examples
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Get started quickly with these code examples for common use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                      <button
                        onClick={() => copyToClipboard(example.code, example.title)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === example.title ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating with our platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
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