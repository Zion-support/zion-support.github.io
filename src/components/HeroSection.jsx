import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Shield, Users, Clock, Target, TrendingUp, Award } from 'lucide-react';

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

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
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

  const particleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <motion.div 
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
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light" 
          variants={particleVariants} 
          animate="animate" 
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "1.5s" }}
        />
        <motion.div 
          className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "2.5s" }}
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
        style={{ animationDelay: "1s" }}
      />
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        {/* Enhanced title with better typography and animations */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zion-cyan/20 backdrop-blur-sm rounded-full border border-zion-cyan/30 mb-6">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
            Leverage cutting-edge artificial intelligence, quantum computing, and enterprise technology 
            to accelerate growth, optimize operations, and stay ahead of the competition.
          </p>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Watch Demo
          </button>
        </motion.div>

        {/* Enhanced features grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <div className="text-center p-6 rounded-xl bg-zion-slate/20 backdrop-blur-sm border border-zion-slate/30 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-zion-slate-light text-sm">10x faster than traditional solutions</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zion-slate/20 backdrop-blur-sm border border-zion-slate/30 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-zion-purple to-zion-purple-dark mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-zion-slate-light text-sm">Bank-level security & compliance</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zion-slate/20 backdrop-blur-sm border border-zion-slate/30 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-zion-blue to-zion-blue-dark mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-zion-slate-light text-sm">500+ certified professionals</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zion-slate/20 backdrop-blur-sm border border-zion-slate/30 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-zion-cyan-light to-zion-cyan mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-zion-slate-light text-sm">99.9% client satisfaction rate</p>
          </div>
        </motion.div>

        {/* Enhanced trust indicators */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Clock className="w-4 h-4" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Target className="w-4 h-4" />
              <span className="text-sm">Global Reach</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Growing Fast</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Award className="w-4 h-4" />
              <span className="text-sm">Industry Leader</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
