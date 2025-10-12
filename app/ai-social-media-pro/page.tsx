'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Share2, Clock, Users, Zap, BarChart3, Camera, MessageSquare, TrendingUp, Star, Globe, Smartphone, Heart, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const AISocialMediaProPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using AI that understands your brand voice and audience preferences.'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience activity patterns and engagement data.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive social media analytics with AI insights to optimize your content strategy and ROI.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Audience Intelligence',
      description: 'AI analyzes your audience demographics, interests, and behavior to create targeted content strategies.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual creators and influencers',
      features: [
        'Up to 5 social accounts',
        'AI content generation',
        'Basic scheduling',
        'Analytics dashboard',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Up to 20 social accounts',
        'Advanced AI features',
        'Team collaboration',
        'Custom branding',
        'Priority support',
        'API integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social accounts',
        'White-label solution',
        'Custom AI training',
        'Dedicated account manager',
        'Advanced security',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: '300% Increase in Engagement',
      description: 'AI-optimized content and timing leads to significantly higher engagement rates.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Save 20 Hours Weekly',
      description: 'Automated content creation and scheduling frees up time for strategy and creativity.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: '50% Faster Growth',
      description: 'AI-driven audience targeting and content optimization accelerates follower growth.'
    }
  ]

  const platforms = [
    { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-600' },
    { name: 'Facebook', icon: '👥', color: 'from-blue-500 to-blue-700' },
    { name: 'Twitter', icon: '🐦', color: 'from-sky-400 to-blue-500' },
    { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-800' },
    { name: 'TikTok', icon: '🎵', color: 'from-black to-gray-800' },
    { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-700' },
    { name: 'Pinterest', icon: '📌', color: 'from-red-500 to-pink-600' },
    { name: 'Snapchat', icon: '👻', color: 'from-yellow-400 to-yellow-600' }
  ]

  const contentTypes = [
    {
      title: 'AI-Generated Posts',
      description: 'Create engaging posts tailored to each platform with AI-powered content generation.',
      icon: '✍️'
    },
    {
      title: 'Visual Content',
      description: 'Generate eye-catching images and graphics using AI design tools.',
      icon: '🎨'
    },
    {
      title: 'Video Content',
      description: 'Create short-form videos optimized for each social platform.',
      icon: '🎬'
    },
    {
      title: 'Stories & Reels',
      description: 'Generate engaging stories and reels content that drives engagement.',
      icon: '📱'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Social Media Pro - Intelligent Social Media Management | Zion Tech Group"
        description="Revolutionary AI-powered social media management platform with content generation, smart scheduling, and advanced analytics. Boost your social presence today!"
        keywords="AI social media, social media management, content generation, social media automation, social media analytics, social media scheduling"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Social Media
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your social media presence with AI-powered content creation, smart scheduling, 
            and intelligent analytics. Grow your audience and engagement like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
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
              Our AI learns from your audience and content performance to optimize your social media strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one unified dashboard with AI optimization.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-2">{platform.icon}</div>
                <div className="text-white font-medium">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Content Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create engaging content across all formats with AI assistance and optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{content.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{content.title}</h3>
                <p className="text-gray-300">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of brands already benefiting from AI-powered social media management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your free 14-day trial today. No credit card required. Experience the future of social media management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AISocialMediaProPage