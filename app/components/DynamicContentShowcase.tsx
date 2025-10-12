'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Star,
      title: 'Advanced Analytics',
      description: 'Gain deep insights into your business performance with our cutting-edge analytics platform.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance productivity with seamless collaboration tools designed for modern teams.',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Accelerate your business growth with data-driven strategies and optimization tools.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your data with enterprise-grade security measures and compliance standards.',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scale effortlessly with our robust cloud infrastructure and global CDN network.',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1000+', icon: CheckCircle },
    { label: 'Years Experience', value: '10+', icon: Star },
    { label: 'Team Members', value: '50+', icon: BarChart3 }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, features.length]);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentFeature = features[currentIndex];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic Content
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our interactive platform with real-time updates and dynamic content that adapts to your needs.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Featured Capabilities</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevFeature}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>
                <button
                  onClick={nextFeature}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentFeature.color} flex items-center justify-center`}>
                  <currentFeature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white">
                  {currentFeature.title}
                </h4>
                <p className="text-lg text-gray-300">
                  {currentFeature.description}
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${currentFeature.color} flex items-center justify-center mx-auto mb-4`}>
                      <currentFeature.icon className="w-12 h-12 text-white" />
                    </div>
                    <h5 className="text-xl font-semibold text-white mb-2">
                      {currentFeature.title}
                    </h5>
                    <p className="text-gray-400">
                      Interactive Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Dynamic Content?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our dynamic content platform can transform your user experience and drive engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;