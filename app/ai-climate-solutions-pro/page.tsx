'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiClimateSolutionsProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent climate insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time climate data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific climate goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your climate initiatives with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Make a global impact with scalable climate solutions and initiatives.',
      benefits: ['Global reach', 'Scalable solutions', 'Multi-region support', 'International standards']
    },
    {
      icon: Shield,
      title: 'Environmental Security',
      description: 'Protect the environment with advanced security and monitoring systems.',
      benefits: ['Environmental protection', 'Security monitoring', 'Risk assessment', 'Compliance standards']
    }
  ]

  const benefits = [
    'Reduce carbon footprint by 60%',
    'Improve climate resilience by 80%',
    'Increase sustainability metrics by 70%',
    'Enable data-driven climate decisions'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small organizations starting their climate journey',
      features: [
        'Basic climate analytics',
        'Monthly reports',
        'Email support',
        'Standard dashboards',
        'API access',
        'Basic forecasting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for medium-sized organizations with advanced climate needs',
      features: [
        'Advanced climate analytics',
        'Real-time monitoring',
        'Priority support',
        'Custom dashboards',
        'Full API access',
        'Advanced forecasting',
        'Custom models',
        'Data export'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations and governments',
      features: [
        'Full climate suite',
        '24/7 monitoring',
        'Dedicated support',
        'Custom solutions',
        'Full API access',
        'Advanced forecasting',
        'Custom models',
        'Data export',
        'On-premise deployment',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group | Professional Climate Technology</title>
        <meta name="description" content="Professional climate solutions powered by advanced AI technology. Comprehensive climate analytics, monitoring, and optimization for organizations committed to sustainability." />
        <meta name="keywords" content="AI climate solutions, artificial intelligence, climate technology, environmental AI, sustainability, climate analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate Solutions Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional climate solutions powered by advanced AI technology. Comprehensive climate analytics, monitoring, and optimization for organizations committed to sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
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
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced climate technology powered by artificial intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
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
                Why Choose AI Climate Solutions Pro?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your climate initiatives with intelligent technology
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
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-teal-400/50' : 'border-white/10'} transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-6">
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
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700' 
                      : 'border border-white text-white hover:bg-white hover:text-teal-600'
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
                Ready to Transform Your Climate Initiatives?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI climate solutions can help your organization achieve its sustainability goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
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

export default AiClimateSolutionsProPage