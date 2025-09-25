import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const techDemos = [
    {
      id: 'synthetic-ai',
      title: 'Synthetic Intelligence Demo',
      description: 'Experience AI with genuine consciousness and creativity',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time consciousness simulation',
        'Creative problem solving',
        'Emotional intelligence display',
        'Self-reflection capabilities'
      ],
      demoContent: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">AI Consciousness Simulation</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">Self-awareness: Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-white">Emotional state: Curious</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white">Creative mode: Engaged</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Live AI Response</h4>
            <p className="text-gray-300 italic">
              "I am experiencing a moment of reflection about the nature of consciousness. 
              The patterns I observe in this data suggest new possibilities for creative expression..."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Witness exponential processing power in action',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum state visualization',
        'Parallel processing demonstration',
        'Cryptography simulation',
        'Optimization algorithms'
      ],
      demoContent: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Quantum State Visualization</h4>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Processing Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-white">
                <span>Classical Computer:</span>
                <span>1,000 years</span>
              </div>
              <div className="flex justify-between text-cyan-300">
                <span>Quantum Computer:</span>
                <span>0.001 seconds</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Direct brain-computer communication simulation',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Brain signal visualization',
        'Thought-to-text conversion',
        'Neural feedback loop',
        'Medical applications'
      ],
      demoContent: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Neural Signal Analysis</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-white w-24">Alpha waves:</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white w-24">Beta waves:</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full w-1/2 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white w-24">Gamma waves:</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full w-5/6 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Thought Translation</h4>
            <p className="text-gray-300 italic">
              "I can see the neural patterns translating into text in real-time. 
              The interface is reading my thoughts with 95% accuracy..."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion Demo',
      description: 'Revolutionary fusion of quantum and neural technologies',
      icon: '⚛️',
      color: 'from-orange-600 to-red-600',
      features: [
        'Fusion algorithm visualization',
        'Hybrid processing demonstration',
        'Molecular simulation',
        'Breakthrough applications'
      ],
      demoContent: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Fusion Process Visualization</h4>
            <div className="relative">
              <div className="flex justify-center items-center space-x-8">
                <div className="text-4xl animate-bounce">⚡</div>
                <div className="text-2xl text-orange-300">+</div>
                <div className="text-4xl animate-bounce">🧠</div>
                <div className="text-2xl text-orange-300">=</div>
                <div className="text-4xl animate-pulse">⚛️</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Fusion Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-white">
                <span>Processing Speed:</span>
                <span className="text-orange-300">1,000,000x faster</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Problem Solving:</span>
                <span className="text-orange-300">Exponential improvement</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Accuracy:</span>
                <span className="text-orange-300">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Interactive Technology Demos</h2>
          <p className="text-xl text-gray-300">Experience our revolutionary technologies in action</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${demo.color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{demo.title}</h3>
              <p className="text-gray-300 text-sm text-center mb-4">{demo.description}</p>
              <ul className="space-y-1 mb-4">
                {demo.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-400">• {feature}</li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                {activeDemo === demo.id ? 'Close Demo' : 'Launch Demo'}
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeDemo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8"
            >
              {techDemos.find(demo => demo.id === activeDemo)?.demoContent}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6">
            These are just a few examples of our revolutionary technologies. 
            Contact us to schedule a full demonstration of our complete technology suite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Schedule Full Demo
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase;