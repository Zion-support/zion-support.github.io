import React, { useState } from 'react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  gradient: string;
}

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: billingPeriod === 'monthly' ? "$99" : "$999",
      period: billingPeriod === 'monthly' ? "/month" : "/year",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI consultation",
        "Up to 5 hours of support",
        "Email support",
        "Basic analytics dashboard",
        "Monthly progress reports"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: billingPeriod === 'monthly' ? "$299" : "$2,999",
      period: billingPeriod === 'monthly' ? "/month" : "/year",
      description: "Ideal for growing companies with advanced needs",
      features: [
        "Advanced AI implementation",
        "Up to 20 hours of support",
        "Priority email & phone support",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Quarterly strategy sessions",
        "Performance optimization"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom AI solutions",
        "Unlimited support hours",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom analytics platform",
        "White-label solutions",
        "On-site training",
        "SLA guarantees"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-800 rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                tier.popular
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                  : 'border-gray-700/50 hover:border-purple-500/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`w-5 h-5 bg-gradient-to-r ${tier.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? `bg-gradient-to-r ${tier.gradient} text-white hover:shadow-lg hover:shadow-purple-500/25`
                    : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
                }`}
              >
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <p className="text-gray-500 text-sm">
            Need a custom solution? <span className="text-purple-400 cursor-pointer hover:underline">Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;