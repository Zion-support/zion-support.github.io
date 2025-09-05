import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    description: 'A comprehensive analysis of how artificial intelligence is transforming business operations and creating new opportunities.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '15 min',
    category: 'AI & Machine Learning',
    downloads: 1250,
    icon: BookOpen,
    color: 'from-blue-500 to-purple-500',
    tags: ['AI', 'Business', 'Future', 'Technology']
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    description: 'Essential security measures and best practices for protecting your cloud infrastructure and data.',
    author: 'James Wilson',
    date: '2024-01-10',
    readTime: '12 min',
    category: 'Cybersecurity',
    downloads: 980,
    icon: FileText,
    color: 'from-red-500 to-pink-500',
    tags: ['Security', 'Cloud', 'Best Practices', 'Compliance']
  },
  {
    id: 3,
    title: 'Digital Transformation Guide',
    description: 'A step-by-step guide to successfully implementing digital transformation in your organization.',
    author: 'Michael Rodriguez',
    date: '2024-01-05',
    readTime: '20 min',
    category: 'Digital Transformation',
    downloads: 1500,
    icon: BookOpen,
    color: 'from-green-500 to-blue-500',
    tags: ['Digital Transformation', 'Strategy', 'Implementation', 'Business']
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Digital Transformation',
  'Cloud Computing',
  'Data Analytics'
];

export default function WhitePapers() {
  return (
    <Layout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cybersecurity, digital transformation, and other technology topics. Free downloads available."
      keywords="white papers, research, AI, cybersecurity, digital transformation, technology insights, free downloads"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                White
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Papers
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Access our comprehensive collection of white papers covering AI, cybersecurity, 
                digital transformation, and other technology topics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
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

        {/* White Papers Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${paper.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${paper.color} rounded-lg`}>
                        <paper.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {paper.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {paper.readTime} read
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Download className="h-4 w-4 mr-2" />
                        {paper.downloads} downloads
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Free Download
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Download
                        <Download className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Contribute a White Paper?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for industry experts to share their insights. 
                Contact us if you'd like to contribute a white paper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}