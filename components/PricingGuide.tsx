import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Users } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular?: boolean;
  cta: string;
  icon: React.ComponentType<any>;
}

const PricingGuide: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: billingPeriod === 'monthly' ? 99 : 990,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 projects',
        'Basic AI services',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      limitations: [
        'Limited customization',
        'No priority support'
      ],
      cta: 'Get Started',
      icon: Zap
    },
    {
      name: 'Professional',
      price: billingPeriod === 'monthly' ? 299 : 2990,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 projects',
        'Advanced AI services',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      limitations: [
        'Limited integrations'
      ],
      popular: true,
      cta: 'Start Free Trial',
      icon: Shield
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 999 : 9990,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Premium AI services',
        '24/7 dedicated support',
        'Fully custom solutions',
        'Enterprise analytics',
        'Full API access',
        'Advanced team management',
        'Custom integrations',
        'SLA guarantee'
      ],
      limitations: [],
      cta: 'Contact Sales',
      icon: Users
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Flexible pricing options to fit your business needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  tier.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-gray-600">/{tier.period}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>
                    <ul className="space-y-3">
                      {tier.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center space-x-3">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <span className="text-gray-700">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Contact our sales team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingGuide;