import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Mail, Zap, Star, Clock, Users, BarChart3, Globe, Shield, Sparkles, Send, Inbox, Filter, Archive } from 'lucide-react'

export default function AiEmailAssistantPage() {
  const features = [
    {
      title: 'Smart Email Writing',
      description: 'AI-powered email composition with tone adjustment and context awareness.',
      icon: <Send className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Auto-Scheduling',
      description: 'Intelligent scheduling based on recipient timezone and optimal send times.',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Follow-up Automation',
      description: 'Automated follow-up sequences with personalized messaging.',
      icon: <Inbox className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Inbox Organization',
      description: 'Smart categorization and priority management for your emails.',
      icon: <Filter className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Template Library',
      description: 'Extensive collection of professional email templates for every occasion.',
      icon: <Archive className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Email Analytics',
      description: 'Track open rates, response rates, and engagement metrics.',
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '100 emails per month',
        'Basic templates',
        'Email scheduling',
        'Basic analytics',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '1,000 emails per month',
        'Advanced templates',
        'Smart scheduling',
        'Advanced analytics',
        'Priority support',
        '5 user accounts',
        'API access',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Premium templates',
        'AI-powered writing',
        'Advanced analytics',
        '24/7 support',
        'Unlimited users',
        'White-label options',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Marketing Agency',
      content: 'The AI email assistant has cut our email writing time by 70%. The smart scheduling feature is a game-changer.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Robert Kim',
      company: 'Sales Director',
      content: 'Our follow-up sequences are now fully automated. Response rates increased by 45% in just 2 months.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Amanda Foster',
      company: 'Startup Founder',
      content: 'The inbox organization feature helps me stay on top of important emails. It\'s like having a personal assistant.',
      rating: 5,
      avatar: 'AF'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Smart email management with AI-powered writing, scheduling, follow-ups, and inbox organization. Boost your email productivity today!" />
        <meta name="keywords" content="AI email assistant, email automation, email management, smart scheduling, email templates, email analytics" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Productivity Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Email Assistant
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your email productivity with our AI-powered assistant. Smart writing, scheduling, 
            follow-ups, and inbox organization - all in one powerful platform.
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

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
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
                plan.popular ? 'border-blue-400/40 ring-2 ring-blue-400/20' : 'border-blue-500/20 hover:border-blue-400/40'
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
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
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
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
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
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of professionals already using our AI Email Assistant to manage their emails more efficiently.
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