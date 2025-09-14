'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, Zap, Shield, Target } from 'lucide-react';

const EnterpriseAIAgentsRevolutionaryBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('enterprise-ai-agents-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (!isDismissed && isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isDismissed, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('enterprise-ai-agents-banner-dismissed', 'true');
  };

  const slides = [
    {
      id: 'enterprise-ai-agents-breakthrough',
      title: 'AI 2025: Enterprise AI Agents Revolutionary Breakthrough',
      description: 'Achieve 1,800% ROI in 8 months with autonomous business systems',
      type: 'Blog Post',
      metrics: '1,800% ROI • $8.2B Savings • 99.7% Accuracy',
      url: '/blog/ai-2025-enterprise-ai-agents-revolutionary-breakthrough',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Success: $3.2B Company Achieves 1,800% ROI',
      description: 'Real-world case study of Enterprise AI Agents transformation',
      type: 'Case Study',
      metrics: '1,800% ROI • $2.8B Savings • 450% Efficiency',
      url: '/case-studies/fortune-500-enterprise-ai-agents-1800-roi-ultimate-success',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      gradient: 'from-green-600 via-emerald-600 to-teal-600'
    },
    {
      id: 'implementation-master-guide',
      title: 'Enterprise AI Agents Implementation Master Guide 2025',
      description: 'Complete roadmap from strategy to 1,800% ROI in 8 months',
      type: 'Resource',
      metrics: 'Master Guide • 35 min read • Complete Framework',
      url: '/resources/enterprise-ai-agents-implementation-master-guide-2025',
      icon: <Target className="w-6 h-6 text-blue-500" />,
      gradient: 'from-blue-600 via-cyan-600 to-indigo-600'
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">🚀 ENTERPRISE AI AGENTS REVOLUTION 2025</h2>
              <p className="text-blue-200 text-sm">Revolutionary Breakthrough Content - 1,800% ROI Proven</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              NEW REVOLUTIONARY BREAKTHROUGH
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Enterprise AI Agents: 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                1,800% ROI in 8 Months
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              The most significant breakthrough in business automation history. 
              Fortune 500 companies are achieving unprecedented ROI with autonomous AI systems 
              that operate with 99.7% accuracy and generate billions in savings.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">1,800%</div>
                <div className="text-sm text-blue-200">ROI in 8 Months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">$8.2B</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">99.7%</div>
                <div className="text-sm text-blue-200">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">450%</div>
                <div className="text-sm text-blue-200">Efficiency Gain</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your ROI Analysis
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="/resources/enterprise-ai-agents-implementation-master-guide-2025"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all"
              >
                Download Master Guide
              </Link>
            </div>
          </div>

          {/* Right Content - Rotating Showcase */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {currentSlideData.icon}
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentSlideData.type}
                  </span>
                </div>
                <div className="text-sm text-blue-200">
                  {currentSlide + 1} of {slides.length}
                </div>
              </div>

              {/* Content Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {currentSlideData.title}
              </h3>

              {/* Content Description */}
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentSlideData.description}
              </p>

              {/* Metrics */}
              <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-lg p-3 mb-4">
                <div className="text-sm font-medium text-white mb-1">Key Metrics:</div>
                <div className="text-sm text-blue-200">{currentSlideData.metrics}</div>
              </div>

              {/* CTA */}
              <Link
                href={currentSlideData.url}
                className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">47</div>
              <div className="text-sm text-blue-200">Fortune 500 Companies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">94%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">8</div>
              <div className="text-sm text-blue-200">Months to ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">95%</div>
              <div className="text-sm text-blue-200">Automation Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAIAgentsRevolutionaryBanner;