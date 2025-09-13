'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Quote,
  Building2,
  Globe,
  Zap,
  Award,
  BarChart3,
  Play,
  ExternalLink
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const successStories = [
    {
      company: "TechCorp Solutions",
      industry: "Software Development",
      logo: "TC",
      challenge: "Manual processes causing 40% productivity loss",
      solution: "Implemented AI-powered automation suite",
      results: {
        productivity: "+65%",
        costReduction: "-$2.3M",
        timeSaved: "1,200 hours/month",
        satisfaction: "98%"
      },
      testimonial: "Zion Tech Group transformed our entire workflow. The AI automation tools they implemented saved us over $2 million annually while dramatically improving our team's productivity.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp Solutions",
      image: "/api/placeholder/400/300",
      metrics: [
        { label: "Productivity Increase", value: "65%", icon: TrendingUp },
        { label: "Cost Savings", value: "$2.3M", icon: DollarSign },
        { label: "Time Saved", value: "1,200h", icon: Clock },
        { label: "Team Satisfaction", value: "98%", icon: Users }
      ]
    },
    {
      company: "Global Retail Inc",
      industry: "E-commerce",
      logo: "GR",
      challenge: "Inventory management inefficiencies leading to 25% stockouts",
      solution: "AI-powered demand forecasting and inventory optimization",
      results: {
        productivity: "+45%",
        costReduction: "-$1.8M",
        timeSaved: "800 hours/month",
        satisfaction: "95%"
      },
      testimonial: "The AI-driven inventory system completely revolutionized our supply chain. We reduced stockouts by 90% and increased our profit margins significantly.",
      author: "Michael Chen",
      position: "COO, Global Retail Inc",
      image: "/api/placeholder/400/300",
      metrics: [
        { label: "Stockout Reduction", value: "90%", icon: Target },
        { label: "Revenue Increase", value: "+$5.2M", icon: TrendingUp },
        { label: "Inventory Turnover", value: "3.2x", icon: BarChart3 },
        { label: "Customer Satisfaction", value: "96%", icon: Star }
      ]
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare Technology",
      logo: "HT",
      challenge: "Patient data processing taking 6+ hours per case",
      solution: "AI-powered medical data analysis and reporting system",
      results: {
        productivity: "+80%",
        costReduction: "-$3.1M",
        timeSaved: "2,000 hours/month",
        satisfaction: "99%"
      },
      testimonial: "The AI system they built for us processes patient data in minutes instead of hours. Our medical staff can now focus on patient care instead of paperwork.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, HealthTech Innovations",
      image: "/api/placeholder/400/300",
      metrics: [
        { label: "Processing Speed", value: "95% faster", icon: Zap },
        { label: "Accuracy Rate", value: "99.7%", icon: CheckCircle },
        { label: "Cost Savings", value: "$3.1M", icon: DollarSign },
        { label: "Staff Satisfaction", value: "99%", icon: Users }
      ]
    },
    {
      company: "FinanceFlow Systems",
      industry: "Financial Services",
      logo: "FF",
      challenge: "Manual fraud detection missing 15% of cases",
      solution: "Advanced AI fraud detection and risk assessment platform",
      results: {
        productivity: "+70%",
        costReduction: "-$4.2M",
        timeSaved: "1,500 hours/month",
        satisfaction: "97%"
      },
      testimonial: "Their AI fraud detection system caught 99.5% of fraudulent transactions in real-time. We've saved millions and protected our customers' assets.",
      author: "David Park",
      position: "CTO, FinanceFlow Systems",
      image: "/api/placeholder/400/300",
      metrics: [
        { label: "Fraud Detection", value: "99.5%", icon: Shield },
        { label: "False Positives", value: "-85%", icon: Target },
        { label: "Processing Time", value: "Real-time", icon: Clock },
        { label: "Cost Savings", value: "$4.2M", icon: DollarSign }
      ]
    }
  ];

  const currentStory = successStories[activeStory];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4 mr-2" />
            Real Business Success Stories
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Proven Results
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            See how we've helped companies achieve extraordinary growth and efficiency
          </p>
        </motion.div>

        {/* Story Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {successStories.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-white text-slate-900 shadow-lg transform scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
              }`}
            >
              {story.company}
            </button>
          ))}
        </motion.div>

        {/* Story Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Company Info & Testimonial */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                    {currentStory.logo}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {currentStory.company}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {currentStory.industry}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Challenge:</h3>
                    <p className="text-gray-300">{currentStory.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Solution:</h3>
                    <p className="text-gray-300">{currentStory.solution}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <Quote className="w-8 h-8 text-green-400 mb-4" />
                  <p className="text-gray-300 text-lg italic mb-4">
                    "{currentStory.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {currentStory.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{currentStory.author}</p>
                      <p className="text-gray-400 text-sm">{currentStory.position}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results & Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Results Achieved</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {currentStory.metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-xl p-6 border border-white/10 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Productivity increased by {currentStory.results.productivity}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Cost savings of {currentStory.results.costReduction}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Time saved: {currentStory.results.timeSaved}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Team satisfaction: {currentStory.results.satisfaction}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/30">
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Case Study
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase2025;