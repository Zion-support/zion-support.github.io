'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 AI services',
        'Basic automation',
        'Email support',
        'Standard integrations',
        'Monthly reporting'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 15 AI services',
        'Advanced automation',
        'Priority support',
        'Custom integrations',
        'Real-time analytics',
        'API access',
        'White-label options'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited AI services',
        'Custom development',
        '24/7 dedicated support',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'AI Training & Customization',
      price: '$199/month',
      description: 'Custom AI model training for your specific use cases'
    },
    {
      name: 'Priority Support',
      price: '$99/month',
      description: '24/7 priority support with guaranteed response times'
    },
    {
      name: 'Additional Integrations',
      price: '$49/month',
      description: 'Connect with additional third-party services and platforms'
    },
    {
      name: 'Advanced Analytics',
      price: '$149/month',
      description: 'Enhanced reporting and business intelligence features'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! Our Enterprise plan is designed for large organizations with custom requirements. Contact our sales team for a personalized quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate purchase orders for Enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all our plans. No credit card required to get started.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits and help you upgrade to a higher plan or add additional services.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Save up to 20% when you pay annually. Contact our sales team for more information about annual discounts.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group AI Solutions"
        description="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Start with a 14-day free trial."
        keywords={['AI pricing', 'IT services pricing', 'AI solutions cost', 'enterprise AI pricing', 'AI automation pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI services with no hidden fees.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-gray-300">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-12 h-6 bg-cyan-500 rounded-full shadow-inner"></div>
                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
              </div>
              <span className="text-cyan-400 font-medium">Annual (Save 20%)</span>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
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
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.name === 'Enterprise' ? 'mailto:kleber@ziontechgroup.com?subject=Enterprise Pricing Inquiry' : 'tel:+13024640950'}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;