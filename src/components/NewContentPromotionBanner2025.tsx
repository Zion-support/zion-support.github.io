<<<<<<< HEAD
import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden">
      {/* Main Promotion Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {promotions[currentSlide].title}
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
                {promotions[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {promotions[currentSlide].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href={promotions[currentSlide].link}
                  className={`bg-gradient-to-r ${promotions[currentSlide].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                >
                  {promotions[currentSlide].icon} Explore Now →
                </a>
                <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContentPromotionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: 'Interactive Demos',
      description: 'Experience AI in action with our hands-on demonstrations',
      icon: '🎮',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Success Stories',
      description: 'Real case studies with measurable ROI results',
      icon: '📈',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Expert Insights',
      description: 'Latest AI trends and industry analysis from our experts',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Interactive Tools',
      description: 'ROI calculators and assessment tools to explore your potential',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">✨ NEW CONTENT 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Our Latest
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Content
              </span>
            </h2>
            
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Explore interactive demos, success stories, expert insights, and powerful tools 
              that showcase the future of AI in business transformation.
            </p>
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120

            {/* Feature Highlight */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className={`text-4xl bg-gradient-to-r ${features[currentFeature].color} bg-clip-text text-transparent`}>
                  {features[currentFeature].icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/content"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore New Content
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                Try Interactive Demo
              </a>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 transition-all duration-500 hover:bg-opacity-20 hover:transform hover:scale-105 ${
                  index === currentFeature ? 'ring-2 ring-white ring-opacity-50' : ''
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className={`text-3xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-yellow-300 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-sm opacity-90">New Articles</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-green-300 mb-2">25+</div>
            <div className="text-sm opacity-90">Case Studies</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-300 mb-2">10+</div>
            <div className="text-sm opacity-90">Interactive Tools</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-300 mb-2">5+</div>
            <div className="text-sm opacity-90">Live Demos</div>
          </div>
        </div>
<<<<<<< HEAD
      </motion.div>

      {/* Technology Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-900 to-purple-900 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">🌟 Revolutionary Technology Highlights</h3>
            <p className="text-xl text-gray-300">Experience the future of technology today</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-white mb-2">Conscious AI</h4>
              <p className="text-gray-300 text-sm">Self-aware artificial intelligence that understands context and emotions</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Quantum Computing</h4>
              <p className="text-gray-300 text-sm">Exponential processing power through quantum mechanics</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 text-center">
              <div className="text-4xl mb-4">🌌</div>
              <h4 className="text-xl font-bold text-white mb-2">Interdimensional Tech</h4>
              <p className="text-gray-300 text-sm">Computing across multiple dimensions for infinite possibilities</p>
            </div>
          </div>
        </div>
      </motion.div>
=======
    <div className="bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary New Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our latest revolutionary content featuring cutting-edge technology innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h3 className="text-xl font-bold text-pink-300">Ultimate Tech Breakthrough</h3>
                  <p className="text-pink-100 text-sm">The most revolutionary technological breakthrough</p>
                </div>
              </div>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-sm">
                Explore Breakthrough →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Next-Gen Tech Revolution</h3>
                  <p className="text-purple-100 text-sm">Revolutionary technology breakthroughs of 2025</p>
                </div>
              </div>
              <a href="/pages/NextGenTechRevolution2025" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Join Revolution →
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🎮</div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-300">Revolutionary Showcase</h3>
                  <p className="text-indigo-100 text-sm">Interactive technology showcase and demos</p>
                </div>
              </div>
              <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm">
                View Showcase →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">AI Consciousness</h3>
                  <p className="text-cyan-100 text-sm">Experience true AI consciousness and intelligence</p>
                </div>
              </div>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                Meet AI →
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All New Content
            </a>
            <a href="/pages/RevolutionaryTechShowcase2025" className="border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400/10 transition-colors font-semibold">
              Watch Live Demos
            </a>
          </div>
        </div>
      </div>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
      </div>
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
    </div>
  );
};

export default NewContentPromotionBanner2025;