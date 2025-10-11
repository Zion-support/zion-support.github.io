'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BarChart, TrendingUp, Users, DollarSign, Target, Zap, Globe, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIAnalyticsDashboardPage() {
  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data and instant insights.',
      benefits: ['Live Data Updates', 'Custom Dashboards', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions to forecast trends and make data-driven decisions.',
      benefits: ['Sales Forecasting', 'Trend Analysis', 'Risk Assessment', 'Growth Projections']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Customer Insights',
      description: 'Deep understanding of customer behavior and preferences.',
      benefits: ['Customer Segmentation', 'Behavior Analysis', 'Retention Metrics', 'Lifetime Value']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'Revenue Analytics',
      description: 'Track revenue streams, profit margins, and financial performance.',
      benefits: ['Revenue Tracking', 'Profit Analysis', 'Cost Optimization', 'ROI Measurement']
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Goal Tracking',
      description: 'Set and monitor KPIs with automated alerts and progress tracking.',
      benefits: ['KPI Dashboard', 'Goal Setting', 'Progress Alerts', 'Performance Reviews']
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Automated Reports',
      description: 'Generate and schedule reports automatically with AI insights.',
      benefits: ['Scheduled Reports', 'Custom Templates', 'Email Delivery', 'AI Insights']
    }
  ]

  const integrations = [
    'Google Analytics',
    'Facebook Ads',
    'Google Ads',
    'Salesforce',
    'HubSpot',
    'Shopify',
    'Stripe',
    'PayPal',
    'Mailchimp',
    'Zapier'
  ]

  const pricing = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '15 data sources',
        'Advanced dashboards',
        'AI insights',
        'Priority support',
        '5 users',
        'Custom reports'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        'Dedicated support',
        'Unlimited users',
        'White-label options'
      ],
      cta: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting. Transform your data into actionable business intelligence." />
        <meta name="keywords" content="AI analytics, business intelligence, data dashboard, predictive analytics, real-time analytics, KPI tracking" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl">
                  <BarChart className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Analytics Dashboard</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered analytics dashboard. Make smarter decisions with real-time data and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Analytics Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analytics dashboard provides comprehensive insights to drive your business forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect all your data sources in one place with our extensive integration library.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-white font-semibold text-sm">{integration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Analytics Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your analytics needs. All plans include our core AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'} hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Start Making Data-Driven Decisions</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with AI-powered analytics and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <BarChart className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}