import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

const whitePapers = [
  {
    id: 1,
    title: 'The Future of AI in Business: A Comprehensive Guide',
    description: 'Explore the latest AI trends and how they can transform your business operations.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    category: 'AI & Technology',
    pages: 45,
    downloadCount: 1250,
    featured: true,
    downloadUrl: '/whitepapers/ai-business-future.pdf'
  },
  {
    id: 2,
    title: 'Micro SaaS Development: Best Practices and Strategies',
    description: 'Learn how to build and launch successful micro SaaS products.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Micro SaaS',
    pages: 32,
    downloadCount: 890,
    featured: false,
    downloadUrl: '/whitepapers/micro-saas-development.pdf'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for 2024',
    description: 'Essential cybersecurity measures every business should implement.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Security',
    pages: 28,
    downloadCount: 1100,
    featured: true,
    downloadUrl: '/whitepapers/cybersecurity-2024.pdf'
  },
  {
    id: 4,
    title: 'Cloud Migration Strategies: A Step-by-Step Guide',
    description: 'Complete guide to migrating your infrastructure to the cloud.',
    author: 'Jennifer Lee',
    date: '2023-12-20',
    category: 'Cloud Computing',
    pages: 38,
    downloadCount: 750,
    featured: false,
    downloadUrl: '/whitepapers/cloud-migration-guide.pdf'
  }
];

const categories = [
  'All Papers',
  'AI & Technology',
  'Micro SaaS',
  'Security',
  'Cloud Computing',
  'Development'
];

export default function WhitePapersPage() {
  return (
    <Layout
      title="White Papers - Zion Tech Group"
      description="Download our comprehensive white papers on AI, technology, and business innovation"
      keywords="white papers, research, technology insights, business guides, AI research"
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
                White Papers
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Download our comprehensive white papers on AI, technology, and business innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* White Papers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {paper.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-2" />
                        {paper.pages} pages
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="w-4 h-4 mr-2" />
                        {paper.downloadCount} downloads
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={paper.downloadUrl}
                        download
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Download PDF
                        <Download className="w-4 h-4 ml-2" />
                      </a>
                      <Link
                        href={`/contact?whitepaper=${paper.id}`}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Contribute?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Share your expertise with our community. Contact us to discuss contributing a white paper.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}