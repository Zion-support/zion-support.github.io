'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Zap, Brain, Cpu, Shield, Star, TrendingUp, Users, Award } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      icon: Zap,
      title: '🚀 New AI Services Available!',
      description: 'Discover our latest AI-powered solutions for analytics, automation, and customer support.',
      cta: 'Explore Now',
      href: '/ai-services',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Brain,
      title: '🧠 AI Analytics Platform',
      description: 'Get 95% accuracy in data insights with our advanced AI analytics platform.',
      cta: 'Learn More',
      href: '/ai-analytics',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Shield,
      title: '🔒 Enterprise Security',
      description: 'Bank-level security and compliance for all your critical data and systems.',
      cta: 'Secure Now',
      href: '/cybersecurity',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: '📈 300% Average ROI',
      description: 'Our clients achieve 300% ROI and $50M+ in annual savings with our solutions.',
      cta: 'See Results',
      href: '/case-studies',
      color: 'from-yellow-400 to-orange-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentPromo];

  return (
    <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <currentPromotion.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold text-sm">
                {currentPromotion.title}
              </span>
            </div>
            <div className="hidden md:block">
              <span className="text-gray-300 text-sm">
                {currentPromotion.description}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href={currentPromotion.href}
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${currentPromotion.color} hover:opacity-90 transition-opacity`}
            >
              {currentPromotion.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse" 
           style={{ width: `${((currentPromo + 1) / promotions.length) * 100}%` }} />
    </div>
  );
};

export default ContentPromotionBanner;