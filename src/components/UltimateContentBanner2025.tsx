<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react';
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb

const UltimateContentBanner2025: React.FC = () => {
  return (
<<<<<<< HEAD
    <motion.div
<<<<<<< HEAD
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
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
=======
      className="relative mb-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
=======
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 mb-8 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ULTIMATE: Revolutionary Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Ultimate Technology Experience
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto">
            Immerse yourself in the most advanced technological innovations that will define the future of humanity
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Next-Gen Revolution →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ⚡ Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🌟 Interactive Showcase →
            </a>
          </div>
        </div>
      </div>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-ping delay-3000"></div>
      </div>
<<<<<<< HEAD

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW: ULTIMATE CONTENT 2025
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Discover our latest groundbreaking content featuring the most advanced technologies of 2025
          </p>
        </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-e495

        {/* Carousel */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm p-12 text-white`}>
                    <div className="max-w-4xl mx-auto text-center">
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl mb-8 text-purple-100">{slide.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
<<<<<<< HEAD
          </motion.div>
        </div>
=======
          </div>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {slides.map((slide, index) => (
            <motion.a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 border border-white/20`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-bold mb-3">{slide.title}</h4>
              <p className="text-purple-100 mb-4">{slide.description}</p>
              <div className="flex items-center text-sm font-semibold">
                <span>Explore →</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Promotional Content */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              🚀 Don't Miss Out on the Future
            </h3>
            <p className="text-xl text-purple-100 mb-6">
              Join thousands of innovators already exploring these revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Early Access
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-e495
      </div>
    </motion.div>
=======
    </div>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
  );
};

export default UltimateContentBanner2025;