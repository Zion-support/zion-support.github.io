import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, Star, Clock, Users, Sparkles, Brain, Atom, Rocket, 
  TrendingUp, Award, Zap, Globe, Shield, Cpu, Database, Cloud 
} from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service' | 'webinar' | 'tool';
  category: string;
  readTime?: string;
  publishDate: string;
  featured: boolean;
  image?: string;
  href: string;
  tags: string[];
  stats?: {
    views?: number;
    likes?: number;
    shares?: number;
  };
}

const NewContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // New content items to promote
  const newContent: ContentItem[] = [
    {
      id: 'ai-quantum-revolution-2025',
      title: 'The AI Quantum Revolution: How 2025 is Transforming Everything',
      description: 'Discover how quantum AI is revolutionizing industries in 2025. Explore cutting-edge technologies and real-world applications.',
      type: 'blog',
      category: 'AI & Technology',
      readTime: '8 min read',
      publishDate: '2025-01-17',
      featured: true,
      href: '/blog/ai-quantum-revolution-2025',
      tags: ['AI', 'Quantum Computing', 'Technology', 'Innovation'],
      stats: {
        views: 12500,
        likes: 890,
        shares: 234
      }
    },
    {
      id: 'quantum-ai-healthcare-transformation',
      title: 'Quantum AI Healthcare Transformation: 300% Faster Drug Discovery',
      description: 'How we helped a major pharmaceutical company reduce drug discovery time from 10 years to 3 years using quantum AI.',
      type: 'case-study',
      category: 'Healthcare & Life Sciences',
      readTime: '12 min read',
      publishDate: '2025-01-15',
      featured: true,
      href: '/case-studies/quantum-ai-healthcare-transformation',
      tags: ['Healthcare', 'Drug Discovery', 'Case Study', 'Success Story'],
      stats: {
        views: 8900,
        likes: 567,
        shares: 189
      }
    },
    {
      id: 'quantum-ai-consulting-2025',
      title: 'Quantum AI Consulting 2025 - Transform Your Business',
      description: 'Expert quantum AI consulting services to revolutionize your business with cutting-edge AI solutions and strategies.',
      type: 'service',
      category: 'AI Consulting',
      readTime: '15 min read',
      publishDate: '2025-01-16',
      featured: true,
      href: '/services/quantum-ai-consulting-2025',
      tags: ['AI Consulting', 'Business Transformation', 'Quantum Computing', 'Strategy'],
      stats: {
        views: 15600,
        likes: 1200,
        shares: 456
      }
    },
    {
      id: 'ai-2025-implementation-masterclass',
      title: 'AI 2025 Implementation Masterclass - Free Webinar',
      description: 'Join our exclusive webinar and learn how to implement cutting-edge AI solutions in your organization.',
      type: 'webinar',
      category: 'Education & Training',
      readTime: '60 min',
      publishDate: '2025-01-20',
      featured: true,
      href: '/webinars/ai-2025-implementation-masterclass',
      tags: ['Webinar', 'Masterclass', 'AI Implementation', 'Free'],
      stats: {
        views: 25000,
        likes: 1800,
        shares: 789
      }
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return Brain;
      case 'case-study': return Award;
      case 'service': return Rocket;
      case 'webinar': return Users;
      case 'tool': return Cpu;
      default: return Sparkles;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-cyan-500 to-blue-600';
      case 'case-study': return 'from-emerald-500 to-teal-600';
      case 'service': return 'from-purple-500 to-pink-600';
      case 'webinar': return 'from-orange-500 to-red-600';
      case 'tool': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Healthcare')) return Shield;
    if (category.includes('Education')) return Users;
    if (category.includes('Technology')) return Cpu;
    return Sparkles;
  };

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % newContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, newContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleContentClick = (href: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'content_promotion_click', {
        event_category: 'engagement',
        event_label: 'new_content_banner',
        content_href: href
      });
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentContentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-500/95 to-purple-600/95 backdrop-blur-lg border-b border-cyan-400/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Content Display */}
            <div className="flex-1 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-white font-semibold text-sm">NEW CONTENT</span>
                </div>
                
                <div className="w-px h-6 bg-white/30"></div>
                
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${getTypeColor(currentContent.type)} rounded-lg flex items-center justify-center`}>
                    {React.createElement(getTypeIcon(currentContent.type), { className: "w-4 h-4 text-white" })}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{currentContent.category}</div>
                    <div className="text-white/80 text-xs">{currentContent.publishDate}</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 ml-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg line-clamp-1">
                    {currentContent.title}
                  </h3>
                  {currentContent.featured && (
                    <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                
                <p className="text-white/90 text-sm line-clamp-1 mb-2">
                  {currentContent.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-white/80">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentContent.readTime}</span>
                  </div>
                  
                  {currentContent.stats && (
                    <>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{currentContent.stats.views?.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{currentContent.stats.likes} likes</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Content Navigation Dots */}
              <div className="flex gap-1">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentContentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              <div className="w-px h-6 bg-white/30"></div>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                title={isAutoPlaying ? 'Pause auto-rotation' : 'Resume auto-rotation'}
              >
                <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
              </button>

              {/* Read More Button */}
              <Link 
                href={currentContent.href}
                onClick={() => handleContentClick(currentContent.href)}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 group"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 text-white/80 hover:text-white"
                title="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-white/70 text-xs">Tags:</span>
            <div className="flex gap-1">
              {currentContent.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {currentContent.tags.length > 3 && (
                <span className="text-white/70 text-xs">
                  +{currentContent.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner;