import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const UltimateContentCarousel2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Blog Writing",
      description: "Generate high-quality blog posts in minutes with our advanced AI writing assistant",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      category: "Content Creation",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Social Media Automation",
      description: "Create engaging social media content across all platforms automatically",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Social Media",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Email Marketing Campaigns",
      description: "Design and send personalized email campaigns that convert",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      category: "Email Marketing",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Video Script Generation",
      description: "Create compelling video scripts for YouTube, TikTok, and more",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Video Content",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "SEO Content Optimization",
      description: "Optimize your content for search engines with AI-powered suggestions",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      category: "SEO",
      readTime: "6 min read"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
            <PlayIcon className="w-4 h-4 mr-2" />
            ULTIMATE CONTENT CAROUSEL 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore Our Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest content creation tools and strategies that are transforming businesses worldwide.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full">
                          {item.category}
                        </span>
                        <span className="text-gray-400 text-sm">{item.readTime}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 text-lg mb-6">{item.description}</p>
                      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200">
                        Learn More
                      </button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimateContentCarousel2025;