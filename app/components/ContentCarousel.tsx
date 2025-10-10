'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: 'AI-Powered Customer Service',
      description: 'Transform your customer support with intelligent chatbots and automated workflows that provide 24/7 assistance.',
      image: '/api/placeholder/600/400',
      category: 'AI Services',
      rating: 4.9,
      reviews: 150,
      link: '/ai-customer-support'
    },
    {
      title: 'Cloud Migration Solutions',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      image: '/api/placeholder/600/400',
      category: 'IT Services',
      rating: 4.8,
      reviews: 89,
      link: '/cloud-migration'
    },
    {
      title: 'Micro SaaS Analytics Dashboard',
      description: 'Get real-time insights into your business performance with our AI-powered analytics platform.',
      image: '/api/placeholder/600/400',
      category: 'Micro SaaS',
      rating: 4.9,
      reviews: 203,
      link: '/ai-analytics-dashboard'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Protect your business with comprehensive security solutions including threat detection and compliance monitoring.',
      image: '/api/placeholder/600/400',
      category: 'Security',
      rating: 4.7,
      reviews: 67,
      link: '/cybersecurity'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular AI and IT solutions that are transforming businesses worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="cyber-card hologram-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    {carouselItems[currentSlide].category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{carouselItems[currentSlide].rating}</span>
                    <span className="text-gray-400 text-sm">({carouselItems[currentSlide].reviews} reviews)</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {carouselItems[currentSlide].title}
                </h3>
                
                <p className="text-lg text-gray-300 mb-8">
                  {carouselItems[currentSlide].description}
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">10K+ Active Users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">300% ROI Average</span>
                  </div>
                </div>

                <Link
                  to={carouselItems[currentSlide].link}
                  className="cyber-button inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src={carouselItems[currentSlide].image}
                  alt={carouselItems[currentSlide].title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;