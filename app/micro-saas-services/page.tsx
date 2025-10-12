import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star, Brain, Code, Smartphone, Database, MessageCircle, BarChart3, FileText, Camera, Mail, Calendar, CreditCard, Lock, Target, TrendingUp, Settings, Bell, Search, Filter, Download, Upload, Share2, Heart, ThumbsUp, Award, Rocket, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'Productivity', name: 'Productivity', icon: <Zap className="w-5 h-5" /> },
    { id: 'Finance', name: 'Finance', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'Marketing', name: 'Marketing', icon: <Target className="w-5 h-5" /> },
    { id: 'Analytics', name: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'Security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'Communication', name: 'Communication', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'Content', name: 'Content', icon: <FileText className="w-5 h-5" /> }
  ];

  const microSaasServices = [
    // Productivity Tools
    {
      id: 'ai-task-manager-pro',
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration',
        'Time tracking',
        'Project templates'
      ],
      pricing: '$19/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-task-manager-pro',
      category: 'Productivity',
      users: '2,500+',
      rating: '4.9',
      trial: '14-day free trial'
    },
    {
      id: 'ai-smart-calendar',
      icon: <Calendar className="w-12 h-12 text-purple-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling optimization, meeting insights, and time blocking.',
      features: [
        'AI meeting scheduling',
        'Time blocking optimization',
        'Meeting insights & analytics',
        'Integration with all major calendars',
        'Smart notifications',
        'Conflict resolution',
        'Recurring event management',
        'Team availability sync'
      ],
      pricing: '$14/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-smart-calendar',
      category: 'Productivity',
      users: '1,800+',
      rating: '4.8',
      trial: '7-day free trial'
    },
    {
      id: 'ai-note-taker',
      icon: <FileText className="w-12 h-12 text-green-500" />,
      title: 'AI Note Taker',
      description: 'Advanced note-taking with AI summarization, voice-to-text, and intelligent organization.',
      features: [
        'Voice-to-text transcription',
        'AI summarization',
        'Smart tagging system',
        'Search across all notes',
        'Collaborative editing',
        'Export to multiple formats',
        'OCR for images',
        'Meeting notes automation'
      ],
      pricing: '$12/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-note-taker',
      category: 'Productivity',
      users: '1,200+',
      rating: '4.7',
      trial: '10-day free trial'
    },

    // Finance Tools
    {
      id: 'ai-expense-tracker-pro',
      icon: <CreditCard className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker Pro',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: [
        'Receipt scanning with OCR',
        'Auto-categorization',
        'Budget alerts & tracking',
        'Tax preparation assistance',
        'Expense reports generation',
        'Multi-currency support',
        'Bank account integration',
        'Financial insights dashboard'
      ],
      pricing: '$15/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-expense-tracker-pro',
      category: 'Finance',
      users: '3,200+',
      rating: '4.8',
      trial: '14-day free trial'
    },
    {
      id: 'ai-invoice-generator',
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI templates, payment tracking, and client management.',
      features: [
        'AI template suggestions',
        'Client management system',
        'Payment tracking',
        'Tax calculations',
        'Multi-language support',
        'PDF generation',
        'Recurring invoices',
        'Payment reminders'
      ],
      pricing: '$18/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-invoice-generator',
      category: 'Finance',
      users: '1,900+',
      rating: '4.6',
      trial: '7-day free trial'
    },
    {
      id: 'ai-budget-planner',
      icon: <TrendingUp className="w-12 h-12 text-cyan-500" />,
      title: 'AI Budget Planner',
      description: 'Intelligent budget planning with AI insights, goal tracking, and financial forecasting.',
      features: [
        'AI budget recommendations',
        'Goal tracking & alerts',
        'Financial forecasting',
        'Spending pattern analysis',
        'Savings optimization',
        'Investment tracking',
        'Debt management tools',
        'Financial health score'
      ],
      pricing: '$22/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-budget-planner',
      category: 'Finance',
      users: '1,500+',
      rating: '4.7',
      trial: '14-day free trial'
    },

    // Marketing Tools
    {
      id: 'ai-social-media-manager',
      icon: <Share2 className="w-12 h-12 text-pink-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, and content optimization.',
      features: [
        'Auto-posting across platforms',
        'Engagement tracking',
        'Content optimization',
        'Hashtag research',
        'Performance analytics',
        'Scheduling optimization',
        'Brand voice training',
        'Competitor analysis'
      ],
      pricing: '$25/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      category: 'Marketing',
      users: '2,800+',
      rating: '4.8',
      trial: '14-day free trial'
    },
    {
      id: 'ai-email-marketing',
      icon: <Mail className="w-12 h-12 text-red-500" />,
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email campaigns with AI content generation, segmentation, and analytics.',
      features: [
        'AI content generation',
        'Smart segmentation',
        'A/B testing automation',
        'Send time optimization',
        'Subject line optimization',
        'Email templates library',
        'Performance analytics',
        'List management'
      ],
      pricing: '$29/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-email-marketing',
      category: 'Marketing',
      users: '2,100+',
      rating: '4.7',
      trial: '10-day free trial'
    },
    {
      id: 'ai-lead-generator',
      icon: <Target className="w-12 h-12 text-yellow-500" />,
      title: 'AI Lead Generator',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: [
        'Lead discovery automation',
        'Qualification scoring',
        'CRM integration',
        'Follow-up automation',
        'Contact enrichment',
        'Lead scoring',
        'Pipeline management',
        'Conversion tracking'
      ],
      pricing: '$39/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-lead-generator',
      category: 'Marketing',
      users: '1,700+',
      rating: '4.9',
      trial: '14-day free trial'
    },

    // Analytics Tools
    {
      id: 'ai-analytics-dashboard',
      icon: <BarChart3 className="w-12 h-12 text-indigo-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: [
        'Real-time analytics',
        'Predictive insights',
        'Custom dashboards',
        'Automated reports',
        'Data visualization',
        'Trend analysis',
        'Alert system',
        'API integration'
      ],
      pricing: '$49/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-analytics-dashboard',
      category: 'Analytics',
      users: '1,400+',
      rating: '4.6',
      trial: '7-day free trial'
    },
    {
      id: 'ai-website-analyzer',
      icon: <Search className="w-12 h-12 text-teal-500" />,
      title: 'AI Website Analyzer',
      description: 'Comprehensive website analysis with AI insights, SEO recommendations, and performance optimization.',
      features: [
        'SEO analysis & recommendations',
        'Performance optimization',
        'Content quality analysis',
        'Competitor analysis',
        'Technical audit',
        'Mobile optimization check',
        'Speed optimization',
        'Accessibility audit'
      ],
      pricing: '$35/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-website-analyzer',
      category: 'Analytics',
      users: '1,600+',
      rating: '4.8',
      trial: '10-day free trial'
    },

    // Security Tools
    {
      id: 'ai-password-manager',
      icon: <Lock className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication',
        'Dark web monitoring',
        'Security audit reports'
      ],
      pricing: '$12/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-password-manager',
      category: 'Security',
      users: '4,500+',
      rating: '4.9',
      trial: '30-day free trial'
    },
    {
      id: 'ai-cybersecurity-monitor',
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Cybersecurity Monitor',
      description: 'Real-time threat detection and security monitoring with AI-powered analysis.',
      features: [
        'Real-time threat detection',
        'Security monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Compliance reporting',
        'Security recommendations',
        'Threat intelligence',
        'Automated remediation'
      ],
      pricing: '$79/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
      category: 'Security',
      users: '800+',
      rating: '4.7',
      trial: '14-day free trial'
    },

    // Communication Tools
    {
      id: 'ai-email-assistant',
      icon: <Mail className="w-12 h-12 text-blue-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority classification.',
      features: [
        'Smart email sorting',
        'Auto-responses',
        'Email scheduling',
        'Priority classification',
        'Template library',
        'Sentiment analysis',
        'Follow-up reminders',
        'Email analytics'
      ],
      pricing: '$19/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-email-assistant',
      category: 'Communication',
      users: '2,200+',
      rating: '4.6',
      trial: '7-day free trial'
    },
    {
      id: 'ai-chatbot-builder',
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots with natural language processing and multi-platform deployment.',
      features: [
        'Drag-and-drop builder',
        'Natural language processing',
        'Multi-platform deployment',
        'Analytics dashboard',
        'Custom integrations',
        'Voice support',
        'Multi-language support',
        'A/B testing'
      ],
      pricing: '$39/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      category: 'Communication',
      users: '3,100+',
      rating: '4.8',
      trial: '14-day free trial'
    },

    // Content Tools
    {
      id: 'ai-content-writer-pro',
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization and brand voice customization.',
      features: [
        'SEO-optimized content',
        'Brand voice training',
        'Multi-language support',
        'Content scheduling',
        'Plagiarism detection',
        'Tone adjustment',
        'Content templates',
        'Performance tracking'
      ],
      pricing: '$29/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-writer-pro',
      category: 'Content',
      users: '4,200+',
      rating: '4.8',
      trial: '14-day free trial'
    },
    {
      id: 'ai-video-editor',
      icon: <Camera className="w-12 h-12 text-purple-500" />,
      title: 'AI Video Editor',
      description: 'Automated video editing with AI-powered cuts, transitions, and content optimization.',
      features: [
        'Auto-editing algorithms',
        'Smart transitions',
        'Content optimization',
        'Text-to-speech',
        'Subtitle generation',
        'Music synchronization',
        'Color correction',
        'Export optimization'
      ],
      pricing: '$45/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-video-editor',
      category: 'Content',
      users: '1,300+',
      rating: '4.7',
      trial: '10-day free trial'
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Intelligence',
      description: 'All our tools leverage cutting-edge AI to provide intelligent automation and insights.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and comprehensive data protection.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows in minutes.'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert team when you need it most.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '1 AI tool of choice',
        'Basic support',
        'Standard features',
        'Email support',
        '5GB storage',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 3 AI tools',
        'Priority support',
        'Advanced features',
        'Phone & email support',
        '50GB storage',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'All AI tools included',
        '24/7 dedicated support',
        'Custom features',
        'Dedicated account manager',
        'Unlimited storage',
        'Custom analytics',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager Pro has revolutionized how I organize my work. I\'m 40% more productive now.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'The expense tracker saves me hours every week. The AI categorization is incredibly accurate.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'The AI content writer helps me create engaging content faster than ever. Highly recommended!',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Kim',
      company: 'Marketing Manager',
      content: 'Our social media engagement increased by 300% since using the AI Social Media Manager.',
      rating: 5,
      avatar: 'DK'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use." />
        <meta name="keywords" content="micro saas, ai tools, productivity, business automation, zion tech group, software as a service" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium">AI-Powered Micro SaaS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful Micro SaaS
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Tools</span>
            <br />
            for Modern Professionals
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Rocket className="w-5 h-5 inline-block mr-2" />
              Get Started Today
            </Link>
            <Link
              to="#services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Search className="w-5 h-5 inline-block mr-2" />
              Explore Tools
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-300">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.8</div>
              <div className="text-gray-300">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each application is designed to solve a specific business challenge with AI-powered intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-xs">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="text-sm text-gray-400">{service.trial}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(parseFloat(service.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.users} users</div>
                  </div>
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105 flex items-center justify-center"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/20 hover:border-white/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105'
                      : 'border-2 border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from professionals who use our tools daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals already using our micro SaaS tools to work smarter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Link>
                <Link
                  to="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse All Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;