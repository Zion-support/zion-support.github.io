<<<<<<< HEAD
=======
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewContentPromotionalBanner = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              scale: [1.051],
              rotate: [01-10]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              NEW CONTENT LAUNCHED!
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
            🚀 Revolutionary AI breakthroughsquantum computing solutionsand autonomous business systems are now live!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI Services 2025</h3>
              <p className="text-sm text-blue-100">Revolutionary automation solutions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30"
            >
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm text-blue-100">10,000x faster processing</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0x: 30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.6 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30"
            >
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-sm text-blue-100">Brain-computer integration</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0scale: 0.9 }}
            animate={{ opacity: 1scale: 1 }}
            transition={{ duration: 0.6delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/new-content-showcase" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎯 Explore New Content
            </Link>
            
            <Link 
              href="/ai-2025-breakthrough" 
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              🔥 View Breakthroughs
            </Link>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6delay: 1.0 }}
            className="mt-8 text-lg text-blue-200 font-semibold"
          >
            ⚡ Limited Time: Get 50% off on all premium AI solutions!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentPromotionalBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
