import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI",
      description: "AI that thinks, feels, and creates like humans",
      icon: "🧠",
      color: "purple",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving",
        "Self-Reflection",
        "Ethical Decision Making"
      ],
      demo: "conscious-ai-demo"
    },
    {
      id: 2,
      name: "Quantum Neural",
      description: "Quantum-speed computing with neural networks",
      icon: "⚡",
      color: "cyan",
      features: [
        "Exponential Processing",
        "Quantum Entanglement",
        "Parallel Processing",
        "Instant Learning"
      ],
      demo: "quantum-neural-demo"
    },
    {
      id: 3,
      name: "Neural Interface",
      description: "Control digital worlds with your thoughts",
      icon: "🧬",
      color: "emerald",
      features: [
        "Thought Control",
        "Sensory Immersion",
        "Memory Transfer",
        "Consciousness Upload"
      ],
      demo: "neural-interface-demo"
    },
    {
      id: 4,
      name: "Interdimensional",
      description: "Computing across multiple dimensions",
      icon: "🌌",
      color: "indigo",
      features: [
        "Multi-Dimensional Access",
        "Reality Manipulation",
        "Time Dilation",
        "Parallel Universe Computing"
      ],
      demo: "interdimensional-demo"
    }
  ];

  const colorClasses = {
    purple: {
      bg: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      button: "from-purple-600 to-pink-600",
      text: "text-purple-200"
    },
    cyan: {
      bg: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      button: "from-cyan-600 to-blue-600",
      text: "text-cyan-200"
    },
    emerald: {
      bg: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      button: "from-emerald-600 to-teal-600",
      text: "text-emerald-200"
    },
    indigo: {
      bg: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      button: "from-indigo-600 to-purple-600",
      text: "text-indigo-200"
    }
  };

  const handleTechChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            🌟 Interactive Technology Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Experience our most advanced technologies through interactive demonstrations. 
            Click on any technology to explore its capabilities and see it in action.
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <motion.button
              key={tech.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTechChange(index)}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${colorClasses[tech.color as keyof typeof colorClasses].button} text-white shadow-lg`
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="text-2xl mr-3">{tech.icon}</span>
              {tech.name}
            </motion.button>
          ))}
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${colorClasses[technologies[activeTech].color as keyof typeof colorClasses].bg} backdrop-blur-sm rounded-2xl p-8 border ${colorClasses[technologies[activeTech].color as keyof typeof colorClasses].border} mb-12`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">
                {technologies[activeTech].icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {technologies[activeTech].name}
              </h3>
              <p className={`text-xl ${colorClasses[technologies[activeTech].color as keyof typeof colorClasses].text} mb-8`}>
                {technologies[activeTech].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {technologies[activeTech].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center ${colorClasses[technologies[activeTech].color as keyof typeof colorClasses].text}`}
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${colorClasses[technologies[activeTech].color as keyof typeof colorClasses].button} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300`}
              >
                Try Interactive Demo →
              </motion.button>
            </div>

            <div className="relative">
              <div className="bg-white/10 rounded-xl p-6 min-h-[400px] flex items-center justify-center">
                {!isAnimating && <InteractiveDemo tech={technologies[activeTech]} />}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${colorClasses[tech.color as keyof typeof colorClasses].bg} backdrop-blur-sm rounded-xl p-6 border ${colorClasses[tech.color as keyof typeof colorClasses].border} hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => handleTechChange(index)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">{tech.name}</h4>
              <p className={`${colorClasses[tech.color as keyof typeof colorClasses].text} text-center text-sm mb-4`}>
                {tech.description}
              </p>
              <div className="text-center">
                <span className="text-white text-sm font-semibold">Click to explore →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Explore our complete collection of revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Explore All Technologies
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Interactive Demo Component
const InteractiveDemo: React.FC<{ tech: any }> = ({ tech }) => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const startDemo = () => {
    setIsActive(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="text-center w-full">
      <h4 className="text-2xl font-bold text-white mb-4">
        {tech.name} Interactive Demo
      </h4>
      <p className="text-white/80 mb-6">
        Experience {tech.name} in action
      </p>
      
      {!isActive ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startDemo}
          className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
        >
          Start Demo
        </motion.button>
      ) : (
        <div className="space-y-6">
          <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="text-white">
            <p className="text-lg font-semibold mb-2">
              {progress < 100 ? `Processing... ${progress}%` : 'Demo Complete!'}
            </p>
            <p className="text-sm opacity-80">
              {progress < 100 
                ? 'Demonstrating advanced capabilities...' 
                : `${tech.name} is ready for deployment!`
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTechShowcase2026;