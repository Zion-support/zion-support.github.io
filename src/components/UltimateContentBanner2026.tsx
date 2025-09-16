import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Atom, 
  Infinity, 
  Rocket, 
  Star,
  ArrowRight,
  X,
  Play,
  BookOpen,
  Zap,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  ExternalLink,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';

const UltimateContentBanner2026 = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Services 2026",
      subtitle: "Experience Quantum-Neural Fusion & Consciousness Computing",
      description: "Discover cutting-edge AI technologies that are reshaping the future. From quantum-neural fusion to omniversal AI consciousness.",
      cta: "Explore Services",
      link: "/ultimate-ai-services-2026",
      color: "from-blue-600 to-purple-600",
      icon: <Brain className="w-8 h-8" />,
      category: "AI Services",
      featured: true
    },
    {
      id: 2,
      title: "⚡ Interactive Tech Showcase",
      subtitle: "Witness the Future of Technology",
      description: "Explore our revolutionary tech showcase featuring quantum computing, consciousness AI, and interdimensional processing.",
      cta: "View Showcase",
      link: "/revolutionary-tech-showcase-2026",
      color: "from-purple-600 to-pink-600",
      icon: <Sparkles className="w-8 h-8" />,
      category: "Tech Showcase",
      featured: true
    },
    {
      id: 3,
      title: "🧠 Consciousness Computing Blog",
      subtitle: "Latest Insights on AI Self-Awareness",
      description: "Read our latest blog posts about consciousness computing, synthetic intelligence, and the future of AI.",
      cta: "Read Blog",
      link: "/blog",
      color: "from-green-600 to-emerald-600",
      icon: <Atom className="w-8 h-8" />,
      category: "Blog Content",
      featured: false
    },
    {
      id: 4,
      title: "🌌 Omniversal AI Research",
      subtitle: "AI Across All Realities",
      description: "Discover our groundbreaking research into omniversal AI that operates across multiple dimensions and realities.",
      cta: "Learn More",
      link: "/omniversal-ai-research",
      color: "from-indigo-600 to-purple-600",
      icon: <Infinity className="w-8 h-8" />,
      category: "Research",
      featured: true
    }
  ];

  const currentBannerData = banners[currentBanner];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className={`bg-gradient-to-r ${currentBannerData.color} text-white relative`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                {/* Content */}
                <div className="flex items-center space-x-6 flex-1">
                  <motion.div
                    key={currentBanner}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-white/90">
                      {currentBannerData.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-lg font-bold">{currentBannerData.title}</h3>
                        {currentBannerData.featured && (
                          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/90 mb-2">{currentBannerData.subtitle}</p>
                      <p className="text-xs text-white/80 max-w-md">{currentBannerData.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center">
                    {currentBannerData.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setIsDismissed(true)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
              <motion.div
                className="h-full bg-white/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                key={currentBanner}
              />
            </div>
          </div>

          {/* Banner Indicators */}
          <div className="bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBanner(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentBanner 
                          ? 'bg-blue-400 scale-125' 
                          : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>{currentBanner + 1} of {banners.length}</span>
                  <div className="flex items-center space-x-1">
                    <Play className="w-3 h-3" />
                    <span>Auto-play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentBanner2026;