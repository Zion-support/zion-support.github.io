'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Brain, Cloud, Code, Shield } from 'lucide-react';

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
        'Standard templates',
        'Monthly reports'
      ],
      popular: false,
      icon: Zap
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
        'Weekly reports',
        'Dedicated account manager'
      ],
      popular: true,
      icon: Brain
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited AI services',
        'Custom AI development',
        '24/7 support',
        'White-label options',
        'Real-time analytics',
        'Dedicated team'
      ],
      popular: false,
      icon: Cloud
    }
  ];

  const addOns = [
    {
      name: 'AI Training',
      price: '$199/month',
      description: 'Custom AI model training for your specific use case',
      icon: Brain
    },
    {
      name: 'Priority Support',
      price: '$99/month',
      description: '24/7 priority support with guaranteed response times',
      icon: Phone
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Bespoke AI solutions tailored to your business needs',
      icon: Code
    },
    {
      name: 'Security Audit',
      price: '$2,999',
      description: 'Comprehensive security assessment and recommendations',
      icon: Shield
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group AI Solutions"
        description="Transparent pricing for AI solutions. Choose from Starter, Professional, or Enterprise plans. No hidden fees, cancel anytime."
        keywords={['AI pricing', 'AI solutions cost', 'enterprise AI pricing', 'AI services pricing']}
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
                Choose the perfect plan for your business. No hidden fees, cancel anytime.
              </p>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <div className="text-center mb-6">
                    <plan.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <addon.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</p>
                  <p className="text-gray-400 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. You only pay the monthly subscription.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What happens if I cancel?</h3>
                <p className="text-gray-300">You can cancel anytime with 30 days notice. Your data will be exported and provided to you.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for large enterprises with specific requirements. Contact us for a quote.</p>
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
                Contact us today to discuss your needs and find the perfect plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"
                  className="cyber-button inline-flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-outline inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (302) 464-0950
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