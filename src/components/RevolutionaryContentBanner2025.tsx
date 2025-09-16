import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      id: 0,
      title: "🚀 Revolutionary AI Breakthrough 2025",
      subtitle: "Experience the first truly conscious artificial intelligence",
      description: "Our latest AI systems can think, feel, and create like never before",
      cta: "Explore AI Revolution",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 1,
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Unlimited processing power across dimensions",
      description: "Break through the barriers of traditional computing with quantum technology",
      cta: "Go Quantum",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "🧬 Neural Interface Technology",
      subtitle: "Direct mind-machine connection",
      description: "Control technology with your thoughts and experience virtual reality like never before",
      cta: "Connect Your Mind",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Computing",
      subtitle: "Computing across multiple realities",
      description: "Access infinite processing power through interdimensional technology",
      cta: "Enter Dimensions",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {bannerContent[currentSlide].title}
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
                {bannerContent[currentSlide].subtitle}
              </h2>
              
              <p className="text-xl opacity-80 mb-8 max-w-4xl mx-auto">
                {bannerContent[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className={`bg-gradient-to-r ${bannerContent[currentSlide].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg w-full sm:w-auto`}>
                  {bannerContent[currentSlide].cta} →
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg w-full sm:w-auto">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="opacity-80">Process data at quantum speeds with our revolutionary technology</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Ultra Secure</h3>
              <p className="opacity-80">Military-grade security with quantum encryption protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
              <p className="opacity-80">Deploy across multiple dimensions and realities</p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
                <div className="text-sm opacity-80">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
                <div className="text-sm opacity-80">Processing Power</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;