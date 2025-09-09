
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Users, Brain, Sparkles, Star, TrendingUp, Shield, Cloud } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
=======
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
>>>>>>> 4a223768956b3f52f6371bf4cbaac5ac83e6cb39

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Star, description: "Successful implementations" },
    { value: "50+", label: "Expert Team", icon: Users, description: "Certified professionals" },
    { value: "99.9%", label: "Uptime", icon: Zap, description: "Reliable infrastructure" },
    { value: "24/7", label: "Support", icon: Shield, description: "Always available" }
  ];

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence for business transformation" },
    { icon: Cloud, title: "Cloud Excellence", description: "Scalable cloud infrastructure and migration services" },
    { icon: Lock, title: "Enterprise Security", description: "Advanced cybersecurity and compliance solutions" },
    { icon: TrendingUp, title: "Digital Growth", description: "Data-driven strategies for business expansion" }
  ];

  return (
<<<<<<< HEAD
    <section 
      ref={containerRef} 
      className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center"
      aria-label="Hero section - Zion Tech Group introduction"
    >
      {/* Enhanced background with parallax effect */}
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
>>>>>>> 4a223768956b3f52f6371bf4cbaac5ac83e6cb39
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
<<<<<<< HEAD
        aria-hidden="true"
      />
      
      {/* Animated floating particles with better positioning and variety */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-zion-blue-light opacity-70"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-2/3 right-1/4 w-5 h-5 rounded-full bg-zion-purple opacity-40"
          variants={pulseVariants}
          animate="animate"
        />
      </div>

      {/* Main content container */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Enhanced heading with better typography */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
          </p>
=======
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60" 
          variants={floatingVariants} 
          animate="animate" 
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "1s" }} 
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "2s" }} 
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "3s" }} 
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 mr-2" />
            🚀 Leading AI & Technology Solutions Since 2020
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering the future with <span className="text-cyan-400 font-semibold">AI-powered solutions</span>, 
            <span className="text-blue-400 font-semibold"> quantum technology</span>, and 
            <span className="text-purple-400 font-semibold"> innovative IT services</span>. 
            Transform your business with cutting-edge technology that drives real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              to="/services" 
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                Explore Our Services
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-10 py-5 border-2 border-cyan-500 text-cyan-400 rounded-2xl font-bold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="flex items-center justify-center">
                Get Free Consultation
                <Play className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-gray-400 text-sm mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 text-xs">Microsoft Partner</div>
              <div className="text-gray-400 text-xs">AWS Advanced Consulting Partner</div>
              <div className="text-gray-400 text-xs">Google Cloud Partner</div>
              <div className="text-gray-400 text-xs">ISO 27001 Certified</div>
            </div>
          </motion.div>

          {/* Feature Badges */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
          >
            {featureBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <div className={`w-2 h-2 bg-${badge.color} rounded-full group-hover:animate-pulse`} />
                <span className="group-hover:text-white transition-colors">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-20 left-0 right-0 z-10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
>>>>>>> 4a223768956b3f52f6371bf4cbaac5ac83e6cb39
        </motion.div>

        {/* Enhanced CTA buttons with better accessibility */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link 
            to="/services" 
            className="group relative px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-slate"
            aria-label="Explore our comprehensive technology services"
          >
            <span className="flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          
          <Link 
            to="/contact" 
            className="group relative px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-slate"
            aria-label="Get started with Zion Tech Group"
          >
            <span className="flex items-center gap-2">
              Get Started
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>

        {/* Enhanced feature highlights */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { icon: Brain, label: "AI & Machine Learning", description: "Cutting-edge AI solutions" },
            { icon: Shield, label: "Cybersecurity", description: "Advanced security protocols" },
            { icon: Cloud, label: "Cloud & DevOps", description: "Scalable cloud infrastructure" },
            { icon: Zap, label: "Innovation", description: "Future-ready technology" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-full mb-4 group-hover:bg-zion-cyan/30 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.label}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
<<<<<<< HEAD
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
=======
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-cyan-400 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <div className="text-xs text-gray-500 mt-2">Scroll to explore</div>
>>>>>>> 4a223768956b3f52f6371bf4cbaac5ac83e6cb39
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
