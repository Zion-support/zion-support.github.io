'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const UltimateEnterpriseTransformation2025Banner = () => {
  const [currentContentsetCurrentContent] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ultimate-enterprise-transformation-revolution',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      description: 'Achieve 15,000% ROI with next-generation AI systems delivering $50+ billion in annual savings',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      type: 'blog',
      metrics: {
        roi: '15,000%',
        savings: '$50B+',
        efficiency: '2,800%',
        accuracy: '99.97%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'fortune-500-ultimate-transformation-success',
      title: 'Fortune 500 Ultimate Enterprise Transformation Success Story',
      description: 'How a $180B company achieved 15,000% ROI and $50B annual savings in 18 months',
      url: '/case-studies/fortune-500-ultimate-enterprise-transformation-15000-roi-success-story',
      type: 'case-study',
      metrics: {
        roi: '15,000%',
        savings: '$50B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'ultimate-transformation-implementation-guide',
      title: 'Ultimate Enterprise Transformation Implementation Guide',
      description: 'Complete roadmap to 15,000% ROI with proven strategies and step-by-step instructions',
      url: '/resources/ai-2025-ultimate-enterprise-transformation-implementation-guide',
      type: 'resource',
      metrics: {
        roi: '15,000%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '40 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-enterprise-transformation-banner-dismissed'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-enterprise-transformation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const current = featuredContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW ULTIMATE BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI 2025 Ultimate Enterprise Transformation Revolution
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the most significant business breakthrough in modern history - 15,000% ROI through next-generation AI systems
          </p>
        </div>

        {/* Content showcase carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {featuredContent.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {current.type.toUpperCase()}
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
                <span className="text-blue-200 text-sm">
                  {current.readingTime}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {current.title}
              </h3>
              
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {current.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{current.metrics.roi}</div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{current.metrics.savings}</div>
                  <div className="text-sm text-blue-200">Annual Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{current.metrics.efficiency || current.metrics.accuracy}</div>
                  <div className="text-sm text-blue-200">Efficiency/Accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{current.metrics.timeline || current.metrics.success}</div>
                  <div className="text-sm text-blue-200">Timeline/Success</div>
                </div>
              </div>

              <Link
                href={current.url}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full {current.type === 'blog' ? 'Article' : current.type === 'case-study' ? 'Case Study' : 'Guide'}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Why This Matters</h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Proven 15,000% ROI across Fortune 500 companies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>$50+ billion in annual savings potential</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>99.97% accuracy in AI decision-making</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Complete implementation roadmap included</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>18-month implementation timeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Transformation Assessment
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View All Resources
            </Link>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            Join 500+ Fortune 500 companies already transforming with AI 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimateEnterpriseTransformation2025Banner;