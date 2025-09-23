'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Rocket, 
  Globe,
  X,
  Play,
  BookOpen,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

const UltimateContentPromotionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "AI Innovation Showcase",
      description: "Explore cutting-edge AI technologies",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Success Stories",
      description: "Real results from AI implementation",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Future Predictions",
      description: "AI trends for 2025 and beyond",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interactive Tools",
      description: "Hands-on AI demonstrations",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Innovations" },
    { number: "100+", label: "Success Stories" },
    { number: "50+", label: "Interactive Tools" },
    { number: "10K+", label: "Happy Users" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span>2025 ULTIMATE BREAKTHROUGH</span>
            </div>

          {/* Rotating Feature */}
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 rounded-full text-white text-lg font-semibold">
              <Zap className="w-5 h-5" />
              <span>{features[currentFeature]}</span>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {[
              { number: "10,000+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
              { number: "150+", label: "Countries Served", icon: <Award className="w-6 h-6" /> },
              { number: "400%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> },
              { number: "99.9%", label: "Success Rate", icon: <Star className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Microsoft", "Google", "Amazon", "IBM", "Oracle", "Salesforce"].map((company, index) => (
                <div key={index} className="text-white font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-white/30 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping delay-2000"></div>
    </div>
  );
};

export default UltimateContentPromotionBanner2025;