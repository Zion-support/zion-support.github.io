import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, Star, Clock, User, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
=======
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> cursor/create-and-deploy-new-content-6f93

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
<<<<<<< HEAD
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
=======
      title: "🌟 Ultimate Tech Revolution 2026",
      subtitle: "The convergence of all breakthrough technologies",
      description: "Experience AI consciousness, quantum supremacy, and neural interfaces working together",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌟",
      badge: "ULTIMATE"
    },
    {
      id: 5,
      title: "🤖 Synthetic Intelligence 2026",
      subtitle: "Beyond artificial intelligence",
      description: "Create AI agents with synthetic consciousness and autonomous capabilities",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-violet-600 to-fuchsia-600",
      icon: "🤖",
      badge: "SYNTHETIC"
    },
    {
      id: 6,
      title: "💭 Consciousness Computing 2026",
      subtitle: "AI that truly understands existence",
      description: "The first computing system to achieve genuine consciousness and self-awareness",
      link: "/pages/ConsciousnessComputing2026",
      gradient: "from-rose-600 to-pink-600",
      icon: "💭",
      badge: "CONSCIOUSNESS"
>>>>>>> cursor/create-and-deploy-new-content-6f93
    }
  ];

  const items = contentItems.length > 0 ? contentItems : defaultContent;

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentSlides.length]);
>>>>>>> cursor/create-and-deploy-new-content-6f93

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Banner */}
<<<<<<< HEAD
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
=======
      <div className={`bg-gradient-to-r ${contentSlides[currentSlide].gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">{contentSlides[currentSlide].icon}</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
            <span className="text-4xl animate-bounce">{contentSlides[currentSlide].icon}</span>
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">{contentSlides[currentSlide].title}</h2>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {contentSlides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={contentSlides[currentSlide].link}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🌟 Explore Now →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2026"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🚀 View All Content →
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Content Carousel */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 FEATURED BREAKTHROUGH • JANUARY 2026
            </div>
            <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Showcase</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the most advanced technologies that are reshaping the future of humanity
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Tech Showcase</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Interactive showcase of cutting-edge technologies that will define the future
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Interactive Demos</li>
              <li>• Real-time Processing</li>
              <li>• Multi-dimensional Tech</li>
            </ul>
            <a href="/pages/RevolutionaryTechShowcase2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              View Showcase →
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Tech Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {slides.slice(0, 6).map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${slide.gradient} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20`}
            onClick={() => window.location.href = slide.link}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{slide.icon}</span>
              <div>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                  {slide.badge}
                </span>
>>>>>>> cursor/create-and-deploy-new-content-6f93
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
<<<<<<< HEAD

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
=======
          </a>
        ))}
>>>>>>> cursor/create-and-deploy-new-content-6f93
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
<<<<<<< HEAD
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
=======
            <div className="text-3xl mb-2">{slide.icon}</div>
            <h4 className="font-bold text-sm mb-2">{slide.title}</h4>
            <p className="text-xs opacity-90">{slide.description}</p>
          </a>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-6f93
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;