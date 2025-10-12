import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, Sparkles, Rocket, Target, Users, Globe, Lock, BarChart3, Code2, Wifi, Server, Bot, FileText, Mail, Calendar, CreditCard, Smartphone as Phone, Monitor, Laptop, Headphones, Camera, Gamepad2, Music, Video, Image, Download, Upload, Share2, Settings, Bell, Search, Filter, Plus, Minus, X, Check, Star, Heart, ThumbsUp, MessageCircle, Phone as PhoneIcon, MapPin, Clock, TrendingUp, Award, Gift, Crown, Diamond, Flame, Lightning, Sun, Moon, Star as StarIcon } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Services',
      description: 'Revolutionary artificial intelligence solutions powered by cutting-edge machine learning and neural networks.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Deep Learning', 'Neural Networks'],
      link: '/ai-services',
      gradient: 'from-cyan-500 to-blue-600',
      price: 'Starting at $29/mo'
    },
    {
      icon: <Cpu className="w-12 h-12 text-emerald-400" />,
      title: 'IT Services',
      description: 'Enterprise-grade IT solutions with 99.9% uptime guarantee and 24/7 expert support.',
      benefits: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure Management', 'Data Analytics', 'Mobile Development'],
      link: '/it-services',
      gradient: 'from-emerald-500 to-green-600',
      price: 'Starting at $1,200/mo'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-400" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions designed for specific business needs and rapid deployment.',
      benefits: ['Custom Solutions', 'Rapid Deployment', 'Scalable Architecture', 'Cost Effective', 'AI-Powered', 'Real-time Analytics'],
      link: '/micro-saas-services',
      gradient: 'from-purple-500 to-pink-600',
      price: 'Starting at $7/mo'
    },
    {
      icon: <Wifi className="w-12 h-12 text-yellow-400" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation with ultra-low latency and massive connectivity.',
      benefits: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation', 'IoT Integration', 'Edge Computing'],
      link: '/5g-implementation',
      gradient: 'from-yellow-500 to-orange-600',
      price: 'Starting at $5,000/mo'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Services',
      description: 'Professional cloud services with multi-cloud strategy and advanced security protocols.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling'],
      link: '/cloud-services',
      gradient: 'from-blue-500 to-cyan-600',
      price: 'Starting at $2,500/mo'
    },
    {
      icon: <Database className="w-12 h-12 text-red-400" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations and processes.',
      benefits: ['Process Automation', 'Digital Workforce', 'Customer Experience', 'Data Strategy', 'Change Management', 'ROI Optimization'],
      link: '/digital-transformation',
      gradient: 'from-red-500 to-pink-600',
      price: 'Starting at $3,000/mo'
    }
  ]

  const microSaasServices = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content with AI-powered writing assistant',
      price: '$29/mo',
      features: ['10,000+ words daily', '50+ templates', 'SEO optimization', 'Multi-language'],
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer service and support',
      price: '$49/mo',
      features: ['Visual builder', 'Multi-channel', 'Analytics', 'A/B testing'],
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Business intelligence with AI-powered insights and predictions',
      price: '$79/mo',
      features: ['Real-time data', 'Predictive analytics', 'Custom dashboards', 'Mobile app'],
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-400" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered optimization',
      price: '$39/mo',
      features: ['Smart drafting', 'Send optimization', 'Subject testing', 'CRM integration'],
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-pink-400" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with smart scheduling',
      price: '$19/mo',
      features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Time blocking'],
      link: '/ai-smart-calendar',
      popular: true
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning',
      price: '$15/mo',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax prep'],
      link: '/ai-expense-tracker',
      popular: false
    }
  ]

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Machine Learning Platform',
      description: 'Build and deploy ML models with our enterprise platform',
      price: '$199/mo',
      features: ['Model training', 'AutoML', 'Model deployment', 'Monitoring'],
      link: '/ai-ml-platform',
      popular: true
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: 'Computer Vision API',
      description: 'Advanced image and video analysis with AI',
      price: '$99/mo',
      features: ['Object detection', 'Face recognition', 'OCR', 'Video analysis'],
      link: '/ai-computer-vision',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Document Intelligence',
      description: 'AI-powered document processing and analysis',
      price: '$149/mo',
      features: ['Document parsing', 'Data extraction', 'Classification', 'Search'],
      link: '/ai-document-intelligence',
      popular: true
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-400" />,
      title: 'Voice AI Assistant',
      description: 'Natural language voice processing and synthesis',
      price: '$79/mo',
      features: ['Speech recognition', 'Text-to-speech', 'Voice commands', 'Multi-language'],
      link: '/ai-voice-assistant',
      popular: false
    }
  ]

  const itServices = [
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions for enterprise protection',
      price: '$1,800/mo',
      features: ['Threat detection', 'Incident response', 'Compliance', 'Penetration testing'],
      link: '/cybersecurity-solutions',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with 99.9% uptime',
      price: '$2,500/mo',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Monitoring', 'Backup'],
      link: '/cloud-services',
      popular: true
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: 'DevOps & CI/CD',
      description: 'Automated development and deployment pipelines',
      price: '$2,200/mo',
      features: ['CI/CD setup', 'Container orchestration', 'IaC', 'Monitoring'],
      link: '/devops-cicd',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics Platform',
      description: 'Advanced analytics and business intelligence',
      price: '$1,500/mo',
      features: ['Data warehousing', 'BI dashboards', 'Predictive analytics', 'ML integration'],
      link: '/data-analytics',
      popular: false
    }
  ]

  const stats = [
    { number: '1,000+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Expert Support', icon: <Headphones className="w-6 h-6 text-purple-400" /> },
    { number: '100+', label: 'AI Models', icon: <Brain className="w-6 h-6 text-orange-400" /> },
    { number: '50+', label: 'Micro SaaS Apps', icon: <Smartphone className="w-6 h-6 text-pink-400" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-yellow-400" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Innovation</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, enterprise IT services, and micro SaaS applications. Transform your business with cutting-edge technology and innovative solutions." />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, cloud services, digital transformation, micro SaaS, machine learning, cybersecurity, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">Next-Generation Technology Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI & IT Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, enterprise IT services, and innovative micro SaaS solutions. 
              We deliver technology that accelerates growth, enhances efficiency, and drives digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-blue-400 mr-2" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-yellow-400 mr-2" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-white/10">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Core Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-sm text-cyan-400 font-medium">{service.price}</div>
                    <div className="text-xs text-gray-400">Starting price</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions designed for specific business needs with AI-powered features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-white">{service.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 ml-1 text-sm">4.8</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Try Now →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence services to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-xl font-bold text-white mb-4">{service.price}</div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Enterprise IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions with enterprise-grade security and 24/7 expert support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-xl font-bold text-white mb-4">{service.price}</div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using our AI and IT solutions to accelerate growth, 
                enhance efficiency, and drive digital transformation. Let's build the future together.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-white/80">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Industry Certified</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>Proven Results</span>
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