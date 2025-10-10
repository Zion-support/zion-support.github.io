'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time processing', 'Predictive modeling', 'Custom dashboards', 'Automated reports'],
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      stats: { value: '99.9%', label: 'Accuracy' }
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your business with enterprise-grade security solutions and compliance tools.',
      features: ['24/7 monitoring', 'Threat detection', 'Compliance management', 'Incident response'],
      icon: <Shield className="w-12 h-12 text-green-400" />,
      stats: { value: '10,000+', label: 'Protected Assets' }
    },
    {
      title: 'Customer Success',
      description: 'Deliver exceptional customer experiences with our comprehensive support platform.',
      features: ['AI chatbots', 'Sentiment analysis', 'Ticket routing', 'Performance metrics'],
      icon: <Users className="w-12 h-12 text-blue-400" />,
      stats: { value: '4.9/5', label: 'Satisfaction' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Solutions
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                {currentSlideData.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{currentSlideData.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-yellow-400">{currentSlideData.stats.value}</span>
                  <span className="text-purple-100">{currentSlideData.stats.label}</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-purple-100 leading-relaxed">
              {currentSlideData.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-purple-100">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {currentSlideData.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{currentSlideData.title}</h4>
                <div className="space-y-3">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-purple-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;