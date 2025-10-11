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
      title: 'Cloud-Native Architecture',
      description: 'Built for the cloud with scalability, reliability, and performance at its core.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption, compliance, and threat protection.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented have increased our efficiency by 300% and reduced costs significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The micro SAAS applications they developed for us are game-changers. Each tool solves a specific problem and integrates seamlessly with our existing systems.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Enterprises',
      content: 'Their 5G implementation services helped us stay ahead of the competition. The network performance improvements have been remarkable.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentFeature = features[currentIndex];
  const IconComponent = currentFeature.icon;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of cutting-edge technology solutions designed to transform your business
          </p>
        </div>

        {/* Dynamic Feature Showcase */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-white">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentFeature.color} flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{currentFeature.title}</h3>
                      <p className="text-gray-300 text-sm">Feature {currentIndex + 1} of {features.length}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                    {currentFeature.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                          <div className="text-gray-300 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={togglePlayPause}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>
                
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
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
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg text-gray-600">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already benefiting from our innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;