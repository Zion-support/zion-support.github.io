import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  Download,
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Eye
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in Business',
    description: 'A comprehensive analysis of how AI is transforming business operations, including case studies, implementation strategies, and ROI calculations.',
    category: 'ai',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    downloadCount: 2500,
    isFeatured: true,
    tags: ['AI', 'Machine Learning', 'Business Strategy']
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices: A Complete Guide',
    description: 'Step-by-step guide to migrating your infrastructure to the cloud, covering planning, execution, and optimization strategies.',
    category: 'cloud',
    author: 'Mike Chen',
    date: '2024-01-10',
    downloadCount: 1800,
    isFeatured: true,
    tags: ['Cloud Computing', 'Migration', 'Infrastructure']
  },
  {
    id: 3,
    title: 'Cybersecurity in the Digital Age: Protecting Your Assets',
    description: 'Comprehensive guide to modern cybersecurity threats and how to protect your organization.',
    category: 'security',
    author: 'Emily Johnson',
    date: '2024-01-05',
    downloadCount: 1500,
    isFeatured: false,
    tags: ['Cybersecurity', 'Data Protection', 'Risk Management']
  },
  {
    id: 4,
    title: 'Data Analytics: Turning Information into Insights',
    description: 'Discover how to leverage data analytics to drive business decisions and growth.',
    category: 'development',
    author: 'David Kim',
    date: '2023-12-20',
    downloadCount: 750,
    isFeatured: false,
    tags: ['Data Analytics', 'Business Intelligence', 'Insights']
  }
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All White Papers' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business Strategy' }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPapers = whitePapers.filter(paper => paper.isFeatured);

  return (
    <Layout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cloud solutions, cybersecurity, and more. Download free technical resources and insights."
      keywords="white papers, technical papers, AI research, cloud solutions, cybersecurity, business strategy, free downloads"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Papers
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Papers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular and impactful research documents, handpicked by our experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-medium text-yellow-600">Featured</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{paper.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloadCount}</span>
                        </div>
                      </div>
                      
                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                        Download
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Papers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-600 capitalize">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {paper.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloadCount}</span>
                        </div>
                      </div>
                      
                      <button className="text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1">
                        Download
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Our Latest Research
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to access new white papers and research insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold"
                >
                  Request Custom Research
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}