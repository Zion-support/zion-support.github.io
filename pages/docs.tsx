import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Code, CheckCircle, ArrowRight, FileText, Clock, Users, Zap } from 'lucide-react';
import Layout from '../components/Layout';

const categories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    docs: [
      { title: 'Quick Start Guide', description: 'Get up and running in minutes', time: '5 min read' },
      { title: 'Installation Guide', description: 'Step-by-step installation instructions', time: '10 min read' },
      { title: 'Configuration', description: 'Configure your environment', time: '15 min read' },
      { title: 'First Project', description: 'Create your first project', time: '20 min read' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and endpoints',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    docs: [
      { title: 'Authentication', description: 'API authentication and security', time: '10 min read' },
      { title: 'Endpoints', description: 'All available API endpoints', time: '30 min read' },
      { title: 'Rate Limits', description: 'Understanding rate limits and quotas', time: '5 min read' },
      { title: 'Error Handling', description: 'Common errors and how to handle them', time: '15 min read' }
    ]
  },
  {
    title: 'Best Practices',
    description: 'Recommended practices and guidelines',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500',
    docs: [
      { title: 'Security Guidelines', description: 'Keep your applications secure', time: '20 min read' },
      { title: 'Performance Tips', description: 'Optimize your application performance', time: '25 min read' },
      { title: 'Code Standards', description: 'Maintain consistent code quality', time: '15 min read' },
      { title: 'Testing Strategies', description: 'Effective testing approaches', time: '30 min read' }
<<<<<<< HEAD
=======
import Head from 'next/head';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight,
  Search,
  FileText,
  Code,
  Settings,
  Users,
  Globe,
  Download,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const docCategories = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic setup instructions",
    icon: BookOpen,
    color: "blue",
    docs: [
      { title: "Quick Start Guide", description: "Get up and running in 5 minutes", type: "Guide", updated: "2024-01-15" },
      { title: "Installation Guide", description: "Step-by-step installation instructions", type: "Tutorial", updated: "2024-01-10" },
      { title: "Configuration", description: "Basic configuration and setup", type: "Reference", updated: "2024-01-08" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and endpoints",
    icon: Code,
    color: "green",
    docs: [
      { title: "Authentication API", description: "User authentication and authorization", type: "API", updated: "2024-01-12" },
      { title: "Core Services API", description: "Main service endpoints and methods", type: "API", updated: "2024-01-10" },
      { title: "Webhook API", description: "Webhook configuration and events", type: "API", updated: "2024-01-05" }
    ]
  },
  {
    title: "Integration Guides",
    description: "Step-by-step integration tutorials",
    icon: Settings,
    color: "purple",
    docs: [
      { title: "REST API Integration", description: "Integrate using our REST API", type: "Tutorial", updated: "2024-01-14" },
      { title: "SDK Integration", description: "Use our official SDKs", type: "Tutorial", updated: "2024-01-12" },
      { title: "Webhook Setup", description: "Configure webhooks for real-time updates", type: "Guide", updated: "2024-01-09" }
    ]
  },
  {
    title: "User Guides",
    description: "End-user documentation and tutorials",
    icon: Users,
    color: "orange",
    docs: [
      { title: "Dashboard Overview", description: "Navigate and use the main dashboard", type: "Guide", updated: "2024-01-13" },
      { title: "User Management", description: "Manage users and permissions", type: "Tutorial", updated: "2024-01-11" },
      { title: "Reporting Features", description: "Generate and customize reports", type: "Guide", updated: "2024-01-07" }
    ]
  },
  {
    title: "Deployment",
    description: "Deployment guides and best practices",
    icon: Globe,
    color: "indigo",
    docs: [
      { title: "Cloud Deployment", description: "Deploy to AWS, Azure, or GCP", type: "Guide", updated: "2024-01-16" },
      { title: "Docker Deployment", description: "Container-based deployment", type: "Tutorial", updated: "2024-01-14" },
      { title: "Production Setup", description: "Production environment configuration", type: "Reference", updated: "2024-01-12" }
    ]
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    icon: Settings,
    color: "red",
    docs: [
      { title: "Common Issues", description: "Frequently encountered problems", type: "Reference", updated: "2024-01-15" },
      { title: "Error Codes", description: "Complete list of error codes", type: "Reference", updated: "2024-01-13" },
      { title: "Performance Issues", description: "Troubleshoot performance problems", type: "Guide", updated: "2024-01-11" }
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
    ]
  }
];

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
export default function DocsPage() {
  return (
    <Layout>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI, IT, and micro SaaS services." />
      </Head>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
const popularDocs = [
  {
    title: "Quick Start Guide",
    description: "Get up and running in 5 minutes",
    category: "Getting Started",
    views: 1250,
    rating: 4.8
  },
  {
    title: "Authentication API",
    description: "Complete authentication reference",
    category: "API Reference",
    views: 980,
    rating: 4.9
  },
  {
    title: "REST API Integration",
    description: "Step-by-step integration tutorial",
    category: "Integration Guides",
    views: 850,
    rating: 4.7
  },
  {
    title: "Cloud Deployment",
    description: "Deploy to major cloud providers",
    category: "Deployment",
    views: 720,
    rating: 4.6
  }
];

const searchFilters = [
  "All Documentation",
  "Getting Started",
  "API Reference",
  "Integration Guides",
  "User Guides",
  "Deployment",
  "Troubleshooting"
];

export default function DocsPage() {
  return (
    <MainLayout 
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group's products and services. API references, integration guides, and user tutorials."
      keywords="documentation, API docs, integration guides, user guides, tutorials, reference, developer docs"
    >
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
<<<<<<< HEAD
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Everything you need to get started with our AI, IT, and micro SaaS services. 
                From quick start guides to advanced API documentation.
              </p>
=======
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive documentation for all our products and services. 
                Find guides, API references, and tutorials to help you succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#getting-started"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/api-docs"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  API Reference
                </Link>
              </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Everything you need to get started with our AI, IT, and micro SaaS services. 
                From quick start guides to advanced API documentation.
              </p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
        {/* Documentation Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {category.docs.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 text-blue-400 mr-3" />
                          <div>
                            <h4 className="text-white font-medium">{doc.title}</h4>
                            <p className="text-sm text-gray-400">{doc.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {doc.time}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
<<<<<<< HEAD
=======
        {/* Popular Documentation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular Documentation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most viewed and highly rated documentation to help you get started quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600">
                      {doc.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-1">★</span>
                      {doc.rating}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{doc.views} views</span>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team is here to help you get the most out of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </Link>
                <Link href="/help" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Help Center
=======
        {/* Documentation Categories */}
        <section id="getting-started" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the documentation you need organized by category and topic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                        <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.docs.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">
                              {doc.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {doc.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {doc.type}
                            </span>
                            <Link
                              href="#"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        href="#"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                      >
                        View All {category.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick access to the most important documentation and resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/api-docs"
                className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition-colors group"
              >
                <Code className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">API Reference</h3>
                <p className="text-gray-600 text-sm">Complete API documentation</p>
              </Link>
              
              <Link
                href="/tutorials"
                className="bg-green-50 hover:bg-green-100 rounded-xl p-6 transition-colors group"
              >
                <BookOpen className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">Tutorials</h3>
                <p className="text-gray-600 text-sm">Step-by-step tutorials</p>
              </Link>
              
              <Link
                href="/guides"
                className="bg-purple-50 hover:bg-purple-100 rounded-xl p-6 transition-colors group"
              >
                <FileText className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">User Guides</h3>
                <p className="text-gray-600 text-sm">Comprehensive user guides</p>
              </Link>
              
              <Link
                href="/support"
                className="bg-orange-50 hover:bg-orange-100 rounded-xl p-6 transition-colors group"
              >
                <Users className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600 text-sm">Get help and support</p>
              </Link>
=======
                </motion.div>
              ))}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
=======
        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team is here to help you get the most out of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                  Contact Support
                </Link>
<<<<<<< HEAD
                <Link
                  href="/support"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Visit Support Center
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
                <Link href="/help" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Help Center
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </Layout>
=======
    </MainLayout>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </Layout>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}