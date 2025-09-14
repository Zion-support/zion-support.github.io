'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Star,
  CheckCircle,
  Zap,
  Target,
  Award
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      id: 'enterprise-automation',
      title: 'AI 2025: Enterprise Automation Revolution',
      subtitle: '500% ROI in 60 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented ROI through AI automation. Real case studies, implementation strategies, and actionable insights.',
      metrics: {
        roi: '500%',
        timeframe: '60 days',
        savings: '$50M+',
        satisfaction: '98%'
      },
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      url: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      featured: true
    },
    {
      id: 'ai-transformation-success',
      title: 'AI Transformation: $50M Annual Savings',
      subtitle: 'Fortune 500 Success Story',
      description: 'Complete case study of how a Fortune 500 company achieved $50M in annual savings within 6 months through strategic AI implementation.',
      metrics: {
        savings: '$50M',
        roi: '1,200%',
        timeframe: '6 months',
        processes: '89%'
      },
      tags: ['Case Study', 'AI Transformation', 'Fortune 500', 'Cost Savings'],
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      type: 'case-study',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2025',
      subtitle: 'From Strategy to 500% ROI',
      description: 'The complete guide to AI implementation in 2025. Step-by-step strategies, proven frameworks, and real-world examples.',
      metrics: {
        roi: '500%',
        word_count: '15,000',
        reading_time: '20 min',
        difficulty: 'Advanced'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      url: '/resources/ai-implementation-master-guide-2025',
      type: 'resource',
      featured: true
    }
  ];

  const stats = [
    { icon: DollarSign, value: '$2.8B+', label: 'Total Savings Generated' },
    { icon: TrendingUp, value: '340%', label: 'Average ROI' },
    { icon: Users, value: '500+', label: 'Successful Projects' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' }
  ];

  const features = [
    'Real-world case studies with actual ROI data',
    'Step-by-step implementation frameworks',
    'Proven strategies from Fortune 500 companies',
    'Comprehensive guides for all skill levels',
    'Latest AI technologies and best practices',
    'Expert insights and actionable recommendations'
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ultimate AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive collection of AI guides, 
            case studies, and implementation strategies. Proven results from real companies.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-blue-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content Info */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {contentSlides[currentSlide].type.toUpperCase()}
                      </span>
                      <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        FEATURED
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {contentSlides[currentSlide].title}
                    </h3>
                    
                    <p className="text-xl text-blue-100 mb-6">
                      {contentSlides[currentSlide].subtitle}
                    </p>
                    
                    <p className="text-blue-200 mb-6 leading-relaxed">
                      {contentSlides[currentSlide].description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(contentSlides[currentSlide].metrics).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-lg p-3">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-blue-300 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {contentSlides[currentSlide].tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={contentSlides[currentSlide].url}
                      className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <Target className="w-12 h-12 text-black" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">
                          Proven Results
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span>Real ROI data from actual implementations</span>
                          </div>
                          <div className="flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span>Step-by-step implementation guides</span>
                          </div>
                          <div className="flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span>Expert insights and best practices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Why Choose Our AI Content?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already achieving unprecedented results 
            with our proven AI implementation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Free AI Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;