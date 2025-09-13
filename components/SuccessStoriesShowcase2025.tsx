'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  Award,
  Quote,
  ArrowRight,
  Star,
  CheckCircle,
  BarChart3,
  Zap
} from 'lucide-react';

const SuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Solutions",
      industry: "Technology",
      logo: "TC",
      challenge: "Manual data processing causing 40% efficiency loss",
      solution: "Implemented AI-powered automation suite",
      results: {
        efficiency: "+300%",
        costSavings: "$2.5M",
        timeReduction: "85%",
        satisfaction: "98%"
      },
      testimonial: {
        text: "The transformation has been incredible. We've not only saved millions but also improved our team's productivity beyond our wildest expectations.",
        author: "Sarah Johnson",
        role: "CEO, TechCorp Solutions",
        rating: 5
      },
      metrics: [
        { label: "ROI Increase", value: "300%", icon: TrendingUp },
        { label: "Cost Savings", value: "$2.5M", icon: DollarSign },
        { label: "Time Saved", value: "85%", icon: Clock },
        { label: "Team Satisfaction", value: "98%", icon: Users }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      company: "Global Manufacturing Inc",
      industry: "Manufacturing",
      logo: "GM",
      challenge: "Supply chain inefficiencies costing $5M annually",
      solution: "Deployed intelligent supply chain optimization",
      results: {
        efficiency: "+250%",
        costSavings: "$5.2M",
        timeReduction: "70%",
        satisfaction: "95%"
      },
      testimonial: {
        text: "Our supply chain is now running like a well-oiled machine. The AI insights helped us identify bottlenecks we never knew existed.",
        author: "Michael Chen",
        role: "Operations Director, Global Manufacturing Inc",
        rating: 5
      },
      metrics: [
        { label: "Efficiency Gain", value: "250%", icon: BarChart3 },
        { label: "Cost Reduction", value: "$5.2M", icon: DollarSign },
        { label: "Process Speed", value: "70%", icon: Zap },
        { label: "Accuracy Rate", value: "99.2%", icon: Target }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      company: "Financial Services Group",
      industry: "Finance",
      logo: "FS",
      challenge: "Manual compliance reporting taking 200+ hours monthly",
      solution: "Automated compliance and reporting system",
      results: {
        efficiency: "+400%",
        costSavings: "$1.8M",
        timeReduction: "90%",
        satisfaction: "97%"
      },
      testimonial: {
        text: "Compliance used to be our biggest headache. Now it's completely automated and more accurate than ever before.",
        author: "Emily Rodriguez",
        role: "Compliance Officer, Financial Services Group",
        rating: 5
      },
      metrics: [
        { label: "Process Speed", value: "400%", icon: TrendingUp },
        { label: "Cost Savings", value: "$1.8M", icon: DollarSign },
        { label: "Time Reduction", value: "90%", icon: Clock },
        { label: "Accuracy", value: "99.8%", icon: Award }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      company: "Healthcare Innovations",
      industry: "Healthcare",
      logo: "HI",
      challenge: "Patient data management causing 60% processing delays",
      solution: "AI-powered patient data analytics platform",
      results: {
        efficiency: "+350%",
        costSavings: "$3.1M",
        timeReduction: "80%",
        satisfaction: "99%"
      },
      testimonial: {
        text: "Patient care has improved dramatically. Our staff can now focus on what matters most - providing excellent healthcare.",
        author: "Dr. James Wilson",
        role: "Chief Medical Officer, Healthcare Innovations",
        rating: 5
      },
      metrics: [
        { label: "Processing Speed", value: "350%", icon: Zap },
        { label: "Cost Reduction", value: "$3.1M", icon: DollarSign },
        { label: "Time Saved", value: "80%", icon: Clock },
        { label: "Patient Satisfaction", value: "99%", icon: Users }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStory((prev) => (prev + 1) % successStories.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const currentStory = successStories[activeStory];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-medium mb-4"
          >
            <Award className="w-4 h-4 mr-2" />
            Success Stories Showcase 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Real Results from
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Real Companies</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how industry leaders transformed their operations and achieved remarkable results with our solutions.
          </motion.p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {successStories.map((story, index) => (
            <motion.button
              key={story.id}
              onClick={() => {
                setActiveStory(index);
                setIsAutoPlaying(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                activeStory === index ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {story.logo}
              </div>
              {story.company}
            </motion.button>
          ))}
        </div>

        {/* Main Story Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
          >
            <div className={`h-2 bg-gradient-to-r ${currentStory.color}`} />
            
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Story Details */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentStory.color} flex items-center justify-center text-white text-xl font-bold mr-4`}>
                      {currentStory.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {currentStory.company}
                      </h3>
                      <p className="text-gray-600">{currentStory.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{currentStory.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{currentStory.solution}</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {currentStory.metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-gray-50 rounded-lg text-center"
                          >
                            <Icon className={`w-6 h-6 mx-auto mb-2 text-green-600`} />
                            <div className="text-2xl font-bold text-gray-900 mb-1">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {metric.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Side - Testimonial & Visual */}
                <div>
                  <div className={`h-80 rounded-xl bg-gradient-to-br ${currentStory.color} p-8 text-white relative overflow-hidden mb-6`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10">
                      <Quote className="w-8 h-8 mb-4 opacity-80" />
                      <blockquote className="text-lg italic mb-6">
                        "{currentStory.testimonial.text}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">
                            {currentStory.testimonial.author}
                          </div>
                          <div className="text-sm opacity-80">
                            {currentStory.testimonial.role}
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(currentStory.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <BarChart3 className="w-5 h-5" />
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Auto-play Controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-600' : 'bg-gray-400'}`} />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </button>
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Join 500+ Companies Already Seeing Results
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Companies Transformed" },
              { value: "$50M+", label: "Total Cost Savings" },
              { value: "95%", label: "Average Efficiency Gain" },
              { value: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <CheckCircle className="w-5 h-5" />
            Start Your Success Story
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2025;