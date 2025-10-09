import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Search, Filter, Grid, List, ExternalLink, Play, Download, Share2, Heart, Bookmark } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'category'>('name');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const microSAASServices = [
    // AI-Powered Developer Tools
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Advanced automated code analysis with AI-powered bug detection, security vulnerability scanning, and performance optimization suggestions.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Code quality metrics', 'Git integration', 'Custom rule sets'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 15+ hours/week', 'Prevent security vulnerabilities'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Custom AI Models', 'OpenAI Codex'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Test Generation Suite',
      description: 'Intelligent automated test generation with coverage analysis, performance testing, and regression testing automation.',
      icon: '🧪',
      price: '$149/month',
      features: ['Auto test generation', 'Coverage analysis', 'Performance testing', 'Regression testing', 'CI/CD integration', 'Custom test frameworks'],
      benefits: ['Increase test coverage by 80%', 'Reduce testing time by 70%', 'Catch bugs earlier', 'Improve code reliability'],
      marketPrice: '$250-500/month',
      category: 'Developer Tools',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Custom AI Models', 'GitHub Actions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Threat Detection System',
      description: 'Advanced cybersecurity with real-time threat monitoring, automated incident response, and vulnerability assessment.',
      icon: '🛡️',
      price: '$399/month',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Vulnerability scanning', 'Security analytics', 'Compliance reporting'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce response time by 80%', 'Ensure compliance', 'Protect sensitive data'],
      marketPrice: '$600-1200/month',
      category: 'Cybersecurity',
      technologies: ['Machine Learning', 'Python', 'React', 'Node.js', 'Security APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO analysis and optimization with AI-driven content suggestions, keyword research, and competitor analysis.',
      icon: '🎯',
      price: '$199/month',
      features: ['AI content optimization', 'Keyword research automation', 'Competitor analysis', 'Technical SEO audit', 'Rank tracking', 'Content gap analysis'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 25+ hours/week', 'Beat competitors'],
      marketPrice: '$300-600/month',
      category: 'Marketing',
      technologies: ['Google Search Console API', 'Ahrefs API', 'OpenAI GPT', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with predictive analytics, automated insights, and custom reporting.',
      icon: '📊',
      price: '$199/month',
      features: ['Real-time visualization', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile responsive', 'Alert system'],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends early', 'Improve forecasting'],
      marketPrice: '$300-600/month',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Invoice Generator Pro',
      description: 'Intelligent invoice creation with automated billing, payment tracking, financial analytics, and tax calculations.',
      icon: '💰',
      price: '$79/month',
      features: ['Automated invoice generation', 'Payment tracking', 'Financial analytics', 'Client portal', 'Tax calculations', 'Multi-currency support'],
      benefits: ['Reduce billing time by 80%', 'Improve cash flow', 'Eliminate manual errors', 'Ensure compliance'],
      marketPrice: '$120-250/month',
      category: 'Finance',
      technologies: ['Stripe API', 'QuickBooks API', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Health Monitoring Platform',
      description: 'Personalized health tracking with symptom analysis, medication reminders, and health trend predictions.',
      icon: '🏥',
      price: '$99/month',
      features: ['Symptom tracking', 'Medication reminders', 'Health predictions', 'Doctor integration', 'Emergency alerts', 'Wearable sync'],
      benefits: ['Improve health outcomes', 'Reduce medical costs', 'Early disease detection', 'Better medication adherence'],
      marketPrice: '$150-300/month',
      category: 'Healthcare',
      technologies: ['Machine Learning', 'React Native', 'Node.js', 'MongoDB', 'Health APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Language Learning Platform',
      description: 'Personalized language learning with AI tutors, speech recognition, and adaptive curriculum.',
      icon: '🌍',
      price: '$79/month',
      features: ['AI tutoring', 'Speech recognition', 'Adaptive learning', 'Progress tracking', 'Multi-language support', 'Cultural context'],
      benefits: ['Learn languages 3x faster', 'Personalized curriculum', 'Improve pronunciation', 'Cultural understanding'],
      marketPrice: '$120-250/month',
      category: 'Education',
      technologies: ['Speech Recognition', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Inventory Optimizer Pro',
      description: 'Predictive inventory management with demand forecasting, automated reordering, and cost optimization.',
      icon: '📦',
      price: '$299/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Cost analysis', 'Seasonal adjustments'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow', 'Optimize supplier relationships'],
      marketPrice: '$400-800/month',
      category: 'Supply Chain',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Custom ML Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Fleet Management System',
      description: 'Intelligent fleet optimization with route planning, fuel efficiency, maintenance scheduling, and driver behavior analysis.',
      icon: '🚛',
      price: '$399/month',
      features: ['Route optimization', 'Fuel efficiency', 'Maintenance scheduling', 'Driver behavior analysis', 'Real-time tracking', 'Cost optimization'],
      benefits: ['Reduce fuel costs by 20%', 'Optimize routes', 'Improve safety', 'Reduce maintenance costs'],
      marketPrice: '$500-1000/month',
      category: 'Transportation',
      technologies: ['Machine Learning', 'GPS APIs', 'React', 'Node.js', 'IoT'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: microSAASServices.length },
    { name: 'Developer Tools', count: microSAASServices.filter(s => s.category === 'Developer Tools').length },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length },
    { name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length },
    { name: 'Finance', count: microSAASServices.filter(s => s.category === 'Finance').length },
    { name: 'Healthcare', count: microSAASServices.filter(s => s.category === 'Healthcare').length },
    { name: 'Education', count: microSAASServices.filter(s => s.category === 'Education').length },
    { name: 'Cybersecurity', count: microSAASServices.filter(s => s.category === 'Cybersecurity').length },
    { name: 'Supply Chain', count: microSAASServices.filter(s => s.category === 'Supply Chain').length },
    { name: 'Transportation', count: microSAASServices.filter(s => s.category === 'Transportation').length }
  ];

  // Filter and sort services
  const filteredServices = microSAASServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const toggleFavorite = (index: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS applications for modern businesses. Affordable, powerful tools for developers, marketers, and entrepreneurs. Starting at $49/month." />
        <meta name="keywords" content="micro saas, ai tools, business applications, developer tools, marketing automation, productivity apps" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="50+ AI-powered micro SAAS applications for modern businesses. Affordable, powerful tools starting at $49/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI-Powered Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
            50+ Ready-to-Use AI Applications for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered micro SAAS applications. 
            From developer tools to marketing automation, we have everything you need to succeed.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-6 energy-pulse">
              <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">{microSAASServices.length}+</div>
              <div className="text-gray-300">Applications</div>
            </div>
            <div className="cyber-card hologram-card p-6 energy-pulse">
              <div className="text-3xl font-bold text-green-400 mb-2 neon-text">$49</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-6 energy-pulse">
              <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="cyber-card hologram-card p-6 energy-pulse">
              <div className="text-3xl font-bold text-orange-400 mb-2 neon-text">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 mb-12 cyber-glow">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI tools, categories, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent cyber-input"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white shadow-lg cyber-glow'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'category')}
                className="cyber-input text-sm"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
              </select>
              <span className="text-gray-400 text-sm">
                Showing {filteredServices.length} of {microSAASServices.length} tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text cyber-text">
            Choose Your Perfect AI Tools
          </h2>
          
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 energy-pulse ${
                viewMode === 'list' ? 'flex items-center space-x-6' : ''
              }`}>
                {viewMode === 'grid' ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4 cyber-scan-line">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                        {service.category}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400 neon-text">{service.price}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleFavorite(index)}
                            className={`p-2 rounded-lg transition-colors ${
                              favorites.has(index)
                                ? 'text-red-400 bg-red-400/20'
                                : 'text-gray-400 hover:text-red-400 hover:bg-red-400/20'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${favorites.has(index) ? 'fill-current' : ''}`} />
                          </button>
                          <button className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/20 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <span>Market Price: <span className="line-through">{service.marketPrice}</span></span>
                          <span className="text-green-400 font-medium">Save up to 50%</span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <a
                            href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                            className="flex-1 cyber-button text-center"
                          >
                            Get Started
                          </a>
                          <a
                            href="tel:+13024640950"
                            className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white neon-text">{service.title}</h3>
                          <p className="text-gray-300 text-sm">{service.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <button
                          onClick={() => toggleFavorite(index)}
                          className={`p-2 rounded-lg transition-colors ${
                            favorites.has(index)
                              ? 'text-red-400 bg-red-400/20'
                              : 'text-gray-400 hover:text-red-400 hover:bg-red-400/20'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.has(index) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        Market Price: <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2">Save up to 50%</span>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                          className="cyber-button"
                        >
                          Get Started
                        </a>
                        <a
                          href="tel:+13024640950"
                          className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Choose from {microSAASServices.length}+ AI-powered micro SAAS applications and start your digital transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center cyber-button"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;