'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Shield, 
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Building2,
  Cpu,
  Database,
  Sparkles
} from 'lucide-react';

const BusinessTransformation2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: '+150%',
      label: 'Revenue Growth',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      value: '-60%',
      label: 'Cost Reduction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      value: '+300%',
      label: 'Efficiency Gain',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      value: '75%',
      label: 'Time Savings',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation that learns and adapts'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Personalized customer journeys with AI'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Next-generation security and compliance monitoring'
    }
  ];

  const currentStatData = stats[currentStat];

  return (
    <div className="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-white text-sm font-medium">NEW: Business Transformation 2025</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join thousands of forward-thinking companies that have revolutionized their operations 
                with our cutting-edge AI technologies and automation solutions.
              </p>
            </div>

            {/* Animated Stat */}
            <motion.div
              key={currentStat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentStatData.color} flex items-center justify-center`}>
                  <currentStatData.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{currentStatData.value}</div>
                  <div className="text-blue-200 font-medium">{currentStatData.label}</div>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">{feature.title}</div>
                      <div className="text-blue-200 text-xs">{feature.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group shadow-lg">
                <Award className="w-5 h-5 mr-2" />
                Start Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center group border border-white/30">
                <Lightbulb className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <DollarSign className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              {/* Central Content */}
              <div className="text-center pt-16 pb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 border border-white/30 mb-6">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Business Transformation
                </h3>
                <p className="text-blue-100 mb-6">
                  Real results from companies using our AI solutions
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-blue-200 text-sm">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$2.5B+</div>
                    <div className="text-blue-200 text-sm">Saved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTransformation2025PromotionBanner;