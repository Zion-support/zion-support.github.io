import React, { useState, useEffect } from 'react';

const SuperPromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const promotions = [
    {
      title: "🚀 REVOLUTIONARY BREAKTHROUGH 2029",
      subtitle: "Experience the Future of Technology",
      description: "Conscious AI Systems • Quantum Consciousness • Interdimensional Computing",
      cta: "Explore Now",
      link: "/pages/NextGenTechRevolution2029",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgPattern: "🚀🌟⚡🧠🌌",
      urgency: "LIMITED TIME"
    },
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2030",
      subtitle: "The Most Advanced Technology Ever Created",
      description: "Technologies that transcend the boundaries of possibility and reality itself",
      cta: "Experience Breakthrough",
      link: "/pages/RevolutionaryTechBreakthrough2030",
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      bgPattern: "🌟🚀⚡🌌🧠",
      urgency: "REVOLUTIONARY"
    },
    {
      title: "⚡ INTERACTIVE TECH SHOWCASE 2029",
      subtitle: "Live Technology Demonstrations",
      description: "Experience breakthrough technologies in real-time with interactive demos",
      cta: "Try Interactive Demo",
      link: "/pages/NextGenTechRevolution2029",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      bgPattern: "⚡🧠🌟🌌🚀",
      urgency: "INTERACTIVE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPromo((prev) => (prev + 1) % promotions.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const current = promotions[currentPromo];

  return (
    <div className="relative mb-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating elements */}
          <div className="absolute top-4 left-4 text-4xl opacity-20 animate-bounce">🚀</div>
          <div className="absolute top-8 right-8 text-3xl opacity-20 animate-bounce delay-1000">🌟</div>
          <div className="absolute bottom-8 left-1/4 text-5xl opacity-20 animate-bounce delay-2000">⚡</div>
          <div className="absolute bottom-4 right-1/3 text-3xl opacity-20 animate-bounce delay-500">🧠</div>
          <div className="absolute top-1/2 left-1/2 text-4xl opacity-20 animate-bounce delay-1500">🌌</div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-indigo-600/30 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-8 md:mb-0">
              {/* Urgency Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-bold mb-4 animate-pulse">
                🔥 {current.urgency}
              </div>
              
              {/* Main Title */}
              <h1 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                {current.title}
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                {current.subtitle}
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl mb-6 text-white/90 max-w-3xl">
                {current.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={current.link}
                  className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${current.gradient} rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105 text-white`}
                >
                  {current.cta} →
                </a>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg text-white">
                  📖 Learn More
                </button>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="ml-8 text-center">
              <div className={`text-8xl md:text-9xl opacity-30 transition-all duration-500 ${isAnimating ? 'scale-75 opacity-10' : 'scale-100 opacity-30'}`}>
                {current.bgPattern.split('')[currentPromo]}
              </div>
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPromo ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-3xl z-20"
      >
        ×
      </button>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-white/20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-white/20"></div>
    </div>
  );
};

export default SuperPromotionalBanner;