import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Code, BookOpen, Search, ArrowRight, CheckCircle, Users, Globe, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const categories = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic setup instructions",
    icon: BookOpen,
    articles: [
      { title: "Quick Start Guide", href: "/docs/getting-started/quick-start", readTime: "5 min" },
      { title: "Installation Guide", href: "/docs/getting-started/installation", readTime: "10 min" },
      { title: "First Project", href: "/docs/getting-started/first-project", readTime: "15 min" },
      { title: "Configuration", href: "/docs/getting-started/configuration", readTime: "8 min" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: Code,
    articles: [
      { title: "Authentication", href: "/docs/api/authentication", readTime: "12 min" },
      { title: "Endpoints", href: "/docs/api/endpoints", readTime: "20 min" },
      { title: "Error Handling", href: "/docs/api/error-handling", readTime: "8 min" },
      { title: "Rate Limiting", href: "/docs/api/rate-limiting", readTime: "6 min" }
    ]
  },
  {
    title: "Integration Guides",
    description: "Step-by-step integration tutorials",
    icon: Zap,
    articles: [
      { title: "Web Integration", href: "/docs/integration/web", readTime: "25 min" },
      { title: "Mobile Integration", href: "/docs/integration/mobile", readTime: "30 min" },
      { title: "Third-party Services", href: "/docs/integration/third-party", readTime: "20 min" },
      { title: "Webhooks", href: "/docs/integration/webhooks", readTime: "15 min" }
    ]
  },
  {
    title: "Best Practices",
    description: "Recommended practices and patterns",
    icon: CheckCircle,
    articles: [
      { title: "Security Best Practices", href: "/docs/best-practices/security", readTime: "18 min" },
      { title: "Performance Optimization", href: "/docs/best-practices/performance", readTime: "22 min" },
      { title: "Code Organization", href: "/docs/best-practices/code-organization", readTime: "15 min" },
      { title: "Testing Strategies", href: "/docs/best-practices/testing", readTime: "20 min" }
    ]
  }
];

const quickLinks = [
  { title: "API Documentation", href: "/api-docs", icon: Code },
  { title: "SDKs & Libraries", href: "/docs/sdks", icon: FileText },
  { title: "Changelog", href: "/docs/changelog", icon: BookOpen },
  { title: "Community", href: "/community", icon: Users }
];

export default function DocumentationPage() {
  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for all our services and APIs. Get started quickly with our guides and examples."
      keywords="documentation, API docs, guides, tutorials, integration, best practices"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Everything you need to integrate and use our services effectively. 
                From quick start guides to advanced API documentation.
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started/quick-start" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/api-docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  API Reference
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Documentation Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse our comprehensive documentation organized by category and topic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => {
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
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          href={article.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group/article"
                        >
                          <span className="text-gray-700 group-hover/article:text-blue-600 transition-colors">
                            {article.title}
                          </span>
                          <span className="text-sm text-gray-500">{article.readTime}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Popular resources and frequently accessed documentation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:text-indigo-600 transition-colors inline-flex items-center"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Our support team is here to help you find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}