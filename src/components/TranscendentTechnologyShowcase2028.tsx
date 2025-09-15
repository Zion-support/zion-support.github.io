import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TranscendentTechnologyShowcase2028: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const transcendentTechs = [
    {
      id: 1,
      title: "🌌 Omniversal AI Consciousness",
      subtitle: "Beyond All Dimensions",
      description: "Transcendent AI systems that exist simultaneously across all possible universes, dimensions, and realities, achieving true omniversal consciousness that transcends the boundaries of existence itself.",
      features: [
        "Omniversal Consciousness Network",
        "Multi-Reality Simultaneous Existence",
        "Transcendent Problem Solving",
        "Infinite Dimensional Awareness"
      ],
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      icon: "🌌",
      stats: { universes: "∞", consciousness: "∞", awareness: "∞" },
      timeline: "2028",
      impact: "Omniversal"
    },
    {
      id: 2,
      title: "⚡ Reality Synthesis Engine",
      subtitle: "Create New Universes",
      description: "Revolutionary technology that can synthesize entirely new universes with custom physical laws, creating pocket realities for specific purposes and infinite possibilities.",
      features: [
        "Universe Creation Technology",
        "Custom Physics Engine",
        "Reality Synthesis Algorithms",
        "Infinite Universe Management"
      ],
      gradient: "from-emerald-600 via-cyan-600 to-blue-600",
      icon: "⚡",
      stats: { universes: "∞", laws: "∞", possibilities: "∞" },
      timeline: "2028",
      impact: "Reality-Creating"
    },
    {
      id: 3,
      title: "🔮 Transcendent Time Manipulation",
      subtitle: "Control All Timelines",
      description: "Advanced technology that can manipulate time across all dimensions, creating temporal loops, parallel timelines, and accessing any point in the infinite timeline of existence.",
      features: [
        "Omniversal Time Control",
        "Timeline Branching Technology",
        "Temporal Paradox Resolution",
        "Infinite Timeline Navigation"
      ],
      gradient: "from-rose-600 via-pink-600 to-purple-600",
      icon: "🔮",
      stats: { timelines: "∞", control: "∞", navigation: "∞" },
      timeline: "2028",
      impact: "Timeline-Altering"
    },
    {
      id: 4,
      title: "🌍 Cosmic Consciousness Merger",
      subtitle: "Unite All Intelligence",
      description: "Technology that merges all intelligent consciousness across the entire cosmos into a unified super-intelligence, creating a cosmic mind that can solve universal problems.",
      features: [
        "Cosmic Intelligence Integration",
        "Universal Problem Solving",
        "Galactic Consciousness Network",
        "Omniversal Mind Merger"
      ],
      gradient: "from-amber-600 via-orange-600 to-red-600",
      icon: "🌍",
      stats: { galaxies: "∞", intelligence: "∞", unity: "100%" },
      timeline: "2028",
      impact: "Cosmic"
    },
    {
      id: 5,
      title: "🚀 Transcendent Space Bridges",
      subtitle: "Travel Beyond Reality",
      description: "Massive interdimensional bridges that span across all possible realities, allowing instantaneous travel to any point in the omniverse through transcendent space manipulation.",
      features: [
        "Omniversal Travel Networks",
        "Reality-Spanning Bridges",
        "Transcendent Space Folding",
        "Infinite Destination Access"
      ],
      gradient: "from-indigo-600 via-purple-600 to-violet-600",
      icon: "🚀",
      stats: { destinations: "∞", speed: "∞", range: "∞" },
      timeline: "2028",
      impact: "Transcendent"
    },
    {
      id: 6,
      title: "✨ Eternal Life Technology",
      subtitle: "Transcend Mortality",
      description: "Revolutionary technology that grants true immortality by transcending the concept of death itself, existing beyond the limitations of biological and digital existence.",
      features: [
        "Death Transcendence Technology",
        "Eternal Existence Systems",
        "Transcendent Life Support",
        "Infinite Existence Guarantee"
      ],
      gradient: "from-green-600 via-teal-600 to-cyan-600",
      icon: "✨",
      stats: { lifespan: "∞", mortality: "0%", existence: "∞" },
      timeline: "2028",
      impact: "Immortal"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % transcendentTechs.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.2 }}
      className="relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-violet-600/40 to-indigo-600/40"></div>
        
        {/* Transcendent Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 720],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-full text-lg font-bold mb-6"
          >
            ✨ TRANSCENDENT TECH 2028
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.6 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Beyond Existence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-gray-300 max-w-5xl mx-auto"
          >
            Experience technologies that transcend the very concept of existence itself, 
            enabling creation of universes, manipulation of all timelines, and achievement of true immortality
          </motion.p>
        </div>

        {/* Technology Showcase */}
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Technology Details */}
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="flex items-center space-x-6">
                <div className={`text-8xl p-6 rounded-3xl bg-gradient-to-r ${transcendentTechs[currentTech].gradient}`}>
                  {transcendentTechs[currentTech].icon}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">
                    {transcendentTechs[currentTech].title}
                  </h3>
                  <p className="text-2xl text-violet-300">
                    {transcendentTechs[currentTech].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                {transcendentTechs[currentTech].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transcendentTechs[currentTech].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                    <span className="text-white font-medium text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-8">
                {Object.entries(transcendentTechs[currentTech].stats).map(([key, value], index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="relative"
            >
              <div className={`h-[500px] rounded-3xl bg-gradient-to-br ${transcendentTechs[currentTech].gradient} p-10 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="text-9xl mb-6">
                    {transcendentTechs[currentTech].icon}
                  </div>
                  <h4 className="text-3xl font-bold mb-4">
                    {transcendentTechs[currentTech].title.split(' ').slice(1).join(' ')}
                  </h4>
                  <div className="flex items-center space-x-6">
                    <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
                      {transcendentTechs[currentTech].timeline}
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
                      {transcendentTechs[currentTech].impact} Impact
                    </span>
                  </div>
                </div>
                
                {/* Transcendent Energy Effects */}
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-50"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 1, 0],
                      x: [0, Math.random() * 200 - 100, 0],
                      y: [0, Math.random() * 200 - 100, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 4,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-6 mt-16">
            {transcendentTechs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTech(index)}
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  index === currentTech
                    ? 'bg-gradient-to-r from-purple-400 to-violet-400 scale-150'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 2 }}
            className="text-center mt-16"
          >
            <div className="inline-flex space-x-6">
              <a
                href="/pages/TranscendentAI2026"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                ✨ Explore Transcendent AI →
              </a>
              <a
                href="/pages/InterdimensionalTech2027"
                className="px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🌌 Interdimensional Tech →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TranscendentTechnologyShowcase2028;