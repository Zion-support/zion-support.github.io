import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Users, 
  TrendingUp,
  Star,
  Zap,
  Brain,
  Atom,
  Bot,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Pause,
  PlayCircle,
  Volume2,
  VolumeX,
  Maximize2,
  Share2,
  Bookmark,
  Heart,
  Eye,
  Clock
} from 'lucide-react';

interface CarouselContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  type: 'video' | 'article' | 'interactive' | 'demo' | 'tutorial';
  image: string;
  videoUrl?: string;
  link: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  views: number;
  likes: number;
  isNew: boolean;
  isFeatured: boolean;
  isLive: boolean;
  tags: string[];
  author: string;
  publishedDate: string;
  estimatedTime: string;
}

const carouselContent: CarouselContent[] = [
  {
    id: 'ai-2026-live-demo',
    title: 'AI 2026 Live Demo',
    subtitle: 'Experience the Future Now',
    description: 'Watch our live demonstration of revolutionary AI technologies that are transforming industries worldwide.',
    category: 'Live Demo',
    type: 'video',
    image: '/images/ai-2026-live-demo.jpg',
    videoUrl: '/videos/ai-2026-demo.mp4',
    link: '/ai-2026-live-demo',
    duration: '45m',
    difficulty: 'intermediate',
    rating: 4.9,
    views: 250000,
    likes: 18000,
    isNew: true,
    isFeatured: true,
    isLive: true,
    tags: ['ai', 'demo', 'live', 'future'],
    author: 'Zion Tech Team',
    publishedDate: '2026-01-22',
    estimatedTime: '45m'
  },
  {
    id: 'quantum-computing-interactive',
    title: 'Quantum Computing Interactive Lab',
    subtitle: 'Hands-On Quantum Experience',
    description: 'Explore quantum computing concepts through interactive simulations and real quantum hardware access.',
    category: 'Interactive Lab',
    type: 'interactive',
    image: '/images/quantum-interactive-lab.jpg',
    link: '/quantum-interactive-lab',
    duration: '2h',
    difficulty: 'advanced',
    rating: 4.8,
    views: 180000,
    likes: 15000,
    isNew: true,
    isFeatured: true,
    isLive: false,
    tags: ['quantum', 'interactive', 'lab', 'hands-on'],
    author: 'Quantum Labs',
    publishedDate: '2026-01-20',
    estimatedTime: '2h'
  },
  {
    id: 'neural-interface-tutorial',
    title: 'Neural Interface Tutorial Series',
    subtitle: 'Master Brain-Computer Interfaces',
    description: 'Complete tutorial series on building and implementing neural interface technologies for various applications.',
    category: 'Tutorial',
    type: 'tutorial',
    image: '/images/neural-interface-tutorial.jpg',
    link: '/neural-interface-tutorial',
    duration: '3h 30m',
    difficulty: 'advanced',
    rating: 4.7,
    views: 120000,
    likes: 9800,
    isNew: false,
    isFeatured: true,
    isLive: false,
    tags: ['neural', 'interface', 'tutorial', 'bci'],
    author: 'Dr. Sarah Chen',
    publishedDate: '2026-01-18',
    estimatedTime: '3h 30m'
  },
  {
    id: 'ai-automation-masterclass',
    title: 'AI Automation Masterclass',
    subtitle: 'Transform Your Business with AI',
    description: 'Comprehensive masterclass covering everything from basic automation to advanced AI implementation strategies.',
    category: 'Masterclass',
    type: 'video',
    image: '/images/ai-automation-masterclass.jpg',
    videoUrl: '/videos/ai-automation-masterclass.mp4',
    link: '/ai-automation-masterclass',
    duration: '4h 15m',
    difficulty: 'intermediate',
    rating: 4.9,
    views: 200000,
    likes: 16500,
    isNew: false,
    isFeatured: true,
    isLive: false,
    tags: ['automation', 'ai', 'business', 'masterclass'],
    author: 'Mike Rodriguez',
    publishedDate: '2026-01-15',
    estimatedTime: '4h 15m'
  },
  {
    id: 'quantum-ai-research-paper',
    title: 'Quantum AI Research Paper',
    subtitle: 'Latest Breakthroughs in Quantum AI',
    description: 'Read our latest research paper on quantum artificial intelligence and its applications in real-world scenarios.',
    category: 'Research',
    type: 'article',
    image: '/images/quantum-ai-research.jpg',
    link: '/quantum-ai-research',
    duration: '25 min read',
    difficulty: 'advanced',
    rating: 4.6,
    views: 85000,
    likes: 7200,
    isNew: false,
    isFeatured: false,
    isLive: false,
    tags: ['quantum', 'ai', 'research', 'paper'],
    author: 'Research Team',
    publishedDate: '2026-01-12',
    estimatedTime: '25 min'
  },
  {
    id: 'ai-ethics-workshop',
    title: 'AI Ethics Workshop',
    subtitle: 'Responsible AI Development',
    description: 'Interactive workshop on AI ethics, bias mitigation, and responsible AI development practices.',
    category: 'Workshop',
    type: 'interactive',
    image: '/images/ai-ethics-workshop.jpg',
    link: '/ai-ethics-workshop',
    duration: '1h 30m',
    difficulty: 'beginner',
    rating: 4.5,
    views: 95000,
    likes: 6800,
    isNew: false,
    isFeatured: false,
    isLive: false,
    tags: ['ethics', 'ai', 'workshop', 'responsible'],
    author: 'Ethics Institute',
    publishedDate: '2026-01-10',
    estimatedTime: '1h 30m'
  }
];

const EnhancedDynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set());
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleLike = (id: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-5 h-5" />;
      case 'article': return <BookOpen className="w-5 h-5" />;
      case 'interactive': return <Zap className="w-5 h-5" />;
      case 'demo': return <Rocket className="w-5 h-5" />;
      case 'tutorial': return <Users className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-600/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-600/20';
      case 'advanced': return 'text-red-400 bg-red-600/20';
      default: return 'text-gray-400 bg-gray-600/20';
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const currentContent = carouselContent[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Enhanced Content Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Carousel
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our revolutionary content through interactive demos, live sessions, and hands-on tutorials.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50"
            >
              {/* Live Badge */}
              {currentContent.isLive && (
                <div className="absolute top-6 left-6 z-20">
                  <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                </div>
              )}

              {/* Badges */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                {currentContent.isNew && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {currentContent.isFeatured && (
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Content Info */}
                <div className="text-white">
                  {/* Category and Type */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-indigo-400 text-sm font-medium">{currentContent.category}</span>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(currentContent.type)}
                      <span className="text-sm text-gray-300">{currentContent.type}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(currentContent.difficulty)}`}>
                      {currentContent.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {currentContent.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <h4 className="text-xl md:text-2xl text-indigo-300 mb-4">
                    {currentContent.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-6">
                    {currentContent.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">{currentContent.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{formatViews(currentContent.views)} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{currentContent.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">by {currentContent.author}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {currentContent.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={currentContent.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group"
                    >
                      <span>Explore Content</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    {currentContent.type === 'video' && (
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                        {isPlaying ? 'Pause' : 'Play'} Video
                      </button>
                    )}
                  </div>

                  {/* Interactive Controls */}
                  <div className="flex items-center gap-4 mt-6">
                    <button
                      onClick={() => toggleBookmark(currentContent.id)}
                      className={`p-3 rounded-full transition-colors ${
                        bookmarkedItems.has(currentContent.id)
                          ? 'bg-yellow-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <Bookmark className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => toggleLike(currentContent.id)}
                      className={`p-3 rounded-full transition-colors ${
                        likedItems.has(currentContent.id)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    
                    <button className="p-3 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-full transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Visual/Video Area */}
                <div className="relative">
                  <div className="relative w-full h-80 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
                    {/* Video Player Placeholder */}
                    {currentContent.type === 'video' && currentContent.videoUrl ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                          {getTypeIcon(currentContent.type)}
                        </div>
                      </div>
                    )}

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" />
                    <div className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-1000" />
                    <div className="absolute bottom-8 left-8 w-8 h-8 bg-white/20 rounded-full animate-pulse delay-2000" />
                    <div className="absolute bottom-4 right-4 w-5 h-5 bg-white/20 rounded-full animate-pulse delay-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {carouselContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-indigo-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Content Preview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carouselContent.slice(0, 3).map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => goToSlide(carouselContent.findIndex(c => c.id === content.id))}
              >
                <div className="relative h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getTypeIcon(content.type)}
                  </div>
                  {content.isLive && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      LIVE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 line-clamp-2">{content.title}</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">{content.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-indigo-400 text-sm">{content.category}</span>
                    <span className="text-gray-400 text-sm">{content.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedDynamicContentCarousel;