import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
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
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-float-slow"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 rounded-full bg-zion-purple-light opacity-50 animate-float-medium"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 rounded-full bg-zion-cyan opacity-25 animate-float-fast"></div>
      </div>
      
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
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
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
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}