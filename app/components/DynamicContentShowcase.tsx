'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your data with military-grade security and compliance standards.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scale effortlessly with our robust cloud infrastructure and global CDN.',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Monitor your systems in real-time with comprehensive dashboards and alerts.',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions are game-changing.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'Outstanding support and cutting-edge technology. Highly recommended for any business.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'The automation tools saved us 40 hours per week. Incredible ROI and efficiency gains.',
      avatar: 'ER'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 3000);
    }
    return () => clearInterval(interval);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dynamic Content Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge solutions through interactive demonstrations and real-world examples.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Featured Solutions</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevFeature}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>
                <button
                  onClick={nextFeature}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentFeature.color}`}>
                  <currentFeature.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{currentFeature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {currentFeature.description}
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Demo
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-5/6"></div>
                    <div className="h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Feature Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;