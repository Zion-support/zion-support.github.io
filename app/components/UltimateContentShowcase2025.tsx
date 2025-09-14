'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Heart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
  };
  tags: string[];
  featured: boolean;
  isNew: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution Protecting $50B+ in Enterprise Assets',
      type: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution',
      description: 'Discover how AI-powered security solutions are achieving 99.7% threat detection accuracy while reducing costs by 78%.',
      metrics: {
        accuracy: '99.7%',
        savings: '$50B+',
        satisfaction: '98%'
      },
      tags: ['AI Security', 'Enterprise', 'ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: $2.1B Health System Achieves 99.8% Patient Safety',
      type: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025',
      description: 'Learn how a major healthcare system generated $180M in savings while achieving unprecedented patient safety scores.',
      metrics: {
        savings: '$180M',
        accuracy: '99.8%',
        satisfaction: '94%'
      },
      tags: ['Healthcare', 'Case Study', 'Patient Safety'],
      featured: true,
      isNew: true
    },
    {
      id: 'enterprise-implementation',
      title: 'AI Implementation Enterprise Guide: From Strategy to $500M+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-enterprise-guide-2025',
      description: 'Complete framework for implementing AI solutions that deliver $500M+ ROI within 24 months.',
      metrics: {
        roi: '833%',
        savings: '$500M+',
        satisfaction: '95%'
      },
      tags: ['Implementation', 'ROI', 'Strategy'],
      featured: true,
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <TrendingUp className="w-5 h-5" />;
      case 'case-study': return <Users className="w-5 h-5" />;
      case 'resource': return <Target className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Excellence
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          >
            Discover proven strategies, real success stories, and implementation guides that have helped organizations achieve $500M+ in ROI.
          </motion.p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(contentItems[currentIndex].type)}`}>
                      {getTypeIcon(contentItems[currentIndex].type)}
                      {contentItems[currentIndex].type.toUpperCase()}
                    </div>
                    {contentItems[currentIndex].isNew && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        NEW
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {contentItems[currentIndex].title}
                  </h3>

                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {contentItems[currentIndex].description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(contentItems[currentIndex].metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{value}</div>
                        <div className="text-sm opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {contentItems[currentIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={contentItems[currentIndex].url}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        {getTypeIcon(contentItems[currentIndex].type)}
                      </div>
                      <h4 className="text-xl font-bold mb-4">Key Benefits</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span>Proven ROI of 340%+</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span>Real-world case studies</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span>Step-by-step implementation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span>Expert insights and best practices</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">$500M+</div>
            <div className="text-sm opacity-75">Average ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-sm opacity-75">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
            <div className="text-sm opacity-75">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24</div>
            <div className="text-sm opacity-75">Months to ROI</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ organizations that have achieved unprecedented success with our AI solutions. 
              Get your free consultation and custom ROI analysis today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;