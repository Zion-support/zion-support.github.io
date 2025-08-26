import React from 'react';
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, Brain, Shield, Cloud } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
      
      {/* Enhanced animated floating particles with better performance */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30"
          variants={particleVariants}
          animate="animate"
          style={{animationDelay: '1s'}}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40"
          variants={particleVariants}
          animate="animate"
          style={{animationDelay: '2s'}}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20"
          variants={particleVariants}
          animate="animate"
          style={{animationDelay: '0.5s'}}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-1.5 h-1.5 rounded-full bg-zion-purple-light opacity-50"
          variants={particleVariants}
          animate="animate"
          style={{animationDelay: '1.5s'}}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 rounded-full bg-zion-cyan opacity-25"
          variants={particleVariants}
          animate="animate"
          style={{animationDelay: '2.5s'}}
        />
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading 
            id="hero-heading"
            className="mb-6 text-5xl md:text-7xl font-bold animate-fade-in-up"
          >
            {t('hero.title', 'The Future of Tech & AI')}
          </GradientHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mb-8 text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle', 'Discover cutting-edge AI services, connect with top tech talent, and access innovative solutions that drive your business forward.')}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/services">
              <Zap className="mr-2 h-5 w-5" />
              {t('hero.exploreServices', 'Explore Services')}
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/talent">
              <Users className="mr-2 h-5 w-5" />
              {t('hero.findTalent', 'Find Talent')}
            </Link>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/30 border border-zion-purple/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('hero.aiServices', 'AI-Powered Solutions')}
            </h3>
            <p className="text-zion-slate-light">
              {t('hero.aiServicesDesc', 'Cutting-edge artificial intelligence services for modern businesses')}
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/30 border border-zion-purple/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('hero.secureTech', 'Secure Technology')}
            </h3>
            <p className="text-zion-slate-light">
              {t('hero.secureTechDesc', 'Enterprise-grade security and compliance solutions')}
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/30 border border-zion-purple/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('hero.cloudSolutions', 'Cloud & DevOps')}
            </h3>
            <p className="text-zion-slate-light">
              {t('hero.cloudSolutionsDesc', 'Scalable cloud infrastructure and automation')}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <div className="inline-flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer group">
            <span className="text-sm font-medium">
              {t('hero.learnMore', 'Learn more about our platform')}
            </span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
