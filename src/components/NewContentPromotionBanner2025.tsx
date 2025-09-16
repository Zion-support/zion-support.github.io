import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 'revolutionary-breakthrough',
      title: '🌟 Revolutionary Tech Breakthrough 2025',
      description: 'Experience the most advanced technology that will reshape our world',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      color: 'from-purple-600 to-pink-600',
      icon: '🚀',
      badge: 'NEW'
    },
    {
      id: 'ai-consciousness',
      title: '🧠 AI Consciousness Revolution',
      description: 'The world\'s first truly conscious artificial intelligence',
      link: '/pages/AIConsciousnessRevolution2025',
      color: 'from-cyan-600 to-blue-600',
      icon: '⚡',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'quantum-reality',
      title: '⚛️ Quantum Reality Engine',
      description: 'Process information at the speed of thought with quantum computing',
      link: '/pages/QuantumRealityEngine2025',
      color: 'from-emerald-600 to-teal-600',
      icon: '🌌',
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'dimensional-computing',
      title: '🌌 Dimensional Computing Gateway',
      description: 'Access computing power from parallel dimensions',
      link: '/pages/DimensionalComputingGateway2025',
      color: 'from-indigo-600 to-purple-600',
      icon: '✨',
      badge: 'FUTURE'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Promotion Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              {/* Badge */}
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full animate-pulse">
                  {promotions[currentPromo].badge}
                </span>
                <span className="text-2xl">{promotions[currentPromo].icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">
                  {promotions[currentPromo].title}
                </h3>
                <p className="text-sm opacity-90">
                  {promotions[currentPromo].description}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={promotions[currentPromo].link}
                className={`bg-gradient-to-r ${promotions[currentPromo].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm whitespace-nowrap`}
              >
                Explore Now →
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="ml-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center space-x-2">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                index === currentPromo
                  ? 'bg-white'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-2xl opacity-20 animate-bounce">
        🚀
      </div>
      <div className="absolute top-8 right-8 text-xl opacity-20 animate-pulse">
        ⚡
      </div>
      <div className="absolute bottom-4 left-8 text-lg opacity-20 animate-bounce delay-1000">
        🌟
      </div>
      <div className="absolute bottom-8 right-4 text-xl opacity-20 animate-pulse delay-500">
        🧠
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;