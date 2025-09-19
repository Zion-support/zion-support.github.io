import React from 'react';
import Link from '../lib/CompatLink';
import { ArrowRight, Play, Star, Users, Award, Globe } from 'lucide-react';
const HeroSection: React.FC = () => {,
  return (,
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">,
      <div className="absolute inset-0 bg-black/20"></div>,
      <div className="relative z-10 container mx-auto px-4 text-center">,
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,
          Revolutionary AI Solutions,
        </h1>,
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">,
          Transform your business with cutting-edge artificial intelligence and automation technologies,
        </p>,
        <div className="flex flex-col sm:flex-row gap-4 justify-center">,
          <Link,
            to="/services",
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",
          >,
            Explore Services,
            <ArrowRight className="ml-2 w-5 h-5" />,
          </Link>,
            to="/contact",
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors",
            <Play className="mr-2 w-5 h-5" />,
            Get Started,
        </div>,
      </div>,
import { GradientHeading ,} from "../components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
export function HeroSection() {,
  const { t } = useTranslation();
  const containerVariants = {,
    hidden: { opacity: 0 ,};
    visible: {,
      opacity: 1;
      transition: {,
        staggerChildren: 0.2;
        delayChildren: 0.1,}
    }
  };
  const itemVariants = {,
    hidden: { y: 20, opacity: 0 ,};
      y: 0;
        duration: 0.6;
        ease: "easeOut",
  const floatingVariants = {,
    float: {,
      y: [-10, 10, -10];
        duration: 3;
        repeat: Infinity;
        ease: "easeInOut",
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">,
      {/* Enhanced background gradient effect */,}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>,
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 animate-pulse"></div>,
      {/* Enhanced floating particles with better positioning */}
      <div className="absolute inset-0">,
        <motion.div,
          variants={floatingVariants}
          animate="float",
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60",
        />,
          style={{ animationDelay: "1s" ,}}
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40",
          style={{ animationDelay: "2s" ,}}
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50",
          style={{ animationDelay: "0.5s" ,}}
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30",
          style={{ animationDelay: "1.5s" ,}}
          className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40",
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">,
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>,
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>,
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>,
      <motion.div,
        className="container relative z-10 px-4 mx-auto text-center",
        variants={containerVariants}
        initial="hidden",
        animate="visible",
      >,
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants} className="mb-6">,
          <GradientHeading className="text-4xl sm: text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">,
            {t('home.hero_title') || "The Future of Tech is Here",}
          </GradientHeading>,
        </motion.div>,
        {/* Enhanced subtitle with better spacing */}
        <motion.div variants={itemVariants} className="mb-10">,
          <p className="text-lg sm: text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">,
            {t('home.hero_subtitle') || "Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology."}
          </p>,
        {/* Enhanced CTA buttons with better mobile layout */}
          variants={itemVariants}
          className="flex flex-col sm: flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto",
        >,
          <Button,
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
            size="lg",
            <Link,
              to="/signup",
              role="button",
              aria-label={t('auth.signup') || "Get Started",}
              tabIndex={0}
              data-testid="hero-signup-btn",
              className="flex items-center gap-2",
            >,
              <Sparkles className="w-5 h-5" />,
              {t('auth.signup') || "Get Started"}
              <ArrowRight className="w-4 h-4 group-hover: translate-x-1 transition-transform" />,
            </Link>,
          </Button>,
            id="browse-marketplace",
            to="/marketplace",
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105",
            <Globe className="w-5 h-5" />,
            {t('home.browse_marketplace') || "Browse Marketplace",}
            <Zap className="w-4 h-4 group-hover: scale-110 transition-transform" />,
        {/* Enhanced trust indicators */,}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm",
          <div className="flex items-center gap-2">,
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>,
            <span>AI-Powered Matching</span>,
          </div>,
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>,
            <span>Global Network</span>,
            <span>24/7 Support</span>,
      </motion.div>,
    </section>,
  );
};
export default HeroSection;
}}}}