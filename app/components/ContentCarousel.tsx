<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentCarouselPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, ChevronLeft, ChevronRight}}from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react';
>>>>>>> origin/main
=======
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
>>>>>>> main
=======

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
>>>>>>> origin/main

const ContentCarousel: React.FC = () => {,
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
=======
'use client'
<<<<<<< HEAD
import React from 'react';

const ContentCarousel: React.FC = React.memo((props) => {
=======
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react'
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
    {
      id: 1,
<<<<<<< HEAD
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
=======
<<<<<<< HEAD
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
<<<<<<< HEAD
      features: [,
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
=======
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Brain,
<<<<<<< HEAD
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
=======
      color: 'from-purple-500 to-pink-600'
<<<<<<< HEAD
=======
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
>>>>>>> origin/main
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
<<<<<<< HEAD
      icon: Zap,
      color: 'from-cyan-500 to-blue-600'
=======
      icon: Cloud,
      color: 'from-blue-500 to-purple-600'
>>>>>>> main
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
    },
    {
      id: 2,
>>>>>>> origin/main
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
<<<<<<< HEAD
      color: 'from-purple-500 to-pink-600'
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      color: 'from-orange-500 to-red-600',},
    {id: 4,
=======
      color: 'from-yellow-500 to-orange-600'
=======
      color: 'from-orange-500 to-red-600'
>>>>>>> main
=======
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ]
=======
      color: 'from-yellow-500 to-orange-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
    },
    {
      id: 4,
>>>>>>> origin/main
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [,
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
<<<<<<< HEAD
      color: 'from-red-500 to-orange-600'
=======
<<<<<<< HEAD
<<<<<<< HEAD
      color: 'from-blue-500 to-indigo-600',}];
=======
      color: 'from-red-500 to-pink-600'
>>>>>>> origin/main
    }
  ];
>>>>>>> main

  useEffect(() => {const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);}, 5000);
=======
      color: 'from-red-500 to-pink-600'
    }
<<<<<<< HEAD
  ];

  useEffect(() => {];];
    const timer = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
>>>>>>> origin/main

    return () => clearInterval(timer);
  }, [slides.length]);

<<<<<<< HEAD
<<<<<<< HEAD
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
                    </div>
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
=======
  const nextSlide = () => {;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

=======
  ]
  useEffect(() => {]
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
>>>>>>> origin/main
>>>>>>> origin/main
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      </div><div className="relative overflow-hidden rounded-2xl">
        </div><$2 />
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            </div><div key={slide.id} className="w-full flex-shrink-0">
              </div><div className={`bg-gradient-to-br ${slide.color} p-8 rounded-2xl text-white`}>
                </div><div className="flex items-center justify-between mb-6">
                  </div><div className="flex items-center space-x-4">
                    </div><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      </div><slide.icon className="w-8 h-8" />
                    </div>
                    <div>
                      </div><h3 className="text-2xl font-bold">{slide.title}</h3>
                      <p className="text-white/90">{slide.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {slide.features.map((feature, index) => (
                    </div><div key={index} className="flex items-center space-x-2">
                      </div><div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
>>>>>>> origin/main
                </div>
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
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
=======
        
        <$2 />
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          </button><ChevronLeft className="w-6 h-6" />
        </button>
        
        <$2 />
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          </button><ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          </div><$2 />
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
>>>>>>> origin/main
          />
        ))}
=======
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/20">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <slide.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  {slide.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {slide.features.map((feature, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20">
                      <span className="text-cyan-400 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
>>>>>>> main
      </div>
    </div>
<<<<<<< HEAD
  );
});

export default ContentCarousel;
=======
  )
}
export default ContentCarousel
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }
      ]
>>>>>>> origin/main
    },
    {
      icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses'
=======
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }
      ]
>>>>>>> origin/main
    }
<<<<<<< HEAD
  ];

<<<<<<< HEAD
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
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
=======
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300 mt-2">
                      {currentSlideData.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {currentSlideData.stats?.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

<<<<<<< HEAD
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
            ))}
          </div>
=======
        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
=======
  ]
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])
  const currentSlideData = slides[currentSlide]
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Solutions
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.
        <div className="relative">
<div className="overflow-hidden rounded-xl">
            <$2 />
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
<div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                    <div className="text-center mb-8">
                      <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <slide.icon className="h-10 w-10 text-white" />
                      <h3 className="text-2xl font-bold mb-4">{slide.title}
                      <p className="text-purple-100 text-lg max-w-2xl mx-auto">{slide.description}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-purple-100">{feature}
                      ))}
              ))}
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}
                    ))}
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}
                        <div className="text-gray-400 text-sm">{stat.label}
                    ))}
                )}
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-5 h-5" />
                    Get Started
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More
              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    <div className="text-4xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    <div className="text-gray-300">
                      Slide {currentSlide + 1} of {slides.length}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}
              ))}
            {/* Stats */}
            {currentSlideData.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700">
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}
                    <div className="text-sm text-gray-400">{stat.label}
                ))}
            )}
          {/* Navigation Buttons */}
          <$2 />
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">
            <ChevronLeft className="h-6 w-6" />
          <$2 />
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">
            <ChevronRight className="h-6 w-6" />
{/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
          {slides.map((_, index) => (
            <$2 />
              key={index}
              onClick={() => setCurrentSlide(index)}
<<<<<<< HEAD
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
=======
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
<<<<<<< HEAD
>>>>>>> origin/main
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default ContentCarouselPage;
=======
export default ContentCarousel;
=======
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">4.9/5
                <div className="text-gray-400 text-sm">Customer Rating
            <div className="flex items-center justify-center gap-3 text-white">
              <Users className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">10,000+
                <div className="text-gray-400 text-sm">Happy Customers
            <div className="flex items-center justify-center gap-3 text-white">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">99.9%
                <div className="text-gray-400 text-sm">Uptime
  )
}
export default ContentCarousel</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></button></button></a></p></p></p></h2></h2></h3></h4>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
