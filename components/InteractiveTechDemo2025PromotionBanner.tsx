'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb,
  Code,
  Cpu,
  Database,
  Network,
  Monitor,
  Smartphone,
  Cloud,
  Lock,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  Sparkles,
  Rocket,
  Eye
} from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate demos every 3 seconds
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time data visualization and insights',
      icon: BarChart3,
      color: 'from-purple-500 to-blue-500',
      metrics: ['+45% Revenue', '99.8% Uptime', '2.3M Records']
    },
    {
      title: 'Automation Workflow',
      description: 'AI-powered process automation',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      metrics: ['95% Automated', '2,400 hrs Saved', '99.7% Accuracy']
    },
    {
      title: 'Security Monitor',
      description: 'Real-time threat detection',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      metrics: ['99.9% Detection', '< 2s Response', '15,420 Blocked']
    }
  ];

  const features = [
    { name: 'Live Demos', icon: PlayCircle, count: '12+' },
    { name: 'Interactive', icon: Eye, count: '100%' },
    { name: 'Real-time', icon: Activity, count: '24/7' },
    { name: 'Tech Stack', icon: Code, count: '15+' }
  ];

  const techStack = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Cpu },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Settings }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              INTERACTIVE TECH DEMOS
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Experience Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Technology
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Interact with live demos and see how our AI-powered tools can transform 
              your business operations in real-time.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <feature.icon className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">{feature.name}</div>
                    <div className="text-gray-300 text-sm">{feature.count}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Built With Modern Tech:</h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <tech.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/interactive-demo-2025"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Try Interactive Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Demo Screen */}
            <div className="relative bg-gray-900 rounded-2xl p-6 shadow-2xl">
              {/* Screen Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">
                    Interactive Demo
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">LIVE</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="bg-white rounded-lg p-6 min-h-[300px]">
                {/* Current Demo */}
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${demos[currentDemo].color} rounded-full mb-4`}>
                    <demos[currentDemo].icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {demos[currentDemo].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {demos[currentDemo].description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {demos[currentDemo].metrics.map((metric, index) => (
                      <div key={index} className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <div className="text-sm font-bold text-gray-900">{metric}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Play Button */}
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                    <PlayCircle className="w-5 h-5" />
                    <span>Play Demo</span>
                  </button>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {demos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentDemo ? 'bg-purple-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <Star className="w-4 h-4 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025PromotionBanner;