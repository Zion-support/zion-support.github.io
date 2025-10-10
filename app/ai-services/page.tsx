'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings 
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like responses with 99% accuracy',
      icon: MessageSquare,
      category: 'Customer Service',
      price: 'Starting at $1,999/month',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', '24/7 availability', 'Custom training', 'Analytics dashboard', 'Integration with 50+ platforms', 'Multi-language support']
    },
    {
      id: 2,
      title: 'Content Generation AI',
      description: 'Automated content creation for blogs, social media, marketing materials, and more with brand consistency',
      icon: FileText,
      category: 'Content',
      price: 'Starting at $1,499/month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Product descriptions', 'SEO optimization', 'Brand voice consistency', 'Plagiarism detection', 'Content scheduling']
    },
    {
      id: 3,
      title: 'Predictive Analytics',
      description: 'Advanced data analysis and forecasting to drive business decisions with 95% accuracy',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $2,999/month',
      features: ['Sales forecasting', 'Customer behavior analysis', 'Risk assessment', 'Market trends', 'Real-time insights', 'Custom dashboards', 'Automated reporting', 'API integration']
    },
    {
      id: 4,
      title: 'Computer Vision',
      description: 'Image and video analysis for quality control, security, and automation with real-time processing',
      icon: Eye,
      category: 'Computer Vision',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Image classification', 'Quality inspection', 'Facial recognition', 'OCR processing', 'Real-time analysis', 'Custom model training', 'Edge deployment']
    },
    {
      id: 5,
      title: 'Voice AI Solutions',
      description: 'Speech recognition and voice-enabled applications for enhanced user experience',
      icon: Mic,
      category: 'Voice AI',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support', 'Noise cancellation', 'Custom voice models', 'Real-time processing', 'Cloud and on-premise deployment']
    },
    {
      id: 6,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and workflows with 90% efficiency improvement',
      icon: Zap,
      category: 'Automation',
      price: 'Starting at $2,499/month',
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Email automation', 'Task scheduling', 'Error handling', 'Visual workflow builder', 'Integration with 200+ tools']
    },
    {
      id: 7,
      title: 'AI Security Solutions',
      description: 'Advanced threat detection and security monitoring using AI with real-time response',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $3,499/month',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Access control', 'Incident response', 'Compliance monitoring', 'Real-time alerts', 'Automated remediation']
    },
    {
      id: 8,
      title: 'Mobile AI Integration',
      description: 'AI-powered mobile applications with intelligent features and offline capabilities',
      icon: Box,
      category: 'Mobile',
      price: 'Starting at $4,999/project',
      features: ['Mobile app AI', 'Offline processing', 'Real-time inference', 'Cross-platform support', 'Performance optimization', 'User personalization', 'Custom model deployment', 'App store optimization']
    },
    {
      id: 9,
      title: 'AI Invoice Processor',
      description: 'Revolutionary AI-powered invoice processing solution that automates data extraction and approval workflows',
      icon: FileText,
      category: 'Finance',
      price: 'Starting at $299/month',
      features: ['AI-powered data extraction', 'Automated approval workflows', 'Real-time payment tracking', 'Multi-currency support', 'Vendor management', 'Expense categorization', 'Integration with accounting systems', 'Compliance reporting']
    },
    {
      id: 10,
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with our AI-powered analytics platform',
      icon: Brain,
      category: 'Analytics',
      price: 'Starting at $1,299/month',
      features: ['Real-time customer behavior analysis', 'Predictive customer lifetime value', 'Sentiment analysis', 'Churn prediction', 'Personalized recommendations', 'Customer segmentation', 'Cross-channel journey mapping', 'Automated insights']
    },
    {
      id: 11,
      title: 'AI Workflow Automation',
      description: 'Automate your business processes with intelligent AI-powered workflows',
      icon: Settings,
      category: 'Automation',
      price: 'Starting at $799/month',
      features: ['Visual workflow builder', 'AI-powered optimization', '500+ automation templates', 'Multi-step conditional logic', 'Real-time monitoring', '300+ integrations', 'Custom triggers', 'Advanced analytics']
    },
    {
      id: 12,
      title: 'AI Predictive Analytics',
      description: 'Transform your data into powerful predictions with our advanced AI analytics platform',
      icon: Target,
      category: 'Analytics',
      price: 'Starting at $1,999/month',
      features: ['Advanced ML algorithms', 'Real-time data processing', 'Automated model training', 'Multi-variate forecasting', 'Anomaly detection', 'Custom prediction models', 'Interactive dashboards', 'API access']
    }
  ];

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile', 'Finance'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'AI Models Deployed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '95%', label: 'Accuracy Rate' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Cost Reduction' }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Services
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              & Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Services' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </Link>
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable results and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;