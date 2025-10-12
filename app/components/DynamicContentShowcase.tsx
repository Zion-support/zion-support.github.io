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
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business and ensure maximum uptime.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security measures to protect your data and systems from evolving threats.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive informed business decisions.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced collaboration tools that bring your team together and boost productivity.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous optimization to ensure your systems run at peak performance and efficiency.',
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Star },
    { label: 'Success Rate', value: '99%', icon: TrendingUp }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, features.length]);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentFeature = features[currentIndex];
  const IconComponent = currentFeature.icon;

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge solutions through an interactive showcase of features and capabilities.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Featured Solutions</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevFeature}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>
                <button
                  onClick={nextFeature}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentFeature.color} mb-6`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">{currentFeature.title}</h4>
                <p className="text-gray-300 text-lg mb-6">{currentFeature.description}</p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className={`inline-flex p-8 rounded-full bg-gradient-to-r ${currentFeature.color} mb-4`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-white text-lg font-semibold">Interactive Demo</p>
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <StatIcon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;