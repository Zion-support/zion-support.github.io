import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContentBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Revolutionary content with exceptional ROI metrics
  const revolutionaryContent = [
    {
      id: 'advanced-automation-revolution',
      title: 'AI 2025: The Advanced Automation Revolution',
      subtitle: 'Ultimate Guide to 1,500% ROI',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      metrics: {
        roi: '1,500%',
        savings: '$8.2M annually',
        efficiency: '450% improvement'
      },
      description: 'Fortune 500 companies achieving unprecedented returns through advanced AI automation',
      type: 'blog',
      readingTime: '28 min read',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation Success',
      subtitle: '$3.2B Company Achieves 1,500% ROI in 8 Months',
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$18.7M annually',
        efficiency: '520% improvement'
      },
      description: 'Real-world success story of extraordinary AI transformation results',
      type: 'case-study',
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide',
      subtitle: 'Ultimate Roadmap to 2,000% ROI',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-roadmap',
      metrics: {
        roi: '2,000%',
        successRate: '98%',
        enterprises: '500+'
      },
      description: 'The definitive guide to AI implementation with complete roadmap',
      type: 'resource',
      readingTime: '45 min read',
      isNew: true
    }
  ];

  // Auto-rotate content every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContentBanner2025_dismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContentBanner2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-4 left-4 w-20 h-20 bg-red-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/3 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-14 h-14 bg-red-400/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                🔥 REVOLUTIONARY
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentContent.type.toUpperCase()}
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentContent.isNew ? 'NEW' : 'FEATURED'}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-3">
              {currentContent.subtitle}
            </h3>

            <p className="text-lg opacity-90 mb-4">
              {currentContent.description}
            </p>

            {/* ROI Metrics */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm opacity-80">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">
                  {currentContent.metrics.savings || currentContent.metrics.successRate}
                </div>
                <div className="text-sm opacity-80">
                  {currentContent.metrics.savings ? 'Savings' : 'Success Rate'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">
                  {currentContent.readingTime}
                </div>
                <div className="text-sm opacity-80">Read Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {currentContent.metrics.roi}
              </div>
              <div className="text-lg opacity-80 mb-2">Average ROI</div>
              <div className="text-sm opacity-60">
                Based on 500+ implementations
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Dismiss Button */}
        <div className="text-center mt-4">
          <button
            onClick={handleDismiss}
            className="text-white/60 hover:text-white text-sm underline"
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;