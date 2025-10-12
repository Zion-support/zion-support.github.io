'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users, TrendingUp, Target, Zap, Mail, BarChart3, FileText, Calendar, CreditCard, Lock, PieChart, Settings, Wifi, Camera, Headphones, MapPin, ShoppingCart, MessageSquare, BookOpen, Gamepad2, Music, Video, Image, Download, Upload, Share2, Heart, ThumbsUp, Eye, Search, Filter, Sort, RefreshCw, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Copy, Edit, Trash2, Save, Send, Play, Pause, Stop, SkipBack, SkipForward, Volume2, VolumeX, Mic, MicOff, VideoOff, VideoOn, Phone, PhoneOff, WifiOff, WifiOn, Battery, BatteryCharging, Signal, SignalHigh, SignalLow, SignalZero, Wifi, WifiOff, Bluetooth, BluetoothOff, Nfc, QrCode, Barcode, Tag, Tags, Hash, AtSign, Percent, DollarSign, Euro, Pound, Yen, Bitcoin, CreditCard, Wallet, Banknote, Coins, Receipt, Calculator, Abacus, Ruler, Compass, Map, MapPin, Navigation, Route, Flag, Trophy, Medal, Award, Gift, Package, Box, Archive, Folder, FolderOpen, File, FileText, FileImage, FileVideo, FileAudio, FilePdf, FileWord, FileExcel, FilePowerpoint, FileZip, FileCode, FileJson, FileXml, FileCsv, FileHtml, FileCss, FileJs, FileTs, FileJsx, FileTsx, FileVue, FileSvelte, FilePhp, FilePython, FileJava, FileC, FileCpp, FileCsharp, FileGo, FileRust, FileSwift, FileKotlin, FileDart, FileLua, FileRuby, FilePerl, FileScala, FileHaskell, FileClojure, FileElixir, FileErlang, FileFsharp, FileOcaml, FileR, FileMatlab, FileJulia, FileBash, FilePowershell, FileDocker, FileKubernetes, FileTerraform, FileAnsible, FileJenkins, FileGit, FileGithub, FileGitlab, FileBitbucket, FileDocker, FileKubernetes, FileTerraform, FileAnsible, FileJenkins, FileGit, FileGithub, FileGitlab, FileBitbucket } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, smart scheduling, and productivity analytics. Perfect for individuals and teams.',
      features: ['AI Priority Scoring', 'Smart Scheduling', 'Team Collaboration', 'Productivity Analytics', 'Time Tracking', 'Deadline Alerts'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      savings: 'Save 2 hours daily',
      users: '2,500+',
      rating: '4.9'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights. Ideal for freelancers and small businesses.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Tracking', 'Tax Preparation', 'Multi-currency Support', 'Expense Reports'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: false,
      savings: 'Save $500+ on taxes',
      users: '1,800+',
      rating: '4.8'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring. Enterprise-grade security for everyone.',
      features: ['Secure Storage', 'AI Security Score', 'Breach Monitoring', 'Multi-device Sync', '2FA Integration', 'Family Sharing'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      savings: 'Prevent security breaches',
      users: '3,200+',
      rating: '4.9'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management. Streamline your billing process.',
      features: ['Auto Templates', 'Payment Tracking', 'Client Management', 'Tax Calculations', 'Recurring Invoices', 'Multi-currency'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      savings: 'Save 5 hours weekly',
      users: '1,900+',
      rating: '4.7'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations. Your personal health assistant.',
      features: ['Health Monitoring', 'AI Insights', 'Goal Tracking', 'Wellness Tips', 'Medication Reminders', 'Doctor Appointments'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false,
      savings: 'Improve health outcomes',
      users: '2,100+',
      rating: '4.6'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking. Maximize your productivity.',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Time Blocking', 'Conflict Resolution', 'Email Integration', 'Team Sharing'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: false,
      savings: 'Optimize your schedule',
      users: '1,600+',
      rating: '4.8'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, priority classification, and spam filtering. Master your inbox.',
      features: ['Smart Sorting', 'Auto Responses', 'Priority Classification', 'Spam Filtering', 'Template Library', 'Scheduling'],
      pricing: '$16/month',
      link: '/ai-email-assistant',
      popular: false,
      savings: 'Save 1 hour daily',
      users: '2,800+',
      rating: '4.7'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting. Make data-driven decisions.',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'API Integration'],
      pricing: '$35/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      savings: 'Make better decisions',
      users: '1,400+',
      rating: '4.9'
    },
    {
      icon: <FileText className="w-8 h-8 text-teal-500" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials with SEO optimization. Create engaging content faster.',
      features: ['Content Generation', 'SEO Optimization', 'Brand Voice Training', 'Multi-language Support', 'Plagiarism Check', 'Content Calendar'],
      pricing: '$29/month',
      link: '/ai-content-writer',
      popular: true,
      savings: 'Create 10x more content',
      users: '3,500+',
      rating: '4.8'
    },
    {
      icon: <Calendar className="w-8 h-8 text-rose-500" />,
      title: 'AI Meeting Scheduler',
      description: 'Intelligent meeting scheduling with time zone handling, conflict resolution, and follow-up automation. Never miss a meeting.',
      features: ['Time Zone Handling', 'Conflict Resolution', 'Follow-up Automation', 'Integration APIs', 'Meeting Analytics', 'Reminder System'],
      pricing: '$20/month',
      link: '/ai-meeting-scheduler',
      popular: false,
      savings: 'Eliminate scheduling conflicts',
      users: '1,200+',
      rating: '4.6'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI recommendations, expense forecasting, and financial goal tracking. Take control of your finances.',
      features: ['Budget Planning', 'Expense Forecasting', 'Goal Tracking', 'Investment Advice', 'Bill Reminders', 'Financial Reports'],
      pricing: '$24/month',
      link: '/ai-budget-planner',
      popular: false,
      savings: 'Save 20% on expenses',
      users: '2,300+',
      rating: '4.7'
    },
    {
      icon: <Lock className="w-8 h-8 text-amber-500" />,
      title: 'AI Document Vault',
      description: 'Secure document storage with AI-powered organization, search, and sharing. Keep your important documents safe and accessible.',
      features: ['Secure Storage', 'AI Organization', 'Smart Search', 'Version Control', 'Access Control', 'Audit Trail'],
      pricing: '$17/month',
      link: '/ai-document-vault',
      popular: false,
      savings: 'Never lose documents',
      users: '1,700+',
      rating: '4.8'
    }
  ]

  const additionalMicroSaas = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'AI Sales Tracker',
      description: 'Track sales performance with AI insights and forecasting.',
      pricing: '$16/month'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'AI Goal Tracker',
      description: 'Set and track personal and business goals with AI guidance.',
      pricing: '$14/month'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'AI Team Manager',
      description: 'Manage team performance and collaboration with AI insights.',
      pricing: '$28/month'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
      title: 'AI Investment Tracker',
      description: 'Track investments with AI-powered market analysis.',
      pricing: '$26/month'
    },
    {
      icon: <PieChart className="w-6 h-6 text-pink-500" />,
      title: 'AI Data Visualizer',
      description: 'Create stunning data visualizations with AI assistance.',
      pricing: '$21/month'
    },
    {
      icon: <Settings className="w-6 h-6 text-gray-500" />,
      title: 'AI Workflow Automator',
      description: 'Automate repetitive tasks with AI-powered workflows.',
      pricing: '$23/month'
    },
    {
      icon: <Wifi className="w-6 h-6 text-cyan-500" />,
      title: 'AI Network Monitor',
      description: 'Monitor network performance with AI insights.',
      pricing: '$19/month'
    },
    {
      icon: <Camera className="w-6 h-6 text-orange-500" />,
      title: 'AI Photo Organizer',
      description: 'Organize photos with AI-powered tagging and search.',
      pricing: '$13/month'
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Time Saving',
      description: 'Our micro SAAS tools save you hours every day with intelligent automation.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Affordable monthly subscriptions that pay for themselves through increased productivity.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Easy to Use',
      description: 'Intuitive interfaces designed for immediate productivity without extensive training.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['Access to 3 micro SAAS tools', 'Basic AI features', 'Email support', 'Mobile apps'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Access to all micro SAAS tools', 'Advanced AI features', 'Priority support', 'Team collaboration', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited access', 'Premium AI features', '24/7 support', 'Custom development', 'Dedicated account manager'],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications designed to solve specific business problems with AI intelligence. Affordable, easy-to-use tools for productivity and growth." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity apps, business automation, task management, expense tracking" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. 
              Start small, scale big, and transform your productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-green-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <div className="text-green-400 text-sm font-medium">{service.savings}</div>
                </div>
                <Link 
                  to={service.link} 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Micro SAAS */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">More Micro SAAS Tools</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Additional specialized tools to enhance your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalMicroSaas.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-green-400 font-semibold">{service.pricing}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options to fit your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our micro SAAS tools are designed to deliver immediate value and measurable results.
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
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
    </div>
  )
}
