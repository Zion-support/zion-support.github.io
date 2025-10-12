'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, 
  Bot, Wand2, Search, Layers, Activity, PieChart, Zap as ZapIcon,
  Lightbulb, Cpu as CpuIcon, Network, Headphones, Camera, Video,
  BookOpen, UserCheck, CreditCard, Building, Car, Stethoscope,
  GraduationCap, Briefcase, Home, ShoppingBag, Gamepad2, Music,
  Palette, Scissors, Wrench, Gauge, Filter, RefreshCw, Download
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform',
      price: 'Starting at $2,500/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Natural language queries',
        'Automated reporting',
        'Multi-source data integration',
        'Anomaly detection',
        'ROI optimization'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      category: 'Analytics',
      popular: true,
      useCases: ['E-commerce optimization', 'Financial forecasting', 'Customer behavior analysis']
    },
    {
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions',
      price: 'Starting at $1,200/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Sentiment analysis',
        'Voice integration',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics'
      ],
      icon: Bot,
      color: 'from-green-500 to-teal-500',
      category: 'Conversational AI',
      popular: true,
      useCases: ['Customer support', 'Lead qualification', 'Internal helpdesk']
    },
    {
      title: 'AI Content Generation & Marketing',
      description: 'Create high-quality, engaging content at scale with AI-powered content generation',
      price: 'Starting at $800/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice training',
        'Multi-platform publishing',
        'Content calendar management',
        'Performance tracking'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      category: 'Content Creation',
      popular: false,
      useCases: ['Content marketing', 'Social media management', 'Email campaigns']
    },
    {
      title: 'AI Computer Vision & Image Analysis',
      description: 'Advanced image recognition and analysis for various business applications',
      price: 'Starting at $3,000/month',
      features: [
        'Object detection',
        'Facial recognition',
        'Quality control automation',
        'Medical image analysis',
        'Security monitoring',
        'Document processing',
        'Real-time video analysis',
        'Custom model training'
      ],
      icon: Eye,
      color: 'from-cyan-500 to-blue-500',
      category: 'Computer Vision',
      popular: false,
      useCases: ['Quality assurance', 'Security systems', 'Medical diagnostics']
    },
    {
      title: 'AI Voice Solutions & Speech Processing',
      description: 'Convert speech to text, text to speech, and voice command processing',
      price: 'Starting at $1,500/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice command recognition',
        'Multi-language support',
        'Real-time processing',
        'Voice biometrics',
        'Call center automation',
        'Audio transcription'
      ],
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      category: 'Voice AI',
      popular: false,
      useCases: ['Call centers', 'Accessibility tools', 'Voice assistants']
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      price: 'Starting at $2,000/month',
      features: [
        'Process mapping',
        'Intelligent routing',
        'Exception handling',
        'Integration APIs',
        'Performance monitoring',
        'Compliance tracking',
        'Resource optimization',
        'Scalable automation'
      ],
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500',
      category: 'Automation',
      popular: true,
      useCases: ['HR processes', 'Financial workflows', 'Customer onboarding']
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnostics, treatment planning, and patient care optimization',
      price: 'Starting at $5,000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Drug interaction checking',
        'Patient monitoring',
        'Clinical decision support',
        'HIPAA compliance',
        'Integration with EMR systems'
      ],
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      category: 'Healthcare',
      popular: false,
      useCases: ['Medical diagnostics', 'Treatment planning', 'Patient monitoring']
    },
    {
      title: 'AI Financial Services & Trading',
      description: 'Algorithmic trading, fraud detection, and financial risk assessment',
      price: 'Starting at $4,000/month',
      features: [
        'Algorithmic trading',
        'Fraud detection',
        'Risk assessment',
        'Credit scoring',
        'Market analysis',
        'Compliance monitoring',
        'Real-time alerts',
        'Regulatory reporting'
      ],
      icon: CreditCard,
      color: 'from-green-500 to-emerald-500',
      category: 'Financial',
      popular: false,
      useCases: ['Trading algorithms', 'Fraud prevention', 'Risk management']
    },
    {
      title: 'AI Document Processing & Intelligence',
      description: 'Extract, analyze, and process information from documents automatically',
      price: 'Starting at $1,800/month',
      features: [
        'Document classification',
        'Data extraction',
        'Contract analysis',
        'Invoice processing',
        'Compliance checking',
        'Version control',
        'Search and retrieval',
        'Multi-format support'
      ],
      icon: FileText,
      color: 'from-yellow-500 to-orange-500',
      category: 'Document AI',
      popular: false,
      useCases: ['Legal document review', 'Invoice processing', 'Contract management']
    },
    {
      title: 'AI Predictive Analytics & Forecasting',
      description: 'Predict future trends, customer behavior, and business outcomes',
      price: 'Starting at $2,200/month',
      features: [
        'Demand forecasting',
        'Customer churn prediction',
        'Sales forecasting',
        'Market trend analysis',
        'Risk prediction',
        'Resource planning',
        'Scenario modeling',
        'Real-time predictions'
      ],
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      category: 'Predictive Analytics',
      popular: true,
      useCases: ['Sales forecasting', 'Inventory management', 'Customer retention']
    },
    {
      title: 'AI HR & Talent Management',
      description: 'Intelligent recruitment, employee management, and performance optimization',
      price: 'Starting at $1,600/month',
      features: [
        'Resume screening',
        'Candidate matching',
        'Performance analysis',
        'Employee engagement',
        'Skills assessment',
        'Retention prediction',
        'Training recommendations',
        'Diversity analytics'
      ],
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      category: 'HR & Talent',
      popular: false,
      useCases: ['Recruitment', 'Performance management', 'Employee retention']
    },
    {
      title: 'AI E-commerce & Recommendation Engine',
      description: 'Personalized product recommendations and e-commerce optimization',
      price: 'Starting at $1,400/month',
      features: [
        'Product recommendations',
        'Personalized search',
        'Price optimization',
        'Inventory management',
        'Customer segmentation',
        'Cross-selling',
        'Upselling strategies',
        'A/B testing'
      ],
      icon: ShoppingBag,
      color: 'from-amber-500 to-yellow-500',
      category: 'E-commerce',
      popular: false,
      useCases: ['Online retail', 'Product recommendations', 'Pricing optimization']
    }
  ];

  const categories = ['All', 'Analytics', 'Conversational AI', 'Content Creation', 'Computer Vision', 'Voice AI', 'Automation', 'Healthcare', 'Financial', 'Document AI', 'Predictive Analytics', 'HR & Talent', 'E-commerce'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'AI Support', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, business intelligence" />
        <meta property="og:title" content="AI Services - Zion Tech Group | Advanced AI Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including analytics, chatbots, automation, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive unprecedented growth with our cutting-edge AI solutions.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400 text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify the perfect AI solutions for your business needs. 
              From consultation to implementation, we're here to guide your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;