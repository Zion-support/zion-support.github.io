import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Thermometer, Wind } from 'lucide-react'

export default function AIClimatePredictionEnginePage() {
  const features = [
    {
      icon: Cloud,
      title: 'Weather Prediction',
      description: 'Advanced AI-powered weather prediction with high accuracy and long-term forecasting.',
    },
    {
      icon: Thermometer,
      title: 'Climate Modeling',
      description: 'Comprehensive climate modeling for understanding long-term climate patterns and trends.',
    },
    {
      icon: Wind,
      title: 'Environmental Monitoring',
      description: 'Real-time environmental monitoring with AI-powered analysis and alerts.',
    },
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        'Basic weather prediction',
        '7-day forecast',
        'Email support',
        'Basic analytics',
        'API access'
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for government agencies and large organizations',
      features: [
        'Advanced climate modeling',
        '30-day forecast',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for enterprise needs',
      features: [
        'Custom climate models',
        'Unlimited forecast',
        'Dedicated support',
        'Custom analytics',
        'White-label solutions'
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate prediction engine for accurate weather forecasting and climate modeling." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate modeling, environmental monitoring, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Climate <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Prediction Engine</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered climate prediction engine for accurate weather forecasting and climate modeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Advanced AI technology for climate prediction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border ${plan.popular ? 'border-green-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-green-400 text-black text-sm font-bold px-3 py-1 rounded-full text-center mb-4">
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
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                      : 'border border-white text-white hover:bg-white hover:text-green-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Climate Prediction?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI climate prediction needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}