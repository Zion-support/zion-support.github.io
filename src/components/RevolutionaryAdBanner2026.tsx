import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2026: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ads = [
    {
      id: 1,
      title: "🚀 AI Consciousness Revolution 2026",
      subtitle: "Experience the world's first truly conscious AI systems",
      cta: "Explore Now",
      color: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠",
      features: ["Self-aware AI", "Emotional Intelligence", "Creative Thinking"]
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "1000+ qubit quantum processors now available",
      cta: "Go Quantum",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚛️",
      features: ["Quantum Supremacy", "Exponential Speed", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "🧬 Neural Interface Technology",
      subtitle: "Direct brain-computer communication is here",
      cta: "Connect Mind & Machine",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🧬",
      features: ["Thought Control", "Neural Feedback", "Medical Applications"]
    },
    {
      id: 4,
      title: "🌟 Interdimensional Computing",
      subtitle: "Computing across multiple dimensions for unlimited power",
      cta: "Enter New Dimensions",
      color: "from-violet-600 via-purple-600 to-fuchsia-600",
      icon: "⚡",
      features: ["Multi-D Processing", "Infinite Capacity", "Reality Manipulation"]
    }
  ];

  const currentAdData = ads[currentAd];

  return (
    <div className="relative overflow-hidden mb-8">
        <divdiv
          key={currentAd}
          className={`bg-gradient-to-r ${currentAdData.color} rounded-2xl p-8 text-white relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <divdiv
                  className="flex items-center space-x-3 mb-4"
                >
                  <span className="text-4xl animate-bounce">{currentAdData.icon}</span>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                    🌟 BREAKTHROUGH 2026
                  </div>
                </divdiv>
                
                <divh2
                  className="text-4xl font-bold mb-4"
                >
                  {currentAdData.title}
                </divh2>
                
                <divp
                  className="text-xl opacity-95 mb-6 max-w-2xl"
                >
                  {currentAdData.subtitle}
                </divp>

                <divdiv
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {currentAdData.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30"
                    >
                      {feature}
                    </span>
                  ))}
                </divdiv>

                <divdiv
                  className="flex flex-wrap gap-4"
                >
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105">
                    {currentAdData.cta} →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg hover:scale-105">
                    Learn More
                  </button>
                </divdiv>
              </div>

              <div className="hidden lg:block ml-8">
                <divdiv
                  className="text-8xl animate-pulse"
                >
                  {currentAdData.icon}
                </divdiv>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </divdiv>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={() => setCurrentAd((prev) => (prev - 1 + ads.length) % ads.length)}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentAd((prev) => (prev + 1) % ads.length)}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2026;