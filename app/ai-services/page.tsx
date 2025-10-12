<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Database, Code, Smartphone, Cpu, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import React from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Users, Clock, Sparkles, Rocket, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: [
        'Visual chatbot builder',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom integrations',
        '24/7 monitoring',
        'A/B testing tools'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Automated reports',
        'Custom dashboards',
        'Data integration',
        'Mobile app included'
      ],
      pricing: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management tool that drafts, schedules, and optimizes emails using AI to improve open rates and engagement.',
      features: [
        'Smart email drafting',
        'Send time optimization',
        'Subject line testing',
        'Email templates',
        'Performance analytics',
        'CRM integration'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant for businesses with natural language processing, voice commands, and integration capabilities.',
      features: [
        'Natural voice recognition',
        'Custom voice training',
        'Multi-language support',
        'API integrations',
        'Voice analytics',
        'Custom wake words'
      ],
      pricing: '$59/month',
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'AI Automation Suite',
      description: 'Complete workflow automation platform that uses AI to streamline business processes and reduce manual work.',
      features: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Integration hub',
        'Performance monitoring',
        'Custom triggers'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-automation'
=======
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation solutions.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring', 'Smart scheduling'],
      pricing: 'Starting at $49/month',
      link: '/ai-automation',
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', 'Real-time alerts'],
      pricing: 'Starting at $99/month',
      link: '/ai-cybersecurity',
      popular: false,
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement with no coding required.',
      features: ['Drag-and-drop builder', 'Multi-channel support', 'Natural language processing', 'Analytics dashboard', 'Custom integrations'],
      pricing: 'Starting at $39/month',
      link: '/ai-chatbot-builder',
      popular: true,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization tools.',
      features: ['Predictive analytics', 'Custom dashboards', 'Real-time reporting', 'Data visualization', 'Machine learning insights'],
      pricing: 'Starting at $79/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Eye className="w-8 h-8 text-pink-400" />,
      title: 'AI Computer Vision',
      description: 'Leverage computer vision technology for image recognition, object detection, and visual analysis.',
      features: ['Image classification', 'Object detection', 'Facial recognition', 'OCR capabilities', 'Custom model training'],
      pricing: 'Starting at $59/month',
      link: '/ai-computer-vision',
      popular: false,
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Advanced AI Models',
      description: 'Powered by state-of-the-art machine learning algorithms and neural networks'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing with sub-second response times'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: 'Global Scalability',
      description: 'Scale your AI solutions across multiple regions and languages'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
    }
  ]

<<<<<<< HEAD
  const stats = [
    { number: '10,000+', label: 'AI Models Trained' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'AI Services Available' },
    { number: '24/7', label: 'AI Support' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '300%', label: 'Efficiency Increase' }
  ];

  const features = [
    {
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language for better customer interactions.',
      icon: <MessageSquare className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Computer Vision',
      description: 'Analyze and interpret visual data for automated decision making.',
      icon: <Eye className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with AI insights.',
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />
    }
  ];
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, Brain, Bot, BarChart3, FileText, Shield, Globe, Smartphone, Database, Cloud, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality, SEO-optimized content for blogs, websites, marketing materials, and social media.',
      features: [
        'Blog posts and articles',
        'Product descriptions',
        'Social media content',
        'Email marketing campaigns',
        'Technical documentation',
        'Creative writing'
      ],
      pricing: 'Starting at $500/month',
      link: '/ai-content-generation',
      popular: true
    },
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI chatbots for customer support, lead generation, and sales automation.',
      features: [
        '24/7 customer support',
        'Multi-language support',
        'Integration with CRM systems',
        'Voice and text capabilities',
        'Custom training on your data',
        'Analytics and insights'
      ],
      pricing: 'Starting at $300/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics & Insights',
      description: 'Advanced AI-powered analytics to extract actionable insights from your business data.',
      features: [
        'Predictive analytics',
        'Customer behavior analysis',
        'Sales forecasting',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection'
      ],
      pricing: 'Starting at $400/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive business processes using AI to increase efficiency and reduce costs.',
      features: [
        'Document processing',
        'Email automation',
        'Data entry automation',
        'Workflow optimization',
        'Task scheduling',
        'Quality assurance'
      ],
      pricing: 'Starting at $800/month',
      link: '/ai-automation',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your business from cyber threats.',
      features: [
        'Threat detection',
        'Fraud prevention',
        'Network monitoring',
        'Incident response',
        'Security analytics',
        'Compliance monitoring'
      ],
      pricing: 'Starting at $1,200/month',
      link: '/ai-cybersecurity',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Customer Support',
      description: 'Comprehensive AI-powered customer support solutions for enhanced customer experience.',
      features: [
        'Multi-channel support',
        'Sentiment analysis',
        'Ticket routing',
        'Knowledge base integration',
        'Performance metrics',
        'Human handoff'
      ],
      pricing: 'Starting at $600/month',
      link: '/ai-customer-support',
      popular: false
    }
  ]

  const industries = [
    { name: 'Healthcare', icon: <Shield className="w-6 h-6" /> },
    { name: 'Finance', icon: <Database className="w-6 h-6" /> },
    { name: 'E-commerce', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Education', icon: <Brain className="w-6 h-6" /> },
    { name: 'Manufacturing', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Real Estate', icon: <Globe className="w-6 h-6" /> }
  ]

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '300%', label: 'Efficiency Increase' },
    { number: '24/7', label: 'AI Availability' }
  ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive AI services. From content generation to automation, 
              we provide cutting-edge artificial intelligence solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
=======
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, automation, and cybersecurity. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, AI analytics, process automation, AI cybersecurity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with our comprehensive AI solutions. From content generation to cybersecurity, 
              we provide cutting-edge artificial intelligence services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Free Consultation
              </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            </div>
=======
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI content generator has revolutionized our marketing team. We can now produce 10x more content with higher quality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI automation tools saved us 40 hours per week. The ROI was immediate and substantial.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'The AI chatbot increased our customer satisfaction by 60%. It handles 80% of inquiries automatically.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Transform your business with our comprehensive AI services including content generation, automation, cybersecurity, and analytics. Powered by cutting-edge machine learning."
        keywords="AI services, artificial intelligence, machine learning, content generation, automation, cybersecurity, analytics, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Advanced Artificial Intelligence Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
            Transform your business with our comprehensive AI services powered by cutting-edge machine learning. 
            From content generation to cybersecurity, we deliver intelligent solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View Micro SAAS
            </Link>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
          </div>
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
=======
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
                </div>
              </div>
            ))}
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">
                    {service.pricing}
                  </span>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Learn More
                </Link>
=======
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transform group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:text-white transition-colors">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
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

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are built with cutting-edge technology to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience the power of cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Our AI solutions are tailored for various industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-white font-semibold">{industry.name}</h3>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our AI services and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can drive your success. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/micro-saas-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Micro SAAS
                </Link>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can drive your success and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free AI Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <Footer />
    </div>
<<<<<<< HEAD
  );
};

export default AIServicesPage;
=======
  )
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
    </div>
  )
}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
