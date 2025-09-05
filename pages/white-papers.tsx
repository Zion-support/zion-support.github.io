import React, { useState } from 'react';
import Head from 'next/head';
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

export default function WhitePapers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'DevOps', 'Data Analytics'];

  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Business Transformation",
      description: "A comprehensive guide to implementing AI solutions in your business operations for maximum efficiency and growth.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Johnson",
      publishDate: "2024-01-15",
      readTime: "15 min",
      downloads: 1250,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250",
      pdfUrl: "/whitepapers/ai-business-transformation.pdf"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      description: "Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.",
      category: "Cloud Computing",
      author: "Mike Chen",
      publishDate: "2024-01-10",
      readTime: "12 min",
      downloads: 980,
      rating: 4.6,
      thumbnail: "/api/placeholder/400/250",
      pdfUrl: "/whitepapers/cloud-migration-best-practices.pdf"
    },
    {
      id: 3,
      title: "Cybersecurity Framework 2024",
      description: "An updated framework for implementing robust cybersecurity measures in modern organizations.",
      category: "Cybersecurity",
      author: "Alex Rodriguez",
      publishDate: "2024-01-05",
      readTime: "20 min",
      downloads: 2100,
      rating: 4.9,
      thumbnail: "/api/placeholder/400/250",
      pdfUrl: "/whitepapers/cybersecurity-framework-2024.pdf"
    },
    {
      id: 4,
      title: "DevOps Automation Strategies",
      description: "Streamline your development and deployment processes with proven DevOps automation techniques.",
      category: "DevOps",
      author: "Emma Wilson",
      publishDate: "2023-12-28",
      readTime: "18 min",
      downloads: 1450,
      rating: 4.7,
      thumbnail: "/api/placeholder/400/250",
      pdfUrl: "/whitepapers/devops-automation-strategies.pdf"
    },
    {
      id: 5,
      title: "Data Analytics for Business Intelligence",
      description: "Transform your data into actionable insights with modern analytics tools and methodologies.",
      category: "Data Analytics",
      author: "David Kim",
      publishDate: "2023-12-20",
      readTime: "14 min",
      downloads: 1100,
      rating: 4.5,
      thumbnail: "/api/placeholder/400/250",
      pdfUrl: "/whitepapers/data-analytics-business-intelligence.pdf"
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
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

        {/* Search and Filter Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={paper.thumbnail}
                      alt={paper.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <FileText className="h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-2" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {paper.publishDate}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {paper.readTime} read
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="h-4 w-4 mr-2" />
                        {paper.downloads} downloads
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        {paper.rating}/5.0
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={paper.pdfUrl}
                        download
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Preview
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our team can create custom white papers and research documents tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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