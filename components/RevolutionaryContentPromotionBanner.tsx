import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "5,000% ROI • Revolutionary Technologies",
      description: "Discover the most revolutionary AI technologies of 2025 delivering unprecedented results.",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-900/20 to-pink-900/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 2,
      title: "🔮 AI 2026-2030 Future Predictions",
      subtitle: "Revolutionary Breakthroughs • Quantum Consciousness",
      description: "Explore the revolutionary AI predictions that will reshape our world from 2026-2030.",
      link: "/ai-2026-2030-future-predictions-breakthrough",
      gradient: "from-cyan-500 to-purple-500",
      bgGradient: "from-cyan-900/20 to-purple-900/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 3,
      title: "⚛️ Quantum Computing Solutions 2025",
      subtitle: "15,000% ROI • Quantum Supremacy",
      description: "Experience revolutionary quantum computing delivering exponential computational power.",
      link: "/quantum-computing-solutions-2025",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-900/20 to-indigo-900/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 4,
      title: "🏆 Global Transformation Success Story",
      subtitle: "10,000% ROI • Fortune 500 Case Study",
      description: "See how a Fortune 500 enterprise achieved extraordinary results with our AI solutions.",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold mb-4 animate-pulse">
                  🔥 BREAKTHROUGH CONTENT
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-lg text-yellow-400 font-semibold mb-3">
                  {currentContent.subtitle}
                </p>
                
                <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                  {currentContent.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href={currentContent.link}
                    className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Now
                  </Link>
                  <Link
                    href="/content-showcase"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                  >
                    View All Content
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${currentContent.bgGradient} border ${currentContent.borderColor} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="text-8xl opacity-30">
                    {currentContent.id === 1 && "🚀"}
                    {currentContent.id === 2 && "🔮"}
                    {currentContent.id === 3 && "⚛️"}
                    {currentContent.id === 4 && "🏆"}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {currentContent.id === 1 && "5,000%"}
                        {currentContent.id === 2 && "∞"}
                        {currentContent.id === 3 && "15,000%"}
                        {currentContent.id === 4 && "10,000%"}
                      </div>
                      <div className="text-sm text-gray-300">
                        {currentContent.id === 1 && "ROI"}
                        {currentContent.id === 2 && "Potential"}
                        {currentContent.id === 3 && "ROI"}
                        {currentContent.id === 4 && "ROI"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {promotionalContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}