import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolution2025Banner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % neuralContent.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-dismissed'true');
  };

  const neuralContent = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution',
      description: 'Transform your business with brain-computer interface technology - 800% ROI in 12 months',
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '95%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Success: 800% ROI',
      description: 'Real-world case study showing $75M annual savings with neural interface technology',
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      type: 'case-study',
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '98%'
      },
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 2025',
      description: 'Complete framework for enterprise neural interface deployment with 800% ROI',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      type: 'resource',
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '12 months'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = neuralContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">NEW NEURAL INTERFACE CONTENT</span>
              </div>
              <div className="flex space-x-1">
                {neuralContent.map((_index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-blue-100 mb-4 max-w-2xl">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold text-sm">ROI</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-blue-200">Return on Investment</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">$</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-blue-200">Annual Savings</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-sm">%</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                  <div className="text-xs text-blue-200">Efficiency Gain</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  {currentContent.readingTime}
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Neural Interface Assessment
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full bg-white/20 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / neuralContent.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025Banner;