import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, TrendingUp, Brain, Zap, Rocket } from 'lucide-react';
interface NewContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'blog' | 'case-study' | 'service';
  urgency?: string;
  readTime: string;
  views: number;
  likes: number;
  isNew?: boolean;
const NewContentShowcaseBanner2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const newContent: NewContentItem[] = [
    {
      id: "quantum-consciousness-ai-2026",
      title: "Quantum Consciousness AI: The Next Frontier",
      excerpt: "Discover how quantum computing is revolutionizing AI consciousness, creating systems that can process thoughts across multiple dimensions simultaneously.",
      type: "blog",
      urgency: "Must Read",
      readTime: "15 min read",
      views: 12500,
      likes: 892,
      isNew: true
    },
    {
      id: "neural-reality-interface-2026",
      title: "Neural Reality Interface: Direct Brain-to-Digital Connection",
      excerpt: "Experience the future where your thoughts directly control digital environments, enabling seamless interaction between human consciousness and virtual reality.",
      type: "blog",
      urgency: "Trending",
      readTime: "12 min read",
      views: 18700,
      likes: 1245,
      isNew: true
    },
    {
      id: "autonomous-business-ecosystem-2026",
      title: "Autonomous Business Ecosystems: AI-Driven Companies",
      excerpt: "Explore how AI-powered autonomous business systems are creating self-managing companies that operate 24/7 without human intervention.",
      type: "blog",
      urgency: "Hot Topic",
      readTime: "18 min read",
      views: 22300,
      likes: 1567,
      isNew: true
    },
    {
      id: "global-enterprise-transformation-2026",
      title: "Global Enterprise Transformation: 500% ROI with AI",
      excerpt: "Case study of a major global enterprise that transformed its operations using our AI solutions, achieving unprecedented efficiency and profitability.",
      type: "case-study",
      urgency: "Featured",
      readTime: "20 min read",
      views: 45600,
      likes: 2890,
      isNew: true
    }
  ];
  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case "Must Read": return "from-red-500 to-pink-600";
      case "Trending": return "from-orange-500 to-red-600";
      case "Hot Topic": return "from-yellow-500 to-orange-600";
      case "Featured": return "from-purple-500 to-indigo-600";
      default: return "from-blue-500 to-cyan-600";
    }
  };
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "blog": return <Brain className="w-5 h-5" />;
      case "case-study": return <TrendingUp className="w-5 h-5" />;
      case "service": return <Zap className="w-5 h-5" />;
      default: return <Rocket className="w-5 h-5" />;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [newContent.length]);
  const currentContent = newContent[currentIndex];
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20" />
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              NEW CONTENT ALERT
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-4">
              Revolutionary Content
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Just Released
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the latest breakthroughs in AI, quantum computing, and neural technology that are reshaping our future
            </p>
          </motion.div>
          {/* Content Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -90 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Content Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                        {getTypeIcon(currentContent.type)}
                        <span className="text-sm font-medium text-blue-300 capitalize">
                          {currentContent.type.replace('-', ' ')}
                        </span>
                      </div>
                      {currentContent.urgency && (
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getUrgencyColor(currentContent.urgency)} text-white text-sm font-bold`}>
                          {currentContent.urgency}
                        </div>
                      )}
                      {currentContent.isNew && (
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold animate-pulse">
                          NEW
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {currentContent.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {currentContent.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{currentContent.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{currentContent.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{currentContent.likes.toLocaleString()} likes</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        Read Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                  {/* Visual Element */}
                  <div className="w-full lg:w-96 h-64 lg:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl" />
                    <div className="absolute inset-4 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-xl border border-white/10" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        {getTypeIcon(currentContent.type)}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white text-sm font-medium">Featured Content</div>
                        <div className="text-gray-300 text-xs">Updated 2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Stay updated with the latest breakthroughs and innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Subscribe to Newsletter
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300">
                Follow Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

export default NewContentShowcaseBanner2026;
</div></div></div></div>