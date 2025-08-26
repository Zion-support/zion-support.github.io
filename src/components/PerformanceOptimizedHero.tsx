import React, { Suspense, lazy } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Users, Star, TrendingUp, Shield, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Lazy load heavy components
const AnimatedBackground = lazy(() => import("@/components/ui/AnimatedBackground").then(module => ({ default: module.AnimatedBackground })));

interface TrustMetric {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

interface FeatureBadge {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  color: string;
}

export function PerformanceOptimizedHero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const trustMetrics: TrustMetric[] = [
    { icon: Users, label: "500+", value: "Clients Served", color: "text-zion-cyan" },
    { icon: TrendingUp, label: "99.9%", value: "Uptime", color: "text-zion-purple" },
    { icon: Shield, label: "Enterprise", value: "Security", color: "text-zion-cyan-light" },
    { icon: Star, label: "4.9/5", value: "Rating", color: "text-zion-purple-light" }
  ];

  const featureBadges: FeatureBadge[] = [
    { 
      icon: Sparkles, 
      label: "AI-Powered", 
      description: "Advanced machine learning algorithms",
      color: "from-zion-cyan to-zion-blue" 
    },
    { 
      icon: Zap, 
      label: "Lightning Fast", 
      description: "Optimized for performance",
      color: "from-zion-purple to-zion-purple-dark" 
    },
    { 
      icon: Shield, 
      label: "Secure", 
      description: "Enterprise-grade security",
      color: "from-zion-cyan-light to-zion-blue" 
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center"
      aria-label="Hero Section"
    >
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"
        style={{ y, opacity }}
        aria-hidden="true"
      />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} rounded-full ${
              i % 3 === 0 ? 'bg-zion-purple-light' : 
              i % 3 === 1 ? 'bg-zion-cyan' : 'bg-zion-cyan-light'
            } opacity-${40 + (i * 10)}`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${20 + (i * 20)}%`,
              animationDelay: `${i * 0.5}s`
            }}
            variants={floatingVariants}
            animate="animate"
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {featureBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <badge.icon className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm font-medium text-white">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              {t("hero.title", "Transform Your Business with AI")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("hero.subtitle", "Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services. Accelerate your growth with Zion Tech Group.")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-zion-cyan/30"
            >
              <Link to="/contact" aria-label="Get started with Zion Tech Group">
                <Zap className="mr-2 h-5 w-5" />
                {t("hero.get_started", "Get Started")}
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-zion-cyan/30"
            >
              <Link to="/services" aria-label="Explore our services">
                <Users className="mr-2 h-5 w-5" />
                {t("hero.explore_services", "Explore Services")}
              </Link>
            </Button>
          </motion.div>

          {/* Trust metrics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
            variants={itemVariants}
          >
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className={`flex justify-center mb-2 ${metric.color}`}>
                  <metric.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-zion-slate-light">{metric.value}</div>
              </div>
            ))}
          </motion.div>

          {/* Additional CTA */}
          <motion.div 
            className="mt-8"
            variants={itemVariants}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group"
            >
              <span className="text-lg">View Success Stories</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Suspense boundary for lazy components */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
    </section>
  );
}