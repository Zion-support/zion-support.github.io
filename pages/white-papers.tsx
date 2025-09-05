import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Search, 
  Filter, 
  ArrowRight, 
  Clock, 
  Eye, 
  Tag,
  ChevronDown,
  X
} from 'lucide-react';

const whitePaperCategories = [
  { name: 'AI & Machine Learning', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Cybersecurity', count: 6, color: 'bg-red-100 text-red-800' },
  { name: 'Cloud Computing', count: 5, color: 'bg-green-100 text-green-800' },
  { name: 'Data Analytics', count: 7, color: 'bg-purple-100 text-purple-800' },
  { name: 'Digital Transformation', count: 4, color: 'bg-orange-100 text-orange-800' },
  { name: 'IoT & Edge Computing', count: 3, color: 'bg-indigo-100 text-indigo-800' }
];

const whitePapers = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: A Comprehensive Guide',
    description: 'Explore how artificial intelligence is transforming enterprise operations and what it means for your business.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '15 min read',
    downloads: 1250,
    views: 3200,
    tags: ['AI', 'Enterprise', 'Machine Learning', 'Automation'],
    featured: true
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Modern Businesses',
    description: 'Essential security measures every business should implement to protect against evolving cyber threats.',
    category: 'Cybersecurity',
    author: 'David Kim',
    date: '2024-01-10',
    readTime: '12 min read',
    downloads: 980,
    views: 2100,
    tags: ['Security', 'Best Practices', 'Threats', 'Protection'],
    featured: false
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies: A Step-by-Step Guide',
    description: 'Learn the best practices for migrating your infrastructure to the cloud with minimal disruption.',
    category: 'Cloud Computing',
    author: 'Alex Morgan',
    date: '2024-01-08',
    readTime: '18 min read',
    downloads: 1100,
    views: 2800,
    tags: ['Cloud', 'Migration', 'Infrastructure', 'Strategy'],
    featured: true
  },
  {
    id: 4,
    title: 'Data-Driven Decision Making: Analytics for Business Growth',
    description: 'How to leverage data analytics to make informed decisions and drive business growth.',
    category: 'Data Analytics',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    readTime: '14 min read',
    downloads: 850,
    views: 1900,
    tags: ['Analytics', 'Data', 'Decision Making', 'Growth'],
    featured: false
  },
  {
    id: 5,
    title: 'Digital Transformation: A Complete Roadmap',
    description: 'A comprehensive guide to digital transformation, including strategy, implementation, and best practices.',
    category: 'Digital Transformation',
    author: 'Michael Chen',
    date: '2024-01-03',
    readTime: '20 min read',
    downloads: 1200,
    views: 2500,
    tags: ['Digital Transformation', 'Strategy', 'Implementation', 'Roadmap'],
    featured: true
  },
  {
    id: 6,
    title: 'IoT Security: Protecting Connected Devices',
    description: 'Critical security considerations for IoT implementations and how to secure your connected infrastructure.',
    category: 'IoT & Edge Computing',
    author: 'Lisa Thompson',
    date: '2024-01-01',
    readTime: '16 min read',
    downloads: 720,
    views: 1600,
    tags: ['IoT', 'Security', 'Connected Devices', 'Infrastructure'],
    featured: false
  }
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPapers = whitePapers.filter(paper => paper.featured);

  return (
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and digital transformation insights."
      keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, technology insights"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              White <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Papers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Access our comprehensive collection of research papers and insights on cutting-edge technology topics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
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
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-gray-50 rounded-lg"
            >
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'All' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All ({whitePapers.length})
                </button>
                {whitePaperCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Papers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Papers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful research papers that are shaping the future of technology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${whitePaperCategories.find(cat => cat.name === paper.category)?.color}`}>
                    {paper.category}
                  </span>
                  <span className="text-sm text-gray-500">{paper.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{paper.title}</h3>
                <p className="text-gray-600 mb-6">{paper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {paper.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(paper.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {paper.views}
                    </div>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Download
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Papers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All White Papers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of research papers and technical insights.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${whitePaperCategories.find(cat => cat.name === paper.category)?.color}`}>
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">{paper.readTime}</span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloads} downloads
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {paper.views} views
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Our Latest Research</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter to receive the latest white papers and technology insights directly in your inbox.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/newsletter" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}