'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, CheckCircle, ArrowRight, Brain, BarChart3, MessageSquare, Cpu, Target, Users, Zap, Database, FileText, Calendar, Mail, Code, Globe, Shield, TrendingUp, Lock, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, ShoppingCart, DollarSign, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and customer service automation powered by advanced AI.',
      category: 'Customer Service',
      features: ['24/7 Availability', 'Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Analytics Dashboard'],
      benefits: ['Reduce support costs', 'Improve response time', 'Scale customer service', 'Better user experience'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Pro',
      description: 'Advanced analytics platform with AI-powered insights and predictive modeling.',
      category: 'Analytics',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization', 'Automated Reporting', 'Machine Learning Models'],
      benefits: ['Data-driven decisions', 'Improved forecasting', 'Automated insights', 'Better performance'],
      price: 'Starting at $499/month',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI for blogs, social media, and marketing.',
      category: 'Content',
      features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Training', 'Multi-language Support'],
      benefits: ['Save time', 'Consistent quality', 'SEO optimized', 'Scalable content'],
      price: 'Starting at $199/month',
      popular: false
    },
    {
      icon: Cpu,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes using AI and machine learning.',
      category: 'Automation',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry', 'Task Scheduling', 'Error Detection', 'Performance Monitoring'],
      benefits: ['Increased efficiency', 'Reduced errors', 'Cost savings', 'Better accuracy'],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      icon: Target,
      title: 'AI Sales Optimization',
      description: 'AI-powered sales tools for lead scoring, forecasting, and customer insights.',
      category: 'Sales',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Price Optimization', 'Churn Prediction', 'Recommendation Engine'],
      benefits: ['Increased sales', 'Better customer experience', 'Reduced fraud', 'Optimized pricing'],
      price: 'Starting at $349/month',
      popular: true
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment and analytics.',
      category: 'HR',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Predictive Hiring', 'Skills Assessment'],
      benefits: ['Better hiring', 'Reduced bias', 'Improved retention', 'Data-driven HR'],
      price: 'Starting at $279/month',
      popular: false
    },
    {
      icon: Zap,
      title: 'AI Energy Management',
      description: 'Smart energy optimization using AI for cost reduction and sustainability.',
      category: 'Energy',
      features: ['Energy Forecasting', 'Load Optimization', 'Cost Analysis', 'Sustainability Tracking', 'Predictive Maintenance', 'Smart Grid Integration'],
      benefits: ['Reduced costs', 'Better efficiency', 'Environmental impact', 'Predictive insights'],
      price: 'Starting at $449/month',
      popular: false
    },
    {
      icon: Database,
      title: 'AI Data Intelligence',
      description: 'Advanced data processing and intelligence using AI and machine learning.',
      category: 'Data',
      features: ['Data Mining', 'Pattern Recognition', 'Anomaly Detection', 'Data Quality', 'Real-time Processing', 'Predictive Modeling'],
      benefits: ['Better insights', 'Improved accuracy', 'Real-time analysis', 'Quality data'],
      price: 'Starting at $379/month',
      popular: false
    },
    {
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing using AI.',
      category: 'Document',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Automated Workflows', 'Quality Control', 'Integration APIs'],
      benefits: ['Reduced manual work', 'Faster processing', 'Better accuracy', 'Automated workflows'],
      price: 'Starting at $229/month',
      popular: false
    },
    {
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling and calendar management with AI optimization.',
      category: 'Productivity',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Analytics', 'Resource Planning', 'Automated Reminders'],
      benefits: ['Better time management', 'Reduced conflicts', 'Improved productivity', 'Automated scheduling'],
      price: 'Starting at $149/month',
      popular: false
    },
    {
      icon: Mail,
      title: 'AI Email Intelligence',
      description: 'Smart email management with AI-powered categorization and response suggestions.',
      category: 'Communication',
      features: ['Email Classification', 'Response Suggestions', 'Priority Scoring', 'Spam Detection', 'Sentiment Analysis', 'Automated Actions'],
      benefits: ['Better organization', 'Faster responses', 'Reduced spam', 'Improved productivity'],
      price: 'Starting at $179/month',
      popular: false
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistance for faster and more efficient development.',
      category: 'Development',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation', 'Testing', 'Refactoring'],
      benefits: ['Faster development', 'Better code quality', 'Reduced bugs', 'Improved efficiency'],
      price: 'Starting at $329/month',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'Customer Service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Content', name: 'Content', count: aiServices.filter(s => s.category === 'Content').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { id: 'Sales', name: 'Sales', count: aiServices.filter(s => s.category === 'Sales').length },
    { id: 'HR', name: 'HR', count: aiServices.filter(s => s.category === 'HR').length },
    { id: 'Energy', name: 'Energy', count: aiServices.filter(s => s.category === 'Energy').length },
    { id: 'Data', name: 'Data', count: aiServices.filter(s => s.category === 'Data').length },
    { id: 'Document', name: 'Document', count: aiServices.filter(s => s.category === 'Document').length },
    { id: 'Productivity', name: 'Productivity', count: aiServices.filter(s => s.category === 'Productivity').length },
    { id: 'Communication', name: 'Communication', count: aiServices.filter(s => s.category === 'Communication').length },
    { id: 'Development', name: 'Development', count: aiServices.filter(s => s.category === 'Development').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including customer support, analytics, quantum computing, autonomous systems, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, quantum computing, autonomous systems, AI analytics, customer support AI" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for your business" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From customer support to quantum computing, we provide cutting-edge AI solutions.
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
                      placeholder="Search AI services..."
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

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 relative">
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
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
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                          {service.category}
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
                  <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
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
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of companies that have already transformed their operations with our cutting-edge AI solutions.
                  Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Get Free Consultation
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

export default AiServicesPage;