import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  User,
  Star,
  Copy,
  CheckCircle,
  Key,
  Zap,
  Globe,
  Shield,
  Database,
  Smartphone,
  ChevronRight,
  ChevronDown,
  Download
} from 'lucide-react';

const apiCategories = [
  { name: "All", count: 15, active: true },
  { name: "AI Services", count: 5, active: false },
  { name: "IT Services", count: 4, active: false },
  { name: "Micro SaaS", count: 3, active: false },
  { name: "Authentication", count: 2, active: false },
  { name: "Webhooks", count: 1, active: false }
];

const apis = [
  {
    id: 1,
    title: "AI Text Analysis API",
    description: "Analyze text sentiment, extract entities, and perform natural language processing tasks.",
    category: "AI Services",
    version: "v2.1",
    status: "Stable",
    lastUpdated: "2024-01-15",
    endpoints: 8,
    rateLimit: "1000 requests/hour",
    featured: true,
    tags: ["AI", "NLP", "Text Analysis", "Machine Learning"],
    baseUrl: "https://api.ziontechgroup.com/v2/ai/text",
    authentication: "API Key",
    examples: [
      {
        title: "Sentiment Analysis",
        method: "POST",
        endpoint: "/sentiment",
        description: "Analyze the sentiment of a text string"
      },
      {
        title: "Entity Extraction",
        method: "POST",
        endpoint: "/entities",
        description: "Extract named entities from text"
      }
    ]
  },
  {
    id: 2,
    title: "Cloud Infrastructure Management API",
    description: "Manage cloud resources, monitor performance, and automate infrastructure operations.",
    category: "IT Services",
    version: "v1.8",
    status: "Stable",
    lastUpdated: "2024-01-12",
    endpoints: 12,
    rateLimit: "500 requests/hour",
    featured: true,
    tags: ["Cloud", "Infrastructure", "Monitoring", "Automation"],
    baseUrl: "https://api.ziontechgroup.com/v1/cloud",
    authentication: "OAuth 2.0",
    examples: [
      {
        title: "List Resources",
        method: "GET",
        endpoint: "/resources",
        description: "Get list of all cloud resources"
      },
      {
        title: "Create Instance",
        method: "POST",
        endpoint: "/instances",
        description: "Create a new cloud instance"
      }
    ]
  },
  {
    id: 3,
    title: "Micro SaaS Platform API",
    description: "Build and manage micro SaaS applications with our comprehensive platform API.",
    category: "Micro SaaS",
    version: "v3.0",
    status: "Beta",
    lastUpdated: "2024-01-10",
    endpoints: 15,
    rateLimit: "2000 requests/hour",
    featured: false,
    tags: ["SaaS", "Platform", "Multi-tenant", "Scalable"],
    baseUrl: "https://api.ziontechgroup.com/v3/saas",
    authentication: "JWT",
    examples: [
      {
        title: "Create Tenant",
        method: "POST",
        endpoint: "/tenants",
        description: "Create a new tenant for SaaS application"
      },
      {
        title: "User Management",
        method: "GET",
        endpoint: "/users",
        description: "Manage users within a tenant"
      }
    ]
  },
  {
    id: 4,
    title: "Authentication API",
    description: "Secure authentication and authorization services for your applications.",
    category: "Authentication",
    version: "v1.5",
    status: "Stable",
    lastUpdated: "2024-01-08",
    endpoints: 6,
    rateLimit: "5000 requests/hour",
    featured: false,
    tags: ["Authentication", "Security", "JWT", "OAuth"],
    baseUrl: "https://api.ziontechgroup.com/v1/auth",
    authentication: "API Key",
    examples: [
      {
        title: "Login",
        method: "POST",
        endpoint: "/login",
        description: "Authenticate user and get access token"
      },
      {
        title: "Refresh Token",
        method: "POST",
        endpoint: "/refresh",
        description: "Refresh expired access token"
      }
    ]
  },
  {
    id: 5,
    title: "Webhook Management API",
    description: "Manage webhooks for real-time event notifications and integrations.",
    category: "Webhooks",
    version: "v1.2",
    status: "Stable",
    lastUpdated: "2024-01-05",
    endpoints: 4,
    rateLimit: "1000 requests/hour",
    featured: false,
    tags: ["Webhooks", "Events", "Notifications", "Real-time"],
    baseUrl: "https://api.ziontechgroup.com/v1/webhooks",
    authentication: "API Key",
    examples: [
      {
        title: "Create Webhook",
        method: "POST",
        endpoint: "/webhooks",
        description: "Create a new webhook subscription"
      },
      {
        title: "List Webhooks",
        method: "GET",
        endpoint: "/webhooks",
        description: "Get list of all webhook subscriptions"
      }
    ]
  }
];

const quickStart = [
  {
    title: "Get API Key",
    description: "Sign up and get your API key from the dashboard",
    icon: Key,
    href: "/dashboard/api-keys"
  },
  {
    title: "Read Documentation",
    description: "Browse our comprehensive API documentation",
    icon: Code,
    href: "/docs"
  },
  {
    title: "Try Examples",
    description: "Test APIs with our interactive examples",
    icon: Zap,
    href: "/playground"
  },
  {
    title: "SDK Downloads",
    description: "Download SDKs for your preferred language",
    icon: Download,
    href: "/sdk"
  }
];

const featuredApis = apis.filter(api => api.featured);
const regularApis = apis.filter(api => !api.featured);

export default function ApiDocsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedApis, setExpandedApis] = useState<number[]>([]);

  const toggleApi = (apiId: number) => {
    setExpandedApis(prev => 
      prev.includes(apiId) 
        ? prev.filter(id => id !== apiId)
        : [...prev, apiId]
    );
  };

  const filteredApis = apis.filter(api => {
    const matchesCategory = selectedCategory === 'All' || api.category === selectedCategory;
    const matchesSearch = api.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout 
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. RESTful APIs, authentication, examples, and SDKs."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive API documentation for all our services. 
                RESTful APIs, authentication, examples, and SDKs to help you integrate quickly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
              <p className="text-gray-600">Get started with our APIs in minutes</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStart.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <IconComponent className="w-6 h-6 text-blue-600 mb-2 group-hover:text-blue-700" />
                      <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 text-center">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 text-center mt-1">
                        {item.description}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search APIs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {apiCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured APIs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured APIs</h2>
              <p className="text-lg text-gray-600">Most popular and widely used APIs</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredApis.map((api, index) => (
                <motion.div
                  key={api.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-blue-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {api.category}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          {api.status}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {api.version}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        4.8
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {api.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {api.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Base URL:</span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          <Copy className="w-4 h-4 inline mr-1" />
                          Copy
                        </button>
                      </div>
                      <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800 font-mono">
                        {api.baseUrl}
                      </code>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{api.endpoints}</div>
                        <div className="text-xs text-gray-600">Endpoints</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{api.rateLimit}</div>
                        <div className="text-xs text-gray-600">Rate Limit</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <button
                        onClick={() => toggleApi(api.id)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <h4 className="font-semibold text-gray-900">Example Endpoints</h4>
                        {expandedApis.includes(api.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {expandedApis.includes(api.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3"
                        >
                          <div className="space-y-2">
                            {api.examples.map((example, exampleIndex) => (
                              <div key={exampleIndex} className="bg-gray-50 p-3 rounded">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-mono text-sm">{example.method} {example.endpoint}</span>
                                  <span className="text-xs text-gray-500">{example.title}</span>
                                </div>
                                <p className="text-xs text-gray-600">{example.description}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Updated {new Date(api.lastUpdated).toLocaleDateString()}
                      </div>
                      <Link
                        href={`/api-docs/${api.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        <span>View Full Documentation</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All APIs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All APIs</h2>
              <p className="text-lg text-gray-600">
                {filteredApis.length} APIs available
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApis.map((api, index) => (
                <motion.article
                  key={api.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {api.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          api.status === 'Stable' ? 'bg-green-100 text-green-800' :
                          api.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {api.status}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          4.7
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {api.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {api.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Version: {api.version}</span>
                        <span>{api.endpoints} endpoints</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Rate Limit: {api.rateLimit}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {api.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {api.authentication}
                      </div>
                      <Link
                        href={`/api-docs/${api.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-blue-700"
                      >
                        <span>View Docs</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredApis.length === 0 && (
              <div className="text-center py-12">
                <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No APIs found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get started with our APIs today. Sign up for free and start building amazing applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get API Access
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}