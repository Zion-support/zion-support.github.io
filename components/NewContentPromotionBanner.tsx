'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Star, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const NewContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const promotions = [
    {
      id: 1,
      title: "🚀 New AI Innovation Showcase 2025",
      description: "Discover revolutionary AI breakthroughs and cutting-edge technologies",
      link: "/ai-innovation-showcase-2025",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      id: 2,
      title: "✨ Success Stories & Case Studies",
      description: "See how companies achieved 500%+ ROI with our AI solutions",
      link: "/success-stories-2025",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 3,
      title: "🔮 Future Technology Predictions",
      description: "Explore AI trends and predictions for 2025-2030",
      link: "/ai-2025-2030-ultimate-predictions",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30"
    }
  ];

  const currentPromotion = promotions[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className={`max-w-6xl mx-auto bg-gradient-to-r ${currentPromotion.bgColor} backdrop-blur-sm border ${currentPromotion.borderColor} rounded-2xl shadow-2xl overflow-hidden`}>
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Content */}
          <div className="p-6 pr-16">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <span className="text-sm text-white/80 font-medium">NEW CONTENT</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentPromotion.title}
                </h3>
                
                <p className="text-white/80 mb-4 max-w-2xl">
                  {currentPromotion.description}
                </p>

                <div className="flex items-center space-x-4">
                  <Link
                    href={currentPromotion.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentPromotion.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group`}
                  >
                    Explore Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex items-center space-x-2 text-white/60">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Limited Time</span>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="hidden md:block ml-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white/60" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 pb-4">
            {promotions.map((_index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;