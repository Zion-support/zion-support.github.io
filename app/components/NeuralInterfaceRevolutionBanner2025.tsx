'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Brain, Zap, TrendingUp, Users } from 'lucide-react';

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPieces = [
    {
      id: 'neural-interface-revolution',
      type: 'blog',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      excerpt: 'Discover how neural interface technology is revolutionizing enterprise operations with unprecedented brain-computer integration.',
      metrics: {
        roi: '850%',
        productivity: '+67%',
        savings: '$3.2B',
        efficiency: '+89%'
      },
      icon: Brain,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'neural-interface-case-study',
      type: 'case-study',
      title: 'Neural Interface Enterprise Transformation: $3.2B Company Achieves 850% ROI',
      url: '/case-studies/neural-interface-enterprise-transformation-850-roi-success',
      excerpt: 'How a Fortune 500 technology company revolutionized operations through neural interface implementation.',
      metrics: {
        roi: '850%',
        savings: '$3.2B',
        satisfaction: '98%',
        timeline: '18 months'
      },
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'neural-interface-guide',
      type: 'resource',
      title: 'Neural Interface Implementation Guide 2025: From Strategy to 850% ROI',
      url: '/resources/neural-interface-implementation-guide-2025',
      excerpt: 'Complete guide to implementing neural interfaces in enterprise environments with proven ROI strategies.',
      metrics: {
        roi: '850%',
        productivity: '+67%',
        error_reduction: '78%',
        payback: '2-4 months'
      },
      icon: 
      color: 'from-green-600 to-emerald-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];
  const IconComponent = currentContent.icon;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                🧠 Neural Interface Revolution 2025
              </h2>
              <p className="text-purple-200 text-sm">
                Revolutionary Brain-Computer Integration Technology
              </p>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                NEW CONTENT
              </span>
              <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs font-semibold rounded-full border border-green-600/30">
                850% ROI ACHIEVED
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${currentContent.color} rounded-lg`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-purple-200 text-sm font-medium">
                    {currentContent.type === 'blog' ? '📝 Latest Blog Post' : 
                     currentContent.type === 'case-study' ? '📊 Success Story' : '📚 Implementation Guide'}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {currentContent.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {currentContent.excerpt}
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <Brain className="w-4 h-4 mr-2" />
                Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
              </Link>
              <Link
                href="/services/neural-interfaces"
                className="inline-flex items-center justify-center px-6 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <Zap className="w-4 h-4 mr-2" />
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side - Content navigation */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Featured Content Collection
              </h4>
              
              <div className="space-y-3">
                {contentPieces.map((content, index) => {
                  const Icon = content.icon;
                  const isActive = index === currentSlide;
                  
                  return (
                    <button
                      key={content.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/50' 
                          : 'bg-white/5 hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          isActive 
                            ? `bg-gradient-to-r ${content.color}` 
                            : 'bg-gray-600/50'
                        }`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">
                            {content.title}
                          </p>
                          <p className="text-gray-400 text-xs truncate">
                            {content.type === 'blog' ? 'Blog Post' : 
                             content.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {contentPieces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-purple-500 w-6' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Success highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg p-4 border border-purple-500/30">
                <div className="text-2xl font-bold text-white">850%</div>
                <div className="text-xs text-purple-200">Average ROI</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-2xl font-bold text-white">$3.2B</div>
                <div className="text-xs text-green-200">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-purple-500/20">
          <div className="text-center">
            <p className="text-purple-200 text-sm mb-4">
              Ready to revolutionize your enterprise with neural interfaces?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <Brain className="w-4 h-4 mr-2" />
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <Award className="w-4 h-4 mr-2" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;