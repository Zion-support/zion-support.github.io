import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield, Rocket, Brain, Cloud, Lock, Code } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Transform your business with cutting-edge artificial intelligence" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable and secure cloud solutions for modern enterprises" },
    { icon: Lock, title: "Cybersecurity", description: "Protect your digital assets with advanced security protocols" },
    { icon: Code, title: "Custom Development", description: "Tailored software solutions for your unique needs" }
  ];

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

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
    <section ref={containerRef} className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" 
        style={{ y, opacity }}
      />
      
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
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
          className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-zion-cyan opacity-80" 
          variants={floatingVariants} 
          animate="animate"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading Technology Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Zion Tech
              </span>
              <br />
              <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Group
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
          </motion.div>

          {/* Rotating feature showcase */}
          <motion.div variants={itemVariants} className="py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <features[currentFeature].icon className="w-6 h-6 text-zion-cyan mr-3" />
                <span className="text-white font-medium">{features[currentFeature].title}</span>
                <span className="text-zion-slate-light ml-3">•</span>
                <span className="text-zion-slate-light ml-3">{features[currentFeature].description}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="group px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl font-semibold text-white hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
            >
              <span className="flex items-center justify-center">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="group px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300 border border-zion-cyan/30">
                    <metric.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.label}</div>
                  <div className="text-sm text-zion-slate-light">{metric.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
