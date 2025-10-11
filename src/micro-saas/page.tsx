import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car, Target, Globe, Cpu, Smartphone, FileText, Bot, Music, Video, CreditCard, Train, Home, Heart, GraduationCap, Mail, Calendar, PieChart, Search, Filter, Download, Upload, Share, Edit, Trash2, Plus, Minus, Refresh, Play, Pause, Stop, Volume2, Camera, Image, File, Folder, Archive, Bookmark, Tag, Link as LinkIcon, ExternalLink, ArrowRight, ChevronRight, Award, Gift, Rocket, Lightbulb, Wrench, Hammer, Scissors, Paintbrush, Palette, Layers, Grid, List, Layout, Monitor, Laptop, Tablet, Smartphone as PhoneIcon, Headphones, Microphone, Speaker, Wifi, Bluetooth, Battery, Power, Zap as Lightning, Sun, Moon, CloudRain, Wind, Thermometer, Droplets, Snowflake, Cloud, CloudSnow, CloudLightning, CloudDrizzle, CloudFog, Eye as EyeIcon, EyeOff, Lock as LockIcon, Unlock, Key, Fingerprint, Shield as ShieldIcon, AlertTriangle, AlertCircle, Info, HelpCircle, X, Check, XCircle, CheckCircle2, PlusCircle, MinusCircle, XSquare, CheckSquare, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Heart as HeartIcon, ThumbsUp, ThumbsDown, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
export default function MicroSaasPage() {
  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and analytics with AI-powered insights',
      features: ['Custom Dashboards', 'Real-time Data', 'Predictive Insights', 'Export Reports', 'Mobile App', 'API Access'],
      price: '$79/month',
      popular: true,
      category: 'Analytics',
      link: '/ai-analytics-dashboard',
      benefits: ['Increase revenue by 25%', 'Save 10 hours/week', 'Real-time insights']
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Assistant',
      description: 'Complete e-commerce automation and optimization platform',
      features: ['Inventory Management', 'Order Processing', 'Customer Service', 'Analytics', 'Payment Integration', 'Shipping Automation'],
      price: '$99/month',
      popular: true,
      category: 'E-commerce',
      link: '/ai-ecommerce-solutions',
      benefits: ['Boost sales by 40%', 'Reduce manual work by 80%', '24/7 customer support']
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI-powered features',
      features: ['Drag & Drop Builder', 'AI Code Generation', 'App Store Publishing', 'Analytics', 'Push Notifications', 'Offline Support'],
      price: '$149/month',
      popular: false,
      category: 'Development',
      link: '/ai-mobile-app-development',
      benefits: ['Build apps 10x faster', 'No coding required', 'Professional results']
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Intelligent document processing and management system',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Cloud Storage', 'Version Control'],
      price: '$59/month',
      popular: true,
      category: 'Productivity',
      link: '/ai-document-processing',
      benefits: ['Process 1000+ docs/hour', '99.9% accuracy', 'Save 15 hours/week']
    },
    {
      icon: Bot,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for any platform with advanced AI',
      features: ['Visual Builder', 'Multi-platform', 'Analytics', 'Custom Training', 'Voice Integration', 'Multi-language'],
      price: '$49/month',
      popular: true,
      category: 'Customer Service',
      link: '/ai-chatbot-builder',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses']
    },
    {
      icon: Music,
      title: 'AI Content Creator',
      description: 'AI-powered content generation and optimization platform',
      features: ['Blog Writing', 'Social Media', 'Video Scripts', 'SEO Optimization', 'Image Generation', 'Video Creation'],
      price: '$39/month',
      popular: false,
      category: 'Marketing',
      link: '/ai-content-generation',
      benefits: ['Create content 5x faster', 'SEO optimized', 'Multiple formats']
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation and optimization',
      features: ['Email Templates', 'A/B Testing', 'Segmentation', 'Analytics', 'Drip Campaigns', 'Personalization'],
      price: '$29/month',
      popular: true,
      category: 'Marketing',
      link: '/ai-email-marketing',
      benefits: ['Increase open rates by 35%', 'Automate campaigns', 'Better targeting']
    },
    {
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Smart scheduling and appointment management system',
      features: ['Calendar Integration', 'Auto-scheduling', 'Time Zone Handling', 'Reminders', 'Rescheduling', 'Analytics'],
      price: '$19/month',
      popular: false,
      category: 'Productivity',
      link: '/ai-scheduling-assistant',
      benefits: ['Reduce no-shows by 50%', 'Save 5 hours/week', 'Better time management']
    },
    {
      icon: PieChart,
      title: 'AI Financial Tracker',
      description: 'Intelligent financial tracking and budgeting tool',
      features: ['Expense Tracking', 'Budget Planning', 'Investment Analysis', 'Tax Preparation', 'Reports', 'Alerts'],
      price: '$34/month',
      popular: true,
      category: 'Finance',
      link: '/ai-financial-tracker',
      benefits: ['Save 20% on expenses', 'Better financial planning', 'Automated tracking']
    },
    {
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO optimization and keyword research tool',
      features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis', 'Technical SEO', 'Reports'],
      price: '$44/month',
      popular: true,
      category: 'Marketing',
      link: '/ai-seo-optimizer',
      benefits: ['Increase organic traffic by 200%', 'Better rankings', 'Competitive advantage']
    },
    {
      icon: Filter,
      title: 'AI Lead Generator',
      description: 'Intelligent lead generation and qualification system',
      features: ['Lead Scoring', 'Contact Discovery', 'Email Verification', 'CRM Integration', 'Follow-up Automation', 'Analytics'],
      price: '$69/month',
      popular: false,
      category: 'Sales',
      link: '/ai-lead-generator',
      benefits: ['Generate 3x more leads', 'Higher quality prospects', 'Automated follow-up']
    },
    {
      icon: Download,
      title: 'AI Data Backup',
      description: 'Intelligent data backup and recovery solution',
      features: ['Automatic Backups', 'Version Control', 'Cloud Storage', 'Recovery Tools', 'Encryption', 'Monitoring'],
      price: '$24/month',
      popular: false,
      category: 'Security',
      link: '/ai-data-backup',
      benefits: ['99.9% uptime', 'Secure storage', 'Easy recovery']
    },
    {
      icon: Upload,
      title: 'AI File Manager',
      description: 'Smart file organization and management system',
      features: ['Auto-organization', 'Search & Filter', 'Duplicate Detection', 'Cloud Sync', 'Sharing', 'Version Control'],
      price: '$14/month',
      popular: false,
      category: 'Productivity',
      link: '/ai-file-manager',
      benefits: ['Organize files automatically', 'Find files instantly', 'Reduce clutter']
    },
    {
      icon: Share,
      title: 'AI Social Media Manager',
      description: 'Comprehensive social media management and automation',
      features: ['Post Scheduling', 'Content Creation', 'Analytics', 'Engagement Tracking', 'Hashtag Research', 'Competitor Analysis'],
      price: '$39/month',
      popular: true,
      category: 'Marketing',
      link: '/ai-social-media-manager',
      benefits: ['Increase engagement by 150%', 'Save 8 hours/week', 'Better content strategy']
    },
    {
      icon: Edit,
      title: 'AI Writing Assistant',
      description: 'Advanced AI-powered writing and editing tool',
      features: ['Grammar Check', 'Style Suggestions', 'Tone Analysis', 'Plagiarism Detection', 'Templates', 'Collaboration'],
      price: '$19/month',
      popular: true,
      category: 'Productivity',
      link: '/ai-writing-assistant',
      benefits: ['Improve writing quality', 'Save 6 hours/week', 'Professional results']
    },
    {
      icon: Trash2,
      title: 'AI Data Cleaner',
      description: 'Intelligent data cleaning and validation system',
      features: ['Duplicate Removal', 'Data Validation', 'Format Standardization', 'Error Detection', 'Batch Processing', 'Quality Reports'],
      price: '$29/month',
      popular: false,
      category: 'Data Management',
      link: '/ai-data-cleaner',
      benefits: ['Clean data 10x faster', '99.9% accuracy', 'Better data quality']
    },
    {
      icon: Plus,
      title: 'AI Project Manager',
      description: 'Intelligent project management and team collaboration',
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Resource Planning', 'Timeline Management', 'Reporting'],
      price: '$49/month',
      popular: true,
      category: 'Project Management',
      link: '/ai-project-manager',
      benefits: ['Complete projects 30% faster', 'Better team coordination', 'Real-time insights']
    },
    {
      icon: Minus,
      title: 'AI Inventory Manager',
      description: 'Smart inventory management and optimization system',
      features: ['Stock Tracking', 'Reorder Alerts', 'Demand Forecasting', 'Supplier Management', 'Cost Analysis', 'Reports'],
      price: '$39/month',
      popular: false,
      category: 'Inventory',
      link: '/ai-inventory-manager',
      benefits: ['Reduce stockouts by 80%', 'Optimize inventory levels', 'Save 20% on costs']
    },
    {
      icon: Refresh,
      title: 'AI Workflow Automator',
      description: 'Intelligent workflow automation and process optimization',
      features: ['Process Mapping', 'Automation Rules', 'Integration Hub', 'Monitoring', 'Analytics', 'Custom Workflows'],
      price: '$59/month',
      popular: true,
      category: 'Automation',
      link: '/ai-workflow-automator',
      benefits: ['Automate 80% of tasks', 'Reduce errors by 90%', 'Save 20 hours/week']
    },
    {
      icon: Play,
      title: 'AI Video Creator',
      description: 'AI-powered video creation and editing platform',
      features: ['Auto-editing', 'Text-to-Video', 'Voice Synthesis', 'Music Integration', 'Templates', 'Export Options'],
      price: '$79/month',
      popular: false,
      category: 'Content Creation',
      link: '/ai-video-creator',
      benefits: ['Create videos 5x faster', 'Professional quality', 'No editing skills needed']
    },
    {
      icon: Pause,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking and productivity analysis',
      features: ['Automatic Tracking', 'Productivity Analysis', 'Time Reports', 'Goal Setting', 'Team Management', 'Integrations'],
      price: '$19/month',
      popular: true,
      category: 'Productivity',
      link: '/ai-time-tracker',
      benefits: ['Increase productivity by 25%', 'Better time management', 'Detailed insights']
    }
  ]
  const categories = [
    { name: 'All', count: microSaasServices.length },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length },
    { name: 'E-commerce', count: microSaasServices.filter(s => s.category === 'E-commerce').length },
    { name: 'Development', count: microSaasServices.filter(s => s.category === 'Development').length },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length },
    { name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length },
    { name: 'Sales', count: microSaasServices.filter(s => s.category === 'Sales').length },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length },
    { name: 'Data Management', count: microSaasServices.filter(s => s.category === 'Data Management').length },
    { name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length },
    { name: 'Inventory', count: microSaasServices.filter(s => s.category === 'Inventory').length },
    { name: 'Automation', count: microSaasServices.filter(s => s.category === 'Automation').length },
    { name: 'Content Creation', count: microSaasServices.filter(s => s.category === 'Content Creation').length }
  ]
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% return on investment for our micro SAAS clients'
    },
    {
      icon: Users,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support with guaranteed response times'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    }
  ]
  const stats = [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Apps Available', value: '50+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Support Available', value: '24/7' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="50+ AI-powered micro SAAS applications for modern businesses. Affordable tools starting from $14/month. Analytics, e-commerce, productivity, marketing, and more."
        keywords="micro SAAS, AI tools, business applications, productivity software, marketing automation, analytics dashboard"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions,
  
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ AI-powered micro SAAS applications designed for modern businesses. Affordable, powerful, and easy to use.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <$2 />
                href="tel:+13024640950"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call (302) 464-0950
  
              <$2 />
                to="/contact"
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Trial,
  
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
            ))}
      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <$2 />
                key={index}
                className="bg-slate-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300">
                {category.name} ({category.count})
            ))}
      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular
                )}
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.title}
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}
                <p className="text-gray-300 mb-4 text-sm">{service.description}
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      {feature}
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-gray-400">+{service.features.length - 3} more features
                  )}
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400 mb-2">{service.price}
                  <div className="text-xs text-gray-400 mb-3">
                    {service.benefits[0]}
                  <$2 />
                    to={service.link}
                    className="bg-purple-500 hover: bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-block text-sm">
                    Learn More,
  
                </div>
              </div>
            ))}
      {/* Benefits Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We deliver powerful, affordable tools that help businesses grow and succeed
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}
                <p className="text-gray-300">{benefit.description}
            ))}
      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 24/7 support and regular updates.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Starter
              <div className="text-4xl font-bold text-cyan-400 mb-4">$19<span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  5 Micro SAAS Apps
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Basic Support
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Standard Features
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Email Support
              <$2 />
                to="/contact"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block">
                Get Started
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-8 rounded-xl shadow-lg ring-2 ring-cyan-400">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular
              <h3 className="text-2xl font-bold text-white mb-4">Professional
              <div className="text-4xl font-bold text-cyan-400 mb-4">$49<span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  15 Micro SAAS Apps
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Priority Support
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Advanced Features
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Phone & Email Support
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  API Access
              <$2 />
                to="/contact"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block">
                Get Started
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise
              <div className="text-4xl font-bold text-cyan-400 mb-4">$99<span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  All 50+ Apps
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  24/7 Premium Support
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Custom Features
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Dedicated Manager
  
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  White-label Options
  
              </ul>
              <$2 />
                to="/contact"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block">
                Contact Sales,
  
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <$2 />
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100 flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call (302) 464-0950
  
              <$2 />
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
  
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  ),
}
  </Link>
  </a>
  </Link>
  </li>
  </li>
  </li>
  </li>
  </li>
  </Link>
  </li>
  </li>
  </li>
  </li>
  </li>
  </Link>
  </li>
  </li>
  </li>
  </li>
  </div>
  </h2>
  </div>
  </p>
  </Link>
  </li>
  </Link>
  </a>
  </h1>
  </SEOOptimizer>
  </div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></p></p></p></h2></h2></h3></h3></h3></h3></h3></ul></ul></ul></section></section></section></section>