<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51

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
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Papers
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                White
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Papers
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Access our comprehensive collection of white papers covering AI, cybersecurity, 
                digital transformation, and other technology topics.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured White Papers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 mr-3 text-yellow-500" />
                Featured White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular and highly-rated technical papers.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPapers.map((paper, index) => (
                  <motion.div
                    key={paper.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yellow-200 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        FEATURED
                      </div>
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 inline mr-1 text-yellow-500 fill-current" />
                        {paper.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{paper.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{paper.author} - {paper.authorTitle}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{paper.readTime}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="w-4 h-4 mr-2" />
                          <span>{paper.views.toLocaleString()} views</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search white papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
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
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of technical papers and research documents.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWhitePapers.map((paper, index) => (
                  <motion.div
                    key={paper.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 inline mr-1 text-yellow-500 fill-current" />
                        {paper.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{paper.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{paper.readTime}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Download className="w-4 h-4 mr-2" />
                          <span>{paper.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with New White Papers
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter to get notified about new white papers, 
                research updates, and exclusive technical content.
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Subscribe to Updates
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Read Our Blog
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
  );
}