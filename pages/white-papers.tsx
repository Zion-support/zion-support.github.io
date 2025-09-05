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
  Tag
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'AI in Enterprise: A Comprehensive Guide',
    description: 'Learn how to implement AI solutions in your enterprise environment with practical insights and best practices.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Johnson',
    publishDate: '2024-01-15',
    readTime: '15 min',
    downloads: 1250,
    rating: 4.8,
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Discover proven strategies for migrating your infrastructure to the cloud while minimizing downtime and maximizing efficiency.',
    category: 'Cloud Solutions',
    author: 'Mike Chen',
    publishDate: '2024-01-22',
    readTime: '12 min',
    downloads: 980,
    rating: 4.6,
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Trends 2024',
    description: 'Stay ahead of the latest cybersecurity threats and solutions with our comprehensive analysis of current trends.',
    category: 'Cybersecurity',
    author: 'Alex Rodriguez',
    publishDate: '2024-02-01',
    readTime: '18 min',
    downloads: 2100,
    rating: 4.9,
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: true
  },
  {
    id: 4,
    title: 'Data Analytics for Business Intelligence',
    description: 'Transform your data into actionable insights with advanced analytics techniques and business intelligence strategies.',
    category: 'Data & Analytics',
    author: 'Emily Watson',
    publishDate: '2024-02-10',
    readTime: '20 min',
    downloads: 1560,
    rating: 4.7,
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: false
  },
  {
    id: 5,
    title: 'DevOps Implementation Guide',
    description: 'Streamline your development and operations with proven DevOps methodologies and automation strategies.',
    category: 'Development',
    author: 'David Kim',
    publishDate: '2024-02-15',
    readTime: '14 min',
    downloads: 890,
    rating: 4.5,
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: false
  },
  {
    id: 6,
    title: 'Digital Transformation Strategies',
    description: 'Navigate the digital transformation journey with strategic insights and implementation frameworks.',
    category: 'Business Strategy',
    author: 'Lisa Thompson',
    publishDate: '2024-02-20',
    readTime: '16 min',
    downloads: 1340,
    rating: 4.8,
    image: '/api/placeholder/400/250',
    pdfUrl: '#',
    isFeatured: true
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud Solutions',
  'Cybersecurity',
  'Data & Analytics',
  'Development',
  'Business Strategy'
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
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
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* White Papers List */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured White Papers</h2>
              <p className="text-gray-600">Explore our latest research and insights.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {paper.category}
                      </span>
                      {paper.isFeatured && (
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
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
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{paper.readTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="w-4 h-4 mr-2" />
                        <span>{paper.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{paper.rating}</span>
                      </div>
                      <Link
                        href={paper.pdfUrl}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Link>
                    </div>
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