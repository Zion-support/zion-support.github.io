import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Users, TrendingUp, Shield, Zap, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
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
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
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
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"/>
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-transparent to-zion-cyan/20 animate-pulse"/>
      
      {/* Floating Elements */}
      <motion.div className="absolute inset-0" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60" variants={floatingVariants} animate="animate"/>
        <motion.div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50" variants={floatingVariants} animate="animate" style={{ animationDelay: "1s" }}/>
        <motion.div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60" variants={floatingVariants} animate="animate" style={{ animationDelay: "2s" }}/>
        <motion.div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30" variants={floatingVariants} animate="animate" style={{ animationDelay: "3s" }}/>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
              <span className="text-zion-cyan text-lg font-medium">
                AI-Powered Technology Solutions
              </span>
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-4">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan animate-gradient">
                AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mt-4">
              Leading the future of technology innovation
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions, expert talent, and innovative services that drive digital transformation. 
            From startups to enterprises, we deliver results that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group" size="lg" asChild>
              <Link to="/contact" role="button" aria-label="Get Started Today" className="flex items-center gap-2">
                Get Started Today
                <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 text-lg py-6 px-8 backdrop-blur-sm" size="lg" asChild>
              <Link to="/services" role="button" aria-label="Explore Services" className="flex items-center gap-2">
                Explore Services
                <Search className="h-5 w-5"/>
              </Link>
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {trustMetrics.map((metric, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple mb-3">
                  <metric.icon className="h-6 w-6 text-white"/>
                </div>
                <div className="text-white font-semibold text-lg mb-1">{metric.label}</div>
                <div className="text-zion-slate-light text-sm">{metric.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {featureBadges.map((badge, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <badge.icon className={`h-4 w-4 text-${badge.color}`}/>
                <span className="text-white text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
