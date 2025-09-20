<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2
  TrendingUp
  Users
  Shield
  ArrowRight
  CheckCircle,
  Star,
  Award,
  Zap,
  Target,
  BarChart3,
  Globe,
  Rocket,
  Brain,
  Sparkles
} from 'lucide-react';

const BusinessSolutionsShowcase2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }2000);
    return () => clearInterval(interval);
  }[]);

  const stats = [
    { number: "500+"label: "Projects Completed"icon: CheckCirclecolor: "from-green-500 to-emerald-500" },
    { number: "99.9%"label: "Client Satisfaction"icon: Starcolor: "from-yellow-500 to-orange-500" },
    { number: "300%"label: "Average ROI"icon: TrendingUpcolor: "from-blue-500 to-cyan-500" },
    { number: "24/7"label: "Support Available"icon: Shieldcolor: "from-purple-500 to-pink-500" }
  ];

  const solutions = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions",
      icon: Building2,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Startup Solutions"
      description: "Rapid deployment for growing startups",
      icon: Rocket,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "SMB Solutions",
      description: "Affordable yet powerful for SMBs",
      icon: Users,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const features = [
    "AI-Powered Business Intelligence",
    "Advanced Security Solutions",
    "Cloud Infrastructure Management",
    "Rapid MVP Development",
    "Growth Analytics Platform",
    "Digital Transformation"
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0x: -50 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium">Business Solutions 2027</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              Business Solutions Showcase 2027
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Comprehensive technology solutions designed to accelerate your business growth
              enhance efficiencyand drive innovation across all industries and company sizes.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((featureindex) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:transform hover:scale-105">
                <Rocket className="w-5 h-5" />
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <Award className="w-5 h-5" />
                View Case Studies
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0x: 50 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8delay: 0.2 }}
            className="space-y-8"
          >
            {/* Solutions Cards */}
            <div className="space-y-4">
              {solutions.map((solutionindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0x: 30 }}
                  animate={isVisible ? { opacity: 1x: 0 } : {}}
                  transition={{ duration: 0.6delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color}`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                      <p className="text-gray-300 text-sm">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Proven Results</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((statindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0scale: 0.8 }}
                    animate={isVisible ? { opacity: 1scale: 1 } : {}}
                    transition={{ duration: 0.5delay: 0.4 + index * 0.1 }}
                    className={`text-center p-4 rounded-2xl bg-gradient-to-r ${stat.color} ${
                      currentStat === index ? 'ring-2 ring-white/30' : ''
                    } transition-all duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-white font-medium">Industry Recognition</span>
              </div>
              <p className="text-gray-300 text-sm">
                Trusted by Fortune 500 companiestartupsand SMBs worldwide. 
                Recognized for excellence in technology innovation and client success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutionsShowcase2027PromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
