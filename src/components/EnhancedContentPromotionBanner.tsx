import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Rocket, 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  X,
  BookOpen,
  FileText,
  PlayCircle,
  MessageSquare,
  Award,
  Globe,
  Shield,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PromotionalContent {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  link: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  stats: {
    views: number;
    likes: number;
    shares: number;
  };
  featured: boolean;
  newRelease: boolean;
}

const promotionalContent: PromotionalContent[] = [
  {
    id: 'neural-computing-revolution',
    title: '🧠 AI 2026: The Neural Computing Revolution',
    description: 'Discover how neural computing breakthroughs are delivering 10,000x performance improvements and reshaping entire industries.',
    type: 'blog',
    category: 'AI Innovation',
    link: '/blog/ai-2026-neural-computing-revolution',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600',
    badge: 'BREAKTHROUGH',
    stats: { views: 15420, likes: 892, shares: 234 },
    featured: true,
    newRelease: true
  },
  {
    id: 'quantum-autonomous-systems',
    title: '⚡ Quantum AI Autonomous Systems: The Future',
    description: 'Explore how quantum AI autonomous systems are revolutionizing business operations with self-healing capabilities.',
    type: 'blog',
    category: 'Quantum Computing',
    link: '/blog/quantum-ai-autonomous-systems-2026',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-cyan-600 to-blue-600',
    badge: 'INNOVATION',
    stats: { views: 12850, likes: 756, shares: 189 },
    featured: true,
    newRelease: true
  },
  {
    id: 'enterprise-transformation',
    title: '💰 $2.3B Revenue Impact Case Study',
    description: 'How a Fortune 500 company achieved $2.3 billion in additional revenue through comprehensive quantum AI transformation.',
    type: 'case-study',
    category: 'Case Study',
    link: '/case-studies/enterprise-quantum-ai-transformation-2026',
    icon: <Target className="w-6 h-6" />,
    color: 'from-emerald-600 to-teal-600',
    badge: 'SUCCESS',
    stats: { views: 18920, likes: 1123, shares: 456 },
    featured: true,
    newRelease: true
  },
  {
    id: 'quantum-implementation-guide',
    title: '📚 Quantum AI Implementation Master Guide',
    description: 'Complete guide to implementing quantum AI systems with step-by-step instructions and real-world case studies.',
    type: 'resource',
    category: 'Implementation Guide',
    link: '/resources/quantum-ai-implementation-master-guide-2026',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-orange-600 to-red-600',
    badge: 'COMPREHENSIVE',
    stats: { views: 9870, likes: 567, shares: 123 },
    featured: true,
    newRelease: true
  },
  {
    id: 'interactive-content-discovery',
    title: '🎯 Interactive Content Discovery 2026',
    description: 'Discover cutting-edge AI, quantum computing, and autonomous systems content with our interactive discovery platform.',
    type: 'service',
    category: 'Platform',
    link: '/interactive-content-discovery-2026',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-violet-600 to-purple-600',
    badge: 'PLATFORM',
    stats: { views: 6540, likes: 334, shares: 76 },
    featured: true,
    newRelease: true
  },
  {
    id: 'ai-revolution-2025',
    title: '🚀 AI Revolution 2025: Business Transformation',
    description: 'Comprehensive analysis of AI breakthroughs transforming business operations with 300% ROI improvements.',
    type: 'blog',
    category: 'AI Innovation',
    link: '/blog/ai-revolution-2025-transforming-business-operations',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-600 to-rose-600',
    badge: 'TRANSFORMATION',
    stats: { views: 8760, likes: 445, shares: 98 },
    featured: false,
    newRelease: false
  }
];

export default function EnhancedContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];
  const featuredContent = promotionalContent.filter(item => item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'case-study': return <Target className="w-4 h-4" />;
      case 'resource': return <BookOpen className="w-4 h-4" />;
      case 'service': return <Zap className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-3 left-1/4 w-2.5 h-2.5 bg-pink-400/60 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-6 right-1/3 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-spin">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  REVOLUTIONARY NEW CONTENT AVAILABLE!
                </span>
                <span className="text-xs text-gray-300">Latest AI breakthroughs, quantum computing innovations, and autonomous systems</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 group"
              aria-label="Close banner"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Main Content Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* Left - Main Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      {getTypeIcon(currentContent.type)}
                      <Badge className="bg-white/20 text-white border-white/30">
                        {currentContent.type.toUpperCase()}
                      </Badge>
                      {currentContent.newRelease && (
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30 animate-pulse">
                          <Sparkles className="w-3 h-3 mr-1" />
                          NEW
                        </Badge>
                      )}
                      <Badge className={`bg-gradient-to-r ${currentContent.color} text-white border-transparent`}>
                        {currentContent.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {currentContent.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {currentContent.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatNumber(currentContent.stats.views)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {formatNumber(currentContent.stats.likes)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {formatNumber(currentContent.stats.shares)}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link to={currentContent.link}>
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25">
                          <Star className="w-4 h-4 mr-2" />
                          Explore Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link to="/interactive-content-discovery-2026">
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                          <Globe className="w-4 h-4 mr-2" />
                          Discover All
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right - Visual */}
                  <div className="lg:col-span-1">
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${currentContent.color} relative overflow-hidden`}>
                      <div className="relative z-10">
                        <div className="text-6xl mb-4 opacity-80">
                          {currentContent.icon}
                        </div>
                        <div className="text-white/90 text-sm">
                          {currentContent.category}
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                {promotionalContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + promotionalContent.length) % promotionalContent.length)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % promotionalContent.length)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-lg text-white">Featured Content</h4>
              <Link to="/interactive-content-discovery-2026">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredContent.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <Link to={item.link}>
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} hover:scale-105 transition-transform duration-300 cursor-pointer group`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        {item.newRelease && (
                          <Badge className="bg-white/20 text-white border-white/30 text-xs">
                            NEW
                          </Badge>
                        )}
                      </div>
                      
                      <h5 className="font-semibold text-white text-sm mb-2 line-clamp-2">
                        {item.title.replace(/^[^\s]+\s/, '')}
                      </h5>
                      
                      <div className="flex items-center justify-between text-xs text-white/80">
                        <span>{item.category}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {formatNumber(item.stats.likes)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      </motion.div>
    </AnimatePresence>
  );
}