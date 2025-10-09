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

  const current = promotions[currentPromo];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-400/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300ffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Promotion Content */}
          <div className="flex items-center space-x-4 flex-1">
            <div className={`w-10 h-10 bg-gradient-to-br ${current.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <current.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 neon-text">
                {current.title}
              </h3>
              <p className="text-sm text-gray-300 hidden sm:block">
                {current.description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href={current.href}
              className="cyber-button text-sm px-4 py-2 inline-flex items-center hover:scale-105 transition-transform"
            >
              {current.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex space-x-1 mt-3">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentPromo 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;