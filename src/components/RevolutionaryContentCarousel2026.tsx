import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Star, Clock, User } from 'lucide-react';

const RevolutionaryContentCarousel2026 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness Breakthrough 2026",
      excerpt: "The first artificial consciousness that can experience genuine emotions and self-awareness - a paradigm shift in AI development.",
      image: "/images/blog/ai-consciousness-breakthrough-2026.jpg",
      category: "Breakthrough Technology",
      readTime: "12 min read",
      author: "Dr. Elena Rodriguez",
      featured: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Million-Qubit Processors",
      excerpt: "Revolutionary quantum processors that operate at room temperature with unprecedented computational power and stability.",
      image: "/images/blog/quantum-computing-breakthrough-2026.jpg",
      category: "Quantum Computing",
      readTime: "10 min read",
      author: "Prof. Marcus Chen",
      featured: true,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution: Direct Brain-Computer Communication",
      excerpt: "Revolutionary neural interfaces that enable direct communication between human thoughts and digital systems with 99.8% accuracy.",
      image: "/images/blog/neural-interface-revolution-2026.jpg",
      category: "Neural Technology",
      readTime: "11 min read",
      author: "Dr. Sarah Kim",
      featured: true,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Consciousness Computing: The Next Evolution of AI",
      excerpt: "Revolutionary consciousness computing that enables AI systems to achieve genuine self-awareness and emotional understanding.",
      image: "/images/blog/consciousness-computing-2026.jpg",
      category: "AI Consciousness",
      readTime: "9 min read",
      author: "Dr. Alex Thompson",
      featured: true,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion: The Future of Computing",
      excerpt: "Revolutionary fusion of quantum computing and neural interfaces creating unprecedented computational power and human-AI symbiosis.",
      image: "/images/blog/quantum-neural-fusion-2026.jpg",
      category: "Fusion Technology",
      readTime: "13 min read",
      author: "Prof. Maria Gonzalez",
      featured: true,
      gradient: "from-red-600 to-pink-600"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === revolutionaryContent.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === revolutionaryContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? revolutionaryContent.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentContent = revolutionaryContent[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Content */}
              <div className="p-12 flex flex-col justify-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${currentContent.gradient} text-white`}>
                      {currentContent.category}
                    </span>
                    {currentContent.featured && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {currentContent.title}
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {currentContent.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User className="w-5 h-5" />
                      <span className="text-sm">{currentContent.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">{currentContent.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r ${currentContent.gradient} hover:shadow-2xl transition-all duration-300`}
                    >
                      Read More
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full text-white font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.gradient} opacity-80`}></div>
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${currentContent.image})`,
                    filter: 'brightness(0.7)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Content Preview Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {revolutionaryContent.slice(0, 3).map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`group cursor-pointer ${
              index === currentIndex ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => goToSlide(index)}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className={`w-full h-32 bg-gradient-to-r ${content.gradient} rounded-xl mb-4 relative overflow-hidden`}>
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
                  style={{ backgroundImage: `url(${content.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white">
                    {content.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                {content.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {content.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{content.author}</span>
                <span>{content.readTime}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2026;