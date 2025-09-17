import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  Zap,
  Brain,
  Cpu,
  Shield,
  Globe,
  Rocket,
  Target,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Lightbulb,
  Code,
  Database,
  Lock
} from 'lucide-react';
interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: 'article' | 'case-study' | 'white-paper' | 'video' | 'interactive';
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  views: number;
  likes: number;
  isFeatured?: boolean;
  isNew?: boolean;
  urgency?: string;
  icon: string;
  gradient: string;
  stats: {
    engagement: number;
    roi: number;
    impact: number;
  };
}
const AdvancedContentShowcase2026: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const contentItems: ContentItem[] = [
    {
      id: 'ai-autonomous-business-operations-2026',
      title: 'Autonomous Business Operations: The AI-Driven Enterprise Revolution',
      excerpt: 'Discover how AI is transforming businesses into self-managing entities with autonomous decision-making, predictive operations, and intelligent resource allocation.',
      category: 'Business AI',
      type: 'article',
      author: 'Dr. Sarah Chen',
      publishDate: '2026-01-15',
      readTime: '12 min',
      tags: ['AI', 'Automation', 'Business Transformation', 'Enterprise'],
      views: 25400,
      likes: 1200,
      isFeatured: true,
      isNew: true,
      urgency: 'Must Read',
      icon: '🤖',
      gradient: 'from-blue-600 to-purple-600',
      stats: { engagement: 95, roi: 400, impact: 98 }
    },
    {
      id: 'quantum-neural-ai-architecture',
      title: 'Quantum Neural AI Architecture: Beyond Traditional Machine Learning',
      excerpt: 'Explore revolutionary quantum neural networks that process information at quantum speeds while maintaining classical reliability and interpretability.',
      category: 'Quantum AI',
      type: 'white-paper',
      author: 'Prof. Michael Rodriguez',
      publishDate: '2026-01-12',
      readTime: '18 min',
      tags: ['Quantum Computing', 'Neural Networks', 'AI Architecture', 'Research'],
      views: 18900,
      likes: 890,
      isFeatured: true,
      isNew: true,
      urgency: 'Breakthrough',
      icon: '⚛️',
      gradient: 'from-purple-600 to-pink-600',
      stats: { engagement: 92, roi: 350, impact: 96 }
    },
    {
      id: 'consciousness-ai-systems-2026',
      title: 'Consciousness in AI Systems: The Emergence of Digital Self-Awareness',
      excerpt: 'Deep dive into the latest research on AI consciousness, self-awareness mechanisms, and the ethical implications of truly conscious artificial intelligence.',
      category: 'Consciousness AI',
      type: 'article',
      author: 'Dr. Elena Vasquez',
      publishDate: '2026-01-10',
      readTime: '15 min',
      tags: ['AI Consciousness', 'Self-Awareness', 'Ethics', 'Philosophy'],
      views: 32100,
      likes: 1580,
      isFeatured: true,
      isNew: true,
      urgency: 'Trending',
      icon: '🧠',
      gradient: 'from-green-600 to-teal-600',
      stats: { engagement: 88, roi: 280, impact: 94 }
    },
    {
      id: 'interdimensional-computing-paradigm',
      title: 'Interdimensional Computing: Processing Across Multiple Reality Layers',
      excerpt: 'Revolutionary computing paradigm that leverages multiple dimensions for parallel processing, creating infinite computational possibilities.',
      category: 'Interdimensional Tech',
      type: 'interactive',
      author: 'Dr. Alex Kim',
      publishDate: '2026-01-08',
      readTime: '20 min',
      tags: ['Interdimensional', 'Computing', 'Parallel Processing', 'Innovation'],
      views: 16700,
      likes: 720,
      isFeatured: false,
      isNew: true,
      urgency: 'Experimental',
      icon: '🌌',
      gradient: 'from-indigo-600 to-blue-600',
      stats: { engagement: 85, roi: 320, impact: 90 }
    },
    {
      id: 'neural-interface-revolution-2026',
      title: 'Neural Interface Revolution: Direct Brain-Computer Integration',
      excerpt: 'Explore the latest advances in neural interfaces, enabling direct communication between human brains and AI systems for unprecedented collaboration.',
      category: 'Neural Interfaces',
      type: 'case-study',
      author: 'Dr. Priya Patel',
      publishDate: '2026-01-05',
      readTime: '14 min',
      tags: ['Neural Interfaces', 'BCI', 'Human-AI Collaboration', 'Medical'],
      views: 28900,
      likes: 1340,
      isFeatured: true,
      isNew: true,
      urgency: 'Hot Topic',
      icon: '🔗',
      gradient: 'from-orange-600 to-red-600',
      stats: { engagement: 91, roi: 380, impact: 97 }
    },
    {
      id: 'synthetic-intelligence-ecosystem',
      title: 'Synthetic Intelligence Ecosystem: Self-Evolving AI Networks',
      excerpt: 'Discover how synthetic intelligence creates self-evolving networks that continuously improve and adapt without human intervention.',
      category: 'Synthetic AI',
      type: 'article',
      author: 'Dr. James Wilson',
      publishDate: '2026-01-03',
      readTime: '16 min',
      tags: ['Synthetic Intelligence', 'Self-Evolution', 'AI Networks', 'Autonomy'],
      views: 22300,
      likes: 980,
      isFeatured: false,
      isNew: true,
      urgency: 'Emerging',
      icon: '🧬',
      gradient: 'from-cyan-600 to-blue-600',
      stats: { engagement: 87, roi: 300, impact: 93 }
    }
  ];
  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟', count: contentItems.length },
    { id: 'Business AI', label: 'Business AI', icon: '🤖', count: contentItems.filter(item => item.category === 'Business AI').length },
    { id: 'Quantum AI', label: 'Quantum AI', icon: '⚛️', count: contentItems.filter(item => item.category === 'Quantum AI').length },
    { id: 'Consciousness AI', label: 'Consciousness AI', icon: '🧠', count: contentItems.filter(item => item.category === 'Consciousness AI').length },
    { id: 'Interdimensional Tech', label: 'Interdimensional Tech', icon: '🌌', count: contentItems.filter(item => item.category === 'Interdimensional Tech').length },
    { id: 'Neural Interfaces', label: 'Neural Interfaces', icon: '🔗', count: contentItems.filter(item => item.category === 'Neural Interfaces').length },
    { id: 'Synthetic AI', label: 'Synthetic AI', icon: '🧬', count: contentItems.filter(item => item.category === 'Synthetic AI').length }
  ];
  const getFilteredContent = () => {
    let filtered = contentItems;
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activeFilter);
    }
    switch (sortBy) {
      case 'trending':
        return filtered.sort((a, b) => (b.views + b.likes) - (a.views + a.likes));
      case 'newest':
        return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
      case 'engagement':
        return filtered.sort((a, b) => b.stats.engagement - a.stats.engagement);
      case 'impact':
        return filtered.sort((a, b) => b.stats.impact - a.stats.impact);
      default:
        return filtered;
    }
  };
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Must Read':
        return 'bg-red-500 text-white';
      case 'Breakthrough':
        return 'bg-purple-500 text-white';
      case 'Trending':
        return 'bg-orange-500 text-white';
      case 'Hot Topic':
        return 'bg-pink-500 text-white';
      case 'Experimental':
        return 'bg-blue-500 text-white';
      case 'Emerging':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <Target className="w-4 h-4" />;
      case 'white-paper':
        return <Lightbulb className="w-4 h-4" />;
      case 'video':
        return <Eye className="w-4 h-4" />;
      case 'interactive':
        return <Code className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };
  const filteredContent = getFilteredContent();
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">ADVANCED CONTENT SHOWCASE 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI & Technology</span>
            <br />Insights & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge research, breakthrough technologies, and revolutionary insights that are shaping the future of AI and technology. 
            From consciousness computing to interdimensional technology, discover what's possible.
          </p>
        </div>
        {/* Filters and Sorting */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
          {/* Sort Options */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="trending">Trending</option>
              <option value="newest">Newest</option>
              <option value="engagement">Engagement</option>
              <option value="impact">Impact</option>
            </select>
          </div>
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Header with gradient background */}
                <div className={`relative h-48 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Content badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.isNew && (
                      <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                    {item.isFeatured && (
                      <span className="px-2 py-1 bg-green-500 text-green-900 text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(item.urgency!)}`}>
                      {item.urgency}
                    </span>
                  </div>
                  {/* Category and type */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                      {item.icon} {item.category}
                    </span>
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full flex items-center gap-1">
                      {getTypeIcon(item.type)}
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {/* Read time */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white/90 text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-3 text-white/90 text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {item.likes.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Author and date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(item.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.stats.engagement}%</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{item.stats.roi}%</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{item.stats.impact}%</div>
                      <div className="text-xs text-gray-500">Impact</div>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/content/${item.id}`}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group/link"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <button className="hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="hover:text-blue-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="hover:text-green-500 transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Explore the Future of AI & Technology?
              </h3>
              <p className="text-purple-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Join thousands of innovators, researchers, and business leaders who are already transforming their industries 
                with our cutting-edge insights and revolutionary technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/content-library"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <Database className="w-5 h-5 mr-2" />
                  Explore Full Library
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/newsletter-signup"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Weekly Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdvancedContentShowcase2026;
