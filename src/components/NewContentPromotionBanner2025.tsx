import React, { useState, useEffect } from 'react';
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
      title: "🚀 NEW: Revolutionary AI Solutions 2025",
      description: "Experience the most advanced AI technology that's reshaping industries worldwide",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Computing Revolution",
      description: "Unlock infinite possibilities with our quantum computing breakthrough technology",
      link: "/pages/QuantumComputingBreakthrough",
      gradient: "from-cyan-600 to-blue-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "🧠 INNOVATION: Neural Interface Technology",
      description: "Connect your mind directly to our systems with revolutionary neural interfaces",
      link: "/pages/NeuralInterfaceFuture",
      gradient: "from-emerald-600 to-teal-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "🌟 ULTIMATE: Next-Gen Innovation Hub",
      description: "Discover 50+ cutting-edge technologies that will transform your business",
      link: "/pages/NextGenInnovationHub2025",
      gradient: "from-orange-600 to-red-600",
      textColor: "text-white"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mx-4 mb-8 shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm mb-4 animate-bounce"
          >
            🔥 HOT NEW CONTENT • JANUARY 2025
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the most advanced technology solutions that are reshaping our world and creating infinite possibilities
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-3xl font-bold mb-4 ${promotions[currentSlide].textColor}`}>
                    {promotions[currentSlide].title}
                  </h3>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    {promotions[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={promotions[currentSlide].link}
                      className={`bg-gradient-to-r ${promotions[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${promotions[currentSlide].gradient} rounded-xl flex items-center justify-center text-8xl`}>
                    {currentSlide === 0 && "🤖"}
                    {currentSlide === 1 && "⚛️"}
                    {currentSlide === 2 && "🧠"}
                    {currentSlide === 3 && "🌟"}
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {promotions.map((promo, index) => (
            <motion.a
              key={promo.id}
              href={promo.link}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${promo.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold`}
            >
              <div className="text-2xl mb-2">
                {index === 0 && "🤖"}
                {index === 1 && "⚛️"}
                {index === 2 && "🧠"}
                {index === 3 && "🌟"}
              </div>
              <div className="text-sm">
                {promo.title.split(':')[1]?.trim() || promo.title}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-white/90 text-sm">Revolutionary Technologies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-white/90 text-sm">Success Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">1000x</div>
            <div className="text-white/90 text-sm">Performance Boost</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white/90 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;