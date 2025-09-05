import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Share2,
  BookOpen,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Shield,
  Star,
  ExternalLink
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Announces Major AI Breakthrough in Natural Language Processing',
    excerpt: 'Our research team has developed a new AI model that achieves 95% accuracy in understanding complex human language patterns, setting a new industry standard.',
    content: 'Zion Tech Group is proud to announce a groundbreaking advancement in natural language processing technology...',
    author: 'Sarah Johnson',
    authorRole: 'CTO',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-20',
    readTime: '5 min read',
    category: 'AI Innovation',
    tags: ['AI', 'NLP', 'Innovation', 'Research'],
    image: '/api/placeholder/600/400',
    featured: true,
    views: 2150,
    shares: 89,
    type: 'Press Release'
  },
  {
    id: 2,
    title: 'New Partnership with Microsoft Azure Expands Cloud Capabilities',
    excerpt: 'Strategic partnership brings advanced cloud computing solutions to our clients, enabling faster deployment and better scalability.',
    content: 'We are excited to announce our new strategic partnership with Microsoft Azure...',
    author: 'David Kim',
    authorRole: 'Head of Cloud Engineering',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-18',
    readTime: '4 min read',
    category: 'Partnerships',
    tags: ['Partnership', 'Cloud', 'Microsoft', 'Azure'],
    image: '/api/placeholder/600/400',
    featured: true,
    views: 1890,
    shares: 67,
    type: 'Company News'
  },
  {
    id: 3,
    title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
    excerpt: 'Industry recognition highlights our commitment to innovation and excellence in artificial intelligence solutions.',
    content: 'We are honored to be recognized by TechCrunch as one of the top AI companies...',
    author: 'Kleber Santos',
    authorRole: 'CEO',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-15',
    readTime: '3 min read',
    category: 'Awards',
    tags: ['Award', 'Recognition', 'AI', 'Excellence'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1650,
    shares: 45,
    type: 'Awards'
  },
  {
    id: 4,
    title: 'Cybersecurity Solutions Now Available for Small Businesses',
    excerpt: 'New affordable cybersecurity packages make enterprise-grade security accessible to small and medium businesses.',
    content: 'Small businesses often struggle with cybersecurity due to budget constraints...',
    author: 'Emily Rodriguez',
    authorRole: 'Head of Cybersecurity',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    category: 'Product Launch',
    tags: ['Cybersecurity', 'SMB', 'Security', 'Product'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1420,
    shares: 38,
    type: 'Product News'
  },
  {
    id: 5,
    title: 'Zion Tech Group Expands to European Market',
    excerpt: 'New office in London marks our expansion into the European market, bringing our AI solutions to clients across the continent.',
    content: 'We are excited to announce the opening of our new European headquarters...',
    author: 'Lisa Thompson',
    authorRole: 'Head of Product',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-10',
    readTime: '4 min read',
    category: 'Expansion',
    tags: ['Expansion', 'Europe', 'Growth', 'International'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1280,
    shares: 52,
    type: 'Company News'
  },
  {
    id: 6,
    title: 'New Micro SaaS Platform Reduces Development Time by 70%',
    excerpt: 'Revolutionary platform enables rapid development of custom SaaS solutions with pre-built components and templates.',
    content: 'Our new micro SaaS platform is designed to accelerate development...',
    author: 'Michael Chen',
    authorRole: 'Head of AI Research',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-08',
    readTime: '7 min read',
    category: 'Product Launch',
    tags: ['SaaS', 'Development', 'Platform', 'Innovation'],
    image: '/api/placeholder/600/400',
    featured: true,
    views: 1950,
    shares: 73,
    type: 'Product News'
  },
  {
    id: 7,
    title: 'Zion Tech Group Joins AI Ethics Consortium',
    excerpt: 'Commitment to responsible AI development and ethical practices in artificial intelligence solutions.',
    content: 'We are proud to announce our membership in the AI Ethics Consortium...',
    author: 'Sarah Johnson',
    authorRole: 'CTO',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-05',
    readTime: '5 min read',
    category: 'Responsibility',
    tags: ['Ethics', 'Responsible AI', 'Consortium', 'Values'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1100,
    shares: 29,
    type: 'Company News'
  },
  {
    id: 8,
    title: 'Quarterly Results Show 150% Growth in AI Services Revenue',
    excerpt: 'Strong financial performance reflects growing demand for AI solutions and successful client implementations.',
    content: 'Our Q4 2023 results demonstrate strong growth across all business areas...',
    author: 'Kleber Santos',
    authorRole: 'CEO',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-03',
    readTime: '6 min read',
    category: 'Financial',
    tags: ['Revenue', 'Growth', 'Financial', 'Results'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1750,
    shares: 41,
    type: 'Financial'
  }
];

const categories = [
  { name: 'All', count: 24, icon: BookOpen },
  { name: 'AI Innovation', count: 6, icon: Brain },
  { name: 'Partnerships', count: 4, icon: TrendingUp },
  { name: 'Product Launch', count: 5, icon: Zap },
  { name: 'Awards', count: 3, icon: Star },
  { name: 'Company News', count: 4, icon: BookOpen },
  { name: 'Financial', count: 2, icon: TrendingUp }
];

const newsTypes = [
  'All', 'Press Release', 'Company News', 'Product News', 'Awards', 'Financial'
];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesType = selectedType === 'All' || article.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      <Head>
        <title>News - Zion Tech Group | Latest Updates & Company News</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and updates from Zion Tech Group. Read about our innovations, partnerships, and company milestones." />
        <meta name="keywords" content="zion tech news, company updates, AI news, technology announcements, press releases" />
        <meta property="og:title" content="News - Zion Tech Group" />
        <meta property="og:description" content="Latest news and updates from Zion Tech Group." />
        <meta property="og:url" content="https://ziontechgroup.com/news" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest News
                <span className="block text-blue-400">Stay Updated with Our Progress</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover the latest updates, announcements, and insights from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {newsTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredArticles.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Star className="w-8 h-8 text-yellow-500 mr-3" />
                  Featured News
                </h2>
                <p className="text-gray-600">Top stories and important announcements</p>
              </motion.div>

              <div className="space-y-8">
                {featuredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mr-3">
                            {article.category}
                          </span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full mr-3">
                            Featured
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                            {article.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                        <p className="text-gray-600 mb-6">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {article.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(article.publishDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {article.views}
                            </div>
                            <div className="flex items-center">
                              <Share2 className="w-4 h-4 mr-1" />
                              {article.shares}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                      <div className="bg-gray-100 flex items-center justify-center p-8">
                        <div className="text-center">
                          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500">News Article Image</p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular News */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">All News</h2>
              <p className="text-gray-600">Stay updated with our latest announcements and updates</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mr-2">
                        {article.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {article.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Share2 className="w-4 h-4 mr-1" />
                          {article.shares}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or check back later for new content.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss important updates, announcements, and industry insights.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}