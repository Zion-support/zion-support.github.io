import React from 'react';
import { motion } from 'framer-motion';

const AdvancedBiotechSolutions2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 BREAKTHROUGH 2026 • ADVANCED BIOTECH SOLUTIONS
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Advanced Biotechnology Solutions
          </h1>
          <p className="text-2xl text-green-200 max-w-4xl mx-auto">
            Revolutionize healthcare, agriculture, and environmental solutions with cutting-edge biotechnology 
            that merges biology and technology for unprecedented breakthroughs
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Precision Gene Editing</h3>
            <p className="text-green-100 mb-6 text-center">
              Advanced CRISPR and beyond technologies for precise genetic modifications 
              with unprecedented accuracy and safety
            </p>
            <ul className="text-green-200 space-y-2 text-sm">
              <li>• Next-gen CRISPR systems</li>
              <li>• Base editing technology</li>
              <li>• Prime editing capabilities</li>
              <li>• Epigenetic modifications</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural-Biotech Interface</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Direct brain-computer interfaces that merge biological neural networks 
              with artificial intelligence systems
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Neural implant technology</li>
              <li>• Brain-computer integration</li>
              <li>• Cognitive enhancement</li>
              <li>• Memory augmentation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Bioimaging</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary imaging technology that uses quantum principles to visualize 
              biological processes at the molecular level
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Quantum microscopy</li>
              <li>• Molecular visualization</li>
              <li>• Real-time imaging</li>
              <li>• Cellular dynamics</li>
            </ul>
          </motion.div>
        </div>

        {/* Revolutionary Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Revolutionary Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Personalized Medicine</h3>
                  <p className="text-emerald-200">
                    Custom treatments based on individual genetic profiles, 
                    ensuring maximum efficacy and minimal side effects
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Agriculture</h3>
                  <p className="text-emerald-200">
                    Genetically enhanced crops that are drought-resistant, 
                    nutrient-rich, and environmentally sustainable
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Environmental Restoration</h3>
                  <p className="text-emerald-200">
                    Biotech solutions for cleaning up pollution, 
                    restoring ecosystems, and combating climate change
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧬</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Synthetic Biology</h3>
                  <p className="text-emerald-200">
                    Design and create new biological systems and organisms 
                    for specific industrial and medical applications
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Drug Discovery</h3>
                  <p className="text-emerald-200">
                    AI-powered drug discovery using biological data 
                    to identify new treatments for diseases
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Bioenergy</h3>
                  <p className="text-emerald-200">
                    Sustainable energy production using biological processes 
                    and genetically engineered organisms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Biotech Architecture</h3>
              <ul className="space-y-3 text-green-200">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Advanced gene editing platforms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Neural-biotech integration systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Quantum bioimaging arrays</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Synthetic biology frameworks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>AI-powered drug discovery</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Gene Editing Accuracy</span>
                    <span className="text-green-300 font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Neural Interface Speed</span>
                    <span className="text-green-300 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Drug Discovery Success</span>
                    <span className="text-green-300 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Biotech Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Biotech Solutions</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-lg font-bold text-white mb-2">Gene Therapy</h3>
              <p className="text-cyan-200 text-sm">Precision genetic treatments</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Neural Implants</h3>
              <p className="text-cyan-200 text-sm">Brain-computer interfaces</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Imaging</h3>
              <p className="text-cyan-200 text-sm">Molecular visualization</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Crops</h3>
              <p className="text-cyan-200 text-sm">Enhanced agriculture</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform the Future with Biotech?
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
            Join the biotechnology revolution and discover how advanced biotech solutions 
            can solve the world's most pressing challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/CyberPhysicalSystems2026" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Cyber-Physical Systems →
            </a>
            <a 
              href="/pages/ConsciousnessComputing2026" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Discover Consciousness Computing →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg"
            >
              Contact Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedBiotechSolutions2026;