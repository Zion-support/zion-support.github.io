'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Cloud, BarChart, Globe, Zap, Shield } from 'lucide-react'

const AIClimatePredictionEnginePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Weather Prediction',
      description: 'Advanced weather forecasting using AI and machine learning algorithms.',
      benefits: ['Accurate forecasts', 'Long-term predictions', 'Real-time updates', 'Localized data']
    },
    {
      icon: BarChart,
      title: 'Climate Analytics',
      description: 'Comprehensive climate data analysis and trend identification.',
      benefits: ['Trend analysis', 'Pattern recognition', 'Historical data', 'Statistical modeling']
    },
    {
      icon: Globe,
      title: 'Global Monitoring',
      description: 'Monitor climate conditions and changes across the globe.',
      benefits: ['Global coverage', 'Satellite data', 'Real-time monitoring', 'Multi-scale analysis']
    },
    {
      icon: Zap,
      title: 'Rapid Processing',
      description: 'High-speed processing of large climate datasets for quick insights.',
      benefits: ['Fast computation', 'Parallel processing', 'Real-time analysis', 'Scalable infrastructure']
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Assess climate-related risks and provide early warning systems.',
      benefits: ['Risk modeling', 'Early warnings', 'Impact assessment', 'Mitigation strategies']
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small organizations and researchers',
      features: [
        'Basic weather forecasts',
        'Limited historical data',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for medium-sized organizations and research institutions',
      features: [
        'Advanced climate modeling',
        'Full historical data access',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Ideal for government agencies and large organizations',
      features: [
        'Custom climate models',
        'Unlimited data access',
        'Dedicated support',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ]

  const benefits = [
    'Improve weather forecast accuracy by 25%',
    'Reduce climate-related risks and losses',
    'Enable better resource planning and management',
    'Support environmental research and policy making',
    'Provide early warning for extreme weather events',
    'Help organizations adapt to climate change'
  ]

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate prediction engine for accurate weather forecasting, climate analysis, and environmental monitoring." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate analytics, environmental monitoring, climate modeling" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate
              <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Prediction Engine
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered climate prediction for accurate weather forecasting and environmental monitoring. 
              Make informed decisions with intelligent climate insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Climate Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to predict and analyze climate conditions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
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

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing options for every organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'border-teal-400 ring-2 ring-teal-400/50' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="bg-teal-400 text-teal-900 text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700'
                      : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Climate Engine?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive environmental success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Predict Climate?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your climate prediction needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIClimatePredictionEnginePage