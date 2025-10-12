import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Building, Wifi, Cpu, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your city infrastructure and improve efficiency'
    },
    {
      icon: <Wifi className="w-6 h-6 text-green-500" />,
      title: 'Smart Connectivity',
      description: 'Seamless connectivity solutions for smart city infrastructure and IoT devices'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Security & Safety',
      description: 'Comprehensive security solutions to protect smart city infrastructure and citizens'
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Data Management',
      description: 'Advanced data management and analytics for smart city operations'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$4,999',
      period: '/month',
      description: 'Perfect for small cities',
      features: [
        'Basic smart infrastructure',
        'IoT device management',
        'Data collection & storage',
        'Basic analytics',
        'Email support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$12,999',
      period: '/month',
      description: 'Ideal for growing cities',
      features: [
        'Advanced smart infrastructure',
        'AI-powered analytics',
        'Real-time monitoring',
        'Priority support',
        'Custom integrations',
        '24/7 monitoring',
        'Citizen engagement tools',
        'Training & consultation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$29,999',
      period: '/month',
      description: 'For large metropolitan areas',
      features: [
        'Complete smart city suite',
        'Advanced AI capabilities',
        'White-label solution',
        '24/7 dedicated support',
        'SLA guarantee',
        'Custom deployment',
        'Compliance management',
        'Multi-city management'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced smart city infrastructure solutions with AI-powered technology, IoT connectivity, and data management for modern cities." />
        <meta name="keywords" content="smart city infrastructure, IoT solutions, city management, urban technology, smart cities" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Smart City
              </span>
              <br />
              <span className="text-white">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your city with our advanced smart infrastructure solutions. 
              Powered by cutting-edge AI technology and IoT connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our smart city infrastructure delivers unmatched efficiency, connectivity, and citizen satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the smart city solution that fits your city's needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${
                plan.popular ? 'border-purple-500 bg-purple-500/10' : 'border-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
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
                <button
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Smart City?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Experience the power of our smart city infrastructure solutions for your city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View All Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SmartCityInfrastructurePage