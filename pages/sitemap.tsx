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
    <Layout>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place."
        />
        <meta 
          name="keywords" 
          content="sitemap, navigation, pages, website structure"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.pages.map((page, pageIndex) => (
                      <motion.li
                        key={page.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: pageIndex * 0.1 }}
                      >
                        <Link
                          href={page.url}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <page.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{page.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Popular pages and resources for quick access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Get Started', url: '/contact', description: 'Start your project with us' },
                { name: 'View Services', url: '/ai-services', description: 'Explore our AI solutions' },
                { name: 'Read Case Studies', url: '/case-studies', description: 'See our success stories' },
                { name: 'Join Our Team', url: '/careers', description: 'Career opportunities' },
                { name: 'Get Support', url: '/help', description: 'Help and support center' },
                { name: 'Learn More', url: '/about', description: 'About Zion Tech Group' }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link
                    href={link.url}
                    className="block group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {link.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us and we'll help you find the information you need.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}