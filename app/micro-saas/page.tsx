'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, TrendingUp, Globe } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      category: 'content',
      icon: Zap,
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization'],
      price: '$29/month',
      users: '1,200+',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tool for small to medium businesses.',
      category: 'analytics',
      icon: TrendingUp,
      features: ['Real-time metrics', 'Custom reports', 'Data visualization', 'Export capabilities'],
      price: '$19/month',
      users: '850+',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Team Collaboration Hub',
      description: 'Streamline team communication and project management with our all-in-one platform.',
      category: 'productivity',
      icon: Users,
      features: ['Task management', 'File sharing', 'Video calls', 'Project tracking'],
      price: '$39/month',
      users: '2,100+',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Security Monitor',
      description: 'Advanced security monitoring and threat detection for your digital assets.',
      category: 'security',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reports'],
      price: '$49/month',
      users: '650+',
      rating: 4.7
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'content', name: 'Content' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'security', name: 'Security' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | Innovative Software Solutions</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed to solve specific business challenges. AI-powered tools for content, analytics, productivity, and security." />
        <meta name="keywords" content="micro SaaS, software products, AI tools, business software, productivity tools, analytics software" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of micro SaaS products designed to solve specific business challenges. 
              AI-powered tools for content, analytics, productivity, and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Browse Products
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{product.price}</div>
                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{product.users} users</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-300">
                Our micro SaaS products are helping businesses worldwide achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">4.8</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS products and start solving your business challenges today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Browse All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MicroSaasPage
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

const microSaasProducts = [
  {
    id: 1,
    name: 'TaskFlow Pro',
    description: 'AI-powered project management and task automation for small teams',
    price: '$29/month',
    features: [
      'Smart Task Assignment',
      'Automated Workflows',
      'Team Collaboration',
      'Progress Tracking',
      'Deadline Management',
      'Resource Planning',
      'Custom Dashboards',
      'Integration APIs'
    ],
    icon: <CheckCircle className="w-8 h-8" />,
    category: 'Productivity',
    popular: true,
    rating: 4.8,
    users: '2,500+',
    color: 'from-blue-500 to-cyan-600',
    capabilities: [
      '50% faster project completion',
      'Real-time team collaboration',
      'Automated task prioritization',
      'Custom workflow creation'
    ]
  },
  {
    id: 2,
    name: 'DataViz Studio',
    description: 'Create stunning data visualizations and interactive dashboards in minutes',
    price: '$49/month',
    features: [
      'Drag & Drop Builder',
      'Real-time Data Sync',
      'Interactive Charts',
      'Custom Templates',
      'Export Options',
      'Team Sharing',
      'API Integration',
      'Mobile Responsive'
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    category: 'Analytics',
    popular: true,
    rating: 4.9,
    users: '1,800+',
    color: 'from-purple-500 to-pink-600',
    capabilities: [
      'Create charts in under 5 minutes',
      'Connect to 50+ data sources',
      'Real-time collaboration',
      'Professional templates'
    ]
  },
  {
    id: 3,
    name: 'ContentCraft AI',
    description: 'AI-powered content creation and social media management platform',
    price: '$39/month',
    features: [
      'AI Writing Assistant',
      'Social Media Scheduler',
      'Content Calendar',
      'Brand Voice Training',
      'SEO Optimization',
      'Multi-Platform Publishing',
      'Analytics Dashboard',
      'Team Collaboration'
    ],
    icon: <FileText className="w-8 h-8" />,
    category: 'Content',
    popular: false,
    rating: 4.7,
    users: '3,200+',
    color: 'from-green-500 to-emerald-600',
    capabilities: [
      '10x faster content creation',
      'Automated social posting',
      'SEO-optimized content',
      'Brand consistency'
    ]
  },
  {
    id: 4,
    name: 'CustomerConnect',
    description: 'All-in-one customer relationship management for growing businesses',
    price: '$59/month',
    features: [
      'Contact Management',
      'Sales Pipeline',
      'Email Automation',
      'Lead Scoring',
      'Deal Tracking',
      'Customer Support',
      'Reporting & Analytics',
      'Integration Hub'
    ],
    icon: <Users className="w-8 h-8" />,
    category: 'CRM',
    popular: true,
    rating: 4.8,
    users: '1,900+',
    color: 'from-orange-500 to-red-600',
    capabilities: [
      '30% increase in sales',
      'Automated lead nurturing',
      '360° customer view',
      'Predictive analytics'
    ]
  },
  {
    id: 5,
    name: 'InvoiceFlow',
    description: 'Streamlined invoicing and payment processing for freelancers and small businesses',
    price: '$19/month',
    features: [
      'Automated Invoicing',
      'Payment Processing',
      'Expense Tracking',
      'Tax Calculations',
      'Client Portal',
      'Recurring Billing',
      'Financial Reports',
      'Multi-Currency Support'
    ],
    icon: <DollarSign className="w-8 h-8" />,
    category: 'Finance',
    popular: false,
    rating: 4.6,
    users: '4,100+',
    color: 'from-indigo-500 to-blue-600',
    capabilities: [
      '50% faster payment processing',
      'Automated tax calculations',
      'Real-time financial insights',
      'Professional invoicing'
    ]
  },
  {
    id: 6,
    name: 'TeamSync',
    description: 'Collaborative workspace with real-time communication and file sharing',
    price: '$35/month',
    features: [
      'Real-time Chat',
      'Video Conferencing',
      'File Sharing',
      'Project Boards',
      'Document Collaboration',
      'Screen Sharing',
      'Mobile Apps',
      'Security Controls'
    ],
    icon: <Users className="w-8 h-8" />,
    category: 'Communication',
    popular: false,
    rating: 4.7,
    users: '2,800+',
    color: 'from-teal-500 to-cyan-600',
    capabilities: [
      'Seamless team collaboration',
      'HD video conferencing',
      'Secure file sharing',
      'Mobile-first design'
    ]
  }
];

const categories = ['All', 'Productivity', 'Analytics', 'Content', 'CRM', 'Finance', 'Communication'];

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed for modern businesses. 
              Get the tools you need without the complexity of enterprise software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SaaS products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${product.color}`}>
                  {product.icon}
                </div>
                {product.popular && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300">{product.rating}</span>
                    <span className="text-gray-500">({product.users})</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {product.users} users
                  </span>
                  <span className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-white">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.capabilities.map((capability, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Link
                  to="/contact"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our micro SaaS solutions to boost productivity, 
              streamline operations, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
