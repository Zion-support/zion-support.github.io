import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Atom, TrendingUp, BarChart3, Zap, Shield, Globe, DollarSign, Clock, Users, Cpu, Database, Network, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIQuantumFinancialOraclePage: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: 'Quantum-Powered Predictions',
      description: 'Leverage quantum computing algorithms for ultra-accurate financial market predictions and risk analysis.',
      price: '$2,999/month',
      link: '/ai-quantum-financial-oracle'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      title: 'Real-time Market Analysis',
      description: 'Process millions of data points in real-time using quantum superposition for instant market insights.',
      price: '$1,999/month',
      link: '/ai-quantum-financial-oracle'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-400" />,
      title: 'Portfolio Optimization',
      description: 'Quantum algorithms optimize investment portfolios with unprecedented precision and speed.',
      price: '$1,499/month',
      link: '/ai-quantum-financial-oracle'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Risk Assessment',
      description: 'Advanced quantum risk modeling that considers all possible market scenarios simultaneously.',
      price: '$1,799/month',
      link: '/ai-quantum-financial-oracle'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'Fraud Detection',
      description: 'Quantum machine learning detects fraudulent transactions with 99.99% accuracy.',
      price: '$999/month',
      link: '/ai-quantum-financial-oracle'
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'Global Market Integration',
      description: 'Seamlessly analyze markets across all time zones and currencies using quantum entanglement principles.',
      price: '$2,499/month',
      link: '/ai-quantum-financial-oracle'
    }
  ]

  const stats = [
    { number: '99.97%', label: 'Prediction Accuracy', icon: <Atom className="w-6 h-6 text-cyan-400" /> },
    { number: '10,000x', label: 'Faster Processing', icon: <Zap className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Quantum Computing', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '500+', label: 'Markets Analyzed', icon: <Globe className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Quantum Algorithms', icon: <Cpu className="w-6 h-6 text-orange-400" /> },
    { number: '1000+', label: 'Financial Institutions', icon: <Users className="w-6 h-6 text-pink-400" /> }
  ]

  const quantumCapabilities = [
    {
      title: 'Quantum Superposition Analysis',
      description: 'Analyze all possible market states simultaneously for comprehensive risk assessment',
      icon: <Atom className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Quantum Entanglement Trading',
      description: 'Correlate market movements across global exchanges in real-time',
      icon: <Network className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Advanced pattern recognition using quantum neural networks',
      icon: <Cpu className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Quantum Optimization',
      description: 'Find optimal trading strategies using quantum annealing',
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Quantum Cryptography',
      description: 'Ultra-secure financial data transmission and storage',
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Quantum Monte Carlo',
      description: 'Advanced simulation of complex financial scenarios',
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for hedge funds and trading firms',
      features: [
        'Up to 10 quantum algorithms',
        'Real-time market analysis',
        'Basic portfolio optimization',
        'Standard risk assessment',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for investment banks and asset managers',
      features: [
        'Up to 25 quantum algorithms',
        'Advanced market predictions',
        'Comprehensive portfolio optimization',
        'Quantum risk modeling',
        'Priority support',
        'Custom algorithm development',
        'White-label solutions',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For large financial institutions and central banks',
      features: [
        'Unlimited quantum algorithms',
        'Full quantum computing access',
        'Custom quantum solutions',
        '24/7 dedicated support',
        'On-premise quantum hardware',
        'Regulatory compliance tools',
        'Multi-tenant architecture',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Kim',
      company: 'Quantum Capital',
      content: 'The quantum financial oracle has revolutionized our trading strategies. The accuracy is beyond anything we\'ve seen before.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Investment Bank',
      content: 'The quantum algorithms process market data 10,000x faster than traditional methods. Incredible technology.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Central Bank',
      content: 'The quantum risk assessment has helped us navigate market volatility with unprecedented precision.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Quantum Financial Oracle - Next-Gen Financial Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum-powered financial oracle with 99.97% prediction accuracy. Advanced quantum algorithms for market analysis, portfolio optimization, and risk assessment." />
        <meta name="keywords" content="quantum finance, quantum computing, financial oracle, quantum algorithms, market prediction, portfolio optimization, quantum risk assessment, fintech quantum" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Quantum Financial Oracle - Next-Gen Financial Intelligence" />
        <meta property="og:description" content="Revolutionary quantum-powered financial oracle with 99.97% prediction accuracy. Advanced quantum algorithms for market analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-quantum-financial-oracle" />
        <meta property="og:image" content="https://ziontechgroup.com/og-quantum-financial-oracle.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Quantum Financial Oracle - Next-Gen Financial Intelligence" />
        <meta name="twitter:description" content="Revolutionary quantum-powered financial oracle with 99.97% prediction accuracy. Advanced quantum algorithms for market analysis." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-quantum-financial-oracle.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Atom className="w-4 h-4" />
            <span>Quantum-Powered Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            AI Quantum Financial
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Oracle
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum-powered financial oracle with 99.97% prediction accuracy. 
            <br />
            <span className="text-cyan-400 font-semibold">Experience the future of financial intelligence with quantum computing.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Request Demo</span>
              <Atom className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <DollarSign className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Atom className="w-4 h-4 text-green-400" />
              <span>99.97% Accuracy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>10,000x Faster</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>Quantum Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span>Global Markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum-powered financial oracle delivers unprecedented accuracy and speed in financial analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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

      {/* Quantum Capabilities Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Harness the power of quantum computing for revolutionary financial analysis and prediction capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-purple-900/50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <TrendingUp className="w-4 h-4" />
              <span>Advanced Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Financial Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive quantum-powered financial analysis covering all aspects of market intelligence and risk management.
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">
                    {feature.price}
                  </span>
                  <Link 
                    to="/contact"
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <Atom className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <DollarSign className="w-4 h-4" />
              <span>Quantum Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Select the perfect quantum computing plan for your financial analysis needs. 
              All plans include our advanced quantum algorithms and comprehensive reporting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-400/50 hover:border-cyan-400/80 hover:shadow-cyan-500/20' 
                  : 'border-white/20 hover:border-white/40'
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
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Atom className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Financial Leaders</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from financial institutions and quantum computing experts who are transforming their operations with our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <footer>
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Atom className="w-4 h-4" />
                  <span>Experience Quantum Finance</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready for <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Quantum Finance?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join the quantum revolution in financial services. 
                  Experience unprecedented accuracy and speed with our quantum-powered financial oracle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Request Demo</span>
                    <Atom className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <DollarSign className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AIQuantumFinancialOraclePage