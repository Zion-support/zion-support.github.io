'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

interface BannerContent {
  id: string;
  title: string;
  subtitle: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    accuracy?: string;
  };
  url: string;
  type: 'blog' | 'case-study' | 'resource';
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
import { X, ChevronRight, Star, TrendingUp, Zap, Target } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    accuracy?: string;
  };
  readingTime: string;
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1663
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
  featured: boolean;
}

const RevolutionaryContent2025UltimateBanner: React.FC = () => {
<<<<<<< HEAD
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

=======
<<<<<<< HEAD
  const [currentIndex, setCurrentIndex] = useState(0);
=======
  const [currentSlide, setCurrentSlide] = useState(0);
>>>>>>> cursor/create-and-deploy-new-content-1663
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

<<<<<<< HEAD
  const bannerContent: BannerContent[] = [
    {
      id: "advanced-automation",
      title: "AI 2025: The Advanced Automation Revolution",
      subtitle: "Ultimate Guide to 600% ROI - Transform Your Enterprise Operations",
      metrics: {
        roi: "600%",
        savings: "$2.8M annually",
        efficiency: "89%",
        accuracy: "99.7%"
      },
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide",
      type: "blog",
      featured: true
    },
    {
      id: "enterprise-transformation",
      title: "AI 2025 Enterprise Transformation Success",
      subtitle: "$2.1B Company Achieves 650% ROI in 15 Months - Complete Case Study",
      metrics: {
        roi: "650%",
        savings: "$325M",
        efficiency: "94%",
        accuracy: "99.8%"
      },
      url: "/case-studies/ai-2025-enterprise-transformation-ultimate-success-story",
      type: "case-study",
      featured: true
    },
    {
      id: "implementation-roadmap",
      title: "AI 2025 Implementation Ultimate Roadmap",
      subtitle: "From Strategy to 700% ROI in 12 Months - Comprehensive Guide",
      metrics: {
        roi: "700%",
        savings: "$4.2M annually",
        efficiency: "94%",
        accuracy: "99.7%"
      },
      url: "/resources/ai-2025-implementation-ultimate-roadmap-comprehensive-guide",
      type: "resource",
      featured: true
    },
    {
      id: "quantum-computing",
      title: "AI 2025: Quantum Computing Breakthrough",
      subtitle: "Enterprise Solutions Achieving 800% ROI - Revolutionary Technology",
      metrics: {
        roi: "800%",
        savings: "$180M annually",
        efficiency: "1,200%",
        accuracy: "99.97%"
      },
      url: "/blog/ai-2025-quantum-computing-breakthrough-enterprise-solutions",
      type: "blog",
      featured: true
    },
    {
      id: "autonomous-systems",
      title: "AI 2025 Autonomous Systems Revolution",
      subtitle: "$1.8B Company Achieves 900% ROI with Self-Managing Operations",
      metrics: {
        roi: "900%",
        savings: "$750M",
        efficiency: "95%",
        accuracy: "99.8%"
      },
      url: "/case-studies/ai-2025-autonomous-systems-revolution-success-story",
      type: "case-study",
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
  // Revolutionary 2025 content with ultimate breakthrough metrics
  const contentItems: ContentItem[] = [
>>>>>>> main
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '94%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with advanced AI automation. Complete implementation guide with real success stories and proven strategies.',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'AI Automation Success Story: Fortune 500 Company Achieves 1,500% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-automation-fortune-500-ultimate-success-story-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        automation: '95%',
        quality: '99.2%'
      },
      description: 'Discover how a Fortune 500 manufacturing company transformed their operations with AI automation, achieving $2.8B in annual savings and 1,500% ROI in just 12 months.',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Guide to 1,500%+ ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,500%+',
        success: '94%',
        speed: '67% faster',
        projects: '500+'
      },
<<<<<<< HEAD
      description: 'The definitive framework for AI implementation success. Proven strategies, methodologies, and best practices that have delivered 1,500%+ ROI for Fortune 500 companies.',
=======
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'quantum-computing-business-revolution-ultimate-guide',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$100B',
        efficiency: '1000x',
        accuracy: '99.9%'
      },
      readingTime: '30 min read',
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1663
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
>>>>>>> main
      featured: true
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
      if (dismissed === 'true') {
        setIsDismissed(true);
      }
    }
  }, []);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const currentContent = bannerContent[currentIndex];

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
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {bannerContent.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {currentContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {currentContent.metrics.roi}
              </div>
              <div className="text-sm opacity-90">ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">
                {currentContent.metrics.savings}
              </div>
              <div className="text-sm opacity-90">Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {currentContent.metrics.efficiency}
              </div>
              <div className="text-sm opacity-90">Efficiency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {currentContent.metrics.accuracy}
              </div>
              <div className="text-sm opacity-90">Accuracy</div>
            </div>
          </div>

          {/* Content Type Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className={`flex items-center ${getTypeColor(currentContent.type)} rounded-full px-4 py-2`}>
              <span className="text-xl mr-2">{getTypeIcon(currentContent.type)}</span>
              <span className="text-sm font-medium">
                {currentContent.type.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={currentContent.url}
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-sm opacity-75">
            <p>Join 500+ companies achieving 600-900% ROI through AI transformation</p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, contentItems.length]);
>>>>>>> main

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentPieces.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-bold">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Ultimate AI Content Collection
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough strategies, success stories, and implementation frameworks that are delivering unprecedented results for Fortune 500 companies worldwide
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                {currentContent.type}
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                FEATURED
              </span>
            </div>
            <div className="flex space-x-2">
              {contentPieces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                {currentContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-white to-gray-100 text-purple-900 px-8 py-4 rounded-lg font-bold hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105"
                >
                  Read Full {currentContent.type}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-blue-200 capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Content Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contentPieces.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-white/50 bg-white/10' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {content.type}
                </span>
                {content.featured && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                )}
              </div>
              <h4 className="font-bold mb-3 text-sm leading-tight">
                {content.title}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold text-sm">
                    {content.metrics.roi} ROI
                  </span>
                  <span className="text-blue-200 text-xs">
                    {content.metrics.savings} savings
                  </span>
                </div>
                <div className="text-xs text-blue-200">
                  {content.description.substring(0, 80)}...
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join hundreds of Fortune 500 companies that have already achieved 1,500%+ ROI with our proven AI implementation strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
              </Link>
              <Link
                href="/resources"
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-bold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                Download Resources
              </Link>
            </div>
=======
        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
            <div className="text-sm text-gray-300">Fortune 500 Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">$100B</div>
            <div className="text-sm text-gray-300">Market Opportunity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">1000x</div>
            <div className="text-sm text-gray-300">Performance Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-300">Accuracy Rate</div>
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1663
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
>>>>>>> main
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;