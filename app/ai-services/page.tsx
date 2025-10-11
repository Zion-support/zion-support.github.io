'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Search, Filter, Star, CheckCircle, ArrowRight, Brain, BarChart3, MessageSquare, Cpu, Target, Users, Zap, Database, FileText, Calendar, Mail, Code, Globe, Shield, TrendingUp, Lock, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, ShoppingCart, DollarSign, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, BarChart3, Users, Zap, ArrowRight, CheckCircle, Star, Clock, TrendingUp, Settings, Target, Globe, Database, Smartphone, Lock, Calendar, Headphones, Code, Mail, Phone, MapPin, MessageSquare, FileText, Package, Workflow, Eye, Wifi, ShoppingCart, Cpu } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    {
<<<<<<< HEAD
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and customer service automation powered by advanced AI.',
=======
      id: 'ai-chatbot',
      name: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI chatbots for customer service and support',
      price: '$299/month',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Custom Training'],
      benefits: ['Reduce support costs', 'Improve response time', 'Scale customer service', 'Better user experience'],
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      category: 'Customer Service',
      features: ['24/7 Availability', 'Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Analytics Dashboard'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Scale customer service', 'Better customer satisfaction'],
      popular: true
    },
    {
<<<<<<< HEAD
      icon: BarChart3,
      title: 'AI Analytics Pro',
      description: 'Advanced data analytics and business intelligence with AI-powered insights.',
      category: 'Analytics',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Machine Learning Models', 'API Integration'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2000/month',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Competitive advantage'],
      popular: true
    },
    {
      icon: Cpu,
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for complex problem solving.',
      category: 'Quantum Computing',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Development'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-5000/month',
      benefits: ['Exponential computing power', 'Solve complex problems', 'Future-proof technology', 'Competitive edge'],
      popular: false
    },
    {
      icon: Target,
      title: 'Autonomous Systems',
      description: 'AI-powered autonomous systems for various business applications.',
      category: 'Autonomous Systems',
      features: ['Self-learning Systems', 'Decision Making', 'Process Automation', 'Adaptive Behavior', 'Monitoring', 'Maintenance'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-3000/month',
      benefits: ['Reduced human intervention', 'Improved efficiency', '24/7 operation', 'Cost savings'],
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'AI-powered content creation for blogs, social media, and marketing materials.',
      category: 'Content Generation',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'SEO Optimization', 'Brand Voice', 'Multi-language'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Save 80% content time', 'Consistent quality', 'SEO optimized', 'Multi-platform ready'],
      popular: true
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered cybersecurity solutions for threat detection and prevention.',
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Behavioral Analysis', 'Risk Assessment', 'Compliance'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Enhanced security', 'Real-time protection', 'Reduced false positives', 'Automated response'],
      popular: false
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'AI-powered human resources management and talent acquisition.',
      category: 'Human Resources',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Performance Analysis', 'Employee Engagement', 'Predictive Analytics'],
      price: 'Starting at $299/month',
      marketPrice: '$600-1800/month',
      benefits: ['Faster hiring', 'Better candidate fit', 'Reduced bias', 'Improved retention'],
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'AI Sales Automation',
      description: 'Intelligent sales process automation and lead qualification.',
      category: 'Sales',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Customer Insights', 'Automated Follow-ups', 'Performance Analytics'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2000/month',
      benefits: ['Higher conversion rates', 'Better lead quality', 'Automated processes', 'Data-driven sales'],
      popular: true
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation and workflow optimization.',
      category: 'Automation',
      features: ['Process Mapping', 'Task Automation', 'Decision Trees', 'Integration Hub', 'Monitoring', 'Optimization'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Increased efficiency', 'Reduced errors', 'Cost savings', 'Scalable processes'],
      popular: false
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image and video analysis.',
      category: 'Computer Vision',
      features: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Quality Control', 'Facial Recognition', 'OCR'],
      price: 'Starting at $349/month',
      marketPrice: '$700-2000/month',
      benefits: ['Automated visual tasks', 'Improved accuracy', 'Real-time processing', 'Cost reduction'],
      popular: false
    },
    {
      icon: Database,
      title: 'AI Data Processing',
      description: 'Intelligent data processing and analysis for large datasets.',
      category: 'Data Processing',
      features: ['Data Cleaning', 'Pattern Recognition', 'Predictive Modeling', 'Real-time Processing', 'Data Integration', 'Quality Assurance'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Faster data processing', 'Better insights', 'Automated cleaning', 'Scalable solutions'],
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Solutions',
      description: 'AI-powered e-commerce optimization and personalization.',
      category: 'E-commerce',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Segmentation', 'Fraud Detection', 'Personalization'],
      price: 'Starting at $299/month',
      marketPrice: '$600-1800/month',
      benefits: ['Increased sales', 'Better customer experience', 'Reduced fraud', 'Optimized pricing'],
      popular: true
=======
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      description: 'Advanced AI-powered analytics and business intelligence solutions',
      price: '$499/month',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Competitive advantage'],
      category: 'Analytics',
      popular: true,
      icon: BarChart3
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced AI models',
      price: '$199/month',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'SEO Optimization'],
      benefits: ['Save time', 'Consistent quality', 'Scale content', 'Cost effective'],
      category: 'Content',
      popular: false,
      icon: FileText
    },
    {
      id: 'ai-quantum',
      name: 'Quantum AI Computing',
      description: 'Next-generation quantum computing solutions for complex problems',
      price: '$2,999/month',
      features: ['Quantum Algorithms', 'Superposition Computing', 'Entanglement Processing', 'Quantum Security'],
      benefits: ['Exponential speed', 'Complex problem solving', 'Future-proof technology', 'Competitive edge'],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'Customer Service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: aiServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: aiServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'Content Generation', name: 'Content Generation', count: aiServices.filter(s => s.category === 'Content Generation').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: aiServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Human Resources', name: 'Human Resources', count: aiServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Sales', name: 'Sales', count: aiServices.filter(s => s.category === 'Sales').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { id: 'Data Processing', name: 'Data Processing', count: aiServices.filter(s => s.category === 'Data Processing').length },
    { id: 'E-commerce', name: 'E-commerce', count: aiServices.filter(s => s.category === 'E-commerce').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
=======
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum Computing').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including customer support, analytics, quantum computing, autonomous systems, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, quantum computing, autonomous systems, AI analytics, customer support AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
=======
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, content generation, and quantum computing solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, analytics, quantum computing, machine learning" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for your business" />
        <meta property="og:type" content="website" />
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
<<<<<<< HEAD
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  AI <span className="text-cyan-400">Services</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                From customer support to quantum computing, we provide cutting-edge AI solutions.
              </p>
=======
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to quantum computing, 
              we provide the technology you need to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
            </div>
          </section>

          {/* Search and Filter */}
<<<<<<< HEAD
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
=======
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
<<<<<<< HEAD
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 relative ${
                    service.popular ? 'border-cyan-400/50' : 'border-white/10 hover:border-cyan-400/30'
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <span className="text-cyan-400 text-sm font-medium">{service.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Save up to 50% compared to market rates
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No AI services found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Clear Filters
                  </button>
=======
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={`/ai-services/${service.id}`}
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Harness AI Power?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Let our AI experts help you choose the right solutions for your business. 
                  Get a personalized consultation and see how AI can transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Get AI Consultation
                  </a>
                  <a
                    href="/pricing"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    View Pricing
                  </a>
                </div>
=======
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI solutions to drive growth, 
                improve efficiency, and stay ahead of the competition.
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
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
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
