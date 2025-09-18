"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight
  Star
  TrendingUp
  Users
  Zap
  Shield
  Brain
  Globe,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  Sparkles,
  Target,
  Award,
  Rocket,
  DollarSign,
  BarChart3,
  Clock,
  Building,
  Quote,
  ThumbsUp,
  Eye,
  Share2,
  Heart,
  Fire,
  TrendingDown
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2026PromotionBanner = () => {
  const [currentStorysetCurrentStory] = useState(0);

  const featuredStories = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      result: '+300% Efficiency',
      roi: '450% ROI',
      icon: Brain,
      color: 'from-purple-500 to-blue-500'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      result: 'Zero Breaches',
      roi: '320% ROI',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      company: 'ManufacturingPro Inc',
      industry: 'Manufacturing',
      result: '-80% Downtime',
      roi: '280% ROI',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      result: '+95% Accuracy',
      roi: '520% ROI',
      icon: Target,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const stats = [
    { label: 'Success 'Stories', 'value: '500+'icon: Award },
    { label: 'Average 'ROI', 'value: '380%'icon: TrendingUp },
    { label: ''Industries', 'value: '15+'icon: Building },
    { label: 'Happy 'Clients', 'value: '10K+'icon: Users }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % featuredStories.length);
    }3000);
    return () => clearInterval(timer);
  }[featuredStories.length]);

  const currentStoryData = featuredStories[currentStory];
  const Icon = currentStoryData.icon;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0x: -50 }}
            whileInView={{ opacity: 1x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Business Success Stories Showcase 2026</span>
              <Fire className="w-4 h-4 text-orange-400" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Real Results from
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="text-xl text-purple-100 mb-6"
            >
              Discover how leading companies achieved unprecedented success with our AI solutions
            </motion.p>

            {/* Current Story Highlight */}
            <motion.div
              key={currentStory}
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentStoryData.color} rounded-full flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentStoryData.company}</h3>
                  <p className="text-purple-200">{currentStoryData.industry}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{currentStoryData.result}</div>
                  <div className="text-sm text-purple-200">Key Achievement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentStoryData.roi}</div>
                  <div className="text-sm text-purple-200">Return on Investment</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((statindex) => {
                const StatIcon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <StatIcon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Play className="w-5 h-5" />
                View Success Stories
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                <Award className="w-5 h-5" />
                Start Your Journey
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Verified Results</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Client Confidentiality</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Industry Recognition</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0x: 50 }}
            whileInView={{ opacity: 1x: 0 }}
            transition={{ duration: 0.8delay: 0.2 }}
            className="relative"
          >
            {/* Main Success Story Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Featured Success Story</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-white">5.0</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-4">
                {featuredStories.map((storyindex) => {
                  const StoryIcon = story.icon;
                  const isActive = index === currentStory;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.6
                        x: 0,
                        scale: isActive ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5 }}
                      className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 cursor-pointer ${
                        isActive ? 'bg-white/10 border border-white/30' : 'hover:bg-white/5'
                      }`}
                      onClick={() => setCurrentStory(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center`}>
                          <StoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{story.company}</h4>
                          <p className="text-purple-200 text-sm">{story.industry}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold text-sm">{story.result}</div>
                          <div className="text-yellow-400 font-bold text-sm">{story.roi}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-purple-100 text-sm italic mb-2">
                      "The AI automation system transformed our entire operation. We achieved 300% efficiency improvement and saved millions in operational costs."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SJ</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Sarah Johnson</div>
                        <div className="text-purple-200 text-xs">CEOTechCorp Global</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Read Full Success Story
              </button>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0-10] }}
              transition={{ duration: 2repeat: Infinityease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [010] }}
              transition={{ duration: 2.5repeat: Infinityease: "easeInOut"delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Award className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0-50] }}
              transition={{ duration: 3repeat: Infinityease: "easeInOut"delay: 1 }}
              className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <DollarSign className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Story Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredStories.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStory === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase2026PromotionBanner;
