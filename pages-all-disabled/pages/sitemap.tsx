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
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Navigate through all our pages and discover everything Zion Tech Group has to offer
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sitemapData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h2>
                  <ul className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.url}
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                        >
                          <page.icon className="w-5 h-5 mr-3" />
                          <span className="group-hover:underline">{page.name}</span>
                          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}