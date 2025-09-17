import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  Calendar,
  Star,
  Users,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Zap,
  Target,
  Award
} from 'lucide-react';
interface FeaturedContent {
  id: string;
  title: string;
  type: 'guide' | 'case-study' | 'blog' | 'whitepaper';
  description: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  url: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  priority: 'high' | 'medium' | 'low';
  metrics: {
    views?: number;
    rating?: number;
    downloads?: number;
  };
const FeaturedContentShowcase2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredContent: FeaturedContent[] = [
    {
      id: 'ai-transformation-guide',
      title: 'AI Transformation Guide 2025: Your Complete Roadmap to Digital Revolution',
      type: 'guide',
      description: 'Master the art of AI implementation with our comprehensive guide covering autonomous operations, quantum computing, and consciousness computing. Learn proven strategies from industry leaders.',
      publishDate: '2025-01-15',
      readTime: '12 min read',
      featured: true,
      url: '/blog/ai-transformation-2025-guide',
      category: 'AI Strategy',
      tags: ['AI Implementation', 'Digital Transformation', 'Business Strategy', 'Leadership'],
      priority: 'high',
      metrics: {
        views: 15420,
        rating: 4.9,
        downloads: 3240
      }
    },
    {
      id: 'quantum-breakthrough',
      title: 'Quantum Computing Breakthrough 2025: The Future is Now',
      type: 'blog',
      description: 'Discover how quantum computing is revolutionizing industries with 99.9% error correction, 1000+ qubit systems, and real-world applications across finance, healthcare, and logistics.',
      publishDate: '2025-01-14',
      readTime: '8 min read',
      featured: true,
      url: '/blog/quantum-computing-breakthrough-2025',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Technology Innovation', 'Future Tech', 'Research'],
      priority: 'high',
      metrics: {
        views: 12850,
        rating: 4.8,
        downloads: 2100
      }
    },
    {
      id: 'autonomous-operations-case-study',
      title: 'Autonomous Business Operations: A Complete Transformation Success Story',
      type: 'case-study',
      description: 'Learn how TechCorp Global achieved 85% reduction in manual processes and $2.5B in cost savings through autonomous operations. Real results from real implementation.',
      publishDate: '2025-01-13',
      readTime: '15 min read',
      featured: true,
      url: '/case-studies/autonomous-business-operations-success',
      category: 'Case Study',
      tags: ['Autonomous Operations', 'Business Transformation', 'ROI', 'Success Story'],
      priority: 'high',
      metrics: {
        views: 9870,
        rating: 4.9,
        downloads: 1800
      }
    },
    {
      id: 'ai-implementation-checklist',
      title: 'AI Implementation Checklist 2025: Your Complete Success Guide',
      type: 'guide',
      description: 'Ensure AI implementation success with our comprehensive checklist covering strategy, data, infrastructure, and optimization. Avoid common pitfalls and maximize ROI.',
      publishDate: '2025-01-12',
      readTime: '10 min read',
      featured: true,
      url: '/guides/ai-implementation-checklist-2025',
      category: 'Implementation',
      tags: ['AI Implementation', 'Best Practices', 'Checklist', 'Success'],
      priority: 'medium',
      metrics: {
        views: 11200,
        rating: 4.7,
        downloads: 2800
      }
    }
  ];
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <FileText className="w-5 h-5" />;
      case 'blog': return <TrendingUp className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'blog': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    setIsAutoPlaying(false);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
    setIsAutoPlaying(false);
  };
  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredContent.length]);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Featured Content</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge research, proven strategies, and real-world case studies 
            that are transforming businesses worldwide.
          </p>
        </div>
        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`bg-gradient-to-r ${getTypeColor(featuredContent[currentIndex].type)} p-8 md:p-12`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Content Info */}
                    <div className="text-white">
                      {/* Type Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          {getTypeIcon(featuredContent[currentIndex].type)}
                          <span className="text-sm font-medium capitalize">
                            {featuredContent[currentIndex].type.replace('-', ' ')}
                          </span>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(featuredContent[currentIndex].priority)}`}>
                          {featuredContent[currentIndex].priority.toUpperCase()}
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        {featuredContent[currentIndex].title}
                      </h3>
                      {/* Description */}
                      <p className="text-white/90 text-lg mb-6 leading-relaxed">
                        {featuredContent[currentIndex].description}
                      </p>
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredContent[currentIndex].publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredContent[currentIndex].readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{featuredContent[currentIndex].category}</span>
                        </div>
                        {featuredContent[currentIndex].metrics.rating && (
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-current text-yellow-300" />
                            <span>{featuredContent[currentIndex].metrics.rating}</span>
                          </div>
                        )}
                      </div>
                      {/* Metrics */}
                      {featuredContent[currentIndex].metrics && (
                        <div className="flex gap-6 mb-6">
                          {featuredContent[currentIndex].metrics.views && (
                            <div className="text-center">
                              <div className="text-2xl font-bold">{featuredContent[currentIndex].metrics.views.toLocaleString()}</div>
                              <div className="text-sm text-white/80">Views</div>
                            </div>
                          )}
                          {featuredContent[currentIndex].metrics.downloads && (
                            <div className="text-center">
                              <div className="text-2xl font-bold">{featuredContent[currentIndex].metrics.downloads.toLocaleString()}</div>
                              <div className="text-sm text-white/80">Downloads</div>
                            </div>
                          )}
                        </div>
                      )}
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredContent[currentIndex].tags.slice(0, 4).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white/90"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {/* CTA Button */}
                      <Link
                        to={featuredContent[currentIndex].url}
                        className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    {/* Visual Element */}
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                          {getTypeIcon(featuredContent[currentIndex].type)}
                        </div>
                        <h4 className="text-white text-lg font-semibold mb-2">
                          {featuredContent[currentIndex].type === 'guide' && 'Complete Guide'}
                          {featuredContent[currentIndex].type === 'case-study' && 'Success Story'}
                          {featuredContent[currentIndex].type === 'blog' && 'Latest Insights'}
                        </h4>
                        <p className="text-white/80 text-sm">
                          {featuredContent[currentIndex].type === 'guide' && 'Step-by-step implementation roadmap'}
                          {featuredContent[currentIndex].type === 'case-study' && 'Real results from real companies'}
                          {featuredContent[currentIndex].type === 'blog' && 'Cutting-edge research and trends'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Additional Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            More Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.slice(0, 3).map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(content.type)} text-white`}>
                    {getTypeIcon(content.type)}
                  </div>
                  <span className="text-sm font-medium text-gray-600 capitalize">
                    {content.type.replace('-', ' ')}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{content.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{content.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{content.readTime}</span>
                  </div>
                  <Link
                    to={content.url}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default FeaturedContentShowcase2025;