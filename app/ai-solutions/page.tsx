'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  ChartBarIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ServerIcon,
  LockClosedIcon,
  CogIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  BeakerIcon,
  CommandLineIcon,
  DatabaseIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  PhotoIcon,
  CpuChipIcon as BrainIcon,
  CursorArrowRaysIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Content Generation',
      description: 'Generate high-quality content using advanced AI models for blogs, social media, marketing materials, and more.',
      price: '$299/month',
      features: ['Unlimited Content Generation', 'Multiple AI Models', 'Brand Voice Training', 'SEO Optimization', 'Multi-language Support'],
      icon: DocumentTextIcon,
      href: '/ai-content-generation',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights, predictive modeling, and automated reporting.',
      price: '$499/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Automated Reports', 'Custom Dashboards', 'Data Visualization'],
      icon: ChartBarIcon,
      href: '/ai-analytics-dashboard'
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and support automation with natural language processing and sentiment analysis.',
      price: '$199/month',
      features: ['AI Chatbot', 'Sentiment Analysis', 'Multi-language Support', 'Ticket Management', '24/7 Availability'],
      icon: ChatBubbleLeftRightIcon,
      href: '/ai-customer-support'
    },
    {
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant with code generation, debugging, and optimization capabilities.',
      price: '$399/month',
      features: ['Code Generation', 'Debugging Assistance', 'Code Review', 'Documentation Generation', 'Multi-language Support'],
      icon: CodeBracketIcon,
      href: '/ai-code-assistant'
    },
    {
      title: 'AI Image Generation',
      description: 'Create stunning images, logos, and graphics using advanced AI image generation models.',
      price: '$149/month',
      features: ['Image Generation', 'Style Transfer', 'Logo Creation', 'Photo Enhancement', 'Batch Processing'],
      icon: PhotoIcon,
      href: '/ai-image-generation'
    },
    {
      title: 'AI Video Creation',
      description: 'Generate professional videos, animations, and presentations using AI video generation technology.',
      price: '$599/month',
      features: ['Video Generation', 'Animation Creation', 'Voice Synthesis', 'Scene Generation', 'Auto-editing'],
      icon: VideoCameraIcon,
      href: '/ai-video-creation'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants with natural language processing and speech recognition capabilities.',
      price: '$349/month',
      features: ['Voice Recognition', 'Natural Language Processing', 'Custom Commands', 'Multi-language Support', 'Integration APIs'],
      icon: MicrophoneIcon,
      href: '/ai-voice-assistant'
    },
    {
      title: 'AI Data Analysis',
      description: 'Advanced data analysis with machine learning models for pattern recognition and predictive insights.',
      price: '$449/month',
      features: ['Pattern Recognition', 'Predictive Analytics', 'Data Mining', 'Statistical Analysis', 'Visualization'],
      icon: ChartPieIcon,
      href: '/ai-data-analysis'
    },
    {
      title: 'AI Process Automation',
      description: 'Automate business processes with AI-powered workflow optimization and intelligent decision making.',
      price: '$699/month',
      features: ['Workflow Automation', 'Decision Making', 'Process Optimization', 'Error Detection', 'Performance Monitoring'],
      icon: Cog6ToothIcon,
      href: '/ai-process-automation'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Custom ML models for your specific business needs',
      icon: BrainIcon,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and language understanding',
      icon: ChatBubbleLeftRightIcon,
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Content Generation']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis with AI-powered insights',
      icon: EyeIcon,
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analysis']
    },
    {
      title: 'Robotic Process Automation',
      description: 'Automate repetitive tasks with intelligent bots',
      icon: CogIcon,
      features: ['Task Automation', 'Data Extraction', 'Form Processing', 'Workflow Management']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 AI services',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '10GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Unlimited AI services',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        '100GB data storage',
        'API access',
        'Custom model training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI solutions',
        'Dedicated support team',
        'On-premise deployment',
        'Custom integrations',
        'Unlimited data storage',
        'Advanced security',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and automation services for modern businesses." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, AI automation, artificial intelligence services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform Your Business with Advanced Artificial Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Leverage cutting-edge AI technologies including machine learning, natural language processing, 
              computer vision, and automation to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get AI Consultation
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View AI Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve real business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-purple-400 font-semibold text-xl">{service.price}</span>
                </div>
                <ul className="text-sm text-gray-400 mb-6 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions leverage cutting-edge technologies to deliver powerful results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {capability.description}
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI solution package for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                tier.popular ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our AI experts today to discuss how artificial intelligence can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
            >
              Get AI Consultation
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
            >
              View All Pricing
              <CurrencyDollarIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsPage;