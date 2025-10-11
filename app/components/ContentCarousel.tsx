'use client';
import {  Cloud, Zap, Shield, ChevronLeft, ChevronRight  } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ContentCarouselPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ContentCarousel
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp, Cloud } from 'lucide-react'

interface Slide {
  id: number
  icon: React.ComponentType<any>
  title: string
  description: string
  features: string[]
  color: string
}

const ContentCarousel: React.FC = () => {
const ContentCarousel: React.FC = () => {,
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      id: 1,
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Revolutionary artificial intelligence that transforms your business operations and drives growth.',
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      features: [
        'Machine Learning Integration',
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '3x', label: 'Faster Processing' }
      ]
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Zap,
      stats: '300% efficiency boost'
    },
    {
      title: 'Expert Team',
      description: 'Work with industry-leading professionals and innovators',
      icon: Users,
      stats: '50+ experts'
    },
    {
      title: 'Proven Results',
      description: 'Delivering measurable business outcomes for our clients',
      icon: Star,
      stats: '500+ projects completed'
    }
  ];

  useEffect(() => {const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);}, 5000);
      color: 'from-red-500 to-pink-600'
    }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto"></div></div>
      </div><div className="relative overflow-hidden rounded-2xl"></div></div>
        </div><div></div>
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            </div><div key={slide.id} className="w-full flex-shrink-0"></div></div>
              </div><div className="{`bg-gradient-to-br" ${slide.color} p-8 rounded-2xl text-white`}></div></div>
                </div><div className="flex items-center justify-between mb-6"></div></div>
                  </div><div className="flex items-center space-x-4"></div></div>
                    </div><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"></div></div>
                      </div><slide.icon className="w-8 h-8" />
                    </div>
                    <div>
                      </div><h3 className="text-2xl font-bold"></h3></h3>{slide.title}</h3>
                      <p className="text-white/90"></p></p>{slide.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4"></div></div>
                  {slide.features.map((feature, index) => (
                    </div><div key={index} className="flex items-center space-x-2"></div></div>
                      </div><div className="w-2 h-2 bg-white rounded-full"></div></div></div>
                      <span className="text-sm"></span></span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
          />
        ))}
  const nextSlide = () => {
    setCurrentSlide((prev) =&gt; (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =&gt; (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto"></div></div>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/20"></div></div>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}></div></div>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8 md:p-12"></div></div>
              <div className="text-center"></div></div>
                <div className="{`w-20" h-20 mx-auto mb-6 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center shadow-lg`}></div></div>
                  <slide.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-enhanced"></h3></h3>
                  {slide.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p></p>
                  {slide.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"></div></div>
                  {slide.features.map((feature, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20"></div></div>
                      <span className="text-cyan-400 font-medium"></span></span>{feature}</span>
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
        ></button>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        ></button>
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"></div></div>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() =&gt; setCurrentSlide(index)}
              className="{`w-3" h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ]

  useEffect(() => {
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

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/20">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <slide.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
      
      <Footer />
    </>
  );
};

export default ContentCarouselPage;
export default ContentCarousel;
    </div>
  )
}

export default ContentCarousel
