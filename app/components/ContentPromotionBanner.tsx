'use client';
import React from 'react';
import { ArrowRight, Star, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const promotions = [
    {
      title: 'New AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language processing',
      cta: 'Learn More',
      link: '/ai-voice-assistant',
      icon: '🎤',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: '5G Implementation Services',
      description: 'Deploy ultra-fast 5G networks with edge computing',
      cta: 'Get Started',
      link: '/5g-implementation',
      icon: '📡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI 3D Generation Platform',
      description: 'Create stunning 3D models with AI from text descriptions',
      cta: 'Try Now',
      link: '/ai-3d-generation',
      icon: '🎨',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">New Features</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {promotions.map((promo, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{promo.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{promo.title}</h3>
                    <p className="text-gray-400 text-xs">{promo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
              <span>View All Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Get Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;