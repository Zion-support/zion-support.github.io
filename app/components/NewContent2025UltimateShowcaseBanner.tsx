import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // New content pieces with compelling metrics
  const newContent = [
    {
      id: 1,
      type: 'Blog',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      description: 'Transform your business with cutting-edge AI technology and achieve unprecedented results.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 2,
      type: 'Case Study',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      description: 'How a global manufacturing giant achieved 567% ROI with comprehensive AI implementation.',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '78%',
        timeframe: '18 months'
      },
      badge: 'SUCCESS STORY',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      type: 'Blog',
      title: 'AI 2025: The Quantum Computing Enterprise Breakthrough',
      url: '/blog/ai-2025-quantum-computing-enterprise-breakthrough',
      description: 'Harness quantum AI for 1,200% ROI and solve previously impossible business challenges.',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        speed: '1,200x',
        accuracy: '99.97%'
      },
      badge: 'BREAKTHROUGH',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 4,
      type: 'Case Study',
      title: 'Healthcare AI Transformation: $200M System Achieves 400% ROI',
      url: '/case-studies/healthcare-ai-transformation-2025-ultimate-success',
      description: 'How advanced AI implementation delivered $75M annual savings and 99.8% patient safety.',
      metrics: {
        roi: '400%',
        savings: '$75M',
        safety: '99.8%',
        satisfaction: '95%'
      },
      badge: 'HEALTHCARE',
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newContent.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateShowcaseDismissed');
    if (dismissed) setIsDismissed(true);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('newContent2025UltimateShowcaseDismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white py-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-pink-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-0 right-4 text-white hover:text-gray-300 text-2xl font-bold z-20"
          aria-label="Dismiss banner"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold text-yellow-300">🚀 NEW CONTENT 2025 ULTIMATE SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl opacity-90">
            Discover breakthrough strategies achieving 500%+ ROI and $2.8B+ savings
          </p>
        </div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Featured Content Card */}
          <div className={`bg-gradient-to-r ${currentContent.color} p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105`}>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full">
                {currentContent.badge}
              </span>
              <span className="text-sm font-medium opacity-90">{currentContent.type}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              {currentContent.title}
            </h3>
            
            <p className="text-lg opacity-90 mb-6">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">{value}</div>
                  <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            <Link
              href={currentContent.url}
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Story
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Success Metrics & CTA */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4 text-center">Our Success Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500%</div>
                  <div className="text-sm opacity-80">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">$2.8B</div>
                  <div className="text-sm opacity-80">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-sm opacity-80">Success Stories</div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Featured Content Types</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  <span>Implementation Guides & Strategies</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  <span>Fortune 500 Success Stories</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                  <span>ROI Calculators & Tools</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                  <span>Industry Best Practices</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Link
                href="/blog"
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <div>
                <Link
                  href="/contact"
                  className="text-yellow-300 hover:text-yellow-200 font-semibold underline"
                >
                  Get Personalized AI Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm opacity-75">
            Based on 500+ successful AI implementations • Updated January 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;