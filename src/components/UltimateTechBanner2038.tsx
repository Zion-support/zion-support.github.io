import React, { useState, useEffect } from 'react';

const UltimateTechBanner2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 Ultimate Tech Revolution 2038",
      subtitle: "Consciousness Transfer & Reality Manipulation",
      description: "Experience the most advanced technological breakthroughs that will redefine human existence",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90",
      features: ["Consciousness Transfer", "Reality Manipulation", "Temporal Computing", "Universal Translation"]
    },
    {
      title: "🧠 Consciousness Transfer Technology",
      subtitle: "Transfer your mind between biological and synthetic bodies",
      description: "Revolutionary technology that allows human consciousness to be transferred between different forms",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90",
      features: ["Neural Pattern Mapping", "Consciousness Backup", "Body Transfer", "Memory Preservation"]
    },
    {
      title: "⚡ Reality Manipulation Engine",
      subtitle: "Modify physical reality at the molecular level",
      description: "Advanced quantum field manipulation that allows users to modify physical reality",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90",
      features: ["Quantum Field Control", "Matter Manipulation", "Gravity Control", "Dimensional Shifting"]
    },
    {
      title: "⏰ Temporal Computing Systems",
      subtitle: "Computing across multiple timelines and dimensions",
      description: "Breakthrough computing that operates across multiple timelines and temporal dimensions",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/90 to-red-900/90",
      features: ["Time Dilation Processing", "Parallel Timeline Access", "Temporal Data Storage", "Future Prediction"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🌟 ULTIMATE BREAKTHROUGH • 2038
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {slides[currentSlide].features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300`}
            >
              <div className="text-2xl mb-2">
                {index === 0 && "🧠"}
                {index === 1 && "⚡"}
                {index === 2 && "⏰"}
                {index === 3 && "🌐"}
              </div>
              <div className="text-sm font-semibold">{feature}</div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
            🚀 Experience Demo
          </button>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
            🧠 Try Consciousness Transfer
          </button>
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
            ⚡ Manipulate Reality
          </button>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2.3M+</div>
            <div className="text-gray-300">Consciousness Transfers</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">847K+</div>
            <div className="text-gray-300">Reality Modifications</div>
          </div>
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">156K+</div>
            <div className="text-gray-300">Timeline Accesses</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">47+</div>
            <div className="text-gray-300">Species Communicated</div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-purple-500 scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2038;