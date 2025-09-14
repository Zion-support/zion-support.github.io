'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, TrendingUp, Zap, Award, CheckCircle } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPieces = [
    {
      id: 'autonomous-business-revolution',
      title: 'AI 2025: The Autonomous Business Revolution - Ultimate Guide',
      description: 'Discover how Fortune 500 companies achieve 500% ROI through autonomous business systems. Complete implementation guide.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$180M',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Transformation: 500% ROI Success Story',
      description: 'Real case study of a $2.8B company achieving 500% ROI and $180M annual savings in 12 months.',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi',
      metrics: {
        roi: '500%',
        savings: '$180M',
        timeline: '12 months',
        efficiency: '340%'
      },
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'AI Autonomous Implementation Guide 2025: From Strategy to 500% ROI',
      description: 'Complete step-by-step guide to implementing autonomous business systems with proven frameworks and tools.',
      type: 'resource',
      url: '/resources/ai-autonomous-implementation-guide-2025',
      metrics: {
        roi: '500%',
        timeline: '18 months',
        success: '98%',
        savings: '89%'
      },
      readingTime: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">🚀 Revolutionary AI Content 2025</h2>
                <p className="text-blue-100 text-sm">New Ultimate Guides & Success Stories</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Showcase */}
            <div className="lg:col-span-2">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-300 fill-current" />
                    <span className="text-sm font-medium text-yellow-100">FEATURED</span>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {currentContent.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-blue-100">
                    {currentSlide + 1} of {contentPieces.length}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-300">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-blue-100">ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-300">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-blue-100">Savings</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-300">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                    <div className="text-xs text-blue-100">Efficiency</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-yellow-300">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                    <div className="text-xs text-blue-100">Success</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-blue-100">{currentContent.readingTime}</span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-300" />
                      <span className="text-sm text-green-300">Verified Results</span>
                    </div>
                  </div>
                  <Link
                    href={currentContent.url}
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {contentPieces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Success Statistics */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Proven Results
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Average ROI</span>
                    <span className="text-green-300 font-bold">500%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Cost Reduction</span>
                    <span className="text-blue-300 font-bold">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Efficiency Gain</span>
                    <span className="text-purple-300 font-bold">340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Client Satisfaction</span>
                    <span className="text-yellow-300 font-bold">98%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Get Started
                </h4>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block bg-white text-purple-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Free Consultation
                  </Link>
                  <Link
                    href="/resources"
                    className="block bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                  >
                    View All Resources
                  </Link>
                  <Link
                    href="/case-studies"
                    className="block bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                  >
                    Success Stories
                  </Link>
                </div>
              </div>

              {/* Featured Content */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <h4 className="text-lg font-bold mb-4">Featured Content</h4>
                <div className="space-y-3">
                  {contentPieces.slice(0, 2).map((content) => (
                    <Link
                      key={content.id}
                      href={content.url}
                      className="block p-3 bg-white bg-opacity-5 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                      <div className="text-sm font-medium text-white mb-1">
                        {content.title.substring(0, 60)}...
                      </div>
                      <div className="text-xs text-blue-100">
                        {content.readingTime} • {content.type}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-blue-100 mb-4">
              Join 500+ companies achieving 500% ROI with autonomous business systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2025UltimateBanner;