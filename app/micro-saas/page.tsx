'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Target, 
  Heart, 
  FileText, 
  Cpu, 
  Link as LinkIcon, 
  Server, 
  Zap, 
  Eye, 
  Mic, 
  Package, 
  Monitor, 
  Wifi, 
  Lock, 
  BarChart3, 
  MessageSquare, 
  Globe, 
  Database, 
  Settings, 
  Smartphone, 
  Headphones, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  DollarSign,
  Award,
  Shield,
  Brain,
  Cloud,
  Code
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time data visualization.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Reporting',
        'Multi-user Collaboration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and opportunities',
        'Save 10+ hours per week',
        'Improve business performance'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-600',
      users: '500+',
      rating: 4.9
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support platform with GPT-4 powered AI and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Custom Knowledge Base'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer support',
        'Improve response times',
        'Scale support operations'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-600',
      users: '300+',
      rating: 4.8
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat protection for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time Threat Detection',
        'Automated Security Scanning',
        'Compliance Monitoring',
        'Incident Response',
        'Security Training',
        'Vulnerability Assessment'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance',
        'Reduce security risks',
        'Expert security monitoring'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      users: '200+',
      rating: 4.9
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI Content Generation',
        'Brand Voice Training',
        'Multi-platform Publishing',
        'Content Calendar Management',
        'SEO Optimization',
        'Plagiarism Detection'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain brand consistency',
        'Improve SEO performance',
        'Scale content production'
      ],
      category: 'Content',
      popular: false,
      icon: FileText,
      color: 'from-purple-500 to-pink-600',
      users: '400+',
      rating: 4.7
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with lead scoring, automated follow-ups, and customer journey mapping.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI Lead Scoring',
        'Automated Follow-ups',
        'Customer Journey Mapping',
        'Sales Forecasting',
        'Email Automation',
        'Pipeline Management'
      ],
      benefits: [
        'Increase conversion rates',
        'Automate sales processes',
        'Better customer insights',
        'Improve sales performance'
      ],
      category: 'Sales & Marketing',
      popular: true,
      icon: Target,
      color: 'from-cyan-500 to-blue-600',
      users: '350+',
      rating: 4.8
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management tool with intelligent task allocation and progress tracking.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI Task Allocation',
        'Progress Tracking',
        'Resource Management',
        'Time Tracking',
        'Team Collaboration',
        'Risk Assessment'
      ],
      benefits: [
        'Improve project success rates',
        'Optimize resource allocation',
        'Better team coordination',
        'Reduce project delays'
      ],
      category: 'Productivity',
      popular: false,
      icon: Settings,
      color: 'from-yellow-500 to-orange-600',
      users: '250+',
      rating: 4.6
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Sales & Marketing', name: 'Sales & Marketing', count: products.filter(p => p.category === 'Sales & Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of Micro SaaS tools designed to solve specific business problems. Analytics, AI chatbots, security, content creation, and more." />
        <meta name="keywords" content="micro saas, business tools, analytics, AI chatbot, security, content creation, CRM, project management" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Micro SaaS <span className="text-cyan-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready-to-use business tools that solve specific problems. 
                No complex setup, no lengthy implementations - just powerful solutions that work.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mr-4`}>
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-cyan-400 text-sm">{product.category}</span>
                            {product.popular && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {product.rating}
                        </div>
                        <div className="text-xs text-gray-500">{product.users} users</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {product.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-400">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                        Try Free
                      </button>
                      <button className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Micro SaaS */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
                  <p className="text-gray-300 text-sm">Get up and running in minutes, not months</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
                  <p className="text-gray-300 text-sm">Affordable solutions with transparent pricing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Focused Solutions</h3>
                  <p className="text-gray-300 text-sm">Solve specific problems with specialized tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300 text-sm">Used by hundreds of businesses worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our collection of Micro SaaS tools or let us help you find 
                the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;