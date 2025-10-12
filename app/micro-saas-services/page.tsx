import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Layers, Bot, BarChart3, Zap, Shield, Code, Cloud, Database, 
  MessageCircle, Mail, Phone, MapPin, CheckCircle, Star, Clock, Users, 
  TrendingUp, Sparkles, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, 
  Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, 
  Filter, Download, Upload, Share, Calendar, Timer, Battery, Wifi2, Signal, 
  Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, 
  SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, 
  Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, 
  Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, 
  Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, 
  Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, 
  FileText, Package, DollarSign, Globe, Lock, Cpu, Rocket, Network, Brain
} from '../components/Icons'

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with AI-powered analytics and churn prediction.',
      price: '$299/month',
      features: ['Real-time insights', 'Churn prediction', 'Customer segmentation', 'Personalization engine', 'ROI tracking'],
      link: '/ai-customer-insights',
      category: 'Analytics',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI that learns and adapts to your workflow.',
      price: '$299/month',
      features: ['Smart automation', 'Visual workflow builder', 'AI decision engine', '500+ integrations', 'Custom triggers'],
      link: '/ai-workflow-automation',
      category: 'Automation',
      popular: true
    },
    {
      icon: <Mic className="w-8 h-8 text-blue-400" />,
      title: 'AI Voice Assistant',
      description: 'Create intelligent voice assistants with natural language processing and human-like speech synthesis.',
      price: '$299/month',
      features: ['98% accuracy', 'Natural conversations', 'Multi-channel support', 'Custom integration', 'Voice analytics'],
      link: '/ai-voice-assistant',
      category: 'Voice AI'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'AI Blockchain Analytics',
      description: 'Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading with 95% accuracy.',
      price: '$499/month',
      features: ['DeFi analytics', 'Smart contract analysis', 'Trading intelligence', 'Cross-chain support', 'Risk assessment'],
      link: '/ai-blockchain-analytics',
      category: 'Blockchain'
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with automated reminders and calendar integration.',
      price: '$79/month',
      features: ['Auto-scheduling', 'Calendar sync', 'SMS/Email reminders', 'Payment processing', 'Multi-timezone support'],
      link: '/micro-saas/appointment-scheduler',
      category: 'Scheduling'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-pink-400" />,
      title: 'AI Chat Analytics',
      description: 'Advanced chat analytics with sentiment analysis and customer insights.',
      price: '$129/month',
      features: ['Sentiment analysis', 'Response optimization', 'Customer insights', 'Live monitoring', 'Performance metrics'],
      link: '/micro-saas/chat-analytics',
      category: 'Analytics'
    },
    {
      icon: <Edit className="w-8 h-8 text-green-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      price: '$99/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism check'],
      link: '/micro-saas/content-generator',
      category: 'Content',
      popular: true
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'Document Processor',
      description: 'Automated document processing with OCR and intelligent data extraction.',
      price: '$179/month',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing', 'API integration'],
      link: '/micro-saas/document-processor',
      category: 'Document Management'
    },
    {
      icon: <Mail className="w-8 h-8 text-yellow-400" />,
      title: 'AI Email Marketing',
      description: 'Intelligent email campaigns with AI-driven personalization and optimization.',
      price: '$149/month',
      features: ['AI personalization', 'Send time optimization', 'A/B testing', 'List segmentation', 'Performance analytics'],
      link: '/micro-saas/email-marketing',
      category: 'Marketing'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-teal-400" />,
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      price: '$59/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Tax preparation', 'Team collaboration'],
      link: '/micro-saas/expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Package className="w-8 h-8 text-rose-400" />,
      title: 'Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      price: '$199/month',
      features: ['Demand forecasting', 'Auto-reordering', 'Stock alerts', 'Multi-location support', 'Analytics dashboard'],
      link: '/micro-saas/inventory-management',
      category: 'Inventory'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Lead Generation Suite',
      description: 'Automated lead generation and qualification with AI-powered scoring and nurturing.',
      price: '$249/month',
      features: ['Lead scoring', 'Automated nurturing', 'CRM integration', 'Email sequences', 'Performance tracking'],
      link: '/micro-saas/lead-generation',
      category: 'Sales'
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-400" />,
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management with optimal posting times and content suggestions.',
      price: '$89/month',
      features: ['Optimal timing', 'Content suggestions', 'Multi-platform posting', 'Analytics', 'Hashtag optimization'],
      link: '/micro-saas/social-scheduler',
      category: 'Social Media'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'Password Manager Pro',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      price: '$39/month',
      features: ['AI security scan', 'Auto-generation', 'Breach monitoring', 'Team sharing', '2FA integration'],
      link: '/micro-saas/password-manager',
      category: 'Security'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'Task Manager AI',
      description: 'Intelligent task management with AI prioritization and automated workflow optimization.',
      price: '$79/month',
      features: ['AI prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts'],
      link: '/micro-saas/task-manager',
      category: 'Productivity'
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive business analytics with real-time data visualization and custom reporting.',
      price: '$199/month',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Export capabilities', 'Team sharing'],
      link: '/micro-saas/analytics-dashboard',
      category: 'Analytics'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Website Monitor',
      description: '24/7 website monitoring with uptime tracking, performance analysis, and instant alerts.',
      price: '$49/month',
      features: ['Uptime monitoring', 'Performance tracking', 'Instant alerts', 'Historical data', 'Multi-site support'],
      link: '/micro-saas/website-monitor',
      category: 'Monitoring'
    },
    {
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      title: 'Email Signature Manager',
      description: 'Professional email signature management with branding consistency and compliance tracking.',
      price: '$29/month',
      features: ['Brand consistency', 'Compliance tracking', 'Team management', 'Template library', 'Analytics'],
      link: '/micro-saas/email-signature',
      category: 'Communication'
    },
    {
      icon: <Calendar className="w-8 h-8 text-pink-400" />,
      title: 'Meeting Room Booker',
      description: 'Smart meeting room booking with availability optimization and resource management.',
      price: '$69/month',
      features: ['Smart booking', 'Resource management', 'Conflict resolution', 'Usage analytics', 'Mobile app'],
      link: '/micro-saas/meeting-room-booker',
      category: 'Scheduling'
    },
    {
      icon: <FileText className="w-8 h-8 text-teal-400" />,
      title: 'Contract Manager',
      description: 'AI-powered contract management with automated renewal tracking and compliance monitoring.',
      price: '$159/month',
      features: ['Contract tracking', 'Renewal alerts', 'Compliance monitoring', 'Digital signatures', 'Template library'],
      link: '/micro-saas/contract-manager',
      category: 'Legal'
    },
    {
      icon: <Users className="w-8 h-8 text-rose-400" />,
      title: 'Employee Directory',
      description: 'Smart employee directory with skills tracking, project assignments, and team collaboration tools.',
      price: '$89/month',
      features: ['Skills tracking', 'Project assignments', 'Team collaboration', 'Directory search', 'Integration APIs'],
      link: '/micro-saas/employee-directory',
      category: 'HR'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Invoice Generator',
      description: 'Automated invoice generation with payment tracking and client management.',
      price: '$79/month',
      features: ['Auto-generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Multi-currency'],
      link: '/micro-saas/invoice-generator',
      category: 'Finance'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Time Tracking Pro',
      description: 'Advanced time tracking with project billing, productivity analysis, and team management.',
      price: '$99/month',
      features: ['Project billing', 'Productivity analysis', 'Team management', 'Client reporting', 'Mobile tracking'],
      link: '/micro-saas/time-tracking',
      category: 'Productivity'
    }
  ]

  const categories = [
    'All Services',
    'Analytics',
    'Automation',
    'Voice AI',
    'Blockchain',
    'Scheduling',
    'Content',
    'Document Management',
    'Marketing',
    'Finance',
    'Inventory',
    'Sales',
    'Social Media',
    'Security',
    'Productivity',
    'Monitoring',
    'Communication',
    'Legal',
    'HR'
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Layers className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '5min', label: 'Setup Time', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '1000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-pink-400" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Ready-to-Deploy Software Solutions | Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions including AI tools, automation, analytics, and productivity apps. Ready to deploy in minutes with 99.9% uptime guarantee." />
        <meta name="keywords" content="micro SAAS, software solutions, AI tools, automation, analytics, productivity apps, business software, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Ready-to-Deploy Software Solutions | Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SAAS solutions including AI tools, automation, analytics, and productivity apps. Ready to deploy in minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Ready-to-Deploy Software Solutions" />
        <meta name="twitter:description" content="Powerful micro SAAS solutions including AI tools, automation, analytics, and productivity apps. Ready to deploy in minutes." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-micro-saas.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Micro SAAS Services",
            "description": "Ready-to-deploy micro software solutions including AI tools, automation, analytics, and productivity apps",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "25+",
              "lowPrice": "29",
              "highPrice": "499",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-pink-400/30">
            <Layers className="w-4 h-4" />
            <span>Ready-to-Deploy Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Micro SAAS That
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Scales Your Business
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Powerful, scalable micro software solutions that integrate seamlessly with your existing workflow. 
            No complex setup, just instant value.
            <br />
            <span className="text-pink-400 font-semibold">Deploy in minutes, scale to millions.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Growing Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions deliver instant value with proven reliability and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose from our extensive range of micro SAAS solutions designed to address every aspect of your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 relative ${service.popular ? 'ring-2 ring-pink-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-pink-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-pink-400">
                    {service.price}
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Deploy Your First <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">Micro SAAS Today</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
                  boost productivity, and drive growth. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Watch Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}