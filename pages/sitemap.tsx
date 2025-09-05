import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Users, Settings, Shield, Brain, Cloud, ArrowRight, CheckCircle } from 'lucide-react';
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
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
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
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and articles' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Documentation', url: '/docs/api', description: 'API reference and guides' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and tutorials' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth technical papers' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', url: '/help', description: 'Support and help resources' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate through all pages and sections of our website. Find the information you need quickly and easily."
      keywords="sitemap, navigation, website structure, pages"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
=======
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
                Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Map</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place.
              </p>
            </motion.div>
          </div>
        </section>

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
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
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
                  Contact Us
                </Link>
                <Link
                  href="/help"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}