import React from 'react';
import { motion } from 'framer-motion';

interface December2025RevolutionaryContentShowcaseProps {
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const December2025RevolutionaryContentShowcase: React.FC<December2025RevolutionaryContentShowcaseProps> = ({
  className = '',
  onClose,
  showCloseButton = true
}) => {
  const revolutionaryFeatures = [
    {
      icon: '🚀',
      title: 'Quantum AI Processing',
      description: 'Revolutionary quantum-classical hybrid AI systems that process data at unprecedented speeds',
      value: '1000x Faster'
    },
    {
      icon: '🧠',
      title: 'Meta-Cognitive Reasoning',
      description: 'AI systems that think about their own thinking processes and self-optimize',
      value: '99.9% Accuracy'
    },
    {
      icon: '⚡',
      title: 'Autonomous Operations',
      description: 'Self-managing AI systems that operate independently with minimal human intervention',
      value: '95% Automation'
    },
    {
      icon: '🔮',
      title: 'Predictive Intelligence',
      description: 'Advanced AI that anticipates future needs and optimizes outcomes proactively',
      value: 'Future Ready'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['Basic AI Integration', 'Standard Support', 'Up to 10 Users'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: ['Advanced AI Features', 'Priority Support', 'Up to 100 Users', 'Custom Integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited Everything', 'Dedicated Support', 'Custom Development', 'White-label Solutions'],
      popular: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 overflow-hidden ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="text-3xl">🎯</span>
            <span className="font-bold text-lg tracking-wider uppercase">
              December 2025 Revolutionary Content
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
          >
            Revolutionary Content Showcase
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
          >
            Experience the future of content with our revolutionary December 2025 showcase. 
            Discover cutting-edge AI technologies and innovative solutions that are transforming industries worldwide.
          </motion.p>
        </div>

        {/* Revolutionary Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {revolutionaryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="text-yellow-400 font-bold text-lg">
                {feature.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Choose Your Revolutionary Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  tier.popular ? 'border-yellow-400/50' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{tier.name}</h4>
                  <div className="text-4xl font-bold mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-300">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary December 2025 technologies 
            to transform their operations and achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Start Your Revolution
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Close Button */}
        {showCloseButton && onClose && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold transition-colors duration-300 z-10"
            aria-label="Close banner"
          >
            ×
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default December2025RevolutionaryContentShowcase;