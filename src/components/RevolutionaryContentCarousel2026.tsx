import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, User, ArrowRight, Star } from 'lucide-react';
import { getFeaturedBlogPosts } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const RevolutionaryContentCarousel2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredPosts = getFeaturedBlogPosts();
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);

  // Combine posts and services for carousel
  const carouselItems = [
    ...featuredPosts.slice(0, 3).map(post => ({ ...post, type: 'blog' })),
    ...featuredServices.slice(0, 3).map(service => ({ ...service, type: 'service' }))
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Content & Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and futuristic technology
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                {carouselItems[currentIndex]?.type === 'blog' ? (
                  // Blog Post Card
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured Blog
                        </span>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Clock className="w-4 h-4" />
                          {carouselItems[currentIndex].readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {carouselItems[currentIndex].title}
                      </h3>
                      
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {carouselItems[currentIndex].excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-300">{carouselItems[currentIndex].author}</span>
                        </div>
                        <div className="text-gray-400">•</div>
                        <span className="text-gray-300">{carouselItems[currentIndex].authorRole}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {carouselItems[currentIndex].tags?.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="text-3xl">🧠</span>
                          </div>
                          <p className="text-gray-300">Revolutionary Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Service Card
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured Service
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-gray-300 text-sm ml-2">
                            {carouselItems[currentIndex].reviews?.rating}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {carouselItems[currentIndex].title}
                      </h3>
                      
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {carouselItems[currentIndex].description}
                      </p>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <div>
                          <div className="text-3xl font-bold text-white">
                            {carouselItems[currentIndex].currency}{carouselItems[currentIndex].price?.toLocaleString()}
                          </div>
                          <div className="text-gray-400 text-sm">Starting Price</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">
                            {carouselItems[currentIndex].deliveryTime}
                          </div>
                          <div className="text-gray-400 text-sm">Delivery Time</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {carouselItems[currentIndex].tags?.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="text-3xl">⚡</span>
                          </div>
                          <p className="text-gray-300">AI Score: {carouselItems[currentIndex].aiScore}/100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="p-3 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2026;