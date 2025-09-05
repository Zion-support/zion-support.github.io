import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe, 
  ArrowRight, 
  Map, 
  Search,
  FileText,
  Users,
  Settings,
  Shield
} from 'lucide-react';

export default function SitemapPage() {
  const siteSections = [
    {
      title: 'Main Pages',
      icon: Globe,
      pages: [
        { name: 'Home', url: '/', description: 'Our main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Services', url: '/services', description: 'Our comprehensive services' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' }
      ]
    },
    {
      title: 'Services',
      icon: Settings,
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information Technology services' },
        { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure and services' },
        { name: 'Database Solutions', url: '/database-solutions', description: 'Database management and optimization' },
        { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
        { name: 'Custom Development', url: '/custom-development', description: 'Bespoke software development' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Digital transformation consulting' },
        { name: 'Consulting', url: '/consulting', description: 'Technology consulting services' }
      ]
    },
    {
      title: 'Solutions',
      icon: Shield,
      pages: [
        { name: 'Enterprise Solutions', url: '/enterprise-solutions', description: 'Solutions for large organizations' },
        { name: 'Startup Solutions', url: '/startup-solutions', description: 'Solutions for growing businesses' },
        { name: 'Industries', url: '/industries', description: 'Industry-specific solutions' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our team members' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'News', url: '/news', description: 'Company news and updates' },
        { name: 'Partners', url: '/partners', description: 'Our partners and alliances' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Documentation', url: '/docs/api', description: 'API reference and guides' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and tutorials' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth research and insights' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Legal',
      icon: Map,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Security', url: '/security', description: 'Security information' },
        { name: 'Compliance', url: '/compliance', description: 'Compliance and regulations' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources in one place."
      keywords="sitemap, navigation, website structure, pages, services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                Site{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. 
                Find all pages, services, and resources organized by category.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Website Navigation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore all sections of our website organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <section.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={pageIndex}
                          className="group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: pageIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={page.url}
                            className="block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                  {page.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {page.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our search functionality to quickly find specific pages, services, or information.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search our website..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Search for services, pages, or any content you need
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                Need Help Navigating?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                If you can't find what you're looking for or need assistance, 
                our team is here to help you navigate our services and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}