import React from 'react';

      {/* Mission Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Space Missions</h2>
          <p className="text-xl opacity-80">Leading humanity's expansion into the cosmos</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Mars Colonization</h3>
            <p className="text-blue-100 mb-6 text-center">
              Establishing the first permanent human settlement on Mars with advanced life support systems
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Terraforming technology</li>
              <li>• Advanced life support</li>
              <li>• Sustainable agriculture</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interstellar Travel</h3>
            <p className="text-purple-100 mb-6 text-center">
              Developing faster-than-light propulsion systems for deep space exploration
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Warp drive technology</li>
              <li>• Quantum propulsion</li>
              <li>• Cryogenic hibernation</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Infrastructure</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Building orbital platforms and space stations for commercial and research purposes
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Orbital manufacturing</li>
              <li>• Space tourism</li>
              <li>• Asteroid mining</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cutting-Edge Space Technologies</h2>
          <p className="text-xl opacity-80">Revolutionary systems powering space exploration</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Ion Propulsion</h3>
            <p className="text-sm opacity-80">High-efficiency electric propulsion for long-duration missions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🔋</div>
            <h3 className="text-xl font-semibold mb-2">Nuclear Power</h3>
            <p className="text-sm opacity-80">Compact nuclear reactors for deep space energy needs</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-semibold mb-2">Biotech Solutions</h3>
            <p className="text-sm opacity-80">Advanced biotechnology for space adaptation and health</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Navigation</h3>
            <p className="text-sm opacity-80">Autonomous AI systems for spacecraft navigation and control</p>
          </div>
        </div>
      </div>

      {/* Mission Timeline */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mission Timeline</h2>
          <p className="text-xl opacity-80">Our roadmap to the stars</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
              <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex-shrink-0"></div>
              <div className="w-1/2 pl-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div className="w-1/2 pr-8"></div>
              <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-white flex-shrink-0"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Q4 2026</h3>
                  <p className="text-cyan-100">Lunar Base Construction</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Q2 2027</h3>
                  <p className="text-purple-100">First Human Mars Mission</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex-shrink-0"></div>
              <div className="w-1/2 pl-8"></div>
            </motion.div>
