import React from 'react';
import { Check, Star, Rocket, Brain } from 'lucide-react';
import SEO from '../components/SEO';

const ComprehensivePricingGuide2030 = () => {
  const plans = [
    {
      name: "Future Starter",
      price: "$4,999",
      period: "per month",
      description: "Entry-level access to our 2030 technology suite",
      features: [
        "Basic AI Integration",
        "Quantum Cloud Access",
        "Email Support",
        "Monthly Reports",
        "Up to 10 Users"
      ],
      popular: false
    },
    {
      name: "Future Professional",
      price: "$12,999",
      period: "per month",
      description: "Advanced features for growing businesses",
      features: [
        "Advanced AI Solutions",
        "Quantum Computing Access",
        "Priority Support",
        "Real-time Analytics",
        "Up to 50 Users",
        "API Access",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Future Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete 2030 technology transformation",
      features: [
        "Custom AI Development",
        "Dedicated Quantum Infrastructure",
        "24/7 Support",
        "Advanced Security",
        "Unlimited Users",
        "Full API Access",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Future-ready pricing guide for our revolutionary 2030 technology solutions."
        keywords={["pricing guide", "2030", "future pricing", "quantum computing", "AI"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Comprehensive Pricing Guide 2030</h1>
          <p className="text-xl text-gray-300">
            Future-ready pricing for our revolutionary technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/50 rounded-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}>
                {plan.name === 'Future Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for the Future?</h2>
            <p className="text-gray-300 mb-6">
              Join us in shaping the future of technology. Contact us to discuss your 2030 transformation.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2030;