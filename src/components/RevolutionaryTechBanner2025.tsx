import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Business Automation",
      subtitle: "Transform your operations with intelligent automation",
      icon: "🤖",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Quantum Computing Solutions",
      subtitle: "Unlock unprecedented computational power",
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Excellence",
      subtitle: "Protect your digital assets with advanced security",
      icon: "🛡️",
      color: "from-green-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY • 2025
            </div>
            <h2 className="text-4xl font-bold mb-4">Revolutionary Tech Showcase 2025</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge AI solutions and innovative platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-indigo-400' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4 text-center">{slide.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{slide.title}</h3>
                <p className="text-sm opacity-90 text-center mb-4">{slide.subtitle}</p>
                <a
                  href="/services"
                  className={`block w-full bg-gradient-to-r ${slide.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2025;