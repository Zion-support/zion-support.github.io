import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 199, yearly: 1990 },
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      features: [
        'Up to 5 AI services',
        'Basic support (24/7)',
        'Standard integrations',
        'Monthly reporting',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'blue'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 499, yearly: 4990 },
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      features: [
        'Up to 15 AI services',
        'Priority support (24/7)',
        'Advanced integrations',
        'Weekly reporting',
        'Phone & email support',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'purple'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 999, yearly: 9990 },
      icon: <Crown className="w-8 h-8 text-gold-500" />,
      features: [
        'Unlimited AI services',
        'Dedicated support team',
        'Custom integrations',
        'Real-time reporting',
        'Dedicated account manager',
        'Enterprise analytics',
        'Custom development',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'gold'
    }
  ];

  const microSaasPlans = [
    {
      category: 'AI Services',
      services: [
        { name: 'AI Content Generator', price: 199, period: 'month' },
        { name: 'AI Customer Support', price: 299, period: 'month' },
        { name: 'AI Data Analytics', price: 499, period: 'month' }
      ]
    },
    {
      category: 'IT Services',
      services: [
        { name: 'Cloud Migration', price: 2500, period: 'one-time' },
        { name: 'Cybersecurity Audit', price: 1500, period: 'one-time' },
        { name: 'Ongoing IT Support', price: 799, period: 'month' }
      ]
    },
    {
      category: 'Micro SAAS',
      services: [
        { name: 'Email Marketing Platform', price: 79, period: 'month' },
        { name: 'Project Management', price: 149, period: 'month' },
        { name: 'Inventory Management', price: 199, period: 'month' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-purple-500 bg-gradient-to-br from-purple-50 to-blue-50'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                  </span>
                  <span className="text-gray-500 text-lg">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-green-600 font-medium">
                      Billed annually (${plan.price.yearly})
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Individual Service Pricing */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Individual Service Pricing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{service.name}</span>
                      <span className="text-lg font-bold text-blue-600">
                        ${service.price}
                        <span className="text-sm text-gray-500">/{service.period}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us for personalized pricing and custom development services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">+1 302 464 0950</div>
                <div className="opacity-90">Call us anytime</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">kleber@ziontechgroup.com</div>
                <div className="opacity-90">Email us directly</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Middletown, DE</div>
                <div className="opacity-90">Visit our office</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;