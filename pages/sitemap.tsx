import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';

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
      { name: 'AI Services', url: '/ai-services', description: 'Artificial Intelligence solutions' },
      { name: 'IT Services', url: '/it-services', description: 'Information Technology services' },
      { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud computing services' },
      { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security and protection services' }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Blog', url: '/blog', description: 'Latest news and insights' },
      { name: 'Case Studies', url: '/case-studies', description: 'Success stories and examples' },
      { name: 'White Papers', url: '/white-papers', description: 'Technical documentation' },
      { name: 'Webinars', url: '/webinars', description: 'Educational webinars' }
    ]
  },
  {
    category: 'Company',
    pages: [
      { name: 'Team', url: '/team', description: 'Meet our team' },
      { name: 'Careers', url: '/careers', description: 'Join our team' },
      { name: 'Partners', url: '/partners', description: 'Our partners and alliances' },
      { name: 'Press', url: '/press', description: 'Press releases and media' }
    ]
  },
  {
    category: 'Support',
    pages: [
      { name: 'Help Center', url: '/help', description: 'Get help and support' },
      { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', url: '/docs/api', description: 'API documentation' },
      { name: 'Status', url: '/status', description: 'System status and uptime' }
    ]
  },
  {
    category: 'Legal',
    pages: [
      { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy and data protection' },
      { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
      { name: 'Sitemap', url: '/sitemap', description: 'Complete site structure' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Sitemap</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate through all pages and sections of our website.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.url}
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          <span className="font-medium">{page.name}</span>
                        </Link>
                        <p className="text-sm text-gray-600 ml-6">{page.description}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Use our search function or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Search Website
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}