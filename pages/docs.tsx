import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Code, 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  Search,
  Download
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const sections = [
  {
    title: "Getting Started",
    description: "Quick start guides and setup instructions",
    icon: BookOpen,
    articles: [
      { title: "Installation Guide", href: "/docs/installation" },
      { title: "Quick Start Tutorial", href: "/docs/quick-start" },
      { title: "Configuration", href: "/docs/configuration" },
      { title: "First Project", href: "/docs/first-project" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Code,
    articles: [
      { title: "Authentication", href: "/docs/api/auth" },
      { title: "Endpoints", href: "/docs/api/endpoints" },
      { title: "Error Codes", href: "/docs/api/errors" },
      { title: "Rate Limits", href: "/docs/api/rate-limits" }
    ]
  },
  {
    title: "Integration Guides",
    description: "Step-by-step integration tutorials",
    icon: FileText,
    articles: [
      { title: "REST API Integration", href: "/docs/integration/rest" },
      { title: "GraphQL Integration", href: "/docs/integration/graphql" },
      { title: "Webhook Setup", href: "/docs/integration/webhooks" },
      { title: "SDK Usage", href: "/docs/integration/sdk" }
    ]
  },
  {
    title: "Best Practices",
    description: "Recommended practices and patterns",
    icon: CheckCircle,
    articles: [
      { title: "Security Guidelines", href: "/docs/best-practices/security" },
      { title: "Performance Tips", href: "/docs/best-practices/performance" },
      { title: "Error Handling", href: "/docs/best-practices/errors" },
      { title: "Testing", href: "/docs/best-practices/testing" }
    ]
  }
];

export default function DocumentationPage() {
  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for all our services, APIs, and integration guides. Get started quickly with our detailed guides."
      keywords="documentation, API docs, integration guides, tutorials, getting started"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                Comprehensive guides, API references, and tutorials to help you succeed with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Need Help?
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
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
                Documentation Sections
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Organized documentation to help you find what you need quickly
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="space-y-2">
                      {section.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          href={article.href}
                          className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                              {article.title}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
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

        {/* Quick Actions */}
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
                Quick Actions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common tasks and quick access to important resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Download className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Download SDKs</h3>
                <p className="text-gray-600 text-sm mb-4">Get our SDKs for popular programming languages</p>
                <Link href="/downloads" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Download Now →
                </Link>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Code className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">API Playground</h3>
                <p className="text-gray-600 text-sm mb-4">Test our APIs directly in your browser</p>
                <Link href="/api-playground" className="text-green-600 hover:text-green-700 font-semibold">
                  Try It Now →
                </Link>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <FileText className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Support Center</h3>
                <p className="text-gray-600 text-sm mb-4">Get help from our support team</p>
                <Link href="/support" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Get Support →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Can't find what you're looking for? Our support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/resources" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Browse Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}