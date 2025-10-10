'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcaseItems = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      image: '/images/showcase/analytics-dashboard.jpg',
      category: 'Analytics',
      rating: 4.9,
      users: '10K+',
      features: ['Real-time Data', 'Predictive Analytics', 'Custom Reports', 'Mobile App']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions with automated scaling and security monitoring.',
      image: '/images/showcase/cloud-management.jpg',
      category: 'Cloud',
      rating: 4.8,
      users: '5K+',
      features: ['Auto Scaling', 'Security Monitoring', 'Cost Optimization', 'Multi-Cloud']
    },
    {
      id: 3,
      title: 'Customer Support Automation',
      description: 'Intelligent chatbot system with natural language processing and sentiment analysis.',
      image: '/images/showcase/support-automation.jpg',
      category: 'AI',
      rating: 4.9,
      users: '15K+',
      features: ['NLP Processing', 'Sentiment Analysis', 'Multi-language', 'Integration APIs']
    },
    {
      id: 4,
      title: 'Data Visualization Platform',
      description: 'Interactive data visualization tools with drag-and-drop interface and real-time updates.',
      image: '/images/showcase/data-viz.jpg',
      category: 'Visualization',
      rating: 4.7,
      users: '8K+',
      features: ['Drag & Drop', 'Real-time Updates', 'Custom Charts', 'Export Options']
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, showcaseItems.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetShowcase = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const currentItem = showcaseItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dynamic <span className="text-cyan-400">Showcase</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Experience our solutions in action. See how our technology transforms businesses.
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={resetShowcase}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white hover:bg-white/20 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-96 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-sm font-semibold rounded-full">
                    {currentItem.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{currentItem.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm">{currentItem.users} users</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{currentItem.title}</h3>
                <p className="text-gray-300 mb-6">{currentItem.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                  Explore Solution
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300">Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100K+</div>
            <div className="text-gray-300">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;