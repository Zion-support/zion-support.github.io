'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign } from 'lucide-react';

export default function EnterprisePage() {
  const enterpriseFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced threat protection.',
      benefits: ['SOC 2 Type II Certified', 'End-to-End Encryption', 'Advanced Threat Protection', 'Regular Security Audits']
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with enterprise-grade SLAs and priority response times.',
      benefits: ['24/7 Support', 'Dedicated Account Manager', 'Priority Response', 'Custom SLAs']
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business needs and handles peak loads.',
      benefits: ['Auto-scaling', 'High Availability', 'Global CDN', 'Load Balancing']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Custom Solutions',
      description: 'Tailored AI and IT solutions designed specifically for your enterprise requirements.',
      benefits: ['Custom Development', 'API Integration', 'White-label Solutions', 'Custom Training']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'AI-powered fraud detection, risk assessment, and automated compliance solutions.',
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      clients: '50+ Banks & Financial Institutions'
    },
    {
      name: 'Healthcare',
      description: 'Medical AI, patient data analytics, and healthcare automation solutions.',
      icon: <Heart className="w-6 h-6 text-red-400" />,
      clients: '30+ Healthcare Providers'
    },
    {
      name: 'Manufacturing',
      description: 'IoT integration, predictive maintenance, and supply chain optimization.',
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      clients: '25+ Manufacturing Companies'
    },
    {
      name: 'Retail & E-commerce',
      description: 'Customer analytics, inventory optimization, and personalized shopping experiences.',
      icon: <Package className="w-6 h-6 text-purple-400" />,
      clients: '40+ Retail Chains'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <MessageCircle className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6 text-purple-400" /> }
  ];

  const pricingTiers = [
    {
      name: 'Enterprise Starter',
      price: 'Custom',
      description: 'Perfect for mid-size enterprises looking to scale their operations.',
      features: [
        'Up to 1,000 users',
        'Basic AI services',
        'Standard support',
        'Cloud hosting included',
        'Basic analytics'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise Professional',
      price: 'Custom',
      description: 'Advanced solutions for large enterprises with complex requirements.',
      features: [
        'Unlimited users',
        'Advanced AI services',
        'Priority support',
        'Hybrid cloud options',
        'Advanced analytics',
        'Custom integrations'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise Elite',
      price: 'Custom',
      description: 'Complete enterprise solution with dedicated resources and custom development.',
      features: [
        'Unlimited everything',
        'Full AI suite',
        'Dedicated support team',
        'On-premise options',
        'Custom analytics',
        'White-label solutions',
        'Dedicated infrastructure'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group | AI & IT for Large Organizations</title>
        <meta name="description" content="Comprehensive enterprise AI and IT solutions designed for large organizations. Scalable, secure, and tailored to your business needs with 24/7 support." />
        <meta name="keywords" content="enterprise solutions, AI for enterprise, IT services enterprise, large organization, scalable solutions, enterprise security" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Enterprise Solutions - Zion Tech Group | AI & IT for Large Organizations" />
        <meta property="og:description" content="Comprehensive enterprise AI and IT solutions designed for large organizations. Scalable, secure, and tailored to your business needs with 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/enterprise" />
        <meta property="og:image" content="https://ziontechgroup.com/enterprise-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Solutions - Zion Tech Group | AI & IT for Large Organizations" />
        <meta name="twitter:description" content="Comprehensive enterprise AI and IT solutions designed for large organizations. Scalable, secure, and tailored to your business needs with 24/7 support." />
        <meta name="twitter:image" content="https://ziontechgroup.com/enterprise-twitter-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Building className="w-4 h-4" />
              <span>Enterprise Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Enterprise-Grade
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                AI & IT Solutions
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed for large organizations. 
              Scalable, secure, and tailored to your enterprise needs with dedicated support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Enterprise Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</span> Enterprises
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions power some of the world's largest organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
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

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Built for scale, security, and performance with enterprise-grade reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Specialized solutions tailored to meet the unique needs of different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="text-sm text-cyan-400 font-semibold">
                    {industry.clients}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Flexible pricing options designed to scale with your enterprise needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-cyan-400/50 shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center group ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Contact Sales
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
                    Ready to Transform <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Your Enterprise?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join 500+ enterprises that have already transformed their operations with our 
                    AI and IT solutions. Get started with a free consultation today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Get Enterprise Quote</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/demo" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Schedule Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}