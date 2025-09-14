'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Shield, Users, Award, Clock } from 'lucide-react';

const NewContent2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  const contentHighlights = [
    {
      title: 'AI Cybersecurity Revolution',
      metric: '99.7%',
      description: 'Threat Detection Accuracy',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Healthcare AI Success',
      metric: '340%',
      description: 'ROI Achievement',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Implementation Guide',
      metric: '400%',
      description: 'ROI in 12 Months',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <Star className="w-4 h-4 text-white mr-2" />
                <span className="text-sm font-medium text-white">NEW 2025 CONTENT RELEASE</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary AI Content
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  That Drives Results
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover cutting-edge insights, proven strategies, and real-world success stories 
                that are transforming businesses across industries with unprecedented ROI.
              </p>
            </div>

            {/* Content Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contentHighlights.map((highlight, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {highlight.metric}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-white text-opacity-80">
                    {highlight.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">12+</div>
                <div className="text-white text-opacity-80">New Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-white text-opacity-80">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">340%</div>
                <div className="text-white text-opacity-80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white text-opacity-80">Client Satisfaction</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Personalized Recommendations
              </Link>
            </div>

            {/* Featured Content Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link
                href="/blog/ai-2025-cybersecurity-revolution"
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">Cybersecurity Revolution</div>
                    <div className="text-white text-opacity-80 text-sm">99.7% Threat Detection</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
              <Link
                href="/case-studies/healthcare-ai-transformation-2025-success"
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">Healthcare Success</div>
                    <div className="text-white text-opacity-80 text-sm">340% ROI Achievement</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2025"
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">Implementation Guide</div>
                    <div className="text-white text-opacity-80 text-sm">400% ROI in 12 Months</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;