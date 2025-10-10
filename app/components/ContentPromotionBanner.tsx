'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const promotions = [
    {
      title: '🚀 New AI Voice Assistant Platform',
      description: 'Revolutionary voice AI with 99.2% accuracy and 50+ language support. Transform customer interactions today!',
      cta: 'Try Free Demo',
      link: '/ai-voice-assistant',
      highlight: true
    },
    {
      title: '🔧 AI Predictive Maintenance',
      description: 'Prevent equipment failures with 70% less downtime. Save millions in maintenance costs.',
      cta: 'Learn More',
      link: '/ai-predictive-maintenance',
      highlight: false
    },
    {
      title: '👥 AI Recruitment Assistant',
      description: 'Transform hiring with AI that finds perfect candidates 10x faster than traditional methods.',
      cta: 'Get Started',
      link: '/ai-recruitment-assistant',
      highlight: false
    }
  ];

  const features = [
    'Free Consultation',
    '24/7 Support',
    '30-Day Money Back',
    'No Setup Fees'
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-4 lg:mb-0">
            <div className="flex flex-wrap items-center gap-4">
              {promotions.map((promotion, index) => (
                <div key={index} className={`flex items-center space-x-3 ${promotion.highlight ? 'bg-cyan-500/20 px-4 py-2 rounded-lg border border-cyan-500/30' : ''}`}>
                  <div className="text-sm">
                    <span className={`font-semibold ${promotion.highlight ? 'text-cyan-400' : 'text-white'}`}>
                      {promotion.title}
                    </span>
                    <span className="text-gray-300 ml-2 hidden sm:inline">
                      {promotion.description}
                    </span>
                  </div>
                  <a 
                    href={promotion.link}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>{promotion.cta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-1 text-sm text-gray-300">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Zap className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;