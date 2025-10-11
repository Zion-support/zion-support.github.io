import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react'
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Star, Zap, ArrowRight, Phone, Mail } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Starter',
<<<<<<< HEAD
=======
      price: '$2,500',
      period: '/month',
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 999, yearly: 9999 },
      features: [
<<<<<<< HEAD
        'Basic AI consultation',
        'Simple automation setup',
        'Email support',
        'Basic analytics dashboard',
        'Up to 5 users',
=======
        'Basic AI analytics',
        'Email support',
        'Up to 5 users',
        'Standard integrations',
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
        'Monthly reports'
      ],
      popular: false,
      icon: Zap
    },
    {
      name: 'Professional',
<<<<<<< HEAD
      description: 'Ideal for growing businesses with complex needs',
      price: { monthly: 2999, yearly: 29999 },
      features: [
        'Advanced AI solutions',
        'Custom automation workflows',
        'Priority support',
        'Advanced analytics & reporting',
        'Up to 25 users',
        'Weekly reports',
        'API access',
        'Custom integrations'
=======
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI analytics',
        'Priority support',
        'Up to 25 users',
        'Custom integrations',
        'Real-time dashboards',
        'API access',
        'Training sessions'
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise',
<<<<<<< HEAD
      description: 'Comprehensive solutions for large organizations',
      price: { monthly: 9999, yearly: 99999 },
      features: [
        'Full AI transformation',
        'Custom AI model development',
        '24/7 dedicated support',
        'Real-time analytics',
        'Unlimited users',
        'Daily reports',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training',
        'SLA guarantee'
=======
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Unlimited users',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise deployment'
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      ],
      popular: false,
      icon: Shield
    }
  ]

  const addOns = [
    {
      name: 'Additional Users',
      description: 'Add more team members to your plan',
      price: { monthly: 50, yearly: 500 }
    },
    {
      name: 'Priority Support',
      description: 'Get faster response times and dedicated support',
      price: { monthly: 200, yearly: 2000 }
    },
    {
      name: 'Custom Development',
      description: 'Bespoke solutions tailored to your needs',
      price: { monthly: 1000, yearly: 10000 }
    },
    {
      name: 'Training & Onboarding',
      description: 'Comprehensive training for your team',
      price: { monthly: 500, yearly: 5000 }
    }
  ]

  const addOns = [
    {
      name: 'AI Chatbot',
      price: '$500/month',
      description: 'Intelligent customer support chatbot'
    },
    {
      name: 'Data Analytics Pro',
      price: '$800/month',
      description: 'Advanced business intelligence dashboard'
    },
    {
      name: 'Cybersecurity Suite',
      price: '$1,200/month',
      description: 'Comprehensive security monitoring'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Tailored solutions for your business'
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with flexible options and enterprise-grade support." />
        <meta name="keywords" content="pricing, AI solutions, IT services, enterprise pricing, business plans, technology costs" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with flexible options to scale as you grow.
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const Icon = plan.icon
                const price = billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly
                const displayPrice = billingCycle === 'yearly' ? Math.floor(price / 12) : price
                
                return (
                  <div
                    key={index}
                    className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                      plan.popular
                        ? 'border-cyan-500 shadow-lg shadow-cyan-500/25'
                        : 'border-white/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">${displayPrice}</span>
                        <span className="text-gray-300">/{billingCycle === 'yearly' ? 'month' : 'month'}</span>
                        {billingCycle === 'yearly' && (
                          <div className="text-sm text-gray-400 mt-1">
                            Billed annually (${price}/year)
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                          : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Add-ons & Extensions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your plan with additional services and features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    ${billingCycle === 'yearly' ? addon.price.yearly : addon.price.monthly}
                    <span className="text-sm text-gray-400">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                  </div>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition-colors">
                    Add to Plan
                  </button>
<<<<<<< HEAD
=======
      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and services
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you offer custom pricing for large enterprises?
                </h3>
                <p className="text-gray-300">
                  Absolutely! We offer custom pricing and solutions for large enterprises with specific requirements. Contact us to discuss your needs.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What's included in the support?
                </h3>
                <p className="text-gray-300">
                  Support includes email support, documentation, and access to our knowledge base. Higher tiers include priority support and dedicated account managers.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose your plan and start transforming your business with our AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
=======
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300">
              Enhance your plan with additional services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</p>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Absolutely! For enterprise clients with specific requirements, we offer custom pricing and solutions tailored to your needs.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">What's included in support?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times and dedicated account managers.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial?</h3>
              <p className="text-gray-300">Yes! We offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </button>
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default PricingPage
<<<<<<< HEAD
=======
export default PricingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
