import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Next-Generation Robotics Revolution
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of autonomous robotics with AI-powered systems that learn, adapt, and revolutionize industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Robotics Features</h2>
            <p className="text-xl text-gray-300">Cutting-edge capabilities that define the future of automation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Learning</h3>
              <p className="text-gray-300 mb-6">
                Advanced neural networks enable robots to learn from experience and adapt to new environments autonomously
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Deep reinforcement learning</li>
                <li>• Transfer learning capabilities</li>
                <li>• Real-time adaptation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Processing</h3>
              <p className="text-gray-300 mb-6">
                Quantum-enhanced processing enables unprecedented computational power for complex decision-making
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Quantum optimization algorithms</li>
                <li>• Parallel processing capabilities</li>
                <li>• Exponential speed improvements</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🦾</div>
              <h3 className="text-2xl font-bold text-white mb-4">Biomimetic Design</h3>
              <p className="text-gray-300 mb-6">
                Nature-inspired robotic systems that mimic biological movement and behavior patterns
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Bio-inspired locomotion</li>
                <li>• Adaptive morphology</li>
                <li>• Self-healing materials</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Swarm Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Coordinated robotic swarms that work together to solve complex problems and achieve collective goals
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Distributed decision making</li>
                <li>• Emergent behavior patterns</li>
                <li>• Scalable coordination</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Engineering</h3>
              <p className="text-gray-300 mb-6">
                Ultra-precise robotic systems capable of micro and nano-scale operations with unprecedented accuracy
              </p>
              <ul className="text-pink-200 space-y-2 text-sm">
                <li>• Nanometer precision</li>
                <li>• Micro-manipulation</li>
                <li>• Quantum sensing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Safety</h3>
              <p className="text-gray-300 mb-6">
                Advanced safety systems with predictive analytics and fail-safe mechanisms for secure operation
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Predictive safety algorithms</li>
                <li>• Real-time risk assessment</li>
                <li>• Autonomous emergency response</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-300">Transforming industries with advanced robotic solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Manufacturing</h3>
                  <p className="text-gray-300">Automated production lines with intelligent quality control and adaptive manufacturing processes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-gray-300">Surgical robots with precision control and AI-assisted diagnostics for improved patient outcomes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Agriculture</h3>
                  <p className="text-gray-300">Autonomous farming robots for precision agriculture, crop monitoring, and sustainable food production</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Space Exploration</h3>
                  <p className="text-gray-300">Robotic systems for space missions, planetary exploration, and autonomous space station maintenance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏠</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Homes</h3>
                  <p className="text-gray-300">Intelligent home assistants and service robots for enhanced living experiences and automation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔬</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Research</h3>
                  <p className="text-gray-300">Laboratory automation robots for scientific research, drug discovery, and experimental procedures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our advanced robotics solutions can revolutionize your operations and drive unprecedented efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedRobotics2026;