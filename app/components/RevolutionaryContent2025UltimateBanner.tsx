'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentHighlights.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2025UltimateBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContent2025UltimateBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentHighlights[currentIndex];

  return (
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
            </div>
          </div>
        </div>

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