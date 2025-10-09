'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Star, Users, TrendingUp, Award } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  users: number;
  price: string;
  features: string[];
  color: string;
  bgColor: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: "AI Project Manager",
      description: "Intelligent project planning and management with AI-powered insights and automation",
      image: "🤖",
      category: "Productivity",
      rating: 4.9,
      users: 1250,
      price: "$49/month",
      features: ["Smart Planning", "Risk Analysis", "Resource Optimization", "Progress Tracking"],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-600/10"
    },
    {
      id: 2,
      title: "AI Social Media Manager",
      description: "Automated social media management with content creation and scheduling",
      image: "📱",
      category: "Marketing",
      rating: 4.8,
      users: 2100,
      price: "$79/month",
      features: ["Content Creation", "Auto Posting", "Analytics", "Engagement Tracking"],
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-600/10"
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Real-time business intelligence with AI-powered insights and predictions",
      image: "📊",
      category: "Analytics",
      rating: 4.9,
      users: 1800,
      price: "$99/month",
      features: ["Real-time Data", "Predictive Analytics", "Custom Dashboards", "Automated Reports"],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-teal-600/10"
    },
    {
      id: 4,
      title: "AI Email Marketing",
      description: "Intelligent email campaigns with personalization and optimization",
      image: "📧",
      category: "Marketing",
      rating: 4.7,
      users: 1650,
      price: "$59/month",
      features: ["Smart Segmentation", "A/B Testing", "Personalization", "Performance Tracking"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/10"
    },
    {
      id: 5,
      title: "AI Customer Support Bot",
      description: "24/7 AI-powered customer support with natural language processing",
      image: "🤖",
      category: "Support",
      rating: 4.8,
      users: 2300,
      price: "$39/month",
      features: ["24/7 Support", "Multi-language", "Ticket Routing", "Knowledge Base"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-600/10"
    }
  ];

  useEffect(() => {
    if (isPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, isHovered, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div 
        className="relative overflow-hidden rounded-2xl cyber-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contentItems.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className={`${item.bgColor} p-8 md:p-12`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-6xl">{item.image}</span>
                      <div>
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white neon-text">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span className="text-white font-medium">{item.users.toLocaleString()}+ users</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300`}
                      >
                        Get Started
                      </a>
                      <div className="text-2xl font-bold text-cyan-400">
                        {item.price}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className={`w-64 h-64 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-8xl opacity-20`}>
                        {item.image}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-300 z-10"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;