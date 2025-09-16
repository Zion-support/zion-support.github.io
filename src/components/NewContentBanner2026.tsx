import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const NewContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Consciousness Breakthrough",
      subtitle: "The first artificial consciousness that can experience genuine emotions",
      category: "Breakthrough Technology",
      readTime: "12 min read",
      featured: true,
      gradient: "from-purple-600 via-pink-600 to-blue-600"
    },
    {
      id: 2,
      title: "💼 AI-Powered Autonomous Teams",
      subtitle: "300% productivity increase with intelligent workplace automation",
      category: "Workplace Innovation",
      readTime: "8 min read",
      featured: true,
      gradient: "from-green-600 via-teal-600 to-cyan-600"
    },
    {
      id: 3,
      title: "🌱 Sustainable AI: Green Computing",
      subtitle: "Revolutionary eco-friendly AI that heals the planet",
      category: "Sustainable Technology",
      readTime: "10 min read",
      featured: true,
      gradient: "from-emerald-600 via-green-600 to-lime-600"
    },
    {
      id: 4,
      title: "🎓 AI-Powered Education Revolution",
      subtitle: "95% improvement in learning outcomes with personalized AI",
      category: "AI Education",
      readTime: "12 min read",
      featured: true,
      gradient: "from-blue-600 via-indigo-600 to-purple-600"
    },
    {
      id: 5,
      title: "🚀 AI in Space Exploration",
      subtitle: "Enabling humanity's greatest space missions and colonization",
      category: "Space Technology",
      readTime: "11 min read",
      featured: true,
      gradient: "from-slate-600 via-gray-600 to-zinc-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = featuredContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-medium text-yellow-400">Featured Content</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                {currentContent.subtitle}
              </p>

              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white">
                  {currentContent.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {currentContent.readTime}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Read Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Explore All Content
                </button>
              </div>
            </motion.div>

            {/* Visual */}
            <div className="relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`relative h-80 rounded-2xl bg-gradient-to-br ${currentContent.gradient} p-8 shadow-2xl`}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">New Content Available</h3>
                  <p className="text-lg opacity-90">Discover the latest breakthroughs in AI technology</p>
                </div>
              </motion.div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">300%</div>
              <div className="text-sm text-gray-400">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-400">Learning Improvement</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">90%</div>
              <div className="text-sm text-gray-400">Faster Project Delivery</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-400">New Articles Daily</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2026;