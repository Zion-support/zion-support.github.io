'use client';

import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';





const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,

      title: 'AI Solutions',

      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [,
        'Machine Learning Models',

      description: 'Transform your business with cutting-edge AI technology and automation.',
      features: [
        'Machine Learning',


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



      color: 'from-purple-500 to-pink-600'
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

      color: 'from-red-500 to-orange-600'
    }
  ];


      color: 'from-red-500 to-orange-600'
    }
  ];


  useEffect(() => {const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);}, 5000);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
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


    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${slide.color} mb-6`}>
                      <slide.icon className="w-8 h-8 text-white" />
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

        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"

        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"

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

          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
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