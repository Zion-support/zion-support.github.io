import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  ArrowRight,
  CheckCircle,
  Search,
  Download,
  ExternalLink,
  Users,
  Settings,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';

const categories = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic setup instructions",
    icon: BookOpen,
    color: "from-blue-600 to-blue-800",
    links: [
      { title: "Quick Start Guide", href: "/docs/getting-started", type: "guide" },
      { title: "Installation", href: "/docs/installation", type: "guide" },
      { title: "Configuration", href: "/docs/configuration", type: "guide" },
      { title: "First Steps", href: "/docs/first-steps", type: "tutorial" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and endpoints",
    icon: Code,
    color: "from-green-600 to-green-800",
    links: [
      { title: "Authentication", href: "/api-docs/auth", type: "api" },
      { title: "Core APIs", href: "/api-docs/core", type: "api" },
      { title: "Webhooks", href: "/api-docs/webhooks", type: "api" },
      { title: "SDKs", href: "/api-docs/sdks", type: "sdk" }
    ]
  },
  {
    title: "Tutorials",
    description: "Step-by-step tutorials and walkthroughs",
    icon: Video,
    color: "from-purple-600 to-purple-800",
    links: [
      { title: "Building Your First App", href: "/tutorials/first-app", type: "tutorial" },
      { title: "Advanced Features", href: "/tutorials/advanced", type: "tutorial" },
      { title: "Integration Examples", href: "/tutorials/integrations", type: "tutorial" },
      { title: "Best Practices", href: "/tutorials/best-practices", type: "guide" }
    ]
  },
  {
    title: "Guides",
    description: "Comprehensive guides and how-to articles",
    icon: FileText,
    color: "from-orange-600 to-orange-800",
    links: [
      { title: "Security Guide", href: "/guides/security", type: "guide" },
      { title: "Performance Optimization", href: "/guides/performance", type: "guide" },
      { title: "Deployment Guide", href: "/guides/deployment", type: "guide" },
      { title: "Troubleshooting", href: "/guides/troubleshooting", type: "guide" }
    ]
  }
];

const popularDocs = [
  {
    title: "Quick Start Guide",
    description: "Get up and running in minutes",
    href: "/docs/getting-started",
    views: "12.5K",
    type: "guide"
  },
  {
    title: "API Authentication",
    description: "Learn how to authenticate with our APIs",
    href: "/api-docs/auth",
    views: "8.2K",
    type: "api"
  },
  {
    title: "Building Your First App",
    description: "Complete tutorial for beginners",
    href: "/tutorials/first-app",
    views: "15.3K",
    type: "tutorial"
  },
  {
    title: "Security Best Practices",
    description: "Keep your applications secure",
    href: "/guides/security",
    views: "6.7K",
    type: "guide"
  }
];

const resources = [
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages",
    icon: Code,
    count: "8 SDKs"
  },
  {
    title: "Code Examples",
    description: "Ready-to-use code snippets and examples",
    icon: FileText,
    count: "50+ Examples"
  },
  {
    title: "Video Tutorials",
    description: "Watch our step-by-step video guides",
    icon: Video,
    count: "25+ Videos"
  },
  {
    title: "Community Forum",
    description: "Get help from our developer community",
    icon: Users,
    count: "2K+ Members"
  }
];

export default function DocumentationPage() {
  return (
    <Layout 
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation, tutorials, and guides for Zion Tech Group's APIs, SDKs, and development tools."
      keywords="documentation, API docs, tutorials, guides, developer resources, SDKs"
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
                <BookOpen className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Documentation
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Everything you need to build with Zion Tech Group's platform. 
                Comprehensive guides, API references, tutorials, and examples.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/api-docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  API Reference
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
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
                Documentation Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find the information you need organized by category and difficulty level.
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
                      {category.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-3 ${
                              link.type === 'guide' ? 'bg-blue-500' :
                              link.type === 'api' ? 'bg-green-500' :
                              link.type === 'tutorial' ? 'bg-purple-500' :
                              'bg-orange-500'
                            }`}></span>
                            <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                              {link.title}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Docs Section */}
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
                Popular Documentation
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Most viewed and helpful documentation articles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {doc.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      doc.type === 'guide' ? 'bg-blue-100 text-blue-700' :
                      doc.type === 'api' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {doc.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {doc.views} views
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
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
                Additional Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                More tools and resources to help you succeed with our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-3 text-sm">
                      {resource.description}
                    </p>

                    <div className="text-blue-400 text-sm font-medium">
                      {resource.count}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our support team is here to help. Get in touch for personalized assistance.
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
    </Layout>
  );
}