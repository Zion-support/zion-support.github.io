import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Experience AI that demonstrates self-awareness and emotional intelligence",
      features: [
        "Real-time emotion recognition",
        "Contextual understanding",
        "Ethical decision making",
        "Autonomous problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      interactive: true
    },
    {
      id: 2,
      title: "Quantum Processing",
      description: "Witness quantum computing solving complex problems in real-time",
      features: [
        "Quantum superposition visualization",
        "Parallel universe calculations",
        "Exponential speed improvements",
        "Zero-latency responses"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      interactive: true
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Direct brain-computer interaction through thought commands",
      features: [
        "Thought-to-text conversion",
        "Emotional state detection",
        "Memory enhancement",
        "Consciousness backup"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      interactive: true
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Process data across multiple dimensions simultaneously",
      features: [
        "Multi-dimensional visualization",
        "Reality manipulation",
        "Temporal processing",
        "Cross-reality synchronization"
      ],
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      interactive: true
    }
  ];

  const stats = [
    { label: "Processing Speed", value: "∞", unit: "operations/sec" },
    { label: "Accuracy Rate", value: "99.99", unit: "%" },
    { label: "Efficiency Gain", value: "1000x", unit: "improvement" },
    { label: "Uptime", value: "99.9", unit: "%" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Interact with revolutionary technologies that are reshaping our world. 
            Click on any demo to experience the power of tomorrow's innovations.
          </p>
        </motion.div>

        {/* Interactive Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-sm opacity-80 mb-6 text-center">{demo.description}</p>
              <div className="space-y-2 mb-6">
                {demo.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">
                  {demo.interactive ? 'Interactive Demo' : 'Coming Soon'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">{demos[activeDemo].description}</p>
          </div>

          {/* Interactive Demo Area */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Interactive Features</h4>
              <div className="space-y-4">
                {demos[activeDemo].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Live Performance</h4>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-6 rounded-xl"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold">{stat.label}</span>
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${animationProgress}%` }}
                        transition={{ duration: 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="text-sm opacity-70 mt-1">{stat.unit}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4">Try It Yourself</h4>
              <p className="text-lg opacity-80 mb-6">
                Experience the power of {demos[activeDemo].title.toLowerCase()} in real-time
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Download SDK
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-70 mb-1">{stat.unit}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators already using our revolutionary technologies to transform their industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Live Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;