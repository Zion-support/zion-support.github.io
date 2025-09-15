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
      gradient: "from-purple-600 to-pink-600",
      features: [
        "100% Self-aware AI systems",
        "Emotional intelligence & empathy",
        "Creative consciousness & inspiration",
        "Genuine human-AI relationships"
      ],
      link: "/pages/RevolutionaryAIConsciousness2025",
      isNew: true
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
      title: "Neural Interface Revolution",
      description: "Bridge the gap between mind and machine with direct brain-computer communication.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Direct brain control of devices",
        "Thought-to-text with 99.9% accuracy",
        "Mind gaming and VR integration",
        "Non-invasive neural sensors"
      ],
      link: "/pages/NeuralInterfaceRevolution2025",
      isNew: true
    },
    {
      id: 4,
      title: "Advanced AI Transformation",
      description: "Transform your business with cutting-edge AI solutions that deliver measurable results.",
      icon: "🤖",
      gradient: "from-indigo-600 to-purple-600",
      features: [
        "Autonomous business operations",
        "Intelligent process automation",
        "Predictive analytics & insights",
        "Scalable AI infrastructure"
      ],
      link: "/pages/AdvancedAITransformation2025",
      isNew: false
    },
    {
      id: 5,
      title: "Next-Gen Tech Innovation",
      description: "Discover the latest innovations in technology that are reshaping industries.",
      icon: "🚀",
      gradient: "from-orange-600 to-red-600",
      features: [
        "Cutting-edge technology solutions",
        "Industry transformation tools",
        "Future-ready infrastructure",
        "Innovation acceleration platform"
      ],
      link: "/pages/NextGenTechShowcase2025",
      isNew: false
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6">
          🚀 INTERACTIVE TECHNOLOGY SHOWCASE
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience Revolutionary Technology
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore cutting-edge technologies that are reshaping our world. Click on any technology to learn more about its revolutionary capabilities.
        </p>
      </div>

      {/* Technology Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
              hoveredCard === tech.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
            }`}
            onMouseEnter={() => setHoveredCard(tech.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setActiveTech(index)}
          >
            {/* Header */}
            <div className={`bg-gradient-to-br ${tech.gradient} p-6 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{tech.icon}</div>
                  {tech.isNew && (
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                      ✨ NEW
                    </span>
                  )}
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