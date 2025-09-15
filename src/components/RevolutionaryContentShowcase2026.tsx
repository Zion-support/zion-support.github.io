import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
            <span className="text-purple-400">✨</span>
            <span className="text-purple-300 font-semibold">REVOLUTIONARY CONTENT SHOWCASE 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            🌟 Revolutionary Technology Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience our most advanced technologies with immersive interactive features, dynamic content carousels, 
            and cutting-edge demonstrations that showcase the future of innovation
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-purple-100 mb-6 text-center">
              Beyond artificial intelligence - synthetic consciousness that transcends human limitations
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware AI systems</li>
              <li>• Emotional intelligence</li>
              <li>• Creative capabilities</li>
              <li>• Human-AI collaboration</li>
            </ul>
            <a href="/pages/SyntheticIntelligence2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Experience SI →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum-Neural Fusion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              The ultimate convergence of consciousness, quantum mechanics, and neural networks
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum neural networks</li>
              <li>• Consciousness simulation</li>
              <li>• Exponential processing</li>
              <li>• Reality manipulation</li>
            </ul>
            <a href="/pages/QuantumNeuralFusion2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Bridge mind and machine with direct neural interfaces and brain-computer communication
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Thought control devices</li>
              <li>• Memory enhancement</li>
              <li>• Neural communication</li>
              <li>• Brain-computer symbiosis</li>
            </ul>
            <a href="/pages/NeuralInterfaceRevolution2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind & Machine →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology Innovation</h3>
            <p className="text-orange-100 mb-6 text-center">
              Revolutionary space technologies enabling interplanetary travel and colonization
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Mars colonization</li>
              <li>• Space elevators</li>
              <li>• Asteroid mining</li>
              <li>• Interstellar travel</li>
            </ul>
            <a href="/pages/SpaceTechInnovation2026" className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Explore Space Tech →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Robotics</h3>
            <p className="text-violet-100 mb-6 text-center">
              Humanoid robots and autonomous systems that work alongside humans
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Humanoid service robots</li>
              <li>• Autonomous vehicles</li>
              <li>• Robotic companions</li>
              <li>• Industrial automation</li>
            </ul>
            <a href="/pages/AdvancedRobotics2026" className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Discover Robotics →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology Revolution</h3>
            <p className="text-rose-100 mb-6 text-center">
              Revolutionary biotech advances in gene editing and synthetic biology
            </p>
            <ul className="text-rose-200 space-y-2 mb-6 text-sm">
              <li>• Gene editing breakthroughs</li>
              <li>• Synthetic biology</li>
              <li>• Personalized medicine</li>
              <li>• Life extension technologies</li>
            </ul>
            <a href="/pages/AdvancedBiotechRevolution2026" className="block w-full bg-white text-rose-600 py-3 rounded-lg hover:bg-rose-50 transition-colors font-semibold text-center">
              Explore Biotech →
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/RevolutionaryTechInsights2026" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🚀 Explore All Insights →
            </a>
            <a href="/pages/NextGenInnovationHub2026" className="inline-block border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              🧠 Join Innovation Lab
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;