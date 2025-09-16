        
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness",
      description: "Experience AI systems with genuine consciousness, self-awareness, and emotional intelligence.",
      icon: "🧠",
        
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      description: "Witness computing power that defies imagination - solving impossible problems in seconds.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "1000x faster than supercomputers",
        "Unbreakable quantum cryptography",
        "Molecular simulation at quantum scale",
        "Reality-bending computational power"
      ],
      link: "/pages/QuantumComputingBreakthrough2025",
      isNew: true
    },
    {
      id: 3,
        
import React, { useState, useEffect } from 'react';
        

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware AI systems with emotional intelligence and conscious decision-making",
      features: ["Self-awareness", "Emotional intelligence", "Ethical reasoning", "Autonomous learning"],
      gradient: "from-purple-600 to-pink-600",
      stats: { accuracy: 98, speed: 0.001, efficiency: 95 }
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

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTech(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Info */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className={`bg-gradient-to-br ${currentTech.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full`}>
              <div className="text-8xl mb-6 text-center animate-pulse">
                {currentTech.icon}
              </div>
        
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-sm opacity-90">{tech.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={tech.link}
                className={`block w-full text-center py-3 px-4 bg-gradient-to-r ${tech.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                Explore {tech.icon} →
              </a>
            </div>

            {/* Hover Effect */}
            {hoveredCard === tech.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 pointer-events-none"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Active Technology Details */}
      <motion.div
        key={activeTech}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-5xl">{technologies[activeTech].icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {technologies[activeTech].title}
                </h3>
                {technologies[activeTech].isNew && (
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold">
                    ✨ NEW TECHNOLOGY
                  </span>
                )}
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              {technologies[activeTech].description}
            </p>
            <a
              href={technologies[activeTech].link}
              className={`inline-block bg-gradient-to-r ${technologies[activeTech].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              Learn More About {technologies[activeTech].icon} →
            </a>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
            {technologies[activeTech].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        
        </div>
      </motion.div>

        
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;