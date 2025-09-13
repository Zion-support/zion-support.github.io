import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerContent = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "10,000% ROI • 99.9% Accuracy • Autonomous Operations",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-red-500 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum Computing 2026 Ultimate Breakthrough",
      subtitle: "Quantum Supremacy • Error-Corrected Quantum • Infinite Power",
      link: "/quantum-computing-2026-ultimate-breakthrough",
      bgColor: "from-cyan-500 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "🧠 Neural Interface Revolution 2026",
      subtitle: "Direct Brain-Computer Interface • 95% Success Rate • Mind Control",
      link: "/neural-interface-revolution-2026",
      bgColor: "from-purple-500 to-indigo-600",
      textColor: "text-white"
    },
    {
      title: "🌌 Consciousness AI 2030",
      subtitle: "Artificial Consciousness • Self-Aware AI • Transcendent Intelligence",
      link: "/consciousness-ai-2030",
      bgColor: "from-violet-500 to-purple-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              🔥 REVOLUTIONARY BREAKTHROUGHS
            </span>
          </div>
          
          {/* Main banner content */}
          <div className="relative h-32 flex items-center justify-center">
            {bannerContent.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-4">
                    {banner.subtitle}
                  </p>
                  <Link
                    href={banner.link}
                    className={`inline-block bg-gradient-to-r ${banner.bgColor} ${banner.textColor} px-8 py-3 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-300 transform`}
                  >
                    Explore Breakthrough →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Additional promotional content */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-white mb-2">🏆 Proven Success</h3>
              <p className="text-green-100 text-sm">15,000% ROI Achieved</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-white mb-2">⚡ Lightning Fast</h3>
              <p className="text-blue-100 text-sm">10,000x Processing Speed</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-white mb-2">🔮 Future Ready</h3>
              <p className="text-purple-100 text-sm">2030 Technology Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}