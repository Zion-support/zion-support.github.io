import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Map, ArrowRight, ExternalLink, Home, Settings, Users, FileText, HelpCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    category: 'Main Pages',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    pages: [
      { name: 'Home', url: '/', description: 'Main landing page' },
      { name: 'About Us', url: '/about', description: 'Company information and team' },
      { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', url: '/blog', description: 'Latest news and insights' }
    ]
  },
  {
    category: 'Services',
    icon: Settings,
    color: 'from-green-500 to-emerald-500',
    pages: [
      { name: 'All Services', url: '/services', description: 'Overview of all our services' },
      { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
      { name: 'Micro SaaS', url: '/micro-saas', description: 'Software as a service solutions' }
    ]
  },
  {
    category: 'Solutions',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    pages: [
      { name: 'All Solutions', url: '/solutions', description: 'Overview of all solutions' },
      { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Large organization solutions' },
      { name: 'Startup Solutions', url: '/solutions/startup', description: 'Startup-focused solutions' },
      { name: 'Industry Solutions', url: '/solutions/industry', description: 'Industry-specific solutions' },
      { name: 'Custom Development', url: '/solutions/custom', description: 'Bespoke software development' }
    ]
  },
  {
    category: 'Resources',
    icon: FileText,
    color: 'from-orange-500 to-red-500',
    pages: [
      { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
      { name: 'Case Studies', url: '/case-studies', description: 'Client success stories' },
      { name: 'Tutorials', url: '/tutorials', description: 'Learning tutorials' },
      { name: 'Guides', url: '/guides', description: 'Developer guides' },
      { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
      { name: 'Support', url: '/support', description: 'Customer support' }
    ]
  },
  {
    category: 'Company',
    icon: Users,
    color: 'from-indigo-500 to-purple-500',
    pages: [
      { name: 'Careers', url: '/careers', description: 'Job opportunities' },
      { name: 'News', url: '/news', description: 'Company news and updates' },
      { name: 'Talent', url: '/talent', description: 'Talent acquisition' }
    ]
  },
  {
    category: 'Legal',
    icon: FileText,
    color: 'from-gray-500 to-gray-700',
    pages: [
      { name: 'Privacy Policy', url: '/privacy', description: 'Data privacy policy' },
      { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
      { name: 'Security', url: '/security', description: 'Security measures' },
      { name: 'Compliance', url: '/compliance', description: 'Compliance standards' }
    ]
  }
];

const quickLinks = [
  { name: 'Get Started', url: '/contact', description: 'Start your project' },
  { name: 'View Services', url: '/services', description: 'Explore our services' },
  { name: 'Read Documentation', url: '/docs', description: 'Technical guides' },
  { name: 'Contact Support', url: '/support', description: 'Get help' },
  { name: 'View Case Studies', url: '/case-studies', description: 'Success stories' },
  { name: 'Join Our Team', url: '/careers', description: 'Career opportunities' }
];

const externalLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', description: 'Follow us on LinkedIn' },
  { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', description: 'Follow us on Twitter' },
  { name: 'GitHub', url: 'https://github.com/ziontechgroup', description: 'View our code on GitHub' },
  { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', description: 'Watch our videos' },
  { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', description: 'Like us on Facebook' }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on the Zion Tech Group website. Find any page quickly and easily."
      keywords="sitemap, website map, navigation, pages, links, site structure"
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Map className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Map</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Navigate our website easily with our comprehensive sitemap
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600">
                Most popular pages and sections
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <Link
                    href={link.url}
                    className="block group"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Visit Page
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Site Map</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse all pages organized by category for easy navigation
              </p>
            </motion.div>

            <div className="space-y-12">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.pages.map((page, pageIndex) => (
                      <motion.div
                        key={page.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: pageIndex * 0.1 }}
                        className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                      >
                        <Link
                          href={page.url}
                          className="block group"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-medium">
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2">
                              {page.url}
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                External <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Links</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with us on social media and other platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center">
                      {link.name}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <div className="text-blue-600 font-medium text-sm">
                      {link.url}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Use our search functionality or contact us for assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <HelpCircle className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}