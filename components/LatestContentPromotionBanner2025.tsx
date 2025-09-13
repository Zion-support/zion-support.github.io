import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Zap, 
  Clock, 
  Users, 
  Award, 
  Rocket, 
  ArrowRight,
  X,
  Play,
  BookOpen,
  FileText,
  Video,
  Tool,
  Globe
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'guide' | 'case-study' | 'tool' | 'video' | 'whitepaper' | 'webinar';
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  tags: string[];
  featured: boolean;
  trending: boolean;
  new: boolean;
  views: number;
  likes: number;
  publishedAt: string;
  author: string;
  image: string;
  url: string;
  estimatedROI?: string;
  industry?: string;
  useCase?: string;
  rating?: number;
  completionRate?: number;
  isLive?: boolean;
  isPremium?: boolean;
}

const latestContent: ContentItem[] = [
  {
    id: 'ai-2025-autonomous-operations',
    title: 'AI 2025: Complete Autonomous Operations Implementation Guide',
    description: 'Master the revolutionary AI 2025 autonomous operations framework delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing speeds.',
    category: 'AI Implementation',
    type: 'guide',
    readTime: '45 min',
    difficulty: 'expert',
    tags: ['AI 2025', 'Autonomous Operations', 'ROI 2500%', '99.9% Accuracy', 'Implementation'],
    featured: true,
    trending: true,
    new: true,
    views: 15420,
    likes: 892,
    publishedAt: '2025-01-15',
    author: 'Dr. Sarah Chen',
    image: '/images/ai-2025-autonomous-operations.jpg',
    url: '/guides/ai-2025-autonomous-operations',
    estimatedROI: '2,500-5,000%',
    industry: 'Enterprise',
    useCase: 'Full Business Automation',
    rating: 4.9,
    completionRate: 87,
    isPremium: true
  },
  {
    id: 'quantum-neural-fusion-2026',
    title: 'Quantum Neural Fusion: The 2026 Breakthrough Revolution',
    description: 'Explore the revolutionary quantum-neural fusion technology that will transform AI capabilities by 2026, enabling unprecedented computational power and intelligence.',
    category: 'Quantum Computing',
    type: 'whitepaper',
    readTime: '60 min',
    difficulty: 'expert',
    tags: ['Quantum Computing', 'Neural Networks', '2026 Breakthrough', 'Fusion Technology', 'Revolutionary'],
    featured: true,
    trending: true,
    new: true,
    views: 12850,
    likes: 756,
    publishedAt: '2025-01-14',
    author: 'Prof. Michael Rodriguez',
    image: '/images/quantum-neural-fusion-2026.jpg',
    url: '/whitepapers/quantum-neural-fusion-2026',
    estimatedROI: '10,000x Performance',
    industry: 'Research & Development',
    useCase: 'Advanced AI Systems',
    rating: 4.8,
    completionRate: 92,
    isPremium: true
  },
  {
    id: 'ai-2027-neural-synthesis',
    title: 'AI 2027: Neural Synthesis and Consciousness Emergence',
    description: 'Discover how AI systems will achieve consciousness-like capabilities through neural synthesis by 2027, revolutionizing human-AI collaboration.',
    category: 'Future AI',
    type: 'article',
    readTime: '30 min',
    difficulty: 'advanced',
    tags: ['AI 2027', 'Neural Synthesis', 'Consciousness', 'Human-AI Collaboration', 'Future Tech'],
    featured: true,
    trending: false,
    new: true,
    views: 9870,
    likes: 634,
    publishedAt: '2025-01-13',
    author: 'Dr. Elena Volkov',
    image: '/images/ai-2027-neural-synthesis.jpg',
    url: '/articles/ai-2027-neural-synthesis',
    estimatedROI: 'Revolutionary Capabilities',
    industry: 'Technology',
    useCase: 'Conscious AI Development',
    rating: 4.7,
    completionRate: 78,
    isPremium: false
  },
  {
    id: 'ai-webinar-series-2025',
    title: 'AI Webinar Series: Future of Technology 2025-2030',
    description: 'Join our exclusive webinar series featuring industry experts discussing the future of AI, quantum computing, and emerging technologies.',
    category: 'Education',
    type: 'webinar',
    readTime: '60 min',
    difficulty: 'intermediate',
    tags: ['Webinar', 'Education', 'Future Tech', 'Expert Insights', 'Live Learning'],
    featured: true,
    trending: false,
    new: true,
    views: 8900,
    likes: 423,
    publishedAt: '2025-01-08',
    author: 'Expert Panel',
    image: '/images/ai-webinar-series-2025.jpg',
    url: '/webinars/ai-webinar-series-2025',
    estimatedROI: 'Knowledge Enhancement',
    industry: 'Education',
    useCase: 'Professional Development',
    rating: 4.7,
    completionRate: 76,
    isLive: true,
    isPremium: false
  },
  {
    id: 'ai-tools-showcase-2025',
    title: 'Revolutionary AI Tools Showcase 2025',
    description: 'Discover the most powerful AI tools and platforms that will revolutionize your workflow in 2025, from automation to intelligence augmentation.',
    category: 'AI Tools',
    type: 'tool',
    readTime: '20 min',
    difficulty: 'intermediate',
    tags: ['AI Tools', 'Productivity', 'Automation', 'Intelligence Augmentation', '2025'],
    featured: false,
    trending: true,
    new: true,
    views: 13200,
    likes: 567,
    publishedAt: '2025-01-09',
    author: 'Tech Team',
    image: '/images/ai-tools-showcase-2025.jpg',
    url: '/tools/ai-tools-showcase-2025',
    estimatedROI: '200-400%',
    industry: 'All Industries',
    useCase: 'Productivity Enhancement',
    rating: 4.5,
    completionRate: 82,
    isPremium: false
  }
];

const typeIcons = {
  'article': BookOpen,
  'guide': FileText,
  'case-study': Globe,
  'tool': Tool,
  'video': Video,
  'whitepaper': FileText,
  'webinar': Play
};

const typeColors = {
  'article': 'bg-blue-500',
  'guide': 'bg-green-500',
  'case-study': 'bg-purple-500',
  'tool': 'bg-orange-500',
  'video': 'bg-red-500',
  'whitepaper': 'bg-indigo-500',
  'webinar': 'bg-pink-500'
};

const LatestContentPromotionBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = latestContent.filter(item => item.featured);
  const currentItem = featuredContent[currentIndex];

  // Auto-rotate content every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length, isAutoPlaying]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isVisible || !currentItem) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {currentItem.new && (
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-400/30">
                  <Zap className="w-4 h-4 inline mr-1" />
                  New Content
                </span>
              )}
              {currentItem.trending && (
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-400/30">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  Trending
                </span>
              )}
              {currentItem.featured && (
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-400/30">
                  <Star className="w-4 h-4 inline mr-1" />
                  Featured
                </span>
              )}
              {currentItem.isLive && (
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-400/30 animate-pulse">
                  <Play className="w-4 h-4 inline mr-1" />
                  Live Now
                </span>
              )}
              {currentItem.isPremium && (
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-400/30">
                  <Award className="w-4 h-4 inline mr-1" />
                  Premium
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {currentItem.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              {currentItem.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/80">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {currentItem.readTime}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {currentItem.author}
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {currentItem.views.toLocaleString()} views
              </div>
              {currentItem.rating && (
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  {currentItem.rating}
                </div>
              )}
            </div>

            {/* ROI Badge */}
            {currentItem.estimatedROI && (
              <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <div className="text-green-400 font-bold text-lg">
                      Estimated ROI: {currentItem.estimatedROI}
                    </div>
                    <div className="text-white/70 text-sm">
                      {currentItem.industry} • {currentItem.useCase}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={currentItem.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                {currentItem.type === 'webinar' ? (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Join Webinar
                  </>
                ) : (
                  <>
                    {React.createElement(typeIcons[currentItem.type] || BookOpen, {
                      className: "w-5 h-5 mr-2"
                    })}
                    {currentItem.type === 'guide' ? 'Read Guide' : 
                     currentItem.type === 'article' ? 'Read Article' :
                     currentItem.type === 'case-study' ? 'View Case Study' :
                     currentItem.type === 'tool' ? 'Try Tool' :
                     currentItem.type === 'video' ? 'Watch Video' :
                     currentItem.type === 'whitepaper' ? 'Read Whitepaper' :
                     'View Content'}
                  </>
                )}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                {isAutoPlaying ? 'Pause' : 'Resume'} Auto-Play
              </button>
            </div>
          </motion.div>

          {/* Right Content - Content Preview */}
          <motion.div
            key={`preview-${currentItem.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Content Type Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className={`flex items-center px-3 py-2 rounded-lg ${typeColors[currentItem.type]} text-white`}>
                {React.createElement(typeIcons[currentItem.type] || BookOpen, {
                  className: "w-4 h-4 mr-2"
                })}
                <span className="text-sm font-medium">
                  {currentItem.type.charAt(0).toUpperCase() + currentItem.type.slice(1)}
                </span>
              </div>
            </div>

            {/* Content Image/Preview */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.createElement(typeIcons[currentItem.type] || BookOpen, {
                      className: "w-8 h-8 text-white"
                    })}
                  </div>
                  <div className="text-white/80 text-sm">
                    {currentItem.category}
                  </div>
                </div>
              </div>

              {/* Content Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <div className="text-white font-bold text-lg">{currentItem.views.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">Views</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <div className="text-white font-bold text-lg">{currentItem.likes}</div>
                  <div className="text-white/70 text-sm">Likes</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentItem.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/20 text-white/90 text-xs rounded">
                    {tag}
                  </span>
                ))}
                {currentItem.tags.length > 4 && (
                  <span className="px-2 py-1 bg-white/20 text-white/90 text-xs rounded">
                    +{currentItem.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        {featuredContent.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToItem(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        {featuredContent.length > 1 && (
          <>
            <button
              onClick={prevItem}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={nextItem}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestContentPromotionBanner2025;