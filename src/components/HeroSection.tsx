import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { 
  ArrowRightIcon,
  PlayIcon,
  StarIcon,
  ShieldCheckIcon,
  CloudIcon,
  UsersIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8"
          >
            <StarIcon className="w-4 h-4" />
            Trusted by 500+ Companies Worldwide
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Transform
            </span>
            <br />
            <span className="text-white">Your Business</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              with AI
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            Empowering enterprises with cutting-edge artificial intelligence solutions, 
            quantum computing, and innovative technology services that drive real results.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/services"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 flex items-center gap-3"
            >
              Explore Services
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              Get Started
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Video Demo Button */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <button className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20 transition-all duration-300">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                  Watch Demo
                </div>
                <div className="text-xs text-slate-300">
                  2 min overview
                </div>
              </div>
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">500+</div>
              <div className="text-slate-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">50+</div>
              <div className="text-slate-300 text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">99.9%</div>
              <div className="text-slate-300 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">24/7</div>
              <div className="text-slate-300 text-sm">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Enhanced Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4">
          <p className="text-slate-300 text-sm mb-3 text-center">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            <div className="flex items-center space-x-2 text-blue-400">
              <ShieldCheckIcon className="w-5 h-5" />
              <span className="text-sm font-medium">SOC2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <CloudIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Cloud Native</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <UsersIcon className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <CodeBracketIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}