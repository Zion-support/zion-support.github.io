
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag, Search, Filter, TrendingUp, Brain, Atom, Shield, Cloud, Rocket, Lightbulb, Globe, Database, Code, Target, Zap, Star, BookOpen, MessageSquare, Heart, Share2 } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', count: 24, icon: Globe },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Quantum Technology', count: 4, icon: Atom },
    { name: 'Cybersecurity', count: 5, icon: Shield },
    { name: 'Cloud & DevOps', count: 3, icon: Cloud },
    { name: 'Digital Transformation', count: 4, icon: Rocket }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Autonomous Business Systems in 2025",
      excerpt: "Discover how autonomous AI systems are revolutionizing business operations and what this means for the future of enterprise technology.",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2024-12-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Autonomous Systems", "Business Intelligence", "Future Tech"],
      featured: true,
      views: 15420,
      likes: 892,
      comments: 156,
      image: "/images/blog/ai-future-2025.jpg",
      icon: Brain
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Breaking the Classical Computing Barrier",
      excerpt: "Exploring the revolutionary potential of quantum neural networks and their applications in solving previously intractable problems.",
      author: "Prof. Michael Rodriguez",
      authorRole: "Quantum Computing Specialist",
      publishDate: "2024-12-12",
      readTime: "12 min read",
      category: "Quantum Technology",
      tags: ["Quantum Computing", "Neural Networks", "AI", "Innovation"],
      featured: true,
      views: 12850,
      likes: 745,
      comments: 98,
      image: "/images/blog/quantum-neural-networks.jpg",
      icon: Atom
    },
    {
      id: 3,
      title: "SOC2 Compliance Automation: A Complete Guide for 2025",
      excerpt: "Learn how to automate your SOC2 compliance process and reduce manual effort while improving accuracy and security.",
      author: "Lisa Thompson",
      authorRole: "Security Compliance Expert",
      publishDate: "2024-12-10",
      readTime: "10 min read",
      category: "Cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      featured: false,
      views: 9870,
      likes: 523,
      comments: 87,
      image: "/images/blog/soc2-compliance-guide.jpg",
      icon: Shield
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Transforming Business Connectivity",
      excerpt: "How 5G technology is enabling new business models and creating opportunities for innovation across industries.",
      author: "David Park",
      authorRole: "Network Infrastructure Lead",
      publishDate: "2024-12-08",
      readTime: "6 min read",
      category: "Digital Transformation",
      tags: ["5G", "Enterprise", "Connectivity", "Innovation"],
      featured: false,
      views: 7560,
      likes: 412,
      comments: 65,
      image: "/images/blog/5g-enterprise-solutions.jpg",
      icon: Cloud
    },
    {
      id: 5,
      title: "AI Content Generation: Revolutionizing Creative Industries",
      excerpt: "The impact of AI-powered content generation on marketing, media, and creative industries worldwide.",
      author: "Emma Wilson",
      authorRole: "Content Strategy Director",
      publishDate: "2024-12-05",
      readTime: "7 min read",
      category: "AI & Machine Learning",
      tags: ["AI Content", "Creative AI", "Marketing", "Media"],
      featured: false,
      views: 11230,
      likes: 678,
      comments: 134,
      image: "/images/blog/ai-content-generation.jpg",
      icon: Lightbulb
    },
    {
      id: 6,
      title: "Blockchain in Enterprise: Beyond Cryptocurrency",
      excerpt: "Exploring real-world enterprise applications of blockchain technology and their business value.",
      author: "Alex Kumar",
      authorRole: "Blockchain Solutions Architect",
      publishDate: "2024-12-03",
      readTime: "9 min read",
      category: "Digital Transformation",
      tags: ["Blockchain", "Enterprise", "Innovation", "Technology"],
      featured: false,
      views: 8930,
      likes: 445,
      comments: 78,
      image: "/images/blog/blockchain-enterprise.jpg",
      icon: Code
    },
    {
      id: 7,
      title: "The Rise of Autonomous DevOps: AI-Powered Development",
      excerpt: "How autonomous DevOps platforms are transforming software development and deployment processes.",
      author: "Rachel Green",
      authorRole: "DevOps Engineering Manager",
      publishDate: "2024-11-30",
      readTime: "11 min read",
      category: "Cloud & DevOps",
      tags: ["DevOps", "AI", "Automation", "Software Development"],
      featured: false,
      views: 10240,
      likes: 567,
      comments: 89,
      image: "/images/blog/autonomous-devops.jpg",
      icon: Cloud
    },
    {
      id: 8,
      title: "IoT Data Analytics: Unlocking Business Intelligence",
      excerpt: "Leveraging IoT data analytics to gain actionable insights and drive business transformation.",
      author: "Mark Johnson",
      authorRole: "IoT Solutions Specialist",
      publishDate: "2024-11-28",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["IoT", "Data Analytics", "Business Intelligence", "Smart Cities"],
      featured: false,
      views: 8760,
      likes: 423,
      comments: 67,
      image: "/images/blog/iot-data-analytics.jpg",
      icon: Database
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & Innovation
              <span className="text-gradient block">Blog</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
              and the latest technology trends shaping the future of business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-cyan text-white border-zion-cyan'
                      : 'bg-zion-slate-dark text-zion-slate-light border-zion-cyan/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center space-x-3 mb-8">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <post.icon className="h-5 w-5 text-zion-cyan" />
                    </div>
                    <span className="text-zion-cyan text-sm font-medium">{post.category}</span>
                    <span className="text-zion-slate-light text-sm">• Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-zion-cyan hover:text-white transition-colors font-medium group-hover:underline flex items-center space-x-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
          <div className="flex items-center space-x-2 text-zion-slate-light">
            <Filter className="h-5 w-5" />
            <span>{filteredPosts.length} articles found</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    <post.icon className="h-4 w-4 text-zion-cyan" />
                  </div>
                  <span className="text-zion-cyan text-sm font-medium">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-zion-cyan hover:text-white transition-colors font-medium text-sm group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 text-center max-w-4xl mx-auto">
          <BookOpen className="h-16 w-16 text-zion-cyan mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-zion-slate-light mb-8 text-lg">
            Get the latest articles, research, and technology insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            />
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30">
              Subscribe
            </button>
          </div>
          <p className="text-zion-slate-light text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

