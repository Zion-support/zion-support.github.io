'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, Check } from 'lucide-react'

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$1,500',
      period: '/month',
      popular: false,
      features: [
        'Basic AI consultation',
        'Essential IT support',
        'Email support',
        'Basic analytics dashboard',
        'Up to 5 users',
        'Standard security features'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$3,500',
      period: '/month',
      popular: true,
      features: [
        'Advanced AI solutions',
        'Comprehensive IT services',
        'Priority support',
        'Advanced analytics',
        'Up to 25 users',
        'Enhanced security features',
        'Custom integrations',
        'Monthly strategy sessions'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: '',
      popular: false,
      features: [
        'Full AI transformation',
        'Complete IT infrastructure',
        '24/7 dedicated support',
        'Custom AI models',
        'Unlimited users',
        'Enterprise security',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ]
    }
  ];

  const microSaasPlans = [
    {
      name: 'Micro SaaS Starter',
      description: 'Essential business tools',
      price: '$29',
      period: '/month',
      popular: false,
      features: [
        '1 Micro SaaS tool',
        'Basic analytics',
        'Email support',
        'Standard features',
        'Up to 5 users'
      ]
    },
    {
      name: 'Micro SaaS Pro',
      description: 'Advanced business automation',
      price: '$89',
      period: '/month',
      popular: true,
      features: [
        'Up to 5 Micro SaaS tools',
        'Advanced analytics',
        'Priority support',
        'AI-powered features',
        'Up to 25 users',
        'Custom integrations',
        'API access'
      ]
    },
    {
      name: 'Micro SaaS Enterprise',
      description: 'Complete business suite',
      price: '$199',
      period: '/month',
      popular: false,
      features: [
        'Unlimited Micro SaaS tools',
        'Enterprise analytics',
        '24/7 support',
        'Custom AI models',
        'Unlimited users',
        'White-label options',
        'Dedicated support'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is included in the pricing?',
      answer: 'All our plans include the core AI and IT services, with additional features and support levels varying by plan. Custom solutions are available for unique requirements.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Absolutely! We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange enterprise billing for large organizations.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 30-day free trial for all our services. No credit card required to get started.'
    },
    {
      question: 'Can I get a demo before purchasing?',
      answer: 'Absolutely! We offer free demos and consultations. Contact us to schedule a personalized demonstration.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services with transparent, no-hidden-fees pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </a>
              <a
                href="#faq"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            AI & IT Services Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Micro SaaS Solutions Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Zap className="w-5 h-5 mr-2" />
            Contact Sales
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage