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
      title: 'AI-Powered Customer Service',
      description: 'Next-generation conversational AI with advanced NLP, sentiment analysis, and seamless human handoff capabilities',
      icon: MessageSquare,
      category: 'Customer Service',
      price: 'Starting at $2,999/month',
      features: ['GPT-4 powered natural language processing', 'Multi-channel support (web, mobile, social)', 'Advanced sentiment analysis and mood tracking', '24/7 availability with instant responses', 'Custom AI training with your data', 'Comprehensive analytics dashboard', 'Human handoff with context preservation', 'Integration with CRM and helpdesk systems']
    },
    {
      id: 2,
      title: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation',
      icon: FileText,
      category: 'Content',
      price: 'Starting at $1,999/month',
      features: ['AI-powered blog post and article generation', 'Social media content creation and optimization', 'Email campaign content and subject lines', 'Product descriptions and marketing copy', 'Technical documentation and user guides', 'SEO optimization and keyword integration', 'Brand voice consistency and style guides', 'Multi-language content generation']
    },
    {
      id: 3,
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced AI-driven data analysis and forecasting platform with machine learning models for business intelligence',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $4,999/month',
      features: ['Advanced sales forecasting with 95% accuracy', 'Customer behavior analysis and segmentation', 'Risk assessment and fraud detection', 'Market trend analysis and predictions', 'Real-time insights and recommendations', 'Custom dashboards and visualizations', 'Automated report generation', 'Integration with 100+ data sources']
    },
    {
      id: 4,
      title: 'Computer Vision & Image Analysis',
      description: 'Advanced image and video analysis platform for quality control, security monitoring, and automated visual inspections',
      icon: Eye,
      category: 'Computer Vision',
      price: 'Starting at $3,999/month',
      features: ['Object detection and recognition', 'Image classification and tagging', 'Quality control and defect detection', 'Facial recognition and biometric analysis', 'OCR processing and text extraction', 'Real-time video analysis', 'Custom model training and deployment', 'Integration with existing systems']
    },
    {
      id: 5,
      title: 'Voice AI & Speech Processing',
      description: 'Comprehensive voice AI solution with speech recognition, text-to-speech, and voice command processing capabilities',
      icon: Mic,
      category: 'Voice AI',
      price: 'Starting at $2,499/month',
      features: ['Advanced speech-to-text with 99% accuracy', 'Natural text-to-speech with custom voices', 'Voice command processing and control', 'Multi-language support (50+ languages)', 'Noise cancellation and audio enhancement', 'Custom voice model training', 'Real-time processing and streaming', 'Integration with IoT and smart devices']
    },
    {
      id: 6,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation platform for complex business processes with machine learning optimization',
      icon: Zap,
      category: 'Automation',
      price: 'Starting at $3,499/month',
      features: ['Intelligent workflow automation', 'Document processing and data extraction', 'Email automation and response generation', 'Task scheduling and resource allocation', 'Error handling and exception management', 'Process optimization recommendations', 'Integration with 200+ business tools', 'Real-time monitoring and analytics']
    },
    {
      id: 7,
      title: 'AI Cybersecurity & Threat Detection',
      description: 'Advanced AI-powered security monitoring system with behavioral analysis and automated threat response',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $4,499/month',
      features: ['AI-powered threat detection and analysis', 'Behavioral analysis and anomaly detection', 'Fraud prevention and risk assessment', 'Advanced access control and authentication', 'Automated incident response and remediation', 'Compliance monitoring and reporting', 'Real-time security analytics', 'Integration with security tools and SIEM']
    },
    {
      id: 8,
      title: 'AI-Powered Mobile Applications',
      description: 'Intelligent mobile app development with AI features, offline processing, and personalized user experiences',
      icon: Box,
      category: 'Mobile',
      price: 'Starting at $5,999/project',
      features: ['AI-powered mobile app features', 'Offline AI processing and inference', 'Real-time AI recommendations', 'Cross-platform development (iOS/Android)', 'Performance optimization and caching', 'User personalization and behavior analysis', 'Push notification intelligence', 'Integration with cloud AI services']
    },
    {
      id: 9,
      title: 'AI Business Intelligence',
      description: 'Advanced AI-driven business intelligence platform with natural language queries and automated insights',
      icon: Brain,
      category: 'Business Intelligence',
      price: 'Starting at $3,999/month',
      features: ['Natural language data queries', 'Automated insight generation', 'Predictive business modeling', 'Real-time dashboard updates', 'Custom AI model training', 'Data visualization and reporting', 'Integration with business systems', 'Advanced analytics and forecasting']
    },
    {
      id: 10,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation platform with AI-powered personalization and campaign optimization',
      icon: Target,
      category: 'Marketing',
      price: 'Starting at $2,799/month',
      features: ['AI-powered customer segmentation', 'Personalized content recommendations', 'Automated campaign optimization', 'Predictive customer lifetime value', 'A/B testing with AI insights', 'Multi-channel marketing orchestration', 'Real-time personalization', 'Advanced attribution modeling']
    },
    {
      id: 11,
      title: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare including medical imaging, diagnosis assistance, and patient monitoring',
      icon: Heart,
      category: 'Healthcare',
      price: 'Starting at $6,999/month',
      features: ['Medical image analysis and diagnosis', 'Patient monitoring and risk assessment', 'Drug discovery and development', 'Electronic health record analysis', 'Clinical decision support systems', 'Telemedicine and remote monitoring', 'HIPAA compliant AI processing', 'Integration with medical devices']
    },
    {
      id: 12,
      title: 'AI Financial Services',
      description: 'AI-powered financial solutions including fraud detection, algorithmic trading, and risk management',
      icon: DollarSign,
      category: 'Finance',
      price: 'Starting at $5,499/month',
      features: ['Fraud detection and prevention', 'Algorithmic trading and portfolio optimization', 'Credit risk assessment and scoring', 'Automated financial reporting', 'Regulatory compliance monitoring', 'Real-time market analysis', 'Customer financial advisory', 'Integration with banking systems']
    }
  ];

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile', 'Business Intelligence', 'Marketing', 'Healthcare', 'Finance'];

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