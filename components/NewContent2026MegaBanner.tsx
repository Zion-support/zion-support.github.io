import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BannerContent {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  color: string;
  icon: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

const bannerContent: BannerContent[] = [
  {
    id: 'ai-infrastructure',
    title: 'AI Autonomous Infrastructure 2026',
    subtitle: 'Achieve 99.9% uptime with self-healing systems and zero-touch operations',
    cta: 'Read the Complete Guide',
    href: '/blog/ai-autonomous-infrastructure-2026',
    color: 'from-blue-600 to-purple-600',
    icon: '🏗️',
    metrics: [
      { value: '99.9%', label: 'Uptime' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '$15M+', label: 'Annual Savings' }
    ]
  },
  {
    id: 'quantum-ai',
    title: 'AI Quantum Hybrid Computing 2026',
    subtitle: 'Revolutionary 1000x faster optimization with quantum-AI breakthrough',
    cta: 'Explore Quantum-AI',
    href: '/blog/ai-quantum-hybrid-computing-2026',
    color: 'from-purple-600 to-pink-600',
    icon: '⚛️',
    metrics: [
      { value: '1000x', label: 'Faster' },
      { value: '95%', label: 'Accuracy' },
      { value: '$50M+', label: 'ROI Potential' }
    ]
  },
  {
    id: 'enterprise-transformation',
    title: '$25M ROI Enterprise Transformation',
    subtitle: 'See how Fortune 500 achieved 99% automation and complete business revolution',
    cta: 'View Case Study',
    href: '/case-studies/ai-autonomous-enterprise-transformation-2026',
    color: 'from-green-600 to-blue-600',
    icon: '🚀',
    metrics: [
      { value: '$25M', label: 'Total ROI' },
      { value: '99%', label: 'Automation' },
      { value: '18 months', label: 'Implementation' }
    ]
  }
];

export default function NewContent2026MegaBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = bannerContent[currentBanner];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.color} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{currentContent.icon}</span>
                <div>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    🆕 New 2026 Content
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                {currentContent.subtitle}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentContent.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold">{metric.value}</div>
                    <div className="text-sm opacity-80">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.href}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.cta} →
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Animated Elements */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 animate-pulse">
                      <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg mb-3"></div>
                      <div className="h-4 bg-white bg-opacity-30 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded w-1/2"></div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 animate-pulse delay-300">
                      <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg mb-3"></div>
                      <div className="h-4 bg-white bg-opacity-30 rounded w-2/3 mb-2"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 animate-pulse delay-150">
                      <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg mb-3"></div>
                      <div className="h-4 bg-white bg-opacity-30 rounded w-4/5 mb-2"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded w-2/3"></div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 animate-pulse delay-450">
                      <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg mb-3"></div>
                      <div className="h-4 bg-white bg-opacity-30 rounded w-3/5 mb-2"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-30 w-full">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: '100%',
            animation: `progress ${8000}ms linear infinite`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}