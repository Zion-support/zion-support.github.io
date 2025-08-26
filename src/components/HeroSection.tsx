<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
=======
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield, Rocket } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
>>>>>>> cursor/website-audit-and-enhancement-1eed

  useEffect(() => {
    setIsVisible(true);
  }, []);

<<<<<<< HEAD
  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Star },
    { value: "50+", label: "Expert Team", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Zap },
    { value: "24/7", label: "Support", icon: Shield }
  ];
=======
  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
>>>>>>> cursor/website-audit-and-enhancement-1eed

  const trustMetrics = [
    { icon: Users, label: "10K+ Users", value: "Trusted by thousands" },
    { icon: TrendingUp, label: "95% Success", value: "Project completion rate" },
    { icon: Shield, label: "Enterprise", value: "Fortune 500 clients" },
    { icon: Rocket, label: "24/7 Support", value: "Always available" }
  ];

  const featureBadges = [
    { icon: Zap, label: "AI-Powered Matching", color: "zion-cyan" },
    { icon: Star, label: "Verified Professionals", color: "zion-purple" },
    { icon: Shield, label: "Secure Payments", color: "zion-cyan" },
    { icon: Rocket, label: "Enterprise Security", color: "zion-purple" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <motion.div 
<<<<<<< HEAD
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-700/20"></div>
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
=======
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" 
        style={{ y, opacity }}
      />
      
      {/* Animated floating particles with better positioning and variety */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60" 
          variants={floatingVariants} 
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light" 
          variants={pulseVariants} 
          animate="animate" 
          style={{ animationDelay: '0.5s' }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: '1.5s' }}
        />
        <motion.div 
          className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* Enhanced decorative geometric shapes with animations */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30" 
        animate={{ rotate: -360 }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* New floating elements */}
      <motion.div 
        className="absolute top-1/3 left-10 w-16 h-16 border border-zion-cyan/30 rounded-full opacity-20" 
        variants={pulseVariants} 
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-1/3 right-10 w-20 h-20 border border-zion-purple/30 rounded-full opacity-20" 
        variants={pulseVariants} 
        animate="animate" 
        style={{ animationDelay: '1s' }}
      />
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        {/* Enhanced title with better typography and animations */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan animate-gradient">Tech & AI</span>
          </h1>
        </motion.div>

        {/* Enhanced subtitle with better spacing and animations */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light">
          Discover the world's most advanced AI marketplace. Connect with top tech talent, cutting-edge services, and revolutionary equipment in one seamless platform.
        </motion.p>

        {/* Enhanced feature highlights with icons and animations */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light">
          <motion.div 
            className="flex items-center gap-3 group" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-2 bg-zion-cyan/20 rounded-full group-hover:bg-zion-cyan/30 transition-colors">
              <Sparkles className="w-6 h-6 text-zion-cyan"/>
            </div>
            <span className="text-lg font-medium">AI-Powered</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 group" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-2 bg-zion-purple/20 rounded-full group-hover:bg-zion-purple/30 transition-colors">
              <Shield className="w-6 h-6 text-zion-purple"/>
            </div>
            <span className="text-lg font-medium">Secure</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 group" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-2 bg-zion-blue/20 rounded-full group-hover:bg-zion-blue/30 transition-colors">
              <Zap className="w-6 h-6 text-zion-blue"/>
            </div>
            <span className="text-lg font-medium">Fast</span>
>>>>>>> cursor/website-audit-and-enhancement-1eed
          </motion.div>
        </motion.div>

<<<<<<< HEAD
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-cyan-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
        <div className="text-xs text-gray-500 mt-2">Scroll to explore</div>
=======
        {/* Enhanced CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Button 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group" 
            size="lg" 
            asChild
          >
            <Link to="/contact" role="button" aria-label="Get Started Today" className="flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
            size="lg"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                <metric.icon className="w-6 h-6"/>
              </div>
              <div className="text-xl font-bold text-white mb-1">{metric.label}</div>
              <div className="text-zion-slate-light text-sm">{metric.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Badges */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {featureBadges.map((badge, index) => (
              <motion.div 
                key={index} 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${badge.color}/20 border border-${badge.color}/30 text-${badge.color} text-sm font-medium`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <badge.icon className="w-4 h-4"/>
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
>>>>>>> cursor/website-audit-and-enhancement-1eed
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};
