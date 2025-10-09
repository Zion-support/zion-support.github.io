'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Calendar, User, ArrowRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 1,
      title: "AI-Powered Business Transformation",
      description: "Discover how our AI solutions helped a Fortune 500 company achieve 300% ROI in just 6 months.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Case Study",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Quantum Computing",
      description: "Explore the latest breakthroughs in quantum computing and how they're revolutionizing AI applications.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      author: "Prof. Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Automation Success Stories",
      description: "Real-world examples of how intelligent automation is transforming industries across the globe.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Success Story",
      author: "Alex Thompson",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  return (
    <div className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Featured Content
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest insights, case studies, and innovations in AI and technology
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className="cyber-card p-0 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-80">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {content.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {content.title}
                          </h3>
                          <p className="text-gray-200 text-sm">
                            {content.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{content.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{content.date}</span>
                          </div>
                          <span>{content.readTime}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-gray-300 leading-relaxed">
                            {content.description}
                          </p>
                          
                          <div className="flex items-center space-x-4">
                            <a
                              href={`/blog/${content.id}`}
                              className="cyber-button px-6 py-2 flex items-center space-x-2"
                            >
                              <span>Read More</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                            <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                              <Play className="w-4 h-4" />
                              <span>Watch Video</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
