import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Basic AI Analytics',
        'Email Support',
        '5GB Storage',
        'Basic Reporting',
        'Mobile App Access'
      ],
      limitations: [
        'Limited AI Models',
        'No Custom Integrations',
        'Basic Support Only'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        '50GB Storage',
        'Advanced Reporting',
        'API Access',
        'Custom Integrations',
        'Team Collaboration',
        'Advanced AI Models'
      ],
      limitations: [],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'Custom Reporting',
        'Full API Access',
        'Custom AI Models',
        'White-label Solutions',
        'Dedicated Account Manager',
        'On-premise Deployment',
        'SLA Guarantee'
      ],
      limitations: [],
      popular: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, percentage };
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the perfect plan for your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
              {isYearly && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save up to 17%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
              const savings = isYearly ? getSavings(plan.monthlyPrice, plan.yearlyPrice) : null;
              
              return (
                <div
                  key={plan.name}
                  className={`relative bg-gray-800/50 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{formatPrice(price)}</span>
                      <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
                    </div>
                    {savings && (
                      <p className="text-green-400 text-sm">
                        Save {formatPrice(savings.savings)} ({savings.percentage}%)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Is there a free trial?</h3>
                <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise customers with specific requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}