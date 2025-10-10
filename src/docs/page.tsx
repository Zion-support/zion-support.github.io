import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Search, BookOpen, Code, Zap, Brain, Shield, Database, Cloud, Settings, BarChart, MessageSquare, Eye, Cpu, Target, Lock, BarChart3, FileText, Bot, Calculator, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, CheckCircle, ArrowRight, ExternalLink, Download, Play, Users, Award, Globe } from 'lucide-react';
<<<<<<< HEAD
const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const docCategories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Zap, count: 8 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 12 },
    { id: 'api', name: 'API Reference', icon: Code, count: 15 },
    { id: 'integration', name: 'Integration', icon: Settings, count: 6 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Shield, count: 4 }
  ];
  const documentation = [
    {
=======
;
const DocsPage: React.FC = () => {
};
const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
;
const docCategories = [
[
        { id: 'all', name: 'All Documentation', icon: BookOpen, count: 45 },
        { id: 'getting-started', name: 'Getting Started', icon: Zap, count: 8 },
        { id: 'ai-services', name: 'AI Services', icon: Brain, count: 12 },
        { id: 'api', name: 'API Reference', icon: Code, count: 15 },
        { id: 'integration', name: 'Integration', icon: Settings, count: 6 },
        { id: 'troubleshooting', name: 'Troubleshooting', icon: Shield, count: 4 };
  ];
;
const documentation = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      id: 1,
      title: 'Quick Start Guide',
      description: 'Get up and running with Zion Tech Group services in minutes',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '10 min',
      icon: Zap,
      content: 'Learn how to set up your account, configure your first AI service, and start getting results immediately.'
    },
        {
      id: 2,
      title: 'AI Project Manager API',
      description: 'Complete API reference for AI Project Manager service',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '25 min',
      icon: Code,
      content: 'Detailed API documentation including endpoints, parameters, authentication, and code examples.'
    },
        {
      id: 3,
      title: 'Machine Learning Integration',
      description: 'Integrate our ML services with your existing applications',
      category: 'integration',
      difficulty: 'Advanced',
      readTime: '45 min',
      icon: Brain,
      content: 'Step-by-step guide to integrating our machine learning capabilities into your business processes.'
    },
        {
      id: 4,
      title: 'AI Analytics Dashboard Setup',
      description: 'Configure and customize your analytics dashboard',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '20 min',
      icon: BarChart,
      content: 'Learn how to set up dashboards, configure data sources, and create custom visualizations.'
    },
        {
      id: 5,
      title: 'Authentication & Security',
      description: 'Secure your API access and data transmission',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '15 min',
      icon: Shield,
      content: 'Best practices for API authentication, security headers, and data protection.'
    },
        {
      id: 6,
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      category: 'troubleshooting',
      difficulty: 'Beginner',
      readTime: '12 min',
      icon: Settings,
      content: 'Common issues and their solutions, including error codes and debugging tips.'
    },
        {
      id: 7,
      title: 'AI Content Generation API',
      description: 'Generate high-quality content using our AI API',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '30 min',
      icon: FileText,
      content: 'Complete guide to using our content generation API for blogs, social media, and marketing materials.'
    },
        {
      id: 8,
      title: 'Webhook Configuration',
      description: 'Set up real-time notifications and data sync',
      category: 'integration',
      difficulty: 'Advanced',
      readTime: '35 min',
      icon: MessageSquare,
      content: 'Configure webhooks to receive real-time updates and synchronize data across your systems.'
    },
        {
      id: 9,
      title: 'AI Customer Support Bot Setup',
      description: 'Deploy and configure your AI-powered support bot',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '25 min',
      icon: Bot,
      content: 'Complete setup guide for deploying intelligent customer support bots on your website.'
    },
        {
      id: 10,
      title: 'Performance Optimization',
      description: 'Optimize your AI service performance and reduce costs',
      category: 'troubleshooting',
      difficulty: 'Advanced',
      readTime: '40 min',
      icon: Zap,
      content: 'Advanced techniques for optimizing API calls, reducing latency, and minimizing costs.'
    };
  ];
<<<<<<< HEAD
  const quickLinks = [
    {
=======
;
const quickLinks = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: Code,
      link: '/api-docs',
      color: 'text-blue-400'
    },
        {
      title: 'SDK Downloads',
      description: 'Client libraries and tools',
      icon: Download,
      link: '/downloads',
      color: 'text-green-400'
    },
        {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Play,
      link: '/tutorials',
      color: 'text-purple-400'
    },
        {
      title: 'Community Forum',
      description: 'Connect with other developers',
      icon: Users,
<<<<<<< HEAD
      link: '/community',
      color: 'text-cyan-400'
    }
=======
      link: '
      colo,
    r: 'text-cyan-400'
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ];
  const filteredDocs = selectedCategory === 'all' 
    ? documentation 
    : documentation.filter(doc => doc.category === selectedCategory);
<<<<<<< HEAD
  const searchResults = searchQuery 
=======
;
const searchResults = searchQuery 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    ? documentation.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDocs;
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
<<<<<<< HEAD
      case 'Beginner': return 'text-green-400 bg-green-500/20'
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20'
      case 'Advanced': return 'text-red-400 bg-red-500/20',
      default: return 'text-gray-400 bg-gray-500/20'
  }
  }
=======
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20'};
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <React .Fragment>
      <SEOOptimizer title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group AI services. Find guides, API references, tutorials, and integration examples."
        keywords={['documentation', 'API docs', 'guides', 'tutorials', 'integration', 'AI services']};
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
<<<<<<< HEAD
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
              Documentation
  </
=======
          {/* Hero Section */};
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <p className="text-xl text-cyan-400 mb-8">
              Everything you need to build with AI,
  </
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you 
              integrate and optimize our AI services for your business.
<<<<<<< HEAD
            </p>
          </section>
          {/* Search Section */}
=======
            <
          <
          {/* Search Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
<<<<<<< HEAD
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          </section>
          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Quick Links;
  </
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                  <link.icon className={`w-12 h-12 mx-auto mb-4 ${link.color}`} />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-300">{link.description}</p>
                </Link>
              ))}
            </div>
          </section>
          {/* Categories */}
=======
                  value = { searchQuery };)
                  onChange = { (e) => setSearchQuery(e.target.value) };
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none"
              <
            <
          <
          {/* Quick Links *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Quick Links
            <
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6">
              {quickLinks.map((link), index) => (
                  <link .icon className={`w-12 h-12 mx-auto mb-4 ${link.color}`};
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {link.title};
                  <
                  <p className="text-gray-300">{link.description}<
                <)
              ))};
            <
          <
          {/* Categories *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Browse by Category;
  </
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {docCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-slate-900'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`};
                >
<<<<<<< HEAD
                  <category.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{category.name}</div>
                  <div className="text-xs opacity-75">{category.count} docs</div>
                </button>
              ))}
            </div>
          </section>
          {/* Documentation List */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Documentation;
  </
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((doc) => (
                <div key={doc.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <doc.icon className="w-8 h-8 text-cyan-400 mr-4 flex-shrink-0" />
=======
                  <category.icon className="w-6 h-6 mx-auto mb-2" 
                  <div className="text-sm font-semibold">{category.name}<
                  <div className="text-xs opacity-75">{category.count} docs<
                <
              ))};
            <
          <
          {/* Documentation List *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {searchResults.map((doc) => (<div key={doc.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <doc .icon className="w-8 h-8 text-cyan-400 mr-4 flex-shrink-0" 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(doc.difficulty)}`}>
<<<<<<< HEAD
                          {doc.difficulty}
                        </span>
                        <span className="text-gray-400 text-xs">{doc.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {doc.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/docs/${doc.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-500 text-xs">
                      {doc.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Getting Started CTA */}
=======
                          {doc.difficulty};
                        <
                        <span className="text-gray-400 text-xs">{doc.readTime}<
                      <
                    <
                  <
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {doc.title};
                  <
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {doc.description};
                  <
                  <p className="text-gray-400 text-sm mb-4">
                    {doc.content};
                  <
                  <div className="flex items-center justify-between">
                      Read More
                      {doc.category };
                    <
                  <
                <
              ))};
            <
          <
          {/* Getting Started CTA *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
<<<<<<< HEAD
                Start building with our AI services today;
  </
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Our Team
  </
                <Link
                  to="/demo"
                  className="cyber-button-secondary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Request Demo
  </
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  ),
}
export default DocsPage;
  </Link>
  </Link>
  </p>
  </h2>
  </h2>
  </h2>
  </p>
  </h1>
  </SEOOptimizer>
=======
                Start building with our AI services today
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Footer />
      </div>
    </React.Fragment>
  )};
export default DocsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
