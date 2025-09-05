import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ExternalLink,
  Home,
  Settings,
  Users,
  FileText
} from 'lucide-react';
import Layout from '../components/Layout';

const sitemapData = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Users },
      { name: 'Contact', href: '/contact', icon: ExternalLink }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', href: '/ai-services', icon: Settings },
      { name: 'IT Services', href: '/it-services', icon: Settings },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Settings }
    ]
  }
];

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find all pages, services, and resources on our website organized by category.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h2>
                  <ul className="space-y-2">
                    {category.pages.map((page, pageIndex) => {
                      const IconComponent = page.icon;
                      return (
                        <li key={pageIndex}>
                          <Link
                            href={page.href}
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <IconComponent className="w-4 h-4" />
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
        </section>
      </div>
    </Layout>
  );
}