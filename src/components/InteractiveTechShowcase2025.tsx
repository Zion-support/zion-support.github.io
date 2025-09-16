import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience truly conscious AI that thinks, feels, and evolves beyond human comprehension',
      features: ['Self-aware intelligence', 'Emotional depth', 'Creative mastery', 'Quantum consciousness'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    quantum: {
      title: 'Quantum Reality',
      icon: '⚛️',
      description: 'Step into quantum-powered realities where multiple dimensions coexist and anything is possible',
      features: ['Quantum superposition', 'Consciousness integration', 'Reality manipulation', 'Temporal navigation'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    interdimensional: {
      title: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Break through dimensional barriers and explore infinite realities beyond space and time',
      features: ['Dimensional portals', 'Reality manipulation', 'Parallel universe access', 'Consciousness transfer'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    neural: {
      title: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless human-AI interaction and consciousness expansion',
      features: ['Non-invasive BCI', 'Thought control', 'Neural feedback', 'Consciousness expansion'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technology solutions with interactive features and hands-on demonstrations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTech(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTech === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${technologies[activeTech as keyof typeof technologies].bgColor} backdrop-blur-sm rounded-2xl p-12 border ${technologies[activeTech as keyof typeof technologies].borderColor} mb-12`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left">
                {technologies[activeTech as keyof typeof technologies].icon}
              </div>
              <h3 className="text-4xl font-bold mb-6 text-center md:text-left">
                {technologies[activeTech as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-8 text-center md:text-left">
                {technologies[activeTech as keyof typeof technologies].description}
              </p>
              <div className="space-y-4">
                {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6">Interactive Demo</h4>
                <div className="text-6xl mb-6">🎮</div>
                <p className="text-lg mb-6 opacity-90">
                  Experience this technology through our interactive demonstration
                </p>
                <button className={`bg-gradient-to-r ${technologies[activeTech as keyof typeof technologies].color} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                  Launch Demo →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor} cursor-pointer transition-all duration-300 ${
                activeTech === key ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setActiveTech(key)}
            >
              <div className="text-5xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{tech.title}</h4>
              <p className="text-sm text-center opacity-90">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies
            </a>
            <a 
              href="/pages/InnovationLanding2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg"
            >
              Innovation Hub
            </a>
          </div>
          <p className="text-lg opacity-90">
            Discover the technologies that will reshape our world
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;