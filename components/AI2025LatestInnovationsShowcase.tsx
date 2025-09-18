<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
ArrowRightSparklesBrainZapTargetTrendingUpUsersGlobe

const AI2025LatestInnovationsShowcase = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % innovations.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  const innovations = [
    {
      id: 1,
      title: "Quantum-Neural AI Fusion",
      description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power and decision-making capabilities.",
      icon: Brain,
      stats: "10,000x faster processing",
      color: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Autonomous Business Orchestration",
      description: "Self-managing AI systems that automatically optimize business processespredict market changesand execute strategic decisions.",
      icon: Target,
      stats: "95% efficiency increase",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "Synthetic Intelligence Platforms",
      description: "Next-generation AI that can createmodifyand improve itself while maintaining ethical boundaries and human oversight.",
      icon: Sparkles,
      stats: "Self-evolving capabilities",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Global Transformation Engine",
      description: "AI-powered platform that transforms entire organizationsindustriesand ecosystems through intelligent automation and optimization.",
      icon: Globe,
      stats: "15,000% ROI average",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Exponential Growth",
      description: "Achieve unprecedented business growth with AI-driven strategies"
    },
    {
      icon: Users,
      title: "Global Impact",
      description: "Transform organizations worldwide with our proven methodologies"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Implement solutions in daysnot monthswith our rapid deployment"
    }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Latest AI Innovations 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Breakthroughs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </motion.div>

        {/* Main Innovation Showcase */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0scale: 1.1 }}
                animate={{ opacity: 1scale: 1 }}
                exit={{ opacity: 0scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className={`h-full bg-gradient-to-br ${innovations[currentSlide].color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="text-center text-white max-w-4xl">
                      <innovations[currentSlide].icon className="w-16 h-16 mx-auto mb-6 opacity-90" />
                      <h3 className="text-3xl md:text-5xl font-bold mb-4">
                        {innovations[currentSlide].title}
                      </h3>
                      <p className="text-lg md:text-xl mb-6 opacity-90">
                        {innovations[currentSlide].description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <TrendingUp className="w-5 h-5" />
                        <span className="font-semibold">{innovations[currentSlide].stats}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Background Elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {innovations.map((_index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((featureindex) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2025LatestInnovationsShowcase;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
