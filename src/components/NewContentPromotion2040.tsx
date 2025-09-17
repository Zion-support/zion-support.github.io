import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket, Shield, Globe, Lightbulb } from 'lucide-react';

const NewContentPromotion2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const newContent = [
    {
      title: "Ultimate Tech Showcase 2038",
      description: "Experience the most revolutionary technologies that will reshape reality itself",
      features: ["Consciousness Transfer", "Reality Manipulation", "Interdimensional Computing"],
      icon: "🚀",
      link: "/pages/UltimateTechShowcase2038",
      color: "from-purple-600 to-pink-600",
      badge: "NEW"
    },
    {
      title: "Revolutionary Tech Breakthrough 2039",
      description: "Witness the most significant technological breakthrough in human history",
      features: ["Digital Immortality", "Quantum Reality", "Synthetic Universes"],
      icon: "⚡",
      link: "/pages/RevolutionaryTechBreakthrough2039",
      color: "from-cyan-600 to-blue-600",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Ultimate Tech Revolution 2040",
      description: "The future of technology is here - experience unlimited possibilities",
      features: ["Consciousness AI", "Reality Engineering", "Infinite Dimensions"],
      icon: "🌟",
      link: "/pages/UltimateTechRevolution2040",
      color: "from-emerald-600 to-teal-600",
      badge: "FUTURE"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newContent.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('new-content-promotion-2040');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="new-content-promotion-2040"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 md:p-12 mb-12 border border-purple-500/30"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎉 NEW CONTENT LAUNCH • JANUARY 2040
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Revolutionary New Content
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover our latest breakthrough technologies and revolutionary content that will 
            transform your understanding of what's possible.
          </p>
        </motion.div>

        {/* Content Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {newContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Content Info */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="text-6xl mr-4">{content.icon}</div>
                          <div>
                            <div className="flex items-center mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${content.color} text-white mr-3`}>
                                {content.badge}
                              </span>
                              <span className="text-gray-400 text-sm">January 2040</span>
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-4">
                              {content.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-xl text-gray-300 mb-8">
                          {content.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                          <ul className="space-y-3">
                            {content.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-300">
                                <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <a
                          href={content.link}
                          className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${content.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Content <ArrowRight className="ml-2" />
                        </a>
                      </div>

                      {/* Right Side - Visual */}
                      <div className="relative">
                        <div className={`bg-gradient-to-br ${content.color} bg-opacity-20 rounded-3xl p-8 border border-white/20`}>
                          <div className="text-8xl text-center mb-6">{content.icon}</div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-2">
                              {content.badge}
                            </div>
                            <div className="text-gray-300">
                              Revolutionary Technology
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {newContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{content.icon}</div>
                <div>
                  <div className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${content.color} text-white mb-1`}>
                    {content.badge}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {content.title}
                  </h4>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {content.description}
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm font-semibold mr-2">Explore Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Miss the Future
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience these revolutionary technologies and content. 
              Join thousands of pioneers who are already transforming their reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center">
                Explore All Content <ArrowRight className="ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentPromotion2040;