import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Eye, Monitor, Users, Zap, Globe, Cpu, Database, Network, BarChart3, Shield, Clock, DollarSign, BarChart, PieChart, LineChart, Activity, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIHolographicWorkspacePage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      title: '3D Holographic Interface',
      description: 'Immersive 3D workspace with gesture control and spatial computing for enhanced productivity.',
      price: '$1,999/month',
      link: '/ai-holographic-workspace'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'Collaborative Holograms',
      description: 'Real-time 3D collaboration with team members in shared holographic environments.',
      price: '$1,499/month',
      link: '/ai-holographic-workspace'
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'AI-Powered Gestures',
      description: 'Intelligent gesture recognition and natural language processing for seamless interaction.',
      price: '$1,299/month',
      link: '/ai-holographic-workspace'
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
      title: 'Mixed Reality Integration',
      description: 'Seamless integration with AR/VR devices and traditional 2D interfaces.',
      price: '$1,799/month',
      link: '/ai-holographic-workspace'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Global Workspace',
      description: 'Access your holographic workspace from anywhere in the world with cloud synchronization.',
      price: '$999/month',
      link: '/ai-holographic-workspace'
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-400" />,
      title: 'Quantum Processing',
      description: 'Advanced quantum computing integration for complex 3D simulations and AI processing.',
      price: '$2,499/month',
      link: '/ai-holographic-workspace'
    }
  ]

  const stats = [
    { number: '95%', label: 'Productivity Increase', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '10x', label: 'Faster Collaboration', icon: <Users className="w-6 h-6 text-emerald-400" /> },
    { number: '360°', label: 'Immersive Experience', icon: <Eye className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Supported Devices', icon: <Monitor className="w-6 h-6 text-purple-400" /> },
    { number: '1000+', label: '3D Templates', icon: <Package className="w-6 h-6 text-orange-400" /> },
    { number: '24/7', label: 'Cloud Access', icon: <Globe className="w-6 h-6 text-pink-400" /> }
  ]

  const holographicCapabilities = [
    {
      title: '3D Data Visualization',
      description: 'Transform complex data into interactive 3D holographic representations',
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Spatial Computing',
      description: 'Natural interaction with digital objects in 3D space using gestures and voice',
      icon: <Eye className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Virtual Meetings',
      description: 'Conduct meetings in shared holographic environments with realistic avatars',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'AI Assistant Integration',
      description: 'Intelligent holographic assistant that understands context and provides real-time help',
      icon: <Cpu className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Multi-Device Sync',
      description: 'Seamless synchronization across all your devices and platforms',
      icon: <Network className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Custom Environments',
      description: 'Create personalized holographic workspaces tailored to your needs',
      icon: <Monitor className="w-6 h-6 text-pink-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Holographic Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Basic 3D workspace',
        'Up to 5 users',
        'Standard holographic templates',
        'Cloud synchronization',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Holographic Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Advanced 3D workspace',
        'Up to 25 users',
        'Custom holographic environments',
        'Real-time collaboration',
        'Priority support',
        'API access',
        'Advanced AI features',
        'Multi-device support'
      ],
      popular: true
    },
    {
      name: 'Holographic Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited 3D workspace',
        'Unlimited users',
        'Custom holographic solutions',
        '24/7 dedicated support',
        'On-premise deployment',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'Tech Innovation Lab',
      content: 'The holographic workspace has revolutionized how we collaborate. The 3D interface makes complex data visualization incredibly intuitive.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Design Studio',
      content: 'Our team productivity increased by 95% since implementing the holographic workspace. The spatial computing features are game-changing.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Research Institute',
      content: 'The AI-powered gestures and natural language processing make the workspace feel like magic. It\'s the future of computing.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Holographic Workspace - Next-Gen 3D Computing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered holographic workspace with 3D interface, gesture control, and spatial computing. Transform your productivity with immersive 3D collaboration." />
        <meta name="keywords" content="holographic workspace, 3D computing, spatial computing, mixed reality, AR workspace, VR collaboration, holographic interface, 3D productivity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Holographic Workspace - Next-Gen 3D Computing" />
        <meta property="og:description" content="Revolutionary AI-powered holographic workspace with 3D interface, gesture control, and spatial computing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-holographic-workspace" />
        <meta property="og:image" content="https://ziontechgroup.com/og-holographic-workspace.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Holographic Workspace - Next-Gen 3D Computing" />
        <meta name="twitter:description" content="Revolutionary AI-powered holographic workspace with 3D interface, gesture control, and spatial computing." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-holographic-workspace.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Eye className="w-4 h-4" />
            <span>3D Holographic Computing</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            AI Holographic
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Workspace
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered holographic workspace with 3D interface and spatial computing. 
            <br />
            <span className="text-cyan-400 font-semibold">Experience the future of productivity with immersive 3D collaboration.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Try Demo</span>
              <Eye className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <Eye className="w-4 h-4 text-green-400" />
              <span>360° Immersive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>95% Productivity Boost</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Real-time Collaboration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span>Global Access</span>
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
              Holographic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our holographic workspace delivers unprecedented productivity gains and immersive collaboration experiences.
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

      {/* Holographic Capabilities Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Holographic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Harness the power of 3D computing and spatial interaction for revolutionary productivity experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {holographicCapabilities.map((capability, index) => (
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
              <Monitor className="w-4 h-4" />
              <span>Advanced Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Holographic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Workspace Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive 3D computing features covering all aspects of holographic productivity and collaboration.
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
                    <Eye className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
              <span>Holographic Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Holographic Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Select the perfect holographic workspace plan for your productivity needs. 
              All plans include our advanced 3D interface and collaboration features.
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
                      <Eye className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
              What <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Innovation Leaders</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from technology pioneers and productivity experts who are transforming their workflows with our platform.
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
                  <Eye className="w-4 h-4" />
                  <span>Experience Holographic Computing</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready for <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Holographic Computing?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join the holographic revolution in productivity and collaboration. 
                  Experience the future of computing with our immersive 3D workspace.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Try Demo</span>
                    <Eye className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default AIHolographicWorkspacePage