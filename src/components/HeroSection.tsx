<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
>>>>>>> origin/cursor/build-and-fix-errors-e276
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { 
  ArrowRightIcon,
  PlayIcon,
  StarIcon
} from '@heroicons/react/24/outline';
=======
import { motion } from "framer-motion";
<<<<<<< HEAD
import { ArrowRight, Sparkles, Users, Zap, Shield, Globe, Cpu, Brain, Star, CheckCircle } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2

export function HeroSection() {
=======

=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
import React from 'react';
import { motion } from 'framer-motion';
import { Building, ArrowRight, Check, Zap, Globe, Shield, Cpu, Rocket, Brain, Server, Code, ShieldCheck, Sparkles, Star, Award, TrendingUp, Users, Clock, Target, BarChart3, Bot, CpuIcon, Eye, Layers, Globe2, ZapIcon } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export function HeroSection() {
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
        staggerChildren: 0.2
=======
        staggerChildren: 0.2,
<<<<<<< HEAD
        delayChildren: 0.3
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
        delayChildren: 0.1
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      }
=======

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Code, 
  Shield, 
  Sparkles,
  Play,
  ChevronDown
} from 'lucide-react';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your business"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Advanced IT Services",
      description: "Comprehensive technology infrastructure and support"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS Platform",
      description: "Scalable software solutions for modern businesses"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum-Ready Security",
      description: "Future-proof cybersecurity and encryption"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
    }
  ];

<<<<<<< HEAD
  const itemVariants = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    hidden: { y: 30, opacity: 0 },
=======
    hidden: { y: 50, opacity: 0 },
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
    hidden: { y: 20, opacity: 0 },
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
    hidden: { opacity: 0, y: 30 },
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    visible: {
      opacity: 1,
      y: 0,
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        duration: 0.8
=======
        duration: 0.8,
=======
        duration: 0.6,
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-e276
        ease: "easeOut"
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
        ease: "easeOut" as const
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
      }
=======
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

<<<<<<< HEAD
<<<<<<< HEAD
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
=======
  const floatingVariants = {
    float: {
=======
  const floatingVariants = {
    animate: {
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
=======
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        repeat: Infinity,
        ease: "easeInOut"
      }
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    }
  };
=======
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }), []);

  const floatingVariants = useMemo(() => ({
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }), []);

  const stats = useMemo(() => [
    { icon: Users, label: "10K+ Talents", value: "Verified", color: "text-zion-cyan", ariaLabel: "Over 10,000 verified talents available" },
    { icon: Zap, label: "AI-Powered", value: "Matching", color: "text-zion-purple", ariaLabel: "AI-powered smart matching system" },
    { icon: Shield, label: "Enterprise", value: "Security", color: "text-green-400", ariaLabel: "Enterprise-grade security protocols" },
    { icon: Globe, label: "Global", value: "Reach", color: "text-blue-400", ariaLabel: "Global reach and accessibility" }
  ], []);

  const features = useMemo(() => [
    { icon: Brain, text: "AI-Powered Matching", color: "from-purple-500 to-pink-500", ariaLabel: "AI-powered matching technology" },
    { icon: Cpu, text: "Micro SAAS Solutions", color: "from-blue-500 to-cyan-500", ariaLabel: "Micro SAAS software solutions" },
    { icon: Shield, text: "Enterprise Security", color: "from-green-500 to-emerald-500", ariaLabel: "Enterprise-grade security features" }
  ], []);
>>>>>>> origin/cursor/website-audit-and-enhancement-803a

  const socialProof = [
    { text: "Trusted by 500+ companies worldwide", icon: CheckCircle },
    { text: "98% client satisfaction rate", icon: Star },
    { text: "24/7 expert support available", icon: Shield }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "from-blue-400 to-cyan-400" },
    { icon: Award, value: "50+", label: "Awards Won", color: "from-yellow-400 to-orange-400" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime", color: "from-green-400 to-emerald-400" },
    { icon: Clock, value: "24/7", label: "Support", color: "from-purple-400 to-pink-400" }
  ];

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence for business transformation" },
    { icon: ShieldCheck, title: "Enterprise Security", description: "Military-grade cybersecurity and compliance solutions" },
    { icon: Globe2, title: "Global Reach", description: "Worldwide presence with local expertise and support" },
    { icon: ZapIcon, title: "Lightning Fast", description: "Optimized performance and rapid deployment capabilities" }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="relative py-20 md:py-32 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-purple opacity-90" />
=======
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center" role="banner" aria-label="Hero Section">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2
=======
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue opacity-90"></div>
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
      
      {/* Animated Background Elements */}
=======
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 animate-pulse"></div>
      
      {/* Enhanced floating particles with better positioning */}
>>>>>>> origin/cursor/build-and-fix-errors-e276
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-zion-cyan/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-zion-purple/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
<<<<<<< HEAD
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Advanced Quantum Background */}
      <div className="absolute inset-0">
        {/* Quantum Energy Fields */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 221, 210, 0.15) 0%, transparent 70%)',
              border: '1px solid rgba(34, 221, 210, 0.3)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Neural Network Grid */}
        <div className="absolute inset-0 cyber-grid opacity-10" />
        
<<<<<<< HEAD
        {/* Floating Quantum Particles */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-zion-cyan rounded-full"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-zion-purple rounded-full"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-zion-cyan rounded-full"
          variants={floatingVariants}
          animate="float"
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-zion-cyan/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-zion-purple/30 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          style={{ animationDelay: '2s' }}
        />
      </div>

<<<<<<< HEAD
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
      <div className="relative z-10 container mx-auto px-4 text-center">
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
<<<<<<< HEAD
          className="max-w-5xl mx-auto"
        >
<<<<<<< HEAD
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-8"
          >
            <StarIcon className="w-4 h-4" />
            Trusted by 500+ Companies Worldwide
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent animate-pulse">
              Transform
            </span>
            <br />
            <span className="text-white">Your Business</span>
            <br />
            <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              with AI
            </span>
          </motion.h1>
          
          {/* Subtitle */}
<<<<<<< HEAD
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            Empowering enterprises with cutting-edge artificial intelligence solutions, 
            quantum computing, and innovative technology services that drive real results.
          </motion.p>
          
=======
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI solutions, connect with top tech talent, and access innovative micro SAAS services 
              that transform your business operations and drive digital transformation.
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socialProof.map((proof, index) => {
                const IconComponent = proof.icon;
                return (
                  <div
                    key={proof.text}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 text-zion-slate-light"
                  >
                    <IconComponent className="w-4 h-4 text-zion-cyan" />
                    <span className="text-sm font-medium">{proof.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.text}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-medium">{feature.text}</span>
                  </div>
 );
              })}
            </div>
          </motion.div>

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/services"
              className="group bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 hover:scale-105 flex items-center gap-3"
            >
<<<<<<< HEAD
              Explore Services
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
=======
              <Link to="/signup" role="button" aria-label="Get Started Today">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Link 
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 backdrop-blur-md bg-white/5"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2
            >
              Get Started
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
=======
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>
      </div>
=======
        {/* Additional futuristic elements */}
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-zion-blue rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-zion-purple-light rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-zion-cyan-light rounded-full animate-pulse delay-2500"></div>
        
        {/* Matrix-style lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-zion-blue to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent opacity-30"></div>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30"></div>
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants} className="mb-6">
<<<<<<< HEAD
          <GradientHeading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech is Here"}
=======
          <GradientHeading className="text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing */}
<<<<<<< HEAD
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle') || "Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology."}
          </p>
        </motion.div>

        {/* Enhanced CTA buttons with better mobile layout */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto"
        >
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
            asChild
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
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>Global Talent Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan-light" />
            <span>24/7 Support</span>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 hover-lift hover-glow transition-all duration-300 shadow-2xl"
            size="lg"
            asChild
          >
            <Link to="/signup">
              {t('auth.signup')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
<<<<<<< HEAD
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            {t('home.browse_marketplace') || "Browse Marketplace"}
            <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
=======
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover-lift hover-glow shadow-2xl backdrop-blur-sm"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
          </Link>
        </motion.div>

<<<<<<< HEAD
          {/* Video Demo Button */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <button className="inline-flex items-center gap-3 text-zion-slate-light hover:text-white transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-zion-cyan/50 group-hover:bg-zion-cyan/20 transition-all duration-300">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
              <div className="text-left">
                <div className="text-sm text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-300">
                  Watch Demo
                </div>
                <div className="text-xs text-zion-slate-light">
                  2 min overview
                </div>
              </div>
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors duration-300">500+</div>
              <div className="text-zion-slate-light text-sm">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:text-zion-purple-light transition-colors duration-300">50+</div>
              <div className="text-zion-slate-light text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors duration-300">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:text-zion-purple-light transition-colors duration-300">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
=======
        {/* Enhanced trust indicators */}
        <motion.div 
          variants={itemVariants}
<<<<<<< HEAD
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
=======
          className="mt-16 text-zion-slate-light/70"
        >
          <p className="text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
          </div>
        </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            The Future of
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Tech Talent
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Connect with world-class tech professionals, AI-powered services, and cutting-edge solutions. 
            Zion Tech Group is your gateway to the future of technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/90 hover:to-zion-cyan/90 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300"
            >
              <Link to="/match">
                <Zap className="w-5 h-5 mr-2" />
                Find Your Perfect Match
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Link to="/services">
                <Search className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span>Trusted by 10,000+ companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span>50,000+ verified professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span>AI-powered matching</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      </motion.div>
    </section>
  );
};

export default HeroSection;
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Shield, Globe, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const features = [
    { icon: Zap, text: 'AI-Powered Solutions', color: 'from-yellow-400 to-orange-500' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-green-400 to-emerald-500' },
    { icon: Globe, text: 'Global Reach', color: 'from-blue-400 to-cyan-500' },
    { icon: Cpu, text: 'Cutting-Edge Tech', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            Trusted by 500+ Companies Worldwide
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-gradient-x">
              Technology
            </span>
            is Here
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Transform your business with cutting-edge AI solutions, enterprise-grade security, 
            and innovative micro SAAS services. Join the digital revolution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-3"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="group px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-zion-slate-light text-sm font-medium group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.text}
                </p>
              </motion.div>
            ))}
=======
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Innovation at the Speed of Light</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-zion-cyan to-white bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                With AI-Powered
              </span>
              <br />
              <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed">
              Empowering enterprises with cutting-edge artificial intelligence, cybersecurity, 
              and digital transformation solutions that drive innovation and competitive advantage.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white border-0 shadow-2xl shadow-zion-cyan/25 hover:shadow-3xl hover:shadow-zion-cyan/40 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-2 border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-6 text-zion-cyan/60">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm">SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm">GDPR Ready</span>
            </div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'AI Solutions' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-zion-slate-light text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
=======
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-cyan/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:bg-zion-blue-dark/70"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-cyan/70 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-zion-cyan/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
=======
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-500 rounded-full blur-sm"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Leading the Future of Technology
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech
                </span>
                <br />
                <span className="text-white">
                  Group
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Transform your business with cutting-edge AI, advanced IT infrastructure, 
                and innovative micro SAAS solutions. We're not just building the future—we're living it.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
                
                <button className="group px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {[
                  { number: "500+", label: "Services Delivered" },
                  { number: "50+", label: "AI Solutions" },
                  { number: "24/7", label: "Support Available" },
                  { number: "99.9%", label: "Uptime Guarantee" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We combine cutting-edge technology with proven expertise to deliver 
                  solutions that drive real business transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                    className={`text-center p-6 rounded-xl transition-all duration-300 ${
                      currentFeature === idx
                        ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 scale-105'
                        : 'bg-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 hover:scale-105'
                    }`}
                  >
                    <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                      currentFeature === idx
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-gray-700 text-cyan-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center mt-16"
          >
            <button
              onClick={scrollToServices}
              className="group flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-sm font-medium">Explore Our Services</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
=======

// Add missing Play icon component
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
