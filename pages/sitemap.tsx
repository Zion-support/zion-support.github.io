import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Map, Home, Users, Briefcase, Target, Brain, FileText, Mail, Phone, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SitemapPage: NextPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', url: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      pages: [
        { name: 'All Services', url: '/services', description: 'Overview of all services' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', url: '/services/it-services', description: 'Information Technology services' },
        { name: 'Micro SaaS', url: '/services/micro-saas', description: 'Micro Software as a Service' }
      ]
    },
    {
      title: 'Solutions',
      icon: Target,
      pages: [
        { name: 'All Solutions', url: '/solutions', description: 'Overview of all solutions' },
        { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Enterprise-grade solutions' },
        { name: 'Custom Development', url: '/solutions/custom-development', description: 'Tailored development services' },
        { name: 'Digital Transformation', url: '/solutions/digital-transformation', description: 'Digital transformation consulting' }
      ]
    },
    {
      title: 'Products',
      icon: Brain,
      pages: [
        { name: 'All Products', url: '/products', description: 'Overview of all products' },
        { name: 'AI Sales Copilot', url: '/products/ai-sales-copilot', description: 'Intelligent sales assistant' },
        { name: 'AI Compliance Assistant', url: '/products/ai-compliance-assistant', description: 'Automated compliance monitoring' },
        { name: 'AI Auto Email Responder', url: '/products/ai-auto-email-responder', description: 'Smart email automation' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
        { name: 'Whitepapers', url: '/whitepapers', description: 'Research papers and insights' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' }
      ]
    },
    {
      title: 'Support',
      icon: Users,
      pages: [
        { name: 'Help Center', url: '/help', description: 'Support and FAQ' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation' },
        { name: 'API Reference', url: '/api', description: 'API documentation and guides' },
        { name: 'System Status', url: '/status', description: 'Service status and uptime' }
      ]
    },
    {
      title: 'Legal',
      icon: Globe,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and preferences' },
        { name: 'Sitemap', url: '/sitemap', description: 'This page - site structure' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Contact Us', url: '/contact', icon: Mail },
    { name: 'Get Support', url: '/help', icon: Phone },
    { name: 'View Services', url: '/services', icon: Briefcase },
    { name: 'Read Blog', url: '/blog', icon: FileText }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one organized view."
      keywords="sitemap, website structure, navigation, pages, services, resources"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Map className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Complete overview of our website structure. Find all pages, services, 
              and resources organized by category for easy navigation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 flex items-center justify-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <link.icon className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-800">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Website Structure</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.url}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {page.description}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">Search Our Site</h3>
                <p className="text-gray-600 mb-4">
                  Use our search functionality to quickly find specific content, services, or information.
                </p>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Search
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-blue-600 hover:text-blue-700 font-medium">
                    Contact Support →
                  </Link>
                  <Link href="/help" className="block text-blue-600 hover:text-blue-700 font-medium">
                    Help Center →
                  </Link>
                  <Link href="/documentation" className="block text-blue-600 hover:text-blue-700 font-medium">
                    Documentation →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Site Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Total Pages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <p className="text-gray-300">Service Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-gray-300">Uptime</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SitemapPage;