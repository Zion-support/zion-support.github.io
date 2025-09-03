import React from 'react';
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Map, ExternalLink, Download } from 'lucide-react';

const Sitemap: NextPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main homepage' },
        { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', url: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'Services',
      pages: [
        { name: 'All Services', url: '/services', description: 'Overview of all our services' },
        { name: 'Micro SaaS', url: '/services/micro-saas', description: 'Micro SaaS solutions' },
        { name: 'IT Services', url: '/services/it-services', description: 'IT consulting and services' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Artificial Intelligence solutions' }
      ]
    },
    {
      title: 'Solutions',
      pages: [
        { name: 'All Solutions', url: '/solutions', description: 'Overview of all our solutions' },
        { name: 'Enterprise Solutions', url: '/solutions/enterprise', description: 'Enterprise-grade solutions' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and news' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'Webinars', url: '/webinars', description: 'Expert-led webinars and training' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation and guides' },
        { name: 'API Reference', url: '/api', description: 'Complete API documentation' },
        { name: 'Help Center', url: '/help', description: 'Support and help resources' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Company',
      pages: [
        { name: 'Partners', url: '/partners', description: 'Our strategic partners' },
        { name: 'System Status', url: '/status', description: 'Real-time system status' }
      ]
    },
    {
      title: 'Legal & Privacy',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'How we use cookies' },
        { name: 'Data Protection', url: '/data-protection', description: 'Data protection measures' },
        { name: 'Accessibility', url: '/accessibility', description: 'Digital accessibility commitment' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'XML Sitemap', url: '/sitemap.xml', type: 'xml' },
    { name: 'RSS Feed', url: '/rss.xml', type: 'rss' },
    { name: 'Robots.txt', url: '/robots.txt', type: 'txt' }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category."
      keywords="sitemap, website structure, navigation, pages, services, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Map className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sitemap</h1>
              <p className="text-xl text-gray-200 mb-8">
                Complete overview of all pages and sections on our website. 
                Find what you're looking for quickly and easily.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{link.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Website Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <li key={pageIndex}>
                          <Link
                            href={page.url}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {page.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Search Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Can't Find What You're Looking For?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Use Search</h3>
                  <p className="text-gray-600">
                    Try using our search functionality to find specific content or services.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-600">
                    Our team is here to help you find the information you need.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
                  <p className="text-gray-600">
                    Get instant help through our live chat support system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Need Help Finding Something?</h2>
              <p className="text-xl mb-8 text-blue-100">
                If you can't find what you're looking for, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/help"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  Map, ArrowRight, Home, Users, Briefcase, Phone, DollarSign,
  FileText, BookOpen, Award, Shield, Globe, Search, Calendar,
  Brain, Cloud, Database, Network, Zap, Target
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const mainPages = [
    { name: 'Home', url: '/', description: 'Welcome to Zion Tech Group', icon: Home },
    { name: 'About', url: '/about', description: 'Learn about our company and mission', icon: Users },
    { name: 'Services', url: '/services', description: 'Our AI and technology solutions', icon: Briefcase },
    { name: 'Contact', url: '/contact', description: 'Get in touch with our team', icon: Phone },
    { name: 'Careers', url: '/careers', description: 'Join our team of experts', icon: Users },
    { name: 'Products', url: '/products', description: 'Explore our products', icon: Briefcase },
    { name: 'Blog', url: '/blog', description: 'Latest insights and technology trends', icon: BookOpen },
    { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data', icon: Shield },
    { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions', icon: FileText },
  ];
  const servicePages = [
    { name: 'AI Development', url: '/services/ai-development', description: 'Artificial Intelligence solutions', icon: Brain },
    { name: 'Cloud Services', url: '/services/cloud-services', description: 'Cloud architecture and ops', icon: Cloud },
    { name: 'Web Development', url: '/services/web-development', description: 'Modern web applications', icon: Globe },
    { name: 'Mobile Development', url: '/services/mobile-development', description: 'iOS and Android apps', icon: Target },
    { name: 'Blockchain Solutions', url: '/services/blockchain-solutions', description: 'Web3 and blockchain', icon: Shield },
    { name: 'IoT Platforms', url: '/services/iot-platforms', description: 'Connected devices and data', icon: Network },
    { name: 'Cybersecurity', url: '/services/cybersecurity', description: 'Security and compliance', icon: Shield },
  ];
  const contentPages = [
    { name: 'Services Overview', url: '/services', description: 'Overview of all our services', icon: Briefcase },
  ];
  const categories = [
    { name: 'Main Pages', pages: mainPages, color: 'from-blue-500 to-cyan-500' },
    { name: 'Services', pages: servicePages, color: 'from-purple-500 to-pink-500' },
    { name: 'Content', pages: contentPages, color: 'from-green-500 to-emerald-500' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Map className="w-4 h-4 mr-2" />
              Site Navigation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all pages and content on our website. Navigate through our services, resources, and information easily.
            </p>
            <div className="flex items-center justify-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: {new Date(lastUpdated).toLocaleDateString()}
            </div>
          </motion.div>
=======
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

const SitemapPage: React.FC = () => {
  const pages = [
    { title: 'Home', url: '/' },
    { title: 'Services', url: '/services' },
    { title: 'AI Services', url: '/services/ai-services' },
    { title: 'Micro SaaS', url: '/services/micro-saas' },
    { title: 'IT Services', url: '/services/it-services' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Case Studies', url: '/case-studies' },
    { title: 'Careers', url: '/careers' },
    { title: 'Privacy Policy', url: '/privacy' },
    { title: 'Terms of Service', url: '/terms' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages and services easily." />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-xl text-gray-600">
              Find all pages and services on our website
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Pages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map((page, index) => (
                <Link key={index} href={page.url}>
                  <span className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                    {page.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
>>>>>>> main
        </div>
      </div>
    </>
=======

<<<<<<< HEAD
      {/* Search and Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search pages..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">All Pages</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">Services</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">Resources</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.pages.map((page, pageIndex) => (
                    <motion.div
                      key={page.url}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.05 * pageIndex }}
                    >
                      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                        <div className="flex items-start mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                            <page.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{page.name}</h3>
                            <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <a href={page.url} className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                            Visit Page
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                          <Badge variant="secondary" className="text-xs">{page.url}</Badge>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Website Statistics</h2>
            <p className="text-gray-300">Overview of our website content and structure</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{mainPages.length + servicePages.length + contentPages.length}</div>
                <div className="text-gray-300">Total Pages</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{servicePages.length}</div>
                <div className="text-gray-300">Service Pages</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="p-6 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{contentPages.length + 3}</div>
                <div className="text-gray-300">Resource Pages</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="p-6 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Mobile Responsive</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding Something?</h2>
            <p className="text-xl text-gray-300 mb-8">Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a href="/services" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors">
                <Briefcase className="w-5 h-5 mr-2" />
                Browse Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
=======
const Sitemap: React.FC = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services', url: '/services/ai-services' },
    { name: 'IT Services', url: '/services/it-services' },
    { name: 'Micro SaaS', url: '/services/micro-saas' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Enterprise', url: '/solutions/enterprise' },
    { name: 'Small Business', url: '/solutions/small-business' },
    { name: 'Startups', url: '/solutions/startups' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' },
    { name: 'Careers', url: '/careers' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Terms', url: '/terms' },
  ];

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-gray-600 mb-8">Quick links to primary pages and sections.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.url}>
            <a className="text-blue-600 hover:underline" href={l.url}>
              {l.name}
            </a>
          </li>
        ))}
      </ul>
>>>>>>> main
    </div>
>>>>>>> origin/main
>>>>>>> main
  );
};

export default SitemapPage;