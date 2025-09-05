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
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Shield,
  Star
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Explore the latest AI trends that are reshaping how businesses operate, from generative AI to autonomous systems.',
    content: 'Artificial Intelligence continues to evolve at an unprecedented pace, and 2024 promises to be a transformative year for businesses...',
    author: 'Sarah Johnson',
    authorRole: 'CTO',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Business', 'Technology', 'Innovation'],
    image: '/api/placeholder/600/400',
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Learn essential security measures to protect your cloud infrastructure and sensitive data.',
    content: 'As more organizations migrate to the cloud, security becomes paramount. Here are the best practices...',
    author: 'Emily Rodriguez',
    authorRole: 'Head of Cybersecurity',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    category: 'Cybersecurity',
    tags: ['Security', 'Cloud', 'Enterprise', 'Best Practices'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 980,
    likes: 67
  },
  {
    id: 3,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and implementing microservices that can grow with your business.',
    content: 'Microservices architecture has become the go-to approach for building scalable applications...',
    author: 'David Kim',
    authorRole: 'Lead Cloud Engineer',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-10',
    readTime: '10 min read',
    category: 'Cloud & DevOps',
    tags: ['Microservices', 'Architecture', 'Scalability', 'DevOps'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1100,
    likes: 78
  },
  {
    id: 4,
    title: 'The Rise of Edge Computing: What It Means for Your Business',
    excerpt: 'Discover how edge computing is revolutionizing data processing and what it means for your organization.',
    content: 'Edge computing is no longer a futuristic concept but a present reality that\'s transforming industries...',
    author: 'Michael Chen',
    authorRole: 'Head of AI Research',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-08',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['Edge Computing', 'IoT', 'Data Processing', 'Innovation'],
    image: '/api/placeholder/600/400',
    featured: true,
    views: 890,
    likes: 54
  },
  {
    id: 5,
    title: 'Data Privacy Regulations: A Complete Guide for 2024',
    excerpt: 'Stay compliant with the latest data privacy regulations and protect your customers\' information.',
    content: 'Data privacy regulations are constantly evolving, and staying compliant is crucial for business success...',
    author: 'Lisa Thompson',
    authorRole: 'Head of Product',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-05',
    readTime: '9 min read',
    category: 'Compliance',
    tags: ['Privacy', 'Compliance', 'GDPR', 'Data Protection'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 750,
    likes: 42
  },
  {
    id: 6,
    title: 'Machine Learning Model Deployment: From Development to Production',
    excerpt: 'Learn the best practices for deploying ML models in production environments.',
    content: 'Deploying machine learning models to production is often more challenging than building them...',
    author: 'Sarah Johnson',
    authorRole: 'CTO',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-01-03',
    readTime: '11 min read',
    category: 'AI & Machine Learning',
    tags: ['ML', 'Deployment', 'Production', 'MLOps'],
    image: '/api/placeholder/600/400',
    featured: false,
    views: 1200,
    likes: 95
  }
];

const categories = [
  { name: 'All', count: 24, icon: BookOpen },
  { name: 'AI & Machine Learning', count: 8, icon: Brain },
  { name: 'Cloud & DevOps', count: 6, icon: Cloud },
  { name: 'Cybersecurity', count: 5, icon: Shield },
  { name: 'Technology', count: 3, icon: Zap },
  { name: 'Compliance', count: 2, icon: Shield }
];

const popularTags = [
  'AI', 'Cloud', 'Security', 'DevOps', 'Machine Learning', 'Data Science', 
  'Cybersecurity', 'Microservices', 'Architecture', 'Innovation'
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, tech news" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Technology insights and industry news from our expert team." />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
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
                Technology Insights
                <span className="block text-blue-400">Stay Ahead of the Curve</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover the latest trends, insights, and best practices in AI, cloud computing, cybersecurity, and technology innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
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
                </div>
              </div>

              {/* Popular Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-600 mr-2">Popular tags:</span>
                {popularTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTag === tag
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTag && (
                  <button
                    onClick={() => setSelectedTag('')}
                    className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
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
                  Featured Articles
                </h2>
                <p className="text-gray-600">Hand-picked articles from our expert team</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
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
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {post.category}
                        </span>
                        <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-gray-600">Stay updated with our latest insights and industry news</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
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
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center space-x-3">
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
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
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
                Subscribe to our newsletter and never miss the latest technology insights and industry updates.
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