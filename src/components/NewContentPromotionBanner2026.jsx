import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';

const NewContentPromotionBanner2026 = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Services 2026",
      subtitle: "Cutting-edge artificial intelligence solutions",
      description: "Discover our latest AI innovations including quantum computing, neural interfaces, and synthetic intelligence platforms that are transforming industries worldwide.",
      image: "/images/promos/ai-services-2026.jpg",
      category: "AI Innovation",
      readTime: "5 min read",
      featured: true,
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: Zap,
      stats: { views: "2.3M", rating: 4.9, shares: "15K" },
      cta: "Explore AI Services",
      badge: "New"
    },
    {
      id: 2,
      title: "🧠 Quantum Computing Breakthrough",
      subtitle: "Practical applications in enterprise",
      description: "Explore how quantum computing is transforming industries with real-world applications and business solutions that were previously impossible.",
      image: "/images/promos/quantum-computing-2026.jpg",
      category: "Quantum Tech",
      readTime: "12 min read",
      featured: true,
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      icon: Globe,
      stats: { views: "1.8M", rating: 4.8, shares: "12K" },
      cta: "Learn More",
      badge: "Trending"
    },
    {
      id: 3,
      title: "🔗 Neural Interface Future",
      subtitle: "Next frontier in human-computer interaction",
      description: "Brain-computer interfaces are revolutionizing how we interact with technology. Learn about the latest developments and future possibilities.",
      image: "/images/promos/neural-interfaces-2026.jpg",
      category: "Emerging Tech",
      readTime: "10 min read",
      featured: true,
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      icon: Users,
      stats: { views: "1.5M", rating: 4.7, shares: "8K" },
      cta: "Discover Now",
      badge: "Hot"
    },
    {
      id: 4,
      title: "🛡️ Cybersecurity Fortress 2026",
      subtitle: "Advanced protection against AI threats",
      description: "Comprehensive cybersecurity solutions powered by artificial intelligence to protect against intelligent threats and sophisticated attacks.",
      image: "/images/promos/cybersecurity-2026.jpg",
      category: "Security",
      readTime: "8 min read",
      featured: true,
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      icon: Shield,
      stats: { views: "2.1M", rating: 4.9, shares: "18K" },
      cta: "Secure Your Business",
      badge: "Popular"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = promotionalContent[currentPromo];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">New Content Alert</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> New Content</span>
            <br />
            Just Dropped! 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fresh insights, cutting-edge solutions, and breakthrough technologies
            that are reshaping the future of business and technology.
          </p>
        </motion.div>

        {/* Main Promotional Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPromo}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Content Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.gradient}`}>
                      <currentContent.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-purple-300">{currentContent.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          currentContent.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                          currentContent.badge === 'Trending' ? 'bg-blue-500/20 text-blue-400' :
                          currentContent.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {currentContent.badge}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{currentContent.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{currentContent.stats.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{currentContent.title}</h3>
                    <p className="text-lg text-purple-200 mb-4">{currentContent.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed">{currentContent.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{currentContent.stats.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4" />
                        <span>{currentContent.stats.shares} shares</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span>Liked</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <span>{currentContent.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Content Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className={`aspect-video bg-gradient-to-br ${currentContent.gradient} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <currentContent.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-medium">New Content</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {currentContent.category}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Play className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <BookOpen className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPromo
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">More New Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promotionalContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${content.gradient} flex items-center justify-center`}>
                    <content.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    content.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                    content.badge === 'Trending' ? 'bg-blue-500/20 text-blue-400' :
                    content.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {content.badge}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{content.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{content.subtitle}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{content.readTime}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{content.stats.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl border border-purple-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Don't Miss Out on the Latest!</h3>
            <p className="text-gray-300 mb-6">Subscribe to get notified about new content, exclusive insights, and early access to revolutionary technologies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join Community</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;