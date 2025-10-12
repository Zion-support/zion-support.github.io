import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Globe, Award, Target, Lightbulb, Bot, Brain, Cpu, Database, Cloud, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, Receipt, CreditCard, Smartphone, Shield, PieChart, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import React from 'react';
import { Share2, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

const AISocialSchedulerPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
=======
      icon: <Brain className="w-8-h-8text-cyan-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts using AI that understands your brand voice and audience preferences.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation']
    },
    {
<<<<<<< HEAD
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
=======
      icon: <Calendar className="w-8-h-8text-emerald-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync']
    },
    {
<<<<<<< HEAD
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
=======
      icon: <TrendingUp className="w-8-h-8text-purple-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights to improve your social media strategy.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
<<<<<<< HEAD
      icon: <Share2 className="w-8 h-8 text-red-400" />,
=======
      icon: <Share2 className="w-8-h-8text-red-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
      benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation']
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-orange-400" />,
=======
      icon: <Zap className="w-8-h-8text-orange-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Automated Engagement',
      description: 'AI-powered auto-responses and engagement tools to maintain active social media presence.',
      benefits: ['Auto-responses', 'Comment management', 'Hashtag optimization', 'Community building']
    },
    {
<<<<<<< HEAD
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
=======
      icon: <BarChart3 className="w-8-h-8text-pink-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with AI-driven recommendations.',
      benefits: ['Campaign planning', 'A/B testing', 'Performance tracking', 'Budget optimization']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Custom AI training'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Agency',
      content: 'AI Social Scheduler increased our client engagement by 150%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerce Brand',
      content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we\'ve ever used.',
      rating: 5,
      avatar: 'TA'
    },
    {
      name: 'Sarah Kim',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week on content planning. The AI understands my brand voice perfectly.',
      rating: 5,
      avatar: 'SK'
    }
  ]

  const stats = [
<<<<<<< HEAD
    { number: '150%', label: 'Engagement Increase', icon: <TrendingUp className="w-6 h-6 text-cyan-400" /> },
    { number: '200%', label: 'Reach Improvement', icon: <Globe className="w-6 h-6 text-emerald-400" /> },
    { number: '10hrs', label: 'Time Saved/Week', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '50K+', label: 'Posts Scheduled', icon: <Calendar className="w-6 h-6 text-orange-400" /> }
=======
    { number: '150%', label: 'Engagement Increase', icon: <TrendingUp className="w-6-h-6text-cyan-400" / /> },
    { number: '200%', label: 'Reach Improvement', icon: <Globe className="w-6-h-6text-emerald-400" / /> },
    { number: '10 hrs', label: 'Time Saved/Week', icon: <Clock className="w-6-h-6text-purple-400" / /> },
    { number: '50 K+', label: 'Posts Scheduled', icon: <Calendar className="w-6-h-6text-orange-400" / /> }
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  ]

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>AI Social Scheduler - Smart Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with content generation, smart scheduling, and performance analytics. Increase engagement by 150% and save 10+ hours per week." />
        <meta name="keywords" content="AI social media scheduler, social media automation, content generation, social media analytics, social media management, AI content creation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-scheduler" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-pink-400/30">
            <Share2 className="w-4 h-4" />
            <span>AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Social
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scheduler Pro
=======
      <Helmet />
        <title   />AI Social Scheduler - Smart Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with content generation, smart scheduling, and performance analytics. Increase engagement by 150% and save 10+ hours per week." />
        <meta name="keywords" content="AI social media scheduler, social media automation, content generation, social media analytics, social media management, AI content creation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-scheduler" / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900-via-pink-900to-slate-900" />
        <div className="absoluteinset-0-bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" / />
        <div className="absoluteinset-0-bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <div className="relative max-w-7 xlmx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8-borderborder-pink-400/30">
            <Share2 className="w-4-h-4" / />
            <span   />AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8-leading-tight" />
            AI Social
            <br / />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400-bg-clip-texttext-transparent"  />Scheduler Pro
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your social media presence with AI-powered content generation, 
            smart scheduling, and performance analytics that increase engagement by 150%.
          </p>
          
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#demo" 
              className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
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
            <Link to="/contact" className="group bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600  hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40-transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <ArrowRight className="w-5 h-5-group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#demo" className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2-backdrop-blur-sm" />
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
=======
      <section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50-to-pink-900/50" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
              Powerful <span className="bg-gradient-to-r from-pink-400 to-cyan-400-bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Our AI-powered social media scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
=======
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300-hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110-transition-transformduration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4-group-hover:text-pink-400transition-colors"  />{feature.title}
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
              Affordable <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
=======
      <section className="py-20-px-4bg-gray-900" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
              Affordable <span className="bg-gradient-to-r from-pink-400 to-cyan-400-bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Choose the perfect plan for your social media management needs. All plans include our core AI features 
              with flexible options for businesses of all sizes.
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
                  ? 'border-pink-400/50 shadow-2xl shadow-pink-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
<<<<<<< HEAD
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
=======
                  <div className="absolute -top-4 left-1/2-transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
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
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-600 text-white hover:from-pink-600 hover:to-cyan-700 shadow-lg shadow-pink-500/25'
                      : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-gray-900'
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
      <section className="py-20 px-4 bg-gradient-to-br from-pink-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Marketers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
=======
      <section className="py-20 px-4 bg-gradient-to-brfrom-pink-900/50-to-purple-900/50" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
              Loved by <span className="bg-gradient-to-r from-pink-400 to-purple-400-bg-clip-texttext-transparent"   />Marketers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              See how AI Social Scheduler is transforming social media management for businesses and creators worldwide.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
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
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Social Media Strategy?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
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
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600-via-purple-600to-cyan-600" />
        <div className="max-w-7 xlmx-auto text-center">
          <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-white mb-6" />
            Ready to Transform Your
            <br / />
            <span className="bg-gradient-to-r from-pink-300 to-cyan-300-bg-clip-texttext-transparent"  />Social Media Strategy?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4-xlmx-auto" />
            Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-rowgap-6-justify-center">
            <Link to="/contact" className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
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

export default AISocialSchedulerPage