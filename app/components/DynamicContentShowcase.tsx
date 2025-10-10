'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap, Shield, Brain, Globe } from 'lucide-react';

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  stats: {
    value: string;
    label: string;
  }[];
  icon: React.ComponentType<any>;
  color: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform that processes millions of data points in real-time.',
      category: 'Analytics',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '10x', label: 'Faster Insights' },
        { value: '24/7', label: 'Monitoring' }
      ],
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions with AI-powered threat detection and automated response systems.',
      category: 'Security',
      features: [
        'Threat detection',
        'Automated response',
        'Compliance monitoring',
        'Security analytics'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 1s', label: 'Response Time' },
        { value: '0', label: 'Breaches' }
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Manager',
      description: 'Optimize your cloud resources with intelligent automation and cost optimization features.',
      category: 'Infrastructure',
      features: [
        'Auto-scaling',
        'Cost optimization',
        'Performance monitoring',
        'Resource management'
      ],
      stats: [
        { value: '40%', label: 'Cost Savings' },
        { value: '99.99%', label: 'Reliability' },
        { value: '50+', label: 'Regions' }
      ],
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % showcaseItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  const currentShowcase = showcaseItems[currentItem];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our most popular and innovative solutions that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${currentShowcase.color} rounded-full flex items-center justify-center`}>
                <currentShowcase.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  {currentShowcase.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentShowcase.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {currentShowcase.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {currentShowcase.stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {currentShowcase.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Explore Solution
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentItem(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentItem
                  ? 'bg-cyan-500 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;