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
  Award,
  BookOpen,
  FileText,
  BarChart3,
  Rocket,
  Eye,
  ThumbsUp,
  Share2
} from 'lucide-react';

const ContentSuccessMetrics2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "The AI implementation guide was exactly what we needed. We achieved 340% ROI in just 4 months.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "Fortune 500"
    },
    {
      quote: "The case studies provided real-world insights that helped us avoid common pitfalls and accelerate our AI journey.",
      author: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing"
    },
    {
      quote: "Zion Tech Group's content is not just informative—it's actionable. We implemented their strategies and saw immediate results.",
      author: "Emily Rodriguez",
      role: "Digital Transformation Lead",
      company: "Financial Services"
    }
  ];

  const contentStats = [
    {
      icon: BookOpen,
      value: '9',
      label: 'New Articles',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FileText,
      value: '3',
      label: 'Case Studies',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: BarChart3,
      value: '2',
      label: 'Master Guides',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      value: '15K+',
      label: 'Words of Content',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    }
  ];

  const roiMetrics = [
    { value: '500%', label: 'Average ROI', trend: '+25%' },
    { value: '$2.8B+', label: 'Total Savings', trend: '+$500M' },
    { value: '98%', label: 'Success Rate', trend: '+5%' },
    { value: '60 Days', label: 'Time to Value', trend: '-20 days' }
  ];

  const featuredContent = [
    {
      title: 'AI 2025: Enterprise Automation Revolution',
      description: '500% ROI in 60 Days',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      metrics: { roi: '500%', timeframe: '60 days', word_count: '8,500' },
      featured: true
    },
    {
      title: 'AI Transformation: $50M Annual Savings',
      description: 'Fortune 500 Success Story',
      type: 'case-study',
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      metrics: { savings: '$50M', roi: '1,200%', timeframe: '6 months' },
      featured: true
    },
    {
      title: 'AI Implementation Master Guide 2025',
      description: 'From Strategy to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2025',
      metrics: { roi: '500%', word_count: '15,000', reading_time: '20 min' },
      featured: true
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">CONTENT SUCCESS METRICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results from Our
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Content Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive AI content library has helped thousands of companies 
            achieve unprecedented results. See the metrics that matter.
          </p>
        </motion.div>

        {/* Content Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {contentStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 mb-16 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Real ROI Metrics from Our Content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-green-300 text-sm font-semibold">
                  {metric.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Featured Content Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.type.toUpperCase()}
                  </span>
                  {content.featured && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-500 capitalize">
                        {key.replace('_', ' ')}:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            What Our Readers Say
          </h3>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our proven AI strategies 
            to transform their business operations and achieve unprecedented ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-enterprise-automation-revolution"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Reading Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSuccessMetrics2025;