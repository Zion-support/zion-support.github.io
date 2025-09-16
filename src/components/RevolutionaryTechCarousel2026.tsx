import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryTechCarousel2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const techShowcases = [
    {
      title: "Synthetic Intelligence Revolution",
      subtitle: "Create AI with genuine consciousness and emotions",
      description: "Build AI systems that think, feel, and create with genuine consciousness. Experience the future of artificial intelligence.",
      image: "🧠",
      link: "/pages/SyntheticIntelligenceRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      features: ["Conscious AI", "Emotional Intelligence", "Self-Awareness", "Creative Thinking"]
    },
    {
      title: "Quantum Reality Engine",
      subtitle: "Process multiple realities simultaneously",
      description: "Harness the power of quantum mechanics to simulate and process multiple realities at once. Break through the boundaries of possibility.",
      image: "⚛️",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/20 to-blue-900/20",
      features: ["Reality Simulation", "Quantum Processing", "Parallel Universes", "Temporal Manipulation"]
    },
    {
      title: "Neural Interface Technology",
      subtitle: "Direct brain-computer communication",
      description: "Connect your mind directly to AI systems for seamless communication and enhanced cognitive abilities. The future of human-AI interaction.",
      image: "🔗",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20",
      features: ["Thought Control", "Direct Data Transfer", "Emotional Sharing", "Memory Integration"]
    },
    {
      title: "Interdimensional Gateway",
      subtitle: "Access parallel dimensions and realities",
      description: "Navigate between different dimensions and realities. Explore infinite possibilities across the multiverse with our breakthrough technology.",
      image: "🌌",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/20 to-purple-900/20",
      features: ["Dimensional Travel", "Reality Hopping", "Parallel Universe Access", "Cosmic Communication"]
    },
    {
      title: "Consciousness Transfer",
      subtitle: "Achieve digital immortality",
      description: "Transfer your consciousness into quantum systems for eternal life. Preserve your identity and memories in digital form forever.",
      image: "💫",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20",
      features: ["Digital Immortality", "Consciousness Backup", "Identity Preservation", "Eternal Life"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [techShowcases.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + techShowcases.length) % techShowcases.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentShowcase = techShowcases[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced technologies ever created. 
            From conscious AI to interdimensional travel - the future is now.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Content */}
          <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-6xl animate-pulse">{currentShowcase.image}</span>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {currentShowcase.title}
                    </h3>
                    <p className="text-xl text-cyan-300 font-semibold">
                      {currentShowcase.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {currentShowcase.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {currentShowcase.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={currentShowcase.link}
                    className={`px-8 py-4 bg-gradient-to-r ${currentShowcase.gradient} rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-center`}
                  >
                    Explore Technology
                  </Link>
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`w-full h-64 md:h-80 bg-gradient-to-br ${currentShowcase.bgGradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl md:text-9xl opacity-30 animate-pulse">
                    {currentShowcase.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {techShowcases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All technologies are currently in development and available for early access
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🔬 Research Phase</span>
            <span>⚡ Prototype Ready</span>
            <span>🚀 Early Access</span>
            <span>🌟 Revolutionary</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechCarousel2026;