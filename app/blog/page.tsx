'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Tag,
  Eye,
  Heart,
  Share2,
  Search,
  Filter,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Zap,
  Globe,
  Database,
  Code,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Target,
  Rocket,
  Award,
  Settings,
  Monitor,
  Users,
  Star
} from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-revolution-2024',
      title: 'The AI Revolution: How Artificial Intelligence is Transforming Business in 2024',
      excerpt: 'Explore the latest trends in AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Machine Learning', 'Business Transformation', 'Innovation'],
      image: '/blog/ai-revolution-2024.jpg',
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration: Best Practices and Common Pitfalls',
      excerpt: 'Learn the essential steps for successful cloud migration and avoid common mistakes that can derail your digital transformation.',
      author: 'Michael Rodriguez',
      authorRole: 'Cloud Solutions Architect',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/blog/cloud-migration-guide.jpg',
      views: 980,
      likes: 67,
      featured: true
    },
    {
      id: 'micro-saas-trends',
      title: 'Micro SAAS Trends 2024: The Future of Specialized Software Solutions',
      excerpt: 'Discover the latest trends in micro SAAS development and how small, focused applications are changing the software landscape.',
      author: 'Emily Johnson',
      authorRole: 'Product Manager',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      category: 'Micro SAAS',
      tags: ['Micro SAAS', 'SaaS', 'Product Development', 'Startups'],
      image: '/blog/micro-saas-trends.jpg',
      views: 756,
      likes: 45,
      featured: false
    },
    {
      id: 'cybersecurity-2024',
      title: 'Cybersecurity in 2024: Emerging Threats and Defense Strategies',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about the most effective defense strategies for modern businesses.',
      author: 'David Kim',
      authorRole: 'Chief Security Officer',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'Threat Detection', 'Security', 'Compliance'],
      image: '/blog/cybersecurity-2024.jpg',
      views: 1120,
      likes: 78,
      featured: false
    },
    {
      id: 'data-analytics-guide',
      title: 'Data Analytics for Business: Turning Data into Actionable Insights',
      excerpt: 'Learn how to leverage data analytics to make better business decisions and drive growth through data-driven strategies.',
      author: 'Lisa Wang',
      authorRole: 'Data Science Lead',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Data Science', 'Insights'],
      image: '/blog/data-analytics-guide.jpg',
      views: 890,
      likes: 56,
      featured: false
    },
    {
      id: '5g-implementation',
      title: '5G Implementation: Opportunities and Challenges for Businesses',
      excerpt: 'Explore how 5G technology is creating new opportunities for businesses and the challenges that come with implementation.',
      author: 'James Wilson',
      authorRole: '5G Solutions Engineer',
      publishDate: '2024-01-03',
      readTime: '7 min read',
      category: '5G Technology',
      tags: ['5G', 'IoT', 'Connectivity', 'Mobile Technology'],
      image: '/blog/5g-implementation.jpg',
      views: 634,
      likes: 42,
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: 24, icon: <FileText className="w-4 h-4" /> },
    { name: 'Artificial Intelligence', count: 8, icon: <Brain className="w-4 h-4" /> },
    { name: 'Cloud Computing', count: 6, icon: <Cloud className="w-4 h-4" /> },
    { name: 'Micro SAAS', count: 4, icon: <Zap className="w-4 h-4" /> },
    { name: 'Cybersecurity', count: 3, icon: <Shield className="w-4 h-4" /> },
    { name: 'Data Analytics', count: 2, icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Technology', count: 1, icon: <Globe className="w-4 h-4" /> }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI, Cloud & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, micro SAAS, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, ai insights, cloud computing, micro saas, cybersecurity, technology trends, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, cloud computing, and technology trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:image" content="https://ziontechgroup.com/og-blog.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group" />
        <meta name="twitter:description" content="Stay updated with the latest insights on AI, cloud computing, and technology trends." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-blog.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Technology Blog
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Stay updated with the latest insights on AI, cloud computing, micro SAAS, and technology trends from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative max-w-md mx-auto w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{featuredPost.likes}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Latest Articles</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Discover insights, tutorials, and industry trends from our expert team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularPosts.map((post, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{post.likes}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Stay Updated</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Subscribe to our newsletter and never miss the latest insights on AI, cloud computing, and technology trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}