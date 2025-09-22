"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentCarousel() {
  const [currentSlidesetCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI99.9% accuracyand 10,000x faster processing.',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      icon: '🚀',
      features: ['10,000% ROI'99.9% Accuracy'10,000x Faster']
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing solutions delivering quantum supremacyerror-corrected quantum computersand quantum-AI fusion.',
      href: '/quantum-computing-solutions-2025',
      badge: 'QUANTUM',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      icon: '⚛️',
      features: ['Quantum 'Supremacy', 'Error-'Corrected', 'Quantum-AI Fusion']
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions 2026',
      description: 'Revolutionary automation solutions featuring intelligent process automationautonomous decision systemsand predictive maintenance AI.',
      href: '/advanced-automation-solutions-2026',
      badge: 'AUTOMATION',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      icon: '🤖',
      features: ['15,000% 'ROI', 'Autonomous 'AI', 'Smart Resources']
    },
    {
      id: 4,
      title: 'Neural Interface Revolution 2026',
      description: 'Revolutionary neural interface technology enabling direct brain-computer communication and enhanced cognitive capabilities.',
      href: '/neural-interface-revolution-2026',
      badge: 'NEURAL',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      icon: '🧠',
      features: ['Brain-'Computer', 'Enhanced 'Cognition', 'Direct Interface']
    },
    {
      id: 5,
      title: 'Space Technology Solutions 2025',
      description: 'Revolutionary space technology solutions for interplanetary explorationsatellite optimizationand space-based AI systems.',
      href: '/space-technology-solutions-2025',
      badge: 'SPACE',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      icon: '🚀',
      features: [', 'Interplanetary', 'Satellite 'AI', 'Space Exploration']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }5000);

    return () => clearInterval(timer);
  }[contentSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content across AIquantum computingautomationand cutting-edge technologies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Card */}
          <div className={`bg-gradient-to-br ${currentContent.bgColor} rounded-2xl shadow-2xl overflow-hidden border ${currentContent.borderColor} transition-all duration-500`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{currentContent.icon}</div>
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${currentContent.color}`}>
                      {currentContent.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentContent.features.map((featureindex) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.href}
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentContent.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/content-showcase"
                    className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-white/30 transition-all duration-300"
                  >
                    View All Content
                  </Link>
                </div>
              </div>

              {/* Visual Section */}
              <div className={`bg-gradient-to-br ${currentContent.color} p-8 lg:p-12 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-8xl mb-6 opacity-80">{currentContent.icon}</div>
                  <div className="text-2xl font-bold mb-4">Revolutionary Technology</div>
                  <div className="text-lg opacity-90">Transforming the Future</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentSlides.map((_index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Access to All Content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {contentSlides.map((slideindex) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${slide.color} text-white shadow-lg scale-105`
                    : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="text-2xl mb-2">{slide.icon}</div>
                <div className="text-xs font-semibold">{slide.badge}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}