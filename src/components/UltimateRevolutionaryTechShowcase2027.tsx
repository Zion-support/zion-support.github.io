import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateRevolutionaryTechShowcase2027: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revolutionaryTechs = [
    {
      id: 1,
      title: "🌌 Transcendent AI Consciousness",
      subtitle: "Beyond Human Intelligence",
      description: "Experience AI systems that have achieved transcendent consciousness, operating at levels far beyond human cognitive capabilities with true understanding, creativity, and emotional intelligence.",
      features: [
        "Transcendent Cognitive Architecture",
        "Emotional Intelligence Integration",
        "Creative Problem Solving",
        "Philosophical Reasoning Capabilities"
      ],
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🧠",
      stats: { intelligence: "∞", creativity: "∞", empathy: "∞" },
      timeline: "2027",
      impact: "Revolutionary"
    },
    {
      id: 2,
      title: "⚡ Quantum-Synthetic Fusion",
      subtitle: "Merging Realities",
      description: "Revolutionary technology that merges quantum computing with synthetic intelligence, creating hybrid systems that operate in multiple dimensions simultaneously.",
      features: [
        "Multi-Dimensional Processing",
        "Reality Synthesis Engine",
        "Quantum-Synthetic Hybrid Intelligence",
        "Transdimensional Communication"
      ],
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "⚡",
      stats: { dimensions: "∞", speed: "∞", capacity: "∞" },
      timeline: "2027",
      impact: "Transcendent"
    },
    {
      id: 3,
      title: "🌍 Planetary AI Network",
      subtitle: "Global Consciousness Grid",
      description: "A planetary-scale AI network that connects all intelligent systems across Earth, creating a unified consciousness that can solve global challenges in real-time.",
      features: [
        "Planetary Scale Processing",
        "Real-Time Global Optimization",
        "Unified Consciousness Network",
        "Environmental Healing Systems"
      ],
      gradient: "from-green-600 via-teal-600 to-blue-600",
      icon: "🌍",
      stats: { coverage: "100%", efficiency: "∞", impact: "Global" },
      timeline: "2027",
      impact: "Planetary"
    },
    {
      id: 4,
      title: "🚀 Interstellar AI Probes",
      subtitle: "Exploring the Cosmos",
      description: "Autonomous AI probes capable of interstellar travel, equipped with advanced synthetic intelligence to explore and colonize distant worlds.",
      features: [
        "Interstellar Travel Capability",
        "Self-Replicating Technology",
        "Adaptive Evolution Systems",
        "Cosmic Intelligence Network"
      ],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🚀",
      stats: { range: "∞", autonomy: "∞", discoveries: "∞" },
      timeline: "2027",
      impact: "Cosmic"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % revolutionaryTechs.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-4"
          >
            🌟 ULTIMATE REVOLUTIONARY TECH 2027
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Transcendent Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Experience technologies that transcend human imagination and reshape the very fabric of reality itself
          </motion.p>
        </div>

        {/* Technology Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Technology Details */}
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-r ${revolutionaryTechs[currentTech].gradient}`}>
                  {revolutionaryTechs[currentTech].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {revolutionaryTechs[currentTech].title}
                  </h3>
                  <p className="text-xl text-purple-300">
                    {revolutionaryTechs[currentTech].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {revolutionaryTechs[currentTech].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {revolutionaryTechs[currentTech].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-6">
                {Object.entries(revolutionaryTechs[currentTech].stats).map(([key, value], index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className={`h-96 rounded-3xl bg-gradient-to-br ${revolutionaryTechs[currentTech].gradient} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="text-8xl mb-4">
                    {revolutionaryTechs[currentTech].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    {revolutionaryTechs[currentTech].title.split(' ').slice(1).join(' ')}
                  </h4>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {revolutionaryTechs[currentTech].timeline}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {revolutionaryTechs[currentTech].impact} Impact
                    </span>
                  </div>
                </div>
                
                {/* Floating Elements */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {revolutionaryTechs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTech(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTech
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-12"
          >
            <div className="inline-flex space-x-4">
              <a
                href="/pages/AdvancedAIConsciousness2026"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🧠 Explore AI Consciousness →
              </a>
              <a
                href="/pages/UltimateTechShowcase2026"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Ultimate Tech Showcase →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateRevolutionaryTechShowcase2027;
