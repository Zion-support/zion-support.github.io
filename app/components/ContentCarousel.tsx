'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "AI-Powered Business Transformation",
      description: "Transform your business with our cutting-edge AI solutions that deliver measurable results and competitive advantages.",
      stats: [
        { icon: TrendingUp, value: "300%", label: "Average ROI" },
        { icon: Users, value: "500+", label: "Happy Clients" },
        { icon: Award, value: "95%", label: "Success Rate" }
      ],
      image: "🚀",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage the power of quantum computing to solve complex optimization problems and accelerate your digital transformation.",
      stats: [
        { icon: TrendingUp, value: "1000x", label: "Faster Processing" },
        { icon: Users, value: "50+", label: "Quantum Projects" },
        { icon: Award, value: "99.9%", label: "Accuracy" }
      ],
      image: "⚛️",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Autonomous Systems",
      description: "Deploy self-managing systems that optimize themselves, reduce costs, and improve efficiency without human intervention.",
      stats: [
        { icon: TrendingUp, value: "70%", label: "Cost Reduction" },
        { icon: Users, value: "200+", label: "Deployments" },
        { icon: Award, value: "24/7", label: "Operation" }
      ],
      image: "🤖",
      color: "from-green-400 to-cyan-500"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const current = slides[currentSlide];

  return (
    <div 
      className="relative w-full h-96 overflow-hidden rounded-2xl cyber-card"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slide Content */}
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-90`} />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-white">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 neon-text">
                  {current.title}
                </h2>
                <p className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
                  {current.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {current.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                      <div className="text-2xl font-bold text-white neon-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="cyber-button px-8 py-3 text-center"
                  >
                    Get Started Today
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Image/Icon */}
              <div className="flex justify-center lg:justify-end">
                <div className="text-9xl lg:text-[12rem] opacity-80">
                  {current.image}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ 
            width: '100%',
            animation: isAutoPlaying ? 'progressBar 5s linear infinite' : 'none'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes progressBar {
          0% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default ContentCarousel;