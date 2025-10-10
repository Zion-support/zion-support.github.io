'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap, Shield, Users, Clock, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      icon: Zap,
      features: [
        'AI-powered analytics dashboard',
        'Basic customer support',
        'Email integration',
        'Mobile app access',
        'Standard security features',
        'Monthly reports',
        '5 user accounts',
        '10GB storage'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      icon: Users,
      features: [
        'Everything in Starter',
        'Advanced AI automation',
        'Priority support',
        'API access',
        'Custom integrations',
        'Real-time analytics',
        '25 user accounts',
        '100GB storage',
        'Advanced security',
        'Weekly reports',
        'Dedicated account manager'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      icon: Shield,
      features: [
        'Everything in Professional',
        'Custom AI development',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom security protocols',
        'Unlimited users',
        'Unlimited storage',
        'White-label options',
        'Custom training',
        'SLA guarantees',
        'Dedicated infrastructure'
      ],
      popular: false,
      color: 'cyan'
    }
  ];

  const microSaasPlans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Essential tools for small teams',
      features: ['5 AI tools', 'Basic support', 'Standard templates', '1GB storage']
    },
    {
      name: 'Pro',
      price: 99,
      description: 'Advanced features for growing businesses',
      features: ['20 AI tools', 'Priority support', 'Custom templates', '10GB storage', 'API access']
    },
    {
      name: 'Business',
      price: 299,
      description: 'Complete suite for enterprises',
      features: ['50+ AI tools', '24/7 support', 'White-label', 'Unlimited storage', 'Custom development']
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Training',
      price: 500,
      description: 'Custom AI model training for your specific use case'
    },
    {
      name: 'Priority Support',
      price: 200,
      description: '24/7 priority support with guaranteed response times'
    },
    {
      name: 'Custom Integration',
      price: 1000,
      description: 'Custom integration with your existing systems'
    },
    {
      name: 'Data Migration',
      price: 750,
      description: 'Complete data migration and setup assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT services.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                isAnnual ? 'translate-x-9' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
            {isAnnual && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`cyber-card hologram-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.color === 'blue' ? 'bg-blue-500/20' :
                    plan.color === 'purple' ? 'bg-purple-500/20' :
                    'bg-cyan-500/20'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.color === 'blue' ? 'text-blue-400' :
                      plan.color === 'purple' ? 'text-purple-400' :
                      'text-cyan-400'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-green-400 mb-4">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable AI-powered tools for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={plan.name} className="cyber-card hologram-card p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">
                    ${plan.price}/month
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/micro-saas"
                  className="w-full border-2 border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with these optional add-ons
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={addon.name} className="cyber-card hologram-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${addon.price}
                </div>
                <Link
                  to="/contact"
                  className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Add Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us for a quote.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Is there a free trial?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required to start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center cyber-card hologram-card p-12">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;