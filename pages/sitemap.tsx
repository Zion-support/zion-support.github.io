import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight, Globe, Users, Settings, BookOpen } from 'lucide-react';

const siteStructure = [
  {
    category: 'Main Pages',
    icon: Globe,
    pages: [
      { name: 'Home', url: '/', description: 'Main landing page' },
      { name: 'About Us', url: '/about', description: 'Learn about our company' },
      { name: 'Services', url: '/services', description: 'Our comprehensive services' },
      { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
    ]
  },
  {
    category: 'Services',
    icon: Settings,
    pages: [
      { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
      { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud computing solutions' },
      { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
      { name: 'Data Analytics', url: '/data-analytics', description: 'Data analysis services' },
      { name: 'Web Development', url: '/web-development', description: 'Web application development' }
    ]
  },
  {
    category: 'Resources',
    icon: BookOpen,
    pages: [
      { name: 'Blog', url: '/blog', description: 'Latest news and insights' },
      { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
      { name: 'Guides', url: '/guides', description: 'Technical guides and tutorials' },
      { name: 'White Papers', url: '/white-papers', description: 'In-depth research papers' },
      { name: 'Webinars', url: '/webinars', description: 'Educational webinars' },
      { name: 'API Documentation', url: '/api-docs', description: 'Developer documentation' }
    ]
  },
  {
    category: 'Company',
    icon: Users,
    pages: [
      { name: 'Our Team', url: '/team', description: 'Meet our experts' },
      { name: 'Careers', url: '/careers', description: 'Join our team' },
      { name: 'Partners', url: '/partners', description: 'Our partners' },
      { name: 'News', url: '/news', description: 'Company news and updates' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place." />
        <meta name="keywords" content="sitemap, navigation, pages, services, resources" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Navigate our website easily with our comprehensive sitemap." />
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
                Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Site Map</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore all the pages and resources available on our website, organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={section.category}
                    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{section.category}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {section.pages.map((page, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div>
                            <Link
                              href={page.url}
                              className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                              {page.name}
                            </Link>
                            <p className="text-sm text-gray-600">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quick Links</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access the most important pages and resources quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                href="/contact"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-sm text-gray-600">Get in touch</p>
              </Link>
              
              <Link
                href="/services"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <Settings className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                <p className="text-sm text-gray-600">Our solutions</p>
              </Link>
              
              <Link
                href="/about"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">About Us</h3>
                <p className="text-sm text-gray-600">Our company</p>
              </Link>
              
              <Link
                href="/blog"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">Blog</h3>
                <p className="text-sm text-gray-600">Latest insights</p>
              </Link>
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
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us and we'll help you find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/help" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
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