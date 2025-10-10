'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI integration',
        'Email support',
        'Standard features',
        'Monthly reporting'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'For growing businesses that need advanced AI capabilities',
      features: [
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'API access'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Custom AI solutions',
        '24/7 dedicated support',
        'White-label options',
        'Custom integrations',
        'SLA guarantees',
        'Dedicated infrastructure'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your AI needs" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            Choose the perfect plan for your AI needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-8 rounded-lg ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PricingPage;