
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, Star, Users, Zap, Shield, Brain, Rocket, Globe } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Optimized transforms with reduced motion support
  const y = useTransform(scrollY, [0, 300], [0, shouldReduceMotion ? 0 : 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, shouldReduceMotion ? 1 : 0]);

  // Memoized stats data
  const stats = useMemo(() => [
    { 
      value: "500+", 
      label: "Projects Delivered", 
      icon: Star, 
      description: "Successful implementations across industries",
      ariaLabel: "Over 500 projects successfully delivered"
    },
    { 
      value: "50+", 
      label: "Expert Team", 
      icon: Users, 
      description: "Certified professionals and specialists",
      ariaLabel: "Team of over 50 expert professionals"
    },
    { 
      value: "99.9%", 
      label: "Uptime", 
      icon: Zap, 
      description: "Reliable infrastructure and services",
      ariaLabel: "99.9 percent uptime guarantee"
    },
    { 
      value: "24/7", 
      label: "Support", 
      icon: Shield, 
      description: "Round-the-clock technical assistance",
      ariaLabel: "24/7 technical support available"
    }
  ], []);

  // Intersection Observer for performance optimization
  const heroRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Performance optimization: only animate when intersecting
  const shouldAnimate = isIntersecting && !shouldReduceMotion;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Animated Background Elements - Reduced motion support */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-light/20 to-zion-slate/20"></div>
      </motion.div>

      {/* Floating Elements - Conditional animation */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-60"></div>
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-20"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
          >
            <div className="w-3 h-3 bg-zion-blue rounded-full opacity-60"></div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 left-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            aria-hidden="true"
          >
            <div className="w-2 h-2 bg-zion-purple rounded-full opacity-60"></div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium border border-zion-cyan/20 hover:bg-zion-cyan/20 transition-colors duration-300"
            role="status"
            aria-label="Company status badge"
          >
            <Zap className="w-4 h-4 mr-2" aria-hidden="true" />
            Leading AI & Technology Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future with <strong>AI-powered solutions</strong>, <strong>quantum technology</strong>, and <strong>innovative IT services</strong>. 
            Transform your business with cutting-edge technology that drives growth and innovation.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="group px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
              aria-label="Explore our comprehensive technology services"
            >
              <span className="flex items-center justify-center">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
              aria-label="Get started with Zion Tech Group - contact our team"
            >
              <span className="flex items-center justify-center">
                Get Started
                <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            role="region"
            aria-label="Company statistics and achievements"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center group cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={stat.ariaLabel}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Could add click functionality here
                  }
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-zion-cyan/20 rounded-full mb-3 group-hover:bg-zion-cyan/30 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-zion-cyan" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-zion-cyan mb-1" aria-label={stat.value}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 hidden group-hover:block transition-opacity duration-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to explore more content"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-zion-cyan cursor-pointer"
        >
          <ChevronDown className="w-6 h-6" aria-hidden="true" />
        </motion.div>
        <div className="text-xs text-gray-500 mt-2">Scroll to explore</div>
      </motion.div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zion-slate-dark via-transparent to-transparent pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};
