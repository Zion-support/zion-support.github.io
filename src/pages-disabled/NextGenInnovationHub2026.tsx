import React from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 NEXT-GEN INNOVATION • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The ultimate destination for cutting-edge innovation, where tomorrow's technology meets today's solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🔬 Research & Development
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🚀 Innovation Labs
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                💡 Breakthrough Ideas
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🌐 Global Network
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Labs Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Innovation Laboratories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            State-of-the-art research facilities where breakthrough innovations are born and developed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Research Lab</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced artificial intelligence research and development facility
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Machine learning algorithms</li>
              <li>• Neural network optimization</li>
              <li>• Natural language processing</li>
              <li>• Computer vision systems</li>
            </ul>
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white text-cyan-600 rounded-lg font-semibold text-sm">
                Active Research
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Lab</h3>
            <p className="text-purple-100 mb-6 text-center">
              Cutting-edge quantum computing research and development
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum algorithms</li>
              <li>• Qubit optimization</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum simulation</li>
            </ul>
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold text-sm">
                Breakthrough Ready
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotech Lab</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Revolutionary biotechnology and life sciences research
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Gene editing technology</li>
              <li>• Synthetic biology</li>
              <li>• Personalized medicine</li>
              <li>• Longevity research</li>
            </ul>
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white text-emerald-600 rounded-lg font-semibold text-sm">
                Clinical Phase
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Lab</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space technology and exploration research
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Propulsion systems</li>
              <li>• Life support technology</li>
              <li>• Space manufacturing</li>
              <li>• Interplanetary travel</li>
            </ul>
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white text-orange-600 rounded-lg font-semibold text-sm">
                Mission Ready
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Metaverse Lab</h3>
            <p className="text-violet-100 mb-6 text-center">
              Virtual reality and metaverse technology development
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Holographic displays</li>
              <li>• Virtual commerce</li>
              <li>• Digital twin technology</li>
              <li>• Immersive experiences</li>
            </ul>
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white text-violet-600 rounded-lg font-semibold text-sm">
                Beta Testing
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔋</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Energy Lab</h3>
            <p className="text-rose-100 mb-6 text-center">
              Sustainable energy and clean technology research
            </p>
            <ul className="text-rose-200 space-y-2 mb-6 text-sm">
              <li>• Fusion energy</li>
              <li>• Solar technology</li>
              <li>• Battery innovation</li>
              <li>• Carbon capture</li>
            </ul>
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white text-rose-600 rounded-lg font-semibold text-sm">
                Pilot Phase
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Process */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🔄 Innovation Process</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our systematic approach to transforming ideas into revolutionary technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Ideation</h3>
            <p className="text-gray-300">Brainstorming breakthrough concepts and innovative solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Research</h3>
            <p className="text-gray-300">Deep dive analysis and feasibility studies</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-300">Prototyping and iterative development process</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-2">Deployment</h3>
            <p className="text-gray-300">Global rollout and market implementation</p>
          </motion.div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">📈 Innovation Success</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Measurable impact of our innovation hub on global technology advancement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-6xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-xl font-semibold mb-2">Active Projects</div>
            <div className="text-gray-300">Currently in development</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-6xl font-bold text-purple-400 mb-2">1000+</div>
            <div className="text-xl font-semibold mb-2">Patents Filed</div>
            <div className="text-gray-300">Innovation protection</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-6xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-xl font-semibold mb-2">Countries</div>
            <div className="text-gray-300">Global research network</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-6xl font-bold text-orange-400 mb-2">$2B+</div>
            <div className="text-xl font-semibold mb-2">Investment</div>
            <div className="text-gray-300">Research funding</div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the next generation of technological breakthroughs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Innovating
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Explore Labs
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;