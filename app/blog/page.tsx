<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { useState } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

<<<<<<< HEAD
<<<<<<< HEAD
  const posts = [
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import ContentPreviewCard from '../components/ContentPreviewCard';
interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
=======
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, User, Clock, Tag, ArrowRight, Calendar, TrendingUp, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  tags: string[];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
}
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const blogPosts: BlogPost[] = useMemo(() => [
      category: "AI & Machine Learning",
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
<<<<<<< HEAD
      title: "The Future of AI in Business: A Comprehensive Guide",
      excerpt: "Explore how artificial intelligence is transforming modern business operations and what it means for your organization.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI & Technology",
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
      readTime: "5 min read",
      image: "/images/blog/ai-business-2024.jpg",
      views: 1250,
      likes: 89,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      content: "Small businesses are increasingly targeted by cybercriminals...",
      author: "Michael Chen",
      date: "2024-01-12",
      title: "5G Technology: Revolutionizing Connectivity",
      excerpt: "Explore how 5G technology is changing the way we connect and do business. From IoT to edge computing, discover the potential of next-generation networks.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      title: "Zero-Trust Security Architecture: A Complete Implementation Guide",
      excerpt: "Learn how to implement zero-trust security principles to protect your organization from modern cyber threats.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "cybersecurity",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 6,
      title: "Cloud Migration Strategies: From On-Premises to Multi-Cloud",
      excerpt: "Discover the best practices for migrating your infrastructure to the cloud while maintaining security and performance.",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      image: "/api/placeholder/600/300",
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Navigate the complexities of digital transformation with our comprehensive guide. Learn how to create a roadmap that delivers real business value.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "transformation",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

<<<<<<< HEAD
  const filteredPosts = posts.filter(post => {
  const featuredPosts = posts.filter(post => post.featured);
        <title>Tech Insights & Innovation Blog | Zion Tech Group</title>
        <meta name="description" content="Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity, cloud computing, technology trends, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
=======
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and decision-making processes.',
      content: 'Full article content...',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI',
      featured: true,
      image: '/images/blog/ai-enterprise.jpg',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Cloud Team',
      date: '2024-01-10',
      category: 'Cloud',
      featured: false,
      image: '/images/blog/cloud-migration.jpg',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of emerging threats with the latest cybersecurity trends and strategies.',
      content: 'Full article content...',
      author: 'Security Team',
      date: '2024-01-05',
      category: 'Security',
      featured: false,
      image: '/images/blog/cybersecurity.jpg',
      readTime: '6 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
=======
const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and driving innovation across industries.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      featured: true,
      tags: ['AI', 'Enterprise', 'Innovation']
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking New Grounds',
      excerpt: 'Understanding the revolutionary potential of quantum computing and its practical applications in modern technology.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Quantum Computing',
      featured: true,
      tags: ['Quantum', 'Computing', 'Technology']
    },
    {
      id: '3',
      title: 'Autonomous Systems: The Next Frontier',
      excerpt: 'How autonomous systems are reshaping industries from transportation to manufacturing.',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Autonomous Systems',
      featured: false,
      tags: ['Autonomous', 'Systems', 'Automation']
    },
    {
      id: '4',
      title: 'Digital Transformation Strategies for 2024',
      excerpt: 'Comprehensive guide to implementing successful digital transformation initiatives in your organization.',
      author: 'James Thompson',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Digital Transformation',
      featured: false,
      tags: ['Digital', 'Transformation', 'Strategy']
    },
    {
      id: '5',
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Protecting your digital assets with AI-powered security solutions and best practices.',
      author: 'Lisa Park',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Cybersecurity',
      featured: false,
      tags: ['Security', 'AI', 'Protection']
    },
    {
      id: '6',
      title: 'Cloud Computing Trends and Predictions',
      excerpt: 'Latest trends in cloud computing and what to expect in the coming years.',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Cloud Computing',
      featured: false,
      tags: ['Cloud', 'Computing', 'Trends']
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Quantum Computing', 'Autonomous Systems', 'Digital Transformation', 'Cybersecurity', 'Cloud Computing'];

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
  const regularPosts = filteredPosts.filter(post => !post.featured);
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

export default function BlogPage() {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
=======
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, autonomous systems, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, autonomous systems, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Tech Insights & Innovation</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "5G Technology",
    "Micro SAAS",
    "Cloud Computing",
    "Digital Transformation"
  ]
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with insights, trends, and expert analysis from our technology experts.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
=======
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tech Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, autonomous systems, and digital transformation.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
            </div>
          </div>
        </div>
      </section>

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-cyan-500/20"
                  }`}
                >
                  {category.name} ({category.count})
        </section>

        {/* Featured Posts */}
        {selectedCategory === "all" && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
=======
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
=======
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Article</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
              </div>
            </div>
          </section>
        )}

<<<<<<< HEAD
<<<<<<< HEAD
        {/* All Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
=======
        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-4xl">📝</div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {regularPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Tech Trends
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered to your inbox. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
=======
        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential cybersecurity measures every small business should implement to protect their data and operations.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cloud Migration: A Complete Guide for Enterprises',
      excerpt: 'Step-by-step guide to successfully migrating your enterprise infrastructure to the cloud.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, cloud computing, business technology, industry news"
        canonical="https://ziontechgroup.com/blog"
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest insights, trends, and best practices in AI, cybersecurity, cloud computing, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm font-medium">Featured Image</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
<<<<<<< HEAD
=======

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
              </article>
            ))}
          </div>

<<<<<<< HEAD
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              Load More Posts
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Blog services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Blog solutions by Zion Tech Group
            </p>
          </div>
        </div>
=======
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and driving innovation.',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successful cloud migration strategies for enterprise organizations.',
      date: '2024-01-10',
      category: 'Cloud',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest cybersecurity trends and how to protect your organization from emerging threats.',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, and technology trends.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
        
        <Footer />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </div>
    </>
<<<<<<< HEAD
  )
}

export default BlogPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
=======
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Subscribe to Our Newsletter
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======

export default BlogPage;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>AI & Technology Blog</h1>
          <p className='text-xl text-gray-300'>
            Latest insights on AI, enterprise automation, and digital
            transformation
          </p>
        </header>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-gray-800 rounded-lg p-8 text-center'>
            <h2 className='text-2xl font-semibold mb-4'>Coming Soon</h2>
            <p className='text-gray-300 mb-6'>
              We&apos;re working on bringing you the latest insights and
              breakthroughs in AI and enterprise technology.
            </p>
            <Link
              to='/'
              className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
