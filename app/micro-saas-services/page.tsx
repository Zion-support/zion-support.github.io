import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings, Mail, FileText, BarChart3, Camera, CreditCard, Calendar, MessageSquare, Database, Lock, TrendingUp, Target, Smartphone, Wifi, Cloud, Code, Palette, Search, Bell, Download, Upload, Eye, Edit, Trash2, Plus, Minus, RefreshCw, Play, Pause, Stop, Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Phone, PhoneOff, MapPin, Navigation, Compass, Home, Building, Car, Plane, Train, Ship, Bike, Walk, Run, Heart, Star as StarIcon, ThumbsUp, ThumbsDown, Share, Copy, Link, ExternalLink, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Grid, List, Layout, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Strikethrough, Type, Heading1, Heading2, Heading3, Quote, Code2, Terminal, Command, Keyboard, Mouse, Monitor, Laptop, Tablet, Smartphone as PhoneIcon, Watch, Headphones, Speaker, Printer, Scanner, HardDrive, Cpu, MemoryStick, Wifi as WifiIcon, Bluetooth, Usb, Hdmi, Power, Battery, BatteryCharging, Plug, Unplug, Lightbulb, Sun, Moon, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer, Droplets, Flame, Zap as Lightning, Snowflake, Sun as SunIcon, Moon as MoonIcon, Star as StarIcon2, Heart as HeartIcon, Smile, Frown, Meh, Laugh, Cry, Angry, Surprised, Confused, Kiss, Wink, Tongue, ThumbsUp as ThumbsUpIcon, ThumbsDown as ThumbsDownIcon, Clap, Wave, PointUp, PointDown, PointLeft, PointRight, OkHand, V, CrossedFingers, CallMe, Metal, Horns, Joy, Rage, Disappointed, Worried, Confounded, Hushed, OpenMouth, Grimacing, NeutralFace, Expressionless, Unamused, RollingEyes, Flushed, Persevere, Relieved, Pensive, Confused as ConfusedIcon, Hushed as HushedIcon, OpenMouth as OpenMouthIcon, Grimacing as GrimacingIcon, NeutralFace as NeutralFaceIcon, Expressionless as ExpressionlessIcon, Unamused as UnamusedIcon, RollingEyes as RollingEyesIcon, Flushed as FlushedIcon, Persevere as PersevereIcon, Relieved as RelievedIcon, Pensive as PensiveIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, articles, and marketing copy using advanced GPT-4 technology.',
      features: ['50+ content templates', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Plagiarism detection'],
      pricing: '$29/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content & Writing'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Analytics Dashboard AI',
      description: 'Transform your business data into actionable insights with AI-powered analytics and reporting.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Automated insights'],
      pricing: '$39/month',
      link: '/analytics-dashboard',
      popular: true,
      category: 'Analytics & Data'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'Expense Tracker AI',
      description: 'Automatically track, categorize, and analyze business expenses with receipt scanning and AI insights.',
      features: ['Receipt OCR scanning', 'Smart categorization', 'Budget alerts', 'Tax preparation', 'Multi-currency support'],
      pricing: '$19/month',
      link: '/expense-tracker',
      popular: true,
      category: 'Finance & Accounting'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Password Manager Enterprise',
      description: 'Secure password management with zero-knowledge encryption, breach monitoring, and team sharing.',
      features: ['Zero-knowledge encryption', 'Password generator', 'Breach monitoring', 'Team sharing', '2FA integration'],
      pricing: '$15/month',
      link: '/password-manager',
      popular: false,
      category: 'Security & Privacy'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: 'Email Marketing Automation',
      description: 'Create, send, and track email campaigns with AI-powered personalization and automation workflows.',
      features: ['Drag-and-drop builder', 'AI personalization', 'A/B testing', 'Advanced analytics', 'CRM integration'],
      pricing: '$25/month',
      link: '/email-marketing',
      popular: true,
      category: 'Marketing & Sales'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'Team Collaboration Hub',
      description: 'Enhance team productivity with integrated chat, file sharing, project management, and video calls.',
      features: ['Real-time messaging', 'File sharing', 'Project boards', 'Video conferencing', 'Screen sharing'],
      pricing: '$35/month',
      link: '/team-collaboration',
      popular: false,
      category: 'Productivity & Communication'
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: 'Smart Scheduling Assistant',
      description: 'AI-powered scheduling that finds optimal meeting times, manages conflicts, and sends automated reminders.',
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Calendar sync', 'Meeting analytics'],
      pricing: '$12/month',
      link: '/smart-scheduling',
      popular: false,
      category: 'Productivity & Communication'
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-500" />,
      title: 'AI Photo Editor Pro',
      description: 'Professional photo editing with AI-powered tools for background removal, enhancement, and batch processing.',
      features: ['AI background removal', 'Auto enhancement', 'Batch processing', 'Filters & effects', 'Cloud storage'],
      pricing: '$22/month',
      link: '/photo-editor',
      popular: true,
      category: 'Design & Media'
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: 'Document AI Processor',
      description: 'Extract, analyze, and process documents with OCR, data extraction, and intelligent document understanding.',
      features: ['OCR text extraction', 'Data extraction', 'Document classification', 'Form processing', 'API integration'],
      pricing: '$45/month',
      link: '/document-processor',
      popular: false,
      category: 'Business & Productivity'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
      title: 'Invoice Generator AI',
      description: 'Create professional invoices automatically with AI-powered pricing suggestions and payment tracking.',
      features: ['Auto invoice generation', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Client portal'],
      pricing: '$18/month',
      link: '/invoice-generator',
      popular: false,
      category: 'Finance & Accounting'
    },
    {
      icon: <Search className="w-8 h-8 text-amber-500" />,
      title: 'SEO Optimizer Pro',
      description: 'Optimize your website for search engines with AI-powered keyword research, content analysis, and ranking tracking.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audit'],
      pricing: '$32/month',
      link: '/seo-optimizer',
      popular: true,
      category: 'Marketing & Sales'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-violet-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and sales automation without coding.',
      features: ['No-code builder', 'Multi-channel support', 'AI training', 'Analytics dashboard', 'Integration APIs'],
      pricing: '$28/month',
      link: '/chatbot-builder',
      popular: true,
      category: 'Customer Service'
    },
    {
      icon: <Database className="w-8 h-8 text-slate-500" />,
      title: 'Database Management AI',
      description: 'Manage and optimize your databases with AI-powered insights, performance monitoring, and automated maintenance.',
      features: ['Performance monitoring', 'Query optimization', 'Automated backups', 'Security scanning', 'Scalability insights'],
      pricing: '$55/month',
      link: '/database-manager',
      popular: false,
      category: 'IT & Infrastructure'
    },
    {
      icon: <Lock className="w-8 h-8 text-rose-500" />,
      title: 'Security Audit AI',
      description: 'Comprehensive security auditing with vulnerability scanning, compliance checking, and threat detection.',
      features: ['Vulnerability scanning', 'Compliance checking', 'Threat detection', 'Security reports', 'Remediation guidance'],
      pricing: '$42/month',
      link: '/security-audit',
      popular: false,
      category: 'Security & Privacy'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-lime-500" />,
      title: 'Social Media Manager',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms with AI-powered insights.',
      features: ['Multi-platform posting', 'Content calendar', 'Engagement analytics', 'Hashtag optimization', 'Competitor tracking'],
      pricing: '$24/month',
      link: '/social-media-manager',
      popular: true,
      category: 'Marketing & Sales'
    },
    {
      icon: <Target className="w-8 h-8 text-sky-500" />,
      title: 'Lead Generation AI',
      description: 'Find and qualify potential customers using AI-powered lead scoring, contact discovery, and outreach automation.',
      features: ['Lead discovery', 'Contact enrichment', 'Lead scoring', 'Outreach automation', 'CRM integration'],
      pricing: '$38/month',
      link: '/lead-generation',
      popular: true,
      category: 'Marketing & Sales'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-fuchsia-500" />,
      title: 'Mobile App Builder',
      description: 'Create native mobile apps for iOS and Android without coding using our drag-and-drop app builder.',
      features: ['No-code builder', 'iOS & Android', 'App store deployment', 'Push notifications', 'Analytics integration'],
      pricing: '$49/month',
      link: '/app-builder',
      popular: false,
      category: 'Development & Design'
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: 'Network Monitor Pro',
      description: 'Monitor and optimize your network performance with real-time analytics, alerting, and troubleshooting tools.',
      features: ['Real-time monitoring', 'Performance analytics', 'Alert system', 'Troubleshooting tools', 'Historical data'],
      pricing: '$31/month',
      link: '/network-monitor',
      popular: false,
      category: 'IT & Infrastructure'
    },
    {
      icon: <Cloud className="w-8 h-8 text-azure-500" />,
      title: 'Cloud Backup AI',
      description: 'Automated cloud backup with AI-powered deduplication, versioning, and disaster recovery planning.',
      features: ['Automated backups', 'AI deduplication', 'Version control', 'Disaster recovery', 'Multi-cloud support'],
      pricing: '$16/month',
      link: '/cloud-backup',
      popular: false,
      category: 'IT & Infrastructure'
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: 'Code Review AI',
      description: 'Automated code review with AI-powered bug detection, security analysis, and performance optimization suggestions.',
      features: ['Bug detection', 'Security analysis', 'Performance optimization', 'Code quality metrics', 'Team collaboration'],
      pricing: '$41/month',
      link: '/code-review',
      popular: true,
      category: 'Development & Design'
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Affordable solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: <Settings className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupCo',
      content: 'The AI Content Generator saved us hours every week. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'TechFlow',
      content: 'Excellent value for money. The expense tracker is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'DataDriven Inc.',
      content: 'The analytics dashboard provided insights we never knew existed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use." />
        <meta name="keywords" content="micro SaaS, AI tools, productivity, business automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused applications designed to solve specific business challenges. 
            Get the tools you need without the complexity of enterprise software.
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
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-gray-400 ml-6">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-white">{service.pricing}</span>
                    <p className="text-xs text-gray-400">per month</p>
                  </div>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center group-hover:scale-105 transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions that deliver maximum value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of professionals already using our micro SaaS tools to work smarter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/micro-saas-services#tools"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Browse All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;