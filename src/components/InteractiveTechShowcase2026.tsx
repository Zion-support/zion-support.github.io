import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const techDemos = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Chat with Truly Conscious AI",
      description: "Experience the world's first genuinely conscious artificial intelligence.",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Demo",
      subtitle: "Witness Quantum Supremacy",
      description: "See quantum computers solve impossible problems in seconds.",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Demo",
      subtitle: "Control Technology with Your Mind",
      description: "Direct brain-computer interface for thought-controlled devices.",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌟 Interdimensional Computing",
      subtitle: "Computing Across Dimensions",
      description: "Process information across multiple dimensions simultaneously.",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌟"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % techDemos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [techDemos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • JANUARY 2026
          </div>
<<<<<<< HEAD
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase 2026</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies through interactive demonstrations
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl">{techDemos[activeDemo].icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{techDemos[activeDemo].title}</h3>
                      <p className="text-lg opacity-80">{techDemos[activeDemo].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{techDemos[activeDemo].description}</p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Try Interactive Demo →
                  </button>
                </div>
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{techDemos[activeDemo].icon}</div>
                    <div className="text-lg font-semibold mb-2">Interactive Demo</div>
                    <div className="text-sm text-gray-400">Click to experience this technology</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {techDemos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeDemo ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${demo.gradient} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 ${
                index === activeDemo ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                <p className="text-sm opacity-90 mb-4">{demo.subtitle}</p>
                <div className="text-xs opacity-75">Click to explore →</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">🌟 Ready to Experience the Future?</h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              Join thousands of innovators experiencing these revolutionary technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
                🚀 Get Full Access
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
                📞 Contact Us
              </button>
            </div>
=======

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Innovations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${item.gradient} rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold">{item.title}</div>
              </motion.a>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-079e
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;