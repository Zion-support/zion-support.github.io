'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap, Shield, Cloud } from 'lucide-react';

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
  color: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: TrendingUp,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Machine learning models',
        'Data visualization'
      ],
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '10x', label: 'Faster' },
        { value: '24/7', label: 'Monitoring' }
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business.',
      icon: Cloud,
      features: [
        'Auto-scaling',
        'Multi-cloud support',
        'Disaster recovery',
        'Security compliance',
        'Cost optimization',
        'Global CDN'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '50%', label: 'Cost Savings' },
        { value: '10x', label: 'Performance' }
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: Shield,
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Compliance management',
        'Security training',
        '24/7 monitoring'
      ],
      stats: [
        { value: '100%', label: 'Protection' },
        { value: '0', label: 'Breaches' },
        { value: 'SOC2', label: 'Compliant' }
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = showcaseItems[activeItem];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge solutions through interactive demonstrations and real-time examples.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 bg-gradient-to-r ${currentItem.color} rounded-full flex items-center justify-center`}>
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
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentItem.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {currentItem.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Try Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className={`aspect-square bg-gradient-to-br ${currentItem.color} bg-opacity-20 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
              <div className="text-center z-10">
                <div className={`w-32 h-32 bg-gradient-to-r ${currentItem.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <currentItem.icon className="w-16 h-16 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {currentItem.title}
                </div>
                <div className="text-gray-300">
                  Solution {activeItem + 1} of {showcaseItems.length}
                </div>
              </div>
              
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-16">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeItem
                  ? 'bg-purple-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Optimized for speed and performance</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
            <p className="text-gray-300">Enterprise-grade security and compliance</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Scalable</h3>
            <p className="text-gray-300">Grows with your business needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;