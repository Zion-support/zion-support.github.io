import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2035: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE CONTENT • JANUARY 2035
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Ultimate Content Showcase 2035
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Discover the most revolutionary content featuring breakthrough technologies that will reshape reality itself. 
            Experience interdimensional computing, consciousness transfer, and reality manipulation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/pages/UltimateTechRevolution2035"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-flex items-center"
            >
              🌌 Explore Ultimate Content →
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2035"
              className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg inline-flex items-center"
            >
              ⚡ Interactive Demo
            </a>
          </motion.div>
        </div>
        
        {/* Content Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: "🌌",
              title: "Interdimensional Computing",
              description: "Process data across multiple dimensions simultaneously",
              link: "/pages/UltimateTechRevolution2035"
            },
            {
              icon: "🧠",
              title: "Consciousness Transfer",
              description: "Achieve digital immortality through mind upload",
              link: "/pages/RevolutionaryTechShowcase2035"
            },
            {
              icon: "⚡",
              title: "Reality Engine",
              description: "Manipulate reality itself through quantum fields",
              link: "/pages/UltimateTechRevolution2035"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-semibold"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2035;