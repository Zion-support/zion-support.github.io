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
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Advanced conversational AI with natural language understanding, context awareness, and multi-language support',
      icon: MessageSquare,
      category: 'Customer Service',
      price: 'Starting at $1,299/month',
      features: [
        'Natural language processing (NLP)',
        'Multi-channel support (web, mobile, social)',
        'Sentiment analysis & mood tracking',
        '24/7 availability & instant responses',
        'Custom training on your data',
        'Advanced analytics dashboard',
        'Integration with CRM systems',
        'Voice & text capabilities'
      ],
      benefits: 'Reduce support costs by 60%, improve response time by 90%, increase customer satisfaction by 40%'
    },
    {
      id: 2,
      title: 'AI Content Generation & Marketing',
      description: 'Revolutionary content creation powered by GPT-4 and custom models for blogs, social media, and marketing',
      icon: FileText,
      category: 'Content',
      price: 'Starting at $799/month',
      features: [
        'Blog post & article generation',
        'Social media content creation',
        'Email marketing campaigns',
        'Product descriptions & copywriting',
        'SEO optimization & keyword research',
        'Brand voice consistency',
        'Multi-language content',
        'Content performance analytics'
      ],
      benefits: 'Increase content output by 500%, reduce content costs by 70%, improve SEO rankings by 200%'
    },
    {
      id: 3,
      title: 'Predictive Analytics & Business Intelligence',
      description: 'Advanced machine learning models for forecasting, trend analysis, and data-driven decision making',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $2,499/month',
      features: [
        'Sales forecasting & revenue prediction',
        'Customer behavior analysis & segmentation',
        'Risk assessment & fraud detection',
        'Market trend analysis',
        'Real-time insights & alerts',
        'Custom dashboard creation',
        'Data visualization & reporting',
        'Automated report generation'
      ],
      benefits: 'Improve forecast accuracy by 85%, reduce decision time by 60%, increase revenue by 25%'
    },
    {
      id: 4,
      title: 'Computer Vision & Image Recognition',
      description: 'State-of-the-art image and video analysis for quality control, security, and automation',
      icon: Eye,
      category: 'Computer Vision',
      price: 'Starting at $1,899/month',
      features: [
        'Object detection & classification',
        'Facial recognition & verification',
        'Quality inspection & defect detection',
        'OCR & document processing',
        'Real-time video analysis',
        'Custom model training',
        'API integration',
        'Edge computing deployment'
      ],
      benefits: 'Reduce inspection time by 80%, improve accuracy by 95%, eliminate human error in quality control'
    },
    {
      id: 5,
      title: 'Voice AI & Speech Processing',
      description: 'Advanced speech recognition, text-to-speech, and voice command systems for enhanced user experience',
      icon: Mic,
      category: 'Voice AI',
      price: 'Starting at $1,199/month',
      features: [
        'Speech-to-text transcription',
        'Text-to-speech synthesis',
        'Voice command recognition',
        'Multi-language support (50+ languages)',
        'Noise cancellation & enhancement',
        'Custom voice model creation',
        'Real-time processing',
        'Integration with existing systems'
      ],
      benefits: 'Improve accessibility by 100%, reduce call center costs by 50%, enhance user experience significantly'
    },
    {
      id: 6,
      title: 'Intelligent Process Automation (IPA)',
      description: 'End-to-end automation of complex business processes with AI decision-making capabilities',
      icon: Zap,
      category: 'Automation',
      price: 'Starting at $1,599/month',
      features: [
        'Workflow automation & orchestration',
        'Document processing & data extraction',
        'Email automation & response',
        'Task scheduling & prioritization',
        'Exception handling & escalation',
        'Process optimization recommendations',
        'ROI tracking & analytics',
        'Custom automation rules'
      ],
      benefits: 'Reduce manual work by 75%, improve process efficiency by 200%, save 20+ hours per week'
    },
    {
      id: 7,
      title: 'AI Cybersecurity & Threat Detection',
      description: 'Next-generation security solutions using AI for threat detection, prevention, and response',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $2,999/month',
      features: [
        'Real-time threat detection',
        'Anomaly detection & behavioral analysis',
        'Fraud prevention & risk scoring',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring & reporting',
        'Security orchestration',
        '24/7 monitoring & alerts'
      ],
      benefits: 'Reduce security incidents by 90%, improve response time by 95%, ensure 100% compliance'
    },
    {
      id: 8,
      title: 'AI-Powered Mobile Applications',
      description: 'Intelligent mobile apps with AI features, offline processing, and personalized user experiences',
      icon: Box,
      category: 'Mobile',
      price: 'Starting at $8,999/project',
      features: [
        'AI-powered mobile features',
        'Offline AI processing',
        'Real-time inference & predictions',
        'Cross-platform development (iOS/Android)',
        'Performance optimization',
        'User personalization & recommendations',
        'Push notification intelligence',
        'App store optimization'
      ],
      benefits: 'Increase user engagement by 150%, improve app ratings by 40%, reduce development time by 50%'
    },
    {
      id: 9,
      title: 'AI Data Analytics & Insights',
      description: 'Advanced data processing, analysis, and visualization with AI-powered insights and recommendations',
      icon: Database,
      category: 'Data Analytics',
      price: 'Starting at $1,399/month',
      features: [
        'Big data processing & analysis',
        'Automated data cleaning & preparation',
        'Pattern recognition & anomaly detection',
        'Predictive modeling & forecasting',
        'Interactive dashboards & visualizations',
        'Real-time data streaming',
        'Data quality monitoring',
        'Custom analytics solutions'
      ],
      benefits: 'Process data 10x faster, uncover hidden insights, improve decision accuracy by 80%'
    },
    {
      id: 10,
      title: 'AI Customer Relationship Management',
      description: 'Intelligent CRM with AI-powered lead scoring, customer insights, and automated follow-ups',
      icon: Users,
      category: 'CRM',
      price: 'Starting at $1,799/month',
      features: [
        'AI-powered lead scoring & qualification',
        'Customer behavior prediction',
        'Automated follow-up sequences',
        'Sentiment analysis & mood tracking',
        'Sales forecasting & pipeline analysis',
        'Personalized recommendations',
        'Integration with existing tools',
        'Advanced reporting & analytics'
      ],
      benefits: 'Increase lead conversion by 45%, improve customer retention by 60%, boost sales by 35%'
    },
    {
      id: 11,
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Target,
      category: 'Supply Chain',
      price: 'Starting at $2,299/month',
      features: [
        'Demand forecasting & planning',
        'Inventory optimization & management',
        'Supplier performance analysis',
        'Logistics route optimization',
        'Risk assessment & mitigation',
        'Cost optimization recommendations',
        'Real-time tracking & monitoring',
        'Sustainability metrics'
      ],
      benefits: 'Reduce inventory costs by 30%, improve delivery times by 40%, increase efficiency by 55%'
    },
    {
      id: 12,
      title: 'AI Financial Analysis & Trading',
      description: 'Advanced financial modeling, risk assessment, and algorithmic trading solutions',
      icon: TrendingUp,
      category: 'Finance',
      price: 'Starting at $3,499/month',
      features: [
        'Financial modeling & forecasting',
        'Risk assessment & portfolio optimization',
        'Algorithmic trading strategies',
        'Fraud detection & prevention',
        'Credit scoring & assessment',
        'Market analysis & predictions',
        'Regulatory compliance monitoring',
        'Real-time financial insights'
      ],
      benefits: 'Improve investment returns by 25%, reduce risk by 40%, increase trading efficiency by 300%'
    }
  ];

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile', 'Data Analytics', 'CRM', 'Supply Chain', 'Finance'];

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

                {service.benefits && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <h4 className="text-sm font-medium text-green-400 mb-2">Proven Benefits:</h4>
                    <p className="text-sm text-gray-300">{service.benefits}</p>
                  </div>
                )}
                
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