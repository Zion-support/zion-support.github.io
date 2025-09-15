import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2027: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      title: 'Quantum Consciousness',
      description: 'Direct quantum entanglement between human consciousness and AI systems',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      link: '/pages/QuantumConsciousness2027'
    },
    {
      title: 'Synthetic Reality',
      description: 'Complete reality synthesis where physical and digital worlds dissolve',
      icon: '🌍',
      color: 'from-cyan-500 to-blue-500',
      link: '/pages/SyntheticReality2027'
    },
    {
      title: 'Ultimate Revolution',
      description: 'The convergence of consciousness, quantum mechanics, and AI',
      icon: '🚀',
      color: 'from-indigo-500 to-purple-500',
      link: '/pages/UltimateTechRevolution2027'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced technologies ever created, featuring quantum consciousness, 
            synthetic reality, and the ultimate convergence of human and artificial intelligence
          </p>
        </motion.div>

        {/* Dynamic Feature Display */}
        <div className="mb-12">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className={`inline-block bg-gradient-to-r ${features[currentFeature].color} text-white px-12 py-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <div className="text-8xl mb-4 animate-bounce">{features[currentFeature].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{features[currentFeature].title}</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                {features[currentFeature].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentFeature === index
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block bg-gradient-to-r ${feature.color} text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg border-2 border-white/30 hover:border-white/50`}
            >
              {feature.icon} Explore {feature.title} →
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Revolutionary Content Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-300">More Revolutionary Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/pages/AdvancedQuantumComputing2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              ⚛️ Quantum 2026
            </a>
            <a href="/pages/NeuralInterfaceRevolution2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              🧬 Neural 2026
            </a>
            <a href="/pages/AdvancedAISystems2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              🤖 AI Systems
            </a>
            <a href="/pages/SyntheticIntelligence2026" className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-sm border border-white/20">
              🧠 Synthetic AI
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default UltimateContentShowcase2027;
