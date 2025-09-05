<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
import Link from 'next/link';
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '../src/components/layout/MainLayout';
<<<<<<< HEAD
=======
=======
import React, { useState } from 'react';
import Layout from '../components/Layout';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  Download,
  Calendar,
  User,
<<<<<<< HEAD
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
import Link from 'next/link';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
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
<<<<<<< HEAD

const whitePaperCategories = [
  { name: 'AI & Machine Learning', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Cybersecurity', count: 6, color: 'bg-red-100 text-red-800' },
  { name: 'Cloud Computing', count: 5, color: 'bg-green-100 text-green-800' },
  { name: 'Data Analytics', count: 7, color: 'bg-purple-100 text-purple-800' },
  { name: 'Digital Transformation', count: 4, color: 'bg-orange-100 text-orange-800' },
  { name: 'IoT & Edge Computing', count: 3, color: 'bg-indigo-100 text-indigo-800' }
];
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Eye
} from 'lucide-react';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

const whitePapers = [
  {
    id: 1,
<<<<<<< HEAD
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
<<<<<<< HEAD

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
=======
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
<<<<<<< HEAD
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPapers = whitePapers.filter(paper => paper.featured);

  return (
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

export default function WhitePapersPage() {
  return (
<<<<<<< HEAD
    <Layout title="White Papers - Zion Tech Group" description="Access our comprehensive collection of technical white papers and research documents">
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
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

<<<<<<< HEAD
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
=======
          <div className="container mx-auto px-4 relative z-10">
=======
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White{' '}
<<<<<<< HEAD
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Papers
                </span>
              </h1>
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices." />
      </Head>

>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">White Papers</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
=======
                Download our comprehensive white papers on technology trends and best practices.
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Papers
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
=======

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-500">{paper.category}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloadCount}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {paper.date}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </motion.div>
              ))}
=======

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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find white papers by technology area.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Tag className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">{category}</span>
                </motion.div>
              ))}
            </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
        {/* Featured White Papers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
=======
        {/* Featured Papers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 mr-3 text-yellow-500" />
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                Featured White Papers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download our comprehensive white papers on technology trends and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI in Enterprise: A Complete Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to implement AI solutions in enterprise environments with real-world case studies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published: Feb 2024</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us for custom research and analysis tailored to your specific needs.
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
=======
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
    </MainLayout>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </Layout>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  );
}