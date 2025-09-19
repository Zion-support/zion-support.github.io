import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {,
  ChevronLeft;
  ChevronRight;
  Star;
  Clock;
  TrendingUp;
  Users;
  Award;
  ArrowRight;
  Play;
  BookOpen;
  Zap;
  Shield;
  Cloud;
  BarChart3,
} from 'lucide-react';
const EnhancedContentCarousel2025 = () => {,
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentItems = [,
    {,
      id: 1,};
      id: 2;
      type: 'service';
      title: "Cybersecurity Solutions";
      subtitle: "Protect your digital assets with enterprise-grade security";
      description: "Comprehensive security solutions including assessment, implementation, and 24/7 monitoring.";
      features: ["Security Assessment", "Implementation", "24/7 Monitoring"];
      price: "Starting at $8,000";
      image: "/images/services/cybersecurity-solutions.jpg";
      slug: "cybersecurity-solutions";
      featured: true;
      stats: { clients: "500+", success: "99%", uptime: "99.9%" ,};
      tags: ["Security", "Enterprise", "Monitoring"];
      icon: Shield;
      color: "from-red-500 to-orange-600",
      id: 3;
      type: 'blog';
      title: "Edge Computing Revolution: Bringing Intelligence to the Edge";
      excerpt: "Explore how edge computing is enabling real-time processing and transforming industries worldwide.";
      author: "Dr. Lisa Wang";
      readTime: "10 min read";
      category: "Edge Computing";
      image: "/images/blog/edge-computing-revolution-2025.jpg";
      slug: "edge-computing-revolution-bringing-intelligence-edge";
      stats: { views: "8.7K", likes: "634", comments: "89" ,};
      tags: ["Edge Computing", "Real-time", "IoT"];
      icon: Cloud;
      color: "from-green-500 to-teal-600",
      id: 4;
      title: "Data Analytics Solutions";
      subtitle: "Unlock insights from your data with advanced analytics";
      description: "Transform your data into actionable insights with our comprehensive analytics solutions.";
      features: ["Data Strategy", "Analytics Dashboard", "Predictive Analytics"];
      price: "Starting at $12,000";
      image: "/images/services/data-analytics-solutions.jpg";
      slug: "data-analytics-solutions";
      stats: { clients: "300+", insights: "1M+", accuracy: "95%" ,};
      tags: ["Analytics", "Data Science", "Insights"];
      icon: BarChart3;
      color: "from-purple-500 to-pink-600",
      id: 5,}
  ];
  useEffect(() => {,
    if (isAutoPlay) {,
      const interval = setInterval(() => {,
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 6000);
      return () => clearInterval(interval);
  }, [isAutoPlay, contentItems.length]);
  const nextSlide = () => {,
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };
  const prevSlide = () => {,
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  const goToSlide = (index: number) => {,
    setCurrentSlide(index);
  return (,
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16">,
      <div className="container mx-auto px-4">,
        {/* Header */}
        <div className="text-center mb-12">,
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">,
            <TrendingUp className="w-5 h-5 text-blue-600" />,
            <span className="text-sm font-semibold text-gray-700">Featured Content</span>,
            <Star className="w-4 h-4 text-yellow-500" />,
          </div>,
          <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">,
            Discover Our Latest Innovations,
          </h2>,
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
            Explore cutting-edge solutions, expert insights, and revolutionary technologies,
            that are shaping the future of business and technology.,
          </p>,
        </div>,
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">,
                  </div>,
                </div>,
              ))}
            </div>,
            {/* Navigation Arrows */}
            <button,
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover: bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110",
            >,
              <ChevronLeft className="w-6 h-6 text-gray-700" />,
            </button>,
              onClick={nextSlide,}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover: bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110",
              <ChevronRight className="w-6 h-6 text-gray-700" />,
          {/* Navigation Dots */,}
          <div className="flex justify-center gap-3 mt-8">,
            {contentItems.map((_, index) => (,
              <button,
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${,
                  index === currentSlide,
                    ? 'bg-blue-600 scale-125',
                    : 'bg-gray-300 hover: bg-gray-400',}`}
              />,
            ))}
          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">,
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${,
                isAutoPlay,
                  ? 'bg-blue-100 text-blue-700 hover: bg-blue-200',
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',}`}
              <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-blue-600' : 'bg-gray-400'}`}></div>,
              {isAutoPlay ? 'Auto-play On' : 'Auto-play Off'}
      </div>,
    </div>,
  );
};
}