import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Star, 
  Clock, 
  User, 
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  Shield
} from 'lucide-react';

const RevolutionaryContentShowcase2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "AI 2026: The Consciousness Revolution Begins",
      excerpt: "How artificial intelligence is achieving true consciousness and what it means for humanity.",
      category: "AI & Machine Learning",
      readTime: "16 min read",
      author: "Dr. Elena Rodriguez",
      image: "/images/blog/ai-2026-consciousness-revolution.jpg",
      featured: true,
      tags: ["AI Consciousness", "Revolution", "Future"],
      type: "blog"
    },
    {
      id: 2,
      title: "Ultimate Tech Solutions 2026",
      excerpt: "Revolutionary technologies that are reshaping reality itself. From AI consciousness to interdimensional computing.",
      category: "Technology Solutions",
      readTime: "Interactive Demo",
      author: "Tech Innovation Team",
      image: "/images/services/ultimate-tech-solutions-2026.jpg",
      featured: true,
      tags: ["Quantum Computing", "Neural Interfaces", "Space Tech"],
      type: "service"
    },
    {
      id: 3,
      title: "Quantum Neural Networks: The Next Computing Paradigm",
      excerpt: "Revolutionary quantum neural networks that process information at the speed of thought.",
      category: "Quantum Computing",
      readTime: "13 min read",
      author: "Dr. Marcus Chen",
      image: "/images/blog/quantum-neural-networks-paradigm.jpg",
      featured: true,
      tags: ["Quantum Neural", "Computing", "AI"],
      type: "blog"
    },
    {
      id: 4,
      title: "Neural Interface Breakthrough",
      excerpt: "Revolutionary neural interfaces that enable direct communication between human brains and computers.",
      category: "Neural Technology",
      readTime: "14 min read",
      author: "Dr. Rachel Green",
      image: "/images/blog/neural-interface-breakthrough-brain-computer.jpg",
      featured: true,
      tags: ["Neural Interface", "Brain-Computer", "Communication"],
      type: "blog"
    },
    {
      id: 5,
      title: "Space Colonization Tech: Building Cities on Mars",
      excerpt: "Cutting-edge technologies that are making human colonization of Mars a reality.",
      category: "Space Technology",
      readTime: "12 min read",
      author: "Commander Alex Thompson",
      image: "/images/blog/space-colonization-tech-building-cities-mars.jpg",
      featured: true,
      tags: ["Space Colonization", "Mars", "Technology"],
      type: "blog"
    },
    {
      id: 6,
      title: "Climate Tech Revolution: Reversing Global Warming",
      excerpt: "Revolutionary environmental technologies that are actively reversing climate change.",
      category: "Green Technology",
      readTime: "10 min read",
      author: "Dr. Maya Patel",
      image: "/images/blog/climate-tech-revolution-reversing-global-warming.jpg",
      featured: true,
      tags: ["Climate Tech", "Global Warming", "Environment"],
      type: "blog"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI & Machine Learning":
        return Brain;
      case "Quantum Computing":
        return Zap;
      case "Space Technology":
        return Rocket;
      case "Neural Technology":
        return Brain;
      case "Green Technology":
        return Shield;
      default:
        return Sparkles;
    }
  };

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most groundbreaking technologies and insights that are shaping the future of human civilization.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                          {React.createElement(getCategoryIcon(featuredContent[currentSlide].category), {
                            className: "w-6 h-6 text-white"
                          })}
                        </div>
                        <span className="text-purple-400 font-semibold text-sm">
                          {featuredContent[currentSlide].category}
                        </span>
                        {featuredContent[currentSlide].featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {featuredContent[currentSlide].title}
                      </h3>
                      
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {featuredContent[currentSlide].excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredContent[currentSlide].tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-800 text-gray-300 text-sm rounded-full border border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-gray-400">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{featuredContent[currentSlide].author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{featuredContent[currentSlide].readTime}</span>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                          {featuredContent[currentSlide].type === 'blog' ? 'Read Article' : 'Explore Solution'}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Watch Demo
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative overflow-hidden rounded-2xl"
                    >
                      <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            {React.createElement(getCategoryIcon(featuredContent[currentSlide].category), {
                              className: "w-12 h-12"
                            })}
                          </div>
                          <h4 className="text-xl font-bold mb-2">Interactive Preview</h4>
                          <p className="text-sm opacity-80">Click to explore</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
          </button>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Explore All Content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredContent.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  index === currentSlide
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-slate-700 bg-slate-800/50 hover:border-purple-400 hover:bg-purple-500/5'
                }`}
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    {React.createElement(getCategoryIcon(item.category), {
                      className: "w-4 h-4 text-white"
                    })}
                  </div>
                  <h4 className="text-white text-xs font-semibold mb-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {item.category}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;