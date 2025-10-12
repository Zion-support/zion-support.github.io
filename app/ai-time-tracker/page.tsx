import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Clock, Timer, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Users, Globe, Award, Target, Lightbulb, Bot, Brain, Cpu, Database, Cloud, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, Receipt, CreditCard, Smartphone, Shield, PieChart, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

const AITimeTrackerPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
=======
      icon: <Brain className="w-8-h-8text-cyan-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'AI Activity Recognition',
      description: 'Automatically detect and categorize work activities using AI to eliminate manual time entry.',
      benefits: ['Auto-detection', 'Smart categorization', 'Context awareness', 'Learning algorithms']
    },
    {
<<<<<<< HEAD
      icon: <Timer className="w-8 h-8 text-emerald-400" />,
=======
      icon: <Timer className="w-8-h-8text-emerald-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Smart Time Tracking',
      description: 'AI-powered time tracking that learns your work patterns and suggests optimal time allocation.',
      benefits: ['Pattern learning', 'Optimal suggestions', 'Focus time detection', 'Break reminders']
    },
    {
<<<<<<< HEAD
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
=======
      icon: <TrendingUp className="w-8-h-8text-purple-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Productivity Analytics',
      description: 'Comprehensive analytics with AI insights to improve productivity and work-life balance.',
      benefits: ['Productivity metrics', 'Efficiency analysis', 'Distraction tracking', 'Goal setting']
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-red-400" />,
=======
      icon: <Zap className="w-8-h-8text-red-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Automated Reporting',
      description: 'Generate detailed time reports automatically with AI-powered insights and recommendations.',
      benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics']
    },
    {
<<<<<<< HEAD
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
=======
      icon: <BarChart3 className="w-8-h-8text-orange-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Project Management',
      description: 'AI-driven project time estimation and resource allocation for better project planning.',
      benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitoring']
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-8 h-8 text-pink-400" />,
=======
      icon: <Shield className="w-8-h-8text-pink-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Privacy Protection',
      description: 'Advanced privacy controls with local processing to protect sensitive work data.',
      benefits: ['Local processing', 'Data encryption', 'Privacy controls', 'GDPR compliance']
    }
  ]

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and individual professionals',
      features: [
        'Unlimited time tracking',
        'Basic AI features',
        'Mobile app access',
        'Standard reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Up to 10 team members',
        'Advanced AI features',
        'Team collaboration',
        'Project management',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'Freelance Designer',
      content: 'AI Time Tracker increased my productivity by 40%. The auto-detection feature is a game-changer.',
      rating: 5,
      avatar: 'AJ'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Project Manager',
      content: 'The project time estimation feature helped us deliver projects 20% faster with better accuracy.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'David Kim',
      company: 'Software Developer',
      content: 'Finally, a time tracker that actually understands my work patterns. Highly recommended!',
      rating: 5,
      avatar: 'DK'
    }
  ]

  const stats = [
<<<<<<< HEAD
    { number: '40%', label: 'Productivity Increase', icon: <TrendingUp className="w-6 h-6 text-cyan-400" /> },
    { number: '20%', label: 'Faster Delivery', icon: <Timer className="w-6 h-6 text-emerald-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '50K+', label: 'Hours Tracked', icon: <Clock className="w-6 h-6 text-orange-400" /> }
=======
    { number: '40%', label: 'Productivity Increase', icon: <TrendingUp className="w-6-h-6text-cyan-400" / /> },
    { number: '20%', label: 'Faster Delivery', icon: <Timer className="w-6-h-6text-emerald-400" / /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6-h-6text-purple-400" / /> },
    { number: '50 K+', label: 'Hours Tracked', icon: <Clock className="w-6-h-6text-orange-400" / /> }
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  ]

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>AI Time Tracker - Smart Productivity Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered time tracking with activity recognition, productivity analytics, and automated reporting. Increase productivity by 40% and deliver projects 20% faster." />
        <meta name="keywords" content="AI time tracking, productivity management, activity recognition, time analytics, project management, work optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-400/30">
            <Clock className="w-4 h-4" />
            <span>AI-Powered Time Management</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Time
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tracker Pro
=======
      <Helmet />
        <title   />AI Time Tracker - Smart Productivity Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered time tracking with activity recognition, productivity analytics, and automated reporting. Increase productivity by 40% and deliver projects 20% faster." />
        <meta name="keywords" content="AI time tracking, productivity management, activity recognition, time analytics, project management, work optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker" / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900-via-indigo-900to-slate-900" />
        <div className="absoluteinset-0-bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)]" / />
        <div className="absoluteinset-0-bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <div className="relative max-w-7 xlmx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-400 px-6 py-3 rounded-full text-sm font-medium mb-8-borderborder-indigo-400/30">
            <Clock className="w-4-h-4" / />
            <span   />AI-Powered Time Management</span>
          </div>
          
          <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8-leading-tight" />
            AI Time
            <br / />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400-bg-clip-texttext-transparent"  />Tracker Pro
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your productivity with AI-powered time tracking, 
            activity recognition, and intelligent insights that increase efficiency by 40%.
          </p>
          
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#demo" 
              className="group border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
=======
          <div className="flex flex-col sm:flex-row gap-6-justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600  hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40-transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <ArrowRight className="w-5 h-5-group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#demo" className="group border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2-backdrop-blur-sm" />
              <span   />Watch Demo</span>
              <ArrowRight className="w-5 h-5-group-hover:translate-x-1transition-transform" />
                    </Link>
      </div>
    </div>
      </section>

      {/* Stats Section */}
      <section className="py-20-px-4bg-gray-900" />
        <div className="max-w-7-xlmx-auto">
          <div className="grid grid-cols-2-md:grid-cols-4gap-8">
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6-borderborder-white/10" />
                <div className="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className="text-3 xl md:text-4 xl font-boldtext-white mb-2"  />{stat.number}
                </div>
                <div className="text-gray-300-text-sm"  />{stat.label}
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-indigo-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
=======
      <section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50-to-indigo-900/50" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
              Intelligent <span className="bg-gradient-to-r from-indigo-400 to-cyan-400-bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Our AI-powered time tracking platform uses machine learning to automatically 
              track activities, analyze productivity patterns, and provide actionable insights.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
=======
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300-hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110-transition-transformduration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4-group-hover:text-indigo-400transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300-mb-6leading-relaxed" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
<<<<<<< HEAD
                    <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
=======
                    <div key="{benefitIndex}" className="flex items-center space-x-2-text-gray-400text-sm" />
                      <CheckCircle className="w-4-h-4text-green-400" / />
                      <span   />{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
=======
      <section className="py-20-px-4bg-gray-900" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
              Simple <span className="bg-gradient-to-r from-indigo-400 to-cyan-400-bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Choose the perfect plan for your time tracking needs. All plans include our core AI features 
              with flexible options for individuals and teams.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
          <div className="grid grid-cols-1-md:grid-cols-3gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-400/50 shadow-2xl shadow-indigo-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
<<<<<<< HEAD
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
=======
                  <div className="absolute -top-4 left-1/2-transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
=======
                  <h3 className="text-2 xl font-boldtext-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300-mb-4" />{plan.description}</p>
                  <div className="flexitems-baselinejustify-center">
                    <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400 ml-2"   />{plan.period}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
=======
                    <div key="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5-text-green-400flex-shrink-0" / />
                      <span className="text-gray-300"   />{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-600 text-white hover:from-indigo-600 hover:to-cyan-700 shadow-lg shadow-indigo-500/25'
                      : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900'
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
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Professionals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
=======
      <section className="py-20 px-4 bg-gradient-to-brfrom-indigo-900/50-to-purple-900/50" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
              Trusted by <span className="bg-gradient-to-r from-indigo-400 to-purple-400-bg-clip-texttext-transparent"   />Professionals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              See how AI Time Tracker is transforming productivity for professionals and teams worldwide.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
=======
          <div className="grid grid-cols-1-md:grid-cols-3gap-8">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8-borderborder-white/20" />
                <div className="flexitems-centermb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <p className="text-gray-400-text-sm" />{testimonial.company}</p>
                  </div>
                </div>
                <div className="flexitems-centermb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5-text-yellow-400fill-current" / />
                  ))}
                </div>
                <p className="text-gray-300-italic" />"{testimonial.content}"</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 via-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Boost Your
            <br />
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Productivity?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of professionals already increasing productivity and improving work-life balance with AI Time Tracker. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View All Plans</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
=======
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600-via-cyan-600to-blue-600" />
        <div className="max-w-7 xlmx-auto text-center">
          <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-white mb-6" />
            Ready to Boost Your
            <br / />
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300-bg-clip-texttext-transparent"  />Productivity?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4-xlmx-auto" />
            Join thousands of professionals already increasing productivity and improving work-life balance with AI Time Tracker. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-rowgap-6-justify-center">
            <Link to="/contact" className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <span   />Start Free Trial</span>
              <ArrowRight className="w-5 h-5-group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2-backdrop-blur-sm" />
              <span   />View All Plans</span>
              <ArrowRight className="w-5 h-5-group-hover:translate-x-1transition-transform" />
                    </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      </section>
    </>
  )
}

export default AITimeTrackerPage