import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI Solutions",
        "Email Support",
        "5GB Storage",
        "Standard Security"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI Solutions",
        "Priority Support",
        "50GB Storage",
        "Enhanced Security",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs",
      features: [
        "Full AI Suite",
        "24/7 Dedicated Support",
        "Unlimited Storage",
        "Enterprise Security",
        "Custom Development",
        "SLA Guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business needs with Zion Tech Group's flexible pricing options." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
              index === 1 ? 'border-cyan-500' : 'border-white/20'
            }`}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                <div className="text-gray-300">{plan.period}</div>
                <p className="text-gray-300 mt-4">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                index === 1 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                  : 'border border-white/20 text-white hover:bg-white/10'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}