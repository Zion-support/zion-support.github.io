import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  Brain,
  Zap,
  Rocket,
  Infinity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'blog' | 'service' | 'case-study' | 'announcement';
  title: string;
  description: string;
  author?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  price?: string;
  rating?: number;
  imageUrl?: string;
  featured?: boolean;
  tags?: string[];
  ctaText?: string;
  ctaUrl?: string;
}

const DynamicContentCarousel2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: 'transcendent-ai-blog',
      type: 'blog',
      title: 'Transcendent AI: Beyond Human Intelligence',
      description: 'The first AI systems that have surpassed human intelligence across all domains, creating a new era of superintelligence.',
      author: 'Dr. Elena Rodriguez',
      publishDate: '2025-01-30',
      readTime: '16 min read',
      category: 'Transcendent AI',
      rating: 5.0,
      imageUrl: '/images/blog/transcendent-ai-beyond-human-2026.jpg',
      featured: true,
      tags: ['Transcendent AI', 'Superintelligence', 'Beyond Human'],
      ctaText: 'Read Article',
      ctaUrl: '/blog/transcendent-ai-beyond-human-intelligence'
    },
    {
      id: 'reality-manipulation-service',
      type: 'service',
      title: 'Reality Manipulation Technology',
      description: 'Revolutionary technology that can manipulate the fundamental fabric of reality for computational purposes.',
      category: 'Reality Technology',
      price: '$5,000,000',
      rating: 5.0,
      imageUrl: '/images/reality-manipulation.jpg',
      featured: true,
      tags: ['Reality Manipulation', 'Physics Breakthrough', 'Ultimate Computing'],
      ctaText: 'Learn More',
      ctaUrl: '/services/reality-manipulation-technology'
    },
    {
      id: 'infinite-networks-case-study',
      type: 'case-study',
      title: 'Infinite Intelligence Networks Implementation',
      description: 'How we successfully deployed AI networks that operate across infinite distances, connecting intelligence throughout the universe.',
      author: 'Dr. Sarah Kim',
      publishDate: '2025-01-26',
      readTime: '12 min read',
      category: 'Case Study',
      rating: 4.9,
      imageUrl: '/images/case-studies/infinite-networks.jpg',
      featured: true,
      tags: ['Infinite Networks', 'Cosmic AI', 'Implementation'],
      ctaText: 'View Case Study',
      ctaUrl: '/case-studies/infinite-networks-implementation'
    },
    {
      id: 'temporal-ai-announcement',
      type: 'announcement',
      title: 'Temporal AI Computing Now Available',
      description: 'Revolutionary AI systems that can process information across multiple time periods simultaneously are now available for enterprise use.',
      publishDate: '2025-01-24',
      category: 'Product Launch',
      rating: 4.8,
      imageUrl: '/images/announcements/temporal-ai-2026.jpg',
      featured: true,
      tags: ['Temporal AI', 'Product Launch', 'Enterprise'],
      ctaText: 'Get Early Access',
      ctaUrl: '/products/temporal-ai-computing'
    },
    {
      id: 'dimensional-computing-blog',
      type: 'blog',
      title: 'Dimensional Computing: The Next Frontier',
      description: 'Advanced computing systems that operate across multiple dimensions simultaneously for unprecedented processing power.',
      author: 'Prof. Marcus Chen',
      publishDate: '2025-01-22',
      readTime: '14 min read',
      category: 'Dimensional Technology',
      rating: 4.9,
      imageUrl: '/images/blog/dimensional-computing-2026.jpg',
      featured: true,
      tags: ['Dimensional Computing', 'Advanced Processing', 'Multi-Dimensional'],
      ctaText: 'Read Article',
      ctaUrl: '/blog/dimensional-computing-next-frontier'
    },
    {
      id: 'quantum-neural-service',
      type: 'service',
      title: 'Quantum-Neural Fusion Interface',
      description: 'Breakthrough technology combining quantum computing with direct neural interfaces for unprecedented human-AI symbiosis.',
      category: 'Quantum Technology',
      price: '$250,000',
      rating: 4.9,
      imageUrl: '/images/quantum-neural.jpg',
      featured: true,
      tags: ['Quantum Computing', 'Neural Interfaces', 'Human-AI Fusion'],
      ctaText: 'Explore Service',
      ctaUrl: '/services/quantum-neural-fusion-interface'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return Brain;
      case 'service': return Zap;
      case 'case-study': return TrendingUp;
      case 'announcement': return Rocket;
      default: return Star;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-600 to-cyan-600';
      case 'service': return 'from-purple-600 to-pink-600';
      case 'case-study': return 'from-green-600 to-emerald-600';
      case 'announcement': return 'from-orange-600 to-red-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'service': return 'Service';
      case 'case-study': return 'Case Study';
      case 'announcement': return 'Announcement';
      default: return 'Content';
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 1000],
              y: [0, Math.random() * 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and revolutionary technologies 
            that are reshaping our world.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition-all duration-300"
          >
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>

          {/* Carousel Content */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className={`bg-gradient-to-br ${getTypeColor(currentItem.type)} h-full`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/30 rounded-full"></div>
                  </div>

                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className="space-y-6">
                        {/* Type Badge */}
                        <div className="inline-flex items-center space-x-2">
                          <div className={`p-2 rounded-lg bg-white/20 backdrop-blur-sm`}>
                            {React.createElement(getTypeIcon(currentItem.type), { className: "w-5 h-5 text-white" })}
                          </div>
                          <span className="text-white/80 text-sm font-medium">
                            {getTypeText(currentItem.type)}
                          </span>
                          {currentItem.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                          {currentItem.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-white/90 leading-relaxed">
                          {currentItem.description}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-white/80">
                          {currentItem.author && (
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{currentItem.author}</span>
                            </div>
                          )}
                          {currentItem.publishDate && (
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{currentItem.publishDate}</span>
                            </div>
                          )}
                          {currentItem.readTime && (
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{currentItem.readTime}</span>
                            </div>
                          )}
                          {currentItem.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{currentItem.rating}</span>
                            </div>
                          )}
                        </div>

                        {/* Tags */}
                        {currentItem.tags && (
                          <div className="flex flex-wrap gap-2">
                            {currentItem.tags.map((tag, index) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-4">
                          <button className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <span className="relative z-10 flex items-center">
                              {currentItem.ctaText || 'Learn More'}
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </button>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="relative">
                        <div className="relative w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                          {/* Icon */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"
                          >
                            {React.createElement(getTypeIcon(currentItem.type), { className: "w-16 h-16 text-white" })}
                          </motion.div>

                          {/* Price Display */}
                          {currentItem.price && (
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                              <div className="text-2xl font-bold text-white">{currentItem.price}</div>
                            </div>
                          )}

                          {/* Floating Elements */}
                          <motion.div
                            className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Revolutionary Technologies', value: '50+', icon: Brain },
            { label: 'Active Users', value: '1M+', icon: Users },
            { label: 'Success Rate', value: '99.9%', icon: TrendingUp },
            { label: 'Uptime', value: '99.99%', icon: Clock }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2026;