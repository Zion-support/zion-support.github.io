import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Star, Clock, Users, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025: The Ultimate Business Transformation Guide",
      description: "Discover how AI technologies will revolutionize your business operations, increase efficiency by 300%, and deliver unprecedented ROI in 2025.",
      category: "AI Solutions",
      type: "guide",
      rating: 4.9,
      views: 25000,
      readTime: "20 min",
      image: "/api/placeholder/800/400",
      featured: true,
      trending: true,
      cta: "Read Full Guide",
      link: "/ai-2025-ultimate-guide"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: 10,000x Faster Processing",
      description: "Explore how quantum computing solutions can solve complex business problems with exponential speed and accuracy.",
      category: "Quantum Computing",
      type: "article",
      rating: 4.8,
      views: 18000,
      readTime: "15 min",
      image: "/api/placeholder/800/400",
      featured: true,
      trending: true,
      cta: "Learn More",
      link: "/quantum-computing-breakthrough"
    },
    {
      id: 3,
      title: "Automation Success: 2,500% ROI in 6 Months",
      description: "Real case study showing how intelligent automation transformed a Fortune 500 company's operations and delivered massive returns.",
      category: "Case Study",
      type: "case-study",
      rating: 4.9,
      views: 32000,
      readTime: "12 min",
      image: "/api/placeholder/800/400",
      featured: true,
      trending: false,
      cta: "View Case Study",
      link: "/automation-success-case-study"
    },
    {
      id: 4,
      title: "Neural Network Implementation: Step-by-Step Tutorial",
      description: "Complete tutorial on implementing neural networks for business applications with practical examples and code samples.",
      category: "Tutorial",
      type: "tutorial",
      rating: 4.7,
      views: 15000,
      readTime: "30 min",
      image: "/api/placeholder/800/400",
      featured: false,
      trending: true,
      cta: "Start Tutorial",
      link: "/neural-network-tutorial"
    },
    {
      id: 5,
      title: "Future of AI: 2030 Predictions and Trends",
      description: "Expert insights into AI trends and predictions for 2030, including emerging technologies and business opportunities.",
      category: "Predictions",
      type: "article",
      rating: 4.8,
      views: 22000,
      readTime: "18 min",
      image: "/api/placeholder/800/400",
      featured: true,
      trending: true,
      cta: "Read Predictions",
      link: "/ai-2030-predictions"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return BookOpen;
      case 'article': return FileText;
      case 'case-study': return Star;
      case 'tutorial': return Video;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'from-blue-500 to-cyan-500';
      case 'article': return 'from-green-500 to-emerald-500';
      case 'case-study': return 'from-purple-500 to-pink-500';
      case 'tutorial': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = featuredContent[currentSlide];
  const TypeIcon = getTypeIcon(currentContent.type);
  const typeColor = getTypeColor(currentContent.type);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Content
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our most popular and trending content, carefully curated 
            to help you stay ahead in the AI revolution.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Content Image */}
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${typeColor} text-white text-sm font-semibold`}>
                            {content.category}
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-2">
                            {content.featured && (
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                                Featured
                              </span>
                            )}
                            {content.trending && (
                              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full">
                                Trending
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <button className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-all duration-200">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${typeColor} flex items-center justify-center mr-3`}>
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm text-gray-400">{content.type.toUpperCase()}</div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {content.title}
                      </h3>

                      <p className="text-lg text-gray-300 mb-6">
                        {content.description}
                      </p>

                      {/* Content Stats */}
                      <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {content.rating}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {content.readTime}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {content.views.toLocaleString()} views
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={content.link}
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-fit"
                      >
                        {content.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
            >
              <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">More Trending Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.slice(0, 4).map((content) => {
              const TypeIcon = getTypeIcon(content.type);
              const typeColor = getTypeColor(content.type);
              
              return (
                <div
                  key={content.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${typeColor} flex items-center justify-center`}>
                      <TypeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {content.rating}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                    <div>{content.views.toLocaleString()}</div>
                  </div>
                  
                  <Link
                    to={content.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel2025;