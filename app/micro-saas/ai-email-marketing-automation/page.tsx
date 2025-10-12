import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react';

import { Link } from 'react-router-dom';
import {Bot} from 'lucide-react';

import {Smartphone, Bot, Smartphone as Mobile} from 'lucide-react';

export default function AIEmailMarketingAutomationPage() {
  const features = [
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate personalized email content with AI that adapts to your brand voice and audience'
    },
      icon: <Target className="w-6h-6text-emerald-400" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns'
    },
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights predict the best send times, subject lines, and content for maximum engagement'
    },
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Automated Workflows',
      description: 'Create intelligent email sequences that adapt based on recipient behavior and engagement'
    },
      icon: <Eye className="w-6h-6text-pink-400" />,
      title: 'A/B Testing AI',
      description: 'Automatically test and optimize email elements with AI-driven insights and recommendations'
    },
      icon: <Shield className="w-6h-6text-red-400" />,

      title: 'Deliverability Optimization',
      description: 'AI-powered tools ensure maximum inbox placement and compliance with email regulations'
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'A/B testing',
        'Landing pages'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited subscribers',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Rachel Green',
      company: 'E-commerce Store',
      content: 'Increased our email open rates by 150% and revenue by 40%. The AI content generation is incredible.',
      rating: 5,
      avatar: 'RG'
    },
      name: 'David Park',
      company: 'SaaS Company',
      content: 'The automated workflows save us 20+ hours per week. Customer engagement has never been higher.',
      rating: 5,
      avatar: 'DP'
    },
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Our clients love the results. The AI segmentation and personalization features are game-changers.',
      rating: 5,
      avatar: 'LC'
  ]

  const benefits = [

      icon: <TrendingUp className="w-8h-8text-cyan-400" />,
      title: '150% Higher Open Rates',
      description: 'AI-optimized subject lines and send times maximize engagement'
    },
      icon: <DollarSign className="w-8h-8text-emerald-400" />,
      title: '40% Revenue Increase',
      description: 'Personalized content and smart segmentation drive conversions'
    },
      icon: <Clock className="w-8h-8text-purple-400" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated workflows and AI content generation eliminate manual work'
    },
      icon: <Target className="w-8h-8text-orange-400" />,

      title: '95% Deliverability',
      description: 'AI-powered optimization ensures maximum inbox placement'
  ]

  const emailTypes = [
    { name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers with personalized sequences' },
    { name: 'Product Recommendations', icon: '🛍️', description: 'AI-powered product suggestions based on behavior' },
    { name: 'Cart Abandonment', icon: '🛒', description: 'Recover lost sales with intelligent follow-up campaigns' },
    { name: 'Re-engagement', icon: '🔄', description: 'Win back inactive subscribers with targeted content' },
    { name: 'Birthday & Anniversaries', icon: '🎉', description: 'Celebrate special moments with personalized messages' },
    { name: 'Educational Content', icon: '📚', description: 'Nurture leads with valuable, AI-generated content' 
  ]

  return (

        <title>5G Data Analytics - Zion Tech Group</title>

      {/* Hero Section */
    
            <span>AI-Powered Email Marketing</span>

            AI Email Marketing
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Automation
          
            Transform your email marketing with AI-powered automation, smart segmentation, and personalized content. 
            Increase open rates by 150% and revenue by 40% with intelligent campaigns.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */

              <div className="text-3 xl font-boldtext-cyan-400mb-2">150%</div>
              <div className="text-gray-300text-sm">Higher Open Rates</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">40%</div>
              <div className="text-gray-300text-sm">Revenue Increase</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">95%</div>
              <div className="text-gray-300text-sm">Deliverability Rate</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">50 K+</div>
              <div className="text-gray-300text-sm">Active Users</div>

      {/* Benefits Section */
    
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Email Marketing?</span>

              Experience the future of email marketing with cutting-edge AI technology that works for your business.

 (
    
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon

                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title
                  {benefit.description
    
            ))

      {/* Email Types Section */
    
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Email Campaigns</span>

              Create intelligent email campaigns that adapt and optimize based on recipient behavior and preferences.

 (
    
                  <div className="text-4xlmb-4">{emailType.icon}</div>
                  <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{emailType.name
                  {emailType.description
    
            ))

      {/* Features Section */
    
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Email Marketing</span>

              Everything you need to create, send, and optimize email campaigns with AI-powered intelligence.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title
                  {feature.description
    
            ))

      {/* Pricing Section */
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your subscriber count and marketing needs. All plans include our core AI features.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

                  ))

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`

Get Started
    
            ))

      {/* Testimonials Section */
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">50,000+</span> Marketers

              See what our customers are saying about their success with our AI email marketing automation.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))

      {/* CTA Section */
