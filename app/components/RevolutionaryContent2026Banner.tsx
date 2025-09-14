'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
  };
  featured: boolean;
  isNew: boolean;
}

const RevolutionaryContent2026Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success Story: $2.8B Company Achieves 1,000% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        accuracy: '99.9%',
        satisfaction: '99.2%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success-framework',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        accuracy: '94%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with our groundbreaking 2026 content series. 
            Transform your business with cutting-edge insights and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Column - Content Preview */}
          <div>
            <h3 className="text-3xl font-bold mb-6">What's Inside Our 2026 Collection</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Enterprise AI Transformation</h4>
                  <p className="text-gray-200">Complete guide to implementing AI 2026 in your organization with real-world case studies and proven methodologies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Quantum AI Revolution</h4>
                  <p className="text-gray-200">Explore how quantum computing is revolutionizing AI and creating unprecedented business opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Implementation Master Guide</h4>
                  <p className="text-gray-200">Step-by-step blueprint for AI 2026 implementation with detailed checklists and best practices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold mb-2">AI 2026 Impact</h4>
                <p className="text-gray-200">Transform your business with next-generation AI</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">450%</div>
                  <div className="text-xs text-gray-300">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">67%</div>
                  <div className="text-xs text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">234%</div>
                  <div className="text-xs text-gray-300">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">189%</div>
                  <div className="text-xs text-gray-300">Revenue Growth</div>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  href="/blog"
                  className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Content
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="text-4xl mb-4">🏢</div>
            <h4 className="text-xl font-bold mb-3">Enterprise Guide</h4>
            <p className="text-gray-200 mb-4 text-sm">
              Complete enterprise transformation roadmap with proven strategies and real-world implementations.
            </p>
            <Link 
              href="/blog/ai-2026-enterprise-transformation-ultimate-guide"
              className="text-blue-300 hover:text-blue-100 font-semibold text-sm"
            >
              Read Full Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="text-4xl mb-4">⚛️</div>
            <h4 className="text-xl font-bold mb-3">Quantum AI</h4>
            <p className="text-gray-200 mb-4 text-sm">
              Revolutionary quantum AI insights that will transform your business operations and competitive advantage.
            </p>
            <Link 
              href="/blog/quantum-ai-2026-business-revolution-complete-guide"
              className="text-blue-300 hover:text-blue-100 font-semibold text-sm"
            >
              Discover Quantum AI →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="text-4xl mb-4">📋</div>
            <h4 className="text-xl font-bold mb-3">Master Guide</h4>
            <p className="text-gray-200 mb-4 text-sm">
              The ultimate implementation blueprint with step-by-step instructions and expert insights.
            </p>
            <Link 
              href="/resources/ai-2026-implementation-master-guide-ultimate"
              className="text-blue-300 hover:text-blue-100 font-semibold text-sm"
            >
              Get Master Guide →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white bg-opacity-5 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations already transforming their operations with our AI 2026 content and implementation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContent2026Banner;