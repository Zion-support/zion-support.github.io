'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
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
    {
      id: 'enterprise-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '750%',
        savings: '$3.2B',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-ultimate-success',
      title: 'Fortune 500 AI Transformation: $4.2B Company Achieves 850% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '850%',
        savings: '$3.8B',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-roadmap-comprehensive',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 900% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      metrics: {
        roi: '900%',
        savings: '$2.3M',
        efficiency: '78%',
        accuracy: '95%'
      },
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
      featured: true
=======
import { X, ArrowRight, Star, TrendingUp, DollarSign, Clock, Users, Award } from 'lucide-react';

const RevolutionaryContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentHighlights = [
    {
      title: "Advanced Automation Mastery",
      subtitle: "1,200% ROI Ultimate Success Guide",
      type: "blog",
      url: "/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide",
      metrics: {
        roi: "1,200%",
        savings: "$2.8B",
        efficiency: "340%",
        satisfaction: "98%"
      },
      description: "Transform your enterprise with cutting-edge AI automation technologies delivering unprecedented ROI.",
      readingTime: "18 min read",
      featured: true,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "1,200% ROI in 18 Months",
      type: "case-study",
      url: "/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success",
      metrics: {
        roi: "1,200%",
        savings: "$2.8B",
        timeline: "18 months",
        satisfaction: "98.7%"
      },
      description: "How a $50B manufacturing giant achieved unprecedented results with advanced AI automation.",
      readingTime: "22 min read",
      featured: true,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Implementation Framework",
      subtitle: "Complete Success Methodology",
      type: "resource",
      url: "/resources/ai-2025-implementation-ultimate-success-framework",
      metrics: {
        roi: "1,200%",
        success: "98%",
        timeline: "18 months",
        projects: "500+"
      },
      description: "The complete guide to achieving 1,200% ROI with advanced AI automation based on 500+ successful implementations.",
      readingTime: "25 min read",
      featured: true,
      gradient: "from-indigo-600 to-purple-600"
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
    }, 4000);
=======
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentHighlights.length);
    }, 6000);
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40

    return () => clearInterval(interval);
  }, [bannerContent.length]);

<<<<<<< HEAD
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
=======
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2025UltimateBannerDismissed', 'true');
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
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

  useEffect(() => {
<<<<<<< HEAD
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-dismissed');
=======
    const dismissed = localStorage.getItem('revolutionaryContent2025UltimateBannerDismissed');
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

<<<<<<< HEAD
  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-ultimate-dismissed', 'true');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };
=======
  if (!isVisible) return null;

  const currentContent = contentHighlights[currentIndex];
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40

  if (!isVisible || isDismissed) return null;

  const currentContent = contentItems[currentSlide];

  return (
<<<<<<< HEAD
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">REVOLUTIONARY 2025 CONTENT</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold">ULTIMATE BREAKTHROUGH</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content 2025
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Ultimate Breakthrough Collection
                </span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover the most advanced AI strategies, case studies, and implementation guides. 
                Achieve <span className="text-yellow-400 font-bold">900% ROI</span> with proven frameworks 
                used by <span className="text-green-400 font-bold">500+ Fortune 500 companies</span>.
              </p>
            </div>

            {/* Success metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">Average ROI</span>
                </div>
                <div className="text-2xl font-bold text-green-400">900%</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">Success Rate</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">94%</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore All Resources
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Right side - Featured content */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getTypeIcon(currentContent.type)}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentContent.type)}`}>
                    {currentContent.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-300">{currentContent.readingTime}</div>
              </div>

              <h3 className="text-xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-5 rounded-lg p-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {key.replace('_', ' ')}
                    </div>
                    <div className="text-lg font-bold text-yellow-400">{value}</div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                Read Full Article
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                />
              ))}
=======
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-purple-500/5 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-bold">🌟 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Ultimate AI Success Collection
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the <span className="text-yellow-400 font-bold">revolutionary AI automation techniques</span> that are delivering 
            <span className="text-green-400 font-bold"> 1,200% ROI</span> and 
            <span className="text-blue-400 font-bold"> $2.8B in annual savings</span> for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Featured Revolutionary Content</h3>
            <div className="flex space-x-2">
              {contentHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-yellow-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Content Information */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className={`bg-gradient-to-r ${currentContent.gradient} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ⭐ FEATURED
                </span>
                <span className="text-gray-300 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentContent.readingTime}
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h4>
              <p className="text-lg text-gray-300 font-medium">
                {currentContent.subtitle}
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Read Revolutionary Guide
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-400/30">
                <TrendingUp className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-yellow-400 mb-1">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300 font-medium">ROI Achieved</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-400/30">
                <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-400 mb-1">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300 font-medium">Annual Savings</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-400/30">
                <Award className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-400 mb-1">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                <div className="text-sm text-gray-300 font-medium">Efficiency/Success</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-400/30">
                <Users className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-400 mb-1">{currentContent.metrics.satisfaction || currentContent.metrics.projects}</div>
                <div className="text-sm text-gray-300 font-medium">Satisfaction/Projects</div>
              </div>
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Content Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contentHighlights.map((content, index) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:from-white/10 hover:to-white/15 border ${
                index === currentIndex ? 'ring-2 ring-yellow-400 border-yellow-400/50' : 'border-white/20 hover:border-white/40'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`bg-gradient-to-r ${content.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {content.type.toUpperCase()}
                </span>
                <span className="text-gray-400 text-xs flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {content.readingTime}
                </span>
              </div>
              <h5 className="font-bold text-lg leading-tight mb-3 line-clamp-2">
                {content.title}
              </h5>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {content.subtitle}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-yellow-400 font-bold">{content.metrics.roi} ROI</span>
                <span className="text-green-400">{content.metrics.savings}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join 500+ successful companies that have achieved 1,200% ROI with our revolutionary AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore All Revolutionary Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10"
            >
              Schedule Free Consultation
            </Link>
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20"
        aria-label="Dismiss banner"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;