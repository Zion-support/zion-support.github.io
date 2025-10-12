<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  Shield,
  Globe,
  Smartphone,
  Phone,
  Calendar,
  FileText,
  PieChart,
  Activity,
  DollarSign,
  Users,
  Send,
  Eye,
  MousePointer,
  Filter,
  Settings
} from 'lucide-react';

export default function AIEmailMarketingAutomationPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
=======
import React from 'react'

import Layout from '../layout'

import { ArrowRight, Mail } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-b5ac

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Email Generation',
      description: 'Create compelling email campaigns using advanced AI algorithms',
      benefits: ['Personalized content', 'Subject line optimization', 'A/B testing automation']
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior and preferences',
      benefits: ['Behavioral triggers', 'Demographic targeting', 'Engagement scoring']
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: 'Optimal Timing',
      description: 'Send emails at the perfect time when recipients are most likely to engage',
      benefits: ['Send time optimization', 'Timezone management', 'Frequency capping']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Advanced Analytics',
      description: 'Track performance and get actionable insights for better campaigns',
      benefits: ['Open rate tracking', 'Click-through analysis', 'Revenue attribution']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automation Workflows',
      description: 'Create complex email sequences that nurture leads automatically',
      benefits: ['Drip campaigns', 'Welcome series', 'Re-engagement flows']
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Compliance & Security',
      description: 'Ensure GDPR compliance and maintain high deliverability rates',
      benefits: ['GDPR compliance', 'Spam score monitoring', 'List hygiene tools']
    }
  ];

  const automationTypes = [
    {
      type: 'Welcome Series',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      description: 'Automated onboarding sequence for new subscribers',
      benefits: ['3-5 email sequence', 'Personalized content', 'High engagement rates']
    },
    {
      type: 'Abandoned Cart',
      icon: <MousePointer className="w-6 h-6 text-green-400" />,
      description: 'Recover lost sales with targeted cart abandonment emails',
      benefits: ['3-stage recovery', 'Dynamic product display', 'Urgency tactics']
    },
    {
      type: 'Re-engagement',
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      description: 'Win back inactive subscribers with smart re-engagement campaigns',
      benefits: ['Behavioral triggers', 'Special offers', 'Win-back incentives']
    },
    {
      type: 'Birthday & Anniversaries',
      icon: <Calendar className="w-6 h-6 text-orange-400" />,
      description: 'Celebrate special occasions with personalized automated emails',
      benefits: ['Personalized offers', 'Gift suggestions', 'Celebration messages']
    },
    {
      type: 'Post-Purchase',
      icon: <CheckCircle className="w-6 h-6 text-red-400" />,
      description: 'Follow up after purchase with relevant product recommendations',
      benefits: ['Order confirmation', 'Product reviews', 'Upsell opportunities']
    },
    {
      type: 'Educational',
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
      description: 'Nurture leads with valuable content and educational materials',
      benefits: ['Content series', 'Progressive profiling', 'Lead scoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and marketers',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Automation workflows',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
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
        'Unlimited subscribers',
        'All AI features',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      company: 'E-commerce Store',
      content: 'The AI Email Marketing Automation has increased our email revenue by 180%. The automated workflows save us 20+ hours per week and our open rates improved by 40%.',
      rating: 5,
      avatar: 'AF'
    },
    {
      name: 'Robert Kim',
      company: 'SaaS Startup',
      content: 'Our customer onboarding process is now fully automated. The AI-generated welcome series has increased our trial-to-paid conversion by 35%.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Lisa Chen',
      company: 'Digital Agency',
      content: 'Managing multiple client campaigns used to be a nightmare. Now with AI automation, we can handle 3x more clients with the same team size.',
      rating: 5,
      avatar: 'LC'
    }
  ];

  const stats = [
    { number: '180%', label: 'Increase in Email Revenue', icon: <DollarSign className="w-6 h-6" /> },
    { number: '40%', label: 'Higher Open Rates', icon: <Eye className="w-6 h-6" /> },
    { number: '35%', label: 'Better Conversion Rates', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '20hrs', label: 'Time Saved Per Week', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group | Automated Email Campaigns</title>
        <meta name="description" content="Transform your email marketing with our AI-powered Email Marketing Automation. Increase revenue by 180% with intelligent campaigns, segmentation, and automation workflows." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, marketing automation, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your email marketing with our AI-powered Email Marketing Automation. 
            Increase revenue by 180% with intelligent campaigns, segmentation, and automation workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Email Marketing Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI Email Marketing Automation comes packed with advanced features to automate and optimize 
              your email campaigns for maximum engagement and revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Automation Workflows</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Create powerful automated email sequences that nurture leads and drive conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{type.type}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-1">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-gray-400">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your email marketing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their email marketing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our AI Email Marketing Automation today and see how intelligent automation 
              can increase your revenue by 180%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Mail className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}