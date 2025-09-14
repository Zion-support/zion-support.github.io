'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('newContent2025UltimateBannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBannerDismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Success Guide to 500% ROI',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      badge: 'Featured',
      description: 'Master enterprise automation with AI in 2025. Learn proven strategies, implementation frameworks, and real-world success stories that deliver 500% ROI and transform your business operations.'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      badge: 'Success Story',
      description: 'Discover how a Fortune 500 manufacturing company achieved 650% ROI and $2.8B in annual savings through comprehensive AI transformation and intelligent automation.'
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      badge: 'Ultimate Guide',
      description: 'The complete AI implementation roadmap for 2025. Learn proven strategies, frameworks, and step-by-step processes to achieve 800% ROI and transform your business with artificial intelligence.'
    },
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution - Ultimate Guide to Enterprise Protection',
      type: 'Blog Post',
      url: '/blog/ai-2025-cybersecurity-revolution-ultimate-guide',
      metrics: {
        threatReduction: '95%',
        savings: '$2.3M',
        responseTime: '67%',
        roi: '340%'
      },
      readingTime: '20 min read',
      badge: 'Security Guide',
      description: 'Discover how AI is revolutionizing cybersecurity in 2025. Learn advanced threat detection, automated response, and enterprise protection strategies that deliver 340% ROI and 95% threat reduction.'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: How a $200M Health System Achieved 300% ROI',
      type: 'Case Study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        efficiency: '67%'
      },
      readingTime: '15 min read',
      badge: 'Healthcare Success',
      description: 'Discover how a $200M health system achieved 300% ROI through comprehensive AI transformation, improving patient outcomes, reducing costs, and enhancing operational efficiency.'
    }
  ];

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">NEW 2025 CONTENT COLLECTION</span>
            </div>
            <div className="flex items-center bg-green-500/20 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-semibold">FEATURED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Preview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content Collection 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the ultimate collection of AI implementation guides, success stories, and proven strategies that deliver extraordinary ROI and business transformation.
              </p>
            </div>

            {/* Current Featured Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-blue-200">{currentContent.type}</span>
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentContent.readingTime}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                {currentContent.title}
              </h3>

              <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-xs text-blue-200 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Read Full Article
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Statistics and CTA */}
          <div className="space-y-8">
            {/* Success Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-sm text-blue-200">Success Stories</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">800%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Total Savings</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
                <p className="text-blue-200 mb-6">
                  Join 500+ companies that have achieved extraordinary results with our proven AI implementation strategies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/resources"
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-4 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
                >
                  Explore All Resources
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-4 rounded-lg text-center transition-all duration-200 border border-white/30"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Additional Content Links */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-center">More Featured Content</h4>
              <div className="space-y-2">
                {featuredContent.slice(0, 3).map((content, index) => (
                  <Link
                    key={content.id}
                    href={content.url}
                    className="block bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-all duration-200 border border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">
                          {content.title}
                        </div>
                        <div className="text-xs text-blue-200">
                          {content.type} • {content.readingTime}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-blue-300 flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;