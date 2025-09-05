import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  Settings,
  Building,
  Contact,
  Users,
  FileText
} from 'lucide-react';
import Layout from '../components/Layout';

const sitemapData = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About Us', href: '/about', icon: Building },
      { name: 'Contact', href: '/contact', icon: Contact }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'All Services', href: '/services', icon: Settings },
      { name: 'AI Services', href: '/ai-services', icon: Settings },
      { name: 'IT Services', href: '/it-services', icon: Settings },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Settings }
    ]
  },
  {
    category: 'Solutions',
    pages: [
      { name: 'All Solutions', href: '/solutions', icon: Settings },
      { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
      { name: 'Healthcare', href: '/solutions/healthcare', icon: Users },
      { name: 'Finance', href: '/solutions/finance', icon: Settings }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api', icon: Settings },
      { name: 'Help Center', href: '/help', icon: Users },
      { name: 'Blog', href: '/blog', icon: FileText }
    ]
  }
];

export default function Sitemap() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on our website"
      keywords="sitemap, navigation, website structure, pages"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Complete navigation guide to all our pages and sections
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sitemapData.map((section, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {section.category}
                    </h2>
                    <ul className="space-y-3">
                      {section.pages.map((page, pageIndex) => {
                        const IconComponent = page.icon;
                        return (
                          <li key={pageIndex}>
                            <Link
                              href={page.href}
                              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <IconComponent className="w-4 h-4 mr-2" />
                              {page.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}