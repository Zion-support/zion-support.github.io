import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Code, 
  BookOpen, 
  ArrowRight,
  Search,
  Filter,
  Download,
  ExternalLink,
  Clock,
  Users,
  Zap,
  Shield
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const docCategories = [
  {
    title: "Getting Started",
    description: "Quick start guides and setup instructions",
    icon: BookOpen,
    color: "bg-blue-600",
    docs: [
      { title: "Quick Start Guide", description: "Get up and running in 5 minutes", readTime: "5 min", href: "/docs/quick-start" },
      { title: "Installation Guide", description: "Step-by-step installation instructions", readTime: "10 min", href: "/docs/installation" },
      { title: "First Project", description: "Build your first project with our platform", readTime: "15 min", href: "/docs/first-project" },
      { title: "Configuration", description: "Configure your environment and settings", readTime: "8 min", href: "/docs/configuration" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Code,
    color: "bg-green-600",
    docs: [
      { title: "Authentication", description: "API authentication and security", readTime: "12 min", href: "/docs/api/authentication" },
      { title: "Endpoints", description: "Complete list of API endpoints", readTime: "20 min", href: "/docs/api/endpoints" },
      { title: "SDKs", description: "Software development kits for various languages", readTime: "15 min", href: "/docs/api/sdks" },
      { title: "Rate Limits", description: "Understanding API rate limits and quotas", readTime: "5 min", href: "/docs/api/rate-limits" }
    ]
  },
  {
    title: "Guides",
    description: "Comprehensive guides for common use cases",
    icon: FileText,
    color: "bg-purple-600",
    docs: [
      { title: "AI Integration", description: "Integrate AI capabilities into your applications", readTime: "25 min", href: "/docs/guides/ai-integration" },
      { title: "Cloud Deployment", description: "Deploy applications to cloud platforms", readTime: "30 min", href: "/docs/guides/cloud-deployment" },
      { title: "Security Best Practices", description: "Secure your applications and data", readTime: "20 min", href: "/docs/guides/security" },
      { title: "Performance Optimization", description: "Optimize your applications for better performance", readTime: "18 min", href: "/docs/guides/performance" }
    ]
  },
  {
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    icon: Shield,
    color: "bg-red-600",
    docs: [
      { title: "Common Issues", description: "Frequently encountered problems and solutions", readTime: "10 min", href: "/docs/troubleshooting/common-issues" },
      { title: "Error Codes", description: "Complete list of error codes and meanings", readTime: "8 min", href: "/docs/troubleshooting/error-codes" },
      { title: "Debugging", description: "Debugging techniques and tools", readTime: "15 min", href: "/docs/troubleshooting/debugging" },
      { title: "Support", description: "How to get help and contact support", readTime: "5 min", href: "/docs/troubleshooting/support" }
    ]
  }
];

const popularDocs = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with our platform in just 5 minutes",
    category: "Getting Started",
    readTime: "5 min",
    href: "/docs/quick-start"
  },
  {
    title: "API Authentication",
    description: "Learn how to authenticate with our API",
    category: "API Reference",
    readTime: "12 min",
    href: "/docs/api/authentication"
  },
  {
    title: "AI Integration Guide",
    description: "Integrate AI capabilities into your applications",
    category: "Guides",
    readTime: "25 min",
    href: "/docs/guides/ai-integration"
  },
  {
    title: "Common Issues",
    description: "Solutions to frequently encountered problems",
    category: "Troubleshooting",
    readTime: "10 min",
    href: "/docs/troubleshooting/common-issues"
  }
];

export default function DocsPage() {
  return (
    <MainLayout 
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for our AI and cloud platform. Get started quickly with our guides, API reference, and troubleshooting resources."
      keywords="documentation, API reference, guides, tutorials, quick start, troubleshooting, developer resources"
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
                Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Everything you need to build amazing applications with our platform. 
                From quick start guides to comprehensive API references.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/docs/quick-start"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/api-docs"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  API Reference
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Docs Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Documentation
              </h2>
              <p className="text-gray-300">
                Most frequently accessed documentation and guides
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {doc.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {doc.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {doc.description}
                  </p>

                  <Link 
                    href={doc.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                  >
                    Read More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by category 
                to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`${category.color} p-3 rounded-lg mr-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <Link
                        key={docIndex}
                        href={doc.href}
                        className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                              {doc.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {doc.description}
                            </p>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {doc.readTime}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
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
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help 
                you find the right documentation and get the answers you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Contact Support <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/resources"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Browse All Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}