'use client'
import React from 'react'
import SEOHead from './components/SEOHead'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Cloud, 
  Brain, 
  Cpu, 
  Rocket, 
  Network, 
  BarChart3, 
  Bot, 
  Lock, 
  Star, 
  CheckCircle, 
  DollarSign, 
  Users, 
  Clock,
  Wifi,
  Smartphone,
  Camera,
  Calendar,
  Package,
  MessageSquare,
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Settings,
  Target,
  Lightbulb,
  PieChart,
  Activity,
  Monitor,
  Server,
  Wrench,
  Layers,
  Zap as Lightning,
  Eye,
  Headphones,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  Award,
  Crown,
  Gem,
  Sparkles
} from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6 text-green-400" /> },
    { number: '100+', label: 'Happy Clients', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-cyan-400" /> }
  ]

  const microSaasServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      price: '$29/month',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'API integration'],
      link: '/micro-saas/analytics-dashboard'
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling system with automated reminders and calendar integration.',
      price: '$19/month',
      features: ['Auto-scheduling', 'Calendar sync', 'SMS reminders', 'Multi-timezone support'],
      link: '/micro-saas/appointment-scheduler'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      title: 'Chat Analytics Suite',
      description: 'Advanced chat analytics with sentiment analysis and customer insights.',
      price: '$39/month',
      features: ['Sentiment analysis', 'Response time tracking', 'Customer insights', 'Team performance'],
      link: '/micro-saas/chat-analytics'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      price: '$25/month',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization'],
      link: '/micro-saas/content-generator'
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: 'Document Processor AI',
      description: 'Intelligent document processing with OCR, data extraction, and automation.',
      price: '$45/month',
      features: ['OCR processing', 'Data extraction', 'Form automation', 'Cloud storage'],
      link: '/micro-saas/document-processor'
    },
    {
      icon: <Mail className="w-8 h-8 text-cyan-500" />,
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing with AI-powered personalization and analytics.',
      price: '$35/month',
      features: ['AI personalization', 'A/B testing', 'Advanced analytics', 'Template library'],
      link: '/micro-saas/email-marketing'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-500" />,
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning and financial insights.',
      price: '$15/month',
      features: ['Receipt scanning', 'Expense categorization', 'Financial reports', 'Tax preparation'],
      link: '/micro-saas/expense-tracker'
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-500" />,
      title: 'Inventory Management AI',
      description: 'Intelligent inventory management with demand forecasting and automation.',
      price: '$49/month',
      features: ['Demand forecasting', 'Auto-reordering', 'Barcode scanning', 'Multi-location support'],
      link: '/micro-saas/inventory-management'
    },
    {
      icon: <Target className="w-8 h-8 text-pink-500" />,
      title: 'Lead Scoring Engine',
      description: 'AI-powered lead scoring to identify high-value prospects and optimize conversions.',
      price: '$39/month',
      features: ['AI scoring', 'Behavior tracking', 'CRM integration', 'Conversion optimization'],
      link: '/micro-saas/lead-scoring'
    },
    {
      icon: <Search className="w-8 h-8 text-yellow-500" />,
      title: 'SEO Optimizer Pro',
      description: 'Comprehensive SEO optimization with AI-powered content and technical analysis.',
      price: '$29/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Rank tracking'],
      link: '/micro-saas/seo-optimizer'
    },
    {
      icon: <Share2 className="w-8 h-8 text-teal-500" />,
      title: 'Social Media Manager',
      description: 'AI-powered social media management with content scheduling and analytics.',
      price: '$25/month',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform support'],
      link: '/micro-saas/social-manager'
    },
    {
      icon: <Bot className="w-8 h-8 text-violet-500" />,
      title: 'AI Support Bot',
      description: 'Intelligent customer support bot with natural language processing.',
      price: '$35/month',
      features: ['Natural language processing', 'Multi-language support', 'Ticket routing', 'Analytics dashboard'],
      link: '/micro-saas/support-bot'
    }
  ]

  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Security Compliance']
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Penetration Testing', 'Security Audits', 'Compliance Management']
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards']
    }
  ]

  const itServices = [
    {
      icon: <Code className="w-10 h-10 text-blue-400" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements.'
    },
    {
      icon: <Network className="w-10 h-10 text-green-400" />,
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions for your organization.'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
      title: 'Business Intelligence',
      description: 'Data-driven insights to help you make informed business decisions.'
    },
    {
      icon: <Bot className="w-10 h-10 text-orange-400" />,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions | Micro SaaS Services"
        description="Leading provider of AI-powered IT solutions, micro SaaS services, cloud infrastructure, cybersecurity, and digital transformation. Contact us at +1 302 464 0950"
        keywords="AI solutions, IT services, micro SaaS, cloud computing, cybersecurity, digital transformation, business automation"
      />
      
      <Navigation />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.2)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              🚀 Next-Generation Technology Solutions
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading the future of technology with cutting-edge AI solutions, 
            innovative micro SaaS services, robust IT infrastructure, and comprehensive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/micro-saas" 
              className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Micro SaaS
              <Rocket className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                <div className="text-gray-300 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, ready-to-use micro SaaS applications designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex items-center justify-center space-x-4 text-cyan-300">
              <Phone className="w-5 h-5" />
              <span>Call us: +1 302 464 0950</span>
              <span>•</span>
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="block w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                IT Services & Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-green-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/30 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your business goals. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  View Pricing
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-cyan-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
