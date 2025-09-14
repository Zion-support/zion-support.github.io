'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Brain, Eye, Mic, Video, Zap } from 'lucide-react';

const NewContent2025MultimodalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 'multimodal-intelligence',
      title: 'AI 2025: The Multimodal Intelligence Revolution',
      description: 'Discover how multimodal AI is transforming enterprise operations with 750% ROI, combining text, image, audio, and video processing.',
      url: '/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        accuracy: '99.7%',
        productivity: '156%'
      },
      icon: Brain,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'federated-learning',
      title: 'Federated Learning Enterprise Privacy Breakthrough',
      description: 'Achieve 650% ROI with zero data compromise using privacy-preserving federated learning across enterprise networks.',
      url: '/blog/ai-2025-federated-learning-enterprise-privacy-breakthrough',
      type: 'blog',
      metrics: {
        roi: '650%',
        savings: '$3.8M',
        privacy: '100%',
        compliance: '100%'
      },
      icon: Eye,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'edge-computing',
      title: 'The Edge Computing Revolution - Ultimate Guide',
      description: 'Transform enterprise AI with 450% ROI, reducing latency by 67% and cutting costs by 89% through distributed intelligence.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '450%',
        savings: '$2.3M',
        latency: '67%',
        uptime: '99.7%'
      },
      icon: Zap,
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('multimodal-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('multimodal-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <Brain className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-300">
              <span>Multimodal AI</span>
              <span>•</span>
              <span>Federated Learning</span>
              <span>•</span>
              <span>Edge Computing</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content for 2025
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the latest breakthroughs in multimodal intelligence, 
                federated learning, and edge computing that are transforming 
                enterprise operations with unprecedented ROI.
              </p>
            </div>

            {/* Current content highlight */}
            <div className={`bg-gradient-to-r ${currentContent.color} p-6 rounded-2xl shadow-2xl`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <currentContent.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium bg-white bg-opacity-20 rounded-full px-3 py-1">
                      {currentContent.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-white text-opacity-80">NEW</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{currentContent.title}</h3>
                  <p className="text-white text-opacity-90 mb-4">{currentContent.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(currentContent.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-xs text-white text-opacity-70 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {newContent.map((content, index) => (
              <div
                key={content.id}
                className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-white ring-opacity-50' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-start space-x-3">
                  <content.icon className={`w-6 h-6 text-${content.color.split('-')[1]}-400 flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 line-clamp-2">{content.title}</h4>
                    <div className="text-xs text-gray-300 mb-2">
                      {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                        <span key={key} className="mr-3">
                          {value} {key.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-white text-opacity-60">
                      {content.type.toUpperCase()} • NEW
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Get Custom Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025MultimodalBanner;