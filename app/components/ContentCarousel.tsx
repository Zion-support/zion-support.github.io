'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  author: string;
  category: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business operations with our cutting-edge AI solutions that automate processes and drive efficiency.',
      image: '/images/carousel/ai-solutions.jpg',
      rating: 4.9,
      author: 'Sarah Johnson',
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Migration Excellence',
      description: 'Seamlessly migrate your infrastructure to the cloud with our proven methodologies and expert guidance.',
      image: '/images/carousel/cloud-migration.jpg',
      rating: 4.8,
      author: 'Michael Chen',
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Cybersecurity Fortress',
      description: 'Protect your digital assets with our comprehensive security solutions and 24/7 monitoring services.',
      image: '/images/carousel/cybersecurity.jpg',
      rating: 4.9,
      author: 'Emily Rodriguez',
      category: 'Security'
    },
    {
      id: '4',
      title: 'Data Analytics Revolution',
      description: 'Unlock insights from your data with our advanced analytics platform and machine learning capabilities.',
      image: '/images/carousel/data-analytics.jpg',
      rating: 4.7,
      author: 'David Kim',
      category: 'Analytics'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {item.title}
                      </h2>
                      
                      <p className="text-lg text-blue-100 mb-8">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold">
                              {item.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold">{item.author}</div>
                            <div className="text-sm text-blue-200">Client</div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Image Placeholder */}
                    <div className="hidden lg:block">
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl font-bold mb-2">{item.category.charAt(0)}</div>
                            <div className="text-lg opacity-90">{item.category}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
