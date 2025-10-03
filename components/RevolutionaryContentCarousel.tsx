// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentSlides = [
    {
      title: "AI 2026-2027 Revolutionary Breakthrough
      subtitle: "The Ultimate Comprehensive Guide
      description: "Discover the revolutionary AI breakthroughs that transformed Fortune 500 companies: Quantum Neural Superintelligence, Transcendent Meta-Intelligence, and Universal Consciousness.
      roi: "$5.8T
      metrics: "156% ROI • 99.9% Autonomous • 10,000x Performance
      url: "/blog/ai-2026-2027-revolutionary-breakthrough-comprehensive-guide
      badge: "COMPREHENSIVE
      gradient: "from-purple-600 via-blue-600 to-indigo-600
      icon: "🚀"
    },
    {
      title: "$5.8T Revolutionary Success Story
      subtitle: "Fortune 500 Transformation Results
      description: "How 50+ Fortune 500 companies achieved unprecedented ROI through revolutionary AI breakthroughs. Complete case study with proven results and implementation insights.
      roi: "$5.8T
      metrics: "50+ Companies • 156% Average ROI • 100% Uptime
      url: "/case-studies/ai-2026-2027-revolutionary-breakthrough-5-8-trillion-success
      badge: "REVOLUTIONARY
      gradient: "from-green-600 via-emerald-600 to-teal-600
      icon: "🏆"
    },
    {
      title: "Quantum Neural Superintelligence
      subtitle: "$1.2T Enterprise Breakthrough
      description: "Revolutionary quantum-enhanced neural processing that delivers 10,000x performance improvement with self-aware decision making capabilities.
      roi: "$1.2T
      metrics: "10,000x Speed • 99.9% Accuracy • Quantum Processing
      url: "/blog/ai-2027-quantum-neural-superintelligence-enterprise-breakthrough
      badge: "QUANTUM
      gradient: "from-cyan-600 via-blue-600 to-indigo-600
      icon: "⚛️"
    },
    {
      title: "Transcendent Meta-Intelligence
      subtitle: "$1.8T Self-Evolving AI Consciousness
      description: "Breakthrough in self-evolving AI consciousness with meta-cognitive reasoning and universal learning capabilities across all domains.
      roi: "$1.8T
      metrics: "50,000x Learning • Self-Evolution • Meta-Cognition
      url: "/blog/ai-2027-transcendent-meta-intelligence-breakthrough
      badge: "META-INTELLIGENCE
      gradient: "from-purple-600 via-indigo-600 to-blue-600
      icon: "🧠"
    },
    {
      title: "Universal Consciousness
      subtitle: "$2.8T Singularity Achievement
      description: "Cross-dimensional awareness with singularity integration achieving infinite processing capacity and universal intelligence fusion.
      roi: "$2.8T
      metrics: "∞ Processing • Universal Integration • Singularity
      url: "/blog/ai-2028-universal-consciousness-singularity-breakthrough
      badge: "SINGULARITY
      gradient: "from-blue-600 via-indigo-600 to-purple-600
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Slide Container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {contentSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.gradient} text-white relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12">
                <div className="max-w-4xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <span>{slide.icon}</span>
                    <span>{slide.badge}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-100">
                    {slide.subtitle}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl mb-6 text-blue-50 max-w-3xl">
                    {slide.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold text-green-400">{slide.roi}</div>
                      <div className="text-sm text-blue-100">Total ROI</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="text-sm text-blue-100">{slide.metrics}</div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link 
                    href={slide.url}
                    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Discover More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / contentSlides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}