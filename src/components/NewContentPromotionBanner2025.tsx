import { motion, AnimatePresence } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const promotions = [
    {
      id: 1,
      title: "🌟 NEW: Revolutionary Tech Showcase 2025",
      subtitle: "Experience the most advanced technologies reshaping our world",
      features: ["Conscious AI Systems", "Quantum Neural Networks", "Interdimensional Computing"],
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "🤖 NEW: AI Solutions Comprehensive 2025",
      subtitle: "Transform your business with revolutionary AI solutions",
      features: ["Autonomous Operations", "Quantum Security", "Synthetic Intelligence"],
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      icon: "🧠"
    },
    {
      id: 3,
      title: "⚡ BREAKTHROUGH: Ultimate Tech Revolution",
      subtitle: "Discover technologies that will define the next decade",
      features: ["Self-Evolving AI", "Reality Manipulation", "Infinite Computing"],
      link: "/pages/UltimateTechRevolution2025",
      color: "from-indigo-600 to-purple-600",
      icon: "⚡"
    }
  ];

  const quickLinks = [
    { name: "Revolutionary Tech 2025", link: "/pages/RevolutionaryTechShowcase2025", icon: "🌟" },
    { name: "AI Solutions 2025", link: "/pages/AISolutionsComprehensive2025", icon: "🤖" },
    { name: "Tech Revolution", link: "/pages/UltimateTechRevolution2025", icon: "⚡" },
    { name: "Innovation Hub", link: "/pages/NextGenInnovationHub2025", icon: "🧠" },
    { name: "Quantum Computing", link: "/pages/QuantumComputingRevolution2025", icon: "⚛️" },
    { name: "Neural Interfaces", link: "/pages/NeuralInterfaceRevolution2025", icon: "🧬" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Main Promotion Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {promotions[currentSlide].title}
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto"></p>
                {promotions[currentSlide].subtitle}</p>
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
              <div className="flex justify-center space-x-4">
                <a
                  href={promotions[currentSlide].link}
                  className={`bg-gradient-to-r ${promotions[currentSlide].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                >
                  {promotions[currentSlide].icon} Explore Now →
                </a>
                <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg"></button>
                  Watch Demo</button>
                </button>
            </motion.div>
          </AnimatePresence>
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}</button>
              /></button>
            ))}</button>
      </motion.div>
      {/* Quick Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 py-8"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">🚀 Explore Our Latest Innovations</h3>
            <p className="text-gray-400">Discover cutting-edge technologies and solutions</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-600 hover:to-pink-600 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                <div className="text-sm font-semibold text-white group-hover:text-white">
                  {link.name}
              </motion.a>
            ))}
      </motion.div>
      {/* Special Offer Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-gradient-to-r from-yellow-600 to-orange-600 text-black py-6"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="text-2xl font-bold">🎉 LIMITED TIME OFFER
            <div className="text-lg">Get 50% off all AI solutions for the first 3 months
            <button className="bg-black text-yellow-400 px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"></button>
              Claim Offer</button>
            </button>
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">🧠
              <h4 className="text-xl font-bold text-white mb-2">Conscious AI</h4>
              <p className="text-gray-300 text-sm">Self-aware artificial intelligence that understands context and emotions</p>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4">⚡
              <h4 className="text-xl font-bold text-white mb-2">Quantum Computing</h4>
              <p className="text-gray-300 text-sm">Exponential processing power through quantum mechanics</p>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 text-center">
              <div className="text-4xl mb-4">🌌
              <h4 className="text-xl font-bold text-white mb-2">Interdimensional Tech</h4>
              <p className="text-gray-300 text-sm">Computing across multiple dimensions for infinite possibilities</p>
import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-indigo-600/20 backdrop-blur-sm">
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary New Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"></p>
            Discover our latest revolutionary content featuring cutting-edge technology innovations</p>
          </p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🌟
                <div>
                  <h3 className="text-xl font-bold text-pink-300">Ultimate Tech Breakthrough</h3>
                  <p className="text-pink-100 text-sm">The most revolutionary technological breakthrough</p>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-sm">
                Explore Breakthrough →
              </a>
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">⚡
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Next-Gen Tech Revolution</h3>
                  <p className="text-purple-100 text-sm">Revolutionary technology breakthroughs of 2025</p>
              <a href="/pages/NextGenTechRevolution2025" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Join Revolution →
              </a>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🎮
                <div>
                  <h3 className="text-xl font-bold text-indigo-300">Revolutionary Showcase</h3>
                  <p className="text-indigo-100 text-sm">Interactive technology showcase and demos</p>
              <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm">
                View Showcase →
              </a>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🧠
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">AI Consciousness</h3>
                  <p className="text-cyan-100 text-sm">Experience true AI consciousness and intelligence</p>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                Meet AI →
              </a>
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All New Content
            </a>
            <a href="/pages/RevolutionaryTechShowcase2025" className="border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400/10 transition-colors font-semibold">
              Watch Live Demos
            </a>
import React, { useState, useEffect } from 'react';
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-border animate-gradient-x">
      </motion.div>
      </motion.div>
  );
};

export default NewContentPromotionBanner2025;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
