'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Zap, Shield, Cloud, BarChart3, Users, Target, CheckCircle } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      ico: n: Zap,
      titl: e: 'AI-Powered Solutions',
      descriptio: n: 'Transform your business with cutting-edge artificial intelligence that automates processes and drives innovation.',
      feature: s: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      colo: r: 'from-yellow-400 to-orange-500'
    },
    {
      ico: n: Cloud,
      titl: e: 'Cloud Infrastructure',
      descriptio: n: 'Scalable, secure, and reliable cloud solutions that grow with your business needs.',
      feature: s: ['Auto-scaling', 'High Availability', 'Disaster Recovery', 'Global CDN'],
      colo: r: 'from-blue-400 to-cyan-500'
    },
    {
      ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Bank-level security with advanced encryption, compliance, and threat protection.',
      feature: s: ['End-to-End Encryption', 'Multi-Factor Authentication', 'Compliance Standards', 'Threat Detection'],
      colo: r: 'from-green-400 to-emerald-500'
    },
    {
      ico: n: BarChart3,
      titl: e: 'Analytics & Insights',
      descriptio: n: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      feature: s: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Modeling'],
      colo: r: 'from-purple-400 to-pink-500'
    },
    {
      ico: n: Users,
      titl: e: 'Team Collaboration',
      descriptio: n: 'Enhance productivity with tools that connect your team and streamline workflows.',
      feature: s: ['Project Management', 'Communication Tools', 'File Sharing', 'Task Automation'],
      colo: r: 'from-indigo-400 to-blue-500'
    },
    {
      ico: n: Target,
      titl: e: 'Custom Development',
      descriptio: n: 'Tailored solutions designed specifically for your unique business requirements.',
      feature: s: ['Custom Applications', 'API Integration', 'Legacy Modernization', 'Mobile Development'],
      colo: r: 'from-red-400 to-pink-500'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
    
    return () => {
      // No cleanup needed when not playing
    };
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (inde: x: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl: md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          >

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8: md:p-12 border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1: lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentSlideData.color} rounded-xl flex items-center justify-center`}>
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300">
                      {currentSlideData.description}
                    >

                <div className="space-y-3">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300">
                    Get Started
                  >

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${currentSlideData.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </div>
                    <div className="text-gray-300">
                      Slide {currentSlide + 1} of {slides.length}
                    </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10: hover:bg-white/20 text-white rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 bg-white/10: hover:bg-white/20 text-white rounded-full transition-colors duration-200"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10: hover:bg-white/20 text-white rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            >
      >
      >
      >
      >
      >

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
  );
};

export default ContentCarousel;