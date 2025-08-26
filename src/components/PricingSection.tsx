import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    icon: Star,
    features: [
      'Basic AI Services',
      'Email Support',
      '5 Projects',
      'Basic Analytics',
      'Standard Templates'
    ],
    cta: 'Get Started',
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing companies and teams',
    icon: Zap,
    features: [
      'Advanced AI Services',
      'Priority Support',
      'Unlimited Projects',
      'Advanced Analytics',
      'Custom Templates',
      'API Access',
      'Team Collaboration'
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'from-zion-cyan to-zion-purple'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    icon: Crown,
    features: [
      'Custom AI Solutions',
      '24/7 Dedicated Support',
      'Unlimited Everything',
      'Custom Integrations',
      'White-label Options',
      'SLA Guarantees',
      'On-site Training',
      'Custom Development'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-purple-600 to-pink-600'
  }
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to scale with your business needs. 
            Start small and grow with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular ? 'ring-2 ring-zion-cyan/50 shadow-2xl shadow-zion-cyan/25' : ''
                }`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light">{plan.description}</p>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                      className={`w-full py-3 px-6 rounded-xl font-medium text-center transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                          : 'bg-zion-slate-light/10 text-white border border-zion-cyan/20 hover:bg-zion-cyan/20 hover:border-zion-cyan/40'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-zion-slate-light mb-6">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            Schedule a Consultation
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}