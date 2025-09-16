import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User, Eye, Heart, Share2, BookOpen, Sparkles } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  slug: string;
  views: number;
  likes: number;
  isNew?: boolean;
}

interface EnhancedContentCarousel2026Props {
  content?: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  maxItems?: number;
}

const EnhancedContentCarousel2026: React.FC<EnhancedContentCarousel2026Props> = ({
  content = [],
  autoPlay = true,
  interval = 5000,
  showControls = true,
  maxItems = 6
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default content if none provided
  const defaultContent: ContentItem[] = [
    {
      id: 'ai-consciousness',
      title: 'The AI Consciousness Revolution: How Machines Are Developing True Self-Awareness',
      excerpt: 'Discover the groundbreaking research that\'s leading to AI systems with genuine consciousness, emotional intelligence, and self-awareness that rivals human cognition.',
      author: 'Dr. Elena Rodriguez',
      authorRole: 'AI Research Director',
      publishDate: '2025-01-25',
      readTime: '12 min read',
      category: 'AI Research',
      tags: ['AI', 'Consciousness', 'Self-Awareness', 'Machine Learning'],
      featured: true,
      imageUrl: '/images/blog/ai-consciousness-breakthrough-2026.jpg',
      slug: 'ai-consciousness-revolution-2026',
      views: 125000,
      likes: 3400,
      isNew: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Breakthrough: Practical Applications in 2026',
      excerpt: 'How quantum computing is moving from research labs to real-world business applications.',
      author: 'Dr. Marcus Chen',
      authorRole: 'Quantum Computing Research Lead',
      publishDate: '2025-01-22',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Innovation', 'Enterprise Solutions'],
      featured: true,
      imageUrl: '/images/blog/quantum-computing-breakthrough-2026.jpg',
      slug: 'quantum-computing-breakthrough-2026',
      views: 89000,
      likes: 2100,
      isNew: true
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces: The Next Frontier in Human-Computer Interaction',
      excerpt: 'Exploring brain-computer interfaces and their potential to revolutionize how we interact with technology.',
      author: 'Dr. Sarah Kim',
      authorRole: 'Neural Interface Research Lead',
      publishDate: '2025-01-20',
      readTime: '10 min read',
      category: 'Emerging Technology',
      tags: ['Neural Interfaces', 'BCI', 'Human-Computer Interaction'],
      featured: true,
      imageUrl: '/images/blog/neural-interfaces-next-frontier-2026.jpg',
      slug: 'neural-interfaces-next-frontier-2026',
      views: 67000,
      likes: 1800,
      isNew: true
    },
    {
      id: 'ai-teams',
      title: 'The Future of Work: AI-Powered Autonomous Teams in 2026',
      excerpt: 'How AI agents are forming autonomous teams that can complete complex projects without human intervention.',
      author: 'Dr. Michael Thompson',
      authorRole: 'Future of Work Research Director',
      publishDate: '2025-01-18',
      readTime: '9 min read',
      category: 'Future of Work',
      tags: ['AI Teams', 'Autonomous Work', 'Future of Work'],
      featured: true,
      imageUrl: '/images/blog/ai-autonomous-teams-2026.jpg',
      slug: 'future-of-work-ai-powered-autonomous-teams-2026',
      views: 95000,
      likes: 2800,
      isNew: true
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Revolution: Bringing Intelligence to Every Device',
      excerpt: 'How edge AI is transforming everyday devices into intelligent systems that can think and act independently.',
      author: 'Marcus Thompson',
      authorRole: 'Edge AI Technology Lead',
      publishDate: '2025-01-15',
      readTime: '11 min read',
      category: 'Edge Computing',
      tags: ['Edge AI', 'IoT', 'Real-time Processing'],
      featured: true,
      imageUrl: '/images/blog/edge-ai-revolution-2026.jpg',
      slug: 'edge-ai-revolution-2026',
      views: 78000,
      likes: 1950,
      isNew: true
    },
    {
      id: 'synthetic-data',
      title: 'Synthetic Data: The Secret Weapon of AI Development',
      excerpt: 'How synthetic data is accelerating AI development while solving privacy and bias challenges.',
      author: 'Dr. Elena Rodriguez',
      authorRole: 'Data Science Research Director',
      publishDate: '2025-01-12',
      readTime: '7 min read',
      category: 'Data Science',
      tags: ['Synthetic Data', 'Privacy', 'AI Training'],
      featured: true,
      imageUrl: '/images/blog/synthetic-data-secret-weapon-2026.jpg',
      slug: 'synthetic-data-secret-weapon-2026',
      views: 56000,
      likes: 1400,
      isNew: true
    }
  ];

  const displayContent = content.length > 0 ? content.slice(0, maxItems) : defaultContent.slice(0, maxItems);

  useEffect(() => {
    if (isPlaying && displayContent.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayContent.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isPlaying, interval, displayContent.length]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Research': 'from-purple-500 to-pink-500',
      'Quantum Computing': 'from-blue-500 to-cyan-500',
      'Emerging Technology': 'from-green-500 to-emerald-500',
      'Future of Work': 'from-orange-500 to-red-500',
      'Edge Computing': 'from-indigo-500 to-purple-500',
      'Data Science': 'from-teal-500 to-blue-500',
      'Healthcare AI': 'from-pink-500 to-rose-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Content</h2>
            <p className="text-gray-400">Discover the latest insights and breakthroughs</p>
          </div>
        </div>
        
        {showControls && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Main Content Display */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(displayContent[currentIndex].category)} text-white text-sm font-medium`}>
                  <Sparkles className="w-4 h-4" />
                  {displayContent[currentIndex].category}
                </div>
                {displayContent[currentIndex].isNew && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium">
                    <Sparkles className="w-3 h-3" />
                    NEW
                  </div>
                )}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {displayContent[currentIndex].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {displayContent[currentIndex].excerpt}
              </p>
              
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{displayContent[currentIndex].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{displayContent[currentIndex].readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{formatNumber(displayContent[currentIndex].views)} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{formatNumber(displayContent[currentIndex].likes)} likes</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {displayContent[currentIndex].tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                <img
                  src={displayContent[currentIndex].imageUrl}
                  alt={displayContent[currentIndex].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-tech.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {displayContent.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {displayContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Grid Preview */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-6">More Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayContent.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-tech.jpg';
                  }}
                />
              </div>
              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-medium mb-2`}>
                {item.category}
              </div>
              <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                {item.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{item.readTime}</span>
                <span>•</span>
                <span>{formatNumber(item.views)} views</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2026;
</p></p>