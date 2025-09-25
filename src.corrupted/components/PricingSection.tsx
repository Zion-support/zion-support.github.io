import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const pricingTiers = [;
  {;
    name: "Starter",price: "$99",period: "/month",description: "Perfect for small businesses and startups",features: [;
      "Basic AI Services"
      "Email Support",;
      "5GB Storage",;
      "Basic Analytics",;
      "Mobile App Access"
    ],;
    popular: false,color: "from-blue-500 to-cyan-500"
  };
  {;
    name: "Professional",price: "$299",period: "/month",description: "Ideal for growing businesses",features: [;
      "Advanced AI Services"
      "Priority Support",;
      "50GB Storage",;
      "Advanced Analytics",;
      "API Access",;
      "Custom Integrations",;
      "Team Collaboration"
    ],;
    popular: true,color: "from-purple-500 to-pink-500"
  };
  {;
    name: "Enterprise",price: "$999",period: "/month",description: "For large organizations",features: [;
      "Full AI Suite"
      "24/7 Dedicated Support",;
      "Unlimited Storage",;
      "Custom Analytics",;
      "White-label Solutions",;
      "Advanced Security",;
      "Custom Development",;
      "SLA Guarantee"
    ],;
    popular: false,color: "from-green-500 to-emerald-500"
  };
];
export function PricingSection() {;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6 }};
        >;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">;
            Transparent Pricing;
          </[^>]*>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Flexible pricing options designed to scale with your business.;
            Start small and grow with us.;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
          {pricingTiers.map((tier, index) => (;
            <motion.div
              key={tier.name};
              className={`relative ${tier.popular ? 'scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              viewport={{ once: true }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
            >;
              {tier.popular && (;&& (; (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                    Most Popular;
                  </[^>]*>
                </[^>]*>
              )};
              ;
              <div className={`bg-slate-800 border-2 ${tier.popular ? 'border-purple-500' : 'border-slate-700'} rounded-2xl p-8 h-full relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-700 to-transparent rounded-full -translate-y-16 translate-x-16"></[^>]*>
                ;
                <div className="relative z-10">;
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</[^>]*>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</[^>]*>
                  ;
                  <div className="mb-8">;
                    <span className="text-4xl font-bold text-white">{tier.price}</[^>]*>
                    <span className="text-gray-400">{tier.period}</[^>]*>
                  </[^>]*>
                  ;
                  <ul className="space-y-3 mb-8">;
                    {tier.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center gap-3">;
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">;
                          <span className="text-white text-xs">✓</[^>]*>
                        </[^>]*>
                        <span className="text-gray-300 text-sm">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                  ;
                  <Link;
                    to="/contact"
                    className={`w-full py-3 px-6 bg-gradient-to-r ${tier.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-center block`};
                  >;
                    Get Started;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.4 }};
        >;
          <p className="text-gray-400 mb-6">;
            Need a custom solution? Contact us for a personalized quote.;
          </[^>]*>
          <Link;
            to="/contact"
            className="[^"]*"
          >;
            Contact Sales Team;
            <span className="text-sm">→</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};