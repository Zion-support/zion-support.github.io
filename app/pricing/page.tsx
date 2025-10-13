<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/delete-records-a75e
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['Basic AI Tools', 'Email Support', '5GB Storage', 'Monthly Reports']
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: ['Advanced AI Tools', 'Priority Support', '50GB Storage', 'Weekly Reports', 'Custom Integrations']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Full AI Suite', '24/7 Support', 'Unlimited Storage', 'Real-time Reports', 'Custom Development', 'Dedicated Account Manager']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 ${index === 1 ? 'ring-2 ring-purple-500' : ''}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-300 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 ${
                index === 1 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
>>>>>>> cursor/delete-records-a75e
