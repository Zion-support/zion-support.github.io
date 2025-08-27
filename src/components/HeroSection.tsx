import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Users, TrendingUp, Shield, Zap, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
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
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
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
      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse" />
              <span className="text-zion-cyan text-lg font-medium">
                AI-Powered Technology Solutions
              </span>
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse" />
            </div>
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
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group" 
              size="lg" 
              asChild
            >
              <Link to="/contact" role="button" aria-label="Get Started Today" className="flex items-center gap-2">
                Get Started Today
                <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
              size="lg"
              asChild
            >
              <Link to="/services" role="button" aria-label="Explore Services">
                Explore Services
              </Link>
            </Button>
          </motion.div>
          {/* Search Bar */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for services, talent, or solutions..."
                className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-full"
                size="sm"
              >
                Search
              </Button>
            </div>
          </motion.div>
          {/* Trust Metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <metric.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-zion-slate-light">{metric.value}</div>
              </div>
            ))}
          </motion.div>
          {/* Feature Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {featureBadges.map((badge, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white`}
              >
                <badge.icon className={`h-4 w-4 text-${badge.color}`} />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
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
      </motion.div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
