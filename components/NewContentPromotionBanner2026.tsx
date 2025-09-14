"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles
  ArrowRight
  Star
  Zap
  Brain
  Globe,
  Rocket,
  TrendingUp,
  X,
  ChevronDown
} from 'lucide-react';

const NewContentPromotionBanner2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [showDetailsetShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1000);
    return () => clearTimeout(timer);
  }[]);

  const features = [
    { icon: Braintext: 'Multimodal AI Revolution'color: 'text-purple-400' },
    { icon: Zaptext: 'Quantum Computing Breakthroughs'color: 'text-blue-400' },
    { icon: Globetext: 'Green Tech Solutions'color: 'text-green-400' },
    { icon: Rocketext: 'Advanced Automation'color: 'text-orange-400' }
  ];

  const stats = [
    { number: '25+'label: 'New Articles' },
    { number: '15+'label: 'Case Studies' },
    { number: '8+'label: 'Implementation Guides' },
    { number: '5+'label: 'Video Tutorials' }
  ];

  if (isDismissed) return null;

  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0y: -50 }}
      animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: -50 }}
      transition={{ duration: 0.8ease: "easeOut" }}
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0-20],
              opacity: [0.30.80.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-bold text-white">🚀 NEW CONTENT ALERT</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0y: 20 }}
              animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 20 }}
              transition={{ delay: 0.3duration: 0.6 }}
            >
              Revolutionary Content Just Dropped! 🎉
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-white opacity-90 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0y: 20 }}
              animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 20 }}
              transition={{ delay: 0.4duration: 0.6 }}
            >
              Discover 25+ groundbreaking articlescase studiesand implementation guides covering 
              the latest in AIquantum computingsustainabilityand automation.
            </motion.p>

            {/* Features grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 0y: 20 }}
              animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 20 }}
              transition={{ delay: 0.5duration: 0.6 }}
            >
              {features.map((featureindex) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${feature.color}`} />
                    <p className="text-sm text-white font-medium">{feature.text}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0y: 20 }}
              animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 20 }}
              transition={{ delay: 0.6duration: 0.6 }}
            >
              {stats.map((statindex) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              initial={{ opacity: 0y: 20 }}
              animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 20 }}
              transition={{ delay: 0.7duration: 0.6 }}
            >
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Explore New Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/ai-2026-multimodal-revolution"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Read Featured Article
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Toggle details */}
            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              className="text-white opacity-80 hover:opacity-100 transition-opacity inline-flex items-center"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 0.8 } : { opacity: 0 }}
              transition={{ delay: 0.8duration: 0.6 }}
            >
              <span className="mr-2">
                {showDetails ? 'Show Less' : 'Show More Details'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showDetails ? 'rotate-180' : ''
                }`}
              />
            </motion.button>
          </div>

          {/* Expandable details */}
          <motion.div
            className="mt-8 overflow-hidden"
            initial={false}
            animate={{
              height: showDetails ? 'auto' : 0,
              opacity: showDetails ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">What's New This Week:</h3>
                  <ul className="space-y-2 text-white opacity-90">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-300" />
                      Multimodal AI Revolution: Beyond Text and Images
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-blue-300" />
                      Quantum Computing Breakthroughs 2026
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-green-300" />
                      Green AI: Sustainable Technology Solutions
                    </li>
                    <li className="flex items-center">
                      <Rocket className="w-4 h-4 mr-2 text-orange-300" />
                      Autonomous Business Operations Guide
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Why This Matters:</h3>
                  <ul className="space-y-2 text-white opacity-90">
                    <li className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-300" />
                      Stay ahead of industry trends
                    </li>
                    <li className="flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-purple-300" />
                      Implement cutting-edge solutions
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-300" />
                      Access expert insights and case studies
                    </li>
                    <li className="flex items-center">
                      <Rocket className="w-4 h-4 mr-2 text-orange-300" />
                      Transform your business operations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2026;