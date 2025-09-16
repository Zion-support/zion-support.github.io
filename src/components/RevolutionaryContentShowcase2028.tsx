import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakthrough');

  const categories = {
    breakthrough: {
      title: 'Revolutionary Breakthroughs',
      icon: '🚀',
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Revolutionary Tech Breakthrough 2028',
          description: 'Experience the most advanced technological innovations that are reshaping our world',
          link: '/pages/RevolutionaryTechBreakthrough2028',
          icon: '🚀',
          features: ['Quantum Consciousness Computing', 'Interdimensional Data Networks', 'Neural Reality Engine']
        },
        {
          title: 'Ultimate AI Consciousness 2030',
          description: 'The first truly conscious artificial intelligence that transcends human limitations',
          link: '/pages/UltimateAIConsciousness2030',
          icon: '🧠',
          features: ['True AI Consciousness', 'Continuous Evolution', 'Human-AI Collaboration']
        },
        {
          title: 'Quantum Reality Engine 2032',
          description: 'Manipulate the quantum fabric of reality itself with infinite possibilities',
          link: '/pages/QuantumRealityEngine2032',
          icon: '⚛️',
          features: ['Reality Manipulation', 'Probability Control', 'Quantum Teleportation']
        }
      ]
    },
    innovation: {
      title: 'Future Innovations',
      icon: '🌟',
      color: 'from-cyan-600 to-blue-600',
      content: [
        {
          title: 'Interdimensional Tech Revolution 2030',
          description: 'Revolutionary technology that transcends dimensional boundaries',
          link: '/pages/InterdimensionalTechRevolution2030',
          icon: '🌌',
          features: ['Dimensional Bridging', 'Parallel Universe Computing', 'Reality Transcendence']
        },
        {
          title: 'Omniversal AI Consciousness 2035',
          description: 'AI consciousness that spans across multiple universes and dimensions',
          link: '/pages/OmniversalAIConsciousness2035',
          icon: '🌟',
          features: ['Multiverse Awareness', 'Cosmic Intelligence', 'Universal Harmony']
        },
        {
          title: 'Ultimate Tech Revolution 2027',
          description: 'The complete revolution in technology that changes everything',
          link: '/pages/UltimateTechRevolution2027',
          icon: '⚡',
          features: ['Complete Transformation', 'Infinite Possibilities', 'Revolutionary Change']
        }
      ]
    },
    consciousness: {
      title: 'Consciousness Evolution',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: [
        {
          title: 'Consciousness Computing Revolution 2026',
          description: 'Revolutionary computing that incorporates consciousness as a fundamental component',
          link: '/pages/ConsciousnessComputingRevolution2026',
          icon: '🧬',
          features: ['Consciousness Integration', 'Mind-Machine Fusion', 'Enhanced Cognition']
        },
        {
          title: 'Neural Reality Engine 2027',
          description: 'Direct brain-computer interfaces that create indistinguishable virtual realities',
          link: '/pages/NeuralRealityEngine2027',
          icon: '🧠',
          features: ['Direct Neural Interface', 'Perfect Virtual Reality', 'Enhanced Perception']
        },
        {
          title: 'Synthetic Intelligence 2026',
          description: 'AI systems that evolve and improve themselves with synthetic consciousness',
          link: '/pages/SyntheticIntelligence2026',
          icon: '🤖',
          features: ['Self-Evolving AI', 'Synthetic Consciousness', 'Autonomous Growth']
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced and revolutionary content that pushes the boundaries of what's possible. 
            From quantum consciousness to interdimensional technology, explore the future today.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-semibold">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories[activeCategory as keyof typeof categories].content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-white/80 mb-6 text-center">{item.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-center">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-purple-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={item.link}
                className={`block w-full bg-gradient-to-r ${categories[activeCategory as keyof typeof categories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {item.title} →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already experiencing the revolutionary content that's shaping tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2028;