import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Star, Zap, Brain, Target } from 'lucide-react';

const RevolutionaryContentPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 New: Revolutionary AI Services 2025",
      subtitle: "Transform your business with cutting-edge AI solutions",
      cta: "Explore Services",
      link: "/revolutionary-ai-services-2025",
      color: "from-cyan-500 to-purple-600",
      icon: Brain
    },
    {
      title: "📈 AI Business Transformation Guide",
      subtitle: "Complete 2025 guide to achieving 10x ROI with AI",
      cta: "Read Guide",
      link: "/ai-powered-business-transformation-2025-guide-10x-roi",
      color: "from-purple-500 to-pink-600",
      icon: Target
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "Solve complex problems in seconds, not years",
      cta: "Learn More",
      link: "/quantum-computing-breakthrough-solving-business-problems-seconds",
      color: "from-green-500 to-teal-600",
      icon: Zap
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromo = promotions[currentSlide];
  const IconComponent = currentPromo.icon;

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left side - Promotion content */}
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-400 p-2 rounded-lg">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    {currentPromo.title}
                  </h3>
                  <p className="text-cyan-200 text-xs sm:text-sm">
                    {currentPromo.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Center - CTA Button */}
            <div className="hidden sm:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center text-sm">
                {currentPromo.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Right side - Close button and indicators */}
            <div className="flex items-center space-x-3">
              {/* Slide indicators */}
              <div className="hidden sm:flex space-x-1">
                {promotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-cyan-400 w-6' 
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden mt-3">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              {currentPromo.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-pulse"></div>
    </div>
  );
};

export default RevolutionaryContentPromotionBanner2025;