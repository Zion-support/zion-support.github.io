import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Play, Clock, TrendingUp, Star, Eye, Heart } from 'lucide-react';

const DynamicContentCarousel2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems = [
    {
      id: 1,
      title: "AI 2026: Quantum-Neural Fusion Revolution",
      description: "Discover how quantum computing and neural networks are merging to create unprecedented AI capabilities with 10,000x processing improvements.",
      category: "AI Breakthrough",
      year: "2026",
      type: "Video",
      duration: "12:45",
      views: 125000,
      likes: 8900,
      trending: true,
      featured: true,
      image: "/images/ai-2026-quantum-fusion.jpg",
      tags: ["Quantum AI", "Neural Networks", "Breakthrough", "2026"],
      author: "Dr. Sarah Chen",
      publishedDate: "2025-01-15"
    },
    {
      id: 2,
      title: "Advanced Quantum Computing Solutions 2026",
      description: "Comprehensive guide to implementing quantum computing solutions with error-corrected quantum computers and quantum machine learning platforms.",
      category: "Quantum Computing",
      year: "2026",
      type: "Interactive Guide",
      duration: "25:30",
      views: 89000,
      likes: 6500,
      trending: true,
      featured: false,
      image: "/images/quantum-computing-2026.jpg",
      tags: ["Quantum Computing", "Error Correction", "Implementation", "2026"],
      author: "Prof. Michael Rodriguez",
      publishedDate: "2025-01-14"
    },
    {
      id: 3,
      title: "Revolutionary Automation Solutions 2026",
      description: "Transform your business with intelligent process automation achieving 10x efficiency improvements and 99.9% accuracy rates.",
      category: "Automation",
      year: "2026",
      type: "Case Study",
      duration: "18:20",
      views: 156000,
      likes: 12000,
      trending: true,
      featured: true,
      image: "/images/automation-2026.jpg",
      tags: ["Automation", "Process Optimization", "Efficiency", "2026"],
      author: "Alex Thompson",
      publishedDate: "2025-01-13"
    },
    {
      id: 4,
      title: "AI 2027: Autonomous Decision Systems",
      description: "Self-evolving AI systems capable of making complex business decisions with human-level reasoning and superhuman speed.",
      category: "AI Solutions",
      year: "2027",
      type: "Webinar",
      duration: "45:15",
      views: 72000,
      likes: 4800,
      trending: false,
      featured: false,
      image: "/images/ai-2027-autonomous.jpg",
      tags: ["Autonomous AI", "Decision Making", "2027", "Business Intelligence"],
      author: "Dr. Lisa Wang",
      publishedDate: "2025-01-12"
    },
    {
      id: 5,
      title: "Quantum Internet Infrastructure 2027",
      description: "Global quantum internet enabling ultra-secure communication and distributed quantum computing across the world.",
      category: "Quantum Computing",
      year: "2027",
      type: "Technical Deep Dive",
      duration: "32:10",
      views: 56000,
      likes: 3200,
      trending: false,
      featured: false,
      image: "/images/quantum-internet-2027.jpg",
      tags: ["Quantum Internet", "Security", "Infrastructure", "2027"],
      author: "Dr. James Wilson",
      publishedDate: "2025-01-11"
    },
    {
      id: 6,
      title: "Predictive Maintenance Systems 2026",
      description: "Advanced AI systems that predict equipment failures before they occur, reducing downtime by 95% and maintenance costs by 70%.",
      category: "Automation",
      year: "2026",
      type: "Implementation Guide",
      duration: "22:35",
      views: 98000,
      likes: 7500,
      trending: true,
      featured: false,
      image: "/images/predictive-maintenance-2026.jpg",
      tags: ["Predictive Maintenance", "IoT", "Equipment", "2026"],
      author: "Maria Garcia",
      publishedDate: "2025-01-10"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic Content Carousel
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our latest AI breakthroughs, quantum computing solutions, and automation technologies in an interactive, dynamic format
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                {/* Badges */}
                <div className="flex items-center gap-3 mb-6">
                  {currentItem.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  )}
                  {currentItem.trending && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </span>
                  )}
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentItem.category}
                  </span>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentItem.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {currentItem.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {currentItem.duration}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    {currentItem.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    {currentItem.likes.toLocaleString()} likes
                  </div>
                </div>

                {/* Author */}
                <div className="text-sm text-gray-400 mb-6">
                  <div>By {currentItem.author}</div>
                  <div>{new Date(currentItem.publishedDate).toLocaleDateString()}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentItem.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/content/${currentItem.id}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {currentItem.type === 'Video' ? (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Watch Now
                      </>
                    ) : (
                      <>
                        Explore Content
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Link>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
                  >
                    {isAutoPlaying ? 'Pause' : 'Play'} Auto
                  </button>
                </div>
              </div>

              {/* Image/Visual */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">
                    {currentItem.title.charAt(0)}
                  </div>
                </div>
                {currentItem.type === 'Video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More Content
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover our complete library of AI breakthroughs, quantum computing solutions, and automation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/content-library"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Browse All Content
              </Link>
              <Link
                to="/newsletter"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel2026;