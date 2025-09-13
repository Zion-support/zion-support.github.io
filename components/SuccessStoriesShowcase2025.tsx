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
  Award,
  Zap,
  Brain,
  Globe
} from 'lucide-react';

const SuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Needed to scale AI operations across 50+ countries while maintaining performance and security standards.",
      solution: "Implemented our Quantum AI Fusion platform with edge computing capabilities and autonomous optimization.",
      results: {
        revenue: "+450%",
        efficiency: "+380%",
        costReduction: "-65%",
        timeToMarket: "-80%"
      },
      testimonial: "Zion Tech Group transformed our entire AI infrastructure. The results exceeded our wildest expectations.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Global",
      logo: "TC",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Required real-time fraud detection and risk assessment across millions of transactions daily.",
      solution: "Deployed our Advanced AI Security Suite with quantum-powered threat detection and predictive analytics.",
      results: {
        revenue: "+320%",
        efficiency: "+290%",
        costReduction: "-55%",
        timeToMarket: "-75%"
      },
      testimonial: "The AI security solution prevented $50M in potential fraud in just the first quarter. Incredible ROI!",
      author: "Michael Rodriguez",
      position: "Head of Security, FinanceFlow Inc",
      logo: "FF",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Needed to process and analyze medical data from 100+ hospitals while ensuring patient privacy.",
      solution: "Implemented our Neural Network Builder with healthcare-specific AI models and privacy-preserving techniques.",
      results: {
        revenue: "+280%",
        efficiency: "+350%",
        costReduction: "-70%",
        timeToMarket: "-85%"
      },
      testimonial: "Our diagnostic accuracy improved by 95% while reducing processing time from hours to minutes.",
      author: "Dr. Emily Watson",
      position: "Chief Medical Officer, HealthTech Solutions",
      logo: "HT",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      company: "RetailMax Worldwide",
      industry: "Retail & E-commerce",
      challenge: "Required personalized customer experiences and inventory optimization across 1000+ stores globally.",
      solution: "Deployed our AI-Powered Analytics platform with real-time personalization and predictive inventory management.",
      results: {
        revenue: "+520%",
        efficiency: "+410%",
        costReduction: "-60%",
        timeToMarket: "-70%"
      },
      testimonial: "Customer satisfaction increased by 300% and inventory costs dropped by 60%. Game-changing technology!",
      author: "James Thompson",
      position: "VP of Operations, RetailMax Worldwide",
      logo: "RM",
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { label: "Success Stories", value: "500+", icon: Award },
    { label: "Average ROI", value: "350%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "99.2%", icon: Star },
    { label: "Time to Value", value: "30 days", icon: Clock }
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
      className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Success Stories 2025</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries are achieving 
            extraordinary results with our AI-powered solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Carousel */}
        <motion.div
          className="relative mb-16"
          variants={itemVariants}
        >
          <div className="relative h-auto rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory}
                className={`bg-gradient-to-br ${successStories[activeStory].color} p-8 md:p-12`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-white">
                      <motion.div
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                          {successStories[activeStory].logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{successStories[activeStory].company}</h3>
                          <p className="text-white/80">{successStories[activeStory].industry}</p>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-lg font-semibold mb-3 text-white/90">Challenge:</h4>
                        <p className="text-white/80 mb-6">{successStories[activeStory].challenge}</p>
                        
                        <h4 className="text-lg font-semibold mb-3 text-white/90">Solution:</h4>
                        <p className="text-white/80">{successStories[activeStory].solution}</p>
                      </motion.div>
                      
                      <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-white/90 italic text-lg mb-4">
                          "{successStories[activeStory].testimonial}"
                        </p>
                        <div className="text-white/70">
                          <div className="font-semibold">{successStories[activeStory].author}</div>
                          <div className="text-sm">{successStories[activeStory].position}</div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Results */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <h4 className="text-2xl font-bold text-white text-center">Results Achieved</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                          <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                          <div className="text-2xl font-bold text-white mb-1">
                            {successStories[activeStory].results.revenue}
                          </div>
                          <div className="text-white/70 text-sm">Revenue Growth</div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                          <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                          <div className="text-2xl font-bold text-white mb-1">
                            {successStories[activeStory].results.efficiency}
                          </div>
                          <div className="text-white/70 text-sm">Efficiency Gain</div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                          <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                          <div className="text-2xl font-bold text-white mb-1">
                            {successStories[activeStory].results.costReduction}
                          </div>
                          <div className="text-white/70 text-sm">Cost Reduction</div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                          <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                          <div className="text-2xl font-bold text-white mb-1">
                            {successStories[activeStory].results.timeToMarket}
                          </div>
                          <div className="text-white/70 text-sm">Time to Market</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStory === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  onClick={() => setActiveStory(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 border border-green-500/30">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their operations 
              and achieved extraordinary results with our AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Success Journey
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
              
              <motion.button
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                View All Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessStoriesShowcase2025;