'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  Quote,
  ArrowRight,
  CheckCircle,
  BarChart3,
  DollarSign,
  Clock,
  User
} from 'lucide-react';

const SuccessStoriesShowcase2026 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Solutions",
      industry: "Technology",
      logo: "/api/placeholder/80/80",
      challenge: "Manual data processing was taking 40+ hours per week, limiting growth potential",
      solution: "Implemented AI-powered data analysis and automation tools",
      results: {
        timeSaved: "85%",
        costReduction: "$2.3M",
        efficiency: "300%",
        roi: "450%"
      },
      testimonial: {
        text: "The AI tools transformed our entire operation. What used to take days now happens in minutes, and the accuracy is incredible.",
        author: "Sarah Johnson",
        role: "CTO",
        avatar: "/api/placeholder/60/60"
      },
      metrics: [
        { label: "Time Saved", value: "85%", icon: Clock },
        { label: "Cost Reduction", value: "$2.3M", icon: DollarSign },
        { label: "Efficiency Gain", value: "300%", icon: TrendingUp },
        { label: "ROI", value: "450%", icon: BarChart3 }
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      company: "Global Finance Inc",
      industry: "Financial Services",
      logo: "/api/placeholder/80/80",
      challenge: "Risk assessment processes were manual and prone to human error",
      solution: "Deployed AI-powered risk analysis and predictive modeling",
      results: {
        timeSaved: "70%",
        costReduction: "$5.1M",
        efficiency: "250%",
        roi: "380%"
      },
      testimonial: {
        text: "Our risk assessment accuracy improved dramatically while reducing processing time by 70%. The AI insights are invaluable.",
        author: "Michael Chen",
        role: "Risk Director",
        avatar: "/api/placeholder/60/60"
      },
      metrics: [
        { label: "Time Saved", value: "70%", icon: Clock },
        { label: "Cost Reduction", value: "$5.1M", icon: DollarSign },
        { label: "Efficiency Gain", value: "250%", icon: TrendingUp },
        { label: "ROI", value: "380%", icon: BarChart3 }
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      company: "RetailMax",
      industry: "E-commerce",
      logo: "/api/placeholder/80/80",
      challenge: "Customer service was overwhelmed with repetitive inquiries",
      solution: "Implemented AI chatbot and automated customer support systems",
      results: {
        timeSaved: "90%",
        costReduction: "$1.8M",
        efficiency: "400%",
        roi: "520%"
      },
      testimonial: {
        text: "Customer satisfaction increased by 40% while reducing support costs by 90%. The AI handles complex queries beautifully.",
        author: "Emily Rodriguez",
        role: "Customer Success Manager",
        avatar: "/api/placeholder/60/60"
      },
      metrics: [
        { label: "Time Saved", value: "90%", icon: Clock },
        { label: "Cost Reduction", value: "$1.8M", icon: DollarSign },
        { label: "Efficiency Gain", value: "400%", icon: TrendingUp },
        { label: "ROI", value: "520%", icon: BarChart3 }
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      company: "ManufacturingPro",
      industry: "Manufacturing",
      logo: "/api/placeholder/80/80",
      challenge: "Production line optimization was inefficient and costly",
      solution: "Deployed AI-powered predictive maintenance and optimization",
      results: {
        timeSaved: "75%",
        costReduction: "$3.7M",
        efficiency: "280%",
        roi: "420%"
      },
      testimonial: {
        text: "Our production efficiency increased by 280% while reducing downtime by 75%. The predictive maintenance is a game-changer.",
        author: "David Thompson",
        role: "Operations Director",
        avatar: "/api/placeholder/60/60"
      },
      metrics: [
        { label: "Time Saved", value: "75%", icon: Clock },
        { label: "Cost Reduction", value: "$3.7M", icon: DollarSign },
        { label: "Efficiency Gain", value: "280%", icon: TrendingUp },
        { label: "ROI", value: "420%", icon: BarChart3 }
      ],
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories.length]);

  const currentStory = successStories[activeStory];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
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

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Success Stories 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Real Results from
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Real Companies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading businesses are transforming their operations and achieving remarkable results with our AI solutions.
          </p>
        </motion.div>

        {/* Story Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => {
                setActiveStory(index);
                setIsAutoPlaying(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <img src={story.logo} alt={story.company} className="w-6 h-6 rounded-full" />
              {story.company}
            </button>
          ))}
        </motion.div>

        {/* Main Story Display */}
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="flex items-center gap-4">
              <img src={currentStory.logo} alt={currentStory.company} className="w-16 h-16 rounded-xl" />
              <div>
                <h3 className="text-3xl font-bold text-white">{currentStory.company}</h3>
                <p className="text-gray-300">{currentStory.industry}</p>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                <p className="text-gray-300 leading-relaxed">{currentStory.challenge}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300 leading-relaxed">{currentStory.solution}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentStory.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${currentStory.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Testimonial */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Quote className="w-8 h-8 text-green-400 mb-4" />
              <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                "{currentStory.testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={currentStory.testimonial.avatar} 
                  alt={currentStory.testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-white">{currentStory.testimonial.author}</div>
                  <div className="text-sm text-gray-400">{currentStory.testimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        </motion.div>

        {/* Story Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveStory(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStory
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join these industry leaders and transform your business with our proven AI solutions. Start your journey to success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                Start Your Success Story
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2026;