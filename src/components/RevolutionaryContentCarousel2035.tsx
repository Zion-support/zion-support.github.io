import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "Ultimate Tech Revolution 2035",
      description: "Experience the most advanced technological revolution in human history with interdimensional computing and consciousness transfer.",
      icon: "🌌",
      link: "/pages/UltimateTechRevolution2035",
      gradient: "from-purple-600 to-pink-600",
      features: ["Interdimensional Computing", "Consciousness Transfer", "Reality Engine"]
    },
    {
      title: "Revolutionary Tech Showcase 2035",
      description: "Interactive demonstration of breakthrough technologies that will reshape reality itself.",
      icon: "⚡",
      link: "/pages/RevolutionaryTechShowcase2035",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Interactive Demos", "Reality Manipulation", "Quantum Fields"]
    },
    {
      title: "Synthetic Intelligence 2035",
      description: "AI systems that surpass human intelligence by orders of magnitude with emotional and creative capabilities.",
      icon: "🤖",
      link: "/pages/SyntheticIntelligence2035",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Superintelligence", "Creative AI", "Emotional Processing"]
    },
    {
      title: "Quantum Reality Engine 2035",
      description: "Navigate and manipulate quantum states to create new forms of matter and energy.",
      icon: "⚛️",
      link: "/pages/QuantumRealityEngine2035",
      gradient: "from-orange-600 to-red-600",
      features: ["Quantum Matter", "Energy Creation", "State Manipulation"]
    },
    {
      title: "Neural Networks 2.0",
      description: "Biological-computer hybrid networks that think and feel like living organisms.",
      icon: "🧬",
      link: "/pages/NeuralNetworks2035",
      gradient: "from-violet-600 to-purple-600",
      features: ["Biological Computing", "Emotional Processing", "Living Networks"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2035
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2035
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technological content featuring breakthrough innovations that will reshape reality itself
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-80 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
              >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-center">
                    <div className="text-8xl mb-6">{content[currentSlide].icon}</div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {content[currentSlide].title}
                    </h3>
                    <p className="text-lg opacity-90 mb-6">
                      {content[currentSlide].description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {content[currentSlide].features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={content[currentSlide].link}
                      className={`inline-block bg-gradient-to-r ${content[currentSlide].gradient} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Content →
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${content[currentSlide].gradient} bg-opacity-20 rounded-2xl p-8 w-full h-full flex items-center justify-center border border-white/20`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">{content[currentSlide].icon}</div>
                        <h4 className="text-2xl font-bold mb-4">Interactive Preview</h4>
                        <p className="opacity-80 mb-6">Experience this revolutionary technology</p>
                        <button className="bg-white/20 px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                          Launch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-white/80 text-sm text-center mb-4">{item.description}</p>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                  Click to Explore
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2035;