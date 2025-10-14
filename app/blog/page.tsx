import React, { useState } from "react";""
import { Helmet } from "react-helmet-async";"
import { Link } from "react-router-dom";"
import { Calendar, User, ArrowRight, Tag, Search, Clock, BookOpen, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");"
  const [selectedCategory, setSelectedCategory] = useState("all");"

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",""
      excerpt: "Explore the latest AI trends that are reshaping the business landscape and discover what to expect in 2024.",""
      content: "Artificial Intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights into customer behavior. In 2024, we're seeing unprecedented adoption of AI technologies across industries...",""
      author: "Dr. Sarah Chen",""
      authorRole: "AI Research Director",""
      publishDate: "2024-01-15",""
      readTime: "8 min read",""
      category: "AI & Technology",""
      tags: ["AI", "Business", "Technology", "Future"],""
      image: "/images/blog/ai-business-future.jpg",""
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: The New Era of Business Software",""
      excerpt: "Discover how micro SAAS solutions are changing the way businesses approach software and automation.",""
      content: "The software industry is experiencing a paradigm shift with the rise of micro SAAS solutions. These focused, specialized tools are replacing monolithic software suites...",""
      author: "Michael Rodriguez",""
      authorRole: "Product Manager",""
      publishDate: "2024-01-12",""
      readTime: "6 min read",""
      category: "Business",""
      tags: ["SAAS", "Business", "Software", "Automation"],""
      image: "/images/blog/micro-saas-solutions.jpg",""
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",""
      excerpt: "Essential cybersecurity strategies to protect your business in an increasingly digital world.",""
      content: "With cyber threats becoming more sophisticated, businesses must adopt comprehensive security strategies. Here are the essential practices every organization should implement...",""
      author: "Alex Thompson",""
      authorRole: "Security Expert",""
      publishDate: "2024-01-10",""
      readTime: "10 min read",""
      category: "Security",""
      tags: ["Cybersecurity", "Security", "Business", "Protection"],""
      image: "/images/blog/cybersecurity-best-practices.jpg",""
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",""
      excerpt: "How 5G technology is revolutionizing industries and creating unprecedented opportunities for innovation.",""
      content: "5G technology represents more than just faster internet speeds. It's a foundational technology that enables new applications and business models...",""
      author: "Dr. Lisa Wang",""
      authorRole: "5G Technology Specialist",""
      publishDate: "2024-01-08",""
      readTime: "7 min read",""
      category: "Technology",""
      tags: ["5G", "Technology", "Innovation", "Connectivity"],""
      image: "/images/blog/5g-technology.jpg",""
      featured: false
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Business Intelligence",""
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",""
      content: "In today's data-driven world, the ability to analyze and interpret data is crucial for business success. This comprehensive guide covers everything you need to know...",""
      author: "David Kim",""
      authorRole: "Data Analytics Lead",""
      publishDate: "2024-01-05",""
      readTime: "9 min read",""
      category: "Analytics",""
      tags: ["Data Analytics", "Business Intelligence", "Data", "Growth"],""
      image: "/images/blog/data-analytics.jpg",""
      featured: false
    },
    {
      id: 6,
      title: "Cloud Migration: A Step-by-Step Guide for Businesses",""
      excerpt: "Everything you need to know about migrating your business to the cloud safely and efficiently.",""
      content: "Cloud migration is a critical decision that can transform your business operations. This guide provides a comprehensive roadmap for successful cloud adoption...",""
      author: "Jennifer Martinez",""
      authorRole: "Cloud Solutions Architect",""
      publishDate: "2024-01-03",""
      readTime: "12 min read",""
      category: "Cloud",""
      tags: ["Cloud Migration", "Cloud", "Business", "Technology"],""
      image: "/images/blog/cloud-migration.jpg",""
      featured: false
    }
  ];

  const categories = ["all", "AI & Technology", "Business", "Security", "Technology", "Analytics", "Cloud"];""

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;""
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Insights on AI, Technology & Business"""
        description="Stay updated with the latest insights on AI, technology, business solutions, and industry trends from Zion Tech Group's expert team."""
        keywords="AI blog, technology insights, business solutions, cybersecurity, cloud computing, data analytics, 5G technology"""
        canonical="https://ziontechgroup.com/blog"""
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto text-center">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
            Stay updated with the latest insights on AI, technology, business solutions, 
            and industry trends from our expert team.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="flex flex-col md:flex-row gap-4 mb-8">""
            <div className="relative flex-1">""
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />""
              <input
                type="text"""
                placeholder="Search articles..."""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"""
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"""
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800">""
                  {category === "all" ? "All Categories" : category}""
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">""
              <div className="flex flex-col lg:flex-row gap-8">""
                <div className="lg:w-1/3">""
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">""
                    <BookOpen className="w-16 h-16 text-white" />""
                  </div>
                </div>
                <div className="lg:w-2/3">""
                  <div className="flex items-center space-x-4 mb-4">""
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">""
                      Featured
                    </span>
                    <span className="text-cyan-400 text-sm">{featuredPost.category}</span>""
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>""
                  <p className=text-gray-300 mb-6>{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 mb-6">""
                    <div className="flex items-center space-x-2">""
                      <User className="w-4 h-4 text-gray-400" />""
                      <span className="text-gray-400 text-sm">{featuredPost.author}</span>""
                    </div>
                    <div className="flex items-center space-x-2">""
                      <Calendar className="w-4 h-4 text-gray-400" />""
                      <span className="text-gray-400 text-sm">{featuredPost.publishDate}</span>""
                    </div>
                    <div className="flex items-center space-x-2">""
                      <Clock className="w-4 h-4 text-gray-400" />""
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>""
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">""
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">""
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"""
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />""
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">""
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">""
                  <BookOpen className="w-12 h-12 text-white" />""
                </div>
                <div className="flex items-center space-x-4 mb-3">""
                  <span className="text-cyan-400 text-sm">{post.category}</span>""
                  <span className="text-gray-400 text-sm">{post.publishDate}</span>""
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>""
                <p className=text-gray-300 mb-4>{post.excerpt}</p>
                <div className="flex items-center space-x-4 mb-4">""
                  <div className="flex items-center space-x-2">""
                    <User className="w-4 h-4 text-gray-400" />""
                    <span className="text-gray-400 text-sm">{post.author}</span>""
                  </div>
                  <div className="flex items-center space-x-2">""
                    <Clock className="w-4 h-4 text-gray-400" />""
                    <span className="text-gray-400 text-sm">{post.readTime}</span>""
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">""
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">""
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"""
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />""
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-3xl font-bold text-white mb-6">""
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">""
            Subscribe to our newsletter and never miss the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""
            <input
              type="email"""
              placeholder="Enter your email address"""
              className="flex-1 max-w-md px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"""
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">""
              <span>Subscribe</span>
              <Zap className="w-4 h-4" />""
import { Right, User } from 'lucide-react";""
import React from 'react';
import { Helmet } from 'react-helmet-async';

    }
  ];
const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    '5G Technology',
    'Micro SaaS',
    'Data Analytics'
  ];
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet>

      <div className="container mx-auto px-4 py-16">""
        <div className="text-center mb-16">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">""
            Stay informed with the latest insights, trends, and best practices in technology, 
            AI, and digital transformation from our expert team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">""
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">""
              <div className="h-48 bg-gray-700 flex items-center justify-center">""
                <span className="text-gray-400">Blog Image</span>""
              </div>
              
              <div className="p-6">""
                <div className="flex items-center mb-3">""
                  <Tag className="w-4 h-4 text-blue-400 mr-2" />""
                  <span className="text-sm text-blue-400">{post.category}</span>""
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">""
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">""
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">""
                  <div className="flex items-center">""
                    <User className="w-4 h-4 mr-1" />""
                    {post.author}
                  </div>
                  <div className="flex items-center">""
                    <Clock className="w-4 h-4 mr-1" />""
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">""
                  <div className="flex items-center text-sm text-gray-400">""
                    <Calendar className="w-4 h-4 mr-1" />""
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="flex items-center text-blue-400 hover:text-blue-300 font-medium"""
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />""
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">""
          <h2 className="text-2xl font-bold text-white mb-4">""
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-gray-300 mb-6">""
            Subscribe to our newsletter and never miss an update on the latest technology trends and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">""
            <input
              type="email"""
              placeholder="Enter your email"""
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"""
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">""
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

