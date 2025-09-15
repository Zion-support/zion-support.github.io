'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const UltimateContent2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentHighlights = [
    {
      title: "AI 2025: Advanced Automation Revolution",
      description: "500% ROI with $2.8B annual savings",
      metrics: "99.9% uptime, 95% efficiency",
      type: "blog",
      readingTime: "22 min read",
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      description: "700% ROI and $3.2B annual savings",
      metrics: "18 months implementation",
      type: "case-study",
      readingTime: "25 min read",
      url: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success"
    },
    {
      title: "AI Transformation Master Guide 2025",
      description: "Complete implementation framework",
      metrics: "Proven 700% ROI strategies",
      type: "resource",
      readingTime: "35 min read",
      url: "/resources/ai-transformation-master-guide-2025-ultimate-edition"
    }
  ];

  const stats = [
    { label: "Average ROI", value: "700%", icon: TrendingUp },
    { label: "Annual Savings", value: "$3.2B", icon: Award },
    { label: "Success Rate", value: "94%", icon: CheckCircle },
    { label: "Implementation Time", value: "18 months", icon: Clock }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentHighlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 NEW 2025 ULTIMATE CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI Transformation Mastery
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the proven strategies that delivered <span className="font-bold text-yellow-300">700% ROI</span> and 
            <span className="font-bold text-green-300"> $3.2B in annual savings</span> for Fortune 500 companies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Featured Content</h3>
          
        {/* Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Featured Content</h3>
          
          {/* Auto-rotating content */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentHighlights.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {content.type.toUpperCase()}
                        </div>
                        <div className="flex items-center text-blue-200 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {content.readingTime}
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="ml-1 text-sm font-medium">Featured</span>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-3">{content.title}</h4>
                    <p className="text-blue-100 mb-4 text-lg">{content.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-green-300 font-semibold">{content.metrics}</div>
                      <Link 
                        href={content.url}
                        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {contentHighlights.map((_, index) => (
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
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg mb-6 inline-block">
            🎯 Limited Time: Get Your Free AI Transformation Assessment
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200 flex items-center justify-center group"
            >
              <Award className="w-5 h-5 mr-2" />
              View All Resources
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default UltimateContent2025PromotionBanner;
export default UltimateContent2025PromotionBanner;
