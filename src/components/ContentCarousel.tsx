import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Award, TrendingUp } from 'lucide-react';

interface ContentCarouselProps {
  className?: string;
}

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  badge?: string;
}

export default function ContentCarousel({ className = '' }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      price: "Starting at $299/month",
      badge: "Popular"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem solving and optimization.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      category: "Quantum",
      rating: 4.8,
      reviews: 892,
      price: "Custom Pricing",
      badge: "New"
    },
    {
      id: 3,
      title: "AI Marketing Automation",
      description: "Revolutionize your marketing with AI-powered automation and personalization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Marketing",
      rating: 4.7,
      reviews: 2156,
      price: "Starting at $199/month",
      badge: "Trending"
    },
    {
      id: 4,
      title: "Autonomous Systems Development",
      description: "Build and deploy autonomous systems with our cutting-edge AI technology.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      category: "Autonomous",
      rating: 4.9,
      reviews: 743,
      price: "Starting at $1,999/month",
      badge: "Premium"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className={`relative bg-slate-800 rounded-lg overflow-hidden ${className}`}>
      <div className="relative h-96">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${currentItem.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end p-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                {currentItem.category}
              </span>
              {currentItem.badge && (
                <span className="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                  {currentItem.badge}
                </span>
              )}
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentItem.title}
            </h3>
            
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              {currentItem.description}
            </p>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{currentItem.rating}</span>
                <span className="text-gray-300">({currentItem.reviews} reviews)</span>
              </div>
              <div className="text-cyan-400 font-bold text-lg">
                {currentItem.price}
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="cyber-button px-6 py-3">
                Learn More
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 p-4">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full transition-all duration-200 ${
            isAutoPlaying 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-gray-300'
          }`}
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </div>
  );
}