'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Users, Clock, Phone, Mail, ArrowRight, DollarSign, Crown, Rocket, Building } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 5 AI integrations',
        'Basic analytics dashboard',
        'Email support',
        'Standard AI models',
        'Monthly reports',
        'Basic automation tools'
      ],
      limitations: [
        'Limited to 1,000 API calls/month',
        'Standard response time',
        'Basic customization'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Up to 25 AI integrations',
        'Advanced analytics & insights',
        'Priority support',
        'Custom AI model training',
        'Real-time monitoring',
        'Advanced automation',
        'API access',
        'Custom integrations'
      ],
      limitations: [
        'Up to 10,000 API calls/month',
        'Priority response time',
        'Advanced customization'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      features: [
        'Unlimited AI integrations',
        'Enterprise analytics suite',
        '24/7 dedicated support',
        'Custom AI development',
        'Real-time monitoring & alerts',
        'Full automation suite',
        'Unlimited API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment',
        'SLA guarantees',
        'Custom training programs'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$500',
      description: 'Custom AI model training for your specific use case',
      features: ['Custom data processing', 'Model optimization', 'Performance tuning']
    },
    {
      name: 'Priority Support',
      price: '$200',
      description: '24/7 priority support with guaranteed response times',
      features: ['Dedicated support team', 'Phone & chat support', 'Guaranteed SLA']
    },
    {
      name: 'Custom Integrations',
      price: '$1,000',
      description: 'Custom integrations with your existing systems',
      features: ['API development', 'System integration', 'Testing & deployment']
    },
    {
      name: 'Data Migration',
      price: '$300',
      description: 'Seamless migration of your existing data',
      features: ['Data analysis', 'Migration planning', 'Zero downtime migration']
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the free trial?',
      answer: 'Our free trial includes access to all Starter plan features for 14 days, with no credit card required. You can upgrade, downgrade, or cancel anytime during the trial.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for non-profits?',
      answer: 'Yes, we offer special pricing for qualified non-profit organizations. Contact our sales team to learn more about our non-profit discount program.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on the complexity of your requirements.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 30-day money-back guarantee for all plans. If you\'re not satisfied, contact us for a full refund.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group AI Solutions"
        description="Transparent pricing for AI solutions. Choose from Starter, Professional, or Enterprise plans. Start with a free 14-day trial. No setup fees."
        keywords={['AI pricing', 'AI solutions cost', 'AI automation pricing', 'enterprise AI pricing', 'AI software pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Choose the perfect plan for your business. Start free, scale as you grow.
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>14-day free trial</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No setup fees</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25'
                      : 'border-gray-700 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Add-on Services
              </h2>
              <p className="text-xl text-gray-400">
                Enhance your plan with additional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</div>
                  <p className="text-gray-400 mb-4">{addon.description}</p>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
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