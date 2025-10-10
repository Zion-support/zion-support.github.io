'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: '🚀 New AI Project Manager Available!',
      description: 'Intelligent project management with AI-powered insights. Start your free trial today.',
      cta: 'Try Free',
      href: '/ai-project-manager',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: '📱 AI Social Media Manager Launch',
      description: 'Automate your social media with AI. Get 50% off your first month.',
      cta: 'Get 50% Off',
      href: '/ai-social-media-manager',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 3,
      title: '☁️ AI Cloud Infrastructure Update',
      description: 'Advanced cloud optimization with AI. Reduce costs by up to 60%.',
      cta: 'Learn More',
      href: '/ai-cloud-infrastructure',
      color: 'from-green-500 to-teal-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentPromo];

  return (
    <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left side - Promotion content */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">NEW</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                {currentPromotion.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 truncate">
                {currentPromotion.description}
              </p>
            </div>
          </div>

          {/* Right side - CTA and close */}
          <div className="flex items-center space-x-3">
            <a
              href={currentPromotion.href}
              className={`bg-gradient-to-r ${currentPromotion.color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center space-x-1`}
            >
              <span>{currentPromotion.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="Close promotion banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-5000 ease-linear"
            style={{ 
              width: '100%',
              animation: 'progressBar 5s linear infinite'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default ContentPromotionBanner;