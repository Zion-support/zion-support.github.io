import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ExternalLink, Star } from 'lucide-react';
const DynamicContentCarousel2025: React.FC = () => {
<<<<<<< HEAD
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const contentItems = [
=======
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
>>>>>>> origin/new-content-merge-1758000738
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time insights and predictive analytics that transform raw data into actionable business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Analytics",
      rating: 4.9,
      views: "2.3M",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum algorithms that solve complex optimization problems in seconds instead of years.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      category: "Quantum Tech",
      rating: 4.8,
      views: "1.8M",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Platform",
      description: "Direct brain-computer interfaces that enable seamless interaction between human thought and digital systems.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
      category: "Neural Tech",
      rating: 4.9,
      views: "3.1M",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Autonomous AI Systems",
      description: "Self-managing AI that learns, adapts, and optimizes business processes without human intervention.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI Systems",
      rating: 4.7,
      views: "2.7M",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
<<<<<<< HEAD
      title: "Blockchain Integration Suite",
      description: "Secure, decentralized solutions that enhance transparency and trust in business transactions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      category: "Blockchain",
      rating: 4.6,
      views: "1.9M",
      gradient: "from-purple-500 to-pink-600"
=======
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication and thought control technology",
      image: "🧬",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/NeuralInterfaceFuture"
>>>>>>> origin/new-content-merge-1758000738
    }
  ];
  useEffect(() => {
<<<<<<< HEAD
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);
=======
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

>>>>>>> origin/new-content-merge-1758000738
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };
<<<<<<< HEAD
  const currentItem = contentItems[currentIndex];
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" />
            Featured Content
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthroughs and cutting-edge solutions that are shaping the future of technology.
          </p>
        </div>
        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-8 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentItem.gradient} text-white text-sm font-semibold`}>
                        {currentItem.category}
                      </div>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-semibold">{currentItem.rating}</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {currentItem.views} views
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      {currentItem.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      {currentItem.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                        Watch Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                      >
                        Learn More
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <h4 className="text-white font-semibold text-lg mb-2">{currentItem.title}</h4>
                          <p className="text-gray-300 text-sm line-clamp-2">{currentItem.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-3">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-indigo-400 to-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-green-500/20 border-green-500/50 text-green-400'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <Play className={`w-6 h-6 ${isAutoPlaying ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
=======

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-96">
        {/* Slide Content */}
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 float-left">
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="text-8xl mb-6 animate-pulse">{slide.image}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <a 
                    href={slide.link}
                    className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                  >
                    Explore {slide.title} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
>>>>>>> origin/new-content-merge-1758000738
        </div>
      </div>
    </section>
  );
};


export default DynamicContentCarousel2025;
