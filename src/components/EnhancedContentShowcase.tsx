import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Advanced AI Transformation 2026",
      description: "Experience the next evolution of artificial intelligence with autonomous reasoning, quantum-enhanced processing, and self-evolving neural architectures.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAITransformation2026",
      features: ["Autonomous Reasoning", "Quantum Processing", "Self-Evolving Networks", "Industry Transformation"],
      category: "AI & Machine Learning",
      year: "2026"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural networks, creating unprecedented processing power for complex problem solving.",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology", "Exponential Power"],
      category: "Quantum Computing",
      year: "2026"
    },
    {
      id: 3,
      title: "Next-Gen Tech Showcase 2026",
      description: "Discover the most advanced technologies of 2026, featuring revolutionary innovations in AI, quantum computing, and neural interfaces.",
      image: "🌟",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/NextGenTechShowcase2026",
      features: ["Synthetic Intelligence", "Advanced Quantum", "Neural Interfaces", "Global AI Network"],
      category: "Technology Showcase",
      year: "2026"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that think, create, and evolve independently.",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Autonomous Agents", "Creative AI", "Collective Intelligence"],
      category: "Synthetic Intelligence",
      year: "2026"
    },
    {
      id: 5,
      title: "Advanced Quantum Computing 2026",
      description: "Experience exponential processing power with 1000+ qubit quantum processors and quantum supremacy capabilities.",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"],
      category: "Quantum Computing",
      year: "2026"
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication and thought control technology.",
      image: "🧬",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"],
      category: "Neural Interfaces",
      year: "2026"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 6000);
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
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Showcase Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        
        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our groundbreaking innovations in quantum computing, neural interfaces, and synthetic intelligence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative z-10">
          <div className="relative h-96 overflow-hidden rounded-xl">
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
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {showcaseItems[currentSlide].category}
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {showcaseItems[currentSlide].year}
                        </span>
                      </div>
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
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
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

            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-400/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="text-4xl mb-4 text-center">{item.image}</div>
                <h4 className="text-xl font-bold mb-3 text-center text-white">{item.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4 text-white">{item.description}</p>
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

export default EnhancedContentShowcase;