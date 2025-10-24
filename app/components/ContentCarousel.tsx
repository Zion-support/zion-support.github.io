'use client';
<<<<<<< HEAD

import React, { useState } from 'react';
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp, Cloud, Shield, Globe, Database, Users, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
=======
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Shield, Brain, Cloud } from 'lucide-react';
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea

interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[];
<<<<<<< HEAD
  icon: React.ComponentType<{ className?: string }>;
  color: string;
=======
  icon: React.ComponentType<any>;
  color: string;
  stats?: {
    value: string;
    label: string;
  }[];
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD
  
  const slides: Slide[] = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting"
      ],
      icon: BarChart,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions for your business needs.",
      features: [
        "99.9% uptime guarantee",
        "Auto-scaling capabilities",
        "Advanced security",
        "24/7 monitoring"
      ],
      icon: Cloud,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive cybersecurity services.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security training"
      ],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge digital solutions.",
      features: [
        "Process automation",
        "Digital workflows",
        "Integration services",
        "Change management"
      ],
      icon: Settings,
      color: "from-purple-500 to-indigo-500"
    }
  ];

=======

  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
  ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
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
      color: 'from-green-500 to-blue-600',
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
      icon: Brain,
      color: 'from-orange-500 to-red-600',
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
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

<<<<<<< HEAD
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive suite of technology solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of technology solutions
              </p>
            </div>

            {/* Carousel */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-white rotate-180" />
                </button>
                
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-emerald-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${currentSlideData.color} mb-6`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentSlideData.title}
                </h3>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  {currentSlideData.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact us today to learn more about our solutions and how they can help your business grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                    View All Solutions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContentCarousel;
=======
  return (
    <div className="relative w-full max-w-6xl mx-auto"></div>
      <div className="overflow-hidden rounded-2xl"></div>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }
        ></div>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0"></div>
              <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 text-white`}></div>
                <div className="max-w-4xl mx-auto"></div>
                  <div className="flex items-center justify-center mb-6"></div>
                    <div className="bg-white/20 p-4 rounded-full"></div>
                      <slide.icon className="h-12 w-12" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    {slide.title
                  </h2>
                  <p className="text-xl text-center mb-8 text-white/90">
                    {slide.description
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                    {slide.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))
                  </div>
                  {slide.stats && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                      {slide.stats.map((stat, index) => (
                        <div key={index} className="text-center"></div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-white/80">{stat.label}</div>
                        </div>
                      ))
                    </div>
                  )
                </div>
              </div>
            </div>
          ))
        </div>
      </div>
      
      {/* Navigation buttons */
      <button
        onClick={prevSlide
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots indicator */
      <div className="flex justify-center mt-6 space-x-2"></div>
        {slides.map((_, index) => (
          <button
            key={index
            onClick={() => setCurrentSlide(index)
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`
          />
        ))
      </div>
    </div>
  )
}

export default ContentCarousel;
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
