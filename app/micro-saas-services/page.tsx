import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Zap, Star, Users, TrendingUp, BarChart3, Mail, Calendar, FileText, Camera, Headphones, CreditCard, Lock, Wifi, Cloud, Cpu, Target, Lightbulb, Rocket, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration'
      ],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity',
      setupTime: '5 minutes'
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics',
        'Tax preparation tools',
        'Multi-currency support',
        'Export to accounting software'
      ],
      pricing: '$15/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance',
      setupTime: '2 minutes'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security analysis and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Dark web monitoring'
      ],
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security',
      setupTime: '3 minutes'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Code Reviewer',
      description: 'Automated code review with AI-powered suggestions, security scanning, and best practices enforcement.',
      features: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality scoring',
        'Git integration',
        'Team collaboration tools'
      ],
      pricing: '$29/month',
      popular: false,
      link: '/ai-code-reviewer',
      category: 'Development',
      setupTime: '10 minutes'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Social Media Scheduler',
      description: 'Intelligent social media management with AI-powered content optimization and optimal posting times.',
      features: [
        'AI content optimization',
        'Optimal posting times',
        'Hashtag suggestions',
        'Multi-platform posting',
        'Analytics dashboard',
        'Content calendar'
      ],
      pricing: '$25/month',
      popular: true,
      link: '/ai-social-media-scheduler',
      category: 'Marketing',
      setupTime: '5 minutes'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Website Analyzer',
      description: 'Comprehensive website analysis with AI-powered SEO insights, performance optimization, and competitor analysis.',
      features: [
        'SEO analysis and recommendations',
        'Performance optimization',
        'Competitor analysis',
        'Content suggestions',
        'Technical audit',
        'Monthly reports'
      ],
      pricing: '$35/month',
      popular: false,
      link: '/ai-website-analyzer',
      category: 'SEO',
      setupTime: '15 minutes'
    },
    {
      icon: <Mail className="w-12 h-12 text-indigo-500" />,
      title: 'AI Email Signature Generator',
      description: 'Professional email signature generator with AI-powered design suggestions and brand consistency.',
      features: [
        'AI design suggestions',
        'Brand consistency check',
        'Multiple templates',
        'Social media integration',
        'Mobile optimization',
        'Team management'
      ],
      pricing: '$8/month',
      popular: false,
      link: '/ai-email-signature-generator',
      category: 'Communication',
      setupTime: '2 minutes'
    },
    {
      icon: <Calendar className="w-12 h-12 text-pink-500" />,
      title: 'AI Meeting Assistant',
      description: 'Smart meeting management with AI-powered scheduling, transcription, and action item extraction.',
      features: [
        'AI meeting transcription',
        'Action item extraction',
        'Smart scheduling',
        'Meeting analytics',
        'Integration with calendars',
        'Voice recognition'
      ],
      pricing: '$22/month',
      popular: true,
      link: '/ai-meeting-assistant',
      category: 'Productivity',
      setupTime: '5 minutes'
    },
    {
      icon: <FileText className="w-12 h-12 text-yellow-500" />,
      title: 'AI Document Processor',
      description: 'Intelligent document processing with AI-powered text extraction, classification, and data entry automation.',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data entry automation',
        'Form processing',
        'Batch processing',
        'API integration'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-document-processor',
      category: 'Automation',
      setupTime: '10 minutes'
    },
    {
      icon: <Camera className="w-12 h-12 text-teal-500" />,
      title: 'AI Image Optimizer',
      description: 'Advanced image optimization with AI-powered compression, format conversion, and quality enhancement.',
      features: [
        'AI-powered compression',
        'Format conversion',
        'Quality enhancement',
        'Batch processing',
        'CDN integration',
        'API access'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-image-optimizer',
      category: 'Media',
      setupTime: '3 minutes'
    },
    {
      icon: <Headphones className="w-12 h-12 text-violet-500" />,
      title: 'AI Voice Cloner',
      description: 'Professional voice cloning service with AI-powered voice synthesis and customization options.',
      features: [
        'High-quality voice cloning',
        'Multiple voice options',
        'Custom voice training',
        'Text-to-speech synthesis',
        'API integration',
        'Commercial licensing'
      ],
      pricing: '$45/month',
      popular: true,
      link: '/ai-voice-cloner',
      category: 'Media',
      setupTime: '20 minutes'
    },
    {
      icon: <CreditCard className="w-12 h-12 text-emerald-500" />,
      title: 'AI Invoice Generator',
      description: 'Smart invoice generation with AI-powered template suggestions and automated billing workflows.',
      features: [
        'AI template suggestions',
        'Automated billing',
        'Payment tracking',
        'Tax calculations',
        'Multi-currency support',
        'Client management'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Finance',
      setupTime: '5 minutes'
    }
  ];

  const categories = [
    { name: 'All', count: microSaasServices.length },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length },
    { name: 'Development', count: microSaasServices.filter(s => s.category === 'Development').length },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length },
    { name: 'SEO', count: microSaasServices.filter(s => s.category === 'SEO').length },
    { name: 'Communication', count: microSaasServices.filter(s => s.category === 'Communication').length },
    { name: 'Automation', count: microSaasServices.filter(s => s.category === 'Automation').length },
    { name: 'Media', count: microSaasServices.filter(s => s.category === 'Media').length }
  ];

  const benefits = [
    {
      title: 'Instant Setup',
      description: 'Get started in minutes with our one-click deployment',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Start from just $8/month with no hidden fees',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '500+', label: 'Micro SAAS Solutions' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS services designed to solve specific business problems with AI-powered solutions." />
        <meta name="keywords" content="micro saas, saas services, business tools, productivity apps, AI solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive collection of micro SAAS services designed to solve specific business problems 
              with AI-powered solutions. Each service is focused, affordable, and ready to deploy in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Micro SAAS Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="mb-4">
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="text-sm text-gray-400">Setup: {service.setupTime}</div>
                  </div>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our Micro SAAS Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose from our extensive collection of micro SAAS services and start solving your business challenges today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;
