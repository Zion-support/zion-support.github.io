'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, TrendingUp } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    company: string;
    rating: number;
  };
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      subtitle: 'Transform Data into Insights',
      description: 'Leverage advanced AI algorithms to analyze your business data and uncover actionable insights that drive growth and efficiency.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Machine learning models'
      ],
      image: '/images/carousel/ai-analytics.jpg',
      stats: [
        { value: '85%', label: 'Faster Insights' },
        { value: '60%', label: 'Cost Reduction' },
        { value: '99%', label: 'Accuracy Rate' }
      ],
      testimonial: {
        text: 'The AI analytics platform has revolutionized how we understand our business data.',
        author: 'Sarah Johnson',
        company: 'DataCorp Solutions',
        rating: 5
      }
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable & Secure Solutions',
      description: 'Build and deploy robust cloud infrastructure that scales with your business while maintaining enterprise-grade security.',
      features: [
        'Auto-scaling capabilities',
        'Multi-cloud deployment',
        'Advanced security protocols',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      image: '/images/carousel/cloud-infrastructure.jpg',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '50%', label: 'Cost Savings' },
        { value: '3x', label: 'Faster Deployment' }
      ],
      testimonial: {
        text: 'Our cloud infrastructure has never been more reliable and cost-effective.',
        author: 'Michael Chen',
        company: 'CloudTech Inc.',
        rating: 5
      }
    },
    {
      id: 3,
      title: 'Cybersecurity Suite',
      subtitle: 'Protect Your Digital Assets',
      description: 'Comprehensive cybersecurity solutions that protect your business from evolving threats with advanced detection and response capabilities.',
      features: [
        'Threat detection & response',
        'Vulnerability assessment',
        'Compliance management',
        'Security training',
        'Incident response'
      ],
      image: '/images/carousel/cybersecurity.jpg',
      stats: [
        { value: 'Zero', label: 'Security Breaches' },
        { value: '95%', label: 'Threat Detection' },
        { value: '24/7', label: 'Monitoring' }
      ],
      testimonial: {
        text: 'The cybersecurity suite gives us peace of mind knowing our data is protected.',
        author: 'Emily Rodriguez',
        company: 'SecureData Ltd.',
        rating: 5
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-xl text-blue-400 mb-4">
                    {currentSlideData.subtitle}
                  </p>
                  <p className="text-gray-300 text-lg">
                    {currentSlideData.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {currentSlideData.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {currentSlideData.testimonial && (
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="flex items-center mb-3">
                      {[...Array(currentSlideData.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-3">
                      "{currentSlideData.testimonial.text}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-white">
                        {currentSlideData.testimonial.author}
                      </div>
                      <div className="text-gray-400">
                        {currentSlideData.testimonial.company}
                      </div>
                    </div>
                  </div>
                )}

                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;