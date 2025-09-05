import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sitemap, 
  ExternalLink, 
  ArrowRight,
  Home,
  Settings,
  Users,
  FileText,
  HelpCircle,
  Phone
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    title: 'Main Pages',
    icon: Home,
    pages: [
      { name: 'Home', url: '/', description: 'Main landing page' },
      { name: 'About Us', url: '/about', description: 'Company information and team' },
      { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', url: '/blog', description: 'Latest news and insights' }
    ]
  },
  {
    title: 'Services',
    icon: Settings,
    pages: [
      { name: 'All Services', url: '/services', description: 'Overview of all services' },
      { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
      { name: 'Micro SaaS', url: '/micro-saas', description: 'Software as a service solutions' }
    ]
  },
  {
    title: 'Solutions',
    icon: Users,
    pages: [
      { name: 'All Solutions', url: '/solutions', description: 'Overview of all solutions' },
      { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Large organization solutions' },
      { name: 'Startup Solutions', url: '/solutions/startup', description: 'Startup-focused solutions' },
      { name: 'Industry Solutions', url: '/solutions/industry', description: 'Industry-specific solutions' },
      { name: 'Custom Development', url: '/solutions/custom', description: 'Bespoke development services' }
    ]
  },
  {
    title: 'Resources',
    icon: FileText,
    pages: [
      { name: 'All Resources', url: '/resources', description: 'Overview of all resources' },
      { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
      { name: 'Case Studies', url: '/case-studies', description: 'Client success stories' },
      { name: 'API Reference', url: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', url: '/tutorials', description: 'Learning tutorials' },
      { name: 'Guides', url: '/guides', description: 'How-to guides' },
      { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
      { name: 'Support', url: '/support', description: 'Customer support' }
    ]
  },
  {
    title: 'Company',
    icon: Users,
    pages: [
      { name: 'About Us', url: '/about', description: 'Company information' },
      { name: 'Careers', url: '/careers', description: 'Job opportunities' },
      { name: 'News', url: '/news', description: 'Company news and updates' }
    ]
  },
  {
    title: 'Legal',
    icon: FileText,
    pages: [
      { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy and data protection' },
      { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
      { name: 'Security', url: '/security', description: 'Security information' },
      { name: 'Compliance', url: '/compliance', description: 'Compliance and certifications' }
    ]
  }
];

const quickLinks = [
  { name: 'Get Started', url: '/contact', description: 'Start your project' },
  { name: 'View Services', url: '/services', description: 'Explore our services' },
  { name: 'Read Documentation', url: '/docs', description: 'Technical guides' },
  { name: 'Contact Support', url: '/support', description: 'Get help' }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on the Zion Tech Group website. Find any page quickly and easily."
      keywords="sitemap, site map, navigation, pages, links"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                <span className="bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Navigate our website easily with this comprehensive sitemap. 
                Find any page or section quickly and efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Site Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse all pages organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <Link
                              href={page.url}
                              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                            >
                              {page.name}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                              {page.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Functionality */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our search functionality or contact us directly for assistance.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Search Our Site
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Use the search bar in the header to find specific content across our entire website.
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Can't find what you need? Our team is here to help you navigate our services.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
                Now that you've explored our site, let's discuss how we can help 
                transform your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Your Project
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Explore Services
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}