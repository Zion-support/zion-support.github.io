'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Share2,
  Heart,
  Bookmark,
  Eye,
  Clock,
  Star,
  TrendingUp,
  Sparkles,
  Zap,
  Brain,
  Cpu,
  Rocket,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const DynamicContentCarousel = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isPlayingsetIsPlaying] = useState(true);
  const [isMutedsetIsMuted] = useState(false);
  const [isFullscreensetIsFullscreen] = useState(false);
  const [favoritesetFavorites] = useState(new Set());
  const [bookmarksetBookmarks] = useState(new Set());
  const [viewedItemsetViewedItems] = useState(new Set());
  const intervalRef = useRef(null);

  const carouselItems = [
    {
      id: 1,
      title: 'AI Consciousness Breakthrough 2025',
      description: 'Revolutionary AI systems achieving consciousness-level processing and decision making',
      category: 'ai-breakthroughs',
      type: 'video',
      duration: '12:34',
      views: 15420,
      likes: 892,
      isTrending: true,
      isNew: true,
      isLive: false,
      thumbnail: '🧠',
      author: 'Dr. Sarah Chen',
      publishedAt: '2025-01-20',
      tags: ['AI', 'Consciousness', 'Breakthrough', '2025'],
      gradient: 'from-purple-600 to-blue-600',
      stats: {
        performance: '+5000%',
        accuracy: '99.9%',
        efficiency: '100x',
        adoption: '1M+'
      }
    },
    {
      id: 2,
      title: 'Quantum Neural Networks Explained',
      description: 'How quantum computing is revolutionizing neural network architectures and processing',
      category: 'quantum-computing',
      type: 'interactive',
      duration: '8:45',
      views: 8930,
      likes: 456,
      isTrending: false,
      isNew: false,
      isLive: true,
      thumbnail: '⚛️',
      author: 'Prof. Marcus Rodriguez',
      publishedAt: '2025-01-18',
      tags: ['Quantum', 'Neural Networks', 'Computing', 'Tutorial'],
      gradient: 'from-cyan-600 to-teal-600',
      stats: {
        qubits: '1000+',
        coherence: '100ms',
        fidelity: '99.99%',
        speed: '10^15x'
      }
    },
    {
      id: 3,
      title: 'Neural Interface Implementation',
      description: 'Step-by-step guide to implementing brain-computer interfaces in real applications',
      category: 'neural-interfaces',
      type: 'demo',
      duration: '15:22',
      views: 6780,
      likes: 234,
      isTrending: true,
      isNew: false,
      isLive: false,
      thumbnail: '🔗',
      author: 'Dr. Emily Watson',
      publishedAt: '2025-01-15',
      tags: ['Neural Interface', 'BCI', 'Implementation', 'Guide'],
      gradient: 'from-pink-600 to-rose-600',
      stats: {
        resolution: '1μV',
        response: '50ms',
        accuracy: '95%',
        users: '1M+'
      }
    },
    {
      id: 4,
      title: 'Autonomous Business Operations',
      description: 'How AI is creating fully autonomous business systems and workflows',
      category: 'automation',
      type: 'case-study',
      duration: '6:18',
      views: 12340,
      likes: 678,
      isTrending: false,
      isNew: true,
      isLive: false,
      thumbnail: '🤖',
      author: 'Alex Thompson',
      publishedAt: '2025-01-12',
      tags: ['Automation', 'Business', 'AI', 'Operations'],
      gradient: 'from-green-600 to-emerald-600',
      stats: {
        efficiency: '+300%',
        cost: '-60%',
        uptime: '99.9%',
        roi: '500%'
      }
    },
    {
      id: 5,
      title: 'Quantum AI Fusion Technology',
      description: 'The convergence of quantum computing and artificial intelligence',
      category: 'quantum-computing',
      type: 'research',
      duration: '22:15',
      views: 5670,
      likes: 345,
      isTrending: true,
      isNew: false,
      isLive: false,
      thumbnail: '🔬',
      author: 'Dr. James Liu',
      publishedAt: '2025-01-10',
      tags: ['Quantum AI', 'Fusion', 'Technology', 'Research'],
      gradient: 'from-indigo-600 to-purple-600',
      stats: {
        processing: '1000x',
        accuracy: '99.8%',
        energy: '-90%',
        speed: '10^12x'
      }
    },
    {
      id: 6,
      title: 'AI Tools Mastery Course',
      description: 'Complete course on mastering the latest AI development tools and frameworks',
      category: 'tutorials',
      type: 'course',
      duration: '45:30',
      views: 9870,
      likes: 567,
      isTrending: false,
      isNew: true,
      isLive: false,
      thumbnail: '🛠️',
      author: 'Tech Academy',
      publishedAt: '2025-01-08',
      tags: ['AI Tools', 'Course', 'Tutorial', 'Mastery'],
      gradient: 'from-orange-600 to-red-600',
      stats: {
        students: '50K+',
        completion: '85%',
        rating: '4.9/5',
        projects: '100+'
      }
    }
  ];

  const currentItem = carouselItems[currentSlide];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const toggleBookmark = (id) => {
    setBookmarks(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(id)) {
        newBookmarks.delete(id);
      } else {
        newBookmarks.add(id);
      }
      return newBookmarks;
    });
  };

  const markAsViewed = (id) => {
    setViewedItems(prev => new Set([...previd]));
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return '🎥';
      case 'interactive': return '🎮';
      case 'demo': return '🖥️';
      case 'case-study': return '📊';
      case 'research': return '🔬';
      case 'course': return '🎓';
      default: return '📄';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ai-breakthroughs': return Brain;
      case 'quantum-computing': return Cpu;
      case 'neural-interfaces': return Zap;
      case 'automation': return Rocket;
      case 'tutorials': return Bookmark;
      default: return Lightbulb;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Dynamic Content Carousel
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Explore Revolutionary Content
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the latest AI breakthroughsquantum computing innovationsand neural interface technologies through our interactive content carousel.
          </motion.p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Left Side - Content Preview */}
              <div className="space-y-6">
                {/* Content Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{currentItem.thumbnail}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{getTypeIcon(currentItem.type)}</span>
                        <span className="text-sm font-medium text-purple-300 uppercase tracking-wide">
                          {currentItem.type}
                        </span>
                        {currentItem.isLive && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                            LIVE
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {currentItem.isNew && (
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {currentItem.isTrending && (
                          <TrendingUp className="w-4 h-4 text-orange-400" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleFavorite(currentItem.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.has(currentItem.id)
                          ? 'text-red-500 hover:text-red-400'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.has(currentItem.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => toggleBookmark(currentItem.id)}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has(currentItem.id)
                          ? 'text-blue-500 hover:text-blue-400'
                          : 'text-gray-400 hover:text-blue-500'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${bookmarks.has(currentItem.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 rounded-full text-gray-400 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content Title and Description */}
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {currentItem.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {currentItem.description}
                  </p>
                </div>

                {/* Content Meta */}
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {currentItem.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {currentItem.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    {currentItem.likes} likes
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    4.9/5
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {currentItem.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{currentItem.author}</p>
                    <p className="text-sm text-gray-400">{currentItem.publishedAt}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Stats and Controls */}
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentItem.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20"
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Controls */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                      onClick={togglePlayPause}
                      className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => markAsViewed(currentItem.id)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Watch Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <button className="w-full border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {carouselItems.map((_index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">More Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carouselItems.map((itemindex) => {
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <motion.button
                  key={item.id}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{item.thumbnail}</div>
                    <div className="text-xs font-medium text-white mb-1 line-clamp-2">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {item.duration}
                    </div>
                  </div>
                  
                  {item.isNew && (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-1 py-0.5 rounded-full">
                      NEW
                    </div>
                  )}
                  
                  {item.isTrending && (
                    <div className="absolute -top-1 -left-1">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;