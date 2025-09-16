import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "Revolutionary Tech Showcase 2026",
      subtitle: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces",
      icon: "🌟",
      color: "from-purple-600 via-indigo-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2026"
    },
    {
      title: "Ultimate Innovation Hub 2026",
      subtitle: "The world's most advanced technology showcase featuring breakthrough innovations",
      icon: "🚀",
      color: "from-cyan-600 via-blue-600 to-purple-600",
      link: "/pages/UltimateInnovationHub2026"
    },
    {
      title: "Interdimensional Tech Revolution",
      subtitle: "Step beyond reality into new dimensions of technological possibilities",
      icon: "🌌",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      link: "/pages/InterdimensionalTechRevolution2026"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className={`bg-gradient-to-r ${banners[currentSlide].color} rounded-3xl p-12 text-white relative overflow-hidden`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl animate-bounce">{banners[currentSlide].icon}</span>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                  🚀 NEW REVOLUTIONARY CONTENT 2026
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {banners[currentSlide].title}
              </h2>
              <p className="text-xl opacity-95 mb-6 max-w-3xl">
                {banners[currentSlide].subtitle}
              </p>
              <div className="flex space-x-4">
                <a
                  href={banners[currentSlide].link}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-8xl opacity-20">
                {banners[currentSlide].icon}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Additional Promotional Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${banner.color} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => window.location.href = banner.link}
          >
            <div className="text-3xl mb-3">{banner.icon}</div>
            <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
            <p className="text-sm opacity-90 mb-4">{banner.subtitle}</p>
            <div className="flex items-center text-sm font-semibold">
              Explore →
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;