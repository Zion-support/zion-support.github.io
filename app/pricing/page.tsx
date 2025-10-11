'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Star, Zap, ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI consultation',
        'Email support',
        'Monthly reports',
        'Basic analytics',
        '5 hours of support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Weekly reports',
        'Advanced analytics',
        '20 hours of support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        '24/7 support',
        'Daily reports',
        'Custom analytics',
        'Unlimited support',
        'Dedicated account manager',
        'White-label options'
      ],
      popular: false
    }
  ]

  const microSaasPricing = [
    {
      name: 'Zion AI Email Marketing',
      price: '$97',
      period: '/month',
      description: 'AI-powered email automation',
      features: ['Up to 5,000 subscribers', 'AI segmentation', 'Email templates', 'Basic analytics'],
      popular: true
    },
    {
      name: 'Zion AI CRM Assistant',
      price: '$147',
      period: '/month',
      description: 'Intelligent CRM management',
      features: ['Up to 1,000 contacts', 'AI lead scoring', 'Email automation', 'Basic reports'],
      popular: true
    },
    {
      name: 'Zion AI Expense Tracker',
      price: '$9.99',
      period: '/month',
      description: 'Smart expense management',
      features: ['Unlimited receipts', 'AI categorization', 'Bank integration', 'Basic reports'],
      popular: false
    },
    {
      name: 'Zion AI SEO Optimizer',
      price: '$97',
      period: '/month',
      description: 'AI SEO optimization',
      features: ['Up to 1,000 keywords', 'AI recommendations', 'Monthly reports', 'Email support'],
      popular: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Star className="w-4 h-4 mr-2" />
              Pricing Plans
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Simple, <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core features 
              and come with a 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Professional <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions with flexible pricing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'border-2 border-cyan-500' : 'border border-white/10'} hover:bg-white/10 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Micro <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">SAAS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, powerful micro SAAS solutions for specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasPricing.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative ${plan.popular ? 'border-2 border-pink-500' : 'border border-white/10'} hover:bg-white/10 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-pink-400 mb-2">
                    {plan.price}
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 px-4 rounded-lg font-bold transition-all duration-300 text-sm ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white' 
                    : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                }`}>
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Frequently Asked <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
              <p className="text-gray-300">
                Yes! We understand that every business is unique. Contact us to discuss custom pricing 
                options tailored to your specific needs and requirements.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Is there a free trial available?</h3>
              <p className="text-gray-300">
                All our micro SAAS solutions come with a 14-day free trial. For professional services, 
                we offer a free consultation to discuss your needs and provide recommendations.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect 
                immediately, and we'll prorate any billing differences.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers. Enterprise customers 
                can also pay via invoice with net 30 terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the plan that works best for your business, or contact us for a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage