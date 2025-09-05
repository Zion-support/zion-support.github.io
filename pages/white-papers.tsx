import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    description: "Explore how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "Artificial Intelligence",
    readTime: "45 min read",
    downloadCount: "2,341",
    downloadUrl: "/downloads/ai-enterprise-guide.pdf",
    featured: true
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Modern Businesses",
    description: "A detailed guide covering best practices, common pitfalls, and proven strategies for successful cloud migration.",
    author: "Michael Rodriguez",
    date: "2024-01-08",
    category: "Cloud Computing",
    readTime: "35 min read",
    downloadCount: "1,892",
    downloadUrl: "/downloads/cloud-migration-strategies.pdf",
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable SaaS Applications",
    description: "Learn the architectural patterns and development practices needed to build SaaS applications that scale.",
    author: "Emily Johnson",
    date: "2023-12-20",
    category: "Software Development",
    readTime: "40 min read",
    downloadCount: "1,567",
    downloadUrl: "/downloads/scalable-saas-guide.pdf",
    featured: false
  },
  {
    id: 4,
    title: "Cybersecurity in the Digital Age",
    description: "Essential security practices and frameworks for protecting your business in an increasingly connected world.",
    author: "David Kim",
    date: "2023-12-10",
    category: "Cybersecurity",
    readTime: "30 min read",
    downloadCount: "2,103",
    downloadUrl: "/downloads/cybersecurity-guide.pdf",
    featured: false
  }
];

const categories = [
  "All Categories",
  "Artificial Intelligence",
  "Cloud Computing", 
  "Software Development",
  "Cybersecurity",
  "Digital Transformation"
];

export default function WhitePapersPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");

  const filteredWhitePapers = whitePapers.filter(paper => 
    selectedCategory === "All Categories" || paper.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on AI, cloud computing, software development, and digital transformation." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-16 h-16 text-indigo-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  White Papers
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              In-depth insights and research on technology trends and best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Research
              </h2>
              <p className="text-lg text-gray-600">
                Our most popular and comprehensive white papers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {filteredWhitePapers.filter(paper => paper.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-indigo-100"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                        {paper.category}
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-2" />
                        {paper.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {paper.downloadCount} downloads
                      </div>
                      <Link
                        href={paper.downloadUrl}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* All White Papers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                All White Papers
              </h2>
              <p className="text-lg text-gray-600">
                Explore our complete collection of research and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {paper.downloadCount} downloads
                      </span>
                      <Link
                        href={paper.downloadUrl}
                        className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get notified when we publish new white papers and research insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors inline-flex items-center justify-center"
                >
                  Request Custom Research
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}