<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Phone } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
export default function MicroSaasServices() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Cloud, Shield, Database, Users, BarChart, Settings, Mail, MessageSquare, FileText, Phone, MapPin, Sparkles, Cpu, Target, Lock, TrendingUp, Calendar, CheckSquare, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, ShoppingCart } from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const saasProducts = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and analytics platform',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integration'],
      color: 'from-cyan-500 to-blue-500',
      url: '/zion-analytics-pro'
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Layers, BarChart3, Calendar, MessageCircle, FileText, 
  Mail, DollarSign, Package, Clock, Users, Shield, 
  CheckCircle, ArrowRight, Sparkles, Target, Award, 
  Lightbulb, Monitor, Server, CircuitBoard, Atom, 
  Satellite, Wrench, PieChart, LineChart, Activity, 
  Search, Filter, Download, Upload, Share, Phone, 
  MapPin, Globe, TrendingUp, Star, Zap, Brain
} from 'lucide-react'
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with AI-powered analytics and churn prediction.',
      price: '$299/month',
      features: ['Real-time insights', 'Churn prediction', 'Customer segmentation', 'Personalization engine'],
      link: '/ai-customer-insights'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent chatbot solution for customer support',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Analytics', 'Custom Training'],
      color: 'from-purple-500 to-pink-500',
      url: '/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and protection',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      color: 'from-red-500 to-orange-500',
      url: '/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management solution',
      features: ['Encrypted Storage', 'File Sharing', 'Version Control', 'Access Management'],
      color: 'from-green-500 to-emerald-500',
      url: '/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      features: ['Content Generation', 'SEO Optimization', 'Multi-format Support', 'Team Collaboration'],
      color: 'from-indigo-500 to-purple-500',
      url: '/zion-content-studio'
    },
    {
<<<<<<< HEAD
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Analytics', 'Integration Hub'],
      color: 'from-yellow-500 to-orange-500',
      url: '/zion-crm-intelligence'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance with sub-second response times'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing tools and workflows'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: ['Up to 5 users', 'Basic analytics', 'Email support', 'Standard integrations'],
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 25 users', 'Advanced analytics', 'Priority support', 'Custom integrations'],
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited users', 'Custom analytics', 'Dedicated support', 'White-label options'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Advanced micro SaaS services by Zion Tech Group" />
    }
  ]
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SAAS applications designed to streamline your business operations with AI-powered tools." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced micro SaaS services for modern businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our micro SaaS services page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
=======
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. Streamline operations with our suite of AI-powered tools and applications." />
        <meta name="keywords" content="micro saas, business tools, productivity software, AI applications, cloud solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Powerful, focused applications designed to solve specific business challenges. 
                Our micro SAAS suite provides everything you need to streamline operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Products</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized tools designed to address specific business needs with precision and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasProducts.map((product, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={product.url}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for maximum efficiency and user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core features and 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    tier.popular 
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                    }`}
=======
      icon: <Package className="w-8 h-8 text-pink-400" />,
      title: 'Document Processor',
      description: 'Automated document processing with OCR and intelligent data extraction.',
      price: '$179/month',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing'],
      link: '/micro-saas/document-processor'
    },
    {
      icon: <Mail className="w-8 h-8 text-green-400" />,
      title: 'AI Email Marketing',
      description: 'Intelligent email campaigns with AI-powered personalization and optimization.',
      price: '$149/month',
      features: ['AI personalization', 'A/B testing', 'Automated campaigns', 'Analytics dashboard'],
      link: '/micro-saas/email-marketing'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-indigo-400" />,
      title: 'Expense Tracker Pro',
      description: 'Smart expense management with receipt scanning and automated categorization.',
      price: '$59/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Tax preparation'],
      link: '/micro-saas/expense-tracker'
    }
  ]

  const additionalServices = [
    {
      icon: <Package className="w-6 h-6 text-cyan-400" />,
      title: 'Inventory Manager',
      description: 'Smart inventory tracking with predictive analytics and automated reordering.',
      price: '$199/month',
      link: '/micro-saas/inventory-management'
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: 'Lead Generation Suite',
      description: 'AI-powered lead generation and qualification with CRM integration.',
      price: '$249/month',
      link: '/micro-saas/lead-generation'
    },
    {
      icon: <Share className="w-6 h-6 text-blue-400" />,
      title: 'Social Media Scheduler',
      description: 'Automated social media posting with AI-optimized timing and content.',
      price: '$89/month',
      link: '/micro-saas/social-scheduler'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with team sharing and security features.',
      price: '$39/month',
      link: '/micro-saas/password-manager'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-400" />,
      title: 'Task Manager AI',
      description: 'Intelligent task management with AI prioritization and team collaboration.',
      price: '$79/month',
      link: '/micro-saas/task-manager'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Analytics Dashboard',
      description: 'Custom analytics dashboards with real-time data visualization and reporting.',
      price: '$159/month',
      link: '/micro-saas/analytics-dashboard'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions', icon: <Layers className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Monitor className="w-6 h-6 text-blue-400" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ]
        <title>Micro SaaS Services - Zion Tech Group | Ready-to-Deploy Software Solutions</title>
        <meta name="description" content="Powerful micro SaaS solutions that integrate seamlessly with your workflow. From AI automation to business tools, deploy instantly and scale effortlessly." />
        <meta name="keywords" content="micro SaaS, software as a service, business tools, automation, AI solutions, ready-to-deploy, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-pink-400/30">
            <Layers className="w-4 h-4" />
            <span>Micro SaaS Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready-to-Deploy <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Micro SaaS
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Powerful, scalable micro software solutions that integrate seamlessly with your existing workflow. 
            No complex setup, just instant value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Try Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our most popular micro SaaS solutions designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div className="text-pink-400 font-semibold text-lg">
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
                    className="block w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
                  >
                    Get Started
                  </Link>
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of our micro SAAS solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
=======
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our complete suite of micro SaaS solutions for every business need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold">
                    {service.price}
                  </div>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Learn More →
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">Deploy</span> Your Solution?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Choose from our ready-to-deploy micro SaaS solutions or let us build a custom solution for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Building</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
                  </Link>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default MicroSaasServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
        </div>
      </section>
    </>
  )
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
