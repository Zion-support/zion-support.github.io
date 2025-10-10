'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Zap } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  category: string;
  image: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items: CarouselItem[] = [
    {
      id: '1',
      title: 'AI-Powered Business Solutions',
      description: 'Discover how our AI solutions are transforming businesses across industries with real-world case studies and success stories.',
      author: 'Sarah Johnson',
      rating: 4.9,
      category: 'AI Solutions',
      image: '/images/carousel/ai-solutions.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration Success Stories',
      description: 'Learn from successful cloud migration projects and how they improved scalability, security, and cost efficiency.',
      author: 'Michael Chen',
      rating: 4.8,
      category: 'Cloud Services',
      image: '/images/carousel/cloud-migration.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity strategies and implementation guides to protect your business from evolving threats.',
      author: 'Emily Rodriguez',
      rating: 4.9,
      category: 'Cybersecurity',
      image: '/images/carousel/cybersecurity.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-purple-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest insights, case studies, and success stories
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{item.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-300 text-lg mb-6">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-cyan-400" />
                            <span className="text-white font-semibold">{item.author}</span>
                          </div>
                        </div>
                        
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                          Read More
                        </button>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                          <Zap className="w-16 h-16 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-500' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
