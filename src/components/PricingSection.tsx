import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic AI Services",
      "Email Support",
      "5GB Storage",
      "Basic Analytics",
      "Mobile App Access"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced AI Services",
      "Priority Support",
      "50GB Storage",
      "Advanced Analytics",
      "API Access",
      "Custom Integrations",
      "Team Collaboration"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "/month",
    description: "For large organizations",
    features: [
      "Full AI Suite",
      "24/7 Dedicated Support",
      "Unlimited Storage",
      "Custom Analytics",
      "White-label Solutions",
      "Advanced Security",
      "Custom Development",
      "SLA Guarantee"
    ],
    popular: false,
    color: "from-green-500 to-emerald-500"
  }
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative ${tier.popular ? 'scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-slate-800 border-2 ${tier.popular ? 'border-purple-500' : 'border-slate-700'} rounded-2xl p-8 h-full relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-700 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 bg-gradient-to-r ${tier.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-center block`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            Contact Sales Team
            <span className="text-sm">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}