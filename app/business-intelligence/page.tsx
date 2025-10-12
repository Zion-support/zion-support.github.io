'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Target, BarChart3, TrendingUp, Database, Shield, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function BusinessIntelligencePage() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Analytics',
      description: 'Transform your data into actionable insights with powerful business intelligence tools.',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Data visualization', 'Custom reporting']
    },
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to discover patterns and trends in your business data.',
      benefits: ['Machine learning models', 'Pattern recognition', 'Automated insights', 'Smart recommendations']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources for comprehensive analysis.',
      benefits: ['Multi-source integration', 'Data cleansing', 'ETL processes', 'Real-time sync']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Performance Tracking',
      description: 'Monitor KPIs and track business performance with customizable metrics.',
      benefits: ['KPI dashboards', 'Performance alerts', 'Trend analysis', 'Goal tracking']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data is protected and compliant.',
      benefits: ['Role-based access', 'Data encryption', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time for instant decision making.',
      benefits: ['Stream processing', 'Live dashboards', 'Instant alerts', 'Real-time updates']
    }
  ];

  const solutions = [
    'Sales Analytics',
    'Marketing Intelligence',
    'Financial Reporting',
    'Customer Analytics',
    'Operational Metrics',
    'Supply Chain Analytics',
    'HR Analytics',
    'Risk Management'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '5GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '50GB data storage',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited data sources',
        'Fully custom dashboards',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited storage',
        'Full API access',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '40%', label: 'Faster Decision Making' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '85%', label: 'Data Accuracy' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced business intelligence solutions. AI-powered analytics for better decision making." />
        <meta name="keywords" content="business intelligence, analytics, data visualization, BI, dashboards, reporting, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Business <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced business intelligence solutions. 
            Make data-driven decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable business insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our business intelligence solutions are designed for various business functions and industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{solution}</p>
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
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business intelligence needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-white/20'
              } hover:border-purple-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                Ready to Transform Your Data?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start making data-driven decisions with our powerful business intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}