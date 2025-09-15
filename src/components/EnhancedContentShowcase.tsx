import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interfaces for unprecedented capabilities",
      icon: "⚛️",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum-neural networks", "Enhanced cognition", "Parallel processing", "Synaptic acceleration"]
    },
    {
      id: 2,
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
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication and thought control technology.",
      image: "🧬",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"],
      category: "Neural Interfaces",
      year: "2026"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities",
      image: "🤖",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous Agents", "Synthetic Consciousness", "Collective Intelligence", "Creative Synthesis"]
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
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ENHANCED CONTENT SHOWCASE • 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Showcase
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are reshaping our world and creating the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">🌟 Interactive Technology Experience</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary technologies with interactive features and immersive experiences
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Showcase Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-purple-400/30"
              >
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-6">{showcaseItems[currentSlide].icon || "🚀"}</div>
                    <h4 className="text-3xl font-bold text-white mb-4">{showcaseItems[currentSlide].title}</h4>
                    <p className="text-xl text-purple-200 mb-6 max-w-2xl mx-auto">
                      {showcaseItems[currentSlide].description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {showcaseItems[currentSlide].features?.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href={showcaseItems[currentSlide].link}
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
                    >
                      Explore Technology →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
            </button>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">🔬 Technology Categories</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the different categories of revolutionary technologies we're developing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{item.icon || "🚀"}</div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h4>
              <p className="text-purple-200 mb-4 text-center text-sm">{item.description}</p>
              <div className="text-center">
                <a
                  href={item.link}
                  className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring these revolutionary technologies that are reshaping our world and creating unprecedented opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechBreakthrough2026" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
              Explore All Technologies →
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;