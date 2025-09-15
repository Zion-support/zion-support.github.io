import React from 'react';
import { motion } from 'framer-motion';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ADVANCED SPACE TECH • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Space Technology 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the next frontier of space exploration with revolutionary technologies that enable 
              interplanetary travel, space colonization, and cosmic discovery.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Space Tech
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Mission Control
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Space Technology Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌌 Revolutionary Space Capabilities</h2>
          <p className="text-xl opacity-90">Leading humanity's expansion into the cosmos</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Propulsion</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Revolutionary propulsion systems using quantum mechanics to achieve near-light speed travel
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Quantum field manipulation</li>
              <li>• Near-light speed capability</li>
              <li>• Fuel efficiency optimization</li>
              <li>• Interstellar travel ready</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Construction</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Autonomous construction systems for building space stations, habitats, and infrastructure in orbit
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• 3D printing in zero gravity</li>
              <li>• Autonomous assembly robots</li>
              <li>• Modular habitat design</li>
              <li>• Self-repairing structures</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Agriculture</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced farming systems for sustainable food production in space environments
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Zero-gravity farming</li>
              <li>• LED growth optimization</li>
              <li>• Closed-loop ecosystems</li>
              <li>• Nutrient recycling</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Mining</h3>
            <p className="text-orange-100 mb-6 text-center">
              Automated mining operations on asteroids and moons for rare materials and resources
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Asteroid resource extraction</li>
              <li>• Lunar mining operations</li>
              <li>• Automated processing</li>
              <li>• Resource transportation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Networks</h3>
            <p className="text-violet-100 mb-6 text-center">
              Advanced satellite constellations providing global connectivity and space-based services
            </p>
            <ul className="text-violet-200 space-y-2 text-sm">
              <li>• Global internet coverage</li>
              <li>• Earth observation</li>
              <li>• Space weather monitoring</li>
              <li>• Communication relay</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Telescopes</h3>
            <p className="text-rose-100 mb-6 text-center">
              Next-generation space observatories for deep space exploration and cosmic discovery
            </p>
            <ul className="text-rose-200 space-y-2 text-sm">
              <li>• Deep space imaging</li>
              <li>• Exoplanet detection</li>
              <li>• Cosmic radiation analysis</li>
              <li>• Dark matter research</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Mission Applications */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🎯 Mission Applications</h2>
            <p className="text-xl opacity-90">Transforming space exploration and colonization</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Mars Colonization</h3>
              <p className="text-gray-200 mb-6">
                Complete infrastructure for establishing permanent human settlements on Mars, 
                including life support systems, energy generation, and resource utilization.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-sm">Habitat construction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-sm">Life support systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-sm">Resource extraction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Interstellar Exploration</h3>
              <p className="text-gray-200 mb-6">
                Advanced propulsion and navigation systems enabling exploration of nearby star systems 
                and the search for habitable exoplanets.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-sm">Quantum propulsion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-sm">Autonomous navigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-sm">Exoplanet detection</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the space technology revolution and be part of humanity's greatest adventure. 
            Explore, colonize, and discover the infinite possibilities of space.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Space Journey
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Space Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpaceTech2026;