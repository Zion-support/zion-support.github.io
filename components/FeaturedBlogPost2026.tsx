"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  Star
  TrendingUp
  Users
  Zap
  Shield
  Globe,
  Brain,
  Database,
  Cloud,
  Lock,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  Settings,
  Code,
  Layers,
  Network,
  Bot,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Share2,
  Heart,
  Bookmark,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Plus,
  Edit,
  Trash2,
  Copy,
  Save,
  Upload,
  RefreshCw,
  RotateCcw,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Menu,
  XCircle,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const FeaturedBlogPost2026 = () => {
  const [currentPostsetCurrentPost] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPost((prev) => (prev + 1) % 3);
    }5000);
    return () => clearInterval(interval);
  }[]);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: 2026 Predictions and Breakthrough Technologies',
      excerpt: 'Explore the revolutionary AI technologies that will reshape industries in 2026from quantum neural networks to synthetic intelligence platforms.',
      content: 'Artificial Intelligence is evolving at an unprecedented paceand 2026 promises to be a landmark year for breakthrough technologies. From quantum-enhanced machine learning to synthetic intelligence platformswe\'re witnessing the dawn of a new era in computing...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Scientist',
      authorImage: '/api/placeholder/60/60',
      publishDate: '2026-01-15',
      readTime: '8 min read',
      category: 'AI Research',
      tags: [', 'AI', 'Machine 'Learning', 'Quantum 'Computing', 'Future Tech'],
      image: '/api/placeholder/800/400',
      views: 12500,
      likes: 890,
      comments: 156,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Building Scalable AI Infrastructure: A Complete Guide for 2026',
      excerpt: 'Learn how to design and implement robust AI infrastructure that can handle enterprise-scale workloads and future growth.',
      content: 'Building scalable AI infrastructure requires careful planning and consideration of multiple factors. In this comprehensive guidewe\'ll explore the key componentsbest practicesand emerging technologies that will shape AI infrastructure in 2026...',
      author: 'Michael Rodriguez',
      authorRole: 'Senior Cloud Architect',
      authorImage: '/api/placeholder/60/60',
      publishDate: '2026-01-12',
      readTime: '12 min read',
      category: 'Infrastructure',
      tags: ['Cloud 'Computing', 'AI 'Infrastructure', 'Scalability'DevOps'],
      image: '/api/placeholder/800/400',
      views: 8900,
      likes: 567,
      comments: 89,
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'Quantum Computing Meets AI: The Next Frontier in Technology',
      excerpt: 'Discover how quantum computing is revolutionizing artificial intelligence and what this means for the future of technology.',
      content: 'The intersection of quantum computing and artificial intelligence represents one of the most exciting frontiers in technology today. As quantum computers become more accessiblewe\'re seeing unprecedented opportunities for AI advancement...',
      author: 'Dr. Alex Thompson',
      authorRole: 'Quantum Computing Researcher',
      authorImage: '/api/placeholder/60/60',
      publishDate: '2026-01-10',
      readTime: '10 min read',
      category: 'Quantum Computing',
      tags: ['Quantum 'Computing', 'AI', 'Research', 'Innovation'],
      image: '/api/placeholder/800/400',
      views: 15600,
      likes: 1200,
      comments: 234,
      featured: true,
      trending: true
    }
  ];

  const categories = [
    { name: 'AI 'Research', 'count: 24color: 'from-blue-600 to-purple-600' },
    { name: ''Infrastructure', 'count: 18color: 'from-green-600 to-teal-600' },
    { name: 'Quantum 'Computing', 'count: 12color: 'from-orange-600 to-red-600' },
    { name: 'Machine 'Learning', 'count: 31color: 'from-purple-600 to-pink-600' },
    { name: ''Automation', 'count: 15color: 'from-cyan-600 to-blue-600' },
    { name: 'Cloud 'Computing', 'count: 22color: 'from-indigo-600 to-purple-600' }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US'{ 
      year: 'numeric'
      month: 'long'
      day: 'numeric' 
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Featured Blog Posts 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Insights &
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Trends
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert analysisbreakthrough researchand cutting-edge insights into the world of AIquantum computingand emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={blogPosts[currentPost].image}
                  alt={blogPosts[currentPost].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>

                {/* Trending Badge */}
                {blogPosts[currentPost].trending && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-8">
                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {blogPosts[currentPost].category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[currentPost].title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {blogPosts[currentPost].excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={blogPosts[currentPost].authorImage}
                    alt={blogPosts[currentPost].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {blogPosts[currentPost].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {blogPosts[currentPost].authorRole}
                    </div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <span>{formatDate(blogPosts[currentPost].publishDate)}</span>
                    <span>•</span>
                    <span>{blogPosts[currentPost].readTime}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {blogPosts[currentPost].views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {blogPosts[currentPost].likes}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {blogPosts[currentPost].comments}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[currentPost].tags.map((tagindex) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((categoryindex) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Popular Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(03).map((postindex) => (
                  <div key={post.id} className="flex space-x-4 group cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <span>{formatDate(post.publishDate)}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Get the latest insights and technology trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center mx-auto">
            View All Blog Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost2026;