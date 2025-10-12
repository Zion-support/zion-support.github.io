import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, BarChart3, Zap, Star, Clock, Users, Database, Globe, Shield, Sparkles, TrendingUp, PieChart, Activity, Target } from 'lucide-react'

export default function AiAnalyticsDashboardPage() {
  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics in real-time with live data updates and instant insights.',
      icon: <Activity className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Predictive Modeling',
      description: 'AI-powered forecasting and trend analysis to predict future business outcomes.',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards with drag-and-drop widgets and custom visualizations.',
      icon: <PieChart className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into beautiful, interactive charts and graphs.',
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports with AI-powered insights and recommendations.',
      icon: <Target className="w-6 h-6 text-red-400" />
    },
    {
      title: 'API Integration',
      description: 'Connect with 100+ data sources and APIs for comprehensive data analysis.',
      icon: <Database className="w-6 h-6 text-yellow-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '20 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '5 user accounts',
        'Advanced analytics',
        'API access',
        'Predictive modeling'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced reports',
        '24/7 support',
        'Unlimited users',
        'Premium analytics',
        'White-label options',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Data Analyst',
      content: 'The predictive modeling feature has helped us forecast sales with 95% accuracy. Game-changing tool!',
      rating: 5,
      avatar: 'RG'
    },
    {
      name: 'Tom Wilson',
      company: 'Marketing Director',
      content: 'Our reporting time has been reduced by 80%. The automated insights are incredibly valuable.',
      rating: 5,
      avatar: 'TW'
    },
    {
      name: 'Lisa Brown',
      company: 'CEO',
      content: 'Finally, a dashboard that gives us real insights, not just pretty charts. ROI increased by 200%.',
      rating: 5,
      avatar: 'LB'
    }
  ]

  const metrics = [
    { label: 'Data Sources Connected', value: '100+', color: 'text-cyan-400' },
    { label: 'Reports Generated', value: '50K+', color: 'text-green-400' },
    { label: 'Users Served', value: '10K+', color: 'text-blue-400' },
    { label: 'Uptime', value: '99.9%', color: 'text-purple-400' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and custom reporting. Transform your data into actionable insights!" />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, predictive analytics, custom dashboards, automated reports" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Analytics & BI
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Analytics Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with our comprehensive business intelligence platform. 
            Real-time analytics, predictive modeling, and custom dashboards - all powered by AI.
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

        {/* Metrics Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Platform Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dashboard Preview</h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border border-green-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Revenue</h3>
                <div className="text-2xl font-bold text-green-400 mb-1">$125,430</div>
                <div className="text-sm text-gray-400">+12.5% from last month</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Users</h3>
                <div className="text-2xl font-bold text-blue-400 mb-1">8,432</div>
                <div className="text-sm text-gray-400">+8.2% from last month</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Conversion</h3>
                <div className="text-2xl font-bold text-purple-400 mb-1">3.2%</div>
                <div className="text-sm text-gray-400">+0.5% from last month</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Sessions</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">45,678</div>
                <div className="text-sm text-gray-400">+15.3% from last month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-green-400/40 ring-2 ring-green-400/20' : 'border-green-500/20 hover:border-green-400/40'
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
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
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
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400/10'
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
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl p-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our AI Analytics Dashboard to make data-driven decisions.
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