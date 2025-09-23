'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  BookOpen, 
  Star,
  CheckCircle,
  Clock,
  Target,
  Zap,
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface ContentPreview {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  readTime: string;
  metrics: {
    roi?: string;
    satisfaction?: string;
    projects?: string;
    savings?: string;
    accuracy?: string;
    reduction?: string;
  };
  tags: string[];
  featured: boolean;
  isNew: boolean;
}

const RevolutionaryAIContentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPreviews: ContentPreview[] = [
    {
      id: 'ai-cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      type: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution',
      excerpt: 'Discover how AI is revolutionizing cybersecurity with 95% reduction in security incidents and $50M+ in prevented losses.',
      readTime: '12 min read',
      metrics: {
        reduction: '95%',
        savings: '$50M+',
        accuracy: '94%'
      },
      tags: ['AI', 'Cybersecurity', 'Digital Defense'],
      featured: true,
      isNew: true
    },
    {
      id: 'ai-healthcare-transformation',
      title: 'AI Healthcare Transformation: 400% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/ai-healthcare-transformation-2025-success',
      excerpt: 'How a regional hospital system achieved 400% ROI, zero patient data breaches, and 67% cost reduction.',
      readTime: '15 min read',
      metrics: {
        roi: '400%',
        reduction: '67%',
        satisfaction: '95%'
      },
      tags: ['Healthcare', 'AI Transformation', 'ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-guide-2025',
      excerpt: 'The complete blueprint for AI implementation success. Learn proven strategies and achieve 340% average ROI.',
      readTime: '25 min read',
      metrics: {
        roi: '340%',
        projects: '500+',
        accuracy: '89%'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI'],
      featured: true,
      isNew: true
    }
  ];

  const stats = [
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Success Rate', value: '89%', icon: Target },
    { label: 'Cost Reduction', value: '67%', icon: Shield },
    { label: 'Projects Delivered', value: '500+', icon: Users }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPreviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [contentPreviews.length]);

  const currentContent = contentPreviews[currentSlide];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'case-study': return Users;
      case 'resource': return BookOpen;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-30"></div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-10 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content Preview */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Zap className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
              </div>
              <div className="flex items-center bg-red-500 rounded-full px-3 py-1">
                <span className="text-xs font-bold">HOT</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Revolutionary AI Content That
              <span className="block text-yellow-300">Delivers Real Results</span>
            </h2>

            {/* Content Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        {React.createElement(getTypeIcon(currentContent.type), { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                          {currentContent.type.replace('-', ' ').toUpperCase()}
                        </span>
                        {currentContent.isNew && (
                          <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-medium">
                            NEW
                          </span>
                        )}
                        <span className="text-white text-opacity-70 text-sm">
                          {currentContent.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {currentContent.title}
                      </h3>
                      <p className="text-white text-opacity-90 text-sm mb-3">
                        {currentContent.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        {Object.entries(currentContent.metrics).slice(0, 2).map(([key, value], index) => (
                          <div key={index} className="text-center">
                            <div className="text-lg font-bold text-yellow-300">{value}</div>
                            <div className="text-xs text-white text-opacity-70 capitalize">
                              {key.replace('_', ' ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  {contentPreviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-yellow-300 w-6'
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + contentPreviews.length) % contentPreviews.length)}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % contentPreviews.length)}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Content
              </Link>
            </div>
          </div>

          {/* Right Side - Stats and Visual */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center border border-white border-opacity-20"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white text-opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-12 h-12 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">340%</div>
                <div className="text-white text-opacity-80">Average ROI</div>
                <div className="text-sm text-white text-opacity-60 mt-2">
                  Achieved by 500+ organizations
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-purple-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryAIContentBanner;