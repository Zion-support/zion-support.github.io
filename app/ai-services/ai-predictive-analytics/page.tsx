import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TrendingUp, Brain, BarChart3, Zap, Clock, DollarSign, CheckCircle, Star, ArrowRight, Target, AlertTriangle, PieChart, LineChart, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Advanced ML Models',
      description: 'State-of-the-art machine learning algorithms for accurate predictions and forecasting'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Real-time Insights',
      description: 'Get instant predictions and recommendations based on live data streams'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Visual Analytics',
      description: 'Interactive dashboards and visualizations to understand complex data patterns'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Automated Alerts',
      description: 'Smart notifications when predictions indicate important changes or opportunities'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 data points',
        'Basic ML models',
        'Standard predictions',
        'Email alerts',
        'Basic dashboards',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 data points',
        'Advanced ML models',
        'Custom predictions',
        'Real-time alerts',
        'Advanced dashboards',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data points',
        'Premium ML capabilities',
        'Custom model training',
        '24/7 dedicated support',
        'White-label solution',
        'SLA guarantee',
        'Custom deployment',
        'Advanced security'
      ],
      popular: false
    }
  ]

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales trends and optimize inventory management',
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Customer Behavior',
      description: 'Analyze customer patterns to improve retention and engagement',
      icon: <Target className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Risk Assessment',
      description: 'Identify potential risks and opportunities in real-time',
      icon: <AlertTriangle className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Market Trends',
      description: 'Stay ahead of market changes with predictive market analysis',
      icon: <PieChart className="w-8 h-8 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI predictive analytics with machine learning models, real-time insights, and automated forecasting for data-driven business decisions." />
        <meta name="keywords" content="AI predictive analytics, machine learning, forecasting, data analysis, business intelligence, predictive modeling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Predictive Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Predictive
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your data into actionable insights with advanced AI predictive analytics. 
            Forecast trends, identify opportunities, and make data-driven decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Predictive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of machine learning to predict future trends and optimize business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how businesses are using AI predictive analytics to drive growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
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
              Choose the plan that matches your data volume and analytical needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${
                plan.popular ? 'border-blue-500 bg-blue-500/10' : 'border-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
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
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Predict the Future?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join industry leaders already using AI predictive analytics to stay ahead of the competition and make smarter business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIPredictiveAnalyticsPage