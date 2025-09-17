import React from 'react';
import Link from '../lib/CompatLink';
import { ArrowRight, Play, Star, Users, Award, Globe } from 'lucide-react';

<<<<<<< HEAD
const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Trusted by 500+ Companies Worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Technology Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Transform your business with cutting-edge AI, cloud architecture, and innovative development services. 
            Join the future of technology with Zion Tech Group.
=======
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";

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
    hidden: { y: 20, opacity: 0 },
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
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 animate-pulse"></div>
      
      {/* Enhanced floating particles with better positioning */}
      <div className="absolute inset-0">
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
          className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
        />
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants} className="mb-6">
          <GradientHeading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech is Here"}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle') || "Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology."}
>>>>>>> origin/website-improvements-v2
          </p>

<<<<<<< HEAD
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm md:text-base">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </section>
    </>
=======
        {/* Enhanced CTA buttons with better mobile layout */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto"
        >
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"

          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup') || "Get Started"}
              tabIndex={0}
              data-testid="hero-signup-btn"
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {t('auth.signup') || "Get Started"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            {t('home.browse_marketplace') || "Browse Marketplace"}
            <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>

        {/* Enhanced trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>Global Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
>>>>>>> origin/website-improvements-v2
  );
};

export default HeroSection;