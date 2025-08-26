
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
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
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

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center"
      aria-label="Hero section - Zion Tech Group introduction"
    >
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"
        style={{ y, opacity }}
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

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
      </motion.div>
    </section>
  );
}
