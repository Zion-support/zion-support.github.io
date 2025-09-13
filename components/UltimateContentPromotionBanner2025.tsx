import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight,
  X,
  ChevronRight,
  Award,
  Rocket
} from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  category: string;
  url: string;
  featured: boolean;
  stats?: {
    roi?: string;
    impact?: string;
    users?: string;
  };
}

const UltimateContentPromotionBanner2025: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const featuredContent: ContentItem[] = [
    {
      title: "AI 2025: Ultimate Business Transformation Guide",
      description: "Discover how AI is revolutionizing business operations with autonomous systems, neural consensus, and quantum-enhanced intelligence driving unprecedented growth.",
      category: "AI Transformation",
      url: "/blog/ai-2025-ultimate-business-transformation-complete-guide",
      featured: true,
      stats: {
        roi: "300% ROI",
        impact: "60% Cost Reduction",
        users: "85% of Fortune 500"
      }
    },
    {
      title: "Global Enterprise AI Success: $15B ROI Case Study",
      description: "Learn how a Fortune 100 company achieved $15 billion ROI through comprehensive AI transformation in just 18 months.",
      category: "Success Story",
      url: "/case-studies/global-enterprise-ai-transformation-2025-15-billion-roi-success",
      featured: true,
      stats: {
        roi: "$15B ROI",
        impact: "45% Revenue Growth",
        users: "200K+ Employees"
      }
    },
    {
      title: "Neural Consensus Technology Revolution",
      description: "Explore how distributed AI systems are reaching consensus across networks to drive breakthrough decision-making.",
      category: "Innovation",
      url: "/resources/neural-consensus-implementation-guide-2025",
      featured: true,
      stats: {
        roi: "10x Faster Decisions",
        impact: "99% Accuracy",
        users: "1,000+ AI Agents"
      }
    },
    {
      title: "Quantum-Enhanced AI Solutions",
      description: "Unlock exponential processing power with quantum computing amplified AI capabilities for superior business outcomes.",
      category: "Quantum AI",
      url: "/resources/quantum-ai-implementation-master-guide-2025",
      featured: true,
      stats: {
        roi: "Exponential Speedup",
        impact: "99.9% Accuracy",
        users: "50-Qubit Systems"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = featuredContent[currentContent];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  <Rocket className="w-4 h-4" />
                  NEW CONTENT 2025
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <TrendingUp className="w-4 h-4" />
                  Trending Now
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContent}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {currentItem.title}
                  </h2>
                  <p className="text-white/90 mb-4 text-lg leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Stats */}
                  {currentItem.stats && (
                    <div className="flex items-center gap-6 mb-4">
                      {currentItem.stats.roi && (
                        <div className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-green-400" />
                          <span className="text-green-400 font-semibold">{currentItem.stats.roi}</span>
                        </div>
                      )}
                      {currentItem.stats.impact && (
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-400 font-semibold">{currentItem.stats.impact}</span>
                        </div>
                      )}
                      {currentItem.stats.users && (
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-blue-400" />
                          <span className="text-blue-400 font-semibold">{currentItem.stats.users}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={currentItem.url}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Brain className="w-5 h-5" />
                      Explore Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <span>View All Content</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Content Indicators */}
              <div className="flex items-center gap-2 mt-4">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentContent 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="hidden lg:block w-64 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-white/20 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-2 border-white/30 rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center"
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Expanded Content List */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {featuredContent.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                      onClick={() => {
                        setCurrentContent(index);
                        setShowDetails(false);
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-white/80">{item.category}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2 group-hover:text-white/90 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center text-purple-300 text-sm group-hover:text-purple-200 transition-colors">
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentPromotionBanner2025;