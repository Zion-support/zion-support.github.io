import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Star, Zap, Shield, Cloud, Brain, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic AI Chatbot (up to 1,000 conversations)',
        'Email Support',
        'Basic Analytics Dashboard',
        'Standard Security Features',
        '5GB Cloud Storage'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      features: [
        'AI Content Generation (50,000 words/month)',
        'Advanced AI Chatbot (unlimited conversations)',
        'Priority Support',
        'Advanced Analytics & Reporting',
        'Enhanced Security Features',
        '50GB Cloud Storage',
        'API Access',
        'Custom Integrations',
        'Monthly Strategy Sessions'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Solutions',
        '24/7 Dedicated Support',
        'Custom Analytics & Reporting',
        'Enterprise Security & Compliance',
        'Unlimited Cloud Storage',
        'Full API Access',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Quarterly Business Reviews',
        'Custom Training & Onboarding',
        'SLA Guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const addOns = [
    {
      name: 'AI Analytics Pro',
      price: '$1,999',
      period: '/month',
      description: 'Advanced analytics and insights for your AI solutions',
      features: ['Custom Dashboards', 'Predictive Analytics', 'Real-time Monitoring']
    },
    {
      name: 'Cybersecurity Suite',
      price: '$3,999',
      period: '/month',
      description: 'Comprehensive security solutions for your business',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management']
    },
    {
      name: '5G Implementation',
      price: '$9,999',
      period: '/month',
      description: 'Ultra-fast 5G connectivity and IoT solutions',
      features: ['5G Network Setup', 'IoT Integration', 'Edge Computing']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business. Flexible pricing for AI, cloud services, cybersecurity, and 5G solutions." />
        <meta name="keywords" content="pricing, plans, AI solutions, cloud services, cybersecurity, 5G" />
      </Helmet>

      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Simple,{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Transparent
                </span>{' '}
                Pricing
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our core AI solutions 
                with the flexibility to scale as you grow.
              </p>
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
                  className={`relative bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-500/40 scale-105 shadow-2xl shadow-cyan-500/20'
                      : 'border-cyan-500/20 hover:border-cyan-400/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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

                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                    {plan.name !== 'Enterprise' && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Enhance your plan with these powerful add-ons
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="flex items-baseline mb-3">
                    <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                    <span className="text-gray-400 ml-2">{addon.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need to know about our pricing
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated 
                  and take effect immediately.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for all our plans. No credit card required 
                  to get started.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers. Enterprise 
                  customers can also pay via invoice.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you offer custom pricing for large organizations?
                </h3>
                <p className="text-gray-300">
                  Yes, our Enterprise plan is fully customizable. Contact our sales team to 
                  discuss your specific needs and get a tailored quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Choose your plan and start transforming your business today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}