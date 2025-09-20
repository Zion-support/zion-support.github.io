<<<<<<< HEAD
=======
import React from 'react';
import { motion } from 'framer-motion';
CheckStarZapCrownInfinity

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<any>;
  ctaText: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    period: "month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Basic AI Integration",
      "Email Support",
      "5 AI Agents",
      "Standard Analytics",
      "Basic Security",
      "1TB Storage"
    ],
    icon: Zap,
    ctaText: "Get Started",
    ctaLink: "/contact"
  },
  {
    name: "Professional",
    price: "$149",
    period: "month",
    description: "Advanced features for growing businesses",
    features: [
      "Advanced AI Integration",
      "Priority Support",
      "25 AI Agents",
      "Advanced Analytics",
      "Enhanced Security",
      "10TB Storage",
      "Custom Integrations",
      "API Access"
    ],
    popular: true,
    icon: Star,
    ctaText: "Start Free Trial",
    ctaLink: "/contact"
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "month",
    description: "Complete solution for large organizations",
    features: [
      "Full AI Suite",
      "24/7 Dedicated Support",
      "Unlimited AI Agents",
      "Enterprise Analytics",
      "Maximum Security",
      "Unlimited Storage",
      "Custom Development",
      "Full API Access",
      "SLA Guarantee",
      "On-premise Options"
    ],
    icon: Crown,
    ctaText: "Contact Sales",
    ctaLink: "/contact"
  }
];

export default function AdvancedPricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tierindex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className={`relative rounded-xl p-8 ${
                tier.popular
                  ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/50'
                  : 'bg-white/10 border border-white/20'
              } backdrop-blur-sm hover:border-white/40 transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <tier.icon className={`h-12 w-12 ${
                    tier.popular ? 'text-purple-400' : 'text-white/70'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-white/70 mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-white/70 ml-2">
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={tier.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                    : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tier.ctaText}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Need a custom solution? 'We', 're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Contact our sales team
            <Infinity className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
