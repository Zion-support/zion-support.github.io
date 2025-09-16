import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Showcase 2026",
      description: "Experience revolutionary technologies with interactive demos, real-time simulations, and hands-on experiments.",
      image: "🚀",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/UltimateTechShowcase2026",
      category: "Interactive Experience",
      features: ["Live Demos", "Real-time Simulations", "Hands-on Experiments", "Expert Insights"],
      stats: { users: "50K+", rating: "4.9/5", completion: "95%" },
      badge: "NEW"
    },
    {
      id: 2,
      title: "AI Innovation Showcase 2026",
      description: "Discover cutting-edge AI technologies including autonomous agents, quantum processing, and neural interfaces.",
      image: "🧠",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/AIInnovationShowcase2026",
      category: "AI Technology",
      features: ["Autonomous AI", "Quantum Processing", "Neural Interfaces", "Synthetic Intelligence"],
      stats: { users: "100K+", rating: "4.8/5", completion: "92%" },
      badge: "BREAKTHROUGH"
    },
    {
      id: 3,
      title: "Quantum Computing Revolution",
      description: "Unlock exponential computing power with quantum supremacy, molecular simulation, and unbreakable encryption.",
      image: "⚡",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Technology",
      features: ["Quantum Supremacy", "Molecular Simulation", "Unbreakable Encryption", "Climate Modeling"],
      stats: { users: "25K+", rating: "4.9/5", completion: "88%" },
      badge: "REVOLUTIONARY"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Bridge mind and machine with direct brain-computer interfaces and thought-controlled devices.",
      image: "🧬",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking", "Medical Applications"],
      stats: { users: "15K+", rating: "4.7/5", completion: "85%" },
      badge: "FUTURE TECH"
    },
    {
      id: 5,
      title: "Revolutionary Tech Blog 2026",
      description: "Stay ahead with cutting-edge insights, breakthrough technologies, and expert analysis from industry leaders.",
      image: "📚",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Tech Insights",
      features: ["Expert Analysis", "Tech Trends", "Industry Insights", "Innovation Updates"],
      stats: { users: "200K+", rating: "4.8/5", completion: "90%" },
      badge: "POPULAR"
    },
    {
      id: 6,
      title: "Comprehensive Tech Insights",
      description: "Deep dive into comprehensive technology insights covering AI, quantum computing, and emerging technologies.",
      image: "🔍",
      gradient: "from-rose-600 via-pink-600 to-purple-600",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Comprehensive Analysis",
      features: ["Deep Analysis", "Market Trends", "Technology Forecasts", "Strategic Insights"],
      stats: { users: "75K+", rating: "4.9/5", completion: "93%" },
      badge: "EXCLUSIVE"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE CONTENT CAROUSEL • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Revolutionary Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most engaging and interactive content featuring cutting-edge technologies, 
            hands-on experiences, and expert insights that will transform your understanding of the future.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${currentSlideData.gradient} p-12 rounded-3xl`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-6xl">{currentSlideData.image}</span>
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                              {currentSlideData.badge}
                            </span>
                            <span className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-bold">
                              {currentSlideData.category}
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold mb-4">{currentSlideData.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-xl opacity-90 mb-8">{currentSlideData.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {currentSlideData.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center"
                          >
                            <span className="text-sm font-semibold">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={currentSlideData.link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 transform"
                        >
                          Explore Content →
                        </a>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(currentSlideData.stats).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                          >
                            <div className="text-2xl font-bold mb-1">{value}</div>
                            <div className="text-xs opacity-80 capitalize">{key}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Interactive Preview */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="text-xl font-bold mb-4 text-center">Interactive Preview</h4>
                        <div className="text-center">
                          <div className="text-5xl mb-4">{currentSlideData.image}</div>
                          <p className="text-sm opacity-90 mb-4">
                            Experience {currentSlideData.title.toLowerCase()} with interactive features
                          </p>
                          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: `${currentSlideData.stats.completion}` }}></div>
                          </div>
                          <p className="text-xs opacity-80">Completion Rate: {currentSlideData.stats.completion}</p>
                        </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isPlaying ? (
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
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All Available Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentSlides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSlide(index)}
                onHoverEnd={() => setHoveredSlide(null)}
                className={`bg-gradient-to-br ${slide.gradient} p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  hoveredSlide === index ? 'shadow-2xl' : 'shadow-lg'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{slide.image}</span>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                        {slide.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold">{slide.title}</h4>
                  </div>
                </div>
                
                <p className="text-sm opacity-90 mb-4">{slide.description}</p>
                
                <div className="flex justify-between items-center text-xs opacity-80">
                  <span>{slide.stats.users} users</span>
                  <span>★ {slide.stats.rating}</span>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-white/20 rounded-full h-1 mb-2">
                    <div className="bg-white h-1 rounded-full" style={{ width: slide.stats.completion }}></div>
                  </div>
                  <p className="text-xs opacity-80">Completion: {slide.stats.completion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentCarousel;