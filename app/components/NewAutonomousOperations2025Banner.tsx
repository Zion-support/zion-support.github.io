import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const NewAutonomousOperations2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const contentSlides = [
    {
      title: "Autonomous Business Operations Revolution",
      subtitle: "800% ROI in 12 Months",
      description: "Transform your operations with AI-driven autonomous systems that deliver unprecedented results.",
      metrics: "800% ROI • $50M Savings • 95% Efficiency",
      link: "/blog/ai-2025-2026-autonomous-business-operations-ultimate-guide",
      cta: "Read Ultimate Guide"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "Manufacturing Transformation",
      description: "How a global manufacturer achieved $50M annual savings with autonomous operations.",
      metrics: "800% ROI • $50M Savings • 99.8% Uptime",
      link: "/case-studies/autonomous-business-operations-800-roi-success-story",
      cta: "View Case Study"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "6-Phase Framework",
      description: "Complete roadmap from strategy to 800% ROI with proven implementation methodology.",
      metrics: "6-12 Months • 94% Success Rate • Proven Framework",
      link: "/resources/ai-automation-implementation-master-guide-2025",
      cta: "Get Implementation Guide"
    }
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-ops-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-ops-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">New Content</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-500/20 rounded-full px-3 py-1">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-semibold">800% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            <p className="text-lg font-semibold text-blue-100 mb-3">
              {currentContent.subtitle}
            </p>
            <p className="text-blue-50 mb-4 max-w-2xl">
              {currentContent.description}
            </p>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-200" />
                <span className="text-sm text-blue-100">{currentContent.metrics}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.link}
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>{currentContent.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Get Assessment</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex ml-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">800%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Time to ROI:</span>
                  <span className="text-white font-semibold">3-6 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Success Rate:</span>
                  <span className="text-white font-semibold">94%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Implementation:</span>
                  <span className="text-white font-semibold">6-12 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NewAutonomousOperations2025Banner;