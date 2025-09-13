'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Star, 
  Zap, 
  Globe,
  Brain,
  Target,
  Users,
  CheckCircle
} from 'lucide-react';

const NewContent2025ShowcaseBanner = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Latest AI Innovations",
      description: "Discover cutting-edge AI breakthroughs and revolutionary technologies",
      icon: Brain,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Tech Trends 2025",
      description: "Explore the most impactful technology trends shaping the future",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Success Stories",
      description: "Real results from enterprises that transformed with our solutions",
      icon: Star,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const highlights = [
    "Revolutionary AI Breakthroughs",
    "Future Technology Trends",
    "Enterprise Success Stories",
    "Industry Insights & Analysis",
    "Expert Predictions & Forecasts",
    "Implementation Case Studies"
  ];

  return (
    <div className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              New Content Available
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore Our Latest
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Content Collection
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Discover groundbreaking AI innovations, revolutionary tech trends, and real enterprise success stories that are reshaping industries worldwide.
            </p>

            {/* Feature Showcase */}
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <features[currentFeature].icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-white/90">
                        {features[currentFeature].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                Explore Content
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Articles
              </button>
            </div>
          </motion.div>

          {/* Right Content - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative h-96">
              {/* Main Card */}
              <div className="absolute top-0 right-0 w-80 h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AI Innovations</h3>
                    <p className="text-white/90 text-sm">Latest breakthroughs in artificial intelligence</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending Now</span>
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute top-16 left-0 w-72 h-56 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Success Stories</h3>
                    <p className="text-white/90 text-sm">Real enterprise transformations</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Users className="w-4 h-4" />
                    <span>500+ Companies</span>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="absolute bottom-0 right-8 w-64 h-48 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Tech Trends</h3>
                    <p className="text-white/90 text-sm">Future technology predictions</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Globe className="w-4 h-4" />
                    <span>Global Impact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025ShowcaseBanner;