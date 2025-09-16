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
      title: "Revolutionary AI Breakthrough 2025",
      description: "Experience the most advanced artificial intelligence systems that are reshaping the future",
      link: "/pages/RevolutionaryAIBreakthrough2025",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      title: "Ultimate Tech Trends 2025",
      description: "Discover the most transformative technology trends that will reshape our world",
      link: "/pages/UltimateTechTrends2025",
      icon: "📈",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/80 to-cyan-900/80"
    },
    {
      title: "Revolutionary Case Studies 2025",
      description: "See how we've transformed businesses across industries with cutting-edge solutions",
      link: "/pages/RevolutionaryCaseStudies2025",
      icon: "🏆",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    }
  ];

  const features = [
    { icon: "⚡", text: "Lightning Fast" },
    { icon: "🔒", text: "Secure" },
    { icon: "🌍", text: "Global Scale" },
    { icon: "🚀", text: "Future Ready" }
  ];

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-emerald-900 opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
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

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW CONTENT AVAILABLE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ultimate Technology Content 2025
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Explore our revolutionary new content showcasing the most advanced technologies and innovations
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgColor} p-12 rounded-2xl relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                      }}></div>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4 text-white">{slide.title}</h3>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl">{slide.description}</p>
                        <div className="flex flex-wrap gap-4 mb-8">
                          {features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                              <span className="text-lg">{feature.icon}</span>
                              <span className="text-sm text-white">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="hidden lg:block">
                        <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                          <div className="text-8xl">{slide.icon}</div>
                        </div>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Quick Access</h3>
            <p className="text-gray-200">Jump directly to our latest content</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <motion.a
                key={index}
                href={slide.link}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                className={`bg-gradient-to-br ${slide.bgColor} p-6 rounded-xl hover:scale-105 transition-all duration-300 border border-white/20`}
              >
                <div className="text-4xl mb-4">{slide.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{slide.title}</h4>
                <p className="text-gray-200 text-sm mb-4">{slide.description}</p>
                <div className="flex items-center text-white font-semibold">
                  Explore →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new content, features, and technological breakthroughs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;