import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
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
    {
      id: 2,
      name: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum-powered virtual reality with physics manipulation and consciousness integration",
      features: ["Quantum simulation", "Reality manipulation", "Neural interface", "Dimensional exploration"],
      gradient: "from-indigo-600 to-purple-600",
      stats: { accuracy: 99.7, speed: 0.0001, efficiency: 98 }
    },
    {
      id: 3,
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer communication with thought control and cognitive enhancement",
      features: ["Thought control", "Neural enhancement", "Mind communication", "Cognitive augmentation"],
      gradient: "from-emerald-600 to-teal-600",
      stats: { accuracy: 99.2, speed: 0.05, efficiency: 97 }
    },
    {
      id: 4,
      name: "Synthetic Intelligence",
      icon: "🤖",
      description: "Hybrid biological-digital intelligence with unprecedented capabilities",
      features: ["Hybrid intelligence", "Biological integration", "Adaptive learning", "Consciousness transfer"],
      gradient: "from-cyan-600 to-blue-600",
      stats: { accuracy: 97.5, speed: 0.01, efficiency: 96 }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time metrics
          </p>
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
>>>>>>> cursor/create-and-deploy-new-content-6f13
>>>>>>> cursor/create-and-deploy-new-content-c439
        </div>
=======
      {/* Technology Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTech(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeTech
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
>>>>>>> origin/cursor/create-and-deploy-new-content-9a22
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;