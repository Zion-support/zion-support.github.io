'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Users, Code, Eye, FileText, Target, Clock, DollarSign, TrendingUp, Database, Cloud, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, MessageSquare, BarChart3, Clock, TrendingUp } from 'lucide-react';
import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, MessageSquare, BarChart3, Clock, TrendingUp } from 'lucide-react';
import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, MessageCircle, Calendar, Users, Eye, BarChart3, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Target } from 'lucide-react'
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, MessageSquare, BarChart3, Target, Clock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07

const AIServicesPage: React.FC = () => {
  const services = [
    {
<<<<<<< HEAD
      id: 'ai-content-generation',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (50+ languages)',
        'Brand voice training and customization',
        'Content templates and frameworks',
        'Plagiarism detection and originality scoring',
        'Content scheduling and automation',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Content & Marketing',
      popular: true,
      useCases: ['Content Marketing', 'Social Media Management', 'Blog Writing', 'Technical Documentation']
    },
    {
      id: 'ai-analytics-intelligence',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling',
      features: [
        'Real-time data processing and visualization',
        'Predictive analytics and forecasting',
        'Custom KPI dashboards and reports',
        'Automated anomaly detection',
        'Natural language query interface',
        'Machine learning model deployment',
        'Data integration and ETL processes',
        'ROI and performance optimization'
      ],
      pricing: 'Starting at $99/month',
      marketPrice: '$200-1000/month',
      category: 'Data & Analytics',
      popular: true,
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Performance Monitoring']
    },
    {
      id: 'ai-chatbot-builder',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance',
      features: [
        '24/7 customer support automation',
        'Lead qualification and scoring',
        'FAQ automation and knowledge base',
        'Multi-language support',
        'Integration with CRM systems',
        'Conversation analytics and insights',
        'Custom training and personality',
        'Voice and text support'
      ],
      pricing: 'Starting at $49/month',
      marketPrice: '$100-500/month',
      category: 'Customer Service',
      popular: true,
      useCases: ['Customer Support', 'Lead Generation', 'Sales Automation', 'Internal Help Desk']
    },
    {
      id: 'ai-automation',
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent AI-powered workflows and decision making',
      features: [
        'Workflow automation and orchestration',
        'Document processing and extraction',
        'Email and communication automation',
        'Data entry and validation',
        'Approval workflows and routing',
        'Exception handling and escalation',
        'Performance monitoring and optimization',
        'Custom rule creation and management'
      ],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Automation',
      popular: false,
      useCases: ['Document Processing', 'Email Automation', 'Data Entry', 'Approval Workflows']
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Data & Analytics', 'Customer Service', 'Automation']

      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Target, BarChart3, MessageSquare, Image, FileText, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI technology.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Plagiarism detection',
        'Multi-language support',
        'Content analytics'
      ],
      pricing: {
        basic: '$29.99/month',
        pro: '$59.99/month',
        enterprise: '$149.99/month'
      },
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that can handle customer inquiries, provide support, and automate conversations.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $99/month',
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Data visualization',
        'Custom metrics',
        'API integrations'
      ],
      pricing: {
        basic: '$39.99/month',
        pro: '$79.99/month',
        enterprise: '$199.99/month'
      },
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Intelligent email management with AI-powered writing, scheduling, and response optimization.',
      features: [
        'Smart email composition',
        'Auto-scheduling',
        'Response suggestions',
        'Email analytics',
        'Spam filtering',
        'Priority management'
      ],
      pricing: {
        basic: '$19.99/month',
        pro: '$39.99/month',
        enterprise: '$99.99/month'
      },
      link: '/ai-email-assistant'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: 'AI Voice Assistant',
      description: 'Advanced voice AI for customer service, virtual meetings, and hands-free business operations.',
      features: [
        'Natural voice synthesis',
        'Multi-language support',
        'Voice command processing',
        'Meeting transcription',
        'Voice analytics',
        'Custom voice training'
      ],
      pricing: {
        basic: '$34.99/month',
        pro: '$69.99/month',
        enterprise: '$179.99/month'
      },
      link: '/ai-voice-assistant'
    },
    {
      icon: <Settings className="w-12 h-12 text-red-500" />,
      title: 'AI Automation Suite',
      description: 'Comprehensive workflow automation with AI-powered decision making and process optimization.',
      features: [
        'Workflow automation',
        'AI decision making',
        'Process optimization',
        'Integration management',
        'Performance monitoring',
        'Custom automation rules'
      ],
      pricing: {
        basic: '$44.99/month',
        pro: '$89.99/month',
        enterprise: '$229.99/month'
      },
      link: '/ai-automation'
    },
    {
      icon: <Image className="w-12 h-12 text-pink-500" />,
      title: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models, animations, and visualizations using advanced AI generation technology.',
      features: [
        '3D model generation',
        'Animation creation',
        'Texture generation',
        'Lighting optimization',
        'Export to multiple formats',
        'Collaborative editing'
      ],
      pricing: {
        basic: '$59.99/month',
        pro: '$119.99/month',
        enterprise: '$299.99/month'
      },
      link: '/ai-3d-generation'
    },
    {
      icon: <Target className="w-12 h-12 text-teal-500" />,
      title: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform for pharmaceutical research and development.',
      features: [
        'Molecular analysis',
        'Drug interaction prediction',
        'Clinical trial optimization',
        'Regulatory compliance',
        'Research collaboration tools',
        'Patent analysis'
      ],
      pricing: {
        basic: '$199.99/month',
        pro: '$399.99/month',
        enterprise: '$999.99/month'
      },
      link: '/ai-drug-discovery-pro'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with powerful AI-driven analytics tools.',
      features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics',
      popular: false
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $79/month',
      link: '/ai-chatbot',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms.',
      features: ['Trend forecasting', 'Risk assessment', 'Performance prediction', 'Custom models'],
      pricing: 'Starting at $59/month',
      link: '/predictive-analytics',
      popular: false
    }
  ];

  const industrySolutions = [
    {
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Advanced AI Models',
      description: 'Powered by the latest AI models and machine learning algorithms.'
      title: 'Healthcare AI',
      description: 'AI solutions for medical diagnosis, patient care, and healthcare operations.',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      features: ['Medical imaging analysis', 'Patient data insights', 'Treatment recommendations', 'Drug interaction checking']
    },
    {
      title: 'Financial AI',
      description: 'AI-powered financial analysis, fraud detection, and investment optimization.',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      features: ['Risk assessment', 'Fraud detection', 'Investment analysis', 'Market prediction']
    },
    {
      title: 'E-commerce AI',
      description: 'AI solutions for online retail, customer experience, and sales optimization.',
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      features: ['Product recommendations', 'Price optimization', 'Customer behavior analysis', 'Inventory management']
    },
    {
      title: 'Manufacturing AI',
      description: 'AI-driven manufacturing optimization, quality control, and predictive maintenance.',
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning']
=======
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      price: 'Starting at $99/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions',
      features: ['Workflow automation', 'Data processing', 'Customer service bots', 'Predictive analytics'],
      price: 'Starting at $199/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security monitoring and threat detection',
      features: ['Real-time monitoring', 'Threat detection', 'Automated responses', 'Compliance reporting'],
      price: 'Starting at $299/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Web Development',
      description: 'Build intelligent websites and applications with AI integration',
      features: ['Smart user interfaces', 'Personalized experiences', 'Automated testing', 'Performance optimization'],
      price: 'Starting at $399/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      features: ['Predictive modeling', 'Real-time dashboards', 'Custom reports', 'Data visualization'],
      price: 'Starting at $249/month'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      title: 'AI Chatbots',
      description: 'Engage customers with intelligent conversational AI solutions',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      price: 'Starting at $149/month'
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      name: 'Dr. Sarah Williams',
      company: 'MedTech Innovations',
      content: 'The AI Drug Discovery Pro has accelerated our research by 300%. We discovered new compounds in weeks instead of months.',
      rating: 5,
      service: 'AI Drug Discovery Pro'
    },
    {
      name: 'James Rodriguez',
      company: 'TechCorp Solutions',
      content: 'Our AI Chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%.',
      rating: 5,
      service: 'AI Chatbot Builder'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Custom Solution',
      description: 'We design and develop tailored AI solutions for your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment and integration with your existing systems.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for maximum performance.'
    }
  ];
  ];
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Users, Clock, Sparkles, Rocket, Cpu } from 'lucide-react'
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Globe,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Cpu,
  Lock,
  Users,
  TrendingUp
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing and brand voice training',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics', 'Plagiarism detection', 'Content scheduling'],
      icon: FileText,
      path: '/ai-content-generator',
      category: 'Content Creation',
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support with multi-channel integration',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training', 'Live handoff', 'Analytics dashboard'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise',
      category: 'Customer Service',
      rating: 4.8,
      reviews: 89
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports', 'API integration', 'Data visualization', 'Automated alerts'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard',
      category: 'Analytics',
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models and animations with AI assistance for gaming, AR/VR, and marketing',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Rendering optimization', 'Asset library'],
      icon: Camera,
      path: '/ai-3d-generation',
      category: '3D & Graphics',
      rating: 4.7,
      reviews: 73
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and clinical trial optimization',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Patent analysis', 'Toxicity prediction'],
      icon: Brain,
      path: '/ai-drug-discovery-pro',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 45
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning and behavioral analysis',
      price: '$1,299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting', 'Vulnerability scanning', 'Incident response'],
      icon: Shield,
      path: '/ai-cybersecurity-suite',
      category: 'Security',
      rating: 4.8,
      reviews: 112
    },
    {
      name: 'AI Voice Assistant',
      description: 'Custom voice assistants with natural language understanding and multi-platform deployment',
      price: '$399/month',
      features: ['Voice recognition', 'Natural language processing', 'Multi-platform support', 'Custom wake words', 'Integration APIs', 'Analytics tracking'],
      icon: Users,
      path: '/ai-voice-assistant',
      category: 'Voice Technology',
      rating: 4.6,
      reviews: 67
    },
    {
      name: 'AI Email Assistant',
      description: 'Intelligent email management with smart replies, scheduling, and priority classification',
      price: '$199/month',
      features: ['Smart replies', 'Email scheduling', 'Priority classification', 'Spam filtering', 'Template suggestions', 'Sentiment analysis'],
      icon: MessageSquare,
      path: '/ai-email-assistant',
      category: 'Productivity',
      rating: 4.7,
      reviews: 94
    },
    {
      name: 'AI Automation Suite',
      description: 'Comprehensive automation platform for business processes and workflow optimization',
      price: '$599/month',
      features: ['Workflow automation', 'Process optimization', 'Integration connectors', 'Custom triggers', 'Performance monitoring', 'Error handling'],
      icon: Zap,
      path: '/ai-automation',
      category: 'Automation',
      rating: 4.8,
      reviews: 134
    }
  ];

  const categories = [
    { name: 'All Services', count: aiServices.length, active: true },
    { name: 'Content Creation', count: aiServices.filter(s => s.category === 'Content Creation').length, active: false },
    { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length, active: false },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: '3D & Graphics', count: aiServices.filter(s => s.category === '3D & Graphics').length, active: false },
    { name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length, active: false },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Voice Technology', count: aiServices.filter(s => s.category === 'Voice Technology').length, active: false },
    { name: 'Productivity', count: aiServices.filter(s => s.category === 'Productivity').length, active: false },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length, active: false }
  ];

  const benefits = [
    'Increase productivity by up to 80%',
    'Reduce operational costs by 60%',
    'Improve customer satisfaction',
    'Gain competitive advantage',
    'Scale without scaling staff',
    'Make data-driven decisions'
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> }
  ]
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
      benefits: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization']
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI content generation tools.',
      benefits: ['Blog posts', 'Marketing copy', 'Technical documentation', 'Social media content']
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent AI solutions.',
      benefits: ['Workflow automation', 'Task optimization', 'Error reduction', 'Cost savings']
      name: 'Lisa Chen',
      company: 'DataFlow Analytics',
      content: 'The AI Analytics Dashboard provides insights we never knew existed. Our decision-making process is now data-driven.',
      rating: 5,
      service: 'AI Analytics Dashboard'
    }
  ];

  const stats = [
    { number: '100,000+', label: 'AI Models Deployed' },
    { number: '99.8%', label: 'Accuracy Rate' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, analytics, chatbots, and automation. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, analytics, chatbots, automation, machine learning" />
      </Helmet>
      
      <Navigation />
      
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Advanced AI Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with our comprehensive suite of AI-powered services. From content generation to process automation, we provide cutting-edge solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Cutting-edge artificial intelligence solutions for your business. Leverage the power of AI to automate, optimize, and transform your operations.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'services'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.pricing}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, 3D generation, drug discovery, cybersecurity, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, chatbots, analytics, 3D generation, drug discovery, cybersecurity, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
=======
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock to serve your customers'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs while improving efficiency'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Grow your business with AI that scales with your needs'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Precision & Accuracy',
      description: 'AI delivers consistent, accurate results every time'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, automation, security, and analytics solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, automation, content generation, AI chatbots, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services That
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Transform</span>
              <br />
              Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, enhance customer experiences, and drive growth with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to meet your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-white mb-4">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                Our AI solutions are designed to deliver exceptional results with cutting-edge technology and expert support.
=======
                Experience the benefits of working with industry-leading AI solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
<<<<<<< HEAD
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
=======
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Learn More
                </Link>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our AI Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results through innovation, expertise, and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we deliver exceptional AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We combine cutting-edge AI technology with deep business expertise to deliver 
                  solutions that drive real results and competitive advantage.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can drive your success and automate your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
    <>
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Cutting-edge AI solutions for businesses. From content generation to drug discovery, we provide comprehensive AI services to transform your operations."
        keywords="ai services, artificial intelligence, machine learning, ai solutions, ai automation, ai analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Advanced AI Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence solutions designed for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                ))}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Contact our AI experts to discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Free AI Consultation
                </Link>
                <Link
                  to="/it-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View IT Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  );
}
      </div>
    </>
  );
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, content generation, process automation, and more. Transform your business with our AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, business intelligence, content generation, process automation, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI services help you automate processes, gain insights, and drive innovation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
=======
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
