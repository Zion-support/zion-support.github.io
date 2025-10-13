import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
      description: 'Lightning-fast processing and real-time analytics for optimal results'
      description: 'Bank-level security with encryption and compliance standards'
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, ChevronLeft, ChevronRight}}from 'lucide-react';
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react';
import React from 'react';

const ContentCarousel: React.FC = React.memo((props) => {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
'use client';
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, ChevronLeft, ChevronRight}}from 'lucide-react';
import { Cloud, Zap, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {,
'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';
interface Slide {
  icon: React.ComponentType<any>
}
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
};
const ContentCarousel: React.FC = () => {
}
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [,
        'Machine Learning Models',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
      icon: Zap,
      color: 'from-cyan-500 to-blue-600'
      color: 'from-purple-500 to-pink-600'
      color: 'from-orange-500 to-red-600',},
    {id: 4,
      color: 'from-red-500 to-orange-600'
      color: 'from-blue-500 to-indigo-600',}];
  ];
      color: 'from-purple-500 to-pink-600'
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Zap,
      color: 'from-blue-500 to-purple-600'
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      icon: Zap,
      color: 'from-cyan-500 to-blue-600'
];
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [,
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [,
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'from-orange-500 to-red-600',},
    {id: 4,
      color: 'from-green-500 to-blue-600'
      color: 'from-orange-500 to-red-600'
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [,
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',}];
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
    }
  ];
      color: 'from-red-500 to-pink-600'
    }
  ];
      color: 'from-red-500 to-orange-600'
    }
  ];

  useEffect(() => {];];
    const timer = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {setCurrentSlide((prev) => (prev + 1) % slides.length);};

  const prevSlide = () => {setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);};

  return(<div className="relative w-full max-w-6xl mx-auto">)</div>
      <div className="overflow-hidden rounded-2xl">
        <div;
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100,)}%)` }}
        >{slides.map((slide) => (</div>
            <div key={slide.id}className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color}p-8 md: p-12 text-white`,}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <slide.icon className="h-12 w-12" />
  ];
  const nextSlide = () => {
}
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
}
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentSlideData = slides[currentSlide];
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content Spotlight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular and impactful content that's transforming enterprises worldwide
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel content */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image/Visual section */}
              <div className="relative h-64 lg:h-96 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">{currentItem.image}</div>
                  <div className="text-2xl font-bold mb-2">{currentItem.category}</div>
                  <div className="text-lg opacity-90">{currentItem.readTime}</div>
                </div>
                
                {/* Stats overlay */}
                {currentItem.stats && (
                  <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {formatNumber(currentItem.stats.views)}
                      </div>
                      <div className="text-sm text-white opacity-90">views</div>
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-r ${slide.color} text-white p-8 md:p-12`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <slide.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{slide.title}</h3>
          <div className="overflow-hidden rounded-2xl">
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge AI and IT solutions that drive real business results

          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">

            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-white/5 backdrop-blur-lg p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <slide.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))};
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))};
                  </div>
                )};
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-5 h-5" />
                    Get Started
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                  </button>
                </div>
              </div>
              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <currentSlideData .icon className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">{slide.title}</h3>
                    <p className="text-xl text-gray-300 mb-8">{slide.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {slide.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <slide.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6">
                      {slide.description}
                    </p>
                    <ul className="space-y-3">
                      {slide.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:block">
                    <div className={`w-full h-64 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center`}>
                      <slide.icon className="w-32 h-32 text-white opacity-20" />
                    </div>
                    <p className="text-lg md:text-xl text-white/90 mb-6">
                      {slide.description}
                    </p>
                    <ul className="space-y-2">
                      {slide.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="text-3xl md: text-4xl font-bold text-center mb-4">,</h2>
                    {slide.title} </h2>
                  <p className="text-xl text-center mb-8 text-white/90">{slide.description</p>} </p>
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,</div>
                    {slide.features.map((feature, index) => (
                      <div key={index}className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature</span>}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden lg:block">
                    <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${slide.color} opacity-20`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */} <button;
        onClick={prevSlide}className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-2 rounded-full transition-all duration-300",
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button;
        onClick={nextSlide}className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-2 rounded-full transition-all duration-300",
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots indicator */} <div className="flex justify-center mt-6 space-x-2">{slides.map((_, index) => (</div>
          <button;
            key={index}onClick={() =>setCurrentSlide(index)</button>}className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
  );
});

export default ContentCarousel;
      description: 'Worldwide deployment and support for international businesses'
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentCarousel | Zion Tech Group</title>
        <meta name="description" content="Professional ContentCarousel services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentCarousel, AI solutions, IT services, Zion Tech Group, contentcarousel" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentCarousel
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentcarousel solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentCarousel?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentcarousel solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our contentcarousel solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentcarousel needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index</div>
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
      </div>
    </div>
  );
};
export default ContentCarousel;
