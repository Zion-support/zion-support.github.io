"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain
  ArrowRight
  Star
  Zap
  Rocket
  Shield,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Globe,
  Cpu
} from 'lucide-react';

const ComprehensiveAISolutions2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const solutions = [
    { icon: Braintitle: 'Enterprise 'AI', 'color: 'from-blue-500 to-purple-500' },
    { icon: Rocketitle: 'Quantum 'AI', 'color: 'from-purple-500 to-pink-500' },
    { icon: Zaptitle: ''Automation', 'color: 'from-green-500 to-blue-500' },
    { icon: Shieldtitle: 'Security 'AI', 'color: 'from-red-500 to-orange-500' }
  ];

  const benefits = [
    { icon: TrendingUptext: '99.9% Uptime' },
    { icon: Userstext: '1000+ Enterprises' },
    { icon: Awardtext: 'Industry Leading' },
    { icon: BarChart3text: '60% Cost Reduction' }
  ];

  const stats = [
    { value: '10,000+'label: 'AI Models' },
    { value: '500+'label: 'Solutions' },
    { value: '1,000+'label: 'Enterprises' },
    { value: '99.9%'label: 'Uptime' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                <Brain className="w-4 h-4" />
                NEW: COMPREHENSIVE AI SOLUTIONS 2026
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Complete AI
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Ecosystem
                </span>
                <br />
                for Modern Business
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Transform your business with our comprehensive suite of AI solutions
                from enterprise platforms to quantum computing integration.
              </motion.p>

              {/* Solutions Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {solutions.map((solutionindex) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center`}>
                      <solution.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">{solution.title}</span>
                  </div>
                ))}
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.6 }}
                className="space-y-3"
              >
                {benefits.map((benefitindex) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Explore Solutions
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20">
                  <Award className="w-5 h-5" />
                  View Case Studies
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats & Visual */}
            <motion.div
              initial={{ opacity: 0x: 50 }}
              animate={isVisible ? { opacity: 1x: 0 } : {}}
              transition={{ duration: 0.8delay: 0.4 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((statindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0scale: 0.8 }}
                    animate={isVisible ? { opacity: 1scale: 1 } : {}}
                    transition={{ duration: 0.5delay: 0.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0scale: 0.8 }}
                animate={isVisible ? { opacity: 1scale: 1 } : {}}
                transition={{ duration: 0.8delay: 0.7 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Enterprise AI Platform</h3>
                    <p className="text-gray-300">
                      Complete AI infrastructure for large-scale enterprise operations
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>99.9% uptime guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Rocket className="w-2 h-2 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAISolutions2026PromotionBanner;
