import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 'revolutionary-breakthrough',
      title: '🌟 NEW: Revolutionary Tech Breakthrough 2025',
      description: 'Experience the most advanced technological innovations reshaping our world',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      color: 'from-purple-600 to-pink-600',
      icon: '🚀'
    },
    {
      id: 'interactive-showcase',
      title: '🎮 NEW: Interactive Technology Showcase',
      description: 'Immerse yourself in cutting-edge demos and hands-on experiences',
      link: '/pages/InteractiveTechShowcase2025',
      color: 'from-cyan-600 to-blue-600',
      icon: '⚡'
    },
    {
      id: 'ai-consciousness',
      title: '🧠 NEW: AI Consciousness Revolution',
      description: 'Discover AI systems that demonstrate self-awareness and emotional intelligence',
      link: '/pages/AIConsciousnessRevolution2025',
      color: 'from-emerald-600 to-teal-600',
      icon: '🧬'
    },
    {
      id: 'quantum-computing',
      title: '⚛️ NEW: Quantum Computing Solutions',
      description: 'Harness exponential computational power through quantum mechanics',
      link: '/pages/QuantumComputingSolutions2025',
      color: 'from-orange-600 to-red-600',
      icon: '🌟'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const currentPromotion = promotions[currentPromo];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Promotion Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="text-4xl animate-bounce">{currentPromotion.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {currentPromotion.title}
                </h3>
                <p className="text-purple-200 text-lg">
                  {currentPromotion.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href={currentPromotion.link}
              className={`bg-gradient-to-r ${currentPromotion.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse`}
            >
              Explore Now →
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-purple-300 hover:text-white transition-colors text-2xl"
              aria-label="Close banner"
            >
              ×
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex space-x-2">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentPromo
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8'
                  : 'bg-purple-600/30 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
};

export default NewContentPromotionBanner2025;