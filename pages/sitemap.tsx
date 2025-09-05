import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, ArrowRight, Phone, Mail } from 'lucide-react';

const siteStructure = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', description: 'Main landing page' },
      { name: 'About Us', url: '/about', description: 'Learn about our company' },
      { name: 'Services', url: '/services', description: 'Our comprehensive services' },
      { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
    ]
  },
  {
    category: 'AI Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'Machine Learning', url: '/ai-services#machine-learning', description: 'ML models and algorithms' },
      { name: 'Natural Language Processing', url: '/ai-services#nlp', description: 'Text analysis and processing' },
      { name: 'Computer Vision', url: '/ai-services#computer-vision', description: 'Image and video analysis' }
    ]
  },
  {
    category: 'IT Services',
    pages: [
      { name: 'IT Services', url: '/it-services', description: 'Information technology solutions' },
      { name: 'Cloud Infrastructure', url: '/it-services#cloud', description: 'Cloud computing solutions' },
      { name: 'Cybersecurity', url: '/it-services#security', description: 'Security and compliance' },
      { name: 'Network Management', url: '/it-services#network', description: 'Network infrastructure' }
    ]
  },
  {
    category: 'Micro SaaS',
    pages: [
      { name: 'Micro SaaS', url: '/micro-saas', description: 'Small business software solutions' },
      { name: 'Project Management', url: '/micro-saas#project-management', description: 'Project tracking tools' },
      { name: 'CRM Solutions', url: '/micro-saas#crm', description: 'Customer relationship management' },
      { name: 'Analytics Tools', url: '/micro-saas#analytics', description: 'Business intelligence tools' }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'API Documentation', url: '/api-docs', description: 'Developer resources and APIs' },
      { name: 'Help Center', url: '/help', description: 'Support and documentation' },
      { name: 'Technology Guides', url: '/guides', description: 'Learning resources and tutorials' },
      { name: 'Newsletter', url: '/newsletter', description: 'Stay updated with our latest news' }
    ]
  },
  {
    category: 'Company',
    pages: [
      { name: 'Careers', url: '/careers', description: 'Join our team' },
      { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy' },
      { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
      { name: 'Security', url: '/security', description: 'Security measures and compliance' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Navigate through all pages and sections of the Zion Tech Group website. Find what you're looking for quickly and easily." />
        <meta name="keywords" content="sitemap, navigation, website structure, pages, Zion Tech Group" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Complete sitemap of our website for easy navigation and discovery." />
        <meta property="og:url" content="https://ziontechgroup.com/sitemap" />
        <meta property="og:type" content="website" />
      </Head>

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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate through all pages and sections of our website to find exactly what you're looking for.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">Easy Navigation & Discovery</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><FileText className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Site Map
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore all pages and sections of our website organized by category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link 
                          href={page.url}
                          className="flex items-start group hover:text-blue-600 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 group-hover:text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {page.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most popular pages and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                <p className="text-sm opacity-90">Get in touch with our team</p>
              </Link>
              
              <Link href="/ai-services" className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-lg font-bold mb-2">AI Services</h3>
                <p className="text-sm opacity-90">Artificial intelligence solutions</p>
              </Link>
              
              <Link href="/it-services" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-lg font-bold mb-2">IT Services</h3>
                <p className="text-sm opacity-90">Technology infrastructure</p>
              </Link>
              
              <Link href="/micro-saas" className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-lg font-bold mb-2">Micro SaaS</h3>
                <p className="text-sm opacity-90">Small business solutions</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the information you need or answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/help" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Help Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}