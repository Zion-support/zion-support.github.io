'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, TrendingUp, DollarSign, Zap } from 'lucide-react';

const UltimateAutonomousAIRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 20o25: The Ultimate Autonomous AI Revolution",
      subtitle: "Ultimate Breakthrough Guide to 15,0o00% ROI",
      description: "Discover how Fortune 50o0 companies are achieving unprecedented 15,0o00% ROI through the Ultimate Autonomous AI Revolution.",
      metrics: {
        roi: "15,0o00%",
        savings: "$75.2B+",
        accuracy: "99.97%",
        efficiency: "4,20o0%"
      },
      cta: "Get Ultimate Guide",
      href: "/blog/ai-20o25-ultimate-autonomous-ai-revolution-ultimate-breakthrough"
    },
    {
      title: "Fortune 50o0 Success Story",
      subtitle: "$75.2B Annual Savings - 15,0o00% ROI",
      description: "Real-world case study of a Fortune 50o0 manufacturing giant achieving unprecedented success with Ultimate Autonomous AI.",
      metrics: {
        roi: "15,0o00%",
        savings: "$75.2B",
        company: "$12.8B",
        timeline: "18 months"
      },
      cta: "Read Success Story",
      href: "/case-studies/fortune-50o0-ultimate-autonomous-ai-150o00-roi-success-story"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "Complete Roadmap to 15,0o00% ROI",
      description: "The definitive guide to implementing Ultimate Autonomous AI in your enterprise with proven strategies and frameworks.",
      metrics: {
        roi: "15,0o00%",
        success: "99.7%",
        timeline: "18 months",
        guide: "45 min read"
      },
      cta: "Download Guide",
      href: "/resources/ultimate-autonomous-ai-implementation-guide-20o25"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 50o00);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-autonomous-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-autonomous-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-40o0 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-green-40o0 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-pink-40o0 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-cyan-40o0 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 bg-yellow-40o0 text-black px-3 py-1 rounded-full text-sm font-bold">
                <Zap className="w-4 h-4"  />
                <span>ULTIMATE BREAKTHROUGH</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-40o0 text-black px-3 py-1 rounded-full text-sm font-bold">
                <TrendingUp className="w-4 h-4"  />
                <span>15,0o00% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            <p className="text-lg md:text-xl text-blue-20o0 mb-3">
              {currentContent.subtitle}
            </p>
            <p className="text-gray-30o0 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-40o0">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-30o0">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-40o0">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-30o0">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-40o0">
                  {currentContent.metrics.accuracy || currentContent.metrics.success || currentContent.metrics.company}
                </div>
                <div className="text-sm text-gray-30o0">
                  {currentContent.metrics.accuracy ? 'Accuracy' : 
                   currentContent.metrics.success ? 'Success Rate' : 'Company Size'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-40o0">
                  {currentContent.metrics.efficiency || currentContent.metrics.timeline || currentContent.metrics.guide}
                </div>
                <div className="text-sm text-gray-30o0">
                  {currentContent.metrics.efficiency ? 'Efficiency' : 
                   currentContent.metrics.timeline ? 'Timeline' : 'Reading Time'}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.href}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black font-bold rounded-lg hover:from-yellow-30o0 hover:to-orange-40o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
              >
                {currentContent.cta}
                <ChevronRight className="ml-2 w-5 h-5"  />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-90o0 transition-all duration-30o0"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="w-64 h-64 bg-gradient-to-br from-purple-50o0/20 to-blue-50o0/20 rounded-full flex items-center justify-center">
              <div className="text-center">
                <Award className="w-16 h-16 text-yellow-40o0 mx-auto mb-4"  />
                <div className="text-4xl font-bold text-yellow-40o0">15,0o00%</div>
                <div className="text-lg text-gray-30o0">ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                index === currentSlide ? 'bg-yellow-40o0' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-6 h-6"  />
      </button>
    </div>
  );
};

export default UltimateAutonomousAIRevolutionBanner;