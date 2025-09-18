import React from 'react';
import { motion } from 'framer-motion';

const BiotechAIRevolution2030: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 BIOTECH AI REVOLUTION • 2030
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Biotech AI Revolution 2030
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Merge biology with artificial intelligence to create living machines, 
              programmable organisms, and synthetic life forms that can heal, 
              adapt, and evolve beyond natural limitations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Enter Bio Lab →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Watch Creation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biotech AI Technologies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🧬 Revolutionary Biotech AI</h2>
            <p className="text-xl opacity-80">Where artificial intelligence meets synthetic biology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Living Machines */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Living Machines</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Self-repairing, self-replicating machines made from biological 
                materials that can adapt and evolve like living organisms
              </p>
              <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
                <li>• Self-healing materials</li>
                <li>• Biological computation</li>
                <li>• Adaptive morphology</li>
                <li>• Organic energy systems</li>
              </ul>
              <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Create Living Machine →
              </button>
            </motion.div>

            {/* Programmable Organisms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧪</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Programmable Organisms</h3>
              <p className="text-teal-100 mb-6 text-center">
                Genetically engineered organisms with AI-controlled behaviors 
                for specific tasks like environmental cleanup or medical treatment
              </p>
              <ul className="text-teal-200 space-y-2 mb-6 text-sm">
                <li>• DNA programming interfaces</li>
                <li>• Behavioral control systems</li>
                <li>• Environmental adaptation</li>
                <li>• Task-specific evolution</li>
              </ul>
              <button className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
                Program Life →
              </button>
            </motion.div>

            {/* Synthetic Life Forms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🔬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Life Forms</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Completely artificial life forms created from scratch with 
                custom-designed biological systems and AI consciousness
              </p>
              <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
                <li>• Artificial DNA synthesis</li>
                <li>• Custom biological systems</li>
                <li>• AI consciousness integration</li>
                <li>• Novel life architectures</li>
              </ul>
              <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
                Design Life →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medical Applications */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-800/50 to-cyan-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🏥 Medical Breakthroughs</h2>
            <p className="text-xl opacity-80">Revolutionary healthcare through biotech AI</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">AI-Controlled Nanomedicine</h3>
              <p className="text-lg opacity-90 mb-6">
                Microscopic biological machines that can navigate the human body, 
                diagnose diseases, deliver targeted treatments, and repair damaged 
                cells with precision beyond current medical capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Precision drug delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Cellular repair and regeneration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Real-time disease monitoring</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-xl p-8 border border-emerald-400/30"
            >
              <div className="text-6xl mb-4 text-center">💊</div>
              <h4 className="text-xl font-bold mb-4 text-center">Living Medicine</h4>
              <p className="text-center opacity-90">
                Self-replicating therapeutic organisms that can adapt to 
                individual patient needs and evolve to combat new diseases.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">🌱 The Future of Life</h2>
            <p className="text-xl opacity-80 mb-8 max-w-4xl mx-auto">
              Biotech AI is redefining what it means to be alive. From programmable 
              organisms to synthetic life forms, we're creating a new era where 
              biology and technology merge seamlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Enter the Bio Revolution
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BiotechAIRevolution2030;