import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Users, Target, Brain, Zap, Shield, Globe, Database, Cpu } from 'lucide-react'

export default function AIAnalyticsDashboardPage() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your business performance with live data visualization and instant insights.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions powered by advanced machine learning algorithms.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Performance Tracking',
      description: 'Track KPIs, growth metrics, and business trends with comprehensive reporting tools.'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'User Behavior Analysis',
      description: 'Understand customer behavior patterns and optimize user experience with detailed analytics.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Goal Setting & Monitoring',
      description: 'Set business objectives and track progress with automated goal monitoring and alerts.'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Data Integration',
      description: 'Connect multiple data sources and create unified views of your business performance.'
    }
  ]

  const dashboardFeatures = [
    'Customizable dashboards',
    'Interactive data visualization',
    'Automated report generation',
    'Mobile-responsive design',
    'Real-time data updates',
    'Export capabilities',
    'Collaborative sharing',
    'Advanced filtering options'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 dashboards',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Monthly reports'
      ]
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 dashboards',
        'Advanced AI insights',
        'Priority support',
        'Custom integrations',
        'Real-time alerts',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited dashboards',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'On-premise deployment'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time monitoring, intelligent recommendations, and comprehensive reporting." />
        <meta name="keywords" content="AI analytics, dashboard, business intelligence, data visualization, real-time analytics, machine learning" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Analytics Dashboard
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with our AI-powered analytics dashboard. 
            Monitor performance, track trends, and make data-driven decisions with intelligent automation.
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
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dashboard Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-gray-300 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                    : 'border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI analytics dashboard to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}