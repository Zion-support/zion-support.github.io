import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Share2,
  Heart,
  Eye
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: 2024 Trends and Predictions',
    excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
    content: 'Artificial Intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete. In 2024, we\'re seeing several key trends emerge that are reshaping the landscape...',
    author: 'Dr. Kleber Santos',
    authorRole: 'CEO & AI Researcher',
    authorImage: '/images/team/kleber-santos.jpg',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Business', 'Trends', 'Future'],
    image: '/images/blog/ai-future-2024.jpg',
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: 'Building Scalable Micro SaaS Platforms: A Complete Guide',
    excerpt: 'Learn the essential strategies and technologies needed to build, launch, and scale successful micro SaaS applications.',
    content: 'Micro SaaS platforms are revolutionizing how businesses approach software solutions. These focused, single-purpose applications offer significant advantages over traditional enterprise software...',
    author: 'Sarah Chen',
    authorRole: 'CTO',
    authorImage: '/images/team/sarah-chen.jpg',
    publishedAt: '2024-01-12',
    readTime: '12 min read',
    category: 'Micro SaaS',
    tags: ['SaaS', 'Development', 'Scaling', 'Architecture'],
    image: '/images/blog/micro-saas-guide.jpg',
    featured: true,
    views: 980,
    likes: 67
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Modern Enterprises',
    excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
    content: 'In today\'s digital landscape, cybersecurity is not just an IT concern—it\'s a business imperative. With cyber threats becoming more sophisticated and frequent, organizations must adopt a comprehensive security strategy...',
    author: 'David Kim',
    authorRole: 'Head of Security',
    authorImage: '/images/team/david-kim.jpg',
    publishedAt: '2024-01-10',
    readTime: '10 min read',
    category: 'Cybersecurity',
    tags: ['Security', 'Enterprise', 'Best Practices', 'Compliance'],
    image: '/images/blog/cybersecurity-best-practices.jpg',
    featured: false,
    views: 750,
    likes: 45
  },
  {
    id: 4,
    title: 'Cloud Migration Strategies: From On-Premises to Cloud',
    excerpt: 'A comprehensive guide to planning and executing successful cloud migration projects.',
    content: 'Cloud migration is one of the most critical digital transformation initiatives for modern businesses. However, without proper planning and execution, migration projects can fail to deliver expected benefits...',
    author: 'Michael Rodriguez',
    authorRole: 'Cloud Solutions Architect',
    authorImage: '/images/team/michael-rodriguez.jpg',
    publishedAt: '2024-01-08',
    readTime: '15 min read',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Migration', 'Strategy', 'AWS'],
    image: '/images/blog/cloud-migration-strategies.jpg',
    featured: false,
    views: 650,
    likes: 38
  },
  {
    id: 5,
    title: 'Data Science in Healthcare: Transforming Patient Care',
    excerpt: 'How data science and AI are revolutionizing healthcare delivery and patient outcomes.',
    content: 'Healthcare is experiencing a data revolution. From electronic health records to wearable devices, the amount of health data being generated is unprecedented. Data science and AI are transforming how we analyze this information...',
    author: 'Lisa Wang',
    authorRole: 'Head of Data Science',
    authorImage: '/images/team/lisa-wang.jpg',
    publishedAt: '2024-01-05',
    readTime: '11 min read',
    category: 'Data Science',
    tags: ['Healthcare', 'Data Science', 'AI', 'Patient Care'],
    image: '/images/blog/data-science-healthcare.jpg',
    featured: false,
    views: 890,
    likes: 52
  },
  {
    id: 6,
    title: 'The Rise of Quantum Computing: What It Means for Business',
    excerpt: 'Understanding quantum computing and its potential impact on various industries.',
    content: 'Quantum computing represents a paradigm shift in computational power. While still in its early stages, quantum computers promise to solve problems that are intractable for classical computers...',
    author: 'Dr. Kleber Santos',
    authorRole: 'CEO & AI Researcher',
    authorImage: '/images/team/kleber-santos.jpg',
    publishedAt: '2024-01-03',
    readTime: '9 min read',
    category: 'Quantum Computing',
    tags: ['Quantum Computing', 'Technology', 'Future', 'Innovation'],
    image: '/images/blog/quantum-computing-rise.jpg',
    featured: false,
    views: 720,
    likes: 41
  }
];

const categories = [
  { name: 'All', count: blogPosts.length, active: true },
  { name: 'AI & Machine Learning', count: blogPosts.filter(post => post.category === 'AI & Machine Learning').length, active: false },
  { name: 'Micro SaaS', count: blogPosts.filter(post => post.category === 'Micro SaaS').length, active: false },
  { name: 'Cybersecurity', count: blogPosts.filter(post => post.category === 'Cybersecurity').length, active: false },
  { name: 'Cloud Computing', count: blogPosts.filter(post => post.category === 'Cloud Computing').length, active: false },
  { name: 'Data Science', count: blogPosts.filter(post => post.category === 'Data Science').length, active: false },
  { name: 'Quantum Computing', count: blogPosts.filter(post => post.category === 'Quantum Computing').length, active: false }
];

const featuredPosts = blogPosts.filter(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

export default function BlogPage() {
  return (
    <Layout 
      title="Blog - Zion Tech Group | Latest Insights & Technology News"
      description="Stay updated with the latest insights on AI, technology trends, and industry best practices. Expert articles from our team of technology professionals."
      keywords="blog, AI insights, technology news, industry trends, tech articles, machine learning, cybersecurity"
    >
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
                Our Blog
                <span className="block text-blue-400">Insights & Technology News</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest insights on AI, technology trends, and industry best practices 
                from our team of experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Subscribe to Updates
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and insightful articles on technology trends and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.publishedAt}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with our latest insights and technology news.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.publishedAt}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter and never miss the latest insights on AI, technology trends, and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 max-w-md px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}