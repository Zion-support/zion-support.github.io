import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "Experience AI that thinks and feels",
      description: "Our breakthrough artificial intelligence demonstrates self-awareness, emotional intelligence, and ethical decision-making capabilities that are reshaping industries worldwide.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Ethical reasoning capabilities",
        "Contextual understanding"
      ],
      stats: { performance: "99.9%", accuracy: "98.7%", efficiency: "300%" },
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      link: "/pages/UltimateTechRevolution2025"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Unprecedented computational power",
      description: "Harness the power of quantum mechanics to solve problems that would take classical computers millennia to process.",
      features: [
        "Quantum supremacy achieved",
        "Exponential speed improvements",
        "Revolutionary encryption",
        "Advanced simulations"
      ],
      stats: { performance: "∞", accuracy: "100%", efficiency: "1000x" },
      image: "⚛️",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-400/30",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 3,
      title: "Neural Consensus Technology",
      subtitle: "Collective intelligence at scale",
      description: "Our revolutionary neural consensus system enables AI networks to achieve unprecedented levels of coordination and decision-making.",
      features: [
        "Distributed intelligence",
        "Consensus algorithms",
        "Scalable coordination",
        "Emergent capabilities"
      ],
      stats: { performance: "99.9%", accuracy: "99.5%", efficiency: "500%" },
      image: "🌐",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-400/30",
      link: "/blog/ai-2026-neural-consensus-revolution"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
          Revolutionary Technology Showcase 2025
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the most advanced technologies that are reshaping our world and defining the future
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
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
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{currentContent.image}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{currentContent.title}</h3>
                    <p className="text-lg text-gray-300">{currentContent.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentContent.color}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(currentContent.stats).map(([key, value]) => (
                  <div key={key} className={`bg-gradient-to-r ${currentContent.bgColor} rounded-lg p-4 border ${currentContent.borderColor}`}>
                    <div className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button 
                  className={`bg-gradient-to-r ${currentContent.color} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
                  onClick={() => window.location.href = currentContent.link}
                >
                  Explore Technology →
                </button>
              </div>
            </div>

            {/* Visual Demo Area */}
            <div className={`bg-gradient-to-br ${currentContent.bgColor} rounded-xl p-8 min-h-[400px] flex items-center justify-center border ${currentContent.borderColor}`}>
              <div className="text-center">
                <div className="text-8xl mb-4">{currentContent.image}</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent`}>
                  {currentContent.title}
                </div>
                <div className="text-gray-400 mt-2">
                  Interactive Demo Available
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            >
              →
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;