import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      id: 1,
      title: "🌟 Revolutionary AI Technology 2025",
      subtitle: "Experience the future of artificial intelligence with our breakthrough conscious AI systems",
      cta: "Explore AI Revolution",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Breakthrough",
      subtitle: "Discover quantum computing solutions that solve impossible problems with exponential speed",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Revolution",
      subtitle: "Connect your mind directly to computers with our revolutionary neural interface technology",
      cta: "Connect Mind & Machine",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Computing",
      subtitle: "Explore computing across multiple dimensions with our interdimensional technology platform",
      cta: "Enter New Dimensions",
      link: "/pages/InterdimensionalTechRevolution2026",
      color: "from-indigo-600 to-purple-600",
      icon: "🌌"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${banners[currentSlide].color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{banners[currentSlide].icon}</div>
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-2">
                        {banners[currentSlide].title}
                      </h2>
                      <p className="text-white/90 text-lg">
                        {banners[currentSlide].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={banners[currentSlide].link}
                      className={`bg-gradient-to-r ${banners[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      {banners[currentSlide].cta} →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className={`bg-gradient-to-br ${banners[currentSlide].color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 h-64 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-pulse">
                        {banners[currentSlide].icon}
                      </div>
                      <div className="text-white/80 text-lg">
                        Interactive Preview
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-6 -right-6 w-12 h-12 bg-purple-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 15, 0],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-400 rounded-full opacity-60"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Revolutionary Technology</h3>
            <p className="text-white/80">
              Experience the most advanced technology content featuring conscious AI and quantum computing
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Interactive Demos</h3>
            <p className="text-white/80">
              Explore our technologies through interactive demonstrations and real-time simulations
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-white mb-2">Future Innovation</h3>
            <p className="text-white/80">
              Discover what's possible with our breakthrough technologies that are reshaping the future
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;