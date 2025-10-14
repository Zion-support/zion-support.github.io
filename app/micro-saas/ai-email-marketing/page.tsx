import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Brain, Target, BarChart3, CheckCircle, Star, Users, Clock, Zap, Globe, Shield, Sparkles, PenTool, Calendar, DollarSign, FileText, MessageSquare, Mic, Code, Eye, EyeOff, Key, Fingerprint, Smartphone, Laptop, Monitor, Database, Cpu, Network, AlertTriangle } from 'lucide-react'

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.'
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation that automatically groups subscribers based on behavior, preferences, and engagement patterns.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict email performance, optimal send times, and subscriber behavior to maximize ROI.'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Automation Workflows',
      description: 'Intelligent email automation that triggers based on subscriber actions, preferences, and engagement levels.'
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: 'Personalization Engine',
      description: 'Dynamic content personalization that adapts emails to each subscriber\'s interests, behavior, and demographics.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Channel Integration',
      description: 'Seamlessly integrate with social media, SMS, and other marketing channels for unified campaign management.'
    }
  ]

  const emailFeatures = [
    {
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      title: 'Email Builder',
      description: 'Drag-and-drop email builder with AI-powered templates and content suggestions.',
      price: 'Included',
      features: ['Drag-and-drop editor', 'AI templates', 'Mobile optimization', 'A/B testing']
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: 'AI Content Assistant',
      description: 'Generate subject lines, email content, and CTAs using AI that learns from your best-performing campaigns.',
      price: 'Included',
      features: ['Subject line generation', 'Content creation', 'CTA optimization', 'Brand voice training']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns.',
      price: 'Included',
      features: ['Behavioral segmentation', 'Demographic targeting', 'Engagement scoring', 'Dynamic lists']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with predictive insights and performance optimization.',
      price: '$9.99/month',
      features: ['Predictive analytics', 'ROI tracking', 'Engagement insights', 'Custom reports']
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: 'Automation Studio',
      description: 'Create complex email automation workflows with AI-powered triggers and conditions.',
      price: '$19.99/month',
      features: ['Visual workflow builder', 'AI triggers', 'Conditional logic', 'Multi-step campaigns']
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Deliverability Suite',
      description: 'Advanced deliverability tools to ensure your emails reach the inbox and avoid spam filters.',
      price: '$14.99/month',
      features: ['Spam score analysis', 'IP warming', 'Reputation monitoring', 'Bounce management']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 subscribers',
        'Unlimited emails',
        'AI content generation',
        'Basic automation',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25,000 subscribers',
        'Everything in Starter',
        'Advanced automation',
        'Predictive analytics',
        'Priority support',
        'Custom integrations',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Everything in Professional',
        'Advanced analytics',
        'Custom AI training',
        'Dedicated support',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '40%', label: 'Higher Open Rates', icon: <Mail className="w-6 h-6 text-cyan-400" /> },
    { number: '60%', label: 'Better Click Rates', icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { number: '300%', label: 'ROI Increase', icon: <BarChart3 className="w-6 h-6 text-purple-400" /> },
    { number: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6 text-orange-400" /> }
  ]

  const testimonials = [
    {
      name: 'Jennifer Smith',
      company: 'E-commerce Store',
      content: 'Zion Tech Group\'s AI Email Marketing has transformed our email campaigns. Our open rates increased by 40% and our revenue from email marketing has tripled in just 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'SaaS Startup',
      content: 'The AI content generation is incredible. We can now create personalized email campaigns for different customer segments in minutes instead of hours. The automation features are a game-changer.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Marketing Agency',
      content: 'The predictive analytics help us optimize our campaigns before we even send them. We\'ve been able to increase our clients\' email ROI by 300% using this platform.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Email Marketing - Intelligent Email Campaigns | Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered campaigns. Smart segmentation, content generation, and automation with 40% higher open rates and 300% ROI increase." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, email segmentation, email analytics, email personalization" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-email-marketing" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Mail className="w-4 h-4" />
              <span>AI-Powered Email Marketing</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Intelligent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Email Marketing</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your email marketing with AI-powered campaigns. Smart segmentation, 
              content generation, and automation to maximize your email ROI and engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Email Marketing?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven email marketing with our proven results.
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
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Email Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to create, send, and optimize email campaigns with artificial intelligence.
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

        {/* Email Features Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Email <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive email marketing features powered by artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emailFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {feature.price}
                    </div>
                    <div className="space-y-1">
                      {feature.features.map((feat, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
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
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Marketers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join thousands of marketers who have transformed their email campaigns with our AI platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Email Marketing?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of marketers using our AI platform to create high-performing email campaigns. 
                Start your free trial today and see the difference AI can make.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
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
          </div>
        </section>
      </div>
    </>
  )
}

export default AIEmailMarketingPage