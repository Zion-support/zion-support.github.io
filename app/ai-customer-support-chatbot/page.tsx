'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { CheckCircle, Star, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, MessageSquare, Sparkles, Phone, Calendar, Bot, ShoppingCart, CreditCard, Wrench, Heart, Globe, Zap, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, MessageSquare, Sparkles, Phone, Calendar, Bot, ArrowRight, Zap, Globe, Activity, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';
>>>>>>> origin/main

const AICustomerSupportChatbotPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding customer intent and providing accurate responses.',
      benefits: ['95% accuracy in understanding queries', 'Multi-language support', 'Context awareness', 'Sentiment analysis']
    },
    {
      icon: MessageSquare,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and escalation to human agents.',
      benefits: ['Instant response time', 'No waiting queues', 'Consistent service quality', 'Reduced support costs']
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms.',
      benefits: ['Website chat widget', 'Mobile app integration', 'Social media support', 'WhatsApp integration']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with customer insights and performance metrics.',
      benefits: ['Real-time analytics', 'Customer satisfaction tracking', 'Response time metrics', 'Conversion tracking']
    },
    {
      icon: Bot,
      title: 'Smart Escalation',
      description: 'Intelligent routing to human agents when complex issues require human intervention.',
      benefits: ['Seamless handoff', 'Context preservation', 'Priority queuing', 'Agent workload balancing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance with industry standards.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Data privacy protection']
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Handle 10x more inquiries',
    'Enable 24/7 support',
    'Improve resolution rates',
    'Scale support operations',
    'Enhance customer experience'
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns with AI assistance',
      icon: '🛒'
    },
    {
      title: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting for software and hardware',
      icon: '🔧'
    },
    {
      title: 'Billing & Payments',
      description: 'Assist with billing questions, payment issues, and account management',
      icon: '💳'
    },
    {
      title: 'Product Information',
      description: 'Answer questions about products, features, and specifications',
      icon: '📋'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Help customers schedule appointments and manage bookings',
      icon: '📅'
    },
    {
      title: 'General Inquiries',
      description: 'Handle general questions and provide information about services',
      icon: '❓'
    }
  ];

  return (
    <>
=======
      name: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns',
<<<<<<< HEAD
      icon: '🛒',
      features: ['Product recommendations', 'Order status', 'Return processing', 'Payment support']
    },
    {
      name: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting guidance',
      icon: '🔧',
      features: ['Troubleshooting guides', 'FAQ responses', 'Ticket creation', 'Escalation management']
    },
    {
      name: 'Healthcare Support',
      description: 'Patient inquiries, appointment scheduling, and medical information',
      icon: '🏥',
      features: ['Appointment booking', 'Medical FAQs', 'Insurance queries', 'Emergency routing']
    },
    {
      name: 'Financial Services',
      description: 'Banking support, account inquiries, and transaction assistance',
      icon: '🏦',
      features: ['Account information', 'Transaction support', 'Fraud prevention', 'Compliance assistance']
    },
    {
      name: 'Travel & Hospitality',
      description: 'Booking assistance, travel information, and customer service',
      icon: '✈️',
      features: ['Booking support', 'Travel updates', 'Cancellation handling', 'Loyalty program']
    },
    {
      name: 'Education Support',
      description: 'Student inquiries, course information, and academic assistance',
      icon: '🎓',
      features: ['Course information', 'Enrollment support', 'Academic guidance', 'Campus services']
=======
      icon: ShoppingCart,
      benefits: ['Order status updates', 'Product recommendations', 'Return processing', 'Shipping inquiries']
    },
    {
      name: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting',
      icon: Settings,
      benefits: ['Troubleshooting guides', 'FAQ responses', 'Ticket creation', 'Escalation to specialists']
    },
    {
      name: 'Lead Qualification',
      description: 'Qualify leads and schedule demos or consultations',
      icon: Target,
      benefits: ['Lead scoring', 'Appointment scheduling', 'Qualification questions', 'CRM integration']
    },
    {
      name: 'FAQ Automation',
      description: 'Answer frequently asked questions instantly',
      icon: HelpCircle,
      benefits: ['Instant responses', 'Knowledge base integration', 'Self-service options', 'Reduced ticket volume']
    },
    {
      name: 'Appointment Booking',
      description: 'Schedule appointments and manage calendars',
      icon: Calendar,
      benefits: ['Calendar integration', 'Availability checking', 'Confirmation emails', 'Reminder notifications']
    },
    {
      name: 'Complaint Handling',
      description: 'Process complaints and escalate when necessary',
      icon: AlertTriangle,
      benefits: ['Issue categorization', 'Priority assessment', 'Resolution tracking', 'Follow-up automation']
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'Reduce support costs by 60%',
    'Improve response time by 90%',
    'Increase customer satisfaction',
    'Scale support operations',
    'Provide 24/7 availability',
    'Handle multiple languages'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic chatbot',
        'Email support',
        '5 languages',
        'Standard integrations',
        '1,000 conversations/month',
        'Basic analytics'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> origin/main
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced chatbot',
        'Multi-channel support',
        'All languages',
        'Advanced integrations',
        '10,000 conversations/month',
        'Advanced analytics',
        'Custom training',
        'API access'
      ],
<<<<<<< HEAD
      popular: true
=======
      popular: true,
>>>>>>> origin/main
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom solutions',
        'White-label options',
        'Unlimited conversations',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Training & consulting'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> origin/main
    }
  ];

  const testimonials = [
    {
<<<<<<< HEAD
      name: 'Sarah Johnson',
      company: 'E-commerce Plus',
      role: 'Customer Service Manager',
      quote: 'AI chatbot reduced our support costs by 65% while improving customer satisfaction by 40%.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Tech Solutions Inc',
      role: 'VP of Operations',
      quote: 'The multilingual support helped us expand globally. Customer satisfaction increased dramatically.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Service Excellence Co',
      role: 'Customer Success Director',
      quote: '24/7 AI support transformed our operations. We now handle 5x more inquiries with better quality.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer support chatbot with 24/7 availability, multilingual support, and 95% customer satisfaction. Starting at $199/month." />
        <meta name="keywords" content="AI chatbot, customer support, virtual assistant, chatbot automation, multilingual support, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-support-chatbot" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="text-6xl mb-6 animate-bounce">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support Chatbot
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Intelligent 24/7 Customer Support
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your customer support with AI-powered chatbots that provide instant, 
              accurate, and personalized assistance across all channels.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Faster Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
=======
      name: 'Jennifer Lee',
      role: 'Customer Success Manager',
      company: 'Retail Plus',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfaction by 40%. Amazing results!',
      rating: 5,
    },
    {
      name: 'Robert Martinez',
      role: 'Operations Director',
      company: 'Tech Solutions',
      content: 'The chatbot handles 80% of our customer inquiries automatically. Our support team can now focus on complex issues.',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Customer Experience',
      company: 'E-commerce Giant',
      content: 'Best customer support solution we\'ve implemented. The AI understanding and response quality is exceptional.',
      rating: 5,
    }
  ];

  const stats = [
    { icon: MessageSquare, value: '5,000+', label: 'Active Chatbots' },
    { icon: Users, value: '1 M+', label: 'Conversations Handled' },
    { icon: TrendingUp, value: '60%', label: 'Ticket Reduction' },
    { icon: Clock, value: '24/7', label: 'Availability' }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with our AI Customer Support Chatbot. 24/7 availability, natural language processing, and intelligent escalation for better customer experience." />
        <meta name="keywords" content="AI chatbot, customer support chatbot, virtual assistant, customer service automation, AI support bot" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support Chatbot
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with our AI Customer Support Chatbot. 24/7 availability, 
              natural language processing, and intelligent escalation for better customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
=======
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center"></div>
          <div className="inline-flex items-center bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Sparkles className="w-4 h-4 mr-2" >AI-Powered Customer Support<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">AI Customer Support Chatbot<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your customer support with AI-powered chatbots that provide instant, accurate responses 24/7.</p>
        <div className="max-w-7xl mx-auto text-center"></section>
          <div className="inline-flex items-center bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Sparkles className="w-4 h-4 mr-2" >AI-Powered Customer Support<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">AI Customer Support Chatbot</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your customer support with AI-powered chatbots that provide instant, accurate responses 24/7.</p>
            Reduce support costs by 60% while improving customer satisfaction.</p>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">{stats.map((stat, index) => (</div>
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Customer Support;
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Customer Support Chatbot;</h1>
          </h1>,
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Transform your customer support with AI-powered chatbots that provide instant, accurate responses 24/7.
            Reduce support costs by 60% while improving customer satisfaction.
          </p>)
)
          {/* Stats */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">),
            {stats.map((stat, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div><div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Customer Support Chatbot combines cutting-edge technology with customer expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
          {/* CTA Buttons */}
          <div className="flex flex-col sm: flex-row gap-4 justify-center mb-12"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" >Call (302) 464-0950<a
              href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot Demo"
              className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            >Get Free Demo</a>
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot Demo"
              className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo;
            </a>
          </div>
        </div>,
      </section>,
,
      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Powerful Use Cases<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}<p className="text-gray-300 mb-4">{useCase.description}<ul className="space-y-2">{useCase.benefits.map((benefit, benefitIndex) => (</ul>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Use Cases;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,</div>
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Powerful Use Cases</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}</h3><p className="text-gray-300 mb-4">{useCase.description}</p><ul className="space-y-2">{useCase.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Advanced AI Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced AI Features;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,</div>
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Advanced AI Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered customer support capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy AI chatbots across various industries and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{useCase.name}</h3>
                  <p className="text-gray-300 mb-6 text-center">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                        <span className="text-cyan-400 font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Chatbot?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer support with intelligent automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Chatbot Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right chatbot solution for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations transformed their customer support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Your AI Chatbot?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your AI-powered customer support transformation today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
=======
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Simple, Transparent Pricing<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''} cyber-card`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''} cyber-card`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">,
            Simple, Transparent Pricing;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''} cyber-card`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span><span className="text-gray-300 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <a
                </ul>
                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot - ${plan.name} Plan`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover: from-green-600 hover:to-blue-700'}
                      : 'bg-white/20 text-white hover:bg-white/30'}
                  }`}
                >Get Started</a>
                >
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">What Our Customers Say<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Customers Say;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}<div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">What Our Customers Say</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From e-commerce to technical support, our AI Customer Support Chatbot serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
=======
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Support?<p className="text-xl text-green-100 mb-8">Join thousands of businesses already using AI Customer Support Chatbot to improve their customer experience.</p>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses already using AI Customer Support Chatbot to improve their customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2><p className="text-xl text-green-100 mb-8">Join thousands of businesses already using AI Customer Support Chatbot to improve their customer experience.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >Call (302) 464-0950<a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >Email Us</a>
            >
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us;
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Support Chatbot?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of customer support with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Join thousands of businesses who are already using our AI Customer Support Chatbot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
>>>>>>> origin/main
                  Schedule Demo
                </button>
              </div>
            </div>
<<<<<<< HEAD
          </section>
        </main>
      </div>
=======
          </div>
        </section>
      </main>
>>>>>>> origin/main

      <Footer />
    </>
  );
};

export default AICustomerSupportChatbotPage;
