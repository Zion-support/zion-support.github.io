import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      id: 1,
      title: "🚀 AI 2025 Revolutionary Breakthrough Ultimate",
      subtitle: "15,000% ROI • 99.9% Accuracy • 10,000x Faster",
      link: "/ai-2025-revolutionary-breakthrough-ultimate",
      bgColor: "from-purple-600 via-pink-600 to-red-600",
      textColor: "text-white",
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Breakthroughs 2030",
      subtitle: "Infinite Processing Power • Perfect Security • Quantum Supremacy",
      link: "/quantum-computing-breakthroughs-2030",
      bgColor: "from-cyan-600 via-blue-600 to-purple-600",
      textColor: "text-white",
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "🧠 Neural Interface Revolution 2030",
      subtitle: "Direct Brain-Computer Interface • 95% Patient Recovery • Mind Control",
      link: "/neural-interface-revolution-2030",
      bgColor: "from-green-600 via-emerald-600 to-teal-600",
      textColor: "text-white",
      badge: "FUTURE"
    },
    {
      id: 4,
      title: "🤖 Advanced Automation Solutions 2025",
      subtitle: "Fully Autonomous Operations • 8,500% ROI • Zero Human Intervention",
      link: "/advanced-automation-solutions-2025",
      bgColor: "from-orange-600 via-red-600 to-pink-600",
      textColor: "text-white",
      badge: "AUTOMATION"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentBannerData.bgColor} ${currentBannerData.textColor} py-4 px-4 relative`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  {currentBannerData.badge}
                </span>
                <span className="text-sm font-semibold">NEW CONTENT</span>
              </div>
              <div className="flex-1">
                <Link 
                  href={currentBannerData.link}
                  className="block hover:opacity-90 transition-opacity"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {currentBannerData.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {currentBannerData.subtitle}
                  </p>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href={currentBannerData.link}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Now →
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Banner Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentBanner 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
    </div>
  );
}