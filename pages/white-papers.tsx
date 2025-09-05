import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  Tag
} from 'lucide-react';
import Head from 'next/head';

const whitePapers = [
  {
    id: 1,
    title: 'AI in Enterprise: A Comprehensive Guide',
    description: 'Explore the latest trends and best practices for implementing AI solutions in enterprise environments.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Johnson',
    publishDate: '2024-01-15',
    readTime: '15 min read',
    downloads: 1250,
    rating: 4.8,
    tags: ['AI', 'Enterprise', 'Machine Learning'],
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies for 2024',
    description: 'A detailed analysis of cloud migration approaches, challenges, and solutions for modern businesses.',
    category: 'Cloud Computing',
    author: 'Michael Chen',
    publishDate: '2024-01-10',
    readTime: '12 min read',
    downloads: 980,
    rating: 4.6,
    tags: ['Cloud', 'Migration', 'Strategy'],
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices',
    description: 'Essential security measures and protocols to protect your organization from modern cyber threats.',
    category: 'Cybersecurity',
    author: 'Alex Rodriguez',
    publishDate: '2024-01-05',
    readTime: '18 min read',
    downloads: 2100,
    rating: 4.9,
    tags: ['Security', 'Best Practices', 'Threats'],
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: true
  }
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning' },
    { id: 'Cloud Computing', name: 'Cloud Computing' },
    { id: 'Cybersecurity', name: 'Cybersecurity' },
    { id: 'Development', name: 'Development' },
    { id: 'Business Strategy', name: 'Business Strategy' }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive collection of technical white papers and research documents." />
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
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Download our comprehensive white papers on technology trends and best practices.
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* White Papers List */}
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

            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search white papers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* White Papers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 font-semibold">
                        {paper.category}
                      </span>
                      {paper.isFeatured && (
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span>{paper.author}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span>{paper.publishDate}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{paper.readTime}</span>
                        <Eye className="w-4 h-4 ml-4 mr-1" />
                        <span>{paper.downloads} downloads</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{paper.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No white papers found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Custom Research?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our team can create custom white papers and research reports tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View All Research
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}