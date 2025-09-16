import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, User, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: number;
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
  type: 'blog' | 'service' | 'case-study';
}

interface RevolutionaryContentBanner2026Props {
  contentItems?: ContentItem[];
  autoRotate?: boolean;
  rotationInterval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
}

const RevolutionaryContentBanner2026: React.FC<RevolutionaryContentBanner2026Props> = ({
  contentItems = [],
  autoRotate = true,
  rotationInterval = 5000,
  showIndicators = true,
  showControls = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sample content if none provided
  const defaultContent: ContentItem[] = [
    {
      id: 1,
      title: "Quantum Computing Breakthrough: Practical Applications in 2026",
      excerpt: "How quantum computing is moving from research labs to real-world business applications.",
      author: "Dr. Elena Rodriguez",
      authorRole: "Quantum Computing Research Director",
      publishDate: "2025-01-20",
      readTime: "12 min read",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Innovation", "Enterprise Solutions"],
      featured: true,
      imageUrl: "/images/blog/quantum-computing-breakthrough-2026.jpg",
      slug: "quantum-computing-breakthrough-practical-applications-2026",
      type: "blog"
    },
    {
      id: 2,
      title: "Neural Interfaces: The Next Frontier in Human-Computer Interaction",
      excerpt: "Exploring brain-computer interfaces and their potential to revolutionize how we interact with technology.",
      author: "Dr. Marcus Chen",
      authorRole: "Neural Interface Research Lead",
      publishDate: "2025-01-18",
      readTime: "10 min read",
      category: "Emerging Technology",
      tags: ["Neural Interfaces", "BCI", "Human-Computer Interaction"],
      featured: true,
      imageUrl: "/images/blog/neural-interfaces-next-frontier-2026.jpg",
      slug: "neural-interfaces-next-frontier-human-computer-interaction",
      type: "blog"
    },
    {
      id: 3,
      title: "Synthetic Intelligence: Beyond Artificial Intelligence",
      excerpt: "Understanding the evolution from AI to synthetic intelligence and its implications for the future.",
      author: "Dr. Sarah Kim",
      authorRole: "Synthetic Intelligence Research Director",
      publishDate: "2025-01-16",
      readTime: "11 min read",
      category: "Artificial Intelligence",
      tags: ["Synthetic Intelligence", "AI Evolution", "Machine Consciousness"],
      featured: true,
      imageUrl: "/images/blog/synthetic-intelligence-beyond-ai-2026.jpg",
      slug: "synthetic-intelligence-beyond-artificial-intelligence",
      type: "blog"
    },
    {
      id: 4,
      title: "Advanced AI Solutions for Enterprise",
      excerpt: "Comprehensive AI solutions designed to transform your business operations and drive innovation.",
      author: "AI Solutions Team",
      authorRole: "Enterprise AI Specialists",
      publishDate: "2025-01-15",
      readTime: "5 min read",
      category: "Services",
      tags: ["AI Solutions", "Enterprise", "Innovation"],
      featured: true,
      imageUrl: "/images/services/advanced-ai-solutions-2026.jpg",
      slug: "advanced-ai-solutions-enterprise",
      type: "service"
    }
  ];

  const items = contentItems.length > 0 ? contentItems : defaultContent;

  useEffect(() => {
    if (autoRotate && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, rotationInterval, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
        return <Zap className="w-4 h-4" />;
      case 'artificial intelligence':
        return <Sparkles className="w-4 h-4" />;
      case 'emerging technology':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'service':
        return 'bg-green-500';
      case 'case-study':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Banner */}
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="flex items-center space-x-2">
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)} text-white`}>
                  {getCategoryIcon(currentItem.category)}
                  <span>{currentItem.category}</span>
                </div>
                <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                  <Star className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {currentItem.title}
              </h2>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {currentItem.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{currentItem.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentItem.readTime}</span>
                </div>
                <div className="text-gray-400">
                  {new Date(currentItem.publishDate).toLocaleDateString()}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentItem.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      {getCategoryIcon(currentItem.category)}
                    </div>
                    <p className="text-sm opacity-80">Featured Content</p>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {showControls && items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Content Preview Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={item.id}
            className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
            }`}
            onClick={() => goToSlide(index)}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${getTypeColor(item.type)}`}></div>
              <span className="text-xs font-medium text-gray-600">{item.category}</span>
            </div>
            <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-2">
              {item.title}
            </h4>
            <p className="text-xs text-gray-600 line-clamp-2">
              {item.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;