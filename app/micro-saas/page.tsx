'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, CheckCircle, ArrowRight, BarChart3, MessageSquare, Users, Database, Calendar, Mail, Code, Globe, Shield, TrendingUp, Lock, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, ShoppingCart, DollarSign, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Comprehensive business analytics platform with real-time insights and reporting.',
      category: 'Analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integration', 'Automated Alerts', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Data-driven decisions', 'Time savings', 'Better insights', 'Competitive advantage'],
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot with natural language processing.',
      category: 'Customer Service',
      features: ['24/7 Availability', 'Multi-language Support', 'Custom Training', 'Integration APIs', 'Analytics Dashboard', 'Escalation Management'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Reduced support costs', 'Better customer experience', 'Scalable support', 'Quick responses'],
      popular: true
    },
    {
      icon: Users,
      title: 'Zion CRM Lite',
      description: 'Lightweight customer relationship management system for small businesses.',
      category: 'CRM',
      features: ['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Email Integration', 'Task Management', 'Reporting'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Better customer relationships', 'Organized sales process', 'Improved follow-ups', 'Easy to use'],
      popular: false
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Automated data synchronization across multiple platforms and databases.',
      category: 'Data Management',
      features: ['Real-time Sync', 'Multi-platform Support', 'Data Transformation', 'Error Handling', 'Monitoring', 'API Integration'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['Unified data', 'Reduced manual work', 'Better accuracy', 'Real-time updates'],
      popular: false
    },
    {
      icon: Calendar,
      title: 'Zion Scheduler Pro',
      description: 'Advanced appointment scheduling system with automated reminders and calendar integration.',
      category: 'Productivity',
      features: ['Online Booking', 'Calendar Integration', 'Automated Reminders', 'Payment Processing', 'Team Scheduling', 'Custom Forms'],
      price: 'Starting at $59/month',
      marketPrice: '$120-350/month',
      benefits: ['Reduced no-shows', 'Better time management', 'Automated processes', 'Improved efficiency'],
      popular: false
    },
    {
      icon: Mail,
      title: 'Zion Email Manager',
      description: 'AI-powered email management with smart categorization and automated responses.',
      category: 'Communication',
      features: ['Smart Categorization', 'Auto-responses', 'Template Library', 'Scheduling', 'Analytics', 'Integration'],
      price: 'Starting at $39/month',
      marketPrice: '$80-200/month',
      benefits: ['Better organization', 'Faster responses', 'Reduced spam', 'Improved productivity'],
      popular: false
    },
    {
      icon: Code,
      title: 'Zion API Gateway',
      description: 'Secure API management platform with rate limiting and monitoring.',
      category: 'Development',
      features: ['API Management', 'Rate Limiting', 'Authentication', 'Monitoring', 'Documentation', 'Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Secure APIs', 'Better performance', 'Easy management', 'Comprehensive monitoring'],
      popular: false
    },
    {
      icon: Globe,
      title: 'Zion SEO Optimizer',
      description: 'Automated SEO optimization tool with keyword tracking and content suggestions.',
      category: 'Marketing',
      features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis', 'Site Audit', 'Reporting'],
      price: 'Starting at $69/month',
      marketPrice: '$140-350/month',
      benefits: ['Better rankings', 'More traffic', 'Automated optimization', 'Competitive advantage'],
      popular: false
    },
    {
      icon: Shield,
      title: 'Zion Security Monitor',
      description: 'Real-time security monitoring and threat detection for web applications.',
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Real-time Alerts', 'Compliance Monitoring', 'Incident Response', 'Reporting'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Enhanced security', 'Early threat detection', 'Compliance assurance', 'Peace of mind'],
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'Zion Growth Tracker',
      description: 'Business growth analytics and KPI tracking with automated insights.',
      category: 'Analytics',
      features: ['KPI Tracking', 'Growth Metrics', 'Automated Insights', 'Custom Dashboards', 'Goal Setting', 'Progress Monitoring'],
      price: 'Starting at $79/month',
      marketPrice: '$160-400/month',
      benefits: ['Better growth tracking', 'Data-driven decisions', 'Goal achievement', 'Performance insights'],
      popular: false
    },
    {
      icon: Lock,
      title: 'Zion Password Manager',
      description: 'Secure password management with team sharing and enterprise features.',
      category: 'Security',
      features: ['Secure Storage', 'Team Sharing', 'Password Generation', 'Auto-fill', 'Breach Monitoring', 'Compliance'],
      price: 'Starting at $29/month',
      marketPrice: '$60-150/month',
      benefits: ['Enhanced security', 'Easy access', 'Team collaboration', 'Compliance assurance'],
      popular: false
    },
    {
      icon: Settings,
      title: 'Zion Workflow Builder',
      description: 'Visual workflow automation platform for business process optimization.',
      category: 'Automation',
      features: ['Visual Builder', 'Process Automation', 'Integration Hub', 'Custom Triggers', 'Analytics', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Process efficiency', 'Reduced manual work', 'Better collaboration', 'Automated workflows'],
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Data Management', name: 'Data Management', count: products.filter(p => p.category === 'Data Management').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'Communication', name: 'Communication', count: products.filter(p => p.category === 'Communication').length },
    { id: 'Development', name: 'Development', count: products.filter(p => p.category === 'Development').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Automation', name: 'Automation', count: products.filter(p => p.category === 'Automation').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group | Business Software Solutions</title>
        <meta name="description" content="Comprehensive suite of micro SaaS tools for business productivity, analytics, CRM, automation, and more. Affordable business software solutions." />
        <meta name="keywords" content="micro saas, business software, productivity tools, analytics, CRM, automation, business solutions" />
        <meta property="og:title" content="Micro SaaS Tools - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive suite of business software solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-cyan-400">SaaS Tools</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive suite of business software tools designed to boost productivity, streamline operations, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS tools..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 relative">
                      {product.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {product.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                          <span className="text-sm text-gray-400 ml-2 line-through">{product.marketPrice}</span>
                        </div>
                        <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Boost Your Business Productivity?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of businesses that have already transformed their operations with our micro SaaS tools.
                  Get started with a free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400 text-sm">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      kleber@ziontechgroup.com
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      364 E Main St STE 1008, Middletown DE 19709
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;