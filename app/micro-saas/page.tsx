import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, BarChart3, Shield, Cloud, Users, Code, Database, ArrowRight,
  Sparkles, Star, CheckCircle, TrendingUp, Video, FileText, Mail,
  Package, Heart, DollarSign, Mic, Share, Activity, TrendingDown,
  Globe, Calendar, Headphones, Play, Smartphone, Target, Bot,
  Settings, Lock, Cpu, Network, Server, HardDrive, Laptop, Monitor,
  Wifi, Bell, Search, Filter, Download, Upload, Eye, ThumbsUp,
  Clock, Percent, PieChart, LineChart, BarChart, AlertCircle,
  Info, HelpCircle, ExternalLink, ChevronRight, Pause, Stop,
  RefreshCw, RotateCcw, Save, Edit, Trash2, Plus, Minus, X,
  Menu, MoreHorizontal, MoreVertical, Grid, List, Layout,
  Maximize, Minimize, Move, Copy, Scissors, Clipboard, Bookmark,
  Tag, Flag, BellOff, Volume2, VolumeX, MicOff, Camera,
  CameraOff, WifiOff, Battery, BatteryLow, Signal, SignalLow,
  SignalZero, SignalHigh, SignalMedium, Home, Gamepad2
} from 'lucide-react';

const MicroSaasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const microSaasServices = [
    // AI Video & Content
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated content generation. Perfect for marketing, training, and social media.',
      icon: <Video className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['AI Video Creation', 'Voice Synthesis', 'Auto Editing', 'Template Library', 'HD Export', 'Brand Integration'],
      category: 'AI Video',
      popular: true,
      link: '/zion-ai-video-generator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'zion-ai-content-studio',
      name: 'Zion AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media optimization for all platforms.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $149/month',
      originalPrice: '$299/month',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media', 'SEO Optimization', 'Brand Consistency'],
      category: 'AI Content',
      popular: true,
      link: '/zion-ai-content-studio',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalized recommendations for better customer retention.',
      icon: <Users className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Behavioral Analytics', 'Churn Prediction', 'Personalized Recommendations', 'Customer Segmentation', 'Real-time Insights', 'ROI Tracking'],
      category: 'AI Analytics',
      popular: true,
      link: '/zion-ai-customer-insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'zion-ai-business-intelligence',
      name: 'Zion AI Business Intelligence Pro',
      description: 'Comprehensive BI platform with predictive analytics, automated reporting, and intelligent dashboards for data-driven decision making.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: 'Starting at $399/month',
      originalPrice: '$799/month',
      features: ['Predictive Analytics', 'Automated Reports', 'Smart Dashboards', 'Data Visualization', 'Custom Metrics', 'Real-time Alerts'],
      category: 'AI Analytics',
      popular: true,
      link: '/zion-ai-business-intelligence',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'zion-ai-invoice-generator',
      name: 'Zion AI Invoice Generator Pro',
      description: 'Automated invoice generation with AI-powered data extraction, smart categorization, and seamless accounting integration.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $99/month',
      originalPrice: '$199/month',
      features: ['Auto Invoice Creation', 'Data Extraction', 'Smart Categorization', 'Accounting Integration', 'Multi-currency', 'PDF Export'],
      category: 'AI Finance',
      popular: true,
      link: '/zion-ai-invoice-generator',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'zion-ai-financial-forecaster',
      name: 'Zion AI Financial Forecaster Pro',
      description: 'Advanced financial forecasting with machine learning models, scenario planning, and automated financial reporting for CFOs.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: 'Starting at $399/month',
      originalPrice: '$799/month',
      features: ['Financial Forecasting', 'Scenario Planning', 'Automated Reports', 'Risk Analysis', 'Cash Flow Prediction', 'Investment Analysis'],
      category: 'AI Finance',
      popular: true,
      link: '/zion-ai-financial-forecaster',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer Pro',
      description: 'AI-powered expense categorization and tracking with receipt scanning, tax optimization, and automated reporting for businesses.',
      icon: <DollarSign className="w-8 h-8" />,
      price: 'Starting at $129/month',
      originalPrice: '$259/month',
      features: ['Receipt Scanning', 'Auto Categorization', 'Tax Optimization', 'Expense Reports', 'Budget Tracking', 'Mobile App'],
      category: 'AI Finance',
      link: '/zion-smart-expense-categorizer',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer Pro',
      description: 'Intelligent email analysis with sentiment detection, spam filtering, and automated response suggestions for better communication.',
      icon: <Mail className="w-8 h-8" />,
      price: 'Starting at $149/month',
      originalPrice: '$299/month',
      features: ['Sentiment Analysis', 'Spam Detection', 'Auto Response', 'Email Classification', 'Priority Scoring', 'Team Collaboration'],
      category: 'AI Communication',
      link: '/zion-ai-email-analyzer',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'zion-ai-customer-support-pro',
      name: 'Zion AI Customer Support Pro',
      description: 'Advanced AI customer support with multi-channel integration, sentiment analysis, and automated ticket routing for support teams.',
      icon: <Headphones className="w-8 h-8" />,
      price: 'Starting at $229/month',
      originalPrice: '$459/month',
      features: ['Multi-channel Support', 'Sentiment Analysis', 'Automated Routing', 'Knowledge Base', 'Live Chat Integration', 'Performance Analytics'],
      category: 'AI Support',
      popular: true,
      link: '/zion-ai-customer-support-pro',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      name: 'Zion AI Voice Assistant Pro',
      description: 'Advanced voice assistant with natural language processing, multi-language support, and custom voice training for business applications.',
      icon: <Mic className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Voice Training', 'API Integration', 'Voice Commands', 'Analytics'],
      category: 'AI Voice',
      popular: true,
      link: '/zion-ai-voice-assistant-pro',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: microSaasServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Finance', count: microSaasServices.filter(s => s.category.includes('Finance')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Video', count: microSaasServices.filter(s => s.category.includes('Video')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Content', count: microSaasServices.filter(s => s.category.includes('Content')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Communication', count: microSaasServices.filter(s => s.category.includes('Communication')).length, color: 'from-orange-500 to-red-500' },
    { name: 'AI Support', count: microSaasServices.filter(s => s.category.includes('Support')).length, color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Voice', count: microSaasServices.filter(s => s.category.includes('Voice')).length, color: 'from-cyan-500 to-blue-500' }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> }
  ];

  const filteredServices = selectedCategory === 'All Services' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of 50+ AI-powered micro SAAS solutions. From video generation to customer insights, we provide ready-to-use business tools that transform your operations."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI tools, business automation, video generator, invoice generator, customer insights, social media manager, AI analytics, business software, AI solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ AI-Powered Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use AI-powered business tools that transform your operations. 
              From video generation to customer insights, our micro SAAS solutions are designed for immediate deployment and maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI-Powered Business Tools
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions designed to automate and optimize your business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
