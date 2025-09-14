import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Calculator, FileText, Users, Star, Award, Target, Rocket } from 'lucide-react';

const EnhancedContentPromotionBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 'enterprise-automation',
      title: 'AI 2026: Enterprise Automation Breakthrough',
      subtitle: '400% ROI in 90 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented returns through next-generation AI automation systems.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      stats: '400% ROI',
      category: 'Blog Post'
    },
    {
      id: 'fortune-500-case',
      title: 'Fortune 500 AI Transformation',
      subtitle: '$50M Annual Savings in 6 Months',
      description: 'Real case study of how a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
      stats: '$50M Saved',
      category: 'Case Study'
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      subtitle: 'From Strategy to ROI',
      description: 'The definitive guide to AI implementation with step-by-step framework, proven methodologies, and real-world examples.',
      url: '/resources/ai-implementation-master-guide-2026',
      icon: FileText,
      color: 'from-purple-500 to-violet-600',
      stats: '300%+ ROI',
      category: 'Implementation Guide'
    }
  ];

  const quickStats = [
    { label: 'New Content Pieces', value: '6', icon: FileText },
    { label: 'Success Stories', value: '2', icon: Users },
    { label: 'Implementation Guides', value: '2', icon: Target },
    { label: 'Total Word Count', value: '25K+', icon: Calculator }
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('content-banner-dismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-8">
            <Rocket className="w-5 h-5 text-yellow-300 mr-3 animate-pulse" />
            <span className="text-white text-sm font-bold">🚀 NEW CONTENT JANUARY 2025</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough insights, implementation guides, and success stories that will transform your AI journey in 2026
          </p>

          {/* Featured Content Carousel */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <currentContent.icon className={`w-10 h-10 text-white mr-4 p-2 rounded-xl bg-gradient-to-r ${currentContent.color}`} />
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-2">
                      {currentContent.category}
                    </span>
                    <div className="text-2xl font-bold text-white">{currentContent.stats}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {currentContent.title}
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                {currentContent.subtitle}
              </p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                {currentContent.description}
              </p>
              
              <Link 
                href={currentContent.url}
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {currentContent.category === 'Case Study' ? 'View Success Story' : 
                 currentContent.category === 'Implementation Guide' ? 'Download Guide' : 'Read Article'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <FileText className="w-6 h-6 mr-3" />
              Explore All Content
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-transparent border-3 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Users className="w-6 h-6 mr-3" />
              Get Expert Consultation
            </Link>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6+</div>
              <div className="text-blue-200 text-sm font-medium">New Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2</div>
              <div className="text-blue-200 text-sm font-medium">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2</div>
              <div className="text-blue-200 text-sm font-medium">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$100B+</div>
              <div className="text-blue-200 text-sm font-medium">Proven ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner2026;