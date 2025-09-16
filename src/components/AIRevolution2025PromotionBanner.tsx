"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain
  Zap
  ArrowRight
  Star
  Play
  X,
  Sparkles,
  Rocket,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';

const AIRevolution2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  const announcements = [
    {
      title: "🚀 AI Revolution 2025 is Here",
      subtitle: "Quantum-AI Fusion & Neural Interfaces",
      action: "Explore Now",
      color: "from-purple-600 to-blue-600",
      icon: Brain,
      badge: "BREAKTHROUGH"
    },
    {
      title: "🧠 Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Integration",
      action: "Discover",
      color: "from-blue-600 to-cyan-600",
      icon: Zap,
      badge: "INNOVATION"
    },
    {
      title: "🤖 Autonomous AI Systems",
      subtitle: "Self-Managing Business Operations",
      action: "Learn More",
      color: "from-green-600 to-emerald-600",
      icon: Rocket,
      badge: "FUTURE"
    },
    {
      title: "✨ Conscious AI Framework",
      subtitle: "Genuine Understanding & Intelligence",
      action: "Experience",
      color: "from-orange-600 to-red-600",
      icon: Sparkles,
      badge: "REVOLUTION"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  const currentAnnouncement = announcements[currentSlide];

  return (
    <divdiv
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%239C92AC%22 fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <divdiv
            y: [0-20],
            rotate: [050]
          }}
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 left-8 w-12 h-12 border border-purple-400/30 rounded-full flex items-center justify-center"
        >
          <Brain className="w-6 h-6 text-purple-400" />
        </divdiv>
        
        <divdiv
            y: [0150],
            rotate: [0-50]
          }}
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-6 right-12 w-10 h-10 border border-blue-400/30 rounded-full flex items-center justify-center"
        >
          <Zap className="w-5 h-5 text-blue-400" />
        </divdiv>

        <divdiv
            y: [0-10],
            x: [010]
          }}
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-8 left-1/2 w-8 h-8 border border-cyan-400/30 rounded-full flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
        </divdiv>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center gap-6">
            <divdiv
              className="flex-shrink-0"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <currentAnnouncement.icon className="w-7 h-7 text-white" />
              </div>
            </divdiv>
            
            <div className="flex-1 min-w-0">
                <divdiv
                  key={currentSlide}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${currentAnnouncement.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm font-medium text-purple-300 uppercase tracking-wide">
                      {currentAnnouncement.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{currentAnnouncement.title}</h3>
                  <p className="text-sm text-gray-300">{currentAnnouncement.subtitle}</p>
                </divdiv>
              </div>
            </div>
          </div>

          {/* Center Action Button */}
          <divbutton
            className={`hidden md:flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${currentAnnouncement.color} hover:shadow-xl rounded-full font-semibold transition-all duration-300 text-lg`}
          >
            <Play className="w-5 h-5" />
            {currentAnnouncement.action}
            <ArrowRight className="w-5 h-5" />
          </divbutton>

          {/* Right Stats */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <div className="text-center">
              <div className="font-bold text-xl text-green-400">500%</div>
              <div className="text-gray-400 text-xs">Performance</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-blue-400">99.9%</div>
              <div className="text-gray-400 text-xs">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-purple-400">24/7</div>
              <div className="text-gray-400 text-xs">Operation</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-cyan-400">10K+</div>
              <div className="text-gray-400 text-xs">Users</div>
            </div>
          </div>

          {/* Close Button */}
          <divbutton
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </divbutton>
        </div>

        {/* Mobile Action Button */}
        <divdiv
          className="md:hidden mt-4"
        >
          <divbutton
            className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${currentAnnouncement.color} hover:shadow-xl rounded-full font-semibold transition-all duration-300 text-lg`}
          >
            <Play className="w-5 h-5" />
            {currentAnnouncement.action}
            <ArrowRight className="w-5 h-5" />
          </divbutton>
        </divdiv>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <divdiv
            className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
          />
        </div>
      </div>
    </divdiv>
  );
};

export default AIRevolution2025PromotionBanner;