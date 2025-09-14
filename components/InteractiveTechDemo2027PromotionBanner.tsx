'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Brain, 
  Cpu, 
  Settings, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Star,
  Code,
  Zap,
  Sparkles,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const InteractiveTechDemo2027PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      title: "AI Assistant Demo",
      description: "Experience advanced AI in action",
      icon: Brain,
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Quantum Computing",
      description: "See quantum algorithms solving problems",
      icon: Cpu,
      color: "from-cyan-600 to-teal-600"
    },
    {
      title: "Process Automation",
      description: "Watch intelligent automation work",
      icon: Settings,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Security Systems",
      description: "Advanced threat protection",
      icon: Shield,
      color: "from-red-600 to-orange-600"
    }
  ];

  const features = [
    "Interactive Demos",
    "Real-time Processing",
    "Live Visualizations",
    "Step-by-step Guidance",
    "Multiple Technologies",
    "Hands-on Experience"
  ];

  const benefits = [
    {
      icon: Play,
      title: "Try Before You Buy",
      description: "Experience our technologies firsthand"
    },
    {
      icon: BarChart3,
      title: "See Real Results",
      description: "Watch actual performance metrics"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Learn from our technology experts"
    },
    {
      icon: Target,
      title: "Customized Demos",
      description: "Tailored to your specific needs"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/30"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium">Interactive Demo 2027</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            >
              Interactive Tech Demo 2027
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Experience our cutting-edge technologies in action. Try interactive demos and see 
              how our solutions can transform your business processes with hands-on experience.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
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
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:transform hover:scale-105">
                <Play className="w-5 h-5" />
                Try Demo Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <Code className="w-5 h-5" />
                View Documentation
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Demo Showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Live Demo Preview</h3>
                
                {/* Demo Selection */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {demos.map((demo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDemo(index)}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        currentDemo === index
                          ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/50'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${demo.color}`}>
                          <demo.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium text-sm">{demo.title}</div>
                          <div className="text-gray-400 text-xs">{demo.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Demo Visualization */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${demos[currentDemo].color} flex items-center justify-center`}
                    >
                      <demos[currentDemo].icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                      }}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 15}%`
                      }}
                    />
                  ))}
                </div>

                {/* Demo Controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    <Play className="w-4 h-4" />
                    Play Demo
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300">
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <benefit.icon className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <Star className="w-6 h-6 text-purple-400" />
                <span className="text-white font-medium">Why Choose Our Demos?</span>
              </div>
              <p className="text-gray-300 text-sm">
                Our interactive demos provide hands-on experience with cutting-edge technologies, 
                allowing you to see real results and make informed decisions about your technology investments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2027PromotionBanner;