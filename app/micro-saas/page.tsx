import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { BarChart3, Calendar, MessageCircle, Edit, FileText, Mail, DollarSign, Package, Target, Search, Zap, Shield, Database, Cloud, Smartphone, Globe, Award, Clock, ArrowRight, Sparkles, Layers, Lightbulb, Settings, Network, Cpu, CircuitBoard, Monitor, Server, Wifi, BarChart, PieChart, LineChart, Activity, Eye, Filter, Download, Upload, Share, Phone, MapPin, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, CheckCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and customizable dashboards for data-driven decision making.',
      price: '$149/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom report generation',
        'API integration',
        'Mobile-responsive design',
        'Team collaboration tools'
      ],
      benefits: [
        'Make data-driven decisions 3x faster',
        'Identify trends before competitors',
        'Reduce manual reporting by 90%',
        'Improve forecast accuracy by 40%'
      ],
      link: '/micro-saas/analytics-dashboard',
      category: 'Analytics',
      popular: true
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with automated reminders, calendar integration, and payment processing for seamless appointment management.',
      price: '$79/month',
      features: [
        'Auto-scheduling algorithms',
        'Calendar synchronization',
        'SMS/Email reminders',
        'Payment processing',
        'Multi-timezone support',
        'Custom booking forms'
      ],
      benefits: [
        'Reduce no-shows by 60%',
        'Save 10+ hours per week',
        'Increase booking rates by 45%',
        'Improve customer satisfaction'
      ],
      link: '/micro-saas/appointment-scheduler',
      category: 'Scheduling'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: 'AI Chat Analytics',
      description: 'Advanced chat analytics with sentiment analysis, response optimization, and customer insights to improve communication effectiveness.',
      price: '$129/month',
      features: [
        'Sentiment analysis',
        'Response optimization',
        'Customer insights',
        'Live monitoring',
        'Performance metrics',
        'Integration with major platforms'
      ],
      benefits: [
        'Improve response quality by 50%',
        'Increase customer satisfaction by 35%',
        'Reduce response time by 40%',
        'Gain valuable customer insights'
      ],
      link: '/micro-saas/chat-analytics',
      category: 'Communication'
    },
    {
      icon: <Edit className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns using advanced AI with brand voice training.',
      price: '$99/month',
      features: [
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Content templates',
        'Plagiarism detection',
        'Social media scheduling'
      ],
      benefits: [
        'Create content 10x faster',
        'Improve SEO rankings by 60%',
        'Maintain consistent brand voice',
        'Reduce content costs by 70%'
      ],
      link: '/micro-saas/content-generator',
      category: 'Content',
      popular: true
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      title: 'Document Processor',
      description: 'Automated document processing with OCR technology, intelligent data extraction, and format conversion for streamlined workflows.',
      price: '$179/month',
      features: [
        'OCR with 99.5% accuracy',
        'Data extraction',
        'Format conversion',
        'Batch processing',
        'Cloud storage integration',
        'Custom field recognition'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry by 95%',
        'Eliminate human errors',
        'Scale to handle any volume'
      ],
      link: '/micro-saas/document-processor',
      category: 'Productivity'
    },
    {
      icon: <Mail className="w-8 h-8 text-pink-400" />,
      title: 'Email Marketing Suite',
      description: 'Complete email marketing solution with AI-powered personalization, A/B testing, and automation workflows for maximum engagement.',
      price: '$119/month',
      features: [
        'AI personalization',
        'A/B testing automation',
        'Workflow automation',
        'Analytics dashboard',
        'List segmentation',
        'Template library'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Save 20 hours per week'
      ],
      link: '/micro-saas/email-marketing',
      category: 'Marketing'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning, automated categorization, and tax preparation for simplified financial management.',
      price: '$69/month',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Tax preparation',
        'Multi-currency support',
        'Expense reports',
        'Team collaboration'
      ],
      benefits: [
        'Save 15+ hours per month',
        'Improve expense accuracy by 90%',
        'Simplify tax preparation',
        'Reduce accounting costs'
      ],
      link: '/micro-saas/expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-400" />,
      title: 'Inventory Management',
      description: 'Advanced inventory management with predictive analytics, automated reordering, and multi-location tracking for optimal stock control.',
      price: '$199/month',
      features: [
        'Real-time tracking',
        'Predictive analytics',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Integration with POS systems'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Lower inventory costs by 25%',
        'Improve cash flow',
        'Eliminate manual counting'
      ],
      link: '/micro-saas/inventory-management',
      category: 'Operations'
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: 'Lead Scoring Engine',
      description: 'Intelligent lead scoring system that identifies high-value prospects using AI algorithms and behavioral analysis.',
      price: '$159/month',
      features: [
        'AI-powered scoring',
        'Behavioral analysis',
        'Custom scoring models',
        'CRM integration',
        'Lead nurturing automation',
        'Performance analytics'
      ],
      benefits: [
        'Increase conversion rates by 50%',
        'Identify hot leads 3x faster',
        'Improve sales efficiency',
        'Reduce lead qualification time'
      ],
      link: '/micro-saas/lead-scoring',
      category: 'Sales'
    },
    {
      icon: <Search className="w-8 h-8 text-teal-400" />,
      title: 'SEO Optimizer',
      description: 'Comprehensive SEO optimization tool with keyword research, content analysis, and ranking tracking for improved search visibility.',
      price: '$89/month',
      features: [
        'Keyword research',
        'Content optimization',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO audit',
        'Performance reporting'
      ],
      benefits: [
        'Improve search rankings by 60%',
        'Increase organic traffic by 80%',
        'Identify optimization opportunities',
        'Track progress with detailed reports'
      ],
      link: '/micro-saas/seo-optimizer',
      category: 'Marketing'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Customer Feedback Manager',
      description: 'Collect, analyze, and act on customer feedback with sentiment analysis, automated responses, and actionable insights.',
      price: '$139/month',
      features: [
        'Multi-channel feedback collection',
        'Sentiment analysis',
        'Automated responses',
        'Action item tracking',
        'Team collaboration',
        'Integration with support tools'
      ],
      benefits: [
        'Improve customer satisfaction by 40%',
        'Reduce response time by 50%',
        'Identify improvement opportunities',
        'Build stronger customer relationships'
      ],
      link: '/micro-saas/customer-feedback',
      category: 'Customer Success'
    },
    {
      icon: <Zap className="w-8 h-8 text-violet-400" />,
      title: 'Workflow Automator',
      description: 'Automate repetitive tasks and workflows with visual automation builder, integrations, and smart triggers for increased efficiency.',
      price: '$199/month',
      features: [
        'Visual automation builder',
        '500+ integrations',
        'Smart triggers',
        'Conditional logic',
        'Team collaboration',
        'Performance monitoring'
      ],
      benefits: [
        'Save 30+ hours per week',
        'Reduce human errors by 95%',
        'Improve process consistency',
        'Scale operations efficiently'
      ],
      link: '/micro-saas/workflow-automator',
      category: 'Automation',
      popular: true
    }
  ]

  const categories = [
    { name: 'All Services', count: microSaasServices.length, color: 'from-emerald-500 to-cyan-500' },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, color: 'from-cyan-500 to-blue-500' },
    { name: 'Scheduling', count: microSaasServices.filter(s => s.category === 'Scheduling').length, color: 'from-emerald-500 to-teal-500' },
    { name: 'Communication', count: microSaasServices.filter(s => s.category === 'Communication').length, color: 'from-blue-500 to-indigo-500' },
    { name: 'Content', count: microSaasServices.filter(s => s.category === 'Content').length, color: 'from-purple-500 to-pink-500' },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length, color: 'from-orange-500 to-red-500' },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length, color: 'from-pink-500 to-rose-500' },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length, color: 'from-green-500 to-emerald-500' },
    { name: 'Operations', count: microSaasServices.filter(s => s.category === 'Operations').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Sales', count: microSaasServices.filter(s => s.category === 'Sales').length, color: 'from-red-500 to-orange-500' },
    { name: 'Customer Success', count: microSaasServices.filter(s => s.category === 'Customer Success').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Automation', count: microSaasServices.filter(s => s.category === 'Automation').length, color: 'from-violet-500 to-purple-500' }
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Layers className="w-6 h-6 text-emerald-400" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-blue-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ]

  return (
    <Layout
      title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Deploy Software"
      description="Powerful micro SAAS solutions that integrate seamlessly with your workflow. Analytics, scheduling, content generation, and more. No complex setup, just instant value."
      keywords="micro SAAS, software solutions, analytics, scheduling, content generation, email marketing, expense tracking, inventory management, workflow automation"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-400/30">
            <Layers className="w-4 h-4" />
            <span>Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Ready-to-Deploy
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Micro SAAS
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Powerful, scalable micro software solutions that integrate seamlessly with your existing workflow. 
            No complex setup, no lengthy implementations - just instant value and immediate results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Growing Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions help businesses worldwide streamline operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
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

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Solution</h2>
            <p className="text-gray-300">Filter by category to find the perfect micro SAAS tool for your needs</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative ${service.popular ? 'ring-2 ring-emerald-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-sm text-emerald-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{service.price}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Target className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="block w-full mt-6 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-center py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25"
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Start Your Free Trial <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Today</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of businesses using our micro SAAS solutions to streamline operations, 
                  increase productivity, and drive growth. No credit card required, no setup fees, 
                  just instant access to powerful tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View All Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MicroSAASPage