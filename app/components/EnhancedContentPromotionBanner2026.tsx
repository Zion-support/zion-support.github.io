import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Calculator, FileText, Users, DollarSign, Clock, Star } from 'lucide-react';

const EnhancedContentPromotionBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 'enterprise-automation',
      title: 'AI 2026: Enterprise Automation Breakthrough',
      subtitle: '400% ROI in 90 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented returns through next-generation AI automation systems.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      type: 'blog',
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-600',
      stats: { roi: '400%', timeframe: '90 days' }
    },
    {
      id: 'fortune-500-case',
      title: 'Fortune 500 AI Transformation',
      subtitle: '$50M Annual Savings in 6 Months',
      description: 'Real case study showing how a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      type: 'case-study',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      stats: { savings: '$50M', timeframe: '6 months' }
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      subtitle: 'Complete Framework for Enterprise Success',
      description: 'The definitive guide to implementing AI in enterprise environments with proven strategies for achieving 300%+ ROI.',
      url: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      icon: FileText,
      color: 'from-purple-600 to-violet-600',
      stats: { roi: '300%+', pages: '50+ pages' }
    }
  ];

  const quickStats = [
    { label: 'New Articles', value: '6+', icon: FileText, color: 'text-blue-600' },
    { label: 'Case Studies', value: '2', icon: Users, color: 'text-green-600' },
    { label: 'Implementation Guides', value: '2', icon: color: 'text-purple-600' },
    { label: 'Total ROI Mentioned', value: '8+', icon: TrendingUp, color: 'text-orange-600' }
  ];

  const currentContent = featuredContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold text-sm mb-8 shadow-lg">
            <Zap className="w-5 h-5 mr-2" />
            <span>BREAKTHROUGH CONTENT JANUARY 2026</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough insights, implementation guides, and success stories that will transform your AI journey in 2026
          </p>

          {/* Featured Content Carousel */}
          <div className="mb-16">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-5xl mx-auto">
              {/* Content Type Badge */}
              <div className="flex items-center justify-center mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                  {currentContent.type === 'blog' ? '📝 Blog Post' : 
                   currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource Guide'}
                </span>
              </div>

              {/* Content Details */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-xl text-yellow-300 font-semibold mb-4">
                  {currentContent.subtitle}
                </p>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-8 mb-8">
                {Object.entries(currentContent.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-blue-200 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link 
                  href={currentContent.url}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {currentContent.type === 'case-study' ? 'View Success Story' : 
                   currentContent.type === 'resource' ? 'Download Guide' : 'Read Article'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center">
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/case-studies"
              className="inline-flex items-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              View Success Stories
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white text-sm underline hover:no-underline transition-all duration-300"
          >
            Dismiss this promotion
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner2026;