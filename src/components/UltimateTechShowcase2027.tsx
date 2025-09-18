import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2027: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE BREAKTHROUGH SHOWCASE • 2027-2035
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Showcase
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Explore the most advanced technologies that will reshape the future of humanity. 
              From AI consciousness to interdimensional travel, experience what's possible.
            </p>
          </motion.div>
        </div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {showcaseItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title.split(' ')[0]} {item.title.split(' ')[1]}
            </motion.button>
          ))}
        </div>
        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="text-6xl mb-4">{showcaseItems[activeTab].icon}</div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {showcaseItems[activeTab].title}
                </h3>
                <p className="text-xl opacity-90 mb-8">
                  {showcaseItems[activeTab].description}
                </p>
                <div className="space-y-4 mb-8">
                  {showcaseItems[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={showcaseItems[activeTab].link}
                    className={`bg-gradient-to-r ${showcaseItems[activeTab].gradient} px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Technology →
                  </motion.a>
                  <motion.button
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </div>
              {/* Right Visual */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`bg-gradient-to-br ${showcaseItems[activeTab].gradient} rounded-2xl p-8 text-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-8xl mb-4">{showcaseItems[activeTab].icon}</div>
                    <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                    <p className="opacity-90 mb-6">
                      Experience this revolutionary technology through our interactive demonstration
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="text-sm font-semibold">Performance</div>
                        <div className="text-xs opacity-75">99.9% Uptime</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-2xl mb-2">🔒</div>
                        <div className="text-sm font-semibold">Security</div>
                        <div className="text-xs opacity-75">Quantum Safe</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already experiencing these revolutionary technologies. 
            The future is here, and it's more incredible than you can imagine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default UltimateTechShowcase2027;