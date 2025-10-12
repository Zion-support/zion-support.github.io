<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, MessageCircle, Calendar, Users, Eye, BarChart3, Shield, Globe, DollarSign, Star } from 'lucide-react';
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Target } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-c17c
=======
'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Target, BarChart3, MessageSquare, Image, FileText, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d

export default function AIServicesPage() {
  const aiServices = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
<<<<<<< HEAD
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI technology.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
      link: '/ai-content-generator',
      popular: true
    },
    {
<<<<<<< HEAD
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
<<<<<<< HEAD
      description: 'Create intelligent chatbots that can handle customer inquiries, provide support, and automate conversations.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $99/month',
=======
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent, conversational AI chatbots for customer service, sales, and support with advanced NLP capabilities.',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Sentiment analysis',
        'Custom training data',
        'Analytics dashboard',
        '24/7 availability'
      ],
      pricing: {
        basic: '$49.99/month',
        pro: '$99.99/month',
        enterprise: '$299.99/month'
      },
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
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
=======
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['24/7 customer support', 'Lead qualification', 'FAQ automation', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      price: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting', 'Data visualization', 'Trend analysis'],
      price: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management, scheduling, and responses with intelligent AI assistance.',
      features: ['Smart email sorting', 'Auto-responses', 'Meeting scheduling', 'Priority detection', 'Email templates', 'Spam filtering'],
      price: 'Starting at $19/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Integrate voice-activated AI assistants into your applications and workflows.',
      features: ['Voice commands', 'Speech recognition', 'Natural language processing', 'Multi-platform support', 'Custom wake words', 'API integration'],
      price: 'Starting at $59/month',
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Integration management', 'Custom triggers', 'Performance monitoring'],
      price: 'Starting at $79/month',
      link: '/ai-automation',
      popular: true
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-500" />,
      title: 'AI Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis', 'Quality control', 'Document processing'],
      price: 'Starting at $89/month',
      link: '/ai-computer-vision',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'AI Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend analysis', 'Risk assessment', 'Performance prediction', 'Scenario planning', 'Market forecasting', 'Customer behavior analysis'],
      price: 'Starting at $99/month',
      link: '/ai-predictive-analytics',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', 'Risk assessment', 'Incident response'],
      price: 'Starting at $149/month',
      link: '/ai-cybersecurity',
      popular: false
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
    }
  ];

  const industrySolutions = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Advanced AI Models',
      description: 'Powered by the latest AI models and machine learning algorithms.'
=======
      title: 'Healthcare AI',
      description: 'AI solutions for medical diagnosis, patient care, and healthcare operations.',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      features: ['Medical imaging analysis', 'Patient data insights', 'Treatment recommendations', 'Drug interaction checking']
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
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
    }
  ];

  const testimonials = [
    {
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
<<<<<<< HEAD
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
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
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge machine learning algorithms and neural networks for superior performance'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Real-time processing and instant responses for optimal user experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Worldwide deployment with multi-region support and 99.9% uptime'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c17c
=======
      name: 'Lisa Chen',
      company: 'DataFlow Analytics',
      content: 'The AI Analytics Dashboard provides insights we never knew existed. Our decision-making process is now data-driven.',
      rating: 5,
      service: 'AI Analytics Dashboard'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
    }
  ];

  const stats = [
    { number: '100,000+', label: 'AI Models Deployed' },
    { number: '99.8%', label: 'Accuracy Rate' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
<<<<<<< HEAD
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, machine learning" />
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
              </div>
            ))}
          </div>
        </div>
      </section>

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
=======
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
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to deliver exceptional results with cutting-edge technology and expert support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
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
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
<<<<<<< HEAD
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
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
<<<<<<< HEAD
              </Link>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Benefits Section */}
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can drive your success and automate your operations.
=======
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our AI experts today to discuss your requirements and discover how our solutions can drive your success.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
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
<<<<<<< HEAD
=======
      {/* Process Section */}
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
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      )}

      {/* CTA Section */}
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
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive AI services tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Basic:</span>
                        <span className="text-white font-semibold">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-white font-semibold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industry-Specific AI Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Tailored AI solutions for different industries and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Real results from businesses using our AI solutions
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
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness the Power of AI?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI solutions can transform your business operations and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free AI Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Micro SAAS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
  );
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
      </div>
    </>
  );
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c17c
}