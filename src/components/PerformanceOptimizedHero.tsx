import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

// Memoized stats data
const STATS_DATA = [
  { value: "500+", label: "Projects Delivered", icon: Star, description: "Successful implementations" },
  { value: "50+", label: "Expert Team", description: "Certified professionals", icon: Users },
  { value: "99.9%", label: "Uptime", description: "Reliable infrastructure", icon: Zap },
  { value: "24/7", label: "Support", description: "Always available", icon: Shield }
] as const;

// Optimized floating element component
const FloatingElement: React.FC<{
  className: string;
  delay: number;
  duration: number;
  children: React.ReactNode;
}> = React.memo(({ className, delay, duration, children }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
));

// Optimized stat item component
const StatItem: React.FC<{
  stat: typeof STATS_DATA[number];
  index: number;
}> = React.memo(({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="text-center group"
  >
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
      <stat.icon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
    <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
    <div className="text-sm text-gray-400">{stat.description}</div>
  </motion.div>
));

export const PerformanceOptimizedHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Optimized transforms with useMemo
  const transforms = useMemo(() => ({
    y: useTransform(scrollY, [0, 300], [0, 100]),
    opacity: useTransform(scrollY, [0, 300], [1, 0])
  }), [scrollY]);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    if (scrolled > 100 && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Memoized CTA buttons
  const ctaButtons = useMemo(() => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center"
      >
        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Watch Demo
      </motion.button>
    </div>
  ), []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-label="Hero section"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={transforms}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-700/20" />
      </motion.div>

      {/* Floating Elements */}
      <FloatingElement className="absolute top-20 left-10" delay={0} duration={4}>
        <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60" />
      </FloatingElement>
      
      <FloatingElement className="absolute top-40 right-20" delay={1} duration={5}>
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60" />
      </FloatingElement>
      
      <FloatingElement className="absolute bottom-40 left-20" delay={2} duration={6}>
        <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60" />
      </FloatingElement>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
          >
            <Zap className="w-4 h-4 mr-2" />
            Leading AI & Technology Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
            Transform your business with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          {ctaButtons}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS_DATA.map((stat, index) => (
                <StatItem key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};