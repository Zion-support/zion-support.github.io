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
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
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
          </div>
        </div>
      </div>

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
      </div>
    </section>
  );
}