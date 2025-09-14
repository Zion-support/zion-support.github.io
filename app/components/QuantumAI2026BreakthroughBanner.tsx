import React from 'react';
import Link from 'next/link';

const QuantumAI2026BreakthroughBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 QUANTUM AI BREAKTHROUGH 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Quantum Computing Revolution is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how quantum-enhanced AI is transforming businesses with 10,000x faster processing, 
            99.9% accuracy, and unprecedented competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000x</div>
            <div className="text-lg mb-4">Faster Problem Solving</div>
            <div className="text-sm opacity-80">
              Complex optimization problems solved in minutes instead of years
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-lg mb-4">Predictive Accuracy</div>
            <div className="text-sm opacity-80">
              Unprecedented accuracy in market forecasting and risk assessment
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">940%</div>
            <div className="text-lg mb-4">ROI Achievement</div>
            <div className="text-sm opacity-80">
              Proven ROI results from quantum AI implementations
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">📖 Latest Quantum AI Content</h3>
            <div className="space-y-4">
              <Link 
                href="/blog/ai-2026-quantum-computing-breakthrough" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  AI 2026: The Quantum Computing Breakthrough
                </div>
                <div className="text-sm opacity-80">
                  Discover how quantum-AI convergence is revolutionizing business operations
                </div>
              </Link>
              <Link 
                href="/blog/ai-2026-enterprise-automation-mastery" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  Enterprise Automation Mastery Guide
                </div>
                <div className="text-sm opacity-80">
                  Complete transformation guide for autonomous business operations
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">💼 Success Stories & Resources</h3>
            <div className="space-y-4">
              <Link 
                href="/case-studies/quantum-ai-financial-services-transformation-2026" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  Quantum AI Financial Services Case Study
                </div>
                <div className="text-sm opacity-80">
                  How Global Financial Corp achieved 940% ROI with quantum AI
                </div>
              </Link>
              <Link 
                href="/resources/quantum-ai-implementation-master-guide-2026" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  Quantum AI Implementation Master Guide
                </div>
                <div className="text-sm opacity-80">
                  Complete guide to implementing quantum AI in your organization
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Start Your Quantum AI Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumAI2026BreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 2026: The Quantum AI Business Revolution",
      subtitle: "$100B Market Transformation",
      metrics: "400-600% ROI improvements in 90 days",
      link: "/blog/ai-2026-quantum-ai-business-revolution",
      icon: "🚀"
    },
    {
      title: "Fortune 500 Quantum AI Transformation",
      subtitle: "$2.8B Annual Savings in 6 Months",
      metrics: "567% ROI improvement achieved",
      link: "/case-studies/quantum-ai-fortune-500-transformation-2026",
      icon: "📊"
    },
    {
      title: "Quantum AI Implementation Guide 2026",
      subtitle: "From Strategy to 567% ROI",
      metrics: "Proven framework for enterprise transformation",
      link: "/resources/quantum-ai-implementation-guide-2026",
      icon: "📋"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('quantum-ai-2026-banner-dismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-ai-2026-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                  🔬 QUANTUM AI 2026 BREAKTHROUGH
                </span>
                <span className="text-sm opacity-75">New Content Available</span>
              </div>

              <div className="space-y-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {contentItems[currentContent].title}
                </h2>
                <p className="text-lg opacity-90">
                  {contentItems[currentContent].subtitle}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-green-300">
                    ✅ {contentItems[currentContent].metrics}
                  </span>
                  <div className="flex space-x-1">
                    {contentItems.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentContent ? 'bg-white' : 'bg-white opacity-30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={contentItems[currentContent].link}
                  className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="mr-2">{contentItems[currentContent].icon}</span>
                  Explore Content
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8 ml-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">567%</div>
                <div className="text-sm opacity-75">ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">$2.8B</div>
                <div className="text-sm opacity-75">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">$100B</div>
                <div className="text-sm opacity-75">Market Size</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={dismissBanner}
          className="absolute top-4 right-4 text-white opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-5000 ease-linear"
          style={{ 
            width: `${((currentContent + 1) / contentItems.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default QuantumAI2026BreakthroughBanner;