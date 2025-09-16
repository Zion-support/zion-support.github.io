import React, { useState, useEffect } from 'react';

const RevolutionaryTechAdvertisingBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const advertisements = [
    {
      title: "🚀 NEW: AI Consciousness 2026",
      subtitle: "Experience the first truly conscious AI systems",
      cta: "Explore Now",
      link: "/pages/AdvancedAIConsciousness2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "⚡ BREAKTHROUGH: Quantum Neural Networks",
      subtitle: "Revolutionary quantum-AI fusion technology",
      cta: "Discover More",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "🧬 REVOLUTIONARY: Neural Reality Interface",
      subtitle: "Direct brain-computer interface technology",
      cta: "Try Demo",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "🌟 INNOVATION: Holographic Computing",
      subtitle: "3D holographic displays and interfaces",
      cta: "Experience",
      link: "/pages/AdvancedHolographicTechnology2026",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "🌌 FUTURE: Space Technology Solutions",
      subtitle: "Advanced space exploration and colonization",
      cta: "Launch Into Space",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [advertisements.length]);

  const currentAdData = advertisements[currentAd];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Banner Content */}
      <div className="relative z-10 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left Side - Main Message */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl animate-bounce">🚀</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {currentAdData.title}
                </h2>
                <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full animate-pulse">
                  NEW
                </span>
              </div>
              <p className="text-lg text-gray-200 mb-4">
                {currentAdData.subtitle}
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div className="flex items-center space-x-4">
              <a
                href={currentAdData.link}
                className={`bg-gradient-to-r ${currentAdData.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center whitespace-nowrap transform hover:scale-105`}
              >
                {currentAdData.cta} →
              </a>
              <button className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentAd ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Promotional Strip */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm font-semibold">
            <span className="flex items-center space-x-1">
              <span className="text-lg">🤖</span>
              <span>AI Consciousness</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-lg">⚡</span>
              <span>Quantum Computing</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-lg">🧬</span>
              <span>Neural Interfaces</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-lg">🌟</span>
              <span>Holographic Tech</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-lg">🌌</span>
              <span>Space Technology</span>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RevolutionaryTechAdvertisingBanner;