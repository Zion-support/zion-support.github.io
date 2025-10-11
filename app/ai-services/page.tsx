'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, Phone, Award, Sparkles, Rocket, Lock, Wifi, MessageSquare, ShoppingCart, CreditCard, PieChart, Activity, Layers, Workflow, Bot, Headphones, Camera, Video, Image, Music, Download, Upload, Search, Filter, Bell, AlertTriangle, CheckSquare, XCircle, Plus, Minus, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Share, ExternalLink, Info, HelpCircle, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, Menu, X, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, MoreHorizontal, MoreVertical, Settings2, User, UserPlus, UserMinus, UserCheck, UserX, Users2, UserCog, UserSearch, UserEdit, UserCheck2, UserPlus2, UserMinus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserCheck3, UserPlus3, UserMinus3, UserX3, UserCog3, UserSearch3, UserEdit3, UserCheck4, UserPlus4, UserMinus4, UserX4, UserCog4, UserSearch4, UserEdit4, UserCheck5, UserPlus5, UserMinus5, UserX5, UserCog5, UserSearch5, UserEdit5, UserCheck6, UserPlus6, UserMinus6, UserX6, UserCog6, UserSearch6, UserEdit6, UserCheck7, UserPlus7, UserMinus7, UserX7, UserCog7, UserSearch7, UserEdit7, UserCheck8, UserPlus8, UserMinus8, UserX8, UserCog8, UserSearch8, UserEdit8, UserCheck9, UserPlus9, UserMinus9, UserX9, UserCog9, UserSearch9, UserEdit9, UserCheck10, UserPlus10, UserMinus10, UserX10, UserCog10, UserSearch10, UserEdit10 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  originalPrice?: string;
  features: string[];
  category: string;
  popular: boolean;
  new: boolean;
  icon: React.ComponentType<any>;
  color: string;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  pricing: {
    starter: { price: string; features: string[]; users: string };
    professional: { price: string; features: string[]; users: string; popular: boolean };
    enterprise: { price: string; features: string[]; users: string };
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices: AIService[] = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      longDescription: 'Transform your business data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive analytics, and automated reporting that helps you make data-driven decisions faster.',
      price: '$1,999/month',
      originalPrice: '$2,499/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering and segmentation',
        'Mobile-responsive design',
        'API access for custom integrations',
        'White-label options',
        '24/7 customer support'
      ],
      category: 'Analytics',
      popular: true,
      new: false,
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Increase revenue by 25% with data-driven insights',
        'Reduce reporting time by 80%',
        'Improve decision-making speed by 60%',
        'Identify new business opportunities',
        'Optimize marketing campaigns',
        'Track KPIs in real-time'
      ],
      useCases: [
        'E-commerce performance tracking',
        'Marketing campaign analysis',
        'Sales forecasting',
        'Customer behavior insights',
        'Financial reporting',
        'Operational efficiency monitoring'
      ],
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mailchimp', 'Zapier', 'Slack'],
      pricing: {
        starter: { price: '$999/month', features: ['5 dashboards', 'Basic analytics', 'Email support'], users: 'Up to 10 users' },
        professional: { price: '$1,999/month', features: ['Unlimited dashboards', 'AI insights', 'Priority support', 'API access'], users: 'Up to 50 users', popular: true },
        enterprise: { price: '$3,999/month', features: ['Custom integrations', 'White-label', 'Dedicated support', 'Advanced security'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-analytics'
      }
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that reduces manual work by 80% and increases efficiency.',
      longDescription: 'Revolutionize your business processes with our AI-powered automation platform. Automate repetitive tasks, optimize workflows, and free up your team to focus on high-value activities.',
      price: '$2,499/month',
      originalPrice: '$2,999/month',
      features: [
        'Intelligent process mapping',
        'Automated task execution',
        'Workflow optimization',
        'Exception handling',
        'Performance monitoring',
        'Custom automation rules',
        'Integration with 100+ tools',
        'Real-time notifications',
        'Analytics and reporting',
        'Scalable architecture'
      ],
      category: 'Automation',
      popular: true,
      new: false,
      icon: Workflow,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Reduce manual work by 80%',
        'Increase process efficiency by 60%',
        'Eliminate human errors',
        'Scale operations without additional staff',
        'Improve compliance and audit trails',
        'Reduce operational costs by 40%'
      ],
      useCases: [
        'Invoice processing automation',
        'Customer onboarding workflows',
        'Data entry and validation',
        'Report generation and distribution',
        'Lead qualification and routing',
        'Inventory management'
      ],
      integrations: ['Salesforce', 'HubSpot', 'QuickBooks', 'Xero', 'Slack', 'Microsoft Teams', 'Zapier', 'Google Workspace', 'Office 365', 'Stripe'],
      pricing: {
        starter: { price: '$1,499/month', features: ['10 workflows', 'Basic automation', 'Email support'], users: 'Up to 5 users' },
        professional: { price: '$2,499/month', features: ['Unlimited workflows', 'Advanced AI', 'Priority support', 'Custom integrations'], users: 'Up to 25 users', popular: true },
        enterprise: { price: '$4,999/month', features: ['Custom development', 'Dedicated support', 'Advanced security', 'SLA guarantee'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-automation'
      }
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Platform',
      description: 'Build intelligent chatbots with natural language processing and 24/7 availability.',
      longDescription: 'Create sophisticated chatbots that understand context, learn from interactions, and provide instant, accurate responses. Reduce support costs while improving customer satisfaction.',
      price: '$1,499/month',
      originalPrice: '$1,999/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context-aware conversations',
        'Integration with CRM systems',
        'Custom knowledge base',
        'Escalation to human agents',
        'Analytics and insights',
        'Custom branding',
        'API integration',
        'Mobile app support'
      ],
      category: 'Customer Service',
      popular: true,
      new: false,
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Reduce support costs by 40%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 35%',
        'Handle 80% of queries automatically',
        'Available 24/7',
        'Multilingual support'
      ],
      useCases: [
        'E-commerce customer support',
        'SaaS product assistance',
        'Lead qualification',
        'FAQ automation',
        'Appointment booking',
        'Order tracking'
      ],
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger', 'Telegram'],
      pricing: {
        starter: { price: '$799/month', features: ['500 conversations/month', 'Basic AI', 'Email support'], users: '1 website' },
        professional: { price: '$1,499/month', features: ['2,000 conversations/month', 'Advanced AI', 'Priority support', 'Custom branding'], users: '3 websites', popular: true },
        enterprise: { price: '$2,999/month', features: ['Unlimited conversations', 'Custom training', 'Dedicated support', 'Advanced analytics'], users: 'Unlimited websites' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-chatbot-builder'
      }
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions with threat detection and automated response.',
      longDescription: 'Protect your business with our comprehensive AI-powered cybersecurity platform that detects threats, monitors vulnerabilities, and responds to incidents automatically.',
      price: '$2,299/month',
      originalPrice: '$2,799/month',
      features: [
        'AI-powered threat detection',
        '24/7 security monitoring',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Real-time alerts',
        'Security analytics dashboard',
        'Penetration testing',
        'Security training',
        'Incident forensics'
      ],
      category: 'Security',
      popular: true,
      new: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 85%',
        'Ensure compliance with regulations',
        'Minimize downtime from breaches',
        'Protect customer data',
        'Maintain business continuity'
      ],
      useCases: [
        'Small business protection',
        'E-commerce security',
        'Healthcare compliance',
        'Financial services',
        'Government agencies',
        'Educational institutions'
      ],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Office 365', 'G Suite', 'Slack', 'PagerDuty', 'ServiceNow', 'Splunk', 'ELK Stack'],
      pricing: {
        starter: { price: '$1,299/month', features: ['Basic monitoring', 'Email alerts', 'Monthly reports'], users: 'Up to 25 devices' },
        professional: { price: '$2,299/month', features: ['Advanced AI detection', 'Real-time alerts', 'Priority support', 'Compliance reports'], users: 'Up to 100 devices', popular: true },
        enterprise: { price: '$4,599/month', features: ['Custom monitoring', 'Dedicated analyst', 'Penetration testing', 'Security training'], users: 'Unlimited devices' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-cybersecurity'
      }
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis with AI-powered recognition and processing.',
      longDescription: 'Leverage the power of computer vision to analyze images and videos, extract insights, and automate visual tasks. Perfect for quality control, security, and content analysis.',
      price: '$2,299/month',
      originalPrice: '$2,799/month',
      features: [
        'Object detection and recognition',
        'Facial recognition',
        'Text extraction (OCR)',
        'Image classification',
        'Video analysis',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Batch processing',
        'Cloud and edge deployment'
      ],
      category: 'Computer Vision',
      popular: false,
      new: true,
      icon: Eye,
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        'Automate visual quality control',
        'Improve security and surveillance',
        'Extract data from images',
        'Reduce manual inspection time by 90%',
        'Enable new business capabilities',
        'Scale visual analysis operations'
      ],
      useCases: [
        'Manufacturing quality control',
        'Retail inventory management',
        'Security surveillance',
        'Medical image analysis',
        'Document processing',
        'Content moderation'
      ],
      integrations: ['AWS Rekognition', 'Google Vision API', 'Azure Computer Vision', 'OpenCV', 'TensorFlow', 'PyTorch', 'REST APIs', 'Webhooks', 'Cloud Storage', 'Database Systems'],
      pricing: {
        starter: { price: '$1,299/month', features: ['1,000 images/month', 'Basic recognition', 'Email support'], users: 'Up to 5 users' },
        professional: { price: '$2,299/month', features: ['10,000 images/month', 'Advanced AI', 'Priority support', 'Custom models'], users: 'Up to 25 users', popular: true },
        enterprise: { price: '$4,599/month', features: ['Unlimited images', 'Custom training', 'Dedicated support', 'Edge deployment'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-computer-vision'
      }
    },
    {
      id: 'ai-voice-solutions',
      name: 'AI Voice Solutions',
      description: 'Advanced speech recognition and text-to-speech with natural language processing.',
      longDescription: 'Transform voice interactions with our AI-powered voice solutions. From speech recognition to text-to-speech, enable natural voice interfaces for your applications.',
      price: '$1,799/month',
      originalPrice: '$2,199/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice command recognition',
        'Multi-language support',
        'Real-time processing',
        'Custom voice training',
        'API integration',
        'Webhook support',
        'Audio file processing',
        'Live streaming support'
      ],
      category: 'Voice AI',
      popular: false,
      new: true,
      icon: Mic,
      color: 'from-teal-500 to-cyan-500',
      benefits: [
        'Enable hands-free interactions',
        'Improve accessibility',
        'Reduce typing time by 70%',
        'Support multiple languages',
        'Enhance user experience',
        'Enable voice-controlled applications'
      ],
      useCases: [
        'Voice assistants',
        'Call center automation',
        'Accessibility tools',
        'Voice search',
        'Audio transcription',
        'Interactive voice response'
      ],
      integrations: ['Amazon Polly', 'Google Cloud Speech', 'Azure Speech', 'WebRTC', 'Twilio', 'Vonage', 'REST APIs', 'WebSockets', 'Mobile SDKs', 'Web SDKs'],
      pricing: {
        starter: { price: '$999/month', features: ['1,000 minutes/month', 'Basic voices', 'Email support'], users: 'Up to 5 users' },
        professional: { price: '$1,799/month', features: ['10,000 minutes/month', 'Premium voices', 'Priority support', 'Custom voices'], users: 'Up to 25 users', popular: true },
        enterprise: { price: '$3,599/month', features: ['Unlimited minutes', 'Custom training', 'Dedicated support', 'Advanced features'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-voice-solutions'
      }
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
    { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/month', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace('/month', '').replace(',', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/month', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace('/month', '').replace(',', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.popular ? 1 : -1;
    }
  });

  const popularServices = aiServices.filter(service => service.popular);
  const newServices = aiServices.filter(service => service.new);

  const stats = [
    { icon: Users, value: '500+', label: 'AI Projects Delivered' },
    { icon: TrendingUp, value: '99.9%', label: 'Success Rate' },
    { icon: Shield, value: '100%', label: 'Secure & Compliant' },
    { icon: Zap, value: '24/7', label: 'AI Support' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, automation, chatbots, cybersecurity, computer vision, and voice solutions. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, chatbots, computer vision, voice AI, cybersecurity AI, business intelligence" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Services - Zion Tech Group | Advanced AI Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including analytics, automation, chatbots, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-services.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services - Zion Tech Group" />
        <meta name="twitter:description" content="Advanced AI solutions for business transformation" />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-ai-services.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services - Zion Tech Group",
            "description": "Comprehensive artificial intelligence services for business transformation",
            "url": "https://ziontechgroup.com/ai-services",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "Customer Service",
                "email": "kleber@ziontechgroup.com"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  Advanced AI Solutions
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  AI <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Services</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with our comprehensive AI services. From analytics to automation, 
                  we deliver cutting-edge artificial intelligence solutions that drive real results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="#services" 
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105 cyber-button"
                  >
                    Explore AI Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group cyber-button-secondary"
                  >
                    Get Free Consultation
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                {/* Key Benefits */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Free AI Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Custom AI Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>24/7 AI Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>ROI Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Services */}
          {popularServices.length > 0 && (
            <section id="services" className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Featured <span className="text-purple-400 neon-text-enhanced">AI Services</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our most popular AI solutions trusted by leading businesses
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {popularServices.slice(0, 6).map((service, index) => (
                    <div
                      key={service.id}
                      className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cyber-card"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          {service.popular && (
                            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </span>
                          )}
                          {service.new && (
                            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                        )}
                        <span className="text-sm text-gray-400 ml-2">/month</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex gap-2">
                        <a 
                          href={`/contact?service=${service.id}`}
                          className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Get Started
                        </a>
                        <a 
                          href={`#${service.id}`}
                          className="px-4 py-3 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Services Section */}
          <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  All <span className="text-cyan-400 neon-text-enhanced">AI Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Browse our complete collection of AI solutions
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-12">
                <div className="flex-1">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                >
                  {categories.map(category => (
                    <option key={category.name} value={category.name === 'All' ? 'all' : category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedServices.map((service, index) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cyber-card"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        {service.popular && (
                          <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                        {service.new && (
                          <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                            New
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-2">{service.category}</p>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-xl font-bold text-white">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      )}
                      <span className="text-sm text-gray-400 ml-1">/month</span>
                    </div>

                    <ul className="space-y-1 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <a 
                        href={`/contact?service=${service.id}`}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center py-2 px-3 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                      >
                        Get Started
                      </a>
                      <a 
                        href={`#${service.id}-details`}
                        className="px-3 py-2 border border-purple-400 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {sortedServices.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-lg">No AI services found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-3xl p-12 text-center backdrop-blur-sm hologram-card">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Get a free AI assessment and discover how our artificial intelligence solutions can 
                  revolutionize your business operations. No commitment required.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105 cyber-button"
                  >
                    Get Free AI Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group cyber-button-secondary"
                  >
                    Call Now: +1 302 464 0950
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a>
                  </p>
                  <p>
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;