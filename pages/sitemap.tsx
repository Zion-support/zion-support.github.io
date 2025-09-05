import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Home,
  Settings,
  Users,
  FileText,
  Brain,
  Cloud,
  Shield
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const sitePages = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'About', href: '/about', icon: Users },
  { title: 'Services', href: '/services', icon: Settings },
  { title: 'Contact', href: '/contact', icon: FileText }
];

export default function Sitemap() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
      keywords="sitemap, website map, navigation, pages, services, resources"
    >
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate our website easily with this comprehensive sitemap
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitePages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <page.icon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold">{page.title}</h3>
                </div>
                <Link
                  href={page.href}
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  Visit Page
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
