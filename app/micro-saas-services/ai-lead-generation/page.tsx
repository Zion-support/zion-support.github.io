import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Target, Zap, Star, Clock, Users, BarChart3, Globe, Shield, Sparkles, Search, Filter, TrendingUp, Mail, Phone } from 'lucide-react'

export default function AiLeadGenerationPage() {
  const features = [
    {
      title: 'Automated Prospecting',
      description: 'AI-powered lead discovery using advanced search algorithms and data mining.',
      icon: <Search className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Smart Lead Scoring',
      description: 'Intelligent lead qualification based on behavior, demographics, and engagement.',
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRM systems for streamlined workflow.',
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Email Sequences',
      description: 'Automated email campaigns with personalized messaging and follow-ups.',
      icon: <Mail className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Social Media Monitoring',
      description: 'Track social media mentions and engagement to identify potential leads.',
      icon: <Globe className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Performance Tracking',
      description: 'Comprehensive analytics and reporting on lead generation performance.',
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '500 leads per month',
        'Basic lead scoring',
        'Email sequences',
        'Basic analytics',
        'Email support',
        '1 CRM integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '2,000 leads per month',
        'Advanced lead scoring',
        'Multi-channel campaigns',
        'Advanced analytics',
        'Priority support',
        '3 CRM integrations',
        'Social media monitoring',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited leads',
        'AI-powered scoring',
        'Custom campaigns',
        'Advanced analytics',
        '24/7 support',
        'Unlimited integrations',
        'White-label options',
        'Custom AI training',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Mark Thompson',
      company: 'Sales Director',
      content: 'Our lead generation increased by 300% in just 3 months. The AI scoring is incredibly accurate.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Williams',
      company: 'Marketing Manager',
      content: 'The automated email sequences have improved our conversion rate by 150%. Highly recommended!',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'James Anderson',
      company: 'CEO',
      content: 'This tool has transformed our sales process. We\'re generating 5x more qualified leads than before.',
      rating: 5,
      avatar: 'JA'
    }
  ]

  const leadSources = [
    { source: 'Website Visitors', percentage: 35, color: 'bg-cyan-500' },
    { source: 'Social Media', percentage: 25, color: 'bg-green-500' },
    { source: 'Email Campaigns', percentage: 20, color: 'bg-blue-500' },
    { source: 'Referrals', percentage: 15, color: 'bg-purple-500' },
    { source: 'Other', percentage: 5, color: 'bg-yellow-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Lead Generation - Zion Tech Group</title>
        <meta name="description" content="Automated lead discovery, qualification, and nurturing with AI-powered prospecting and CRM integration. Boost your sales pipeline today!" />
        <meta name="keywords" content="AI lead generation, lead prospecting, sales automation, CRM integration, email sequences, lead scoring" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Sales & Marketing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Lead Generation
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Automate your lead discovery, qualification, and nurturing with our AI-powered platform. 
            Generate more qualified leads and boost your sales pipeline with intelligent prospecting.
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
              to="#demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Lead Sources Visualization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Where Your Leads Come From</h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border border-red-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Lead Sources Breakdown</h3>
                <div className="space-y-4">
                  {leadSources.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color.replace('bg-', '') }}></div>
                      <span className="text-gray-300 flex-1">{item.source}</span>
                      <span className="text-white font-semibold">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-green-400 font-semibold">24.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Per Lead</span>
                    <span className="text-cyan-400 font-semibold">$12.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Lead Quality Score</span>
                    <span className="text-purple-400 font-semibold">8.7/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-yellow-400 font-semibold">2.3 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-red-400/40 ring-2 ring-red-400/20' : 'border-red-500/20 hover:border-red-400/40'
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500/20 to-cyan-500/20 rounded-2xl p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Generate More Qualified Leads?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of sales teams already using our AI Lead Generation platform to boost their pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}