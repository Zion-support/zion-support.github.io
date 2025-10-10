'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Star, Users, TrendingUp, Shield, Brain, Zap, Globe } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const DynamicContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology',
      icon: Brain,
      category: 'AI',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure for modern businesses',
      icon: Globe,
      category: 'Cloud',
      features: ['Auto-scaling', 'Global CDN', 'Security', 'Monitoring'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '50+', label: 'Countries' }
      ]
    },
    {
      id: 'performance',
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      icon: Zap,
      category: 'Performance',
      features: ['Real-time Processing', 'Optimized Performance', 'Low Latency', 'Scalable Architecture'],
      stats: [
        { value: '10M+', label: 'Requests/Day' },
        { value: '< 50ms', label: 'Latency' },
        { value: '99.9%', label: 'Reliability' }
      ]
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      icon: Shield,
      category: 'Security',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Breaches' }
      ]
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Performance', 'Security'];

  const filteredItems = contentItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredItems.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Content Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of solutions designed to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>

        {/* Content Display */}
        {currentItem && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <currentItem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentItem.title}
                    </h3>
                    <p className="text-gray-300">
                      {currentItem.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentItem.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              {/* Right Column - Stats */}
              <div className="lg:pl-8">
                <h4 className="text-lg font-semibold text-white mb-6">Performance Metrics:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentItem.stats?.map((stat, index) => (
                    <div key={index} className="text-center bg-slate-700/50 rounded-lg p-4">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {filteredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;