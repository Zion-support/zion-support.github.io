import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technologies that will reshape our world",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🤖 AI Business Solutions 2025",
      description: "Transform your business with revolutionary AI solutions delivering unprecedented results",
      link: "/pages/AIBusinessSolutions2025",
      color: "from-blue-600 to-cyan-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧠 Quantum Neural Revolution",
      description: "Bridging quantum computing with neural interfaces for superhuman capabilities",
      link: "/pages/QuantumNeuralRevolution2030",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌟 Transcendent AI 2031",
      description: "AI that transcends physical limitations and operates across multiple realities",
      link: "/pages/TranscendentAI2031",
      color: "from-violet-600 to-purple-600",
      icon: "🌌"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-emerald-600/20 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🎉 NEW CONTENT AVAILABLE • JANUARY 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Revolutionary New Content
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Discover our latest innovations in AI, quantum computing, and revolutionary technology
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} p-8 md:p-12 text-white`}>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6 max-w-2xl">{slide.description}</p>
                        <a
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-8xl opacity-20">{slide.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.color} p-4 rounded-lg text-white text-center hover:scale-105 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="text-3xl mb-2">{slide.icon}</div>
              <div className="text-sm font-semibold">{slide.title.split(' ')[0]}</div>
            </a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-4">Don't miss out on the future of technology</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300">
              View All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentBanner2025;