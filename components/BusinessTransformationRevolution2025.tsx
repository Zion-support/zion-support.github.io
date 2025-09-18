<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target
  TrendingUp
  Users
  Briefcase
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Clock
} from 'lucide-react';

const BusinessTransformationRevolution2025 = () => {
  const [activeTabsetActiveTab] = useState(0);
  const [countersetCounters] = useState({
    businesses: 0,
    revenue: 0,
    efficiency: 0,
    satisfaction: 0
  });

  const tabs = [
    {
      id: 0,
      title: "Digital Revolution",
      icon: <Sparkles className="w-6 h-6" />,
      content: {
        title: "Complete Digital Transformation",
        description: "Transform your entire business ecosystem with cutting-edge AI and automation technologies.",
        benefits: [
          "500% increase in operational efficiency",
          "Real-time data-driven decision making",
          "Automated workflow optimization",
          "Predictive analytics and forecasting"
        ],
        image: "🚀"
      }
    },
    {
      id: 1,
      title: "AI Integration",
      icon: <Target className="w-6 h-6" />,
      content: {
        title: "Intelligent AI Integration",
        description: "Seamlessly integrate AI across all business operations for unprecedented growth and efficiency.",
        benefits: [
          "Custom AI models for your industry",
          "24/7 automated customer support",
          "Intelligent resource allocation",
          "Advanced pattern recognition"
        ],
        image: "🧠"
      }
    },
    {
      id: 2,
      title: "Growth Strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      content: {
        title: "Exponential Growth Strategy",
        description: "Unlock explosive business growth with our proven transformation methodologies.",
        benefits: [
          "Market expansion strategies",
          "Revenue optimization systems",
          "Competitive advantage frameworks",
          "Scalable business models"
        ],
        image: "📈"
      }
    }
  ];

  useEffect(() => {
    // Animate counters
    const animateCounters = () => {
      const targets = {
        businesses: 50000,
        revenue: 2500,
        efficiency: 400,
        satisfaction: 98
      };

      Object.keys(targets).forEach(key => {
        let start = 0;
        const target = targets[key as keyof typeof targets];
        const increment = target / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev[key]: Math.floor(start) }));
        }20);
      });
    };

    const timer = setTimeout(animateCounters500);
    return () => clearTimeout(timer);
  }[]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <Briefcase className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Business Revolution 2025
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Revolutionary business transformation solutions that deliver unprecedented results. 
            Join thousands of companies already experiencing exponential growth.
          </motion.p>

          <motion.div variants={itemVariants} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-black font-bold text-lg shadow-2xl">
            <Clock className="w-5 h-5 mr-2" />
            Limited Time: 50% Off Implementation
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: <Users className="w-8 h-8" />value: counters.businesses.toLocaleString()label: "Businesses Transformed"suffix: "+" },
            { icon: <TrendingUp className="w-8 h-8" />value: counters.revenuelabel: "Average Revenue Increase"suffix: "%" },
            { icon: <BarChart3 className="w-8 h-8" />value: counters.efficiencylabel: "Efficiency Improvement"suffix: "%" },
            { icon: <Target className="w-8 h-8" />value: counters.satisfactionlabel: "Client Satisfaction"suffix: "%" }
          ].map((statindex) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs Section */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-8"
          >
            <div className="flex bg-white/10 backdrop-blur-lg rounded-full p-2">
              {tabs.map((tabindex) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="text-8xl mb-6">{tabs[activeTab].content.image}</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {tabs[activeTab].content.description}
              </p>
              
              <div className="space-y-4">
                {tabs[activeTab].content.benefits.map((benefitindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-white"
                  >
                    <CheckCircle2 className="w-6 h-6 mr-4 text-green-400" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">Ready to Transform?</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    Free consultation & strategy session
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    Custom transformation roadmap
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    90-day money-back guarantee
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-lg rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg text-center">
                  <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Innovation</div>
                  <div className="text-gray-400 text-sm">Cutting-edge solutions</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg text-center">
                  <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Results</div>
                  <div className="text-gray-400 text-sm">Guaranteed outcomes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the Revolution Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              'Don', 't get left behind. Transform your business with our proven methodologies 
              and join thousands of successful companies already experiencing exponential growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300"
            >
              Get Started Now - 50% Off
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessTransformationRevolution2025;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
