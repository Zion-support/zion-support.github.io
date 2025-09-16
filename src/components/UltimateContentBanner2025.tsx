import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technologies reshaping our world",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🤖 AI Solutions Comprehensive 2025",
      description: "Transform your business with our comprehensive AI solutions",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/90 to-cyan-900/90"
    },
    {
      title: "🌟 Ultimate Tech Breakthrough 2025",
      description: "Witness the most revolutionary technological breakthroughs in history",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
  );
};

export default UltimateContentBanner2025;