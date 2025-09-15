import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Target, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  description: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    timeline: string;
  };
  readingTime: string;
  featured: boolean;
  url: string;
  tags: string[];
}

const RevolutionaryContent2026Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      description: 'Discover how synthetic intelligence is revolutionizing enterprise operations with 800% ROI and complete operational autonomy.',
      metrics: {
        roi: '800%',
        savings: '$5.2M',
        efficiency: '95%',
        timeline: '12 months'
      },
      readingTime: '25 min read',
      featured: true,
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-guide',
      tags: ['Synthetic Intelligence', 'Enterprise', 'ROI', 'Autonomy']
    },
    {
      id: 'synthetic-intelligence-case-study',
      title: 'Synthetic Intelligence Fortune 500 Transformation: $15M Annual Savings with 800% ROI',
      type: 'case-study',
      description: 'Real-world success story of a Fortune 500 company achieving unprecedented results with synthetic intelligence implementation.',
      metrics: {
        roi: '800%',
        savings: '$15M',
        efficiency: '95%',
        timeline: '12 months'
      },
      readingTime: '18 min read',
      featured: true,
      url: '/case-studies/synthetic-intelligence-fortune-500-transformation-800-roi-success',
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'Transformation']
    },
    {
      id: 'synthetic-intelligence-implementation',
      title: 'Synthetic Intelligence Implementation Master Guide 2026: From Strategy to 800% ROI',
      type: 'resource',
      description: 'Comprehensive implementation guide for achieving 800% ROI with synthetic intelligence across your enterprise operations.',
      metrics: {
        roi: '800%',
        savings: '$5.2M',
        efficiency: '95%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true,
      url: '/resources/synthetic-intelligence-implementation-master-guide-2026',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework']
    },
    {
      id: 'neural-interface-revolution',
      title: 'AI 2026: The Neural Interface Revolution - Ultimate Business Transformation Guide',
      type: 'blog',
      description: 'Explore how neural interfaces are transforming business operations with 1,200% ROI and post-human capabilities.',
      metrics: {
        roi: '1,200%',
        savings: '$8.5M',
        efficiency: '400%',
        timeline: '18 months'
      },
      readingTime: '28 min read',
      featured: true,
      url: '/blog/ai-2026-neural-interface-revolution-business-transformation',
      tags: ['Neural Interfaces', 'Business Transformation', 'ROI', 'Innovation']
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2026-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2026-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentItems[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Brain className="w-4 h-4" />;
      case 'case-study':
        return <Target className="w-4 h-4" />;
      case 'resource':
        return <Award className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'case-study':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'resource':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-purple-500/20 overflow-hidden"
    >
      {/* Background Pattern (replaced inline SVG with safe gradient for build stability) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-slate-900/20" />
      
      {/* Header */}
      <div className="relative p-6 border-b border-purple-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary Content 2026
              </h2>
              <p className="text-sm text-gray-400">Next-Generation AI Solutions</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content Carousel */}
      <div className="relative p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Content Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg border ${getTypeColor(currentContent.type)}`}>
                    {getTypeIcon(currentContent.type)}
                  </div>
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getTypeColor(currentContent.type)}`}>
                      {currentContent.type.replace('-', ' ').toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{currentContent.readingTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-yellow-400">Featured</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                {currentContent.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-3 border border-green-500/30">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400 font-medium">ROI</span>
                  </div>
                  <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                  <div className="flex items-center space-x-2 mb-1">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">Savings</span>
                  </div>
                  <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg p-3 border border-purple-500/30">
                  <div className="flex items-center space-x-2 mb-1">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-purple-400 font-medium">Efficiency</span>
                  </div>
                  <div className="text-lg font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-3 border border-orange-500/30">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-orange-400 font-medium">Timeline</span>
                  </div>
                  <div className="text-lg font-bold text-orange-400">{currentContent.metrics.timeline}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open(currentContent.url, '_blank')}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
                  Get Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-purple-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative p-6 border-t border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">500+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">98% Success Rate</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            {currentIndex + 1} of {contentItems.length}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContent2026Showcase;