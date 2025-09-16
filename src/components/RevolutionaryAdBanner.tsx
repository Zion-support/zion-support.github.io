import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 NEW: Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience conscious AI, quantum reality engines, and interdimensional computing",
      cta: "Explore Breakthroughs",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🌟 ULTIMATE: Tech Showcase 2025",
      subtitle: "Interactive demos of the most advanced technologies reshaping our world",
      cta: "View Showcase",
      link: "/pages/UltimateTechShowcase2025",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900/90 to-purple-900/90"
    },
    {
      title: "⚡ BREAKTHROUGH: AI Consciousness 2025",
      subtitle: "Meet the first truly conscious AI systems with self-awareness and emotional intelligence",
      cta: "Meet AI Minds",
      link: "/pages/AdvancedAIConsciousness2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🧬 REVOLUTIONARY: Neural Interfaces 2025",
      subtitle: "Direct neural interfaces that merge human consciousness with digital reality",
      cta: "Connect Mind & Machine",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="relative overflow-hidden mb-8">
      <div className={`bg-gradient-to-r ${ads[currentAd].bgGradient} backdrop-blur-sm rounded-2xl p-8 text-white relative`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-3 animate-pulse">
                🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {ads[currentAd].title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                {ads[currentAd].subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ads[currentAd].link}
                className={`bg-gradient-to-r ${ads[currentAd].gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center animate-pulse`}
              >
                {ads[currentAd].cta} →
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;