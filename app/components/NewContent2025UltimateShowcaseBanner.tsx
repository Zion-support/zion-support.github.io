'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 'ai-automation-mastery',
      type: 'Blog Post',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation that delivers 500%+ ROI',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%',
        automation: '89%'
      },
      badge: 'NEW 2025',
      featured: true
    },
    {
      id: 'fortune-500-success',
      type: 'Case Study',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'How a global manufacturing giant achieved 1,200% ROI with comprehensive AI implementation',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        automation: '89%'
      },
      badge: 'SUCCESS STORY',
      featured: true
    },
    {
      id: 'quantum-computing-revolution',
      type: 'Blog Post',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: 'How Quantum AI is transforming enterprise operations with 1,200% ROI',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      badge: 'BREAKTHROUGH',
      featured: true
    },
    {
      id: 'healthcare-transformation',
      type: 'Case Study',
      title: 'Healthcare AI Transformation: $180M Annual Savings',
      description: 'Major health system achieves 450% ROI with comprehensive AI implementation',
      url: '/case-studies/healthcare-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '450%',
        savings: '$180M',
        satisfaction: '94%',
        errors: '89% reduction'
      },
      badge: 'HEALTHCARE',
      featured: true
    },
    {
      id: 'implementation-framework',
      type: 'Resource',
      title: 'AI Implementation Framework 2025',
      description: 'Proven methodology for achieving 500%+ ROI with AI implementation',
      url: '/resources/ai-implementation-framework-2025',
      metrics: {
        roi: '500%+',
        success: '98%',
        timeline: '18 months',
        savings: '$2.8B'
      },
      badge: 'FRAMEWORK',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newContent.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateShowcaseBanner');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateShowcaseBanner', 'true');
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-0 right-4 text-white hover:text-gray-300 text-2xl font-bold z-10"
          aria-label="Dismiss banner"
        >
          ×
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold">🚀 NEW 2025 CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-lg opacity-90">
            Discover our latest success stories, implementation guides, and breakthrough insights
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Information */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  currentContent.badge === 'NEW 2025' ? 'bg-green-500' :
                  currentContent.badge === 'SUCCESS STORY' ? 'bg-blue-500' :
                  currentContent.badge === 'BREAKTHROUGH' ? 'bg-purple-500' :
                  currentContent.badge === 'HEALTHCARE' ? 'bg-red-500' :
                  'bg-orange-500'
                }`}>
                  {currentContent.badge}
                </span>
                <span className="text-sm opacity-75">{currentContent.type}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{currentContent.title}</h3>
              <p className="text-lg opacity-90 mb-6">{currentContent.description}</p>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm opacity-75 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">
                  {currentContent.type === 'Case Study' ? '📊' : 
                   currentContent.type === 'Blog Post' ? '📝' : '🔧'}
                </div>
                <div className="text-2xl font-bold mb-2">Featured Content</div>
                <div className="text-lg opacity-90">{currentContent.type}</div>
                
                {/* Success Indicators */}
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm">High ROI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="text-sm">Proven Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h3>
            <p className="opacity-90 mb-4">
              Join 500+ companies achieving extraordinary results with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;