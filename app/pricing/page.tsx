'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Star, Zap, ArrowRight, CheckCircle } from 'lucide-react'

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
        'Custom integrations',
        'Training sessions'
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
        'Real-time reports',
        'Custom analytics',
        'Unlimited support',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

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
      price: '$200',
      period: '/hour',
      description: 'Custom development work for specific needs'
    },
    {
      name: 'Training Sessions',
      price: '$1,500',
      period: '/session',
      description: 'One-on-one training sessions for your team'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for Enterprise plans and large-scale implementations. Contact us for a personalized quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise clients.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'Setup fees are included in all plans. There are no hidden costs or additional setup charges.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all new customers. Contact us within 30 days for a full refund.'
    },
    {
      question: 'Can I get a demo before purchasing?',
      answer: 'Absolutely! We offer free demos and consultations. Contact us to schedule a personalized demonstration.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Pricing">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services with transparent, no-hidden-fees pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
                <Zap className="w-5 h-5 mr-2" />
                Get Custom Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative holographic-card-advanced cyber-card-enhanced rounded-2xl p-8 hover-quantum ${
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
                    <span className="text-5xl font-bold text-cyan-400 neon-text-enhanced">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 quantum-button ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
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
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300">
              Enhance your plan with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-lg p-6 text-center hover-quantum">
                <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-2xl font-bold text-cyan-400">{addOn.price}</span>
                  <span className="text-gray-300 ml-1">{addOn.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-lg p-6 hover-quantum">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text-enhanced">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage