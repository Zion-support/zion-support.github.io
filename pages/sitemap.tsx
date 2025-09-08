<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  Phone as PhoneIcon, 
  MapPin, 
  Globe,
  ArrowRight
} from 'lucide-react';

const sitemapData = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Products', href: '/products', icon: Globe },
    { name: 'Contact', href: '/contact', icon: Phone }
  ],
  services: [
    { name: 'AI Services', href: '/services/ai' },
    { name: 'Cloud Computing', href: '/services/cloud' },
    { name: 'Micro SaaS', href: '/services/saas' },
    { name: 'Security', href: '/security' }
  ],
  products: [
    { name: 'AI Email Responder', href: '/products/ai-email-responder' },
    { name: 'Cloud Infrastructure', href: '/products/cloud-infrastructure' },
    { name: 'Security Suite', href: '/products/security-suite' },
    { name: 'Micro SaaS Platform', href: '/products/micro-saas-platform' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Guides', href: '/guides' },
    { name: 'Help', href: '/help' },
    { name: 'API Documentation', href: '/api-docs' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Newsletter', href: '/newsletter' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place."
      keywords="sitemap, navigation, website map, pages, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Home, 
  Brain, 
  Network, 
  Target, 
  Users, 
  Shield, 
  Cloud, 
  BarChart3, 
  Settings, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const sitemapData = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', icon: Home, description: 'Main landing page' },
      { name: 'About', url: '/about', icon: Users, description: 'Learn about our company' },
      { name: 'Contact', url: '/contact', icon: Globe, description: 'Get in touch with us' },
      { name: 'Services', url: '/services', icon: Settings, description: 'Our comprehensive services' }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'AI and machine learning solutions' },
      { name: 'IT Services', url: '/it-services', icon: Network, description: 'Information technology services' },
      { name: 'Cloud Solutions', url: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure and services' },
      { name: 'Security', url: '/security', icon: Shield, description: 'Cybersecurity solutions' }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Blog', url: '/blog', icon: Globe, description: 'Latest insights and updates' },
      { name: 'Documentation', url: '/docs', icon: Globe, description: 'Technical documentation' },
      { name: 'Help Center', url: '/help', icon: Globe, description: 'Support and help articles' },
      { name: 'Sitemap', url: '/sitemap', icon: Globe, description: 'This page' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Site Map - Zion Tech Group</title>
        <meta name="description" content="Navigate through all our pages and discover everything we offer" />
        <meta name="keywords" content="sitemap, navigation, pages, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Navigate through all our pages and discover everything we offer
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
<<<<<<< HEAD
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Navigation</h2>
                  <ul className="space-y-3">
                    {sitemapData.main.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
                  <ul className="space-y-3">
                    {sitemapData.services.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Products */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Products</h2>
                  <ul className="space-y-3">
                    {sitemapData.products.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
                  <ul className="space-y-3">
                    {sitemapData.resources.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Company</h2>
                  <ul className="space-y-3">
                    {sitemapData.company.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal</h2>
                  <ul className="space-y-3">
                    {sitemapData.legal.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sitemapData.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    {section.category}
                  </h2>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={page.name}
                        href={page.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <page.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {page.name}
                          </div>
                          {page.description && (
                            <div className="text-sm text-gray-600">
                              {page.description}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            </div>
          </section>
        </main>
        <Footer />
      </div>
<<<<<<< HEAD
    </Layout>
  );
}
=======
    </>
  );
}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
