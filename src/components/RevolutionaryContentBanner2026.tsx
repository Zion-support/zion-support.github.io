import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentShowcases = [
    {
      title: 'Revolutionary Tech Breakthrough',
      description: 'Experience the most advanced technological innovations',
      icon: '🚀',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      color: 'from-purple-600 to-pink-600',
      features: ['Consciousness AI', 'Quantum Reality', 'Interdimensional Tech']
    },
    {
      title: 'Ultimate Tech Showcase',
      description: 'Interactive exploration of cutting-edge technologies',
      icon: '🌟',
      link: '/pages/UltimateTechShowcase2025',
      color: 'from-cyan-600 to-blue-600',
      features: ['AI Revolution', 'Quantum Computing', 'Neural Interfaces']
    },
    {
      title: 'Next-Gen Innovation Hub',
      description: 'Where impossible becomes possible',
      icon: '🔬',
      link: '/pages/NextGenInnovationHub2025',
      color: 'from-emerald-600 to-teal-600',
      features: ['Consciousness Transfer', 'Reality Engineering', 'Matter Manipulation']
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🌟 REVOLUTIONARY CONTENT 2026
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary Content Showcase</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our latest breakthrough content featuring the most advanced technologies of 2025-2026
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {contentShowcases.map((showcase, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group cursor-pointer"
          >
            <div className={`bg-gradient-to-br ${showcase.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 text-center animate-bounce">{showcase.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{showcase.title}</h3>
                <p className="text-lg opacity-90 mb-6 text-center">{showcase.description}</p>
                
                <div className="space-y-2 mb-6">
                  {showcase.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <a
                    href={showcase.link}
                    className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
                  >
                    Explore {showcase.title} →
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Call-to-Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">🌟 Experience the Future Today</h3>
          <p className="text-xl opacity-90 mb-6">
            Join thousands of innovators exploring the most advanced technologies ever created
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold"
            >
              Start Exploring
            </a>
            <a
              href="/pages/UltimateTechShowcase2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
            >
              View All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;