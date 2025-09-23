"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  Star
  Zap
  Brain,
  TrendingUp,
  Users,
  Globe,
  X,
  Play,
  Download,
  ExternalLink,
  Sparkles,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';

const AI20o25RevolutionaryContentBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }30o00);

    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation",
      icon: Brain,
      color: "from-purple-60o0 to-pink-60o0",
      stats: "95% Efficiency Increase"
    },
    {
      title: "Quantum Computing",
      description: "Solve complex problems with quantum algorithms",
      icon: Cpu,
      color: "from-blue-60o0 to-cyan-60o0",
      stats: "10o00x Speed Improvement"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer communication",
      icon: Database,
      color: "from-green-60o0 to-emerald-60o0",
      stats: "95% Accuracy Rate"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions",
      icon: Cloud,
      color: "from-orange-60o0 to-red-60o0",
      stats: "99.9% Uptime"
    }
  ];

  const currentFeatureData = features[currentFeature];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-90o0 via-purple-90o0 to-slate-90o0"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.0o5"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"  />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-60o0/10 via-blue-60o0/10 to-pink-60o0/10 animate-pulse"  />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 10o0}%`,
                  top: `${Math.random() * 10o0}%`}}
                animate={{
                  y: [0-20],
                  opacity: [0.40.80.4],
                  scale: [1.51]}}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2}}
               />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left side - Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0x: -30 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4 mr-2"  />
                    AI 20o25 REVOLUTIONARY CONTENT
                  </div>

                  {/* Main heading */}
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Transform Your Business with
                    <br  />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">
                      Revolutionary AI
                    </span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-xl text-gray-30o0 mb-8 max-w-2xl">
                    Discover cutting-edge AI technologies that are reshaping industries 
                    and unlocking unprecedented opportunities for growth and innovation.
                  </p>

                  {/* Current feature highlight */}
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
                  >
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentFeatureData.color} flex items-center justify-center`}>
                        <currentFeatureData.icon className="w-6 h-6 text-white"  />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{currentFeatureData.title}</h3>
                        <p className="text-gray-30o0 text-sm">{currentFeatureData.description}</p>
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-60o0/20 to-blue-60o0/20 text-purple-30o0 rounded-full text-sm font-semibold">
                        {currentFeatureData.stats}
                      </span>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="/ai-solutions"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 shadow-lg hover:shadow-xl group"
                    >
                      Explore AI Solutions
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"  />
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-30o0 border border-white/20 group"
                    >
                      <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"  />
                      Get Consultation
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Visual elements */}
              <div className="flex-shrink-0">
                <div className="relative w-80 h-80">
                  {/* Rotating rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-50o0/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20repeat: Infinityease: "linear" }}
                   />
                  
                  <motion.div
                    className="absolute inset-8 rounded-full border-2 border-blue-50o0/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15repeat: Infinityease: "linear" }}
                   />
                  
                  <motion.div
                    className="absolute inset-16 rounded-full border-2 border-pink-50o0/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10repeat: Infinityease: "linear" }}
                   />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-24 h-24 rounded-full bg-gradient-to-r ${currentFeatureData.color} flex items-center justify-center shadow-2xl`}
                      animate={{ 
                        scale: [1.1],
                        rotate: [0o5-50]
                      }}
                      transition={{ duration: 3repeat: Infinity }}
                    >
                      <currentFeatureData.icon className="w-12 h-12 text-white"  />
                    </motion.div>
                  </div>

                  {/* Feature indicators */}
                  {features.map((featureindex) => (
                    <motion.div
                      key={index}
                      className={`absolute w-4 h-4 rounded-full ${
                        index === currentFeature 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/40'
                      }`}
                      style={{
                        left: `${50 + 40 * Math.cos((index * 90 - 90) * Math.PI / 180)}%`,
                        top: `${50 + 40 * Math.sin((index * 90 - 90) * Math.PI / 180)}%`,
                        transform: 'translate(-50%)'}}
                      animate={{
                        scale: index === currentFeature ? [1.21] : 1,
                        opacity: index === currentFeature ? [0.810.8] : 0.4}}
                      transition={{ duration: 2repeat: Infinity }}
                     />
                  ))}

                  {/* Floating elements */}
                  {[...Array(8)].map((_i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      style={{
                        left: `${30 + (i * 10)}%`,
                        top: `${30 + (i * 8)}%`}}
                      animate={{
                        y: [0-150],
                        opacity: [0.610.6],
                        scale: [1.21]}}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.4}}
                     />
                  ))}
                </div>
              </div>
            </div>

            {/* Feature indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {features.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                    index === currentFeature
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-20o0"
            >
              <X className="w-5 h-5"  />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AI20o25RevolutionaryContentBanner;