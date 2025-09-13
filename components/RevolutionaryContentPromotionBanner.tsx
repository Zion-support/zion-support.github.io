import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner() {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience revolutionary AI breakthroughs with 2,500-10,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-purple-500 to-blue-500",
      icon: "🚀"
    },
    {
      id: 2,
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Revolutionary convergence delivering 15,000% ROI",
      link: "/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      icon: "🌌"
    },
    {
      id: 3,
      title: "Transcendent Intelligence 2030",
      description: "Consciousness-level AI with infinite scalability",
      link: "/ai-2030-transcendent-intelligence",
      badge: "TRANSCENDENT",
      color: "from-cyan-500 to-indigo-500",
      icon: "🧠"
    },
    {
      id: 4,
      title: "Quantum Computing Solutions 2026",
      description: "Error-corrected quantum systems delivering exponential power",
      link: "/quantum-computing-solutions-2026",
      badge: "QUANTUM",
      color: "from-green-500 to-emerald-500",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % revolutionaryContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-4 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content showcase */}
          <div className="flex-1 pr-12">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl animate-bounce">{revolutionaryContent[currentContent].icon}</span>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  {revolutionaryContent[currentContent].badge}
                </div>
              </div>
              <div className="flex-1">
                <Link 
                  href={revolutionaryContent[currentContent].link}
                  className="group block"
                >
                  <h3 className="text-lg font-bold group-hover:text-yellow-300 transition-colors duration-300">
                    {revolutionaryContent[currentContent].title}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {revolutionaryContent[currentContent].description}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href={revolutionaryContent[currentContent].link}
              className={`px-6 py-2 bg-gradient-to-r ${revolutionaryContent[currentContent].color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
            >
              <span>Explore Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentContent 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}