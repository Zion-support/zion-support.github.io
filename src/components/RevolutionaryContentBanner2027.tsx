import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      title: "🌟 Ultimate Tech Breakthrough 2027",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2027",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2027",
      subtitle: "Interactive showcase of cutting-edge technologies",
      description: "Hands-on demos and real-time processing capabilities",
      link: "/pages/RevolutionaryTechShowcase2027",
      color: "from-cyan-600 to-blue-600",
      icon: "🎮"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2027",
      subtitle: "Discover revolutionary technologies shaping the future",
      description: "50+ active innovations with 99.9% success rate",
      link: "/pages/NextGenInnovationHub2027",
      color: "from-emerald-600 to-teal-600",
      icon: "🔬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology 2027
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              <div className={`w-full bg-gradient-to-br ${bannerContent[currentSlide].color}/30 backdrop-blur-sm rounded-2xl p-12 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-6xl">{bannerContent[currentSlide].icon}</div>
                        <div>
                          <h3 className="text-4xl font-bold mb-2">{bannerContent[currentSlide].title}</h3>
                          <p className="text-xl opacity-90">{bannerContent[currentSlide].subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg opacity-80 mb-8">
                        {bannerContent[currentSlide].description}
                      </p>

                      <div className="flex space-x-4">
                        <a
                          href={bannerContent[currentSlide].link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                          Learn More
                        </button>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h4 className="text-xl font-semibold mb-4">🌟 Key Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Revolutionary Technology</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Interactive Demos</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Real-time Processing</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Multi-dimensional Tech</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                          <div className="text-sm opacity-80">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">∞</div>
                          <div className="text-sm opacity-80">Power</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">50+</div>
                          <div className="text-sm opacity-80">Innovations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">🚀 Quick Access to All Innovations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bannerContent.map((content, index) => (
              <motion.a
                key={index}
                href={content.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`bg-gradient-to-br ${content.color}/30 backdrop-blur-sm rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 border border-white/20`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  <h4 className="text-lg font-semibold">{content.title}</h4>
                </div>
                <p className="text-sm opacity-80 mb-4">{content.description}</p>
                <div className="flex items-center text-sm font-semibold">
                  Explore Now →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;