=======
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Zap, Shield, Users, Globe, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

export function HeroSection() {
  const { t } = useTranslation();
  
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export function HeroSection() {
=======
=======
=======
=======
=======
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    }
  ];

    hidden: { y: 50, opacity: 0 },
=======
    hidden: { y: 20, opacity: 0 },
=======
    hidden: { opacity: 0, y: 30 },
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
=======
        duration: 0.6,
        ease: "easeOut" as const
      }
=======
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const floatingVariants = {
    float: {
=======
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
=======
        duration: 0.6,
        ease: "easeOut"
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle')}
          </p>
        </motion.div>

        {/* Enhanced stats section */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="text-zion-cyan">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-zion-slate-light">Active Users</div>
            </div>
            <div className="text-zion-purple">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-zion-slate-light">Countries</div>
            </div>
            <div className="text-zion-cyan-light">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm text-zion-slate-light">Satisfaction</div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {currentSlideData.title}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-medium">
            {currentSlideData.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentSlideData.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {currentSlideData.features.map((feature, index) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/micro-saas-services"
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/contact"
              className="group flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span className="text-sm">Middletown, DE</span>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
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
=======
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-60"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-purple-light opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-cyan-light opacity-70"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-purple opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-zion-cyan-dark opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
        />
      </motion.div>
      
      {/* Main content container */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced main heading with better typography */}
          <motion.div variants={itemVariants} className="mb-8">
            <GradientHeading className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6">
              {t('home.hero_title')}
            </GradientHeading>
            
            {/* Enhanced subtitle with better readability */}
            <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('home.hero_subtitle')}
            </p>
          </motion.div>

          {/* Enhanced feature highlights */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan-light">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Sparkles className="w-5 h-5" />
                <span>AI-Powered Matching</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Zap className="w-5 h-5" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Users className="w-5 h-5" />
                <span>Global Talent</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Globe className="w-5 h-5" />
                <span>24/7 Access</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA buttons with better visual hierarchy */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button
              className="group bg-gradient-to-r from-zion-purple via-zion-purple-light to-zion-purple-dark hover:from-zion-purple-dark hover:via-zion-purple hover:to-zion-purple-light text-lg py-7 px-8 rounded-xl shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
              size="lg"
              asChild
            >
              <Link
                to="/signup"
                role="button"
                aria-label={t('auth.signup')}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-3"
              >
                <span>{t('auth.signup')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-7 px-8 rounded-xl inline-flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              <span>{t('home.browse_marketplace')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Trust indicators and social proof */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-zion-slate-light/70 text-sm md:text-base mb-4">
              Trusted by 10,000+ companies worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {/* Add company logos here if available */}
              <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
              <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
              <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24 text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
=======
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              {t('home.browse_marketplace')}
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light text-sm mb-4">
            Trusted by leading companies worldwide
          </p>
          <div className="flex justify-center items-center gap-6 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-50"></div>
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-50"></div>
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-50"></div>
          </div>
        </motion.div>
      </motion.div>
=======
            <div className="w-2 h-2 bg-zion-cyan-light rounded-full"></div>
            <span>AI-Powered</span>
          </div>
        </motion.div>
      </motion.div>
=======
        {/* Additional hero elements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">48+</span>
            </div>
            <p className="text-zion-cyan font-semibold">Services Available</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">500+</span>
            </div>
            <p className="text-zion-cyan font-semibold">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">98%</span>
            </div>
            <p className="text-zion-cyan font-semibold">Client Satisfaction</p>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-sm text-zion-slate-light">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">10K+</div>
            <div className="text-sm text-zion-slate-light">Tech Experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-sm text-zion-slate-light">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-sm text-zion-slate-light">Uptime</div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-zion-cyan">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">SOC2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-purple">
              <Cloud className="w-5 h-5" />
              <span className="text-sm font-medium">Cloud Native</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </div>
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
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
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
=======

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col items-center gap-3 text-zion-cyan group">
            <div className="p-3 rounded-full bg-zion-cyan/10 group-hover:bg-zion-cyan/20 transition-colors">
              <Brain className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">AI-Powered</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-zion-purple group">
            <div className="p-3 rounded-full bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Global Talent</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-zion-blue group">
            <div className="p-3 rounded-full bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors">
              <Shield className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Verified</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-zion-cyan-light group">
            <div className="p-3 rounded-full bg-zion-cyan-light/10 group-hover:bg-zion-cyan-light/20 transition-colors">
              <Zap className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Fast & Secure</span>
          </div>
        </div>
=======
            <div className="w-2 h-2 bg-zion-cyan-light rounded-full"></div>
            <span>AI-Powered</span>
          </div>
        </motion.div>
=======
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 pt-8 border-t border-zion-purple/20"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded animate-pulse"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </motion.div>
      </div>
=======
      </motion.div>
    </section>
  );
};
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
=======

// Add missing Play icon component
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);
