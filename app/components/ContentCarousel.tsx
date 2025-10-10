'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  users: number;
  featured: boolean;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      image: '/images/carousel/business-intelligence.jpg',
      category: 'AI Solutions',
      rating: 4.9,
      users: 1250,
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing Solutions',
      description: 'Leverage the power of quantum computing for complex problem solving and optimization.',
      image: '/images/carousel/quantum-computing.jpg',
      category: 'Emerging Tech',
      rating: 4.8,
      users: 890,
      featured: false
    },
    {
      id: '3',
      title: 'Autonomous Systems Platform',
      description: 'Build and deploy intelligent autonomous systems for various industries.',
      image: '/images/carousel/autonomous-systems.jpg',
      category: 'AI Solutions',
      rating: 4.7,
      users: 2100,
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular AI and IT solutions trusted by thousands of businesses worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                            {item.category}
                          </span>
                          {item.featured && (
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-xl text-gray-300 mb-6">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-6 mb-6">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="text-white font-semibold">{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-5 h-5 text-cyan-400" />
                            <span className="text-gray-300">{item.users.toLocaleString()} users</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-5 h-5 text-green-400" />
                            <span className="text-gray-300">Growing</span>
                          </div>
                        </div>
                        
                        <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                      
                      <div className="hidden md:block">
                        <div className="w-full h-64 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <div className="text-white text-6xl">🚀</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;