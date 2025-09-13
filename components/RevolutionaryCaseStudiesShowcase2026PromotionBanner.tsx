'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  ArrowRight,
  Star,
  CheckCircle,
  Building2,
  Heart,
  Car,
  ShoppingCart,
  GraduationCap,
  Globe,
  BarChart3,
  Zap,
  Shield,
  Sparkles,
  Play
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '340%', label: 'Average ROI', icon: TrendingUp, color: 'text-green-400' },
    { value: '$2.3M', label: 'Average Savings', icon: DollarSign, color: 'text-blue-400' },
    { value: '99.2%', label: 'Success Rate', icon: Target, color: 'text-purple-400' },
    { value: '500+', label: 'Companies', icon: Building2, color: 'text-yellow-400' }
  ];

  const industries = [
    { name: 'Enterprise', icon: Building2, cases: '150+', color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Heart, cases: '80+', color: 'from-red-500 to-pink-500' },
    { name: 'Retail', icon: ShoppingCart, cases: '120+', color: 'from-green-500 to-teal-500' },
    { name: 'Education', icon: GraduationCap, cases: '60+', color: 'from-purple-500 to-indigo-500' },
    { name: 'Automotive', icon: Car, cases: '40+', color: 'from-orange-500 to-red-500' }
  ];

  const testimonials = [
    {
      quote: "The AI implementation exceeded our wildest expectations. We've never seen such dramatic improvements.",
      author: "Sarah Johnson",
      position: "CTO, Global Manufacturing Corp",
      company: "Fortune 500",
      result: "340% ROI"
    },
    {
      quote: "This AI system has transformed how we diagnose patients. The accuracy and speed are remarkable.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer, Metro Health",
      company: "Healthcare",
      result: "95% Accuracy"
    },
    {
      quote: "The AI personalization engine has been a game-changer for our business. Revenue has never been higher.",
      author: "Jennifer Martinez",
      position: "VP of Technology, TechRetail",
      company: "E-commerce",
      result: "$50M Revenue"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate stats
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <Award className="w-4 h-4" />
              Revolutionary Success Stories 2026
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Real Results from
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Real Companies
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover how leading companies across industries are transforming their businesses 
              with our AI solutions. See the measurable impact and ROI they've achieved.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = currentStat === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0, 
                      scale: isVisible ? (isActive ? 1.05 : 1) : 0.8 
                    }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transition-all duration-300 ${
                      isActive ? 'ring-2 ring-yellow-400' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                View Success Stories
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
              >
                Download Case Studies
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Industry Stats */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Success Across Industries</h3>
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{industry.name}</div>
                          <div className="text-gray-300 text-sm">{industry.cases} case studies</div>
                        </div>
                      </div>
                      <div className="text-yellow-400 font-bold">{industry.cases}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-medium">Featured Testimonial</span>
              </div>
              
              <blockquote className="text-gray-300 italic mb-4">
                "{testimonials[0].quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonials[0].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium">{testimonials[0].author}</div>
                  <div className="text-gray-300 text-sm">{testimonials[0].position}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-yellow-400 font-bold">{testimonials[0].result}</div>
                  <div className="text-gray-300 text-sm">{testimonials[0].company}</div>
                </div>
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <BarChart3 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">500+</div>
                <div className="text-gray-300 text-sm">Success Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">98%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </motion.div>

            {/* Floating Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Scroll to explore success stories
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </motion.section>
  );
};

export default RevolutionaryCaseStudiesShowcase2026PromotionBanner;