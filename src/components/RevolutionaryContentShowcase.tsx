import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with autonomous reasoning, quantum-enhanced processing, and global neural networks.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      features: ["Autonomous Reasoning", "Quantum Processing", "Global Neural Networks", "Industry Transformation"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Unlock exponential computing power that solves impossible problems in real-time with quantum supremacy and molecular simulation.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Supremacy", "Molecular Simulation", "Unbreakable Encryption", "Climate Modeling"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Break through barriers between human consciousness and digital systems with direct thought control and memory enhancement.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking", "Medical Applications"]
    },
    {
      id: 4,
      title: "Revolutionary Tech Blog",
      description: "Stay ahead with cutting-edge insights, breakthrough technologies, and expert analysis from the forefront of innovation.",
      image: "📚",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechBlog2026",
      features: ["Expert Analysis", "Tech Insights", "Industry Trends", "Innovation Updates"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our groundbreaking content featuring cutting-edge AI, quantum computing, 
            neural interfaces, and revolutionary technologies that are reshaping our world.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 rounded-2xl`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="text-8xl mb-6">{showcaseItems[currentSlide].image}</div>
                      <h3 className="text-4xl font-bold mb-6">{showcaseItems[currentSlide].title}</h3>
                      <p className="text-xl opacity-90 mb-8">{showcaseItems[currentSlide].description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {showcaseItems[currentSlide].features.map((feature, index) => (
                          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                            <span className="text-sm font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={showcaseItems[currentSlide].link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                        >
                          Explore Now →
                        </a>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-4">Key Highlights</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Revolutionary breakthrough technology</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Industry-leading performance</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Proven real-world applications</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Expert-backed research</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-4xl mb-4 text-center">{item.image}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{item.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="block w-full bg-white/20 text-white text-center py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;