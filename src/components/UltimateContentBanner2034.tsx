import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Breakthrough 2034",
      description: "Experience consciousness transfer, reality manipulation, and digital immortality",
      link: "/pages/UltimateTechBreakthrough2034",
      color: "from-purple-600 to-pink-600",
      icon: "🧠",
      badge: "REVOLUTIONARY"
    },
    {
      id: 2,
      title: "⚛️ Revolutionary Tech Showcase 2034",
      description: "Quantum consciousness, reality synthesis, and universe creation technologies",
      link: "/pages/RevolutionaryTechShowcase2034",
      color: "from-cyan-600 to-blue-600",
      icon: "🌌",
      badge: "BREAKTHROUGH"
    },
    {
      id: 3,
      title: "🌟 Comprehensive Services 2034",
      description: "Complete suite of consciousness, quantum, and neural transformation services",
      link: "/pages/ComprehensiveServices2034",
      color: "from-emerald-600 to-teal-600",
      icon: "⚡",
      badge: "ULTIMATE"
    },
    {
      id: 4,
      title: "🧬 Neural Quantum Integration",
      description: "Direct brain-quantum computer interfaces for unlimited computational power",
      link: "/pages/NeuralQuantumIntegration2034",
      color: "from-indigo-600 to-purple-600",
      icon: "🧬",
      badge: "FUTURE"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse"
          >
            🌟 ULTIMATE CONTENT • JANUARY 2034
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Future is Here
          </h2>
          <p className="text-2xl text-white/90 max-w-5xl mx-auto">
            Experience the most revolutionary technologies that will redefine consciousness, reality, and human potential
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} p-12 rounded-3xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="text-6xl mr-4">{slide.icon}</div>
                          <div>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                              {slide.badge}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-6">{slide.title}</h3>
                        <p className="text-2xl text-white/90 mb-8">{slide.description}</p>
                        <a
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105"
                        >
                          Experience Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-9xl mb-6">{slide.icon}</div>
                        <div className="text-3xl font-bold text-white/80">2034 Technology</div>
                        <div className="text-xl text-white/60 mt-2">Revolutionary Breakthrough</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {slides.map((slide) => (
            <motion.a
              key={slide.id}
              href={slide.link}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${slide.color} p-6 rounded-xl text-center hover:shadow-2xl transition-all duration-300 border border-white/20`}
            >
              <div className="text-4xl mb-3">{slide.icon}</div>
              <div className="text-white font-bold text-sm mb-2">{slide.title.split(' ')[0]}</div>
              <div className="text-white/80 text-xs">{slide.badge}</div>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/80 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-white/80 text-sm">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2034</div>
            <div className="text-white/80 text-sm">Future Tech</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80 text-sm">Revolutionary</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2034;