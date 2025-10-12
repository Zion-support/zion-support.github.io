import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, TrendingUp, BarChart3, Brain, Target, Shield, Zap, Globe, Star, DollarSign, Clock, PieChart, Activity, Share2, MessageSquare, Users, Hash } from 'lucide-react'
import { Link } from 'react-router-dom'

const AISocialSchedulerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Optimization',
      description: 'AI analyzes your audience and suggests optimal posting times, hashtags, and content types for maximum engagement',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule posts across multiple platforms at the best times for your audience',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track engagement, reach, and ROI with detailed analytics and performance insights',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Target,
      title: 'Audience Insights',
      description: 'Understand your audience better with AI-powered demographic and behavioral analysis',
      color: 'from-rose-500 to-pink-500'
    }
  ]

  const capabilities = [
    'Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)',
    'AI-powered optimal timing suggestions',
    'Hashtag research and optimization',
    'Content calendar management',
    'Bulk upload and scheduling',
    'Engagement tracking and analytics',
    'Audience growth monitoring',
    'Competitor analysis',
    'Content performance insights',
    'Automated posting reminders',
    'Team collaboration tools',
    'White-label reporting'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 3 social accounts',
        'Basic scheduling',
        'Email support',
        'Standard analytics',
        '30-day history'
      ],
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 10 social accounts',
        'AI optimization',
        'Priority support',
        'Advanced analytics',
        'Unlimited history',
        'Team collaboration'
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'Custom reporting'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    'Increase engagement by 45%',
    'Save 10+ hours per week',
    'Grow followers by 60%',
    'Improve content performance',
    'Streamline social media management',
    'Boost brand visibility',
    'Optimize posting schedules',
    'Enhance team productivity'
  ]

  const platformTypes = [
    {
      title: 'Facebook & Instagram',
      description: 'Schedule posts, stories, and reels with optimal timing and hashtags',
      icon: Share2,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Twitter & LinkedIn',
      description: 'Manage professional content and engage with your network effectively',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'YouTube & TikTok',
      description: 'Schedule video content and optimize for maximum reach',
      icon: Activity,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Analytics & Insights',
      description: 'Track performance across all platforms with unified reporting',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Scheduler | Zion Tech Group</title>
        <meta name="description" content="Automate your social media with AI-powered scheduling. Increase engagement by 45% and save 10+ hours per week with intelligent social media management." />
        <meta name="keywords" content="AI social media scheduler, social media automation, content scheduling, social media management, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              AI-Powered Social Media Management
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Social
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Scheduler
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Automate your social media with AI-powered scheduling. Increase engagement by 45% and save 
            10+ hours per week with intelligent social media management across all platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-gray-300">Hours Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">60%</div>
              <div className="text-gray-300">Follower Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">8</div>
              <div className="text-gray-300">Platforms Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Social Media Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that transforms your social media strategy into a growth engine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Types Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Platform Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformTypes.map((type, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{type.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Social Media Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate social media and grow your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center text-gray-300 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' : 'border-white/20'} hover:border-cyan-400/50 transition-all duration-300 hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-center block`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have grown their social media presence with AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div>
                <div className="text-gray-300">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your free trial today and see how AI can revolutionize your social media strategy.
                </p>
                
                <div className="mb-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="font-semibold">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-2" />
                      <span className="font-semibold">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AISocialSchedulerPage