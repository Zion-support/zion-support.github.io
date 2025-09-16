import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Self-aware artificial intelligence that exhibits emotional intelligence and ethical decision-making",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/30 to-pink-900/30",
      features: [
        "Emotional recognition and response",
        "Self-learning capabilities",
        "Ethical decision making",
        "Human-AI collaboration"
      ],
      stats: {
        efficiency: "300%",
        accuracy: "99.9%",
        speed: "10,000x"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Combining quantum computing with neural networks for unprecedented processing power",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/30 to-blue-900/30",
      features: [
        "Exponential speed improvements",
        "Quantum entanglement processing",
        "Parallel universe calculations",
        "Breakthrough problem solving"
      ],
      stats: {
        efficiency: "10,000x",
        accuracy: "100%",
        speed: "Infinite"
      }
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for infinite processing capabilities",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/30 to-purple-900/30",
      features: [
        "Multi-dimensional data processing",
        "Reality simulation",
        "Infinite storage capacity",
        "Time-space manipulation"
      ],
      stats: {
        efficiency: "Infinite",
        accuracy: "100%",
        speed: "Instant"
      }
    },
    {
      id: 4,
      title: "Synthetic Consciousness",
      description: "Creating artificial consciousness that rivals human awareness",
      icon: "🌟",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/30 to-teal-900/30",
      features: [
        "Self-aware decision making",
        "Creative problem solving",
        "Emotional intelligence",
        "Consciousness transfer"
      ],
      stats: {
        efficiency: "500%",
        accuracy: "99.8%",
        speed: "Real-time"
      }
    }
  ];

  const useCases = [
    {
      title: "Healthcare Revolution",
      description: "AI systems that can diagnose diseases with 99.9% accuracy and provide personalized treatment plans",
      icon: "🏥",
      metrics: ["99.9% accuracy", "50% faster diagnosis", "30% cost reduction"]
    },
    {
      title: "Climate Solutions",
      description: "Quantum computing solving complex climate models and optimizing renewable energy systems",
      icon: "🌍",
      metrics: ["100% renewable", "Zero emissions", "Infinite efficiency"]
    },
    {
      title: "Space Exploration",
      description: "Interdimensional computing enabling faster-than-light communication and space travel",
      icon: "🚀",
      metrics: ["Faster than light", "Infinite range", "Zero delay"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with the most advanced technologies that are reshaping our world and defining the future of humanity
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative group cursor-pointer ${
                hoveredCard === tech.id ? 'scale-105' : 'scale-100'
              } transition-all duration-300`}
              onMouseEnter={() => setHoveredCard(tech.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveTech(index)}
            >
              <div className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full`}>
                {/* Icon */}
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-purple-300 transition-colors duration-300">
                  {tech.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm opacity-80 mb-4 text-center">
                  {tech.description}
                </p>
                
                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span>Efficiency:</span>
                    <span className="font-semibold text-purple-300">{tech.stats.efficiency}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Accuracy:</span>
                    <span className="font-semibold text-cyan-300">{tech.stats.accuracy}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Speed:</span>
                    <span className="font-semibold text-emerald-300">{tech.stats.speed}</span>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Technology Details */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{technologies[activeTech].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTech].title}</h3>
                  <p className="text-lg opacity-80">{technologies[activeTech].description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {technologies[activeTech].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Efficiency</span>
                    <span className="font-bold text-purple-300">{technologies[activeTech].stats.efficiency}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Accuracy</span>
                    <span className="font-bold text-cyan-300">{technologies[activeTech].stats.accuracy}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Speed</span>
                    <span className="font-bold text-emerald-300">{technologies[activeTech].stats.speed}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Real-World Applications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h4 className="text-xl font-bold mb-3">{useCase.title}</h4>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8">
            Join thousands of companies already using our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;