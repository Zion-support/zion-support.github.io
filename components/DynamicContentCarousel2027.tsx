import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  Brain,
  Cpu,
  Database,
  Shield,
  Zap,
  Target,
  Rocket,
  BarChart3,
  Award,
  CheckCircle
} from 'lucide-react';

const DynamicContentCarousel2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough",
      subtitle: "Revolutionary AI Solutions",
      description: "Experience the most advanced AI technology with 99.9% accuracy and 10,000x faster processing. Transform your business with unprecedented ROI.",
      image: "/api/placeholder/800/400",
      category: "AI Solutions",
      rating: 4.9,
      readTime: "15 min",
      featured: true,
      cta: "Explore AI Solutions",
      ctaLink: "/ai-2025-ultimate-breakthrough",
      stats: {
        roi: "5,000%",
        accuracy: "99.9%",
        speed: "10,000x"
      }
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      subtitle: "Next-Gen Computing Power",
      description: "Breakthrough quantum computing solutions for complex problem-solving. Achieve exponential speed improvements and optimization mastery.",
      image: "/api/placeholder/800/400",
      category: "Quantum Computing",
      rating: 4.8,
      readTime: "12 min",
      featured: true,
      cta: "Discover Quantum Solutions",
      ctaLink: "/quantum-computing-revolution",
      stats: {
        speed: "Exponential",
        optimization: "95%",
        efficiency: "99.9%"
      }
    },
    {
      id: 3,
      title: "Automation Solutions 2027",
      subtitle: "Autonomous Business Operations",
      description: "Complete business automation with AI-powered systems. Achieve 24/7 autonomous operations with 2,500-5,000% ROI.",
      image: "/api/placeholder/800/400",
      category: "Automation",
      rating: 4.9,
      readTime: "18 min",
      featured: true,
      cta: "Start Automation Journey",
      ctaLink: "/automation-solutions-2027",
      stats: {
        roi: "2,500%",
        uptime: "99.99%",
        efficiency: "85%"
      }
    },
    {
      id: 4,
      title: "Data Analytics Transformation",
      subtitle: "Intelligent Data Processing",
      description: "Advanced data analytics with real-time insights and automated analysis. Process data 10,000x faster with smart categorization.",
      image: "/api/placeholder/800/400",
      category: "Data Analytics",
      rating: 4.7,
      readTime: "20 min",
      featured: false,
      cta: "Transform Your Data",
      ctaLink: "/data-analytics-transformation",
      stats: {
        processing: "10,000x",
        accuracy: "99.9%",
        insights: "Real-time"
      }
    },
    {
      id: 5,
      title: "Enterprise Security Suite",
      subtitle: "Military-Grade Protection",
      description: "Comprehensive security solutions with zero-trust architecture. Protect your business with end-to-end encryption and threat detection.",
      image: "/api/placeholder/800/400",
      category: "Security",
      rating: 4.9,
      readTime: "14 min",
      featured: true,
      cta: "Secure Your Business",
      ctaLink: "/enterprise-security-suite",
      stats: {
        protection: "99.99%",
        encryption: "End-to-end",
        threats: "Real-time"
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dynamic Content Carousel 2027
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs, solutions, and innovations in AI, 
            quantum computing, and automation. Stay ahead with cutting-edge technology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
          {/* Main Slide */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {currentSlideData.category}
                      </span>
                      {currentSlideData.featured && (
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      {currentSlideData.title}
                    </h3>
                    
                    <p className="text-xl text-gray-200 mb-2">
                      {currentSlideData.subtitle}
                    </p>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {currentSlideData.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(currentSlideData.stats).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{currentSlideData.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{currentSlideData.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>50,000+ readers</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={currentSlideData.ctaLink}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {currentSlideData.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual Content */}
                  <div className="flex justify-center">
                    <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                      <Brain className="w-32 h-32 text-blue-400" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 p-6">
            {slides.map((_, index) => (
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
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {slides.slice(0, 4).map((slide, index) => (
            <div
              key={slide.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:bg-white/10 cursor-pointer ${
                index === currentSlide 
                  ? 'border-blue-500/50 bg-blue-500/10' 
                  : 'border-white/10 hover:border-white/30'
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{slide.title}</h4>
                  <p className="text-gray-400 text-xs">{slide.category}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {slide.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{slide.rating}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel2027;