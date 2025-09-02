import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Download, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Whitepapers: NextPage = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide',
      excerpt: 'An in-depth analysis of AI adoption trends, implementation strategies, and ROI measurement in enterprise environments.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-10',
      category: 'Artificial Intelligence',
      pages: 45,
      downloadCount: 1250,
      image: '/whitepapers/ai-enterprise-future.jpg',
      pdfUrl: '/whitepapers/ai-enterprise-future.pdf'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking the Barriers to Practical Implementation',
      excerpt: 'Exploring the current state of quantum computing technology and its practical applications in business.',
      author: 'Michael Rodriguez',
      date: '2025-01-08',
      category: 'Quantum Computing',
      pages: 38,
      downloadCount: 890,
      image: '/whitepapers/quantum-computing-barriers.jpg',
      pdfUrl: '/whitepapers/quantum-computing-barriers.pdf'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Defense Strategies',
      excerpt: 'A comprehensive guide to understanding AI-powered cyber threats and implementing effective defense mechanisms.',
      author: 'David Kim',
      date: '2025-01-05',
      category: 'Cybersecurity',
      pages: 52,
      downloadCount: 2100,
      image: '/whitepapers/ai-cybersecurity-threats.jpg',
      pdfUrl: '/whitepapers/ai-cybersecurity-threats.pdf'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Roadmap for Success',
      excerpt: 'Strategic insights and practical frameworks for successful digital transformation initiatives.',
      author: 'Lisa Thompson',
      date: '2025-01-03',
      category: 'Digital Transformation',
      pages: 41,
      downloadCount: 1650,
      image: '/whitepapers/digital-transformation-roadmap.jpg',
      pdfUrl: '/whitepapers/digital-transformation-roadmap.pdf'
    },
    {
      id: 5,
      title: 'Edge Computing: The Next Frontier in Data Processing',
      excerpt: 'Understanding edge computing architecture, benefits, and implementation strategies for modern businesses.',
      author: 'James Wilson',
      date: '2025-01-01',
      category: 'Edge Computing',
      pages: 36,
      downloadCount: 980,
      image: '/whitepapers/edge-computing-frontier.jpg',
      pdfUrl: '/whitepapers/edge-computing-frontier.pdf'
    },
    {
      id: 6,
      title: 'Micro SaaS: Building Scalable Software Solutions',
      excerpt: 'A complete guide to developing, launching, and scaling micro SaaS applications for maximum impact.',
      author: 'Emily Watson',
      date: '2024-12-28',
      category: 'Micro SaaS',
      pages: 43,
      downloadCount: 1450,
      image: '/whitepapers/micro-saas-scalable.jpg',
      pdfUrl: '/whitepapers/micro-saas-scalable.pdf'
    }
  ];

  const categories = [
    'All Whitepapers',
    'Artificial Intelligence',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'Edge Computing',
    'Micro SaaS',
    'Cloud Architecture'
  ];

  return (
    <MainLayout
      title="Whitepapers - Zion Tech Group"
      description="Access our comprehensive collection of technology whitepapers covering AI, quantum computing, cybersecurity, and digital transformation."
      keywords="technology whitepapers, AI research, quantum computing, cybersecurity, digital transformation, edge computing"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Whitepapers
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Access our comprehensive collection of research papers and insights on the latest 
              technology trends, innovations, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-left w-full px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Download Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Downloads</span>
                      <span className="font-semibold">8,120</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Most Popular</span>
                      <span className="font-semibold">AI Cybersecurity</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Latest Update</span>
                      <span className="font-semibold">Jan 10, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Whitepapers Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whitepapers.map((paper, index) => (
                  <motion.article
                    key={paper.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {paper.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FileText className="w-4 h-4 mr-1" />
                          {paper.pages} pages
                        </div>
                      </div>

                      <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                        {paper.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {paper.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{paper.author}</p>
                            <p className="text-xs text-gray-500">{paper.date}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{paper.downloadCount} downloads</p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <a
                          href={paper.pdfUrl}
                          download
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </a>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors">
                          Preview
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Newsletter CTA */}
              <div className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Get New Whitepapers First
                </h3>
                <p className="text-gray-200 mb-6">
                  Subscribe to our newsletter and be the first to access our latest research and insights.
                </p>
                <div className="max-w-md mx-auto flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Research Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Primary Research</h3>
                <p className="text-gray-600">
                  Direct interviews with industry experts, surveys, and case studies from real-world implementations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Data Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of market data, technology trends, and performance metrics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Regular Updates</h3>
                <p className="text-gray-600">
                  Our whitepapers are regularly updated to reflect the latest developments and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Whitepapers;