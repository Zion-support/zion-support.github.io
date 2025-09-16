import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryPromoBanner2025: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promos = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary AI Content 2025",
      subtitle: "Experience the most advanced AI technologies",
      cta: "Explore Now",
      link: "/pages/RevolutionaryAIContent2025",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      animation: "animate-pulse"
    },
    {
      id: 2,
      title: "⚛️ BREAKTHROUGH: Quantum Computing Revolution",
      subtitle: "Unlock unprecedented computational power",
      cta: "Discover Quantum",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      animation: "animate-bounce"
    },
    {
      id: 3,
      title: "🧬 INNOVATION: Advanced Biotech Solutions",
      subtitle: "Revolutionary biotechnology transforming healthcare",
      cta: "Learn More",
      link: "/pages/AdvancedBiotechRevolution2026",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      animation: "animate-pulse"
    },
    {
      id: 4,
      title: "🚀 FUTURE: Space Technology Innovation",
      subtitle: "Cutting-edge space technology for interplanetary exploration",
      cta: "Explore Space",
      link: "/pages/SpaceTechInnovation2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      animation: "animate-bounce"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promos.length]);

  if (!isVisible) return null;

  const currentPromoData = promos[currentPromo];

  return (
    <div className="relative overflow-hidden">
      {/* Main Promo Banner */}
      <div className={`bg-gradient-to-r ${currentPromoData.gradient} text-white py-6 relative`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className={`text-2xl ${currentPromoData.animation}`}>
                  {currentPromoData.title.split(' ')[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {currentPromoData.title.replace(/^[^\s]+\s/, '')}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {currentPromoData.subtitle}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to={currentPromoData.link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {currentPromoData.cta} →
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ 
              width: `${((Date.now() / 1000) % 4) * 25}%` 
            }}
          ></div>
        </div>
      </div>

      {/* Secondary Promo Strip */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>14+ Revolutionary Pages</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Cutting-Edge Technology</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>Interactive Showcase</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              <span>Future-Ready Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 cursor-pointer group">
          <div className="flex items-center space-x-2">
            <span className="text-2xl animate-bounce">🚀</span>
            <div className="hidden group-hover:block">
              <div className="text-sm font-bold">Explore All</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 cursor-pointer group">
          <div className="flex items-center space-x-2">
            <span className="text-2xl animate-pulse">⚛️</span>
            <div className="hidden group-hover:block">
              <div className="text-sm font-bold">Quantum Tech</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner2025;