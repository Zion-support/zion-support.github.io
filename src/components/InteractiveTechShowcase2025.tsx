import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Experience AI that thinks and learns like humans",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Real-time learning",
        "Emotional responses",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      demo: "Watch AI analyze complex problems and provide creative solutions in real-time"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Witness quantum processing power in action",
      icon: "⚛️",
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Exponential speed",
        "Parallel processing",
        "Quantum algorithms",
        "Instant calculations"
      ],
      demo: "See quantum computers solve problems that would take classical computers millennia"
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Control technology with your thoughts",
      icon: "🧬",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Thought control",
        "Neural feedback",
        "Enhanced cognition",
        "Direct communication"
      ],
      demo: "Experience direct brain-computer interaction and thought-based control"
    },
    {
      id: 4,
      title: "Interdimensional Tech",
      description: "Access computing across dimensions",
      icon: "🌌",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Multi-dimensional processing",
        "Infinite scalability",
        "Reality manipulation",
        "Transcendent algorithms"
      ],
      demo: "Explore computing resources across multiple dimensions simultaneously"
    }
  ];

  const stats = [
    { label: "Processing Speed", value: "1000x", color: "text-purple-400" },
    { label: "Accuracy Rate", value: "99.9%", color: "text-blue-400" },
    { label: "Efficiency Gain", value: "500%", color: "text-green-400" },
    { label: "Cost Reduction", value: "80%", color: "text-red-400" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 INTERACTIVE SHOWCASE • 2025
          </motion.div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time demos
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onHoverStart={() => setHoveredItem(tech.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 transition-all duration-300 ${
                hoveredItem === tech.id ? 'scale-105 shadow-2xl' : 'hover:scale-105'
              }`}
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: hoveredItem === tech.id ? 1.2 : 1,
                    rotate: hoveredItem === tech.id ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  {tech.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-300 mb-6 text-sm">{tech.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Features:</h4>
                  <ul className="text-gray-400 space-y-2 text-xs">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${tech.gradient} py-3 rounded-lg font-semibold transition-all duration-300`}
                >
                  Try Demo →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎮 Live Interactive Demo</h3>
            <p className="text-xl opacity-90">Experience our technologies in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8"
              >
                <div className="text-6xl mb-4 text-center">{technologies[activeDemo].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-center">{technologies[activeDemo].title}</h4>
                <p className="text-gray-300 mb-6 text-center">{technologies[activeDemo].demo}</p>
                
                <div className="flex justify-center space-x-2 mb-6">
                  {technologies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        activeDemo === index ? 'bg-purple-400' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Real-time Performance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-green-400 font-bold">1000x faster</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Accuracy Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Success Rate</span>
                    <span className="text-blue-400 font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
              className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8">
              Try our interactive demos and discover how these technologies can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Interactive Demo →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;