import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Calendar,
  User,
  Eye,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Star,
  Clock,
  Tag,
  ExternalLink
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'AI in Enterprise: A Comprehensive Guide',
    description: 'Explore how artificial intelligence is transforming enterprise operations and learn best practices for implementation.',
    author: 'Dr. Sarah Johnson',
    publishDate: '2024-01-15',
    category: 'Artificial Intelligence',
    downloadCount: 1250,
    pages: 45,
    tags: ['AI', 'Enterprise', 'Automation', 'Machine Learning'],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies for Modern Businesses',
    description: 'A detailed guide to migrating your infrastructure to the cloud with minimal disruption and maximum efficiency.',
    author: 'Mike Chen',
    publishDate: '2024-01-10',
    category: 'Cloud Computing',
    downloadCount: 980,
    pages: 32,
    tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices 2024',
    description: 'Stay ahead of evolving cyber threats with our comprehensive guide to modern security practices.',
    author: 'Alex Rodriguez',
    publishDate: '2024-01-05',
    category: 'Cybersecurity',
    downloadCount: 2100,
    pages: 38,
    tags: ['Security', 'Threats', 'Compliance', 'Zero Trust'],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: 4,
    title: 'Digital Transformation Roadmap',
    description: 'Learn how to create and execute a successful digital transformation strategy for your organization.',
    author: 'Jennifer Lee',
    publishDate: '2023-12-20',
    category: 'Digital Transformation',
    downloadCount: 1650,
    pages: 42,
    tags: ['Digital', 'Transformation', 'Strategy', 'Innovation'],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: 5,
    title: 'DevOps Implementation Guide',
    description: 'Master the art of DevOps with our comprehensive guide covering tools, processes, and best practices.',
    author: 'David Kim',
    publishDate: '2023-12-15',
    category: 'DevOps',
    downloadCount: 1400,
    pages: 35,
    tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure'],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: 6,
    title: 'Data Analytics for Business Intelligence',
    description: 'Transform your data into actionable insights with our guide to modern analytics and business intelligence.',
    author: 'Maria Garcia',
    publishDate: '2023-12-10',
    category: 'Data Analytics',
    downloadCount: 1100,
    pages: 28,
    tags: ['Analytics', 'BI', 'Data Science', 'Visualization'],
    downloadUrl: '#',
    previewUrl: '#'
  }
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Digital Transformation',
  'DevOps',
  'Data Analytics'
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredPapers = whitePapers
    .filter(paper => {
      const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishDate) - new Date(a.publishDate);
        case 'oldest':
          return new Date(a.publishDate) - new Date(b.publishDate);
        case 'popular':
          return b.downloadCount - a.downloadCount;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">White Papers</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="title">Title A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our latest research and insights on technology trends.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Eye size={16} className="mr-1" />
                        <span>{paper.downloadCount}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{paper.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User size={16} className="mr-2" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FileText size={16} className="mr-2" />
                        <span>{paper.pages} pages</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {paper.tags.length > 3 && (
                        <span className="text-gray-400 text-xs">
                          +{paper.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <Download size={16} className="mr-2" />
                        Download
                      </button>
                      <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredPapers.length === 0 && (
              <div className="text-center py-12">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No white papers found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about new white papers and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}