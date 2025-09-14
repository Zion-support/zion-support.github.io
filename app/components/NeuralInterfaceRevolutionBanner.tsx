'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Brain, Zap, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const NeuralInterfaceRevolutionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: '1,200% ROI Through Direct Brain-Computer Integration',
      description: 'Fortune 500 companies are achieving unprecedented productivity gains with neural interface technology.',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '400%'
      },
      cta: 'Discover Neural Interfaces',
      link: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'autonomous-ai-agents',
      title: 'Autonomous AI Agents Revolution',
      subtitle: '800% ROI Through Self-Managing AI Systems',
      description: 'Self-managing AI agents operating 24/7 with 99.7% autonomous decision-making accuracy.',
      metrics: {
        roi: '800%',
        autonomy: '99.7%',
        savings: '$1.8B',
        uptime: '99.9%'
      },
      cta: 'Explore Autonomous AI',
      link: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'enterprise-automation-success',
      title: 'Enterprise Automation Success',
      subtitle: '800% ROI and $180M Annual Savings',
      description: 'How a $1.2B company achieved extraordinary results through comprehensive AI automation.',
      metrics: {
        roi: '800%',
        savings: '$180M',
        efficiency: '500%',
        satisfaction: '96%'
      },
      cta: 'Read Success Story',
      link: '/case-studies/ai-2025-enterprise-automation-800-roi-success-story',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % content.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed, content.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const currentContent = content[currentSlide];
  const IconComponent = currentContent.icon;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.color} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200">
                      🚀 NEW REVOLUTIONARY CONTENT
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-200">
                      FEATURED
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-purple-200 text-sm mb-3">
                    {currentContent.subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-sm mb-4 max-w-2xl">
                    {currentContent.description}
                  </p>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                      <div className="text-xs text-gray-300">ROI</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-400">{currentContent.metrics.accuracy || currentContent.metrics.autonomy}</div>
                      <div className="text-xs text-gray-300">Accuracy</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-yellow-400">{currentContent.metrics.savings}</div>
                      <div className="text-xs text-gray-300">Savings</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.uptime}</div>
                      <div className="text-xs text-gray-300">Efficiency</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Link
                      href={currentContent.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {currentContent.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    
                    <Link
                      href="/resources/neural-interface-implementation-master-guide-2025"
                      className="inline-flex items-center px-4 py-2 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                    >
                      <Shield className="mr-2 w-4 h-4" />
                      Implementation Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner;