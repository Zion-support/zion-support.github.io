import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  ShoppingCart,
  BookOpen,
  Rocket,
  Clock,
  Eye,
  Star,
  Filter
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

interface Category {
  name: string;
  icon: any;
  count: number;
  color: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = [
    { name: 'all', icon: BookOpen, count: 25, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI & Machine Learning', icon: Brain, count: 8, color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud & DevOps', icon: Cloud, count: 6, color: 'from-blue-500 to-indigo-500' },
    { name: 'Cybersecurity', icon: Shield, count: 5, color: 'from-red-500 to-orange-500' },
    { name: 'Digital Transformation', icon: Rocket, count: 4, color: 'from-green-500 to-emerald-500' },
    { name: 'Technology Trends', icon: TrendingUp, count: 2, color: 'from-yellow-500 to-orange-500' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: 2025 and Beyond',
      excerpt: 'Discover how artificial intelligence is reshaping industries and creating new opportunities for business growth and innovation.',
      content: 'Artificial intelligence has evolved from a futuristic concept to a practical business tool that\'s transforming how organizations operate...',
      author: 'Dr. Sarah Chen',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Innovation', 'Technology'],
      image: '/images/blog/ai-business-future.jpg',
      featured: true,
      views: 15420,
      likes: 892
    },
    {
      id: '2',
      title: 'Implementing Zero Trust Security in Modern Organizations',
      excerpt: 'Learn the essential principles and practical steps for implementing zero trust security architecture in your organization.',
      content: 'In today\'s interconnected digital landscape, traditional security models are no longer sufficient...',
      author: 'Marcus Rodriguez',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Zero Trust', 'Cybersecurity', 'Compliance'],
      image: '/images/blog/zero-trust-security.jpg',
      featured: true,
      views: 12850,
      likes: 756
    },
    {
      id: '3',
      title: 'Cloud-Native Architecture: Best Practices for 2025',
      excerpt: 'Explore the latest best practices for building scalable, resilient cloud-native applications and infrastructure.',
      content: 'Cloud-native architecture has become the standard for modern application development...',
      author: 'Emily Watson',
      authorAvatar: '/images/team/emily-watson.jpg',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'DevOps', 'Architecture', 'Scalability'],
      image: '/images/blog/cloud-native-architecture.jpg',
      featured: false,
      views: 9870,
      likes: 543
    },
    {
      id: '4',
      title: 'Digital Transformation: A Comprehensive Guide',
      excerpt: 'Navigate your organization\'s digital transformation journey with our comprehensive guide and proven strategies.',
      content: 'Digital transformation is not just about adopting new technologies...',
      author: 'Kleber Santos',
      authorAvatar: '/images/team/kleber-santos.jpg',
      publishDate: '2025-01-08',
      readTime: '12 min read',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Strategy', 'Innovation', 'Change Management'],
      image: '/images/blog/digital-transformation.jpg',
      featured: false,
      views: 11230,
      likes: 678
    },
    {
      id: '5',
      title: 'Emerging Technology Trends That Will Shape 2025',
      excerpt: 'Stay ahead of the curve with insights into the most promising technology trends and their business implications.',
      content: 'As we move further into 2025, several emerging technologies are gaining momentum...',
      author: 'Dr. Sarah Chen',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2025-01-05',
      readTime: '7 min read',
      category: 'Technology Trends',
      tags: ['Technology Trends', 'Innovation', 'Future', 'Business'],
      image: '/images/blog/emerging-tech-trends.jpg',
      featured: false,
      views: 8760,
      likes: 432
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Insights, analysis, and thought leadership on AI, technology, and digital transformation. Stay informed with our expert perspectives."
        keywords="blog, technology insights, AI, cybersecurity, cloud computing, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, analysis, and thought leadership on the future of technology
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name === 'all' ? 'All Categories' : category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Articles
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-500">Blog Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
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
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
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
      )}

      {/* All Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            All Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-500 text-sm">Blog Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Stay Updated with Our Latest Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Get the latest technology insights, AI trends, and digital transformation strategies delivered to your inbox
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}