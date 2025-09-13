'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users, Target, Globe } from 'lucide-react';

const NewContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your operations with intelligent automation that learns and adapts to your business needs.",
      features: ["Smart Workflow Automation", "Predictive Analytics", "Real-time Decision Making"],
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      gradient: "from-blue-500 to-purple-600",
      link: "/ai-automation-solutions"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem-solving and optimization.",
      features: ["Quantum Algorithms", "Advanced Encryption", "Optimization Solutions"],
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      gradient: "from-purple-500 to-pink-600",
      link: "/quantum-computing-solutions"
    },
    {
      id: 3,
      title: "Enterprise AI Transformation",
      description: "Scale your business with enterprise-grade AI solutions designed for maximum ROI.",
      features: ["Custom AI Models", "Enterprise Integration", "24/7 Support"],
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      gradient: "from-green-500 to-blue-600",
      link: "/enterprise-ai-solutions"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Explore the future of human-computer interaction with advanced neural interfaces.",
      features: ["Brain-Computer Interface", "Neural Networks", "Cognitive Enhancement"],
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      gradient: "from-indigo-500 to-purple-600",
      link: "/neural-interface-solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Revolutionary Content Hub 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge AI solutions, quantum computing breakthroughs, and next-generation technologies 
              that are reshaping industries worldwide.
            </p>
          </div>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} p-12 rounded-3xl text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          {slide.icon}
                          <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
                        </div>
                        <div className="hidden md:flex space-x-2">
                          {contentSlides.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentSlide(i)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === currentSlide ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-xl mb-8 text-white/90 max-w-2xl">
                        {slide.description}
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {slide.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        href={slide.link}
                        className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Explore Solution</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Solutions", value: "500+", icon: <Target className="w-6 h-6" /> },
            { label: "Global Clients", value: "10K+", icon: <Globe className="w-6 h-6" /> },
            { label: "Success Rate", value: "99.9%", icon: <TrendingUp className="w-6 h-6" /> },
            { label: "Innovation Index", value: "#1", icon: <Sparkles className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;