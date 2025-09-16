import React, { useState, useEffect } from 'react';

const NewContentPromotion2035: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      title: "🌟 ULTIMATE BREAKTHROUGH 2035",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      link: "/pages/UltimateTechBreakthrough2035",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ REVOLUTIONARY SHOWCASE 2035",
      subtitle: "Interactive Demos • Real-time Processing • Multi-dimensional Tech",
      description: "Explore cutting-edge technologies through immersive interactive demonstrations",
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
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
    <div className="relative overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-6 text-white relative">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors"
            aria-label="Close promotion"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex items-center space-x-4">
            <div className="text-3xl animate-bounce">{promotions[currentPromo].icon}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold animate-pulse">
                  NEW BREAKTHROUGH 2035
                </span>
                <span className="text-purple-200 text-sm">January 20, 2035</span>
              </div>
              <h3 className="text-xl font-bold mb-1">
                {promotions[currentPromo].title}
              </h3>
              <p className="text-purple-200 text-sm mb-2">
                {promotions[currentPromo].subtitle}
              </p>
              <p className="text-purple-100 text-xs mb-3 max-w-md">
                {promotions[currentPromo].description}
              </p>
              <a
                href={promotions[currentPromo].link}
                className={`inline-flex items-center px-6 py-2 bg-gradient-to-r ${promotions[currentPromo].color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm group`}
              >
                Explore Now
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${((currentPromo + 1) / promotions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotion2035;