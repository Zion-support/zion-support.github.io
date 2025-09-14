import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughContentBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughContent = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: 'Ultimate Guide to 1,500% ROI',
      description: 'Transform your business with neural interfaces achieving 1,500% ROI and $45.2M annual savings.',
      metrics: {
        roi: '1,500%',
        savings: '$45.2M',
        accuracy: '99.7%',
        speed: '1,200%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      subtitle: 'Ultimate Guide to 3,000% ROI',
      description: 'Achieve unprecedented 3,000% ROI with quantum computing, saving $127M annually.',
      metrics: {
        roi: '3,000%',
        savings: '$127M',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'autonomous-ecosystem-transformation',
      title: 'AI 2025 Autonomous Ecosystem Transformation',
      subtitle: '$5.2B Company Achieves 2,100% ROI',
      description: 'Fortune 100 company achieves 2,100% ROI with intelligent automation, saving $890M annually.',
      metrics: {
        roi: '2,100%',
        savings: '$890M',
        efficiency: '156%',
        quality: '89%'
      },
      url: '/case-studies/ai-2025-autonomous-ecosystem-transformation-ultimate-success',
      type: 'case-study',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'sustainable-technology-transformation',
      title: 'AI 2025 Sustainable Technology Transformation',
      subtitle: '$3.8B Company Achieves 1,800% ROI with Green AI',
      description: 'Achieve 1,800% ROI while reducing carbon footprint by 67% and saving $234M annually.',
      metrics: {
        roi: '1,800%',
        savings: '$234M',
        carbon_reduction: '67%',
        efficiency: '89%'
      },
      url: '/case-studies/ai-2025-sustainable-technology-transformation-ultimate-success',
      type: 'case-study',
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'enterprise-transformation-master-roadmap',
      title: 'AI 2025 Enterprise Transformation Master Roadmap',
      subtitle: 'From Strategy to 2,000% ROI',
      description: 'Comprehensive roadmap for achieving 2,000% ROI through strategic AI implementation.',
      metrics: {
        roi: '2,000%',
        savings: '$2.8B',
        success_rate: '94%',
        timeframe: '24 months'
      },
      url: '/resources/ai-2025-enterprise-transformation-master-roadmap',
      type: 'resource',
      readingTime: '35 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % breakthroughContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = breakthroughContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="max-w-4xl">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200">
                    🚀 NEW BREAKTHROUGH CONTENT
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-200">
                    {currentContent.type.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-xl md:text-2xl font-semibold text-purple-200 mb-4">
                  {currentContent.subtitle}
                </p>

                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-sm text-gray-300">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {currentContent.metrics.accuracy || currentContent.metrics.efficiency || currentContent.metrics.success_rate}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.accuracy ? 'Accuracy' : 
                       currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      {currentContent.metrics.speed || currentContent.metrics.carbon_reduction || currentContent.metrics.timeframe}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.speed ? 'Speed' : 
                       currentContent.metrics.carbon_reduction ? 'Carbon Reduction' : 'Timeframe'}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full {currentContent.type === 'case-study' ? 'Case Study' : 
                              currentContent.type === 'resource' ? 'Guide' : 'Article'}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    View All Resources
                  </Link>
                </div>

                {/* Reading time and progress indicator */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span>📖 {currentContent.readingTime}</span>
                    <span>⭐ Featured Content</span>
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex space-x-2">
                    {breakthroughContent.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/30'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughContentBanner;