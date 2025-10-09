'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, ExternalLink, Tag, Search, Filter, TrendingUp, Star, Award, Brain, Cloud, Shield, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, FileText, Bot, Calculator, Calendar as CalendarIcon, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: FileText },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'technology', name: 'Technology', icon: Code },
    { id: 'business', name: 'Business', icon: Building },
    { id: 'research', name: 'Research', icon: Search },
    { id: 'partnerships', name: 'Partnerships', icon: Link }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform',
      excerpt: 'Our new AI platform helps enterprises make data-driven decisions with 95% accuracy improvement.',
      content: 'Zion Tech Group today announced the launch of its revolutionary AI-powered Business Intelligence Platform, designed to help enterprises transform their data into actionable insights. The platform leverages advanced machine learning algorithms to provide real-time analytics, predictive modeling, and automated reporting capabilities.',
      category: 'ai',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/news/ai-platform-launch.jpg',
      tags: ['AI', 'Business Intelligence', 'Platform Launch', 'Enterprise'],
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Microsoft Azure Expands Cloud AI Capabilities',
      excerpt: 'Strategic partnership brings advanced AI services to Azure customers worldwide.',
      content: 'Zion Tech Group has entered into a strategic partnership with Microsoft Azure to expand cloud AI capabilities for enterprise customers. This collaboration will bring our advanced AI services directly to Azure customers, enabling seamless integration with existing cloud infrastructure.',
      category: 'partnerships',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '3 min read',
      image: '/news/microsoft-partnership.jpg',
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud'],
      featured: false
    },
    {
      id: 3,
      title: 'New Research Paper Published on Quantum Machine Learning',
      excerpt: 'Our research team publishes groundbreaking work on quantum-enhanced machine learning algorithms.',
      content: 'Dr. Priya Patel and our quantum computing team have published a groundbreaking research paper on quantum-enhanced machine learning algorithms. The paper, published in Nature Quantum Information, demonstrates significant improvements in computational efficiency for certain machine learning tasks.',
      category: 'research',
      author: 'Dr. Priya Patel',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/news/quantum-research.jpg',
      tags: ['Research', 'Quantum Computing', 'Machine Learning', 'Publication'],
      featured: true
    },
    {
      id: 4,
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      excerpt: 'We\'re honored to be named one of the top 10 AI companies to watch in 2024.',
      content: 'Zion Tech Group has been recognized by TechCrunch as one of the top 10 AI companies to watch in 2024. This recognition highlights our innovative approach to AI solutions and our commitment to helping businesses transform through technology.',
      category: 'business',
      author: 'Kleber Santos',
      date: '2024-01-08',
      readTime: '4 min read',
      image: '/news/techcrunch-recognition.jpg',
      tags: ['Award', 'Recognition', 'TechCrunch', 'AI Company'],
      featured: false
    },
    {
      id: 5,
      title: 'New AI Ethics Framework Released for Responsible AI Development',
      excerpt: 'We\'re leading the industry in responsible AI development with our comprehensive ethics framework.',
      content: 'Zion Tech Group has released a comprehensive AI Ethics Framework to guide responsible AI development across all our products and services. This framework ensures that our AI solutions are developed with fairness, transparency, and accountability in mind.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/news/ai-ethics.jpg',
      tags: ['AI Ethics', 'Responsible AI', 'Framework', 'Transparency'],
      featured: false
    },
    {
      id: 6,
      title: 'Expansion into European Market with New London Office',
      excerpt: 'We\'re excited to announce our expansion into Europe with a new office in London.',
      content: 'Zion Tech Group is expanding its global presence with the opening of a new office in London. This expansion will allow us to better serve our European clients and tap into the region\'s growing AI talent pool.',
      category: 'business',
      author: 'Rachel Green',
      date: '2024-01-03',
      readTime: '3 min read',
      image: '/news/london-office.jpg',
      tags: ['Expansion', 'Europe', 'London', 'Global Growth'],
      featured: false
    },
    {
      id: 7,
      title: 'Breakthrough in Natural Language Processing Achieves Human-Level Performance',
      excerpt: 'Our NLP team achieves a major milestone in language understanding capabilities.',
      content: 'Our natural language processing team has achieved a major breakthrough, reaching human-level performance on several key language understanding tasks. This advancement opens up new possibilities for conversational AI and automated content analysis.',
      category: 'research',
      author: 'Dr. Alex Kim',
      date: '2024-01-01',
      readTime: '8 min read',
      image: '/news/nlp-breakthrough.jpg',
      tags: ['NLP', 'Breakthrough', 'Language Understanding', 'AI Research'],
      featured: true
    },
    {
      id: 8,
      title: 'Cybersecurity Solutions Help Prevent $50M in Fraudulent Transactions',
      excerpt: 'Our AI-powered cybersecurity solutions have helped clients prevent millions in fraud.',
      content: 'Zion Tech Group\'s AI-powered cybersecurity solutions have helped our clients prevent over $50 million in fraudulent transactions in the past quarter. Our advanced threat detection algorithms continue to evolve and improve security outcomes.',
      category: 'technology',
      author: 'Lisa Zhang',
      date: '2023-12-28',
      readTime: '4 min read',
      image: '/news/cybersecurity-success.jpg',
      tags: ['Cybersecurity', 'Fraud Prevention', 'AI Security', 'Success Story'],
      featured: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Discover our latest AI innovations, partnerships, and industry developments."
        keywords={['news', 'updates', 'AI news', 'technology news', 'company news', 'announcements', 'press releases', 'industry insights']}
        canonicalUrl="https://ziontechgroup.com/news"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            News & Updates
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Stay informed with the latest news, announcements, and insights from Zion Tech Group.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              Featured News
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <a href={`/news/${article.id}`} className="text-cyan-400 hover:text-white transition-colors flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Latest News
          </h2>
          <div className="space-y-6">
            {regularArticles.map((article) => (
              <article key={article.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="bg-slate-800 text-cyan-400 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <a href={`/news/${article.id}`} className="cyber-button px-6 py-2 text-center lg:w-auto w-full">
                      Read Article
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="cyber-button px-8 py-3 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;