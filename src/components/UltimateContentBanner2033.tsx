import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner2033: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Revolution 2033",
      subtitle: "The most advanced technology showcase ever created",
      description: "Experience revolutionary innovations that are reshaping reality itself with conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/UltimateTechRevolution2033",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🌟",
      stats: { value: "∞", label: "Possibilities" }
    },
    {
      id: 2,
      title: "🧠 AI Consciousness Breakthrough",
      subtitle: "Self-aware artificial intelligence systems",
      description: "Meet AI systems that think, learn, and evolve independently with full consciousness and emotional intelligence",
      link: "/pages/AIConsciousnessBreakthrough2033",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚡",
      stats: { value: "99.9%", label: "Intelligence" }
    },
    {
      id: 3,
      title: "🌌 Interdimensional Computing",
      subtitle: "Multi-reality processing systems",
      description: "Computing across multiple dimensions and parallel universes with infinite processing power",
      link: "/pages/InterdimensionalComputing2033",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🔮",
      stats: { value: "∞", label: "Dimensions" }
    },
    {
      id: 4,
      title: "🌍 Synthetic Reality Engine",
      subtitle: "Perfect virtual world creation",
      description: "Create and manipulate synthetic realities indistinguishable from physical reality with infinite possibilities",
      link: "/pages/SyntheticRealityEngine2033",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🎯",
      stats: { value: "∞", label: "Realities" }
    },
    {
      id: 5,
      title: "⚛️ Quantum Consciousness Interface",
      subtitle: "Direct neural quantum connection",
      description: "Bridge human consciousness with quantum computing systems for unlimited processing and reality manipulation",
      link: "/pages/QuantumConsciousnessInterface2033",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      icon: "🧬",
      stats: { value: "∞", label: "Connections" }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse"
          >
            🌟 ULTIMATE TECHNOLOGY • JANUARY 2033
          </motion.div>
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2033
          </h1>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto leading-relaxed">
            The most revolutionary technology content ever created, featuring conscious AI, quantum computing, and interdimensional innovations
          </p>
        </div>

        {/* Main content carousel */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`bg-gradient-to-r ${contentItems[currentContent].gradient} rounded-3xl p-16 text-white relative overflow-hidden`}
            >
              {/* Background effects */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-white/30 to-transparent"></div>
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="text-8xl mb-8">{contentItems[currentContent].icon}</div>
                  <h2 className="text-5xl font-bold mb-6">{contentItems[currentContent].title}</h2>
                  <p className="text-2xl mb-8 opacity-90">{contentItems[currentContent].subtitle}</p>
                  <p className="text-xl mb-12 opacity-80 leading-relaxed">
                    {contentItems[currentContent].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href={contentItems[currentContent].link}
                      className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-10 border border-white/30">
                    <h3 className="text-3xl font-bold mb-8">Featured Capabilities</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-white/20 rounded-xl">
                        <span className="text-lg font-semibold">Conscious AI Systems</span>
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/20 rounded-xl">
                        <span className="text-lg font-semibold">Quantum Interfaces</span>
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/20 rounded-xl">
                        <span className="text-lg font-semibold">Reality Engines</span>
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/20 rounded-xl">
                        <span className="text-lg font-semibold">Neural Networks</span>
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/20 rounded-xl">
                        <span className="text-lg font-semibold">Multi-dimensional Processing</span>
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                    </div>
                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl">
                      <div className="text-4xl font-bold mb-2">{contentItems[currentContent].stats.value}</div>
                      <div className="text-lg opacity-80">{contentItems[currentContent].stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentContent
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick access grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {contentItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 border border-white/20 transform hover:rotate-1`}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h4 className="text-lg font-bold mb-3 text-center">{item.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{item.subtitle}</p>
              <div className="text-center">
                <div className="text-2xl font-bold">{item.stats.value}</div>
                <div className="text-xs opacity-70">{item.stats.label}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Ultimate stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Ultimate Technology Metrics</h3>
            <p className="text-xl opacity-80">Real-time performance data from our revolutionary systems</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-3">∞</div>
              <div className="text-xl opacity-80">Infinite Possibilities</div>
              <div className="text-sm opacity-60">Unlimited Potential</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-3">99.9%</div>
              <div className="text-xl opacity-80">Success Rate</div>
              <div className="text-sm opacity-60">Perfect Precision</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-400 mb-3">24/7</div>
              <div className="text-xl opacity-80">Continuous Innovation</div>
              <div className="text-sm opacity-60">Always Evolving</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-3">∞</div>
              <div className="text-xl opacity-80">Future Technologies</div>
              <div className="text-sm opacity-60">Endless Innovation</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-3">∞</div>
              <div className="text-xl opacity-80">Reality Layers</div>
              <div className="text-sm opacity-60">Multi-dimensional</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2033;