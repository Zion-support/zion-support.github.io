'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, TrendingUp, Users, Award, Zap, Target, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ml-revolution',
      title: 'AI 2025: The Machine Learning Revolution',
      description: 'Discover how machine learning is revolutionizing enterprise operations with 500%+ ROI',
      type: 'Blog Post',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        accuracy: '94%',
        projects: '500+'
      },
      url: '/blog/ai-2025-machine-learning-revolution-enterprise-success',
      featured: true,
      tags: ['AI', 'Machine Learning', 'Enterprise', 'ROI']
    },
    {
      id: 'cloud-revolution',
      title: 'AI 2025: The Cloud Computing Revolution',
      description: 'Master cloud computing with AI-powered solutions achieving 400%+ ROI',
      type: 'Ultimate Guide',
      metrics: {
        roi: '400%+',
        savings: '$1.2T',
        efficiency: '89%',
        agility: '94%'
      },
      url: '/blog/ai-2025-cloud-computing-revolution-ultimate-guide',
      featured: true,
      tags: ['Cloud Computing', 'AI', 'Enterprise', 'Digital Transformation']
    },
    {
      id: 'enterprise-success',
      title: 'AI Transformation 2025: Ultimate Success Story',
      description: 'Fortune 500 enterprise achieves $2.8B ROI through comprehensive AI transformation',
      type: 'Case Study',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '94%'
      },
      url: '/case-studies/ai-transformation-2025-ultimate-success-story-enterprise',
      featured: true,
      tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story']
    }
  ];

  const successMetrics = [
    { label: 'Total ROI Achieved', value: '500%+', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Cost Savings Delivered', value: '$2.8B+', icon: Target, color: 'text-blue-600' },
    { label: 'Projects Completed', value: '500+', icon: Award, color: 'text-purple-600' },
    { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'text-orange-600' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
          >
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ultimate Content Showcase
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          >
            Discover our latest AI transformation content, featuring real success stories, 
            comprehensive guides, and proven strategies delivering 500%+ ROI.
          </motion.p>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
            >
              <metric.icon className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm opacity-80">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content Info */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {contentItems[currentSlide].type}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">
                      {contentItems[currentSlide].title}
                    </h3>
                    
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      {contentItems[currentSlide].description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(contentItems[currentSlide].metrics).map(([key, value]) => (
                        <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold">{value}</div>
                          <div className="text-xs opacity-80 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {contentItems[currentSlide].tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={contentItems[currentSlide].url}
                      className="inline-flex items-center bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Read Full Article
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <div className="text-2xl font-bold mb-2">AI 2025</div>
                      <div className="text-lg opacity-90">Transformation</div>
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-2xl font-bold">500%+</div>
                          <div className="text-sm">ROI</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-2xl font-bold">$2.8B</div>
                          <div className="text-sm">Savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ enterprises that have achieved 500%+ ROI through our proven AI transformation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;