<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/Button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Globe } from "lucide-react";

export function EnhancedHeroSection() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: <Sparkles className="h-6 w-6" />, delay: 0, duration: 3 },
    { icon: <Zap className="h-5 w-5" />, delay: 0.5, duration: 4 },
    { icon: <Users className="h-5 w-5" />, delay: 1, duration: 3.5 },
    { icon: <Globe className="h-6 w-6" />, delay: 1.5, duration: 4.5 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark opacity-90" />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
      
      {/* Floating particles with mouse interaction */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-zion-cyan-light/30"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      {/* Interactive background elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 221, 210, 0.1), transparent 40%)`,
        }}
      />

      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center pt-32 pb-20"
        style={{ y, opacity }}
      >
        {/* Main heading with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GradientHeading className="mb-6 text-6xl md:text-8xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech & AI"}
          </GradientHeading>
        </motion.div>

        {/* Subtitle with staggered animation */}
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('home.hero_subtitle') || "Discover top AI and tech talent, cutting-edge services, and revolutionary equipment in the world's most advanced marketplace."}
        </motion.p>

        {/* Enhanced CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            className="group relative overflow-hidden bg-gradient-to-r from-zion-purple via-zion-purple-light to-zion-purple-dark hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-dark text-lg py-7 px-8 rounded-xl shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup') || "Get Started"}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('auth.signup') || "Get Started"}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-cyan-light opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group relative overflow-hidden border-2 border-zion-cyan text-zion-cyan hover:text-zion-blue-dark hover:bg-zion-cyan active:bg-zion-cyan-light text-lg py-7 px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-zion-cyan/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('home.browse_marketplace') || "Browse Marketplace"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-zion-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light/70"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
            <span className="text-sm font-medium">10,000+ Verified Talents</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" />
            <span className="text-sm font-medium">Global Coverage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-blue rounded-full animate-pulse" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
<<<<<<< HEAD
  Zap, 
  Shield, 
  Users, 
  Code, 
  Star,
  TrendingUp,
  Globe,
  Play
} from "lucide-react";

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix-style background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-zion-cyan text-xs font-mono animate-matrix-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              >
                {Math.random().toString(36).substring(2, 4)}
              </div>
            ))}
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 px-6 py-3 rounded-full border border-zion-purple/30 mb-8 animate-fade-in-down">
          <Zap className="h-5 w-5 text-zion-cyan animate-pulse" />
          <span className="text-sm font-medium text-zion-cyan">The Future of Tech & AI</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
          <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent animate-shimmer">
            ZION
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">
            The Tech & AI
          </span>
          <br />
          <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Marketplace
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Discover top AI and tech talent, services, and equipment in one place. 
          Transform your business with cutting-edge technology solutions.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Zap className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Shield className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">Enterprise-Grade</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Users className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">Global Network</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Code className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">Innovation</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25">
            <Link to="/micro-saas-services">
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10">
            <Link to="/request-quote">
              <span>Get Started</span>
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-sm text-zion-slate-light">AI Services</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">
              10K+
            </div>
            <div className="text-sm text-zion-slate-light">Tech Talent</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm text-zion-slate-light">Countries</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-sm text-zion-slate-light">Uptime</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-pulse"></div>
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
  Play, 
  Sparkles, 
  Zap, 
  Brain, 
<<<<<<< HEAD
  Shield,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-sm animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" />
                New Micro SAAS Services
              </Badge>
              <Badge className="bg-zion-cyan/20 text-white border-zion-cyan/30 px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </Badge>
              <Badge className="bg-zion-blue/20 text-zion-cyan border-zion-blue/30 px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Grade
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-white mb-2">Transform Your</span>
                <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent neon-pulse">
                  Business with AI
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-slate-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover cutting-edge micro SAAS services, IT solutions, and intelligent automation tools designed to drive innovation and growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-1">50+</div>
                <div className="text-sm text-zion-slate-light">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple mb-1">1000+</div>
                <div className="text-sm text-zion-slate-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-blue mb-1">99.9%</div>
                <div className="text-sm text-zion-slate-light">Uptime</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 neon-glow"
                asChild
              >
                <Link to="/micro-saas-services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
              <div className="flex items-center justify-center lg:justify-start gap-6 opacity-60">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-zion-cyan" />
                  <span className="text-white text-sm">10K+ Users</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-white text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Cards */}
          <div className="relative hidden lg:block">
            <div className="relative space-y-6">
              {/* Main Service Card */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/50 rounded-2xl p-6 shadow-2xl shadow-zion-purple/20 hover:shadow-zion-purple/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">AI Chatbot Builder</h3>
                      <p className="text-zion-slate-light text-sm">No-code AI solutions</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">Advanced NLP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                      <span className="text-zion-slate-light">Multi-language</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                      <span className="text-zion-slate-light">Analytics Dashboard</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-purple/20">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-bold">$299/mo</span>
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        Popular
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Service Card */}
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 ml-12">
                <div className="bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/50 rounded-2xl p-6 shadow-2xl shadow-zion-cyan/20 hover:shadow-zion-cyan/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Cybersecurity Audit</h3>
                      <p className="text-zion-slate-light text-sm">Complete security assessment</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">Penetration Testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                      <span className="text-zion-slate-light">Compliance Review</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-bold">$3,500</span>
                      <Badge className="bg-zion-cyan/20 text-white border-zion-cyan/30">
                        One-time
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-zion-purple/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-zion-cyan/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-4 h-4 bg-zion-cyan rounded-full shadow-lg shadow-zion-cyan/50"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-10 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-3 h-3 bg-zion-purple rounded-full shadow-lg shadow-zion-purple/50"></div>
      </div>
      
      <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '5s' }}>
        <div className="w-2 h-2 bg-zion-blue rounded-full shadow-lg shadow-zion-blue/50"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
=======
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
  Shield, 
  Globe, 
  ChevronDown,
  Star,
  Users,
  TrendingUp
} from "lucide-react";

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-zion-blue/10 rounded-full animate-float delay-2000"></div>
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-blue to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-6 py-3 rounded-full text-sm font-medium mb-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:bg-zion-cyan/20">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="neon-text">New Micro SAAS Services Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent neon-pulse">
            ZION
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-white mt-4 font-normal">
            The Future of Tech & AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed">
          Discover the world's most comprehensive marketplace for AI talent, micro SAAS services, 
          and cutting-edge technology solutions. Transform your business with our innovative platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-zion-slate font-semibold px-8 py-6 text-lg hover-lift hover-glow transition-all duration-300"
          >
            <Link to="/micro-saas-services">
              <Zap className="h-6 w-6 mr-3" />
              Explore Services
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold px-8 py-6 text-lg hover-lift transition-all duration-300"
          >
            <Link to="/request-quote">
              <Users className="h-6 w-6 mr-3" />
              Get Started
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">Micro SAAS Services</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">
              10K+
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">AI Professionals</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">Uptime Guarantee</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">Support Available</div>
          </div>
        </div>

        {/* Service Categories Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Our Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Brain className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">AI Services</span>
            </div>
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Shield className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">IT Solutions</span>
            </div>
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Zap className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">Automation</span>
            </div>
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">Integration</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16">
          <p className="text-zion-slate-light mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-zion-cyan font-bold text-xl">TechCorp</div>
            <div className="text-zion-purple font-bold text-xl">InnovateAI</div>
            <div className="text-zion-blue font-bold text-xl">DataFlow</div>
            <div className="text-zion-cyan font-bold text-xl">CloudTech</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-zion-cyan" />
        </div>
      </div>

      {/* Floating Action Cards */}
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <div className="glass-effect p-4 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-cyan text-sm font-medium">Live AI Matching</span>
          </div>
          <div className="text-white text-xs mt-2">Currently processing 1,247 matches</div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-8 hidden lg:block">
        <div className="glass-effect p-4 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <Star className="h-4 w-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">New Services</span>
          </div>
          <div className="text-white text-xs mt-2">12 new micro SAAS services added this week</div>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
      </div>
    </section>
=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Code,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";

export function EnhancedHeroSection() {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="h-5 w-5" /> },
    { label: 'Services Delivered', value: '10K+', icon: <Zap className="h-5 w-5" /> },
    { label: 'Success Rate', value: '99.9%', icon: <Shield className="h-5 w-5" /> },
    { label: 'Global Reach', value: '150+', icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const features = [
    'AI-Powered Matching',
    '24/7 Global Support',
    'Enterprise Security',
    'Real-time Analytics',
    'Multi-platform Integration',
    'Custom Solutions'
  ];

  return (
    <SimpleFuturisticBackground>
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Brain className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm font-medium text-zion-cyan">AI-Powered Technology Solutions</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    The Future of
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-white bg-clip-text text-transparent">
                    Tech & AI
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Marketplace
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zion-slate-light max-w-2xl leading-relaxed">
                  Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. 
                  Connect with top talent and transform your business with next-generation technology.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold gap-3 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 px-8 py-4 text-lg font-semibold gap-3 backdrop-blur-sm"
                  onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-zion-slate-light">Trusted by 50K+ users</span>
                </div>
                
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-zion-slate-light ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 w-64 h-40 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl backdrop-blur-sm animate-float">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-zion-cyan" />
                      <span className="text-sm font-medium text-white">AI Services</span>
                    </div>
                    <p className="text-xs text-zion-slate-light">Content Generation, Analytics, Automation</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-56 h-32 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 border border-zion-blue/30 rounded-2xl backdrop-blur-sm animate-float delay-1000">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-5 w-5 text-zion-blue" />
                      <span className="text-sm font-medium text-white">Cloud Solutions</span>
                    </div>
                    <p className="text-xs text-zion-slate-light">Infrastructure, Security, Management</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-72 h-44 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl backdrop-blur-sm animate-float delay-500">
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Code className="h-6 w-6 text-zion-cyan" />
                      <span className="text-lg font-semibold text-white">Development</span>
                    </div>
                    <p className="text-sm text-zion-slate-light">Custom Software, APIs, Integration</p>
                    <div className="mt-3 flex justify-center">
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Central Orb */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-zion-purple-dark via-zion-slate to-zion-blue-dark rounded-full"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow delay-1000"></div>
                  <div className="absolute inset-12 bg-gradient-to-r from-zion-purple-dark via-zion-slate to-zion-blue-dark rounded-full"></div>
                  <div className="absolute inset-16 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow delay-500"></div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">ZION</div>
                      <div className="text-sm text-zion-cyan">Tech Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-cyan group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already transforming their operations with our cutting-edge 
                technology solutions. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact Our Team
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/services', '_blank')}
                >
                  <Zap className="h-4 w-4" />
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SimpleFuturisticBackground>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
  );
}