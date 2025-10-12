'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, ArrowRight, Zap, Shield, Target, Users, Award, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 999, yearly: 9999 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Analytics',
        'Email Support',
        '5 AI Models',
        'Basic Automation',
        'Standard Security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        '20 AI Models',
        'Advanced Automation',
        'Enhanced Security',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 9999, yearly: 99999 },
      description: 'Complete solution for large enterprises',
      features: [
        'Enterprise AI Analytics',
        '24/7 Dedicated Support',
        'Unlimited AI Models',
        'Full Automation Suite',
        'Enterprise Security',
        'Custom Development',
        'Advanced Monitoring',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ]

  const addOns = [
    {
      name: 'Additional AI Models',
      price: 500,
      description: 'Add more AI models to your plan'
    },
    {
      name: 'Priority Support',
      price: 200,
      description: 'Get faster response times for support'
    },
    {
      name: 'Custom Development',
      price: 150,
      description: 'Hourly rate for custom development work'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core AI and IT solutions.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 p-8 rounded-lg ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  ${plan.price[billingCycle as keyof typeof plan.price].toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">
                  per {billingCycle === 'monthly' ? 'month' : 'year'}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">
                  ${addon.price}/month
                </div>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Yes, we offer custom development and consulting services. Contact us to discuss your specific needs.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">What support do you provide?</h3>
              <p className="text-gray-300">We provide email support for all plans, with priority support for Professional and Enterprise plans.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Choose your plan and start transforming your business today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PricingPage