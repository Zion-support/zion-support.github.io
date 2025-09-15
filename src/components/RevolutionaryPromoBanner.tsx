import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryPromoBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  
  const promotions = [
    {
      title: "🚀 REVOLUTIONARY BREAKTHROUGH 2026",
      subtitle: "Advanced AI Systems with Synthetic Consciousness",
      description: "Experience the future with AI systems that think, learn, and evolve autonomously",
      cta: "Explore AI Systems →",
      href: "/pages/AdvancedAISystems2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      title: "🌟 NEXT-GEN TECHNOLOGY SHOWCASE",
      subtitle: "Quantum Computing & Neural Interfaces",
      description: "Discover revolutionary technologies reshaping industries and transforming the world",
      cta: "View Showcase →",
      href: "/pages/NextGenTechShowcase2026",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "⚡"
    },
    {
      title: "🧬 AI TRANSFORMATION 2026",
      subtitle: "Autonomous Business Operations",
      description: "Transform your business with AI systems that operate independently and continuously evolve",
      cta: "Start Transformation →",
      href: "/pages/AdvancedAITransformation2026",
      gradient: "from-emerald-600 via-teal-600 to-blue-600",
      icon: "🤖"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <div className="relative mb-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPromo}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${promotions[currentPromo].gradient} rounded-2xl p-8 text-white relative overflow-hidden`}
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl animate-bounce">{promotions[currentPromo].icon}</span>
                  <h3 className="text-2xl font-bold">{promotions[currentPromo].title}</h3>
                </div>
                <h4 className="text-xl font-semibold mb-3 opacity-95">
                  {promotions[currentPromo].subtitle}
                </h4>
                <p className="text-lg opacity-90 mb-6 max-w-2xl">
                  {promotions[currentPromo].description}
                </p>
                <a
                  href={promotions[currentPromo].href}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold border border-white/30"
                >
                  {promotions[currentPromo].cta}
                </a>
              </div>
              
              <div className="hidden lg:block">
                <div className="text-8xl opacity-20">
                  {promotions[currentPromo].icon}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPromo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPromo 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner;