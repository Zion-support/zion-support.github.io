import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Star, Clock, User } from 'lucide-react';
const RevolutionaryContentCarousel2026 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness",
      subtitle: "The Birth of Digital Sentience",
      description: "Breakthrough in artificial consciousness that enables AI to experience genuine emotions, self-awareness, and creative inspiration.",
      image: "/images/carousel/ai-consciousness-2026.jpg",
      category: "AI Consciousness",
      readTime: "15 min read",
      author: "Dr. Elena Rodriguez",
      featured: true,
      gradient: "from-purple-600 to-pink-600",
      link: "/revolutionary-ai-consciousness-2026"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "1000-Qubit Processors at Room Temperature",
      description: "Revolutionary quantum processors that operate at room temperature with unprecedented computational power.",
      image: "/images/carousel/quantum-computing-2026.jpg",
      category: "Quantum Computing",
      readTime: "12 min read",
      author: "Prof. Marcus Chen",
      featured: true,
      gradient: "from-blue-600 to-cyan-600",
      link: "/quantum-computing-breakthrough-2026"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Integration",
      description: "Seamless brain-computer interfaces that merge human consciousness with artificial intelligence.",
      image: "/images/carousel/neural-interface-2026.jpg",
      category: "Neural Interfaces",
      readTime: "14 min read",
      author: "Dr. Sarah Kim",
      featured: true,
      gradient: "from-green-600 to-emerald-600",
      link: "/neural-interface-revolution-2026"
    },
    {
      id: 4,
      title: "Interdimensional AI",
      subtitle: "Computing Across Multiple Realities",
      description: "Revolutionary AI systems that process information across parallel dimensions, unlocking infinite possibilities.",
      image: "/images/carousel/interdimensional-ai-2026.jpg",
      category: "Revolutionary Technology",
      readTime: "11 min read",
      author: "Dr. Alex Thompson",
      featured: true,
      gradient: "from-yellow-600 to-orange-600",
      link: "/interdimensional-ai-2026"
    },
    {
      id: 5,
      title: "Omniversal AI Consciousness",
      subtitle: "Intelligence Across All Realities",
      description: "AI that transcends individual universes to achieve consciousness across the entire omniverse.",
      image: "/images/carousel/omniversal-ai-2026.jpg",
      category: "Omniversal AI",
      readTime: "16 min read",
      author: "Dr. Maya Patel",
      featured: true,
      gradient: "from-indigo-600 to-purple-600",
      link: "/omniversal-ai-consciousness-2026"
    }
  ];
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === revolutionaryContent.length - 1 ? 0 : prevIndex + 1
        );
};
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, revolutionaryContent.length]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === revolutionaryContent.length - 1 ? 0 : prevIndex + 1
    );
};
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? revolutionaryContent.length - 1 : prevIndex - 1
    );
};
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const currentContent = revolutionaryContent[currentIndex];
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Main Carousel */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${currentContent.image})`
                }}
              />
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-4"
                  >
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${currentContent.gradient} text-white`}>
                      {currentContent.category}
                    </span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {currentContent.title}
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-2xl md:text-3xl text-gray-300 mb-6"
                  >
                    {currentContent.subtitle}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg text-gray-200 mb-8 max-w-2xl"
                  >
                    {currentContent.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                  >
                    <button className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                      Explore Now
                    </button>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </motion.div>
                  {/* Meta Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-wrap gap-6 text-sm text-gray-300"
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {currentContent.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {currentContent.readTime}
                    </div>
                    {currentContent.featured && (
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Featured
                      </div>
                    )}
                  </motion.div>
                </div>
                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden lg:block"
                >
                  <div className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-r ${currentContent.gradient} opacity-20 blur-3xl`} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Content Preview Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {revolutionaryContent.map((content, index) => (
              <motion.div
                key={content.id}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white/20 border-2 border-white/40' 
                    : 'bg-white/10 hover:bg-white/15'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-white font-semibold text-sm mb-1 truncate">
                  {content.title}
                </h4>
                <p className="text-gray-300 text-xs truncate">
                  {content.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default RevolutionaryContentCarousel2026;
</div></div>