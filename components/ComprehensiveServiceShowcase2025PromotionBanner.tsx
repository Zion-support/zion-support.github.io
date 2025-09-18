<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  Globe
  Database
  Cpu
  Network
  BarChart3,
  Users,
  Target,
  ArrowRight
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export default function ComprehensiveServiceShowcase2025PromotionBanner() {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentServicesetCurrentService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % 4);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const services = [
    {
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation planning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      price: "$5,000",
      rating: 4.9,
      reviews: 127
    },
    {
      title: "Machine Learning Implementation",
      description: "End-to-end ML model developmentrainingand deployment",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      price: "$8,000",
      rating: 4.8,
      reviews: 89
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions for business processes",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      price: "$2,500",
      rating: 4.7,
      reviews: 156
    },
    {
      title: "Advanced Data Analytics",
      description: "Comprehensive data analysis and visualization services",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      price: "$4,000",
      rating: 4.6,
      reviews: 98
    }
  ];

  const categories = [
    { name: "Consulting"icon: Braincount: 2 },
    { name: "Development"icon: Codecount: 3 },
    { name: "Automation"icon: Zapcount: 2 },
    { name: "Analytics"icon: BarChart3count: 1 }
  ];

  const stats = [
    { label: "Services Available"value: "8"icon: Target },
    { label: "Average Rating"value: "4.7"icon: Star },
    { label: "Total Reviews"value: "884"icon: Users },
    { label: "Success Rate"value: "100%"icon: Award }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-32 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                  Complete AI Solutions
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Comprehensive AI
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Service Portfolio
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                From strategy consulting to implementationwe offer a complete range of AI services 
                to transform your business and drive innovation across all industries.
              </p>
            </motion.div>

            {/* Service Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((categoryindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0scale: 0.9 }}
                    animate={{ opacity: 1scale: 1 }}
                    transition={{ duration: 0.5delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{category.name}</div>
                        <div className="text-gray-400 text-sm">{category.count} services</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our Services</h3>
              <div className="space-y-2">
                {[
                  "Expert AI professionals with 10+ years experience",
                  "Proven track record with 100% success rate",
                  "Custom solutions tailored to your business needs",
                  "24/7 support and ongoing maintenance"
                ].map((benefitindex) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Explore All Services
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <span className="flex items-center justify-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Get Pricing
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Content - Service Showcase */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.6delay: 0.4 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* Featured Service */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${services[currentService].color}`}>
                      <services[currentService].icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm ml-1">{services[currentService].rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">({services[currentService].reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {services[currentService].title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {services[currentService].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {services[currentService].price}
                      <span className="text-gray-400 text-sm font-normal">/month</span>
                    </div>
                    <div className="flex items-center text-purple-300">
                      <span className="text-sm font-medium mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Grid */}
              <div className="grid grid-cols-2 gap-4">
                {services.slice(04).map((serviceindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0scale: 0.9 }}
                    animate={{ opacity: 1scale: 1 }}
                    transition={{ duration: 0.5delay: 0.6 + index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                      currentService === index ? 'ring-2 ring-purple-500' : ''
                    }`}
                    onClick={() => setCurrentService(index)}
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${service.color} mb-3`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{service.title}</div>
                    <div className="text-gray-400 text-xs mb-2">{service.price}/month</div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs ml-1">{service.rating}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((statindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5delay: 0.8 + index * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 text-center"
                  >
                    <stat.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-white text-xl font-bold">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-slate-900">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </motion.div>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
