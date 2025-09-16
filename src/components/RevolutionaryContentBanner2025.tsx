import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
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
      description: "Experience the future with conscious AI, quantum computing, and neural interfaces",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🤖 AI Solutions Comprehensive 2025",
      description: "Transform your business with our complete suite of AI-powered solutions",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      icon: "🧠"
    },
    {
      id: 3,
      title: "⚡ Ultimate Tech Revolution 2025",
      description: "Witness the most profound technological transformation in human history",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-indigo-600 to-purple-600",
      icon: "🚀"
    },
    {
      id: 4,
      title: "🧬 Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling thought-based computing",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse"
          >
            🌟 NEW: Revolutionary Content 2025
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Discover our groundbreaking new content featuring conscious AI, quantum computing, 
            neural interfaces, and revolutionary technology solutions
          </p>
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
                  <div className={`bg-gradient-to-r ${slide.color} p-8 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-xl text-white/90 mb-6">{slide.description}</p>
                        <a
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-8xl mb-4">{slide.icon}</div>
                        <div className="text-2xl font-bold text-white/80">Revolutionary Technology</div>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {slides.map((slide) => (
            <motion.a
              key={slide.id}
              href={slide.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${slide.color} p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-3xl mb-2">{slide.icon}</div>
              <div className="text-white font-semibold text-sm">{slide.title.split(' ')[0]}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;