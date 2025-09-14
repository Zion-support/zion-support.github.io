"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Brain, Zap, Rocket, Star, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function AI2025UltimateContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "AI Innovation Showcase 2025",
      description: "Discover revolutionary AI breakthroughs and interactive demonstrations",
      link: "/ai-innovation-showcase-2025",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "Ultimate AI Tools Collection",
      description: "Complete toolkit of AI-powered solutions for every industry",
      link: "/ai-tools-ultimate-showcase-2025",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "2030 Future Predictions",
      description: "Comprehensive technology forecasts and breakthrough predictions",
      link: "/ai-2030-future-predictions-ultimate",
      icon: Rocket,
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentPromotion.bgColor} opacity-50`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex items-center gap-6 flex-1">
              {/* Icon */}
              <div className={`p-3 bg-gradient-to-r ${currentPromotion.color} rounded-xl shadow-lg`}>
                <currentPromotion.icon className="w-8 h-8 text-white" />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4" />
                    NEW CONTENT
                  </span>
                  <span className="text-sm text-gray-400">2025 Ultimate Collection</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  {currentPromotion.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {currentPromotion.description}
                </p>
              </div>

              {/* Stats */}
              <div className="hidden lg:flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-green-400 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>+500%</span>
                  </div>
                  <div className="text-gray-400">Engagement</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-blue-400 font-bold">
                    <Users className="w-4 h-4" />
                    <span>50K+</span>
                  </div>
                  <div className="text-gray-400">Users</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Link 
                href={currentPromotion.link}
                className={`bg-gradient-to-r ${currentPromotion.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                Explore Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${currentPromotion.color} w-8` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}