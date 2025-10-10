'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Brain, Globe } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: {
    value: string;
    label: string;
  }[];
  features: string[];
  category: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '3x', label: 'Faster Insights' },
        { value: '24/7', label: 'Monitoring' }
      ],
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards'
      ],
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern businesses.',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '50%', label: 'Cost Savings' },
        { value: '10x', label: 'Scalability' }
      ],
      features: [
        'Auto-scaling infrastructure',
        'Global CDN',
        'Disaster recovery',
        'Security compliance'
      ],
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from threats.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      stats: [
        { value: '100%', label: 'Protection' },
        { value: '0', label: 'Breaches' },
        { value: '24/7', label: 'Monitoring' }
      ],
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Compliance management'
      ],
      category: 'Security'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  const currentItem = showcaseItems[activeIndex];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dynamic Solutions Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge solutions and see how they can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {currentItem.icon}
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                  {currentItem.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {currentItem.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {currentItem.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {currentItem.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {currentItem.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Visual Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {currentItem.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{currentItem.title}</h4>
                  <p className="text-gray-300">{currentItem.category}</p>
                </div>

                <div className="space-y-4">
                  {currentItem.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
