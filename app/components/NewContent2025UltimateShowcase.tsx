'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Clock, ArrowRight, X, Play, BookOpen, FileText } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      id: 'edge-computing-revolution',
      type: 'blog',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI',
      description: 'Discover how edge computing is revolutionizing AI deployment in 2025, delivering 450% ROI through reduced latency, enhanced security, and massive cost savings.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      metrics: {
        roi: '450%',
        latency: '67% reduction',
        savings: '$2.3M annually',
        uptime: '99.7%'
      },
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency'],
      readingTime: '18 min read',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'sustainable-technology-revolution',
      type: 'blog',
      title: 'AI 2025: The Sustainable Technology Revolution - 380% ROI Through Green AI',
      description: 'Discover how sustainable AI technologies are driving 380% ROI while reducing carbon footprints by 67% and creating environmentally responsible business operations.',
      url: '/blog/ai-2025-sustainable-technology-revolution',
      metrics: {
        roi: '380%',
        carbon: '67% reduction',
        savings: '$3.2M annually',
        esg: '94% improvement'
      },
      tags: ['Sustainable AI', 'Green Technology', 'ESG', 'ROI'],
      readingTime: '16 min read',
      icon: Star,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'financial-services-transformation',
      type: 'case-study',
      title: 'AI 2025 Financial Services Transformation: $850M Company Achieves 520% ROI',
      description: 'Discover how a leading financial services company transformed operations with AI, achieving 520% ROI, $67M annual savings, and 99.8% customer satisfaction.',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      metrics: {
        roi: '520%',
        savings: '$67M annually',
        satisfaction: '99.8%',
        efficiency: '89% improvement'
      },
      tags: ['Financial Services', 'Banking', 'ROI', 'Transformation'],
      readingTime: '20 min read',
      icon: Users,
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      id: 'implementation-ultimate-roadmap',
      type: 'resource',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 600% ROI in 12 Months',
      description: 'The complete guide to AI implementation in 2025, featuring proven strategies, frameworks, and methodologies that deliver 600% ROI within 12 months.',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      metrics: {
        roi: '600%',
        success: '89% rate',
        savings: '$4.2M annually',
        speed: '78% faster'
      },
      tags: ['Implementation', 'Strategy', 'ROI', 'Framework'],
      readingTime: '35 min read',
      icon: BookOpen,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [newContent.length]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateShowcase_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateShowcase_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 CONTENT ULTIMATE SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI insights, case studies, and implementation guides delivering 
            <span className="font-bold text-yellow-300"> 380-600% ROI</span> across industries
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.gradient}`}>
                    <currentContent.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30">
                      {currentContent.type === 'blog' && <FileText className="w-3 h-3 mr-1" />}
                      {currentContent.type === 'case-study' && <Users className="w-3 h-3 mr-1" />}
                      {currentContent.type === 'resource' && <BookOpen className="w-3 h-3 mr-1" />}
                      {currentContent.type.toUpperCase()}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-blue-100 text-lg leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-yellow-300">{value}</div>
                      <div className="text-sm text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentContent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-200 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Read Full Content
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${currentContent.gradient} mb-6`}>
                      <currentContent.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-yellow-300">
                        {currentContent.metrics.roi}
                      </div>
                      <div className="text-lg text-blue-200">Average ROI</div>
                      <div className="flex items-center justify-center text-sm text-blue-300">
                        <Clock className="w-4 h-4 mr-1" />
                        {currentContent.readingTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-white/20 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full transition-all duration-1000"
              style={{ width: `${((currentSlide + 1) / newContent.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">4</div>
            <div className="text-blue-200">New Content Pieces</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">380-600%</div>
            <div className="text-blue-200">ROI Range</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">$2.3M+</div>
            <div className="text-blue-200">Average Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">99.7%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcase;