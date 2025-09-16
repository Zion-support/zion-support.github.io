import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "🌟 Revolutionary AI Solutions 2027",
      subtitle: "Experience the future of artificial intelligence with conscious AI systems",
      cta: "Explore AI Solutions",
      link: "/pages/RevolutionaryAISolutions2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "Discover quantum-enhanced computing that solves impossible problems",
      cta: "Learn More",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧬 Neural Interface Revolution",
      subtitle: "Direct brain-computer interfaces for seamless human-AI collaboration",
      cta: "Try Demo",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "📊 Comprehensive Tech Insights",
      subtitle: "Stay ahead with our in-depth analysis of latest technology trends",
      cta: "Read Insights",
      link: "/pages/ComprehensiveTechInsights2027",
      gradient: "from-orange-600 to-red-600",
      icon: "📊"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🚀 NEW: Revolutionary Technology 2027
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="text-6xl mb-4">{banners[currentSlide].icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {banners[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                {banners[currentSlide].subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href={banners[currentSlide].link}
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${banners[currentSlide].gradient} rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                {banners[currentSlide].cta}
                <span className="ml-2">→</span>
              </a>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </motion.div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-purple-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {banners.map((banner, index) => (
            <a
              key={index}
              href={banner.link}
              className={`group p-4 rounded-lg bg-gradient-to-r ${banner.gradient} hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {banner.icon}
              </div>
              <div className="text-sm font-semibold opacity-90">
                {banner.title.split(' ').slice(1).join(' ')}
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;