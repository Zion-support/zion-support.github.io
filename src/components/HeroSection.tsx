
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Users, Brain, Sparkles, Star, TrendingUp, Shield, Cloud } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
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
    { value: "500+", label: "Projects Delivered", icon: Star },
    { value: "50+", label: "Expert Team", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Zap },
    { value: "24/7", label: "Support", icon: Shield }
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
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
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
            className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
          >
            <Zap className="w-4 h-4 mr-2" />
            Leading AI & Technology Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
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
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
            Transform your business with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="flex items-center justify-center">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="flex items-center justify-center">
                Get Started
                <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-3 group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
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
          className="text-cyan-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <div className="text-xs text-gray-500 mt-2">Scroll to explore</div>
>>>>>>> 4a223768956b3f52f6371bf4cbaac5ac83e6cb39
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};
