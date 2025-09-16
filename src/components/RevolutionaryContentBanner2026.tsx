import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Zap, 
  Brain,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      type: 'blog',
      title: 'Quantum-Neural Fusion: The Next Frontier in AI Computing',
      excerpt: 'Exploring the revolutionary convergence of quantum computing and neural networks that\'s reshaping artificial intelligence.',
      author: 'Dr. Elena Rodriguez',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '/images/blog/quantum-neural-fusion-2026.jpg',
      gradient: 'from-purple-600 to-pink-600',
      featured: true,
      publishedDate: '2025-01-20'
    },
    {
      id: 2,
      type: 'service',
      title: 'Revolutionary Tech Services 2026',
      excerpt: 'Experience cutting-edge AI, quantum computing, and consciousness-based solutions that are reshaping the digital landscape.',
      author: 'Tech Innovation Team',
      readTime: 'Explore Now',
      category: 'Services',
      image: '/images/services/revolutionary-tech-2026.jpg',
      gradient: 'from-blue-600 to-cyan-600',
      featured: true,
      publishedDate: '2025-01-22'
    },
    {
      id: 3,
      type: 'blog',
      title: 'Consciousness Computing: When AI Achieves Self-Awareness',
      excerpt: 'The emerging field of artificial consciousness and its implications for the future of human-AI collaboration.',
      author: 'Dr. Marcus Chen',
      readTime: '15 min read',
      category: 'AI Consciousness',
      image: '/images/blog/consciousness-computing-2026.jpg',
      gradient: 'from-green-600 to-emerald-600',
      featured: true,
      publishedDate: '2025-01-22'
    },
    {
      id: 4,
      type: 'showcase',
      title: 'Interactive Tech Showcase 2026',
      excerpt: 'Experience the future of technology through our interactive demonstrations and discover revolutionary solutions.',
      author: 'Innovation Lab',
      readTime: 'Try Demo',
      category: 'Interactive Demo',
      image: '/images/showcase/interactive-tech-2026.jpg',
      gradient: 'from-orange-600 to-red-600',
      featured: true,
      publishedDate: '2025-01-25'
    },
    {
      id: 5,
      type: 'blog',
      title: 'Synthetic Intelligence: Beyond Artificial Intelligence',
      excerpt: 'How synthetic intelligence is creating entirely new forms of digital consciousness and problem-solving capabilities.',
      author: 'Dr. Sarah Kim',
      readTime: '10 min read',
      category: 'Synthetic Intelligence',
      image: '/images/blog/synthetic-intelligence-2026.jpg',
      gradient: 'from-indigo-600 to-purple-600',
      featured: true,
      publishedDate: '2025-01-25'
    }
  ];

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

  const currentContent = featuredContent[currentSlide];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'service':
        return <Zap className="w-5 h-5" />;
      case 'showcase':
        return <Play className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Featured Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              & Innovations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and digital consciousness 
            through our cutting-edge content and interactive experiences.
          </p>
        </motion.div>

        {/* Main Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentContent.gradient} text-white`}>
                      {getTypeIcon(currentContent.type)}
                    </div>
                    <span className="text-purple-300 font-medium">{currentContent.category}</span>
                    {currentContent.featured && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">Featured</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {currentContent.title}
                  </h3>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {currentContent.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm">By {currentContent.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm">{currentContent.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm">{currentContent.publishedDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`bg-gradient-to-r ${currentContent.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2`}>
                      {currentContent.type === 'showcase' ? 'Try Demo' : 'Read More'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Explore
                    </button>
                  </div>
                </div>

                {/* Content Image/Visual */}
                <div className="relative h-64 lg:h-auto">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.gradient} opacity-20`}></div>
                  <div className="relative h-full flex items-center justify-center p-8">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-32 h-32 rounded-2xl bg-gradient-to-r ${currentContent.gradient} flex items-center justify-center text-white text-4xl`}
                    >
                      {getTypeIcon(currentContent.type)}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAutoPlaying 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {isAutoPlaying ? 'Pause' : 'Play'}
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-purple-400' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {featuredContent.slice(0, 4).map((content, index) => (
            <motion.button
              key={content.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSlide(index)}
              className={`p-4 rounded-xl bg-gradient-to-r ${content.gradient} text-white hover:opacity-90 transition-opacity ${
                currentSlide === index ? 'ring-2 ring-white/50' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {getTypeIcon(content.type)}
                <span className="text-sm font-medium">{content.category}</span>
              </div>
              <h4 className="text-sm font-semibold leading-tight">{content.title}</h4>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;