import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Cloud, BarChart3, Zap, CheckCircle, 
  Clock, Target, TrendingUp, PieChart, Smartphone, Shield, 
  Lock, RefreshCw, Settings, Bot, FileText, AlertTriangle,
  CheckSquare, Star, Globe, Monitor, Smartphone as Mobile,
  Send, Eye, MousePointer, Calendar, Hash, AtSign, Headphones,
  Phone, Mail, HelpCircle, ThumbsUp, ThumbsDown, Cpu, Database,
  GitBranch, Terminal, Layers, Wrench, Search, Filter, Key,
  Lock as LockIcon, AlertTriangle as Alert, Activity, Network,
  Server, HardDrive, Wifi, Download, Upload
} from 'lucide-react'

export default function CloudMigrationProPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced automation and orchestration'
import { Cloud, ArrowRight, CheckCircle, Zap, Shield, Database, Smartphone, Globe, BarChart3, Star, Sparkles, Server, Lock, Users } from 'lucide-react'
import Layout from '../layout'

export default function CloudMigrationPro() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with guaranteed zero downtime and data integrity'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security implementation with compliance monitoring and threat protection'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: 'Cost Optimization',
      description: 'AI-powered cost analysis and optimization to reduce cloud spending by up to 40%'
    },
    {
      icon: <Activity className="w-6 h-6 text-pink-400" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization for maximum performance and availability'
    },
    {
      icon: <Bot className="w-6 h-6 text-red-400" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation for migration planning, execution, and ongoing optimization'
      description: 'Enterprise-grade security throughout the entire migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize your infrastructure for maximum performance and cost efficiency'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Integrity Guarantee',
      description: '100% data integrity with comprehensive backup and validation systems'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and timeline',
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Infrastructure Setup',
      description: 'Cloud infrastructure provisioning and configuration for optimal performance',
      icon: <Server className="w-8 h-8 text-yellow-400" />
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure and efficient data transfer with real-time monitoring and validation',
      icon: <Database className="w-8 h-8 text-green-400" />
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure all systems work perfectly in the cloud',
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />
    },
    {
      step: '06',
      title: 'Go-Live & Support',
      description: 'Smooth transition with 24/7 support and ongoing optimization',
      icon: <Zap className="w-8 h-8 text-red-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic migration',
        'Email support',
        'Basic monitoring',
        '30-day warranty',
        'Documentation'
      price: '$2,500',
      period: 'one-time',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security measures',
        'Email support',
        '30-day post-migration support'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 servers',
        'Advanced migration',
        'Priority support',
        'Advanced monitoring',
        '90-day warranty',
        'Custom integrations',
        'Performance optimization',
        'Security hardening'
      price: '$15,000',
      period: 'one-time',
      description: 'Comprehensive migration for growing enterprises',
      features: [
        'Up to 100 servers',
        'Advanced migration strategy',
        'Enterprise security compliance',
        'Priority support',
        'Custom optimization',
        '90-day post-migration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Plus',
      price: '$24,999',
      period: '/project',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Full migration suite',
        'Dedicated support',
        'White-label option',
        '1-year warranty',
        'Custom solutions',
        'Advanced security',
        'SLA guarantee'
      name: 'Custom Solution',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored migration for large-scale organizations',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Full compliance certification',
        'Dedicated team',
        'White-glove service',
        '1-year support included'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Financial Services CTO',
      content: 'Reduced our infrastructure costs by 45% and improved performance by 200%. The migration was flawless with zero downtime.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Director',
      content: 'Our application performance improved dramatically. The team was professional and the migration exceeded our expectations.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Sarah Rodriguez',
      company: 'Healthcare IT Manager',
      content: 'Achieved HIPAA compliance seamlessly. The security implementation was comprehensive and the support was outstanding.',
      rating: 5,
      avatar: 'SR'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: '45% Cost Reduction',
      description: 'Optimize cloud resources and reduce infrastructure costs significantly'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: '200% Performance Boost',
      description: 'Leverage cloud-native features for maximum performance and scalability'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: '99.99% Uptime',
      description: 'Enterprise-grade reliability with built-in redundancy and failover'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: 'Zero Downtime',
      description: 'Seamless migration without business disruption or data loss'
    }
  ]

  const migrationSteps = [
    { 
      title: 'Assessment & Planning', 
      description: 'Comprehensive analysis of current infrastructure and migration strategy',
      icon: '📊',
      duration: '1-2 weeks'
    },
    { 
      title: 'Security & Compliance', 
      description: 'Implement security controls and ensure regulatory compliance',
      icon: '🔒',
      duration: '1 week'
    },
    { 
      title: 'Migration Execution', 
      description: 'Automated migration with real-time monitoring and validation',
      icon: '🚀',
      duration: '2-4 weeks'
    },
    { 
      title: 'Testing & Optimization', 
      description: 'Comprehensive testing and performance optimization',
      icon: '⚡',
      duration: '1-2 weeks'
    },
    { 
      title: 'Go-Live & Support', 
      description: 'Production deployment with ongoing monitoring and support',
      icon: '🎯',
      duration: 'Ongoing'
    }
  ]

  const cloudProviders = [
    { name: 'Amazon Web Services', icon: '☁️', description: 'Leading cloud platform with comprehensive services' },
    { name: 'Microsoft Azure', icon: '🔷', description: 'Enterprise-focused cloud with hybrid capabilities' },
    { name: 'Google Cloud Platform', icon: '🔵', description: 'AI and data analytics focused cloud platform' },
    { name: 'IBM Cloud', icon: '🔴', description: 'Enterprise cloud with AI and blockchain services' },
    { name: 'Oracle Cloud', icon: '🟠', description: 'Database and enterprise application focused' },
    { name: 'Alibaba Cloud', icon: '🟡', description: 'Leading cloud provider in Asia-Pacific region' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group | Enterprise Cloud Migration Services</title>
        <meta name="description" content="Professional cloud migration services with zero-downtime migration, cost optimization, and security-first approach. Reduce costs by 45%. Starting at $2,999." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, zero-downtime migration, cloud optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Cloud className="w-4 h-4" />
            <span>Professional Cloud Migration Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Cloud Migration
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your infrastructure with professional cloud migration services. Achieve zero-downtime migration, 
            reduce costs by 45%, and boost performance by 200% with our expert team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
              <div className="text-gray-300 text-sm">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.99%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Successful Migrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cloud Migration Services?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of cloud infrastructure with our expert migration services and ongoing support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Migration Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Proven methodology for successful cloud migration with minimal risk and maximum value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {step.description}
                </p>
                <div className="text-cyan-400 text-xs font-semibold">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Cloud <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Certified expertise across all major cloud providers for the best migration strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{provider.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {provider.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-center">
                  {provider.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Migration Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              End-to-end cloud migration services with expert support and ongoing optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Project Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Fixed-price packages for predictable budgeting. Custom solutions available for complex requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover:border-cyan-400/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</span> Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See what our customers are saying about their successful cloud migration experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Infrastructure?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join hundreds of organizations already benefiting from our cloud migration services. 
                  Get your free assessment today and discover the potential savings and performance improvements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Get Free Assessment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="#pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View All Packages</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="text-white/80 text-sm">
                  <p>✓ Free assessment • ✓ No obligation • ✓ Custom solutions available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
      name: 'Jennifer Adams',
      company: 'TechCorp Solutions',
      content: 'The migration was flawless. Zero downtime and our performance improved by 40%.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Global Manufacturing Inc.',
      content: 'Professional team, excellent communication, and delivered exactly what was promised.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Financial Services Group',
      content: 'Security compliance was perfect. Our auditors were impressed with the implementation.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="Cloud Migration Pro - Expert Cloud Migration Services | Zion Tech Group"
      description="Professional cloud migration services with zero downtime guarantee. Expert team, security-first approach, and comprehensive support. Get your free assessment today."
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, infrastructure migration, cloud consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Expert Cloud Migration
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your infrastructure with our expert cloud migration services. 
                Zero downtime, security-first approach, and guaranteed performance optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#process"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Process
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Our Migration Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Professional expertise with proven methodologies and guaranteed results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Proven Migration Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Six-step methodology ensuring successful cloud migration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{step.step}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                One-time pricing with no hidden costs or ongoing fees
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-400/40 scale-105 shadow-2xl shadow-blue-500/20' 
                    : 'border-blue-500/20 hover:border-blue-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300">
                See how we've helped businesses transform their infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get your free infrastructure assessment and migration plan today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Assessment
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}