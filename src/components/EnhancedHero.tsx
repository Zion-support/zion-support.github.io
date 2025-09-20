import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  background: string;
  icon: React.ReactNode;
}

const EnhancedHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Transform Your Business",
      subtitle: "With Zion Tech Group",
      description: "Discover our cutting-edge micro SAAS solutions designed to scale your business operations and drive growth.",
      ctaText: "Explore Services",
      ctaLink: "/micro-saas-services",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🚀"
    },
    {
      id: 2,
      title: "AI-Powered Solutions",
      subtitle: "For Modern Enterprises",
      description: "Leverage artificial intelligence to automate workflows, enhance productivity, and gain competitive advantages.",
      ctaText: "Learn More",
      ctaLink: "/ai-solutions",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🤖"
    },
    {
      id: 3,
      title: "Cloud-Native Architecture",
      subtitle: "Built for Scale",
      description: "Enterprise-grade cloud solutions that grow with your business, ensuring reliability and performance.",
      ctaText: "Get Started",
      ctaLink: "/cloud-solutions",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "☁️"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-8xl mb-6"
              >
                {heroSlides[currentSlide].icon}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-300 leading-tight"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <a
                  href={heroSlides[currentSlide].ctaLink}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                >
                  {heroSlides[currentSlide].ctaText}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-white/10 text-white border border-white/20"
            }`}
          >
            Auto-play {isAutoPlaying ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Keyboard Navigation Instructions */}
      <div className="absolute top-4 right-4 z-20">
        <div className="text-xs text-white/60 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
          <p>Use ← → keys or click to navigate</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;