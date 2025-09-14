'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 'enterprise-automation',
      title: 'AI 2025: The Enterprise Automation Revolution',
      subtitle: '500% ROI in 60 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented ROI through AI-powered enterprise automation.',
      type: 'Blog Post',
      readingTime: '12 min read',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      url: '/blog/ai-2025-enterprise-automation-revolution',
      featured: true,
      isNew: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: $50M Annual Savings',
      subtitle: '95% Patient Satisfaction',
      description: 'How a major healthcare system achieved unprecedented results through comprehensive AI transformation.',
      type: 'Case Study',
      readingTime: '15 min read',
      metrics: {
        savings: '$50M',
        satisfaction: '95%',
        efficiency: '340%',
        roi: '285%'
      },
      url: '/case-studies/healthcare-ai-transformation-2025-ultimate-success',
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2025',
      subtitle: 'From Strategy to 500% ROI',
      description: 'The complete guide to successful AI implementation with proven frameworks and step-by-step strategies.',
      type: 'Resource',
      readingTime: '25 min read',
      metrics: {
        roi: '500%',
        success: '98%',
        efficiency: '340%',
        clients: '500+'
      },
      url: '/resources/ai-implementation-master-guide-2025-ultimate',
      featured: true,
      isNew: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  if (!isVisible) return null;

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest insights, case studies, and implementation guides that are helping 
            companies achieve <span className="font-bold text-purple-600">500% ROI</span> in just 60 days.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content Preview */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {contentItems[currentSlide].type}
                    </span>
                    {contentItems[currentSlide].isNew && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        NEW
                      </span>
                    )}
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {contentItems[currentSlide].readingTime}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {contentItems[currentSlide].title}
                  </h3>
                  
                  <div className="text-2xl font-bold text-purple-600 mb-4">
                    {contentItems[currentSlide].subtitle}
                  </div>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {contentItems[currentSlide].description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(contentItems[currentSlide].metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={contentItems[currentSlide].url}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                      Download PDF
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <TrendingUp className="w-16 h-16" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Proven Results</h4>
                    <p className="text-lg opacity-90 mb-6">
                      Real metrics from real companies achieving extraordinary results
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm opacity-80">Projects</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">$2.8B</div>
                        <div className="text-sm opacity-80">Saved</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Background Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            More Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.type}
                  </span>
                  {item.isNew && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 500% ROI with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already achieving extraordinary results with our proven AI implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UltimateContentShowcase2025;