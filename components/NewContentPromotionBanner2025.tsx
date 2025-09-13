'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Rocket, 
  Zap, 
  Brain, 
  Globe, 
  Target,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

const NewContentPromotionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "AI-Powered Content Generation",
      description: "Create high-quality content in seconds with our advanced AI technology",
      icon: Brain,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Real-Time Optimization",
      description: "Automatically optimize your content for maximum engagement and performance",
      icon: Zap,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Global Distribution",
      description: "Reach audiences worldwide with our intelligent content distribution network",
      icon: Globe,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your content performance with detailed analytics",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    "10x faster content creation",
    "300% increase in engagement",
    "99.9% uptime guarantee",
    "24/7 AI assistance",
    "Multi-language support",
    "Advanced security features"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">New Content Platform 2025</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Content
              <span className="block text-yellow-300">
                Creation Platform
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the future of content creation with our AI-powered platform 
              that generates, optimizes, and distributes content at unprecedented scale 
              and quality.
            </p>

            {/* Rotating Feature */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
              key={currentFeature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${features[currentFeature].color}`}>
                  <features[currentFeature].icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {features[currentFeature].title}
                </h3>
              </div>
              <p className="text-white/80">
                {features[currentFeature].description}
              </p>
            </motion.div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Start Free Trial
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
              
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Interactive Content Creator
                  </h3>
                  <p className="text-white/70">
                    Experience our AI-powered content generation in real-time
                  </p>
                </div>

                {/* Demo Interface */}
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-xs text-white/60 ml-2">Content Generator</span>
                    </div>
                    <div className="h-32 bg-white/5 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="w-8 h-8 text-white/60 mx-auto mb-2" />
                        <div className="text-sm text-white/60">AI Content Generation</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                      <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm text-white/80">Optimization</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                      <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-white/80">Security</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-white/70">Content Pieces Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500K+</div>
            <div className="text-white/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/70">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">AI Support</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;