import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "🚀 Revolutionary AI Content 2025",
      subtitle: "Experience the future of AI-powered content creation",
      description: "Discover cutting-edge AI systems that create multi-dimensional content with consciousness awareness",
      link: "/pages/RevolutionaryAIContent2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "⚡ Quantum Computing Revolutionary 2025",
      subtitle: "Unlock infinite computational power",
      description: "Revolutionary quantum technologies solving impossible problems and reshaping the future",
      link: "/pages/QuantumComputingRevolutionary2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🧠 Neural Interface Revolution 2025",
      subtitle: "Bridge mind and machine",
      description: "Direct neural interfaces that connect human consciousness with artificial intelligence",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "🌟 Ultimate Tech Breakthrough 2025",
      subtitle: "The most advanced technology showcase",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      link: "/pages/UltimateTechBreakthrough2025",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-12 overflow-hidden">
      <div className="relative h-96">
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${banner.bgGradient} flex items-center justify-center`}
            initial={{ opacity: 0, x: index === 0 ? 0 : '100%' }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              x: currentSlide === index ? 0 : currentSlide > index ? '-100%' : '100%'
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
                      🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                      {banner.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-white/90 mb-4">
                      {banner.subtitle}
                    </h3>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl">
                      {banner.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={banner.link}
                        className={`inline-block bg-gradient-to-r ${banner.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400`}
                      >
                        Explore Revolutionary Content →
                      </a>
                      <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <h4 className="text-2xl font-bold mb-4 text-white">Interactive Demo</h4>
                        <p className="text-white/80 mb-6">
                          Experience our revolutionary technology in real-time
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">AI Processing Active</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">Quantum State Ready</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">Neural Interface Connected</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;