'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  BrainIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ServerIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Solutions - Zion Tech Group",
    "description": "Advanced AI solutions for businesses. Machine learning, computer vision, natural language processing, and AI automation services.",
    "url": "https://ziontechgroup.com/ai-solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  const aiServices = [
    {
      id: 'machine-learning-platform',
      title: 'Machine Learning Platform',
      description: 'End-to-end ML platform for building, training, and deploying machine learning models at scale with automated MLOps.',
      features: [
        'Automated Model Training',
        'MLOps Pipeline',
        'Model Versioning',
        'A/B Testing',
        'Real-time Inference',
        'Model Monitoring',
        'Auto-scaling',
        'Multi-cloud Support'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['10 models', 'Basic monitoring', 'Email support'] },
        professional: { price: 799, period: 'month', features: ['50 models', 'Advanced monitoring', 'Priority support', 'Custom integrations'] },
        enterprise: { price: 1999, period: 'month', features: ['Unlimited models', 'Dedicated support', 'White-label', 'Custom infrastructure'] }
      },
      icon: BrainIcon,
      category: 'Machine Learning',
      marketPrice: '$299-1999/month',
      link: '/machine-learning-platform'
    },
    {
      id: 'computer-vision-suite',
      title: 'Computer Vision Suite',
      description: 'Advanced computer vision solutions for object detection, image recognition, facial analysis, and visual content understanding.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'OCR & Text Extraction',
        'Video Analysis',
        'Real-time Processing',
        'Custom Model Training',
        'API Integration'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1,000 images/month', 'Basic models', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['10,000 images/month', 'Advanced models', 'Priority support', 'Custom training'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited images', 'Custom models', 'Dedicated support', 'White-label'] }
      },
      icon: EyeIcon,
      category: 'Computer Vision',
      marketPrice: '$199-1299/month',
      link: '/computer-vision-suite'
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing Engine',
      description: 'Comprehensive NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      features: [
        'Text Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Conversational AI',
        'Custom Model Training',
        'Multi-language Support'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['100,000 requests/month', 'Basic models', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['1M requests/month', 'Advanced models', 'Priority support', 'Custom training'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited requests', 'Custom models', 'Dedicated support', 'White-label'] }
      },
      icon: ChatBubbleLeftRightIcon,
      category: 'NLP',
      marketPrice: '$149-999/month',
      link: '/natural-language-processing'
    },
    {
      id: 'ai-automation-platform',
      title: 'AI Automation Platform',
      description: 'Intelligent automation platform that combines RPA with AI to automate complex business processes and workflows.',
      features: [
        'Process Automation',
        'Intelligent Document Processing',
        'Workflow Optimization',
        'Exception Handling',
        'Process Mining',
        'Custom Automation',
        'Integration APIs',
        'Analytics Dashboard'
      ],
      pricing: {
        starter: { price: 249, period: 'month', features: ['5 automations', 'Basic features', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['25 automations', 'Advanced features', 'Priority support', 'Custom integrations'] },
        enterprise: { price: 1499, period: 'month', features: ['Unlimited automations', 'Custom features', 'Dedicated support', 'White-label'] }
      },
      icon: CogIcon,
      category: 'Automation',
      marketPrice: '$249-1499/month',
      link: '/ai-automation-platform'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics platform with AI-driven insights, predictive analytics, and automated reporting for data-driven decisions.',
      features: [
        'Predictive Analytics',
        'Automated Insights',
        'Real-time Dashboards',
        'Data Visualization',
        'Anomaly Detection',
        'Custom Reports',
        'API Integration',
        'Multi-source Data'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['5 data sources', 'Basic analytics', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['20 data sources', 'Advanced analytics', 'Priority support', 'Custom dashboards'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited sources', 'Custom analytics', 'Dedicated support', 'White-label'] }
      },
      icon: ChartBarIcon,
      category: 'Analytics',
      marketPrice: '$199-1299/month',
      link: '/ai-analytics-dashboard'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Suite',
      description: 'Comprehensive content generation platform using advanced AI models for text, images, videos, and multimedia content creation.',
      features: [
        'Text Generation',
        'Image Generation',
        'Video Creation',
        'Audio Synthesis',
        'Content Optimization',
        'Brand Consistency',
        'Multi-format Export',
        'Collaboration Tools'
      ],
      pricing: {
        starter: { price: 99, period: 'month', features: ['10,000 words/month', 'Basic models', 'Email support'] },
        professional: { price: 299, period: 'month', features: ['100,000 words/month', 'Advanced models', 'Priority support', 'Custom training'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited content', 'Custom models', 'Dedicated support', 'White-label'] }
      },
      icon: DocumentTextIcon,
      category: 'Content Generation',
      marketPrice: '$99-799/month',
      link: '/ai-content-generation'
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solutions for threat detection, fraud prevention, and automated security monitoring.',
      features: [
        'Threat Detection',
        'Fraud Prevention',
        'Anomaly Detection',
        'Automated Response',
        'Security Monitoring',
        'Risk Assessment',
        'Compliance Reporting',
        'Real-time Alerts'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Email support'] },
        professional: { price: 899, period: 'month', features: ['Advanced monitoring', 'Real-time alerts', 'Priority support', 'Custom rules'] },
        enterprise: { price: 1999, period: 'month', features: ['Full monitoring', 'Custom solutions', 'Dedicated support', 'White-label'] }
      },
      icon: ShieldCheckIcon,
      category: 'Cybersecurity',
      marketPrice: '$399-1999/month',
      link: '/ai-cybersecurity-suite'
    },
    {
      id: 'ai-customer-intelligence',
      title: 'AI Customer Intelligence Platform',
      description: 'Comprehensive customer intelligence platform with AI-powered insights, behavior analysis, and personalized recommendations.',
      features: [
        'Customer Segmentation',
        'Behavior Analysis',
        'Predictive Modeling',
        'Personalization Engine',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Recommendation Engine',
        'Real-time Insights'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['10,000 customers', 'Basic insights', 'Email support'] },
        professional: { price: 699, period: 'month', features: ['100,000 customers', 'Advanced insights', 'Priority support', 'Custom models'] },
        enterprise: { price: 1599, period: 'month', features: ['Unlimited customers', 'Custom intelligence', 'Dedicated support', 'White-label'] }
      },
      icon: UserGroupIcon,
      category: 'Customer Intelligence',
      marketPrice: '$299-1599/month',
      link: '/ai-customer-intelligence'
    }
  ];

  const categories = [
    'Machine Learning',
    'Computer Vision',
    'NLP',
    'Automation',
    'Analytics',
    'Content Generation',
    'Cybersecurity',
    'Customer Intelligence'
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for businesses. Machine learning, computer vision, natural language processing, and AI automation services with competitive pricing." />
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, AI automation, artificial intelligence, AI services" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for businesses. Machine learning, computer vision, natural language processing, and AI automation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              AI Solutions
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business with cutting-edge machine learning, computer vision, and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Overview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions covering all aspects of artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <BrainIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Advanced ML models and automated training pipelines for predictive analytics and intelligent decision making.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300 text-sm">Image recognition, object detection, and visual content analysis for automated visual processing.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Language</h3>
              <p className="text-gray-300 text-sm">Text analysis, sentiment detection, and conversational AI for intelligent language processing.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <CogIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
              <p className="text-gray-300 text-sm">Intelligent process automation and workflow optimization using AI-powered decision making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI solutions designed to address specific business challenges with cutting-edge technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              All Categories
            </button>
            {categories.map((category) => (
              <button key={category} className="px-6 py-2 bg-slate-700 text-gray-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-2xl font-bold text-purple-400">
                      ${service.pricing.starter.price}
                      <span className="text-sm text-gray-400">/{service.pricing.starter.period}</span>
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-4 py-2 border border-purple-500 text-purple-300 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful AI implementation and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery & Analysis</h3>
              <p className="text-gray-300">We analyze your business needs and identify AI opportunities for maximum impact.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution Design</h3>
              <p className="text-gray-300">We design custom AI solutions tailored to your specific requirements and constraints.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development & Training</h3>
              <p className="text-gray-300">We develop and train AI models using your data and industry best practices.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment & Support</h3>
              <p className="text-gray-300">We deploy your AI solution and provide ongoing support and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              AI Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent, competitive pricing for AI solutions with no hidden fees. Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                $99-399<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Plan</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $399-999<span className="text-lg text-gray-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI models
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Custom training
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                $999-1999<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom infrastructure
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited usage
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today to discuss your AI needs and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}