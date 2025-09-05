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
      { name: 'Home', url: '/', icon: Home },
      { name: 'About', url: '/about', icon: Users },
      { name: 'Contact', url: '/contact', icon: Globe },
      { name: 'Services', url: '/services', icon: Settings }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain },
      { name: 'IT Services', url: '/it-services', icon: Network },
      { name: 'Micro SaaS', url: '/micro-saas', icon: Target },
      { name: 'Cloud Services', url: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', url: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', url: '/services/data-analytics', icon: BarChart3 }
    ]
  },
  {
    category: 'Solutions',
    pages: [
      { name: 'Cloud Migration', url: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Digital Transformation', url: '/solutions/digital-transformation', icon: Settings },
      { name: 'Custom Solutions', url: '/solutions/custom', icon: Target }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Documentation', url: '/docs', icon: Globe },
      { name: 'API Documentation', url: '/api-docs', icon: Settings },
      { name: 'Guides', url: '/guides', icon: Globe },
      { name: 'FAQ', url: '/faq', icon: Users }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
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
                Site <span className="text-yellow-400">Map</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Navigate through all our pages, services, and resources
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
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
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {section.category}
                  </h3>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={page.name}
                        href={page.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <page.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-blue-600">
                            {page.name}
                          </div>
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