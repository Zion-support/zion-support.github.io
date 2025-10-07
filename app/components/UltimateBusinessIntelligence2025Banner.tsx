import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      features: ['30,000% ROI', '98.5% Accuracy', '12 Month Timeline', '87% Adoption'],
      metrics: {
        efficiency: '250%',
        accuracy: '98.5%',
        timeline: '12 months',
        adoption: '87%'
      },
      readingTime: '30 min read',
      featured: false
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      features: ['400% Efficiency', '99.9% Accuracy', '18 Month Timeline', '100% Adoption'],
      metrics: {
        efficiency: '400%',
        accuracy: '99.9%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {currentContent.title}
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            {currentContent.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href={currentContent.url}
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="text-xl">📖</span>
              <span>Read {currentContent.type}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="text-xl">📞</span>
              <span>Call Now: +1-302-464-0950</span>
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.9%', label: 'Success Rate' },
            { value: '5M+', label: 'Data Points Processed' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;