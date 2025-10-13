import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BookOpen, FileText, Download, ExternalLink, Code, Database, Shield, Globe, Zap, Users, Clock, Star } from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'api', name: 'API Reference', count: 15 },
    { id: 'guides', name: 'User Guides', count: 10 },
    { id: 'tutorials', name: 'Tutorials', count: 8 }
  ];

  const documentation = [
    {
      id: 1,
      title: "Getting Started with AI Analytics",
      description: "Complete guide to setting up and using our AI analytics platform for the first time.",
      category: 'getting-started',
      type: 'Guide',
      readTime: '15 min',
      difficulty: 'Beginner',
      icon: <BookOpen className="w-5 h-5" />,
      link: '/docs/getting-started/ai-analytics',
      popular: true
    },
    {
      id: 2,
      title: "API Authentication & Setup",
      description: "Learn how to authenticate and set up API access for our services.",
      category: 'api',
      type: 'API Reference',
      readTime: '10 min',
      difficulty: 'Intermediate',
      icon: <Code className="w-5 h-5" />,
      link: '/docs/api/authentication',
      popular: true
    },
    {
      id: 3,
      title: "AI Customer Support Configuration",
      description: "Step-by-step guide to configuring AI-powered customer support solutions.",
      category: 'guides',
      type: 'User Guide',
      readTime: '25 min',
      difficulty: 'Intermediate',
      icon: <Users className="w-5 h-5" />,
      link: '/docs/guides/ai-customer-support',
      popular: false
    },
    {
      id: 4,
      title: "Data Integration Tutorial",
      description: "Tutorial on integrating your existing data sources with our AI platform.",
      category: 'tutorials',
      type: 'Tutorial',
      readTime: '30 min',
      difficulty: 'Advanced',
      icon: <Database className="w-5 h-5" />,
      link: '/docs/tutorials/data-integration',
      popular: true
    },
    {
      id: 5,
      title: "Security Best Practices",
      description: "Comprehensive guide to implementing security best practices for your AI solutions.",
      category: 'guides',
      type: 'Security Guide',
      readTime: '20 min',
      difficulty: 'Intermediate',
      icon: <Shield className="w-5 h-5" />,
      link: '/docs/guides/security-best-practices',
      popular: false
    },
    {
      id: 6,
      title: "5G Solutions API Reference",
      description: "Complete API documentation for our 5G network solutions and IoT integrations.",
      category: 'api',
      type: 'API Reference',
      readTime: '45 min',
      difficulty: 'Advanced',
      icon: <Globe className="w-5 h-5" />,
      link: '/docs/api/5g-solutions',
      popular: false
    },
    {
      id: 7,
      title: "Cloud Migration Guide",
      description: "Detailed guide for migrating your infrastructure to our cloud solutions.",
      category: 'guides',
      type: 'Migration Guide',
      readTime: '35 min',
      difficulty: 'Advanced',
      icon: <Zap className="w-5 h-5" />,
      link: '/docs/guides/cloud-migration',
      popular: true
    },
    {
      id: 8,
      title: "Quick Start Tutorial",
      description: "Get up and running with our platform in under 10 minutes.",
      category: 'tutorials',
      type: 'Quick Start',
      readTime: '8 min',
      difficulty: 'Beginner',
      icon: <Zap className="w-5 h-5" />,
      link: '/docs/tutorials/quick-start',
      popular: true
    }
  ];

  const quickLinks = [
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: <Code className="w-6 h-6" />,
      link: '/docs/api',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: "SDKs & Libraries",
      description: "Download our SDKs",
      icon: <Download className="w-6 h-6" />,
      link: '/docs/sdks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: "Code Examples",
      description: "Sample code and examples",
      icon: <FileText className="w-6 h-6" />,
      link: '/docs/examples',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: "Status Page",
      description: "Service status and uptime",
      icon: <Globe className="w-6 h-6" />,
      link: '/status',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Advanced': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>Documentation - API Reference & Guides | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive documentation for Zion Tech Group services. API references, user guides, tutorials, and best practices for AI and IT solutions."
        />
        <meta
          name="keywords"
          content="documentation, API reference, user guides, tutorials, developer docs, AI documentation, technical docs"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Documentation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Center
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive documentation, API references, and guides to help you get the most out of our AI and technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quick Links
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Jump to the most commonly accessed documentation and resources.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Browse Documentation
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by category and difficulty level.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Documentation List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {doc.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        {doc.icon}
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {doc.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {doc.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {doc.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(doc.difficulty)}`}>
                          {doc.difficulty}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {doc.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {filteredDocs.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Additional Resources
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access additional resources to enhance your experience with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
                <p className="text-gray-300 mb-4">
                  Watch step-by-step video guides to learn how to use our platform effectively.
                </p>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Watch Tutorials
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community Forum</h3>
                <p className="text-gray-300 mb-4">
                  Connect with other users, ask questions, and share your experiences.
                </p>
                <a
                  href="/community"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Join Community
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Status Page</h3>
                <p className="text-gray-300 mb-4">
                  Check the real-time status of all our services and get updates on any issues.
                </p>
                <a
                  href="/status"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Check Status
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Can't find what you're looking for? Our support team is here to help with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}