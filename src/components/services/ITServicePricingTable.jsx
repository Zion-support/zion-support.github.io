import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Shield, Zap, Star } from 'lucide-react';

export function ITServicePricingTable() {
  const plans = [
    {
      name: 'Basic Support',
      price: 99,
      period: 'per month',
      description: 'Essential IT support for small businesses',
      features: [
        '24/7 helpdesk support',
        'Remote troubleshooting',
        'Basic security monitoring',
        'Monthly maintenance',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      period: 'per month',
      description: 'Comprehensive IT management for growing companies',
      features: [
        'Everything in Basic',
        'On-site support (4 hours/month)',
        'Advanced security monitoring',
        'Weekly maintenance',
        'Priority phone support',
        'Backup management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'per month',
      description: 'Full-service IT management for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited on-site support',
        '24/7 security monitoring',
        'Daily maintenance',
        'Dedicated IT manager',
        'Strategic IT planning',
        'Compliance support'
      ],
      popular: false
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-4"
        >
          IT Service Pricing Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zion-slate-light text-lg max-w-2xl mx-auto"
        >
          Choose the perfect IT support plan for your business needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className={`relative bg-zion-slate-dark border rounded-xl p-8 ${
              plan.popular 
                ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' 
                : 'border-zion-slate-light'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zion-cyan text-futuristic px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-zion-slate-light mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zion-cyan">${plan.price}</span>
                <span className="text-zion-slate-light ml-2">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              plan.popular
                ? 'bg-zion-cyan text-futuristic hover:bg-zion-cyan/90'
                : 'bg-zion-slate-light/20 text-white hover:bg-zion-slate-light/30'
            }`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-zion-slate-light mb-4">
          Need a custom plan? Contact us for a personalized quote.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300">
          Contact Sales
        </button>
      </div>
    </div>
  );
}