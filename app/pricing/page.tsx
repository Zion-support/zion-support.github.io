'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Star, Zap, ArrowRight, Phone, Mail } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 999, yearly: 9999 },
      features: [
        'Basic AI analytics',
        'Email support',
        'Up to 5 users',
        'Standard integrations',
        'Monthly reports'
      ],
      popular: false,
      icon: Zap
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with complex needs',
      price: { monthly: 2999, yearly: 29999 },
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Up to 25 users',
        'Custom integrations',
        'Weekly reports',
        'Dedicated account manager'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: { monthly: 9999, yearly: 99999 },
      features: [
        'Full AI suite',
        '24/7 support',
        'Unlimited users',
        'Custom development',
        'Real-time analytics',
        'Dedicated team',
        'SLA guarantee'
      ],
      popular: false,
      icon: CheckCircle
    }
  ]

  const addOns = [
    {
      name: 'AI Training',
      description: 'Custom AI model training for your specific use case',
      price: '$5,000'
    },
    {
      name: 'Data Migration',
      description: 'Seamless migration of your existing data to our platform',
      price: '$2,500'
    },
    {
      name: 'Custom Integration',
      description: 'Integration with your existing systems and workflows',
      price: '$3,000'
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with guaranteed response times',
      price: '$1,000/month'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, enterprise pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and IT solutions.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-cyan-400">(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <plan.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price[billingCycle].toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                      plan.popular
                        ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your solution with these optional add-ons
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{addOn.description}</p>
                  <div className="text-2xl font-bold text-cyan-600">{addOn.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default PricingPage