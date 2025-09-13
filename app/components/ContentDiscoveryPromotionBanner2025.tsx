import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Star,
  X,
  ChevronRight,
  Filter,
  Grid,
  List,
  Bookmark,
  Eye,
  Heart
} from 'lucide-react';

const ContentDiscoveryPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find exactly what you need with AI-powered search",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Filter by category, tags, difficulty, and more",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Grid,
      title: "Multiple Views",
      description: "Switch between grid and list views for better browsing",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Bookmark,
      title: "Save & Organize",
      description: "Bookmark your favorite content for easy access",
      color: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
    { icon: Eye, value: "10K+", label: "Content Views" },
    { icon: Heart, value: "2.5K+", label: "Likes" },
    { icon: Star, value: "4.9", label: "Rating" },
    { icon: TrendingUp, value: "500+", label: "Active Users" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentFeatureData = features[currentFeature];
  const FeatureIcon = currentFeatureData.icon;

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 border-b border-purple-500/30 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/10 via-transparent to-purple-600/10"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/200')] opacity-5"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Side - Main Message */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4 justify-center lg:justify-start"
              >
                <motion.div
                  key={currentFeature}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentFeatureData.color} flex items-center justify-center shadow-lg`}
                >
                  <FeatureIcon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    🚀 New Content Discovery Engine
                  </h3>
                  <p className="text-lg text-indigo-200">
                    {currentFeatureData.title} • {currentFeatureData.description}
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                      <StatIcon className="w-4 h-4 text-indigo-400" />
                      <span className="text-white font-semibold">{stat.value}</span>
                      <span className="text-indigo-300 text-sm">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - CTA and Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Feature Indicators */}
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature
                        ? 'bg-indigo-400 scale-125'
                        : 'bg-indigo-600/50 hover:bg-indigo-500/70'
                    }`}
                  />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <motion.button
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${currentFeatureData.color} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                >
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-indigo-500 text-indigo-300 px-6 py-3 rounded-full font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Try Demo</span>
                </motion.button>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />

        {/* Feature Highlights */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: index === currentFeature ? 1 : 0.5,
                  scale: index === currentFeature ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}
              >
                <FeatureIcon className="w-3 h-3 text-white" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentDiscoveryPromotionBanner2025;