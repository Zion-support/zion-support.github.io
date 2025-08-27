<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Database,
  Server,
  Cpu,
  Lock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, count: 3 },
    { id: 'development', name: 'Development', icon: Code, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Breaking New Grounds in 2025',
      excerpt: 'Explore the latest breakthroughs in AI consciousness research and how Zion Tech Group is pioneering new approaches to understanding artificial intelligence.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI Consciousness', 'Research', 'Innovation', '2025'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Protecting Enterprises in the Digital Age',
      excerpt: 'Learn about implementing zero-trust security principles to protect your organization from modern cyber threats and data breaches.',
      author: 'Emily Watson',
      authorRole: 'Chief Security Officer',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Zero-Trust', 'Security', 'Enterprise', 'Cybersecurity'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1923,
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: 'Quantum Computing Revolution: What Businesses Need to Know',
      excerpt: 'Discover how quantum computing is transforming industries and what steps your business should take to prepare for the quantum future.',
      author: 'Dr. James Kim',
      authorRole: 'Chief Research Officer',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'emerging-tech',
      tags: ['Quantum Computing', 'Business Strategy', 'Innovation', 'Technology'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1654,
      likes: 72,
      comments: 18
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale automatically and handle modern workloads.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud-Native', 'Development', 'Scalability', 'Microservices'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1432,
      likes: 65,
      comments: 12
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence: Transforming Data into Actionable Insights',
      excerpt: 'See how artificial intelligence is revolutionizing business intelligence and helping companies make data-driven decisions faster than ever.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'ai',
      tags: ['Business Intelligence', 'AI', 'Analytics', 'Data Science'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1876,
      likes: 94,
      comments: 21
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Accelerating Software Delivery in 2025',
      excerpt: 'Learn the latest DevOps practices and tools that are helping development teams deliver software faster and more reliably.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'cloud',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Software Delivery'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1234,
      likes: 58,
      comments: 9
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights, updates, and thought leadership from our team of technology experts. 
              Stay ahead of the curve with the latest in AI, cybersecurity, and emerging tech.
            </motion.p>

            {/* Search and Filter */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-zion-cyan" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-zion-slate-dark/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Featured</span> Article
              </h2>
            </motion.div>

            <motion.div
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                      <p className="text-zion-slate-light">Featured Image</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="text-zion-cyan text-sm font-medium">{featuredPost.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover insights and updates from our technology experts
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-zion-cyan mx-auto mb-2" />
                        <p className="text-zion-slate-light text-sm">Blog Image</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-semibold rounded-full">
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-zion-slate-light text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-xs text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-xs text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300 font-medium text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get the latest insights, updates, and exclusive content delivered to your inbox
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-zion-slate-light text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Search, Calendar, Clock, User } from 'lucide-react';

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const CATEGORIES = [
        "All Categories",
        "AI & Machine Learning",
        "Cybersecurity",
        "Cloud Computing",
        "Digital Transformation",
        "Tech Trends",
        "Industry Insights"
    ];

    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
            excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
            category: "AI & Machine Learning",
            author: "Dr. Sarah Chen",
            publishedDate: "Dec 15, 2024",
            readTime: "8 min read",
            slug: "future-ai-enterprise-2024",
            featuredImage: "/images/blog/ai-enterprise.jpg",
            isFeatured: true
        },
        {
            id: 2,
            title: "Zero Trust Security: Building a Modern Cybersecurity Framework",
            excerpt: "Learn about implementing zero trust security principles to protect your organization from evolving threats.",
            category: "Cybersecurity",
            author: "Mike Rodriguez",
            publishedDate: "Dec 12, 2024",
            readTime: "6 min read",
            slug: "zero-trust-security-framework",
            featuredImage: "/images/blog/zero-trust.jpg",
            isFeatured: false
        },
        {
            id: 3,
            title: "Cloud Migration Strategies: A Comprehensive Guide for Enterprises",
            excerpt: "Navigate the complexities of cloud migration with proven strategies and best practices.",
            category: "Cloud Computing",
            author: "Lisa Thompson",
            publishedDate: "Dec 10, 2024",
            readTime: "10 min read",
            slug: "cloud-migration-strategies",
            featuredImage: "/images/blog/cloud-migration.jpg",
            isFeatured: false
        },
        {
            id: 4,
            title: "Digital Transformation: Key Success Factors for Modern Businesses",
            excerpt: "Explore the essential elements that drive successful digital transformation initiatives.",
            category: "Digital Transformation",
            author: "David Kim",
            publishedDate: "Dec 8, 2024",
            readTime: "7 min read",
            slug: "digital-transformation-success-factors",
            featuredImage: "/images/blog/digital-transformation.jpg",
            isFeatured: false
        },
        {
            id: 5,
            title: "Emerging Tech Trends That Will Shape 2025",
            excerpt: "Stay ahead of the curve with insights into the most promising technology trends for the coming year.",
            category: "Tech Trends",
            author: "Alex Johnson",
            publishedDate: "Dec 5, 2024",
            readTime: "9 min read",
            slug: "emerging-tech-trends-2025",
            featuredImage: "/images/blog/tech-trends.jpg",
            isFeatured: false
        },
        {
            id: 6,
            title: "Sustainable Technology: Green IT Solutions for the Future",
            excerpt: "Discover how organizations are implementing eco-friendly technology solutions.",
            category: "Industry Insights",
            author: "Emma Wilson",
            publishedDate: "Dec 3, 2024",
            readTime: "5 min read",
            slug: "sustainable-technology-green-it",
            featuredImage: "/images/blog/sustainable-tech.jpg",
            isFeatured: false
        }
    ];

    // Filter blog posts based on search and category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Get featured posts
    const featuredPosts = blogPosts.filter(post => post.isFeatured);

    return (
        <>
            <SEO 
                title="Blog - AI & Tech Insights" 
                description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." 
                keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT" 
                canonical="https://ziontechgroup.com/blog" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            AI & Tech
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Insights</span>
                        </h1>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Expert perspectives on artificial intelligence, tech innovation, and digital transformation
                        </p>
                    </div>

                    {/* Featured Post Section */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="aspect-video overflow-hidden rounded-lg bg-zion-blue-dark">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Search className="w-8 h-8 text-zion-cyan" />
                                            </div>
                                            <p className="text-zion-slate-light">Featured Image</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                                        {featuredPosts[0].category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {featuredPosts[0].title}
                                    </h3>
                                    <p className="text-zion-slate-light mb-6">
                                        {featuredPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3">
                                            <User className="w-5 h-5 text-zion-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{featuredPosts[0].author}</p>
                                            <div className="flex items-center text-sm text-zion-slate-light">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {featuredPosts[0].publishedDate}
                                                <span className="mx-2">•</span>
                                                <Clock className="w-4 h-4 mr-1" />
                                                {featuredPosts[0].readTime}
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit">
                                        <Link to={`/blog/${featuredPosts[0].slug}`}>
                                            Read Article
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Search and Filter */}
                    <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                                />
                            </div>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                                    {CATEGORIES.map((category) => (
                                        <SelectItem key={category} value={category} className="text-white">
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <Card key={post.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300">
                                    <div className="aspect-[16/9] relative overflow-hidden bg-zion-blue-dark">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <Search className="w-6 h-6 text-zion-cyan" />
                                                </div>
                                                <p className="text-zion-slate-light text-sm">Blog Image</p>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center text-xs text-zion-slate-light">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {post.publishedDate}
                                                <span className="mx-1">•</span>
                                                <Clock className="w-3 h-3 mr-1" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                                        <p className="text-zion-slate-light mb-4 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-2">
                                                <User className="w-4 h-4 text-zion-cyan" />
                                            </div>
                                            <span className="text-sm text-white">{post.author}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Button variant="link" className="text-zion-cyan p-0 hover:text-zion-purple" asChild>
                                            <Link to={`/blog/${post.slug}`}>
                                                Read More →
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                            <p className="text-zion-slate-light mb-6">
                                Try adjusting your search or filter criteria
                            </p>
                            <Button 
                                variant="outline" 
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All Categories");
                                }}
                                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
