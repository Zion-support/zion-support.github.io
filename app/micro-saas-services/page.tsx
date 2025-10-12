import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users, Zap, Heart, Camera, FileText, BarChart3, Mail, Calendar, CreditCard, Target, TrendingUp, Lock, Eye, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    // Productivity & Task Management
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
      category: 'Productivity'
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered project analysis and productivity optimization.',
      features: [
        'Automatic time tracking',
        'Project analysis',
        'Productivity insights',
        'Team time reports',
        'Client billing integration',
        'Mobile time tracking'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-time-tracker',
      category: 'Productivity'
    },
    {
      icon: <Calendar className="w-12 h-12 text-yellow-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time zone handling.',
      features: [
        'AI meeting scheduling',
        'Time zone optimization',
        'Meeting insights',
        'Team coordination',
        'Integration with major calendars',
        'Smart notifications'
      ],
      pricing: '$22/month',
      popular: true,
      link: '/ai-smart-calendar',
      category: 'Productivity'
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: 'AI Goal Tracker',
      description: 'Smart goal setting and tracking with AI-powered insights and progress monitoring.',
      features: [
        'SMART goal templates',
        'Progress visualization',
        'AI-powered insights',
        'Habit tracking',
        'Milestone celebrations',
        'Team goal sharing'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-goal-tracker',
      category: 'Productivity'
    },

    // Finance & Business
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
      category: 'Finance'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI-powered financial forecasting and spending optimization.',
      features: [
        'AI financial forecasting',
        'Spending optimization',
        'Goal tracking',
        'Investment insights',
        'Bill reminders',
        'Financial reports'
      ],
      pricing: '$20/month',
      popular: false,
      link: '/ai-budget-planner',
      category: 'Finance'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: [
        'AI-generated templates',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Automated reminders'
      ],
      pricing: '$25/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Financial Analyzer',
      description: 'Advanced financial analysis with AI-powered insights, trend detection, and investment recommendations.',
      features: [
        'Portfolio analysis',
        'Risk assessment',
        'Market trend analysis',
        'Investment recommendations',
        'Tax optimization',
        'Retirement planning'
      ],
      pricing: '$35/month',
      popular: true,
      link: '/ai-financial-analyzer',
      category: 'Finance'
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-500" />,
      title: 'AI Payment Processor',
      description: 'Smart payment processing with fraud detection, automated reconciliation, and financial reporting.',
      features: [
        'Fraud detection',
        'Automated reconciliation',
        'Multi-payment methods',
        'Financial reporting',
        'Tax compliance',
        'API integration'
      ],
      pricing: '$30/month',
      popular: false,
      link: '/ai-payment-processor',
      category: 'Finance'
    },

    // Security & Privacy
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security'
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring with AI threat detection and automated response systems.',
      features: [
        'Threat detection',
        'Automated responses',
        'Security alerts',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Incident reporting'
      ],
      pricing: '$28/month',
      popular: false,
      link: '/ai-security-monitor',
      category: 'Security'
    },
    {
      icon: <Eye className="w-12 h-12 text-cyan-500" />,
      title: 'AI Privacy Guard',
      description: 'Comprehensive privacy protection with AI-powered data monitoring and privacy recommendations.',
      features: [
        'Data monitoring',
        'Privacy recommendations',
        'GDPR compliance',
        'Data anonymization',
        'Consent management',
        'Privacy reports'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-privacy-guard',
      category: 'Security'
    },

    // Health & Wellness
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor appointment scheduling',
        'Health data export'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans and nutrition guidance.',
      features: [
        'Personalized workouts',
        'Nutrition tracking',
        'Progress monitoring',
        'Goal setting',
        'Social features',
        'Wearable integration'
      ],
      pricing: '$24/month',
      popular: true,
      link: '/ai-fitness-coach',
      category: 'Health'
    },
    {
      icon: <Brain className="w-12 h-12 text-indigo-500" />,
      title: 'AI Mental Health',
      description: 'AI-powered mental health support with mood tracking, meditation guidance, and wellness tips.',
      features: [
        'Mood tracking',
        'Meditation guidance',
        'Stress management',
        'Sleep optimization',
        'Mindfulness exercises',
        'Professional referrals'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-mental-health',
      category: 'Health'
    },

    // Content & Marketing
    {
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Writer',
      description: 'Advanced content creation with AI-powered writing assistance, SEO optimization, and brand voice matching.',
      features: [
        'AI writing assistance',
        'SEO optimization',
        'Brand voice matching',
        'Content templates',
        'Plagiarism detection',
        'Multi-language support'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-writer',
      category: 'Content'
    },
    {
      icon: <Camera className="w-12 h-12 text-pink-500" />,
      title: 'AI Image Generator',
      description: 'Professional image creation with AI-powered design tools, templates, and brand customization.',
      features: [
        'AI image generation',
        'Design templates',
        'Brand customization',
        'Stock photo library',
        'Image editing tools',
        'Social media formats'
      ],
      pricing: '$26/month',
      popular: false,
      link: '/ai-image-generator',
      category: 'Content'
    },
    {
      icon: <Mail className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing with AI-powered personalization, A/B testing, and campaign optimization.',
      features: [
        'AI personalization',
        'A/B testing',
        'Campaign optimization',
        'Email templates',
        'Analytics dashboard',
        'Automation workflows'
      ],
      pricing: '$32/month',
      popular: true,
      link: '/ai-email-marketing',
      category: 'Marketing'
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: 'AI Lead Generator',
      description: 'Automated lead generation with AI-powered prospecting, qualification, and nurturing systems.',
      features: [
        'AI prospecting',
        'Lead qualification',
        'Automated nurturing',
        'CRM integration',
        'Performance analytics',
        'Custom workflows'
      ],
      pricing: '$45/month',
      popular: false,
      link: '/ai-lead-generator',
      category: 'Marketing'
    },

    // E-commerce & Sales
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: 'AI E-commerce Optimizer',
      description: 'Smart e-commerce optimization with AI-powered product recommendations, pricing, and conversion analysis.',
      features: [
        'Product recommendations',
        'Dynamic pricing',
        'Conversion optimization',
        'Inventory management',
        'Customer insights',
        'A/B testing'
      ],
      pricing: '$42/month',
      popular: true,
      link: '/ai-ecommerce-optimizer',
      category: 'E-commerce'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'AI Customer Service',
      description: 'Intelligent customer service with AI chatbots, ticket routing, and automated responses.',
      features: [
        'AI chatbots',
        'Ticket routing',
        'Automated responses',
        'Knowledge base',
        'Multi-channel support',
        'Performance analytics'
      ],
      pricing: '$38/month',
      popular: false,
      link: '/ai-customer-service',
      category: 'E-commerce'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-500" />,
      title: 'AI Sales Analytics',
      description: 'Advanced sales analytics with AI-powered forecasting, pipeline management, and performance insights.',
      features: [
        'Sales forecasting',
        'Pipeline management',
        'Performance insights',
        'Lead scoring',
        'Revenue optimization',
        'Custom dashboards'
      ],
      pricing: '$35/month',
      popular: false,
      link: '/ai-sales-analytics',
      category: 'Sales'
    },

    // Education & Learning
    {
      icon: <FileText className="w-12 h-12 text-indigo-500" />,
      title: 'AI Learning Platform',
      description: 'Personalized learning platform with AI-powered course recommendations and adaptive learning paths.',
      features: [
        'Personalized courses',
        'Adaptive learning',
        'Progress tracking',
        'Skill assessments',
        'Certification programs',
        'Mobile learning'
      ],
      pricing: '$27/month',
      popular: true,
      link: '/ai-learning-platform',
      category: 'Education'
    },
    {
      icon: <Zap className="w-12 h-12 text-pink-500" />,
      title: 'AI Language Tutor',
      description: 'AI-powered language learning with speech recognition, pronunciation coaching, and conversation practice.',
      features: [
        'Speech recognition',
        'Pronunciation coaching',
        'Conversation practice',
        'Grammar correction',
        'Vocabulary building',
        'Progress tracking'
      ],
      pricing: '$21/month',
      popular: false,
      link: '/ai-language-tutor',
      category: 'Education'
    },

    // Real Estate & Property
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: 'AI Property Manager',
      description: 'Smart property management with AI-powered tenant screening, maintenance scheduling, and financial tracking.',
      features: [
        'Tenant screening',
        'Maintenance scheduling',
        'Financial tracking',
        'Rent optimization',
        'Document management',
        'Tenant communication'
      ],
      pricing: '$33/month',
      popular: false,
      link: '/ai-property-manager',
      category: 'Real Estate'
    },
    {
      icon: <Home className="w-12 h-12 text-green-500" />,
      title: 'AI Home Automation',
      description: 'Intelligent home automation with AI-powered energy management, security monitoring, and smart controls.',
      features: [
        'Energy management',
        'Security monitoring',
        'Smart controls',
        'Predictive maintenance',
        'Voice integration',
        'Mobile app control'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-home-automation',
      category: 'Smart Home'
    },

    // Travel & Hospitality
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with AI-powered itinerary optimization, booking management, and local recommendations.',
      features: [
        'Itinerary optimization',
        'Booking management',
        'Local recommendations',
        'Price monitoring',
        'Travel alerts',
        'Expense tracking'
      ],
      pricing: '$24/month',
      popular: false,
      link: '/ai-travel-planner',
      category: 'Travel'
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: 'AI Hotel Manager',
      description: 'Smart hotel management with AI-powered guest services, revenue optimization, and operational efficiency.',
      features: [
        'Guest services',
        'Revenue optimization',
        'Operational efficiency',
        'Guest feedback analysis',
        'Staff scheduling',
        'Inventory management'
      ],
      pricing: '$47/month',
      popular: false,
      link: '/ai-hotel-manager',
      category: 'Hospitality'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Health', 'Content', 'Marketing', 'E-commerce', 'Education', 'Real Estate', 'Travel'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '4,000+', label: 'Active Users' },
    { number: '30+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable, intelligent tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity software, business automation, AI applications" />
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
              Powerful AI-driven micro software solutions designed to streamline your business operations, 
              boost productivity, and solve specific business challenges with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Micro SAAS Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Try Free
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Simple Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">$12<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    1 Micro SAAS App
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Mobile App Access
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 Micro SAAS Apps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API Access
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited Micro SAAS Apps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Premium AI Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Phone Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Account Manager
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Micro SAAS?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Get the benefits of enterprise software at a fraction of the cost
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
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
