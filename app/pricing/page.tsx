'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, ArrowRight, Zap, Shield, Brain, Cloud, BarChart } from 'lucide-react'

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 999, annual: 9999 },
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      features: [
        'Basic AI Chatbot',
        'Email Support',
        'Up to 1,000 interactions/month',
        'Standard Analytics',
        'Basic Customization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: { monthly: 2999, annual: 29999 },
      description: 'Ideal for growing businesses with advanced needs',
      icon: Star,
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Up to 10,000 interactions/month',
        'Advanced Analytics',
        'Full Customization',
        'API Access',
        'White-label Options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 9999, annual: 99999 },
      description: 'Complete solution for large organizations',
      icon: Shield,
      features: [
        'Custom AI Development',
        '24/7 Dedicated Support',
        'Unlimited Interactions',
        'Enterprise Analytics',
        'Full Customization',
        'Advanced API Access',
        'On-premise Deployment',
        'SLA Guarantee',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ]

  const addOns = [
    {
      name: 'AI Content Generation',
      price: 500,
      description: 'Automated content creation for blogs, social media, and marketing',
      icon: Brain
    },
    {
      name: 'Cloud Infrastructure',
      price: 800,
      description: 'Scalable cloud hosting and infrastructure management',
      icon: Cloud
    },
    {
      name: 'Advanced Analytics',
      price: 300,
      description: 'Deep insights and reporting for your AI solutions',
      icon: BarChart
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
                {isAnnual && (
                  <span className="text-green-400 text-sm font-semibold">Save 20%</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-500 scale-105'
                      : 'border-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <plan.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <addon.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{addon.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">${addon.price}/month</span>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center">
                      Add to Plan
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss your specific requirements and get a tailored quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PricingPage;