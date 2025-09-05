import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Video,
  ArrowRight,
  Download,
  ExternalLink,
  Clock,
  Users,
  BookOpen,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive technical documentation and API references",
    icon: FileText,
    href: "/docs",
    type: "Technical",
    items: 50
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and implementation examples",
    icon: BarChart3,
    href: "/case-studies",
    type: "Success Stories",
    items: 25
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and best practices in technology",
    icon: MessageSquare,
    href: "/blog",
    type: "Insights",
    items: 100
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples and SDKs",
    icon: Settings,
    href: "/api-docs",
    type: "Technical",
    items: 30
  },
  {
    title: "White Papers",
    description: "In-depth research and analysis on technology trends",
    icon: FileText,
    href: "/white-papers",
    type: "Research",
    items: 15
  },
  {
    title: "Webinars",
    description: "Live and recorded webinars on various technology topics",
    icon: Video,
    href: "/webinars",
    type: "Learning",
    items: 40
  }
];

const quickLinks = [
  { name: "Getting Started Guide", href: "/docs/getting-started", icon: BookOpen },
  { name: "API Quick Start", href: "/api-docs/quick-start", icon: Zap },
  { name: "Best Practices", href: "/docs/best-practices", icon: FileText },
  { name: "Troubleshooting", href: "/docs/troubleshooting", icon: Settings },
  { name: "Community Forum", href: "/community", icon: Users },
  { name: "Support Center", href: "/support", icon: MessageSquare }
];

const featuredContent = [
  {
    title: "AI Implementation Guide",
    description: "Complete guide to implementing AI solutions in your organization",
    type: "Guide",
    readTime: "15 min read",
    href: "/docs/ai-implementation-guide"
  },
  {
    title: "Cloud Migration Best Practices",
    description: "Essential strategies for successful cloud migration projects",
    type: "White Paper",
    readTime: "20 min read",
    href: "/white-papers/cloud-migration"
  },
  {
    title: "Security Compliance Checklist",
    description: "Comprehensive checklist for meeting security compliance requirements",
    type: "Checklist",
    readTime: "10 min read",
    href: "/docs/security-compliance"
  }
];

export default function ResourcesPage() {
  return (
    <MainLayout 
      title="Resources - Zion Tech Group"
      description="Access comprehensive documentation, case studies, white papers, webinars, and other resources to help you succeed with our technology solutions."
      keywords="documentation, case studies, white papers, webinars, API reference, technical resources, guides"
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
                Resources & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Everything you need to succeed with our technology solutions. 
                From technical documentation to best practices and success stories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/docs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Browse Documentation <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <p className="text-gray-300">
                Get started quickly with our most popular resources
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-colors duration-300 group"
                  >
                    <link.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:text-blue-300" />
                    <span className="text-white text-sm font-medium">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resource <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Library</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources designed to help you 
                maximize the value of our technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400">
                        {resource.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {resource.items} items
                    </span>
                  </div>

                  <Link 
                    href={resource.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group"
                  >
                    Explore <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Content</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and valuable resources to help you get started.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {content.type}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {content.description}
                  </p>

                  <Link 
                    href={content.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                  >
                    Read More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help 
                you find the right resources and get the answers you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Contact Support <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/docs"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Browse All Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}