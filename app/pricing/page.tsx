'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail, Zap, Shield, Brain, Cloud } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const aiServicesPricing = [
    {
      name: 'Starter',
      price: { monthly: 149, yearly: 1490 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI chatbot',
        'Email automation',
        'Simple analytics',
        'Email support',
        'Up to 1,000 interactions/month',
        'Basic integrations'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Professional',
      price: { monthly: 399, yearly: 3990 },
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI features',
        'Custom AI models',
        'Advanced analytics',
        'Priority support',
        'Unlimited interactions',
        'Advanced integrations',
        'API access',
        'Custom workflows'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise',
      price: { monthly: 799, yearly: 7990 },
      description: 'For large organizations with complex AI requirements',
      features: [
        'Custom AI development',
        'White-label solutions',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees',
        '24/7 phone support',
        'Custom training'
      ],
      popular: false,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Basic',
      price: { monthly: 2500, yearly: 25000 },
      description: 'Essential IT services for small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Standard support',
        'Cloud migration',
        'Security basics',
        'Backup & recovery',
        'Monthly reports'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Professional',
      price: { monthly: 5999, yearly: 59990 },
      description: 'Comprehensive IT solutions for growing enterprises',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Multi-cloud management',
        'Advanced security',
        'Disaster recovery',
        'Performance optimization',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Enterprise',
      price: { monthly: 12999, yearly: 129990 },
      description: 'Full-scale IT infrastructure for large organizations',
      features: [
        'Unlimited servers',
        'Custom solutions',
        'Dedicated support',
        'White-label options',
        'Enterprise security',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const microSaasPricing = [
    {
      name: 'Individual',
      price: { monthly: 99, yearly: 990 },
      description: 'Perfect for individuals and small teams',
      features: [
        '1 AI Project Manager',
        '1 Social Media Manager',
        '1 Email Marketing',
        'Basic analytics',
        'Email support',
        'Standard features'
      ],
      popular: false,
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Team',
      price: { monthly: 299, yearly: 2990 },
      description: 'Ideal for growing teams and departments',
      features: [
        '5 AI Project Managers',
        '5 Social Media Managers',
        '5 Email Marketing',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Organization',
      price: { monthly: 599, yearly: 5990 },
      description: 'For large organizations with extensive needs',
      features: [
        'Unlimited services',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const getCurrentPrice = (pricing: { monthly: number; yearly: number }) => {
    return billingCycle === 'monthly' ? pricing.monthly : pricing.yearly;
  };

  const getSavings = (pricing: { monthly: number; yearly: number }) => {
    const monthlyTotal = pricing.monthly * 12;
    const yearlyTotal = pricing.yearly;
    return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Pricing - Zion Tech Group | Affordable AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from flexible plans designed to scale with your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SaaS pricing, affordable AI solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Pricing Plans
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Transparent, Flexible, Affordable
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our core features 
            with the flexibility to scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save up to 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent AI solutions to automate and optimize your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicesPricing.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'scale-105 border-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">
                      ${getCurrentPrice(plan.price).toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-400 text-sm mt-2">
                      Save {getSavings(plan.price)}% with yearly billing
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT infrastructure and management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicesPricing.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'scale-105 border-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">
                      ${getCurrentPrice(plan.price).toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-400 text-sm mt-2">
                      Save {getSavings(plan.price)}% with yearly billing
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use business tools with flexible pricing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPricing.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'scale-105 border-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">
                      ${getCurrentPrice(plan.price).toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-400 text-sm mt-2">
                      Save {getSavings(plan.price)}% with yearly billing
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="quantum-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>

            <div className="quantum-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
              <p className="text-gray-300">
                Absolutely! For large organizations with specific needs, we offer custom pricing and 
                tailored solutions. Contact us to discuss your requirements.
              </p>
            </div>

            <div className="quantum-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
              <p className="text-gray-300">
                All plans include email support. Professional and Enterprise plans include priority support, 
                and Enterprise includes 24/7 phone support and dedicated account management.
              </p>
            </div>

            <div className="quantum-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Is there a free trial?</h3>
              <p className="text-gray-300">
                Yes! We offer a 14-day free trial for all our services. No credit card required, 
                and you can cancel anytime during the trial period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose your plan or contact us for a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;