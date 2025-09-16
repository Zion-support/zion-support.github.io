import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Clock, Users, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  isNew?: boolean;
  urgency?: string;
  image: string;
}

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      id: 'ai-consciousness',
      title: 'The AI Consciousness Revolution: How Machines Are Developing True Self-Awareness',
      excerpt: 'Discover the groundbreaking research that\'s leading to AI systems with genuine consciousness, emotional intelligence, and self-awareness that rivals human cognition.',
      category: 'AI Research',
      readTime: '12 min read',
      isNew: true,
      urgency: 'Trending',
      image: '/images/blog/ai-consciousness-breakthrough-2026.jpg'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Breakthrough: Practical Applications in 2026',
      excerpt: 'How quantum computing is moving from research labs to real-world business applications.',
      category: 'Quantum Computing',
      readTime: '12 min read',
      isNew: true,
      urgency: 'Hot',
      image: '/images/blog/quantum-computing-breakthrough-2026.jpg'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces: The Next Frontier in Human-Computer Interaction',
      excerpt: 'Exploring brain-computer interfaces and their potential to revolutionize how we interact with technology.',
      category: 'Emerging Technology',
      readTime: '10 min read',
      isNew: true,
      urgency: 'Breaking',
      image: '/images/blog/neural-interfaces-next-frontier-2026.jpg'
    },
    {
      id: 'ai-teams',
      title: 'The Future of Work: AI-Powered Autonomous Teams in 2026',
      excerpt: 'How AI agents are forming autonomous teams that can complete complex projects without human intervention.',
      category: 'Future of Work',
      readTime: '9 min read',
      isNew: true,
      urgency: 'Popular',
      image: '/images/blog/ai-autonomous-teams-2026.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Trending': return 'from-pink-500 to-rose-500';
      case 'Hot': return 'from-red-500 to-orange-500';
      case 'Breaking': return 'from-purple-500 to-pink-500';
      case 'Popular': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'Trending': return <TrendingUp className="w-4 h-4" />;
      case 'Hot': return <Zap className="w-4 h-4" />;
      case 'Breaking': return <Sparkles className="w-4 h-4" />;
      case 'Popular': return <Users className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200 font-medium">Revolutionary Content 2026</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Discover the Future of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Technology & Innovation
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore groundbreaking research, cutting-edge technologies, and revolutionary insights that are shaping tomorrow's world today.
          </motion.p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${getUrgencyColor(currentContent.urgency!)} text-white text-sm font-medium`}>
                      {getUrgencyIcon(currentContent.urgency!)}
                      {currentContent.urgency}
                    </div>
                    {currentContent.isNew && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium">
                        <Sparkles className="w-3 h-3" />
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
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-purple-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{currentContent.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span className="text-sm font-medium">{currentContent.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                      Explore More
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                    <img
                      src={currentContent.image}
                      alt={currentContent.title}
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
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredContent.map((_, index) => (
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
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300 text-sm">Revolutionary Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-300 text-sm">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300 text-sm">Expert Authors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-300 text-sm">Reader Satisfaction</div>
          </div>
        </motion.div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;