'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, ArrowRight, Tag, Clock, Eye, Heart, Share2, Filter, TrendingUp, Star, BookOpen, MessageCircle, ThumbsUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and discover how companies are leveraging artificial intelligence to drive innovation and growth.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights from data analysis. In 2024, we\'re seeing unprecedented adoption of AI technologies across industries...',
      author: 'Dr. Sarah Johnson',
      authorRole: 'AI Research Director',
      authorImage: '/images/authors/sarah-johnson.jpg',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Technology', 'Innovation'],
      image: '/images/blog/ai-business-future.jpg',
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small and Medium Businesses',
      excerpt: 'Learn essential cybersecurity strategies to protect your business from evolving threats and ensure data security in the digital age.',
      content: 'Small and medium businesses are increasingly becoming targets for cybercriminals. With limited resources and expertise, SMBs need practical, cost-effective security solutions...',
      author: 'Michael Chen',
      authorRole: 'Cybersecurity Expert',
      authorImage: '/images/authors/michael-chen.jpg',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'SMB', 'Best Practices', 'Data Protection'],
      image: '/images/blog/cybersecurity-smb.jpg',
      views: 980,
      likes: 67,
      comments: 18,
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration: A Complete Guide for Enterprise Success',
      excerpt: 'Navigate the complexities of cloud migration with our comprehensive guide covering strategy, planning, and execution best practices.',
      content: 'Cloud migration is no longer optional for modern enterprises. However, successful migration requires careful planning, strategy, and execution to avoid common pitfalls...',
      author: 'Emily Rodriguez',
      authorRole: 'Cloud Solutions Architect',
      authorImage: '/images/authors/emily-rodriguez.jpg',
      publishDate: '2024-01-10',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Enterprise', 'Strategy'],
      image: '/images/blog/cloud-migration-guide.jpg',
      views: 1450,
      likes: 112,
      comments: 31,
      featured: true
    },
    {
      id: 4,
      title: 'The Rise of Micro SaaS: Building Profitable Small-Scale Software',
      excerpt: 'Discover how micro SaaS businesses are disrupting traditional software models and learn strategies for building your own profitable micro SaaS.',
      content: 'Micro SaaS represents a new paradigm in software development, focusing on solving specific problems for niche markets with minimal overhead...',
      author: 'David Kim',
      authorRole: 'SaaS Product Manager',
      authorImage: '/images/authors/david-kim.jpg',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      category: 'SaaS',
      tags: ['Micro SaaS', 'Startup', 'Software', 'Business Model'],
      image: '/images/blog/micro-saas-rise.jpg',
      views: 890,
      likes: 54,
      comments: 15,
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Learn how to transform raw data into actionable insights that drive business decisions and competitive advantage.',
      content: 'In today\'s data-driven world, the ability to extract meaningful insights from information is crucial for business success. Data analytics provides the tools and techniques...',
      author: 'Lisa Wang',
      authorRole: 'Data Science Lead',
      authorImage: '/images/authors/lisa-wang.jpg',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      tags: ['Data', 'Analytics', 'Business Intelligence', 'Insights'],
      image: '/images/blog/data-analytics-intelligence.jpg',
      views: 1100,
      likes: 78,
      comments: 22,
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Culture: Building High-Performance Development Teams',
      excerpt: 'Explore how DevOps practices can transform your development culture and accelerate software delivery while maintaining quality.',
      content: 'DevOps is more than just tools and processes—it\'s a cultural shift that brings development and operations teams together to deliver software faster and more reliably...',
      author: 'Alex Thompson',
      authorRole: 'DevOps Engineer',
      authorImage: '/images/authors/alex-thompson.jpg',
      publishDate: '2024-01-03',
      readTime: '7 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Culture', 'Development', 'Team Building'],
      image: '/images/blog/devops-culture.jpg',
      views: 750,
      likes: 45,
      comments: 12,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', count: blogPosts.filter(post => post.category === 'AI & Machine Learning').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: blogPosts.filter(post => post.category === 'Cybersecurity').length },
    { id: 'Cloud Computing', name: 'Cloud Computing', count: blogPosts.filter(post => post.category === 'Cloud Computing').length },
    { id: 'SaaS', name: 'SaaS', count: blogPosts.filter(post => post.category === 'SaaS').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: blogPosts.filter(post => post.category === 'Data Analytics').length },
    { id: 'DevOps', name: 'DevOps', count: blogPosts.filter(post => post.category === 'DevOps').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends. Expert articles, case studies, and industry analysis from Zion Tech Group." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, business intelligence, cloud computing, cybersecurity, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Tech <span className="text-cyan-400">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay ahead with expert insights on AI, IT solutions, and emerging technologies 
                that are shaping the future of business.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {searchQuery === '' && selectedCategory === 'all' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Star className="w-6 h-6 text-cyan-400 mr-2" />
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300">
                      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            {post.category}
                          </span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Featured
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                        <p className="text-gray-300 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">
                {searchQuery || selectedCategory !== 'all' ? 'Search Results' : 'All Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300">
                    <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest articles, insights, and industry updates 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage;