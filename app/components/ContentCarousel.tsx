'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      title: 'AI-Powered Business Automation',
      description: 'Transform your business processes with our cutting-edge AI automation solutions.',
      image: '/api/placeholder/400/300',
      category: 'AI Solutions',
      rating: 4.9,
      reviews: 127
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
      image: '/api/placeholder/400/300',
      category: 'Cloud Services',
      rating: 4.8,
      reviews: 89
    },
    {
      id: '3',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and protection for your digital assets.',
      image: '/api/placeholder/400/300',
      category: 'Security',
      rating: 4.9,
      reviews: 156
    },
    {
      id: '4',
      title: 'Digital Transformation Strategy',
      description: 'Complete digital transformation roadmap tailored to your business needs.',
      image: '/api/placeholder/400/300',
      category: 'Consulting',
      rating: 4.7,
      reviews: 203
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our most popular and effective technology solutions
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 md:h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="mb-4">
                          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(item.rating)
                                      ? 'text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                  fill={i < Math.floor(item.rating) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {item.rating} ({item.reviews} reviews)
                            </span>
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600'
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