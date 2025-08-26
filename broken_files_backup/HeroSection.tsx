import React from 'react';
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
<<<<<<< HEAD:src/components/HeroSection.tsx
import { ArrowRight, Zap, Users, Brain, Shield, Cloud } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
=======
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";
export function HeroSection() {
  const { t } = useTranslation();
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HeroSection.tsx
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
  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
<<<<<<< HEAD:src/components/HeroSection.tsx
      
      {/* Animated floating particles with better positioning and variety */}
=======
      {/* Enhanced animated floating particles with better performance */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HeroSection.tsx
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
<<<<<<< HEAD:src/components/HeroSection.tsx

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
=======
      <div className="container relative z-10 px-4 mx-auto text-center">
        <GradientHeading
          id="hero-heading"
          className="mb-6 text-5xl md:text-7xl font-bold animate-fade-in-up"
        >
          {t('home.hero_title')}
        </GradientHeading>
        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          {t('home.hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
            asChild
          >
            <div className="flex items-center gap-2 text-zion-cyan">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2 text-zion-purple-light">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Global Talent Network</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan-light">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Instant Connections</span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              size="lg"
              asChild
            >
              <Link
                to="/signup"
                role="button"
                aria-label={t('auth.signup')}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-2"
              >
                {t('auth.signup')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {t('home.browse_marketplace')}
              <ArrowRight className="w-5 h-5" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HeroSection.tsx
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
<<<<<<< HEAD:src/components/HeroSection.tsx
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
=======
            {t('home.browse_marketplace')}
          </Link>
        </div>
        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in-up animation-delay-600">
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-40"></div>
            <div className="w-20 h-8 bg-zion-slate-light rounded opacity-40"></div>
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-40"></div>
            <div className="w-18 h-8 bg-zion-slate-light rounded opacity-40"></div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      {/* Enhanced Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4">
          <p className="text-slate-300 text-sm mb-3 text-center">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            <div className="flex items-center space-x-2 text-blue-400">
              <ShieldCheckIcon className="w-5 h-5" />
              <span className="text-sm font-medium">SOC2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <CloudIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Cloud Native</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <UsersIcon className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <CodeBracketIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Open Source</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HeroSection.tsx
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
