'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Globe, BarChart, Brain, Shield, Zap, Target } from 'lucide-react'

const AIClimatePredictionEnginePage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Climate Modeling',
      description: 'Advanced AI models for global climate prediction with high-resolution forecasting.',
      benefits: ['Global coverage', 'High resolution', 'Long-term forecasting', 'Regional analysis']
    },
    {
      icon: BarChart,
      title: 'Extreme Weather Prediction',
      description: 'AI-powered prediction of extreme weather events and natural disasters.',
      benefits: ['Early warning systems', 'Disaster preparedness', 'Risk assessment', 'Emergency response']
    },
    {
      icon: Brain,
      title: 'Machine Learning Algorithms',
      description: 'Advanced ML algorithms trained on decades of climate data for accurate predictions.',
      benefits: ['Continuous learning', 'Pattern recognition', 'Predictive accuracy', 'Data analysis']
    },
    {
      icon: Shield,
      title: 'Climate Risk Assessment',
      description: 'Comprehensive climate risk assessment for businesses and governments.',
      benefits: ['Risk mitigation', 'Adaptation strategies', 'Policy recommendations', 'Impact analysis']
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Real-time climate monitoring with instant alerts and updates.',
      benefits: ['Live monitoring', 'Instant alerts', 'Real-time data', 'Continuous updates']
    },
    {
      icon: Target,
      title: 'Precision Forecasting',
      description: 'Highly accurate climate forecasts with detailed regional predictions.',
      benefits: ['High accuracy', 'Regional focus', 'Detailed predictions', 'Custom models']
    }
  ]

  const benefits = [
    'Improve prediction accuracy by 85%',
    'Reduce climate risks by 70%',
    'Enable proactive planning',
    'Support sustainable development'
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and research institutions',
      features: [
        'Basic climate predictions',
        '7-day weather forecasts',
        'Email alerts',
        'Standard support',
        'Basic analytics',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for medium-sized organizations and government agencies',
      features: [
        'Advanced climate modeling',
        '30-day weather forecasts',
        'Real-time alerts',
        'Priority support',
        'Advanced analytics',
        'Full API access',
        'Custom models',
        'Data export'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations and enterprises',
      features: [
        'Full climate prediction suite',
        'Unlimited forecasts',
        'Custom alerts',
        '24/7 support',
        'Enterprise analytics',
        'Full API access',
        'Custom models',
        'Data export',
        'On-premise deployment',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group | Advanced Climate Forecasting</title>
        <meta name="description" content="Revolutionary AI-powered climate prediction engine that provides accurate weather forecasts, extreme weather warnings, and climate risk assessments for businesses and governments." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate modeling, extreme weather, climate risk, AI weather, climate analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate Prediction Engine
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered climate prediction engine that provides accurate weather forecasts, extreme weather warnings, and climate risk assessments for businesses and governments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Climate Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge AI technology for accurate climate prediction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Climate Prediction?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your climate planning with intelligent forecasting
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
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
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing options for every organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-blue-400/50' : 'border-white/10'} transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}<span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700' 
                      : 'border border-white text-white hover:bg-white hover:text-blue-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Predict Climate Changes?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI climate prediction engine can help your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIClimatePredictionEnginePage