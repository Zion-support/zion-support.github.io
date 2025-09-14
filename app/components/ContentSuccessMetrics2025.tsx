'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  CheckCircle,
  Star,
  BookOpen,
  FileText,
  Lightbulb,
  Target,
  Zap,
  ArrowRight,
  Clock
} from 'lucide-react';

const ContentSuccessMetrics2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const contentMetrics = [
    {
      title: "AI 2025: Enterprise Automation Revolution",
      type: "blog",
      url: "/blog/ai-2025-enterprise-automation-revolution",
      metrics: {
        roi: "340%",
        satisfaction: "98%",
        projects: "500+",
        savings: "$2.8B"
      },
      icon: TrendingUp,
      color: "from-blue-500 to-blue-700",
      description: "Discover how AI automation is delivering unprecedented ROI across enterprises"
    },
    {
      title: "Healthcare AI: $200M System Success",
      type: "case-study",
      url: "/case-studies/healthcare-ai-transformation-2025-success",
      metrics: {
        roi: "300%",
        savings: "$18.7M",
        satisfaction: "95%",
        timeline: "18 months"
      },
      icon: Users,
      color: "from-green-500 to-green-700",
      description: "Real-world case study showing how healthcare systems achieve massive ROI"
    },
    {
      title: "AI Implementation Guide 2025",
      type: "resource",
      url: "/resources/ai-automation-implementation-guide-2025",
      metrics: {
        roi: "300-500%",
        projects: "500+ Success Stories",
        satisfaction: "98%",
        implementation: "18-24 months"
      },
      icon: Lightbulb,
      color: "from-purple-500 to-purple-700",
      description: "Comprehensive guide to implementing AI automation successfully"
    }
  ];

  const overallStats = [
    { icon: TrendingUp, value: "340%", label: "Average ROI", color: "text-green-600" },
    { icon: Users, value: "500+", label: "Projects Delivered", color: "text-blue-600" },
    { icon: DollarSign, value: "$2.8B", label: "Client Savings", color: "text-purple-600" },
    { icon: CheckCircle, value: "98%", label: "Success Rate", color: "text-orange-600" }
  ];

  const typeIcons = {
    blog: BookOpen,
    'case-study': FileText,
    resource: Lightbulb
  };

  const typeColors = {
    blog: 'bg-blue-100 text-blue-800',
    'case-study': 'bg-green-100 text-green-800',
    resource: 'bg-purple-100 text-purple-800'
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('content-success-metrics-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('content-success-metrics-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6"
          >
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">📊 PROVEN RESULTS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Content That Drives Real Business Results
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Our latest content pieces showcase real-world success stories, proven strategies, 
            and implementation guides that have helped businesses achieve unprecedented ROI.
          </motion.p>
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {overallStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contentMetrics.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${content.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20`}>
                    {React.createElement(typeIcons[content.type], { className: "w-4 h-4 mr-2" })}
                    {content.type.replace('-', ' ').toUpperCase()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-medium">FEATURED</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-sm opacity-90">
                  {content.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Our AI automation solutions have helped 500+ organizations achieve 
              unprecedented ROI. Let us help you transform your business too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="fixed top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-full shadow-lg z-50"
          aria-label="Dismiss banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContentSuccessMetrics2025;