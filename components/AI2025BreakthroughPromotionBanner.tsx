<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export default function AI2025BreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            🔥 BREAKTHROUGH ALERT
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Breakthrough Revolution
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Discover the revolutionary AI breakthroughs that are transforming industries and creating 
            <strong className="text-white"> 10,000% ROI opportunities</strong> for forward-thinking companies.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <span className="text-2xl mr-2">⚡</span>
              <span className="font-semibold">1000x Faster Processing</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <span className="text-2xl mr-2">💰</span>
              <span className="font-semibold">10,000% ROI</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <span className="text-2xl mr-2">🎯</span>
              <span className="font-semibold">99.9% Accuracy</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2025-breakthrough-revolution"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthroughs →
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Success Story
            </Link>
            <Link 
              href="/blog/ai-2025-ultimate-implementation-guide"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Implementation Guide
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 text-blue-100 text-sm">
            <p>Trusted by 500+ Fortune 500 companies • 10,000+ successful implementations</p>
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Zap, Brain, Target, TrendingUp } from 'lucide-react';

const AI2025BreakthroughPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai-2025-breakthrough-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai-2025-breakthrough-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 via-purple-600/90 to-blue-600/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left side - Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  <Zap className="w-4 h-4" />
                  BREAKTHROUGH 2025
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-green-500 px-3 py-1 rounded-full text-sm font-bold">
                  <Target className="w-4 h-4" />
                  NEW
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                🚀 AI 2025 Breakthrough Revolution
              </h2>
              
              <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl mx-auto lg:mx-0">
                Experience the most revolutionary AI breakthroughs of 2025. 
                <span className="font-semibold"> Quantum-neural fusion, autonomous systems, and enterprise automation</span> 
                delivering unprecedented ROI.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Brain className="w-4 h-4" />
                  <span className="font-semibold">15,000% ROI</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">99.7% Accuracy</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Target className="w-4 h-4" />
                  <span className="font-semibold">Revolutionary</span>
                </div>
              </div>
            </div>
            
            {/* Right side - CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                href="/ai-2025-breakthrough-revolution"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Explore Breakthroughs
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                View Success Stories
              </Link>
            </div>
            
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </div>
      
<<<<<<< HEAD
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">🚀</div>
      <div className="absolute top-8 right-8 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-4 left-1/4 text-3xl animate-bounce delay-1000">🧠</div>
      <div className="absolute bottom-8 right-1/4 text-4xl animate-pulse delay-500">⚛️</div>
    </div>
  );
}
=======
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default AI2025BreakthroughPromotionBanner;
>>>>>>> origin/main
