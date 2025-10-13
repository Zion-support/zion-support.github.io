<<<<<<< HEAD
import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const posts = [
=======
'use client';
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
}
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const blogPosts: BlogPost[] = useMemo(() => [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024 and how companies can leverage these technologies for growth.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/images/blog/ai-business-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data and operations.",
      content: "Small businesses are increasingly targeted by cybercriminals...",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-small-business.jpg",
      slug: "cybersecurity-best-practices-small-businesses"
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Learn how to successfully migrate your business to the cloud with our comprehensive guide.",
      content: "Cloud migration can seem daunting, but with proper planning...",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "cloud",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Building Scalable Microservices with Modern DevOps Practices",
      excerpt: "Discover how to architect and deploy microservices that can scale with your business needs.",
      content: "Microservices architecture has become the standard for modern applications...",
      author: "David Kim",
      date: "2024-01-08",
      category: "development",
      readTime: "12 min read",
      image: "/images/blog/microservices-devops.jpg",
      featured: false
    },
    {
      id: 5,
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
      featured: false
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Tech Insights & Innovation Blog | Zion Tech Group</title>
        <meta name="description" content="Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity, cloud computing, technology trends, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Tech Insights & Innovation</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                />
              </div>
=======
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating new business opportunities for forward-thinking companies.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      category: "5G Technology",
      readTime: "6 min read",
      image: "/images/blog/5g-transforming-industries.jpg",
      slug: "5g-technology-transforming-industries-opportunities"
    },
    {
      id: 4,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Explore how micro SAAS solutions are changing the way businesses operate and why they're becoming the preferred choice for many organizations.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      category: "Micro SAAS",
      readTime: "4 min read",
      image: "/images/blog/micro-saas-future.jpg",
      slug: "micro-saas-solutions-future-business-software"
    },
    {
      id: 5,
      title: "Cloud Migration: A Step-by-Step Guide for Enterprises",
      excerpt: "A comprehensive guide to cloud migration, covering planning, execution, and best practices for successful enterprise cloud adoption.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration-guide.jpg",
      slug: "cloud-migration-step-by-step-guide-enterprises"
    },
    {
      id: 6,
      title: "Digital Transformation: Key Strategies for Modern Businesses",
      excerpt: "Learn the essential strategies for successful digital transformation and how to navigate the challenges of modernizing your business processes.",
      author: "Zion Tech Group",
      date: "2023-12-25",
      category: "Digital Transformation",
      readTime: "6 min read",
      image: "/images/blog/digital-transformation-strategies.jpg",
      slug: "digital-transformation-key-strategies-modern-businesses"
    }
  ]

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "5G Technology",
    "Micro SAAS",
    "Cloud Computing",
    "Digital Transformation"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity news, 5G technology, micro SAAS, cloud computing, digital transformation"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
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
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
            </div>
          </div>
        </div>
      </section>

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
