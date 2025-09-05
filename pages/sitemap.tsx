<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';

export default function SitemapPage() {
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
      category: 'Services',
      pages: [
<<<<<<< HEAD
        { name: 'AI Services', url: '/ai-services', description: 'AI and machine learning solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
        { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure and services' },
        { name: 'Database Solutions', url: '/database-solutions', description: 'Database design and optimization' },
        { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
        { name: 'Custom Development', url: '/custom-development', description: 'Bespoke software development' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Digital transformation consulting' },
        { name: 'Consulting', url: '/consulting', description: 'Technology consulting services' }
      ]
    },
    {
      category: 'Solutions',
      pages: [
        { name: 'Enterprise Solutions', url: '/enterprise-solutions', description: 'Solutions for large organizations' },
        { name: 'Startup Solutions', url: '/startup-solutions', description: 'Solutions for growing businesses' },
        { name: 'Industry Solutions', url: '/industries', description: 'Industry-specific solutions' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our team members' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'News', url: '/news', description: 'Latest news and updates' },
        { name: 'Partners', url: '/partners', description: 'Our business partners' }
=======
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure and migration' },
        { name: 'Security Services', url: '/security', description: 'Cybersecurity solutions' },
        { name: 'Performance Optimization', url: '/performance', description: 'Application optimization' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business transformation' },
        { name: 'Consulting', url: '/consulting', description: 'Technology consulting' }
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      ]
    },
    {
      category: 'Resources',
      pages: [
<<<<<<< HEAD
        { name: 'Blog', url: '/blog', description: 'Technology insights and articles' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Documentation', url: '/docs/api', description: 'API reference and guides' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and tutorials' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth technical papers' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', url: '/help', description: 'Support and help resources' }
=======
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and examples' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and updates' },
        { name: 'Guides', url: '/guides', description: 'Helpful guides and tutorials' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars' },
        { name: 'Newsletter', url: '/newsletter', description: 'Subscribe to our newsletter' }
      ]
    },
    {
      category: 'Documentation',
      pages: [
        { name: 'API Documentation', url: '/api-docs', description: 'API reference and guides' },
        { name: 'Developer Resources', url: '/dev-resources', description: 'Tools and resources for developers' },
        { name: 'Integration Guides', url: '/integration-guides', description: 'Step-by-step integration guides' },
        { name: 'SDK Downloads', url: '/sdk-downloads', description: 'Software development kits' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'News', url: '/news', description: 'Company news and updates' },
        { name: 'Partners', url: '/partners', description: 'Our partner network' },
        { name: 'Investors', url: '/investors', description: 'Investor information' }
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      ]
    },
    {
      category: 'Legal',
      pages: [
<<<<<<< HEAD
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
=======
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Security', url: '/security', description: 'Security measures and compliance' }
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      ]
    }
  ];

<<<<<<< HEAD
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate through all pages and sections of our website. Find the information you need quickly and easily."
      keywords="sitemap, navigation, website structure, pages"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

=======
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const sitemapSections = [
  {
    title: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', icon: Home },
      { name: 'About Us', url: '/about', icon: Users },
      { name: 'Contact', url: '/contact', icon: Settings },
      { name: 'Privacy Policy', url: '/privacy', icon: Shield },
      { name: 'Terms of Service', url: '/terms', icon: Shield }
    ]
  },
  {
    title: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain },
      { name: 'IT Services', url: '/it-services', icon: Settings },
      { name: 'Micro SAAS', url: '/micro-saas', icon: Cloud },
      { name: 'Security', url: '/security', icon: Shield },
      { name: 'Services Overview', url: '/services-overview', icon: Settings }
    ]
  },
  {
    title: 'Resources',
    pages: [
      { name: 'Case Studies', url: '/case-studies', icon: CheckCircle },
      { name: 'News & Updates', url: '/news', icon: ArrowRight },
      { name: 'Guides & Tutorials', url: '/guides', icon: ArrowRight },
      { name: 'FAQ', url: '/faq', icon: CheckCircle },
      { name: 'Help & Support', url: '/help', icon: Settings }
    ]
  },
  {
    title: 'Company',
    pages: [
      { name: 'Our Team', url: '/team', icon: Users },
      { name: 'Careers', url: '/careers', icon: Users },
      { name: 'Partners', url: '/partners', icon: Users },
      { name: 'Industries', url: '/industries', icon: Settings },
      { name: 'Compliance', url: '/compliance', icon: Shield }
    ]
  }
];

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place."
      keywords="sitemap, navigation, pages, website structure"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
  const quickLinks = [
    { name: 'Get Started', url: '/contact', icon: ArrowRight },
    { name: 'View Pricing', url: '/pricing', icon: FileText },
    { name: 'Schedule Demo', url: '/demo', icon: ExternalLink },
    { name: 'Support Center', url: '/support', icon: FileText }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Site{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
=======
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
<<<<<<< HEAD
                Navigate through all pages and sections of our website. 
                Find the information you need quickly and easily.
=======
                Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Map</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place.
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
                Navigate our website easily with our comprehensive sitemap. 
                Find all our pages, services, and resources in one place.
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {siteStructure.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                      {section.category}
                    </h2>
                    
                    <div className="space-y-4">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.name}
                          className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (pageIndex * 0.05) }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link
                                href={page.url}
                                className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                              >
                                {page.name}
                              </Link>
                              <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
<<<<<<< HEAD
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Popular pages and resources you might be looking for.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Get Started', url: '/contact', description: 'Start your project with us' },
                  { name: 'Our Services', url: '/services', description: 'Explore our service offerings' },
                  { name: 'AI Solutions', url: '/ai-services', description: 'Discover AI capabilities' },
                  { name: 'Cloud Services', url: '/cloud-solutions', description: 'Cloud infrastructure solutions' },
                  { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
                  { name: 'Support', url: '/help', description: 'Get help and support' }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.url}
                      className="block group"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{link.description}</p>
                      <div className="flex items-center text-indigo-600 font-medium">
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
=======
        {/* Sitemap Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sitemapSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  
                  <ul className="space-y-3">
                    {section.pages.map((page, idx) => (
                      <li key={idx}>
                        <Link
                          href={page.url}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                        >
                          <page.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-600" />
                          <span className="group-hover:translate-x-1 transition-transform">
                            {page.name}
                          </span>
=======
              <p className="text-xl text-gray-600">
                Popular pages and resources
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                      <link.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {link.name}
                    </h3>
                  </div>
                  <Link 
                    href={link.url}
                    className="text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"
                  >
                    Visit Page
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Site Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse all our pages organized by category for easy navigation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link 
                          href={page.url}
                          className="block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {page.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {page.description}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                          </div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the information you need. 
                Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
=======
        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need Help Finding Something?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you can't find what you're looking for, our team is here to help you navigate our website.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  Contact Us
                </Link>
                <Link
                  href="/help"
<<<<<<< HEAD
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
=======
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                >
                  Get Help
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Use our search functionality to find specific content across our website.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Support
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}