import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2026UltimateBusinessAutomationRevolutionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ai2026-ultimate-business-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2026-ultimate-business-automation-banner-dismissed', 'true');
  };

  const slides = [
    {
      title: "AI 2026 Ultimate Business Automation Revolution",
      subtitle: "Ultimate Success Guide to 15,000% ROI",
      description: "Discover how Fortune 500 companies are achieving unprecedented ROI through revolutionary AI automation systems.",
      metrics: {
        roi: "15,000%",
        savings: "$125B+",
        accuracy: "99.99%",
        efficiency: "5,000%"
      },
      cta: "Read Ultimate Guide",
      link: "/blog/ai-2026-ultimate-business-automation-revolution-ultimate-success-guide",
      featured: true
    },
    {
      title: "Fortune 100 Manufacturing Success",
      subtitle: "$25.8B Annual Savings with 15,000% ROI",
      description: "Real case study of how a Fortune 100 manufacturer achieved complete business automation in 8 months.",
      metrics: {
        roi: "15,000%",
        savings: "$25.8B",
        timeline: "8 months",
        efficiency: "5,000%"
      },
      cta: "View Case Study",
      link: "/case-studies/fortune-100-manufacturing-ai-automation-success",
      featured: true
    },
    {
      title: "Global Financial Services Transformation",
      subtitle: "$18.5B Savings with 12,500% ROI",
      description: "How a leading financial services company achieved complete automation across all operations.",
      metrics: {
        roi: "12,500%",
        savings: "$18.5B",
        automation: "98%",
        satisfaction: "99.5%"
      },
      cta: "Explore Success Story",
      link: "/case-studies/global-financial-services-ai-transformation",
      featured: true
    }
  ];

  if (isDismissed) return null;

  const currentContent = slides[currentSlide];

  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-4">
            <span className="text-purple-300 text-sm font-medium">🚀 NEW: AI 2026 Ultimate Business Automation Revolution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Description */}
            <div>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {currentContent.cta}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/resources/ai-2026-implementation-ultimate-success-framework"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-200"
                >
                  Implementation Guide
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-400/30">
                {/* Success Metrics Visualization */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">15,000%</div>
                    <div className="text-purple-200">Average ROI</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">$125B+</div>
                      <div className="text-sm text-gray-300">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.99%</div>
                      <div className="text-sm text-gray-300">Accuracy</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Implementation Progress</span>
                      <span className="text-white font-medium">6-12 months</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Links */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/case-studies" className="text-purple-200 hover:text-white transition-colors">
              View All Case Studies
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/resources" className="text-purple-200 hover:text-white transition-colors">
              Implementation Resources
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/contact" className="text-purple-200 hover:text-white transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateBusinessAutomationRevolutionBanner;