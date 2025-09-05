import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Home, 
  Brain, 
  Network, 
  Target, 
  Users, 
  Shield, 
  Cloud, 
  BarChart3, 
  Settings, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const sitemapData = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', icon: Home, description: 'Main landing page' },
      { name: 'About', url: '/about', icon: Users, description: 'Learn about our company' },
      { name: 'Contact', url: '/contact', icon: Globe, description: 'Get in touch with us' },
      { name: 'Services', url: '/services', icon: Settings, description: 'Our comprehensive services' }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'AI and machine learning solutions' },
      { name: 'IT Services', url: '/it-services', icon: Network, description: 'Information technology services' },
      { name: 'Cloud Solutions', url: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure and services' },
      { name: 'Security', url: '/security', icon: Shield, description: 'Cybersecurity solutions' }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Blog', url: '/blog', icon: Globe, description: 'Latest insights and updates' },
      { name: 'Documentation', url: '/docs', icon: Globe, description: 'Technical documentation' },
      { name: 'Help Center', url: '/help', icon: Globe, description: 'Support and help articles' },
      { name: 'Sitemap', url: '/sitemap', icon: Globe, description: 'This page' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Site Map - Zion Tech Group</title>
        <meta name="description" content="Navigate through all our pages and discover everything we offer" />
        <meta name="keywords" content="sitemap, navigation, pages, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Navigate through all our pages and discover everything we offer
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sitemapData.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    {section.category}
                  </h2>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={page.name}
                        href={page.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <page.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {page.name}
                          </div>
                          {page.description && (
                            <div className="text-sm text-gray-600">
                              {page.description}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}