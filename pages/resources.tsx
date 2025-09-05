import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, BarChart3, MessageSquare, Settings, ArrowRight, CheckCircle, Users, Globe, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation",
    icon: FileText,
    href: "/docs",
    features: ["API Documentation", "Integration Guides", "Best Practices", "Code Examples"],
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Case Studies",
    description: "Real-world examples of successful implementations",
    icon: BarChart3,
    href: "/case-studies",
    features: ["Success Stories", "ROI Analysis", "Implementation Details", "Lessons Learned"],
    color: "from-green-600 to-green-800"
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and technical articles",
    icon: MessageSquare,
    href: "/blog",
    features: ["Technical Articles", "Industry News", "Tutorials", "Expert Insights"],
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "API Reference",
    description: "Complete API documentation and testing tools",
    icon: Settings,
    href: "/api-docs",
    features: ["REST APIs", "GraphQL", "SDKs", "Testing Tools"],
    color: "from-orange-600 to-orange-800"
  }
];

const additionalResources = [
  {
    title: "Tutorials",
    description: "Step-by-step guides to get you started",
    icon: "📚",
    href: "/tutorials"
  },
  {
    title: "Guides",
    description: "Comprehensive guides for complex topics",
    icon: "📖",
    href: "/guides"
  },
  {
    title: "FAQ",
    description: "Frequently asked questions and answers",
    icon: "❓",
    href: "/faq"
  },
  {
    title: "Support",
    description: "Get help from our expert support team",
    icon: "🛠️",
    href: "/support"
  }
];

const featuredContent = [
  {
    title: "Getting Started with AI Services",
    type: "Guide",
    description: "Learn how to integrate our AI services into your applications",
    readTime: "10 min read",
    href: "/docs/ai-services/getting-started"
  },
  {
    title: "Case Study: E-commerce Platform Migration",
    type: "Case Study",
    description: "How we helped a major retailer migrate to cloud infrastructure",
    readTime: "15 min read",
    href: "/case-studies/ecommerce-migration"
  },
  {
    title: "API Rate Limiting Best Practices",
    type: "Technical Article",
    description: "Implementing effective rate limiting for your APIs",
    readTime: "8 min read",
    href: "/blog/api-rate-limiting-best-practices"
  }
];

export default function ResourcesPage() {
  return (
    <MainLayout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, blog posts, and API references to help you succeed with our solutions."
      keywords="documentation, case studies, blog, API reference, tutorials, guides, support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                Resources &{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Everything you need to succeed with our solutions. From comprehensive documentation 
                to real-world case studies and expert insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Resources Grid */}
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
                Main Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive resources to help you get the most out of our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
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
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {resource.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >
                      <span>Explore {resource.title}</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
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
                Additional Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                More resources to help you succeed with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-indigo-50 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{resource.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Link
                    href={resource.href}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content */}
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
                Featured Content
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Popular and recently updated content to help you get started.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.map((content, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {content.type}
                    </span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {content.description}
                  </p>
                  
                  <Link
                    href={content.href}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors"
                  >
                    Read More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
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