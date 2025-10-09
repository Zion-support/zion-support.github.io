'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  readTime: string;
  featured: boolean;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: "AI 2026 Autonomous Enterprise Automation Mega Breakthrough",
      description: "Discover how autonomous systems are revolutionizing enterprise operations with unprecedented efficiency gains.",
      image: "/api/placeholder/400/250",
      link: "/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough",
      category: "AI Innovation",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Solutions for Enterprise",
      description: "Explore next-generation quantum algorithms and their applications in solving complex business problems.",
      image: "/api/placeholder/400/250",
      link: "/blog/quantum-computing-enterprise-solutions",
      category: "Quantum Tech",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Business Intelligence Revolution",
      description: "Learn how AI is transforming data analytics and decision-making processes across industries.",
      image: "/api/placeholder/400/250",
      link: "/blog/ai-business-intelligence-revolution",
      category: "Business Intelligence",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 4,
      title: "Autonomous Systems Implementation Guide",
      description: "A comprehensive guide to implementing self-managing systems in your organization.",
      image: "/api/placeholder/400/250",
      link: "/blog/autonomous-systems-implementation-guide",
      category: "Implementation",
      readTime: "10 min read",
      featured: true
    },
    {
      id: 5,
      title: "AI Cybersecurity: Protecting the Future",
      description: "Understanding AI-powered security solutions and their role in modern cybersecurity strategies.",
      image: "/api/placeholder/400/250",
      link: "/blog/ai-cybersecurity-protecting-future",
      category: "Cybersecurity",
      readTime: "7 min read",
      featured: false
    }
  ];

  useEffect(() => {
    if (isPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, isHovered, contentItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Latest Insights & Innovations
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge research, breakthrough discoveries, and practical implementation guides.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Image */}
                    <div className="relative group">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-cyan-400 text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-gray-400 text-sm ml-2">
                          • {item.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <a
                        href={item.link}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors font-medium group"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous content"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next content"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors font-medium group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;