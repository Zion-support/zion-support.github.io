'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight, Clock, User, Tag, Search, Filter, Star, Download, Share2, Bookmark, Eye, MessageCircle, ThumbsUp, ExternalLink } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.',
      category: 'AI Fundamentals',
      difficulty: 'Beginner',
      duration: '45 min read',
      author: 'Dr. Sarah Chen',
      date: 'Dec 8, 2024',
      views: 1250,
      likes: 89,
      tags: ['AI Basics', 'Machine Learning', 'Business AI'],
      featured: true,
      content: 'This comprehensive guide covers everything you need to know about AI, from basic concepts to practical implementation strategies.'
    },
    {
      id: 2,
      title: 'Enterprise AI Implementation: Best Practices and Strategies',
      description: 'A detailed guide for implementing AI solutions in large organizations with real-world case studies.',
      category: 'Enterprise AI',
      difficulty: 'Advanced',
      duration: '60 min read',
      author: 'Kleber Santos',
      date: 'Dec 6, 2024',
      views: 890,
      likes: 67,
      tags: ['Enterprise AI', 'Implementation', 'Strategy'],
      featured: true,
      content: 'Learn how to successfully implement AI solutions in enterprise environments with proven strategies and best practices.'
    },
    {
      id: 3,
      title: 'Machine Learning Model Deployment: From Development to Production',
      description: 'Step-by-step guide to deploying machine learning models in production environments.',
      category: 'ML Engineering',
      difficulty: 'Intermediate',
      duration: '35 min read',
      author: 'Michael Rodriguez',
      date: 'Dec 4, 2024',
      views: 720,
      likes: 45,
      tags: ['MLOps', 'Deployment', 'Production'],
      featured: false,
      content: 'Comprehensive guide covering the entire ML deployment pipeline from model training to production monitoring.'
    },
    {
      id: 4,
      title: 'AI Ethics and Responsible AI: A Practical Framework',
      description: 'Understanding AI ethics and implementing responsible AI practices in your organization.',
      category: 'AI Ethics',
      difficulty: 'Intermediate',
      duration: '40 min read',
      author: 'Dr. Emily Watson',
      date: 'Dec 2, 2024',
      views: 650,
      likes: 52,
      tags: ['AI Ethics', 'Responsible AI', 'Compliance'],
      featured: false,
      content: 'Essential guide to understanding and implementing ethical AI practices in your organization.'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure for AI: AWS, Azure, and GCP Comparison',
      description: 'Compare cloud platforms for AI workloads and choose the best option for your needs.',
      category: 'Cloud AI',
      difficulty: 'Intermediate',
      duration: '50 min read',
      author: 'James Kim',
      date: 'Nov 30, 2024',
      views: 580,
      likes: 38,
      tags: ['Cloud Computing', 'AWS', 'Azure', 'GCP'],
      featured: false,
      content: 'Detailed comparison of cloud platforms for AI workloads with practical recommendations.'
    },
    {
      id: 6,
      title: 'AI-Powered Customer Service: Implementation Guide',
      description: 'How to implement AI-powered customer service solutions to improve customer experience.',
      category: 'Customer Service AI',
      difficulty: 'Beginner',
      duration: '30 min read',
      author: 'Lisa Thompson',
      date: 'Nov 28, 2024',
      views: 420,
      likes: 29,
      tags: ['Customer Service', 'Chatbots', 'AI Automation'],
      featured: false,
      content: 'Practical guide to implementing AI-powered customer service solutions in your business.'
    },
    {
      id: 7,
      title: 'Data Privacy and AI: GDPR Compliance for AI Systems',
      description: 'Ensure your AI systems comply with data privacy regulations like GDPR.',
      category: 'AI Compliance',
      difficulty: 'Advanced',
      duration: '55 min read',
      author: 'Dr. Sarah Chen',
      date: 'Nov 25, 2024',
      views: 380,
      likes: 41,
      tags: ['GDPR', 'Privacy', 'Compliance', 'AI'],
      featured: false,
      content: 'Comprehensive guide to ensuring AI systems comply with data privacy regulations.'
    },
    {
      id: 8,
      title: 'AI ROI Measurement: How to Calculate and Maximize AI Value',
      description: 'Learn how to measure and maximize the return on investment for AI initiatives.',
      category: 'AI Business',
      difficulty: 'Intermediate',
      duration: '40 min read',
      author: 'Kleber Santos',
      date: 'Nov 22, 2024',
      views: 350,
      likes: 33,
      tags: ['ROI', 'Business Value', 'AI Metrics'],
      featured: false,
      content: 'Practical framework for measuring and maximizing the business value of AI investments.'
    }
  ];

  const categories = [
    { name: 'All', count: guides.length, active: true },
    { name: 'AI Fundamentals', count: guides.filter(g => g.category === 'AI Fundamentals').length, active: false },
    { name: 'Enterprise AI', count: guides.filter(g => g.category === 'Enterprise AI').length, active: false },
    { name: 'ML Engineering', count: guides.filter(g => g.category === 'ML Engineering').length, active: false },
    { name: 'AI Ethics', count: guides.filter(g => g.category === 'AI Ethics').length, active: false },
    { name: 'Cloud AI', count: guides.filter(g => g.category === 'Cloud AI').length, active: false },
    { name: 'Customer Service AI', count: guides.filter(g => g.category === 'Customer Service AI').length, active: false },
    { name: 'AI Compliance', count: guides.filter(g => g.category === 'AI Compliance').length, active: false },
    { name: 'AI Business', count: guides.filter(g => g.category === 'AI Business').length, active: false }
  ];

  const difficultyColors = {
    'Beginner': 'bg-green-500/20 text-green-400',
    'Intermediate': 'bg-yellow-500/20 text-yellow-400',
    'Advanced': 'bg-red-500/20 text-red-400'
  };

  return (
    <>
      <Helmet>
        <title>AI & IT Guides - Zion Tech Group | Expert Knowledge Base</title>
        <meta name="description" content="Comprehensive guides and tutorials on AI, machine learning, and IT solutions. Learn from industry experts with practical, actionable content." />
        <meta name="keywords" content="AI guides, machine learning tutorials, IT guides, AI education, technology guides, expert knowledge" />
        <link rel="canonical" href="https://ziontechgroup.com/guides" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI & IT Guides
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Expert Knowledge Base
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Learn from industry experts with our comprehensive collection of guides, tutorials, 
              and best practices for AI, machine learning, and IT solutions.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="container mx-auto px-4 py-8">
          <div className="cyber-card hologram-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guides, tutorials, and articles..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white hover:border-cyan-400 transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white hover:border-cyan-400 transition-colors">
                  <Tag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Featured Guides */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {guides.filter(guide => guide.featured).map((guide) => (
              <div key={guide.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-yellow-400 font-medium">Featured</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[guide.difficulty]}`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-300 mb-4">{guide.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{guide.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{guide.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{guide.views}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Guides */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">All Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm text-cyan-400 font-medium">{guide.category}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[guide.difficulty]}`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{guide.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{guide.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{guide.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{guide.likes} likes</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-slate-800 text-gray-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 neon-text">
              Stay Updated with New Guides
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get notified when we publish new guides, 
              tutorials, and industry insights.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Custom Guides */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
            <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
              Need a Custom Guide?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our experts can create custom guides 
              tailored to your specific needs and industry requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Custom Guide
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuidesPage;