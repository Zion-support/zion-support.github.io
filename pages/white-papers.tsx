import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  FileText, 
  Download, 
  Calendar, 
  Clock, 
  Tag,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';

const WhitePapersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'data', name: 'Data Analytics' },
    { id: 'business', name: 'Business Strategy' }
  ];

  const whitePapers = [
    {
      id: 'ai-business-transformation',
      title: 'AI-Powered Business Transformation: A Complete Guide',
      description: 'Comprehensive guide on how artificial intelligence can transform your business operations and drive growth.',
      category: 'ai',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '15 min',
      downloads: 1250,
      featured: true
    },
    {
      id: 'cloud-migration-strategy',
      title: 'Cloud Migration Strategy: Best Practices and Implementation',
      description: 'Learn the essential strategies for successful cloud migration and avoid common pitfalls.',
      category: 'cloud',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '12 min',
      downloads: 980,
      featured: false
    },
    {
      id: 'cybersecurity-framework',
      title: 'Zero Trust Security Framework: Implementation Guide',
      description: 'Complete implementation guide for zero trust security architecture in modern enterprises.',
      category: 'security',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '18 min',
      downloads: 2100,
      featured: true
    },
    {
      id: 'data-driven-decisions',
      title: 'Data-Driven Decision Making: From Insights to Action',
      description: 'How to leverage data analytics to make better business decisions and improve outcomes.',
      category: 'data',
      author: 'Emily Rodriguez',
      date: '2023-12-28',
      readTime: '10 min',
      downloads: 750,
      featured: false
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout 
      title="White Papers - Zion Tech Group" 
      description="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and business strategy."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  White Papers & Research
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Deep dive into the latest technology trends and best practices with our comprehensive white papers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  {paper.featured && (
                    <div className="bg-blue-600 text-white px-4 py-2 text-center text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {categories.find(cat => cat.id === paper.category)?.name}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="h-4 w-4 mr-1" />
                        {paper.downloads}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="h-4 w-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {paper.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {paper.readTime} read
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Link>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our research team can create custom white papers and reports tailored to your specific industry and needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Request Custom Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhitePapersPage;