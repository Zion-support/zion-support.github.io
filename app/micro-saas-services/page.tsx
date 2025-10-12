<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Smartphone, CheckCircle, Star, Zap, Brain, Target, Clock, DollarSign, Users, Globe, Shield } from 'lucide-react'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Smartphone, Database, Shield, Zap, Brain, Code, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

<<<<<<< HEAD
export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: '$9/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity'
=======
export default function MicroSAASServicesPage() {
  const [activeTab, setActiveTab] = useState('features')

  const microSaasApps = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, smart scheduling, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart scheduling and reminders',
        'Productivity analytics',
        'Team collaboration tools',
        'Mobile and web access',
        'Integration with popular tools'
      ],
      pricing: '$29/month',
      users: 'Up to 10 users',
      link: '/ai-task-manager',
      popular: true
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
<<<<<<< HEAD
      description: 'Automated expense tracking with receipt scanning and categorization.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax preparation'],
      pricing: '$7/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security audit', 'Multi-device sync'],
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security'
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking.',
      features: ['Auto generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: '$15/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Finance'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Wellness tips'],
      pricing: '$8/month',
      popular: true,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Code className="w-12 h-12 text-yellow-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with smart scheduling and conflict resolution.',
      features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Time blocking'],
      pricing: '$10/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity'
=======
import React from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star, Sparkles, Rocket, Cpu, Smartphone, Brain, Code, Database, Video, Target, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const microSAAS = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration', 'Deadline tracking'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports', 'Tax preparation'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '850+',
      rating: '4.8',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync', 'Password generation'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      users: '650+',
      rating: '4.7',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Recurring billing'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '980+',
      rating: '4.9',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials with SEO optimization.',
      features: ['Content generation', 'SEO optimization', 'Multiple languages', 'Brand voice training', 'Plagiarism detection'],
      pricing: '$29/month',
      link: '/ai-content-writer',
      popular: true,
      users: '1,500+',
      rating: '4.8',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'AI Website Builder',
      description: 'Build professional websites with AI assistance, including design, content, and SEO optimization.',
      features: ['AI design suggestions', 'Auto content generation', 'SEO optimization', 'Mobile responsive', 'E-commerce integration'],
      pricing: '$39/month',
      link: '/ai-website-builder',
      popular: false,
      users: '750+',
      rating: '4.6',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment'],
      pricing: '$35/month',
      link: '/ai-lead-generation',
      popular: true,
      users: '1,100+',
      rating: '4.7',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Database className="w-8 h-8 text-teal-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      pricing: '$49/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      users: '600+',
      rating: '4.8',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, and content optimization.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics'],
      pricing: '$22/month',
      link: '/ai-social-media-manager',
      popular: true,
      users: '900+',
      rating: '4.6',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: 'AI Meeting Assistant',
      description: 'Transform your meetings with AI-powered transcription, note-taking, and action item extraction.',
      features: ['Real-time transcription', 'Smart note taking', 'Meeting summaries', 'Time tracking', 'Participant insights'],
      pricing: '$15/month',
      link: '/ai-meeting-assistant',
      popular: true,
      users: '1,300+',
      rating: '4.8',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-400" />,
      title: 'AI Project Manager',
      description: 'Streamline your project management with AI-powered planning, team coordination, and predictive analytics.',
      features: ['Smart project planning', 'Team management', 'Progress tracking', 'Risk detection', 'Resource optimization'],
      pricing: '$25/month',
      link: '/ai-project-manager',
      popular: true,
      users: '1,100+',
      rating: '4.7',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 customer support with AI-powered chatbots that handle inquiries instantly.',
      features: ['24/7 AI chat support', 'Smart response generation', 'Human handoff', 'Multi-language support', 'Secure & compliant'],
      pricing: '$29/month',
      link: '/ai-customer-support-bot',
      popular: true,
      users: '1,400+',
      rating: '4.9',
      gradient: 'from-emerald-500 to-green-500'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
    }
  ]

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Health']

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  const stats = [
    { number: '50,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '24/7', label: 'Support' }
  ]

  const benefits = [
    {
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and improve productivity.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you get the most out of your tools.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Specialized micro software solutions designed for specific business needs. AI-powered tools for productivity, finance, security, and more." />
        <meta name="keywords" content="micro SaaS, software solutions, productivity tools, AI tools, business software" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized micro software solutions designed for specific business needs and workflows. 
              Powerful tools at micro-SaaS prices.
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
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics and reports',
        'Receipt storage and backup',
        'Tax preparation support',
        'Multi-currency support'
      ],
      pricing: '$19/month',
      users: 'Up to 5 users',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'Secure password generation',
        'Breach monitoring and alerts',
        'Password strength analysis',
        'Secure sharing capabilities',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      pricing: '$15/month',
      users: 'Up to 20 users',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and financial reporting.',
      features: [
        'AI-generated invoice templates',
        'Automated payment reminders',
        'Payment tracking and analytics',
        'Custom branding options',
        'Multi-currency support',
        'Tax calculation'
      ],
      pricing: '$25/month',
      users: 'Up to 15 users',
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI Lead Generator',
      description: 'Intelligent lead generation with AI-powered prospecting, contact enrichment, and CRM integration.',
      features: [
        'AI-powered lead scoring',
        'Contact information enrichment',
        'Email sequence automation',
        'CRM integration',
        'Lead analytics and insights',
        'Social media prospecting'
      ],
      pricing: '$49/month',
      users: 'Up to 25 users',
      link: '/ai-lead-generator',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'AI Website Analyzer',
      description: 'Comprehensive website analysis with AI-powered insights, SEO recommendations, and performance optimization.',
      features: [
        'AI-powered SEO analysis',
        'Performance optimization',
        'Content quality assessment',
        'Competitor analysis',
        'Technical audit reports',
        'Actionable recommendations'
      ],
      pricing: '$39/month',
      users: 'Up to 10 websites',
      link: '/ai-website-analyzer',
      popular: false
    }
  ]

  const categories = [
    { name: 'Productivity', icon: <Zap className="w-6 h-6" />, count: 12 },
    { name: 'Finance', icon: <DollarSign className="w-6 h-6" />, count: 8 },
    { name: 'Marketing', icon: <Target className="w-6 h-6" />, count: 15 },
    { name: 'Security', icon: <Shield className="w-6 h-6" />, count: 6 },
    { name: 'Analytics', icon: <Brain className="w-6 h-6" />, count: 10 },
    { name: 'Communication', icon: <Users className="w-6 h-6" />, count: 7 }
  ]

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Access to 3 micro SAAS apps',
        'Basic AI features',
        'Email support',
        'Mobile and web access',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Access to all micro SAAS apps',
        'Advanced AI features',
        'Priority support',
        'Team collaboration tools',
        'Advanced analytics',
        'Up to 10 user accounts',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Access to all micro SAAS apps',
        'Premium AI features',
        '24/7 dedicated support',
        'Custom AI training',
        'White-label options',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our pre-built, ready-to-use micro SAAS applications.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Access powerful AI-powered tools at a fraction of the cost of building custom solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all our micro SAAS applications.'
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: 'AI-Powered',
      description: 'Leverage advanced AI capabilities to automate tasks and gain intelligent insights.'
    }
  ]

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has completely transformed how I organize my work. The AI prioritization feature helps me focus on what matters most, and I\'ve increased my productivity by 50%.',
      rating: 5,
      avatar: 'AJ'
    },
    {
      name: 'Maria Garcia',
      company: 'Small Business Owner',
      content: 'The AI Expense Tracker has saved me hours every week. The receipt scanning feature is incredibly accurate, and the financial insights help me make better business decisions.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Tom Wilson',
      company: 'Marketing Agency',
      content: 'The AI Lead Generator has been a game-changer for our agency. We\'ve seen a 200% increase in qualified leads, and the automation features save us countless hours.',
      rating: 5,
      avatar: 'TW'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Apps', icon: <Smartphone className="w-6 h-6" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Applications</title>
        <meta name="description" content="Access 50+ AI-powered micro SAAS applications for productivity, finance, marketing, and more. Affordable, secure, and ready-to-use business tools. Starting at $19/month." />
        <meta name="keywords" content="micro SAAS, business applications, AI tools, productivity apps, expense tracker, task manager, lead generator" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Access 50+ AI-powered micro SAAS applications designed to streamline your business operations. 
              Affordable, secure, and ready-to-use tools that scale with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#apps" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Start Free Trial
              </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            </div>
          </div>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
=======
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as you grow',
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not weeks',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI for better results',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it',
      icon: <Clock className="w-6 h-6 text-orange-400" />
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has revolutionized how I organize my work. I\'m 40% more productive now.',
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
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Apps', icon: <Rocket className="w-6 h-6" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOHead 
        title="Micro SaaS Services - Zion Tech Group"
        description="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use."
        keywords="micro SaaS, AI tools, productivity, business automation, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">AI-Powered Micro Applications</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Micro SaaS Tools</span>
            <br />
            for Modern Professionals
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas-services#tools"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 group-hover:from-green-400/30 group-hover:to-emerald-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
                </div>
=======
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized micro software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
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
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 ml-1">4.8</span>
                  </div>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Try Now
                </Link>
=======
      {/* Tools Grid */}
      <section id="tools" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Micro SaaS Tools</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microSAAS.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-green-500/20 transform group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${tool.gradient} bg-opacity-20`}>
                      {tool.icon}
                    </div>
                    {tool.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:text-white transition-colors">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(tool.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 ml-2">{tool.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Active Users</div>
                      <div className="text-lg font-semibold text-white">{tool.users}</div>
                    </div>
                  </div>

                  <Link
                    to={tool.link}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">App Categories</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Browse our micro SAAS applications by category
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} apps</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver powerful, affordable tools designed for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Micro SaaS Tools?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience the benefits of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{benefit.description}</p>
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
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from professionals who use our tools daily
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
      {/* Micro SAAS Apps Section */}
      <section id="apps" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Popular Micro SAAS Apps</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Discover our most popular AI-powered business applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microSaasApps.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{app.pricing}</span>
                    <span className="text-gray-300 ml-1 text-sm">{app.users}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={app.link} className="flex items-center">
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
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our micro SaaS solutions today and experience the power of specialized tools.
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
                Learn More
              </Link>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.3),transparent_50%)]"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of professionals already using our micro SaaS tools to work smarter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/micro-saas-services#tools"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Browse All Tools
                </Link>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
            </div>
=======
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Powerful benefits that make our micro SAAS applications the perfect choice for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Pricing Plans</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the plan that best fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <Footer />
=======
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              See how our micro SAAS applications have helped businesses succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our AI-powered micro SAAS applications today and see the difference they can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    </div>
  )
}