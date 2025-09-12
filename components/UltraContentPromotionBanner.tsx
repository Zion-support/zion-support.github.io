import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      title: "🚀 New AI Innovation Hub",
      description: "Explore cutting-edge AI breakthroughs and revolutionary technologies",
      href: "/ai-innovation-hub",
      color: "from-blue-600 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "🛠️ AI Tools Showcase",
      description: "Discover our comprehensive collection of professional AI tools and calculators",
      href: "/ai-tools-showcase",
      color: "from-green-600 to-teal-600",
      textColor: "text-white"
    },
    {
      title: "📚 AI Resources 2025",
      description: "Access our complete library of AI courses, guides, and learning materials",
      href: "/ai-resources-2025",
      color: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "🎯 AI Implementation Masterclass",
      description: "Join our comprehensive AI implementation course with real-world case studies",
      href: "/webinars/ai-2025-implementation-masterclass",
      color: "from-orange-600 to-red-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl animate-pulse">✨</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">
                    {currentPromotion.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {currentPromotion.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href={currentPromotion.href}
                className={`px-6 py-2 bg-gradient-to-r ${currentPromotion.color} rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                Explore Now
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>
    </div>
  );
}