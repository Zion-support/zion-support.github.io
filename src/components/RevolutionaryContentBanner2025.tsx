import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerContent = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the future with conscious AI, quantum computing, and neural interfaces",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🧠 Advanced AI Transformation",
      subtitle: "Discover how conscious AI is revolutionizing industries worldwide",
      link: "/pages/AdvancedAITransformation2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "⚡ Quantum Computing Revolution",
      subtitle: "Unlock exponential processing power with quantum consciousness",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "🧬 Neural Interface Future",
      subtitle: "Bridge the gap between mind and machine with direct neural interfaces",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/90 to-purple-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerContent[currentSlide];

  return (
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-r ${currentBanner.bgGradient} rounded-2xl p-8 text-white relative overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 animate-pulse"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
                🌟 NEW BREAKTHROUGH TECHNOLOGY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {currentBanner.title}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl">
                {currentBanner.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={currentBanner.link}
                  className={`bg-gradient-to-r ${currentBanner.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore Now →
                </Link>
                <Link 
                  to="/pages/ComprehensiveServices2025"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            {/* Interactive Elements */}
            <div className="hidden lg:block ml-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🧠</div>
                  <div className="text-sm font-semibold">AI Consciousness</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Quantum Power</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🧬</div>
                  <div className="text-sm font-semibold">Neural Interface</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🌌</div>
                  <div className="text-sm font-semibold">Future Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 text-6xl opacity-20 animate-bounce">
          🚀
        </div>
        <div className="absolute bottom-4 right-4 text-4xl opacity-20 animate-pulse">
          ⚡
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;