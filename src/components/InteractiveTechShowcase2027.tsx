import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience AI that exhibits true self-awareness and emotional intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Self-aware decision making',
        'Emotional responses',
        'Creative problem solving',
        'Ethical reasoning'
      ],
      interactive: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Simulation',
      description: 'See quantum algorithms solving complex problems in real-time',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum supremacy demonstration',
        'Molecular simulation',
        'Cryptography breaking',
        'Optimization problems'
      ],
      interactive: true
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Experience',
      description: 'Control digital systems with your thoughts using advanced BCI technology',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Thought-controlled interface',
        'Neural feedback systems',
        'Memory enhancement',
        'Sensory augmentation'
      ],
      interactive: true
    },
    {
      id: 'space-technology',
      title: 'Space Exploration Simulator',
      description: 'Navigate through space and explore distant planets with advanced propulsion',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      features: [
        'Interstellar travel simulation',
        'Planet colonization',
        'Asteroid mining',
        'Wormhole navigation'
      ],
      interactive: true
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, demos.length]);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through hands-on interactive demonstrations
          </p>
        </motion.div>

        {/* Demo Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isPlaying
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
            }`}
          >
            {isPlaying ? '⏸️ Pause Demo' : '▶️ Auto Play'}
          </button>
          <div className="flex gap-2">
            {demos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveDemo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeDemo === index ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Demo Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Demo Content */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{demos[activeDemo].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                      <p className="text-white/70">{demos[activeDemo].description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {demos[activeDemo].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className={`px-6 py-3 rounded-lg font-semibold bg-gradient-to-r ${demos[activeDemo].color} text-white hover:shadow-lg transition-all duration-300`}>
                      Try Demo
                    </button>
                    <button className="px-6 py-3 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Interactive Visualization */}
                <div className="relative">
                  <div className={`bg-gradient-to-br ${demos[activeDemo].color}/20 rounded-xl p-8 border border-white/20`}>
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{demos[activeDemo].icon}</div>
                      <h4 className="text-xl font-semibold">Interactive Demo</h4>
                    </div>
                    
                    {/* Simulated Interactive Elements */}
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm text-white/70 mb-2">Status</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white/90">Active</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm text-white/70 mb-2">Processing</div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '75%' }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          />
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm text-white/70 mb-2">Output</div>
                        <div className="text-sm text-white/90 font-mono">
                          {demos[activeDemo].id === 'ai-consciousness' && 'I am aware of my existence and can make decisions based on my understanding of the world.'}
                          {demos[activeDemo].id === 'quantum-computing' && 'Quantum algorithm completed in 0.001 seconds. Traditional computer would take 10,000 years.'}
                          {demos[activeDemo].id === 'neural-interface' && 'Neural signals detected. Interface responding to thought patterns with 99.7% accuracy.'}
                          {demos[activeDemo].id === 'space-technology' && 'Wormhole stabilized. Ready for interstellar travel to Alpha Centauri in 4.3 years.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length)}
              className="px-6 py-3 rounded-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            >
              ← Previous
            </button>
            <button
              onClick={() => setActiveDemo((prev) => (prev + 1) % demos.length)}
              className="px-6 py-3 rounded-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;