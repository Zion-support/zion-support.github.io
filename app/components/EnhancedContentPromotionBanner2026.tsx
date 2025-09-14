import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Calculator, FileText, Users, Star, Clock, DollarSign, Target } from 'lucide-react';

const EnhancedContentPromotionBanner2026 = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: Enterprise Automation Breakthrough',
      subtitle: '400% ROI in 90 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented returns through next-generation AI automation systems.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-100',
      link: '/blog/ai-2026-enterprise-automation-breakthrough',
      metrics: { roi: '400%', timeframe: '90 Days' }
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation',
      subtitle: '$50M Annual Savings in 6 Months',
      description: 'Real case study showing how a Fortune 500 company achieved massive cost savings through comprehensive AI transformation.',
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-100',
      link: '/case-studies/fortune-500-ai-transformation-2026',
      metrics: { savings: '$50M', timeframe: '6 Months' }
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      subtitle: 'From Strategy to 400% ROI',
      description: 'The definitive step-by-step framework for successful AI implementation with proven strategies and real-world examples.',
      icon: Target,
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-100',
      link: '/resources/ai-implementation-master-guide-2026',
      metrics: { roi: '400%', pages: '50+' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = featuredContent[currentContent];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8 shadow-lg">
            <Zap className="w-5 h-5 text-white mr-2" />
            <span className="text-white text-sm font-bold">BREAKTHROUGH CONTENT 2026</span>
            <Star className="w-4 h-4 text-white ml-2" />
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough insights, implementation guides, and success stories that will transform your AI journey in 2026
          </p>

          {/* Featured Content Carousel */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <currentItem.icon className={`w-12 h-12 ${currentItem.textColor} mr-4`} />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentItem.title}</h3>
                  <p className={`text-lg font-semibold ${currentItem.textColor}`}>{currentItem.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-200 text-lg mb-6 max-w-3xl mx-auto">
                {currentItem.description}
              </p>

              {/* Metrics */}
              <div className="flex justify-center gap-8 mb-8">
                {Object.entries(currentItem.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-300 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <Link 
                href={currentItem.link}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Blog Posts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <FileText className="w-10 h-10 text-blue-300 mr-4" />
                <h3 className="text-white font-bold text-xl">Latest Blog Posts</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-white font-semibold mb-1">AI 2026 Enterprise Automation</h4>
                  <p className="text-gray-300 text-sm">400% ROI breakthrough strategies</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-white font-semibold mb-1">Autonomous Systems Revolution</h4>
                  <p className="text-gray-300 text-sm">Next-generation AI systems</p>
                </div>
              </div>
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium mt-4 group-hover:translate-x-1 transition-transform"
              >
                View All Posts
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <Users className="w-10 h-10 text-green-300 mr-4" />
                <h3 className="text-white font-bold text-xl">Success Stories</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-white font-semibold mb-1">Fortune 500 Transformation</h4>
                  <p className="text-gray-300 text-sm">$50M savings in 6 months</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-white font-semibold mb-1">Global Enterprise Success</h4>
                  <p className="text-gray-300 text-sm">$2.8B ultimate success story</p>
                </div>
              </div>
              <Link 
                href="/case-studies"
                className="inline-flex items-center text-green-300 hover:text-green-200 font-medium mt-4 group-hover:translate-x-1 transition-transform"
              >
                View All Cases
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-purple-300 mr-4" />
                <h3 className="text-white font-bold text-xl">Implementation Guides</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-white font-semibold mb-1">AI Implementation Master Guide</h4>
                  <p className="text-gray-300 text-sm">Step-by-step framework</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="text-white font-semibold mb-1">Autonomous Systems Guide</h4>
                  <p className="text-gray-300 text-sm">Implementation best practices</p>
                </div>
              </div>
              <Link 
                href="/resources"
                className="inline-flex items-center text-purple-300 hover:text-purple-200 font-medium mt-4 group-hover:translate-x-1 transition-transform"
              >
                View All Resources
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/blog"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Explore All Content
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get Expert Consultation
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">6+</div>
              <div className="text-gray-300 text-sm">New Content Pieces</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">400%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">25K+</div>
              <div className="text-gray-300 text-sm">Words of Content</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">$50M+</div>
              <div className="text-gray-300 text-sm">Proven Savings</div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner2026;