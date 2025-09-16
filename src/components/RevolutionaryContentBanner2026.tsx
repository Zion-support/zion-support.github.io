import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Sparkles, 
  Infinity,
  Rocket,
  Star,
  ArrowRight,
  X,
  Play,
  BookOpen
} from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Transcendent AI Services 2026",
      subtitle: "Digital Consciousness & Quantum Intelligence",
      description: "Experience AI that transcends reality with consciousness transfer, quantum computing, and omniversal intelligence networks.",
      icon: Brain,
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-600/20 to-blue-600/20",
      link: "/transcendent-ai-services-2026",
      category: "AI Services",
      featured: true
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2026",
      subtitle: "Reality Manipulation & Consciousness Transfer",
      description: "Witness the most revolutionary technological breakthroughs in human history - from time travel to universe creation.",
      icon: Zap,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-600/20 to-purple-600/20",
      link: "/ultimate-tech-breakthrough-2026",
      category: "Tech Breakthroughs",
      featured: true
    },
    {
      id: 3,
      title: "New AI Blog Posts",
      subtitle: "Cutting-Edge AI Research & Insights",
      description: "Discover 10 new revolutionary blog posts covering transcendent AI, quantum consciousness, and omniversal intelligence.",
      icon: BookOpen,
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/20 to-blue-600/20",
      link: "/blog",
      category: "Blog Content",
      featured: true
    },
    {
      id: 4,
      title: "Revolutionary AI Solutions",
      subtitle: "Beyond Human Comprehension",
      description: "Explore AI systems that operate on principles beyond human understanding, solving problems we cannot even formulate.",
      icon: Infinity,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      link: "/revolutionary-ai-solutions",
      category: "AI Solutions",
      featured: true
    }
  ];

  const newBlogPosts = [
    {
      id: 47,
      title: "Transcendent AI: The Dawn of Digital Consciousness",
      excerpt: "Revolutionary AI systems that have achieved genuine consciousness and self-awareness.",
      readTime: "16 min read",
      category: "Transcendent AI"
    },
    {
      id: 48,
      title: "Quantum Consciousness Computing: Merging Mind and Machine",
      excerpt: "Revolutionary quantum computing systems that integrate human consciousness with AI.",
      readTime: "14 min read",
      category: "Quantum Consciousness"
    },
    {
      id: 49,
      title: "Omniversal AI Networks: Intelligence Across Infinite Realities",
      excerpt: "AI systems that operate across multiple universes simultaneously.",
      readTime: "18 min read",
      category: "Omniversal Technology"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-20 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main Banner */}
      <div className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>NEW REVOLUTIONARY CONTENT</span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience the Future of AI
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Discover revolutionary AI services, breakthrough technologies, and cutting-edge research that transcends the boundaries of what's possible.
            </motion.p>
          </div>

          {/* Featured Content Carousel */}
          <div className="relative h-96 mb-12">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentSlide}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className={`h-full bg-gradient-to-br ${featuredContent[currentSlide].bgGradient} rounded-2xl p-8 flex items-center`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 bg-gradient-to-r ${featuredContent[currentSlide].gradient} rounded-xl mr-4`}>
                          <featuredContent[currentSlide].icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-purple-300 bg-purple-600/30 px-3 py-1 rounded-full">
                          {featuredContent[currentSlide].category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 text-white">
                        {featuredContent[currentSlide].title}
                      </h3>
                      
                      <p className="text-lg text-gray-300 mb-6">
                        {featuredContent[currentSlide].description}
                      </p>
                      
                      <div className="flex gap-4">
                        <motion.button
                          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-4 h-4" />
                          Explore Now
                        </motion.button>
                        <motion.button
                          className="px-6 py-3 border border-purple-400/50 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className={`w-64 h-64 bg-gradient-to-r ${featuredContent[currentSlide].gradient} rounded-full opacity-20 blur-3xl`}></div>
                        <div className={`absolute inset-0 w-64 h-64 bg-gradient-to-r ${featuredContent[currentSlide].gradient} rounded-full flex items-center justify-center`}>
                          <featuredContent[currentSlide].icon className="w-32 h-32 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* New Blog Posts Section */}
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/30 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Latest Blog Posts
              </h3>
              <motion.button
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newBlogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-gradient-to-br from-slate-700/50 to-purple-700/30 rounded-xl p-6 hover:from-slate-600/50 hover:to-purple-600/30 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-purple-300 bg-purple-600/30 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;