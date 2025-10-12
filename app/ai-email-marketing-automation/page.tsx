import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Mail, BarChart3, Zap, Target, Users, Clock, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIEmailMarketingAutomationPage() {
  const features = [
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: 'Smart Email Campaigns',
      description: 'AI-powered email campaigns that automatically optimize subject lines, content, and send times for maximum engagement.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Advanced Segmentation',
      description: 'Intelligent customer segmentation based on behavior, preferences, and engagement patterns for targeted messaging.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict customer behavior, churn risk, and optimal engagement strategies.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Automated Workflows',
      description: 'Create complex email workflows that trigger based on customer actions, preferences, and engagement levels.'
    }
  ]

  const capabilities = [
    'AI-powered subject line optimization',
    'Automated A/B testing for campaigns',
    'Smart send time optimization',
    'Behavioral trigger automation',
    'Advanced customer segmentation',
    'Predictive content recommendations',
    'Email deliverability optimization',
    'Real-time performance analytics'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 subscribers',
        'Basic AI features',
        'Email templates',
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
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 subscribers',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'Phone & email support',
        '5 user accounts',
        'A/B testing',
        'Automation workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        'Advanced reporting',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '35%', label: 'Higher Open Rates' },
    { number: '50%', label: 'More Clicks' },
    { number: '25%', label: 'Better Conversion' },
    { number: '10+', label: 'Hours Saved Weekly' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing Automation | Zion Tech Group</title>
        <meta name="description" content="AI-powered email marketing automation platform that increases open rates by 35% and saves 10+ hours weekly. Starting at $19/month." />
        <meta name="keywords" content="email marketing automation, AI email marketing, email campaigns, marketing automation, email analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Email Marketing Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Supercharge your email marketing with AI-powered automation that increases open rates by 35% 
              and saves you 10+ hours every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Email Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI technology automatically optimizes every aspect of your email marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Email Marketing Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize email campaigns that drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and email marketing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105' 
                    : 'border-white/20 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
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
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI-powered email marketing automation to increase engagement and drive more sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}