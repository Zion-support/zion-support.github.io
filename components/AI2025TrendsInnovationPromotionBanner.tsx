"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp
  Brain
  Zap
  ArrowRight
  Star,
  Sparkles,
  Target,
  Clock
} from 'lucide-react';

const AI2025TrendsInnovationPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }2000);
    return () => clearInterval(interval);
  }[]);

  const stats = [
    { icon: TrendingUpvalue: "150%"label: "Revenue Increase" },
    { icon: Brainvalue: "85%"label: "Efficiency Boost" },
    { icon: Zapvalue: "60%"label: "Faster Processing" },
    { icon: Targetvalue: "95%"label: "Success Rate" }
  ];

  const features = [
    "Generative AI Revolution",
    "Edge AI Computing"
    "Quantum AI Integration",
    "Predictive Analytics"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0x: -50 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-blue-300 font-medium">New: AI Trends 2025</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Discover the
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future</span>
                <br />
                of AI Innovation
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Explore revolutionary AI trends and cutting-edge innovations that will transform your business in 2025. 
                Stay ahead with the latest technology insights and implementation strategies.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((featureindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0x: -20 }}
                  animate={isVisible ? { opacity: 1x: 0 } : {}}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore AI Trends
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Limited Time
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Stats Display */}
          <motion.div
            initial={{ opacity: 0x: 50 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8delay: 0.2 }}
            className="relative"
          >
            {/* Main Stats Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Real impact from AI implementation</p>
              </div>

              {/* Animated Stat Display */}
              <div className="text-center mb-8">
                <motion.div
                  key={currentStat}
                  initial={{ scale: 0.8opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                    <stats[currentStat].icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {stats[currentStat].value}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stats[currentStat].label}
                  </div>
                </motion.div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2">
                {stats.map((_index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStat ? 'bg-blue-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0-10] }}
              transition={{ duration: 3repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [010] }}
              transition={{ duration: 4repeat: Infinitydelay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
            <p className="text-gray-300 mb-4">
              Join thousands of businesses already transforming with AI
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✓ Free Consultation</span>
              <span>✓ Custom Solutions</span>
              <span>✓ 24/7 Support</span>
              <span>✓ ROI Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2025TrendsInnovationPromotionBanner;