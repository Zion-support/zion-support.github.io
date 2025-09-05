import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowRight,
  Download,
  Calendar,
  User,
  Tag,
  ExternalLink
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const whitePapers = [
  {
    id: 1,
    title: 'The Future of AI in Business: A Comprehensive Guide',
    description: 'Explore how artificial intelligence is transforming business operations and learn strategies for successful AI implementation.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'AI & Technology',
    downloadCount: '3,247',
    downloadUrl: '/downloads/ai-business-guide.pdf',
    featured: true,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices for Enterprise',
    description: 'A detailed guide to migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'IT Services',
    downloadCount: '2,891',
    downloadUrl: '/downloads/cloud-migration-guide.pdf',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Micro SaaS: Building Scalable Solutions',
    description: 'Learn how to build and scale micro SaaS products that generate recurring revenue and serve niche markets.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Micro SaaS',
    downloadCount: '2,156',
    downloadUrl: '/downloads/micro-saas-guide.pdf',
    featured: true,
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Cybersecurity in the Digital Age',
    description: 'Protect your business from evolving cyber threats with modern security strategies and best practices.',
    author: 'David Kim',
    date: '2024-01-01',
    category: 'Security',
    downloadCount: '2,103',
    downloadUrl: '/downloads/cybersecurity-guide.pdf',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    title: 'Digital Transformation Strategies',
    description: 'A comprehensive guide to digital transformation and how to successfully implement it in your organization.',
    author: 'Lisa Wang',
    date: '2023-12-20',
    category: 'Digital Transformation',
    downloadCount: '1,847',
    downloadUrl: '/downloads/digital-transformation-guide.pdf',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    title: 'Blockchain Technology in Business',
    description: 'Understanding blockchain technology and its practical applications in modern business operations.',
    author: 'James Wilson',
    date: '2023-12-15',
    category: 'Blockchain',
    downloadCount: '1,623',
    downloadUrl: '/downloads/blockchain-guide.pdf',
    featured: false,
    image: '/api/placeholder/400/300'
  }
];

const categories = [
  { name: 'All', count: 15 },
  { name: 'AI & Technology', count: 4 },
  { name: 'IT Services', count: 3 },
  { name: 'Micro SaaS', count: 3 },
  { name: 'Security', count: 2 },
  { name: 'Digital Transformation', count: 2 },
  { name: 'Blockchain', count: 1 }
];

export default function WhitePapersPage() {
  return (
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers on AI, IT services, and technology solutions."
      keywords="white papers, research, AI, IT services, technology, insights, reports"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  White Papers
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Deep insights and research on the latest technology trends
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured White Papers</h2>
              <p className="text-lg text-gray-600">
                Our most popular and insightful research documents
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitePapers.filter(paper => paper.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 text-white">
                      <div className="flex items-center space-x-2 mb-4">
                        <Tag className="w-4 h-4" />
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                          {paper.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{paper.title}</h3>
                      <p className="text-gray-200 mb-6">{paper.description}</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{paper.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloadCount} downloads</span>
                        </div>
                      </div>
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* White Papers List */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whitePapers.map((paper, index) => (
                    <motion.div
                      key={paper.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={paper.image}
                          alt={paper.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                            {paper.category}
                          </span>
                          {paper.featured && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {paper.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {paper.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{paper.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{paper.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span>{paper.downloadCount} downloads</span>
                          </div>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter to get notified about new white papers and research insights
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-r-lg hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}