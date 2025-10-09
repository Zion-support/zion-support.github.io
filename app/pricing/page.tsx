'use client';
import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Users, Clock, ArrowRight, Brain, Target, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      features: [
        'Basic AI Automation',
        'Email Support',
        'Up to 5 Users',
        '10 AI Workflows',
        'Basic Analytics',
        'Standard Security'
      ],
      limitations: [
        'Limited Customization',
        'Basic Reporting',
        'Standard Response Time'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      icon: Target,
      description: 'Ideal for growing businesses with advanced AI needs',
      monthlyPrice: 7999,
      yearlyPrice: 79990,
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Up to 25 Users',
        '50 AI Workflows',
        'Advanced Analytics',
        'Enhanced Security',
        'Custom Integrations',
        'API Access',
        'Training Sessions'
      ],
      limitations: [
        'Limited Custom Development',
        'Business Hours Support'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'Comprehensive AI solutions for large organizations',
      monthlyPrice: 19999,
      yearlyPrice: 199990,
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited Users',
        'Unlimited Workflows',
        'Real-time Analytics',
        'Enterprise Security',
        'Custom Development',
        'Full API Access',
        'Dedicated Account Manager',
        'On-site Training',
        'SLA Guarantee',
        'Custom Integrations'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'AI Consulting',
      description: 'Expert AI strategy and implementation consulting',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      features: ['Strategy Development', 'Implementation Planning', 'ROI Analysis', 'Change Management']
    },
    {
      name: 'Custom Development',
      description: 'Bespoke AI solutions tailored to your specific needs',
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      features: ['Custom AI Models', 'Integration Development', 'UI/UX Design', 'Testing & Deployment']
    },
    {
      name: 'Data Migration',
      description: 'Seamless migration of your existing data to AI systems',
      monthlyPrice: 3000,
      yearlyPrice: 30000,
      features: ['Data Assessment', 'Migration Planning', 'Data Cleaning', 'Validation & Testing']
    },
    {
      name: 'Training & Support',
      description: 'Comprehensive training for your team on AI systems',
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      features: ['Team Training', 'Documentation', 'Best Practices', 'Ongoing Support']
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free consultation?',
      answer: 'Our free consultation includes a 30-minute call to discuss your AI needs, assess your current systems, and provide recommendations for the best AI solutions for your business.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing for large enterprises?',
      answer: 'Absolutely! We offer custom pricing and solutions for large enterprises with specific requirements. Contact our sales team to discuss your needs.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise plans.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'Setup fees vary by plan. Starter and Professional plans include basic setup, while Enterprise plans include comprehensive setup and configuration.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all our plans. If you\'re not satisfied, we\'ll provide a full refund.'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect AI solution for your business. All plans include our core AI services 
              with different levels of features and support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-sm rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <a
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
                        plan.popular
                          ? 'cyber-button'
                          : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center">
                          <span className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0">•</span>
                          <span className="text-gray-400">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">
                      ${billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="cyber-button-small w-full inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
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
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business or contact us for a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="/case-studies"
                  className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;