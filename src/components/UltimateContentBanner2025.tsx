import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "🌟 Ultimate AI Revolution 2025",
      subtitle: "The most advanced AI systems ever created",
      description: "Experience the pinnacle of artificial intelligence with our revolutionary conscious AI systems that exhibit self-awareness, emotional intelligence, and autonomous decision-making capabilities.",
      features: [
        "Conscious AI with self-awareness",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Contextual understanding and learning"
      ],
      stats: { value: "99.9%", label: "Consciousness Level" },
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/30 to-pink-900/30",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Breakthrough",
      subtitle: "Infinite computational power unlocked",
      description: "Revolutionary quantum computing technology that operates across multiple dimensions, solving problems that were previously impossible to address with classical computers.",
      features: [
        "Quantum supremacy achieved",
        "Multi-dimensional processing",
        "Infinite computational speed",
        "Reality manipulation capabilities"
      ],
      stats: { value: "∞", label: "Computational Power" },
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/30 to-blue-900/30",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Revolution",
      subtitle: "Direct mind-to-machine communication",
      description: "Breakthrough brain-computer interfaces that enable seamless communication between human consciousness and digital systems, opening new frontiers in human potential.",
      features: [
        "Non-invasive brain scanning",
        "Thought-to-text conversion",
        "Neural data visualization",
        "Mind-controlled interfaces"
      ],
      stats: { value: "10^15", label: "Neural Connections" },
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/30 to-teal-900/30",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Technology",
      subtitle: "Computing across multiple realities",
      description: "Revolutionary technology that operates across multiple dimensions, enabling us to solve problems and create solutions that transcend the limitations of our current reality.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Dimensional data storage",
        "Cross-reality communication"
      ],
      stats: { value: "∞", label: "Reality Layers" },
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/30 to-purple-900/30",
      icon: "🌌"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse"
            >
              🚀 ULTIMATE TECHNOLOGY • JANUARY 2025
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              Ultimate Technology Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/80 max-w-4xl mx-auto"
            >
              Discover the most advanced technologies ever created, pushing the boundaries of what's possible
            </motion.p>
          </div>

          {/* Content Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${contentItems[currentContent].bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center mb-4"
                    >
                      <span className="text-4xl mr-4">{contentItems[currentContent].icon}</span>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {contentItems[currentContent].title}
                        </h3>
                        <p className="text-lg text-white/80">
                          {contentItems[currentContent].subtitle}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white/70 mb-6 leading-relaxed"
                    >
                      {contentItems[currentContent].description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="space-y-3 mb-6"
                    >
                      {contentItems[currentContent].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-white/70">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center gap-6 mb-6"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">{contentItems[currentContent].stats.value}</div>
                        <div className="text-sm text-white/70">{contentItems[currentContent].stats.label}</div>
                      </div>
                      <div className="h-12 w-px bg-white/20"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-sm text-white/70">Success Rate</div>
                      </div>
                    </motion.div>
                    
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${contentItems[currentContent].color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Ultimate Technology →
                    </motion.button>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-8xl mb-4"
                    >
                      {contentItems[currentContent].icon}
                    </motion.div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-white/70 mb-2">Technology Status</div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-green-400 font-semibold">Active & Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentContent === index
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { title: "AI Revolution", icon: "🧠", href: "/pages/AIRevolution2025", color: "from-purple-600 to-pink-600" },
              { title: "Quantum Computing", icon: "⚛️", href: "/pages/QuantumComputingBreakthrough", color: "from-cyan-600 to-blue-600" },
              { title: "Neural Interfaces", icon: "🧬", href: "/pages/NeuralInterfaceFuture", color: "from-emerald-600 to-teal-600" },
              { title: "Reality Engineering", icon: "🌌", href: "/pages/InterdimensionalTechRevolution2026", color: "from-indigo-600 to-purple-600" }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                className={`bg-gradient-to-br ${item.color}/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-gradient-to-br hover:${item.color}/30 transition-all duration-300 border border-white/20`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-white">{item.title}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;