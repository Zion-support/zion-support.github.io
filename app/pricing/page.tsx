'use client';
import React, { useState } from 'react';
import { CheckCircle, X, Star, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'Starter',
      price: { monthly: 79, yearly: 79 * 10 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 AI tools',
        'Basic analytics',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic integrations'
      ],
      limitations: [
        'Limited customization',
        'No priority support',
        'Basic reporting'
      ],
      popular: false,
      color: 'cyan'
    },
    {
      name: 'Professional',
      price: { monthly: 149, yearly: 149 * 10 },
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 15 AI tools',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'Up to 5 user accounts',
        'Advanced integrations',
        'API access',
        'Custom branding'
      ],
      limitations: [
        'Limited API calls',
        'Standard SLA'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, yearly: 299 * 10 },
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited AI tools',
        'Real-time analytics',
        '24/7 dedicated support',
        'Fully custom solutions',
        'Unlimited user accounts',
        'All integrations',
        'Unlimited API access',
        'White-label solution',
        'Custom development',
        'Dedicated account manager'
      ],
      limitations: [],
      popular: false,
      color: 'green'
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Development',
      price: { monthly: 1000, yearly: 1000 * 10 },
      description: 'Custom AI model development and deployment',
      features: [
        'Custom ML model development',
        'Data preprocessing',
        'Model training & optimization',
        'API development',
        'Model deployment',
        'Performance monitoring',
        'Monthly model updates',
        'Technical documentation'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'AI Consulting',
      price: { monthly: 1500, yearly: 1500 * 10 },
      description: 'Strategic AI consulting and implementation',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'Change management',
        'Training & workshops',
        'Ongoing consultation',
        'ROI analysis',
        'Best practices guidance'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'AI Infrastructure',
      price: { monthly: 2000, yearly: 2000 * 10 },
      description: 'Complete AI infrastructure setup and management',
      features: [
        'GPU cluster setup',
        'MLOps pipeline',
        'Model serving infrastructure',
        'Auto-scaling',
        'Monitoring & alerting',
        'Security implementation',
        'Backup & recovery',
        '24/7 infrastructure support'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const itServicePlans = [
    {
      name: 'Basic IT Support',
      price: { monthly: 800, yearly: 800 * 10 },
      description: 'Essential IT support for small businesses',
      features: [
        'Help desk support',
        'System maintenance',
        'Software updates',
        'Basic security monitoring',
        'Backup management',
        'Remote support',
        'Monthly reports'
      ],
      popular: false,
      color: 'gray'
    },
    {
      name: 'Managed IT Services',
      price: { monthly: 1200, yearly: 1200 * 10 },
      description: 'Comprehensive IT management for growing businesses',
      features: [
        '24/7 monitoring',
        'Proactive maintenance',
        'Security management',
        'Cloud migration',
        'Network management',
        'Disaster recovery',
        'Compliance support',
        'Monthly strategy reviews'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Enterprise IT',
      price: { monthly: 2000, yearly: 2000 * 10 },
      description: 'Full-service IT solutions for large organizations',
      features: [
        'Dedicated IT team',
        'Custom solutions',
        'Advanced security',
        'Multi-cloud management',
        'DevOps implementation',
        'Digital transformation',
        'Executive reporting',
        'Strategic planning'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const addOns = [
    {
      name: 'Additional Training',
      price: 500,
      description: 'Extra training sessions for your team',
      features: ['Custom training programs', 'On-site training', 'Certification support']
    },
    {
      name: 'Priority Support',
      price: 300,
      description: 'Faster response times and dedicated support',
      features: ['1-hour response time', 'Dedicated support engineer', 'Phone support']
    },
    {
      name: 'Custom Development',
      price: 150,
      description: 'Custom features and integrations',
      features: ['Custom features', 'API integrations', 'White-label options']
    },
    {
      name: 'Data Migration',
      price: 200,
      description: 'Help migrating from existing systems',
      features: ['Data analysis', 'Migration planning', 'Zero-downtime migration']
    }
  ];

  const getPriceColor = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      blue: 'text-blue-400',
      gray: 'text-gray-400'
    };
    return colors[color as keyof typeof colors] || 'text-cyan-400';
  };

  const getBorderColor = (color: string) => {
    const colors = {
      cyan: 'border-cyan-400',
      purple: 'border-purple-400',
      green: 'border-green-400',
      blue: 'border-blue-400',
      gray: 'border-gray-400'
    };
    return colors[color as keyof typeof colors] || 'border-cyan-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Pricing Plans">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our 30-day money-back guarantee 
            and 24/7 support to ensure your success.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-3 py-1 bg-green-400 text-slate-900 rounded-full text-sm font-semibold">
                Save 20%
              </span>
            )}
          </div>
        </section>

        {/* Micro SAAS Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${getPriceColor(plan.color)}`}>
                      ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-400">
                      Billed annually (${plan.price.yearly}/year)
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center">
                      <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'cyber-button'
                    : `border-2 ${getBorderColor(plan.color)} text-${plan.color}-400 hover:bg-${plan.color}-400 hover:text-slate-900`
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI Service Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicePlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Recommended
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${getPriceColor(plan.color)}`}>
                      ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-400">
                      Billed annually (${plan.price.yearly}/year)
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'cyber-button'
                    : `border-2 ${getBorderColor(plan.color)} text-${plan.color}-400 hover:bg-${plan.color}-400 hover:text-slate-900`
                }`}>
                  Contact Sales
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* IT Service Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicePlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Best Value
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${getPriceColor(plan.color)}`}>
                      ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-400">
                      Billed annually (${plan.price.yearly}/year)
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'cyber-button'
                    : `border-2 ${getBorderColor(plan.color)} text-${plan.color}-400 hover:bg-${plan.color}-400 hover:text-slate-900`
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Add-on Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">${addon.price}/month</div>
                <div className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-sm font-medium">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing for enterprise clients?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing and solutions for enterprise clients. Contact our sales team to discuss your specific needs and get a personalized quote.</p>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">What is included in the 30-day money-back guarantee?</h3>
              <p className="text-gray-300">If you're not satisfied with our service within the first 30 days, we'll provide a full refund. No questions asked.</p>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I change my plan at any time?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our experts are here to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;