import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary AI Services 2025",
      description: "Experience the future of artificial intelligence with our groundbreaking services",
      cta: "Explore AI Services",
      link: "/pages/RevolutionaryAIServices2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Computing Solutions",
      description: "Unlock unprecedented processing power with quantum technology",
      cta: "Discover Quantum AI",
      link: "/pages/QuantumComputingSolutions2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      id: 3,
      title: "🧠 INNOVATION: Neural Interface Technology",
      description: "Connect your mind directly to AI systems for seamless control",
      cta: "Try Neural Interface",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🌟 ULTIMATE: Interactive Tech Showcase",
      description: "Experience cutting-edge technologies with interactive demonstrations",
      cta: "Start Interactive Demo",
      link: "/interactive-showcase",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const currentPromotion = promotions[currentPromo];

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${currentPromotion.bgColor} backdrop-blur-sm border border-white/20 rounded-2xl mb-8 transition-all duration-500`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative z-10 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Content */}
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-yellow-300">LIVE NOW</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentPromotion.title}
            </h3>
            <p className="text-white/90 text-lg mb-4">
              {currentPromotion.description}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={currentPromotion.link}
                className={`bg-gradient-to-r ${currentPromotion.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-flex items-center space-x-2`}
              >
                <span>{currentPromotion.cta}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <div className="text-white/70 text-sm">
                <span className="font-semibold">Limited Time:</span> 50% off first month
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0 ml-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-24 h-24 bg-gradient-to-r from-white/30 to-white/20 rounded-full flex items-center justify-center">
                  <div className="text-4xl">
                    {currentPromo === 0 && "🤖"}
                    {currentPromo === 1 && "⚡"}
                    {currentPromo === 2 && "🧠"}
                    {currentPromo === 3 && "🌟"}
                  </div>
                </div>
              </div>
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex space-x-2">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index === currentPromo ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-border animate-gradient-x"></div>
    </div>
  );
};

export default NewContentPromotionBanner2025;