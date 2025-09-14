'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Globe, Users, TrendingUp, Award } from 'lucide-react';

const NewContent2026PromotionBanner = () => {
  const features = [
    "AI-Powered Content Discovery",
    "Quantum Computing Solutions",
    "Advanced Automation Tools",
    "Real-time Analytics Dashboard"
  ];

  const stats = [
    { number: "500+", label: "New Articles" },
    { number: "50+", label: "Video Tutorials" },
    { number: "25+", label: "Case Studies" },
    { number: "10K+", label: "Active Users" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              NEW 2026 CONTENT LAUNCH
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Content
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience Awaits
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Discover cutting-edge AI solutions, quantum computing breakthroughs, and advanced automation tools that will transform your business in 2026.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Explore New Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Content - Stats and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: <Zap className="w-8 h-8 text-yellow-400" />, label: "AI Tools" },
                { icon: <Globe className="w-8 h-8 text-blue-400" />, label: "Cloud" },
                { icon: <Users className="w-8 h-8 text-green-400" />, label: "Community" },
                { icon: <TrendingUp className="w-8 h-8 text-purple-400" />, label: "Analytics" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <div className="text-xs text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-sm"
            ></motion.div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">EXCLUSIVE LAUNCH OFFER</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Get Early Access to 2026 Content
          </h3>
          <p className="text-gray-300 mb-6">
            Join our exclusive community and be the first to access revolutionary content and tools.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center mx-auto group">
            <Star className="w-5 h-5 mr-2" />
            Join Now - Limited Time
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;