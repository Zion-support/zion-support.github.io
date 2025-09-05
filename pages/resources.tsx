import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, BarChart3, MessageSquare, Settings, ArrowRight, BookOpen, Users, HelpCircle, Globe, Shield } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const resourceCategories = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation",
    icon: FileText,
    href: "/docs",
    color: "blue",
    items: ["API Documentation", "Integration Guides", "Technical Specifications", "Setup Instructions"]
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and implementations",
    icon: BarChart3,
    href: "/case-studies",
    color: "green",
    items: ["Client Success Stories", "Implementation Examples", "ROI Analysis", "Best Practices"]
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and technology updates",
    icon: MessageSquare,
    href: "/blog",
    color: "purple",
    items: ["Technology Trends", "Industry Insights", "Technical Tutorials", "Company News"]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Settings,
    href: "/api-docs",
    color: "indigo",
    items: ["REST API Docs", "GraphQL Schema", "SDK Libraries", "Code Examples"]
  },
  {
    title: "Tutorials",
    description: "Step-by-step learning resources",
    icon: BookOpen,
    href: "/tutorials",
    color: "orange",
    items: ["Getting Started", "Advanced Topics", "Video Tutorials", "Interactive Examples"]
  },
  {
    title: "Guides",
    description: "Comprehensive how-to guides and best practices",
    icon: Globe,
    href: "/guides",
    color: "teal",
    items: ["Implementation Guides", "Best Practices", "Troubleshooting", "Optimization Tips"]
  },
  {
    title: "FAQ",
    description: "Frequently asked questions and answers",
    icon: HelpCircle,
    href: "/faq",
    color: "red",
    items: ["Common Questions", "Technical Issues", "Billing Questions", "Support Topics"]
  },
  {
    title: "Support",
    description: "Get help and support for our services",
    icon: Users,
    href: "/support",
    color: "pink",
    items: ["Contact Support", "Ticket System", "Live Chat", "Community Forum"]
  }
];

const featuredResources = [
  {
    title: "Getting Started with AI Services",
    description: "A comprehensive guide to implementing AI solutions in your business",
    type: "Guide",
    readTime: "15 min read",
    href: "/guides/ai-services-getting-started"
  },
  {
    title: "Enterprise Security Best Practices",
    description: "Essential security practices for enterprise applications",
    type: "Documentation",
    readTime: "20 min read",
    href: "/docs/enterprise-security"
  },
  {
    title: "Micro SaaS Architecture Patterns",
    description: "Design patterns and best practices for building micro SaaS applications",
    type: "Case Study",
    readTime: "25 min read",
    href: "/case-studies/micro-saas-architecture"
  }
];

export default function ResourcesPage() {
  return (
    <MainLayout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, tutorials, and support. Everything you need to succeed with our technology solutions."
      keywords="resources, documentation, case studies, tutorials, API reference, support, guides, FAQ"
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
                Resources &{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Everything you need to succeed with our technology solutions. 
                From comprehensive documentation to real-world case studies and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Support
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
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
                Featured Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Start with these popular resources to get the most out of our technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
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
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">{resource.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
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
                Resource Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive collection of resources organized by category 
                to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCategories.map((category, index) => {
                const IconComponent = category.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  green: "from-green-500 to-green-600",
                  purple: "from-purple-500 to-purple-600",
                  indigo: "from-indigo-500 to-indigo-600",
                  orange: "from-orange-500 to-orange-600",
                  teal: "from-teal-500 to-teal-600",
                  red: "from-red-500 to-red-600",
                  pink: "from-pink-500 to-pink-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>

                    <ul className="space-y-1 mb-6">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-gray-500">
                          • {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={category.href}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm group`}
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
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