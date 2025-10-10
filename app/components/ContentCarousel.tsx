'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      features: [
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making',
        'Intelligent Automation'
      ],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '3x', label: 'Faster Processing' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your data and infrastructure with advanced cybersecurity solutions and compliance frameworks.',
      features: [
        'Zero-Trust Architecture',
        'Advanced Threat Detection',
        'Compliance Management',
        '24/7 Security Monitoring'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '0', label: 'Security Breaches' }
      ]
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions that grow with your business needs.',
      features: [
        'Multi-Cloud Strategy',
        'Auto-Scaling',
        'Global CDN',
        'Disaster Recovery'
      ],
      stats: [
        { value: '50+', label: 'Global Regions' },
        { value: '99.99%', label: 'Availability' }
      ]
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
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and technology solutions designed to drive your business forward.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{currentSlideData.title}</h3>
                    <p className="text-blue-100">{currentSlideData.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 mb-6">
                  {currentSlideData.stats?.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-white/80 text-sm mb-4">
                  Slide {currentSlide + 1} of {slides.length}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center gap-3 text-white">
            <Star className="w-6 h-6 text-yellow-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-gray-400 text-sm">Customer Rating</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-white">
            <Users className="w-6 h-6 text-blue-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-white">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-white">
            <Zap className="w-6 h-6 text-purple-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;