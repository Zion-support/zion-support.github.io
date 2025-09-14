'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const AdvancedNeuralNetworks2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 1,
      type: 'Blog Post',
      title: 'AI 2025: Advanced Neural Networks Enterprise Breakthrough',
      subtitle: '1,800% ROI Revolution',
      description: 'Discover how advanced neural networks are achieving unprecedented enterprise performance with 1,800% ROI in 18 months.',
      link: '/blog/ai-2025-advanced-neural-networks-breakthrough',
      metrics: {
        roi: '1,800%',
        savings: '$4.2M annually',
        accuracy: '99.7%',
        speed: '98% faster'
      },
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 2,
      type: 'Case Study',
      title: 'Fortune 500 Neural Networks Success Story',
      subtitle: '$4.2B Annual Savings',
      description: 'How a Fortune 500 company achieved $4.2B in annual savings with advanced neural network implementation.',
      link: '/case-studies/ai-2025-neural-networks-fortune-500-success',
      metrics: {
        roi: '1,800%',
        savings: '$4.2B annually',
        efficiency: '90% improvement',
        satisfaction: '99.7%'
      },
      gradient: 'from-green-600 via-teal-600 to-blue-600'
    },
    {
      id: 3,
      type: 'Implementation Guide',
      title: 'Neural Networks Implementation Guide',
      subtitle: 'Complete Roadmap to 1,800% ROI',
      description: 'Proven roadmap for deploying advanced neural networks with 1,800% ROI in 18 months.',
      link: '/resources/ai-2025-neural-networks-implementation-guide',
      metrics: {
        roi: '1,800%',
        payback: '7.2 months',
        accuracy: '99.7%',
        uptime: '99.9%'
      },
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('advanced-neural-networks-2025-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('advanced-neural-networks-2025-banner-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentPieces.length) % contentPieces.length);
  };

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className={`relative bg-gradient-to-r ${currentContent.gradient} text-white py-8 px-4 overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white bg-opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-white bg-opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white bg-opacity-5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 NEW CONTENT 2025
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              FEATURED
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Dismiss banner"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Content Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                {currentContent.type}
              </span>
              <span className="text-sm opacity-90">• New Release</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              {currentContent.title}
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-yellow-200">
              {currentContent.subtitle}
            </h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-200">{value}</div>
                  <div className="text-sm opacity-90 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full {currentContent.type}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Navigation and Progress */}
          <div className="lg:col-span-1">
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Advanced Neural Networks Collection</h4>
              <p className="text-sm opacity-90 mb-6">
                Explore our comprehensive collection of advanced neural networks content featuring real-world success stories and implementation guides.
              </p>
              
              {/* Progress Indicators */}
              <div className="flex space-x-2 mb-4">
                {contentPieces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-2'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={prevSlide}
                  className="bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <span className="flex items-center text-sm">
                  {currentSlide + 1} of {contentPieces.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedNeuralNetworks2025Banner;