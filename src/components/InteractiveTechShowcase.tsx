import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = {
    ai: {
      name: 'Artificial Intelligence',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionary AI that thinks, learns, and creates like humans',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: { accuracy: '99.9%', speed: '1000x', efficiency: '95%' }
    },
    quantum: {
      name: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500',
      description: 'Quantum-powered computing that solves impossible problems',
      features: ['Quantum Supremacy', 'Quantum Algorithms', 'Quantum Cryptography', 'Quantum AI'],
      stats: { qubits: '1000+', speed: '10^15 ops/sec', applications: '50+' }
    },
    holographic: {
      name: 'Holographic Technology',
      icon: '🌟',
      color: 'from-indigo-500 to-purple-500',
      description: 'True 3D holographic displays and communication systems',
      features: ['3D Displays', 'Holographic Communication', 'Holographic Storage', 'Holographic Computing'],
      stats: { resolution: '4K', viewing: '360°', latency: '<1ms' }
    },
    biotech: {
      name: 'Biotechnology',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      description: 'Revolutionary biotechnology transforming human health',
      features: ['Gene Editing', 'Synthetic Biology', 'Neural Interfaces', 'Regenerative Medicine'],
      stats: { precision: '99.9%', diseases: '1000+', lifespan: '+50 years' }
    },
    space: {
      name: 'Space Technology',
      icon: '🚀',
      color: 'from-blue-500 to-indigo-500',
      description: 'Advanced space technologies enabling interstellar travel',
      features: ['Advanced Propulsion', 'Space Habitats', 'Asteroid Mining', 'Space Communication'],
      stats: { missions: '25+', planets: 'Mars', speed: '0.1c' }
    },
    robotics: {
      name: 'Advanced Robotics',
      icon: '🤖',
      color: 'from-gray-500 to-blue-500',
      description: 'Intelligent robots transforming industries and human life',
      features: ['Humanoid Robots', 'Industrial Automation', 'Service Robots', 'Medical Robots'],
      stats: { precision: '0.01mm', speed: '10x human', efficiency: '300%' }
    }
  };

  // Auto-rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const techKeys = Object.keys(technologies);
        const currentIndex = techKeys.indexOf(activeTech);
        const nextIndex = (currentIndex + 1) % techKeys.length;
        setActiveTech(techKeys[nextIndex]);
        setIsAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTech, technologies]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time data
          </p>
        </motion.div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTech(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTech === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </motion.button>
          ))}
        </div>

        {/* Active Technology Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/30"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-8xl mb-6 text-center"
                >
                  {technologies[activeTech as keyof typeof technologies].icon}
                </motion.div>
                <h3 className="text-4xl font-bold mb-4 text-center">
                  {technologies[activeTech as keyof typeof technologies].name}
                </h3>
                <p className="text-xl text-blue-100 mb-8 text-center">
                  {technologies[activeTech as keyof typeof technologies].description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(technologies[activeTech as keyof typeof technologies].stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-cyan-300">{value}</div>
                      <div className="text-sm text-cyan-200 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6 text-center">Key Features</h4>
                <div className="space-y-4">
                  {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4"
                    >
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                      <span className="text-blue-100">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-cyan-300">Try Interactive Demo</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Click on different technologies above to see real-time demonstrations and explore their capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Interactive Demo →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;