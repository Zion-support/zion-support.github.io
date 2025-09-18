import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  X,
  Calendar,
  Star,
  Users,
  Zap,
  Clock
} from 'lucide-react';
interface ContentItem {
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
const NewContentAdvertisingBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const newContent: ContentItem[] = [
    {
      id: 'ai-transformation-guide',
      title: 'AI Transformation Guide 2025: Your Complete Roadmap to Digital Revolution',
      type: 'guide',
      description: 'Master the art of AI implementation with our comprehensive guide covering autonomous operations, quantum computing, and consciousness computing.',
      publishDate: '2025-01-15',
      readTime: '12 min read',
      featured: true,
      url: '/blog/ai-transformation-2025-guide',
      category: 'AI Strategy',
      tags: ['AI Implementation', 'Digital Transformation', 'Business Strategy']
    },
    {
      id: 'quantum-breakthrough',
      title: 'Quantum Computing Breakthrough 2025: The Future is Now',
      type: 'blog',
      description: 'Discover how quantum computing is revolutionizing industries with 99.9% error correction, 1000+ qubit systems, and real-world applications.',
      publishDate: '2025-01-14',
      readTime: '8 min read',
      featured: true,
      url: '/blog/quantum-computing-breakthrough-2025',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Technology Innovation', 'Future Tech']
    },
    {
      id: 'autonomous-operations-case-study',
      title: 'Autonomous Business Operations: A Complete Transformation Success Story',
      type: 'case-study',
      description: 'Learn how TechCorp Global achieved 85% reduction in manual processes and $2.5B in cost savings through autonomous operations.',
      publishDate: '2025-01-13',
      readTime: '15 min read',
      featured: true,
      url: '/case-studies/autonomous-business-operations-success',
      category: 'Case Study',
      tags: ['Autonomous Operations', 'Business Transformation', 'ROI']
    },
    {
      id: 'ai-implementation-checklist',
      title: 'AI Implementation Checklist 2025: Your Complete Success Guide',
      type: 'guide',
      description: 'Ensure AI implementation success with our comprehensive checklist covering strategy, data, infrastructure, and optimization.',
      publishDate: '2025-01-12',
      readTime: '10 min read',
      featured: true,
      url: '/guides/ai-implementation-checklist-2025',
      category: 'Implementation',
      tags: ['AI Implementation', 'Best Practices', 'Checklist']
    }
  ];
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'case-study': return <FileText className="w-4 h-4" />;
      case 'blog': return <TrendingUp className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'blog': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentContent((prev) => (prev + 1) % newContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, newContent.length]);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleContentClick = () => {
    setIsAutoPlaying(false);
  };
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Main Content */}
            <div className="flex-1 pr-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">New Content</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Calendar className="w-4 h-4" />
                  <span>Just Published</span>
                </div>
              </div>
              {/* Content Carousel */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer"
                    onClick={handleContentClick}
                  >
                    <div className="flex items-start gap-4">
                      {/* Content Type Badge */}
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getTypeColor(newContent[currentContent].type)}`}>
                        {getTypeIcon(newContent[currentContent].type)}
                        <span className="text-xs font-medium capitalize">
                          {newContent[currentContent].type.replace('-', ' ')}
                        </span>
                      </div>
                      {/* Content Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">
                          {newContent[currentContent].title}
                        </h3>
                        <p className="text-white/90 text-sm mb-3 line-clamp-2">
                          {newContent[currentContent].description}
                        </p>
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-xs text-white/80">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{newContent[currentContent].readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{newContent[currentContent].category}</span>
                          </div>
                          {newContent[currentContent].featured && (
                            <div className="flex items-center gap-1 text-yellow-300">
                              <Star className="w-3 h-3" />
                              <span>Featured</span>
                            </div>
                          )}
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {newContent[currentContent].tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white/90"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {newContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentContent(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentContent
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                to={newContent[currentContent].url}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                onClick={handleContentClick}
              >
                Read Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-4 bg-white/20 rounded-full h-1 overflow-hidden">
            <motion.div
              className="bg-white h-full"
              initial={{ width: "0%" }}
              animate={{ width: isAutoPlaying ? "100%" : "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-8 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </motion.div>
    </AnimatePresence>
  );

};

export default NewContentAdvertisingBanner2025;
