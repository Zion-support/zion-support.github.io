import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Code, BookOpen, ArrowRight, Search, Filter, Clock, Users } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const docCategories = [
  {
    title: "Getting Started",
    description: "Quick start guides and setup instructions",
    icon: BookOpen,
    color: "blue",
    articles: [
      { title: "Quick Start Guide", description: "Get up and running in minutes", readTime: "5 min", href: "/docs/quick-start" },
      { title: "Installation Guide", description: "Step-by-step installation instructions", readTime: "10 min", href: "/docs/installation" },
      { title: "First Project", description: "Create your first project", readTime: "15 min", href: "/docs/first-project" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Code,
    color: "green",
    articles: [
      { title: "REST API", description: "Complete REST API documentation", readTime: "30 min", href: "/docs/api/rest" },
      { title: "GraphQL API", description: "GraphQL schema and queries", readTime: "25 min", href: "/docs/api/graphql" },
      { title: "Webhooks", description: "Webhook configuration and events", readTime: "20 min", href: "/docs/api/webhooks" }
    ]
  },
  {
    title: "Integration Guides",
    description: "How to integrate with popular platforms",
    icon: FileText,
    color: "purple",
    articles: [
      { title: "React Integration", description: "Integrate with React applications", readTime: "20 min", href: "/docs/integrations/react" },
      { title: "Node.js Integration", description: "Server-side integration with Node.js", readTime: "25 min", href: "/docs/integrations/nodejs" },
      { title: "Python Integration", description: "Python SDK and examples", readTime: "20 min", href: "/docs/integrations/python" }
    ]
  },
  {
    title: "Advanced Topics",
    description: "Advanced configuration and customization",
    icon: BookOpen,
    color: "indigo",
    articles: [
      { title: "Custom Authentication", description: "Implement custom authentication", readTime: "30 min", href: "/docs/advanced/authentication" },
      { title: "Performance Optimization", description: "Optimize your application performance", readTime: "25 min", href: "/docs/advanced/performance" },
      { title: "Security Best Practices", description: "Security guidelines and recommendations", readTime: "35 min", href: "/docs/advanced/security" }
    ]
  }
];

const popularDocs = [
  {
    title: "AI Services Quick Start",
    description: "Get started with our AI services in under 10 minutes",
    category: "Getting Started",
    readTime: "8 min",
    href: "/docs/ai-services-quick-start"
  },
  {
    title: "Micro SaaS Architecture",
    description: "Best practices for building micro SaaS applications",
    category: "Advanced Topics",
    readTime: "25 min",
    href: "/docs/micro-saas-architecture"
  },
  {
    title: "Enterprise Security Setup",
    description: "Configure enterprise-grade security for your applications",
    category: "Advanced Topics",
    readTime: "30 min",
    href: "/docs/enterprise-security-setup"
  },
  {
    title: "API Rate Limiting",
    description: "Implement and configure API rate limiting",
    category: "Integration Guides",
    readTime: "15 min",
    href: "/docs/api-rate-limiting"
  }
];

export default function DocumentationPage() {
  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for all our services and APIs. Get started quickly with our detailed guides and examples."
      keywords="documentation, API docs, integration guides, tutorials, getting started, technical documentation"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Documentation{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  & Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive documentation for all our services, APIs, and integrations. 
                Everything you need to build amazing applications with our technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Popular Documentation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Start with these popular guides to get the most out of our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {doc.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {doc.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {doc.description}
                  </p>

                  <Link
                    href={doc.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                  >
                    <span>Read Documentation</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
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
                Browse by Category
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find the documentation you need organized by category and topic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docCategories.map((category, index) => {
                const IconComponent = category.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  green: "from-green-500 to-green-600",
                  purple: "from-purple-500 to-purple-600",
                  indigo: "from-indigo-500 to-indigo-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          href={article.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {article.title}
                              </h4>
                              <p className="text-sm text-gray-600">{article.description}</p>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Contact us for personalized assistance with your implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}