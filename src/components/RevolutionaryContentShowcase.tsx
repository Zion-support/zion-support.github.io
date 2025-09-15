import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Advanced AI Transformation 2026",
      description: "Experience the next evolution of artificial intelligence with our revolutionary transformation platform",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAITransformation2026",
      category: "AI Revolution",
      features: ["Autonomous Decision Making", "Quantum-Enhanced Processing", "Predictive Intelligence"]
    },
    {
      id: 2,
      title: "Next-Gen Tech Showcase 2026",
      description: "Explore cutting-edge technologies that are reshaping our world and defining the future",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenTechShowcase2026",
      category: "Technology Showcase",
      features: ["Quantum Computing", "Neural Interfaces", "Space Technology"]
    },
    {
      id: 3,
      title: "Revolutionary Tech Blog 2026",
      description: "Dive deep into breakthrough innovations and cutting-edge technologies shaping humanity's future",
      image: "📚",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Tech Insights",
      features: ["Expert Analysis", "Industry Trends", "Future Predictions"]
    },
    {
      id: 4,
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum technology solving impossible problems in seconds",
      image: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Tech",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces revolutionizing human-machine interaction",
      image: "🧬",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Tech",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 6,
      title: "Comprehensive Tech Insights",
      description: "Complete analysis of emerging technologies and their impact on society",
      image: "🔍",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Tech Analysis",
      features: ["Market Analysis", "Technology Trends", "Future Outlook"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(interval);
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
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-4 text-white">
            🌟 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover groundbreaking content that showcases the most advanced technologies 
            and innovations shaping our world.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-6xl">{showcaseItems[currentSlide].image}</span>
                  <div>
                    <div className="text-purple-300 text-sm font-semibold">
                      {showcaseItems[currentSlide].category}
                    </div>
                    <div className="text-purple-400 text-xs">NEW 2026</div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {showcaseItems[currentSlide].title}
                </h3>
                
                <p className="text-lg text-purple-200 mb-6">
                  {showcaseItems[currentSlide].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {showcaseItems[currentSlide].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center text-purple-200"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={showcaseItems[currentSlide].link}
                    className={`bg-gradient-to-r ${showcaseItems[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold`}
                  >
                    Explore Now →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className={`w-full h-96 bg-gradient-to-br ${showcaseItems[currentSlide].gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl opacity-80">
                    {showcaseItems[currentSlide].image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
              >
                →
              </button>
            </div>

            <div className="flex space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} p-4 rounded-lg hover:scale-105 transition-all duration-300 text-center group`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <div className="text-white text-sm font-semibold">
                  {item.title.split(' ').slice(0, 2).join(' ')}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;