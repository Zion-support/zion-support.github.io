'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Database, Code, Smartphone, Cpu, Server, Wifi, Star, Users, Clock, DollarSign, BarChart3, MessageSquare, Eye, Target, TrendingUp, FileText, Mail, Calendar, CreditCard, Lock, PieChart, Settings, Camera, Headphones, MapPin, ShoppingCart, BookOpen, Gamepad2, Music, Video, Image, Download, Upload, Share2, Heart, ThumbsUp, Search, Filter, Sort, RefreshCw, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Copy, Edit, Trash2, Save, Send, Play, Pause, Stop, SkipBack, SkipForward, Volume2, VolumeX, Mic, MicOff, VideoOff, VideoOn, Phone, PhoneOff, WifiOff, WifiOn, Battery, BatteryCharging, Signal, SignalHigh, SignalLow, SignalZero, Bluetooth, BluetoothOff, Nfc, QrCode, Barcode, Tag, Tags, Hash, AtSign, Percent, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Calculator, Abacus, Ruler, Compass, Map, MapPin, Navigation, Route, Flag, Trophy, Medal, Award, Gift, Package, Box, Archive, Folder, FolderOpen, File, FileImage, FileVideo, FileAudio, FilePdf, FileWord, FileExcel, FilePowerpoint, FileZip, FileCode, FileJson, FileXml, FileCsv, FileHtml, FileCss, FileJs, FileTs, FileJsx, FileTsx, FileVue, FileSvelte, FilePhp, FilePython, FileJava, FileC, FileCpp, FileCsharp, FileGo, FileRust, FileSwift, FileKotlin, FileDart, FileLua, FileRuby, FilePerl, FileScala, FileHaskell, FileClojure, FileElixir, FileErlang, FileFsharp, FileOcaml, FileR, FileMatlab, FileJulia, FileBash, FilePowershell, FileDocker, FileKubernetes, FileTerraform, FileAnsible, FileJenkins, FileGit, FileGithub, FileGitlab, FileBitbucket } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation with SEO optimization.',
      features: ['Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Content Templates', 'Plagiarism Detection', 'Content Scheduling'],
      pricing: '$99/month',
      link: '/ai-content-generator',
      popular: true,
      users: '3,500+',
      rating: '4.9'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: ['Visual Chatbot Builder', 'Multi-channel Deployment', 'Advanced Analytics', 'Custom Integrations', '24/7 Monitoring', 'A/B Testing Tools'],
      pricing: '$199/month',
      link: '/ai-chatbot-builder',
      popular: false,
      users: '2,100+',
      rating: '4.8'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered security solution that protects your business from cyber threats and data breaches with real-time monitoring.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Vulnerability Scanning', 'Compliance Monitoring', 'Security Analytics', '24/7 SOC Support'],
      pricing: '$299/month',
      link: '/ai-cybersecurity',
      popular: true,
      users: '1,800+',
      rating: '4.9'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics and reporting platform with predictive modeling.',
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reporting', 'Data Visualization', 'API Integrations'],
      pricing: '$149/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      users: '2,800+',
      rating: '4.7'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, priority classification, and spam filtering for maximum productivity.',
      features: ['Smart Responses', 'Email Scheduling', 'Priority Classification', 'Spam Detection', 'Template Library', 'Multi-language Support'],
      pricing: '$49/month',
      link: '/ai-email-assistant',
      popular: false,
      users: '2,200+',
      rating: '4.6'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants for mobile and web applications with natural language understanding and multi-platform support.',
      features: ['Voice Recognition', 'Multi-language', 'Custom Commands', 'Integration APIs', 'Real-time Processing', 'Offline Capabilities'],
      pricing: '$79/month',
      link: '/ai-voice-assistant',
      popular: false,
      users: '1,600+',
      rating: '4.5'
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: 'AI Automation Suite',
      description: 'Complete automation solution for business processes using AI and machine learning with workflow optimization and error detection.',
      features: ['Workflow Automation', 'Process Optimization', 'Error Detection', 'Performance Monitoring', 'Custom Triggers', 'Integration Hub'],
      pricing: '$399/month',
      link: '/ai-automation',
      popular: true,
      users: '2,400+',
      rating: '4.8'
    },
    {
      icon: <Eye className="w-8 h-8 text-cyan-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis with object recognition, facial detection, and visual intelligence for various industries.',
      features: ['Object Recognition', 'Facial Detection', 'Quality Inspection', 'Visual Search', 'Real-time Processing', 'Custom Models'],
      pricing: '$199/month',
      link: '/ai-computer-vision',
      popular: false,
      users: '1,300+',
      rating: '4.7'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-teal-500" />,
      title: 'AI Conversational AI',
      description: 'Advanced conversational AI platform with natural language processing, sentiment analysis, and multi-channel support.',
      features: ['Natural Language Processing', 'Sentiment Analysis', 'Multi-channel Support', 'Intent Recognition', 'Integration APIs', 'Custom Training'],
      pricing: '$179/month',
      link: '/ai-conversational-ai',
      popular: false,
      users: '1,900+',
      rating: '4.6'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-rose-500" />,
      title: 'AI Predictive Analytics',
      description: 'Machine learning models for forecasting, trend analysis, and business intelligence with automated insights and reporting.',
      features: ['Predictive Modeling', 'Trend Analysis', 'Risk Assessment', 'Demand Forecasting', 'Performance Optimization', 'Custom Algorithms'],
      pricing: '$249/month',
      link: '/ai-predictive-analytics',
      popular: true,
      users: '1,700+',
      rating: '4.8'
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: 'AI HR & Recruitment',
      description: 'Automated resume screening, candidate matching, and HR process optimization with bias detection and performance analysis.',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Bias Detection', 'Performance Analysis', 'Talent Pipeline'],
      pricing: '$129/month',
      link: '/ai-hr-recruitment',
      popular: false,
      users: '1,400+',
      rating: '4.5'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-500" />,
      title: 'AI E-commerce Solutions',
      description: 'AI-powered e-commerce optimization with personalized recommendations, inventory management, and customer behavior analysis.',
      features: ['Personalized Recommendations', 'Inventory Management', 'Customer Behavior Analysis', 'Price Optimization', 'Fraud Detection', 'Sales Forecasting'],
      pricing: '$199/month',
      link: '/ai-ecommerce-solutions',
      popular: false,
      users: '2,000+',
      rating: '4.7'
    }
  ]

  const aiCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data patterns with continuous learning and optimization.'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities for better communication.'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Image and video analysis, object recognition, and visual intelligence solutions for various applications.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help you make informed business decisions with confidence.'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and business processes for maximum efficiency.'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'AI Ethics & Governance',
      description: 'Responsible AI implementation with bias detection and ethical guidelines for trustworthy AI systems.'
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock to serve your customers and optimize your operations without breaks.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'Our AI solutions scale with your business, handling increased demand automatically and efficiently.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Results',
      description: 'Our AI services have helped 500+ businesses increase efficiency by up to 300% and reduce costs significantly.'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Support' },
    { number: '50+', label: 'Languages Supported' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, NLP, computer vision, and predictive analytics from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your growth.
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
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <Link 
                  to={service.link} 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* AI Capabilities Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI expertise across all major domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI solutions are designed to deliver measurable results and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness AI Power?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
