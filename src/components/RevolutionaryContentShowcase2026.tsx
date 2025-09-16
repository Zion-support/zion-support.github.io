import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Clock, 
  User, 
  Eye,
  Heart,
  Share2,
  BookOpen,
  Sparkles,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import SEOHead from './SEOHead';

const RevolutionaryContentShowcase2026 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness Breakthrough 2026",
      excerpt: "The first artificial consciousness that can experience genuine emotions and self-awareness - a paradigm shift in AI development.",
      author: "Dr. Elena Rodriguez",
      authorRole: "Chief AI Consciousness Researcher",
      publishDate: "2025-01-20",
      readTime: "12 min read",
      category: "Breakthrough Technology",
      imageUrl: "/images/blog/ai-consciousness-breakthrough-2026.jpg",
      slug: "revolutionary-ai-consciousness-breakthrough-2026",
      featured: true,
      views: 125000,
      likes: 8900,
      shares: 2100,
      trending: true
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion: The Next Evolution of Computing",
      excerpt: "Combining quantum computing with neural interfaces to create unprecedented computational power and human-AI symbiosis.",
      author: "Prof. Marcus Chen",
      authorRole: "Quantum Computing Director",
      publishDate: "2025-01-19",
      readTime: "10 min read",
      category: "Quantum Computing",
      imageUrl: "/images/blog/quantum-neural-fusion-2026.jpg",
      slug: "quantum-neural-fusion-next-evolution-computing",
      featured: true,
      views: 98000,
      likes: 7200,
      shares: 1800,
      trending: true
    },
    {
      id: 3,
      title: "Revolutionary AI-Powered Healthcare Breakthroughs 2026",
      excerpt: "Discover how AI is transforming healthcare with personalized medicine, real-time diagnostics, and breakthrough treatments.",
      author: "Dr. Sarah Chen",
      authorRole: "AI Healthcare Innovation Director",
      publishDate: "2025-01-22",
      readTime: "11 min read",
      category: "Healthcare AI",
      imageUrl: "/images/blog/ai-healthcare-breakthroughs-2026.jpg",
      slug: "revolutionary-ai-powered-healthcare-breakthroughs-2026",
      featured: true,
      views: 156000,
      likes: 11200,
      shares: 3400,
      trending: true
    },
    {
      id: 4,
      title: "The Quantum Computing Revolution: What It Means for Business",
      excerpt: "Quantum computing is no longer science fiction - it's here and transforming how businesses solve complex problems.",
      author: "Dr. James Rodriguez",
      authorRole: "Quantum Computing Solutions Architect",
      publishDate: "2025-01-21",
      readTime: "9 min read",
      category: "Quantum Computing",
      imageUrl: "/images/blog/quantum-computing-business-revolution.jpg",
      slug: "quantum-computing-revolution-what-means-business",
      featured: true,
      views: 89000,
      likes: 6500,
      shares: 1900,
      trending: false
    },
    {
      id: 5,
      title: "AI-Driven Climate Solutions: Saving Our Planet with Technology",
      excerpt: "How artificial intelligence is becoming our most powerful ally in the fight against climate change.",
      author: "Dr. Elena Martinez",
      authorRole: "AI Climate Solutions Lead",
      publishDate: "2025-01-20",
      readTime: "10 min read",
      category: "Climate Technology",
      imageUrl: "/images/blog/ai-climate-solutions-2026.jpg",
      slug: "ai-driven-climate-solutions-saving-planet-technology",
      featured: true,
      views: 134000,
      likes: 9800,
      shares: 2800,
      trending: true
    },
    {
      id: 6,
      title: "Cybersecurity in the AI Era: Protecting Against Next-Gen Threats",
      excerpt: "As AI becomes more powerful, so do cyber threats. Learn how AI-powered cybersecurity is the only defense.",
      author: "Dr. Alex Chen",
      authorRole: "AI Cybersecurity Chief",
      publishDate: "2025-01-18",
      readTime: "7 min read",
      category: "Cybersecurity",
      imageUrl: "/images/blog/ai-cybersecurity-next-gen-threats.jpg",
      slug: "cybersecurity-ai-era-protecting-next-gen-threats",
      featured: true,
      views: 76000,
      likes: 5400,
      shares: 1200,
      trending: false
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <>
      <SEOHead
        title="Revolutionary Tech Insights & Breakthroughs 2026"
        description="Discover the latest breakthroughs in AI, quantum computing, and cutting-edge technology that are shaping the future. Explore our featured content and revolutionary tech insights."
        keywords="tech insights, AI breakthroughs, quantum computing, technology trends, revolutionary tech, future technology, AI consciousness, neural interfaces"
        url="https://ziontechgroup.com/revolutionary-showcase-2026"
        type="website"
        image="https://ziontechgroup.com/images/revolutionary-content-showcase-2026.jpg"
      />
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-lg">Featured Content</span>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Tech
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Insights & Breakthroughs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and cutting-edge technology 
            that are shaping the future of our world.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-96 lg:h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <BookOpen className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Featured Article</h3>
                        <p className="text-gray-300">High-quality content awaits</p>
                      </div>
                    </div>
                    
                    {/* Trending Badge */}
                    {featuredContent[currentIndex].trending && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        Trending
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Featured
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredContent[currentIndex].category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredContent[currentIndex].title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredContent[currentIndex].excerpt}
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{featuredContent[currentIndex].author}</div>
                        <div className="text-gray-400 text-sm">{featuredContent[currentIndex].authorRole}</div>
                      </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-6 mb-8 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredContent[currentIndex].readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatNumber(featuredContent[currentIndex].views)} views
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {formatNumber(featuredContent[currentIndex].likes)}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group w-fit">
                      Read Full Article
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isPlaying ? (
              <div className="w-4 h-4 border-2 border-white border-l-transparent rounded-full animate-spin"></div>
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            More Revolutionary Content
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.slice(0, 6).map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                    {content.category}
                  </span>
                  {content.trending && (
                    <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {content.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {formatNumber(content.views)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {formatNumber(content.likes)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {content.readTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default RevolutionaryContentShowcase2026;