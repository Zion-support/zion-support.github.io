'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Building, 
  Zap 
} from 'lucide-react'

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI chatbot',
        'Email support',
        'Standard analytics',
        'Up to 1,000 interactions/month',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Advanced analytics',
        'Up to 10,000 interactions/month',
        'Custom integrations',
        'API access',
        'Monthly strategy calls'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI development',
        '24/7 dedicated support',
        'Advanced analytics & reporting',
        'Unlimited interactions',
        'Custom integrations',
        'Full API access',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const addOns = [
    {
      name: 'Additional AI Models',
      price: '$500',
      period: '/month',
      description: 'Add more AI models to your existing plan'
    },
    {
      name: 'Priority Support',
      price: '$1,000',
      period: '/month',
      description: 'Get priority support with faster response times'
    },
    {
      name: 'Custom Development',
      price: '$150',
      period: '/hour',
      description: 'Custom features and integrations'
    },
    {
      name: 'Training & Onboarding',
      price: '$2,500',
      period: '/session',
      description: 'Comprehensive training for your team'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Pricing | Zion Tech Group - AI & IT Solutions</title>
        <meta 
          name="description" 
          content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with flexible options and no hidden fees." 
        />
        <meta 
          name="keywords" 
          content="pricing, AI solutions pricing, IT services pricing, enterprise pricing, subscription plans" 
        />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                Add-on Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional services tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{addOn.price}</span>
                    <span className="text-gray-400 ml-1">{addOn.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial available?</h3>
                <p className="text-gray-300">We offer a 14-day free trial for all our plans. No credit card required to get started.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">What support is included?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and phone support.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Yes, we offer custom AI and IT solutions for Enterprise clients. Contact us to discuss your specific needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/contact" 
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PricingPage