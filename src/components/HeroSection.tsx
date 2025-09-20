=======

import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
=======
import { NeonGlo, w, GradientBorder } from "@/components/ui/AnimatedBackground";
import { ArrowRigh, t, Za, p, User, s, Brain } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
=======
=======
import { motio,  n, useScrol, l, useTransform } from "framer-motion";
import { ArrowRigh, t, Sparkle, s, Za, p, User, s, Sta, r, TrendingU, p, Shield } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    targe,  t: containerRe, f,
    offse, t: ["star, t star, t", "en, d star, t"]
  });
  
  const y = useTransform(scrollYProgres,  s, [0, 1], ["0%", "5, 0%"]);
  const opacity = useTransform(scrollYProgres,  s, [0, 0.5], [1, 0]);
  
  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.2,
    delayChildre, n: 0.1
      }
    }
  };

  const itemVariants = {
    hidde, n: { opacit, y: 0,
    y: 20 },
=======
    hidde, n: { y: 3, 0,
    opacit, y: 0 },
=======
    hidde, n: { y: 3, 0,
    opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    y: 0,
      transitio, n: {
        duratio, n: 0.8,
=======
        duratio, n: 0.8,
    eas, e: "easeOut"
      }
    }
  };

=======
  const floatingVariants = {
    animat, e: {
      y: [-1, 5, 1, 5, -1, 5],
      rotat, e: [0, 5, 0],
  const particleVariants = {
    animat, e: {
      y: [0, -2, 0, 0],
      opacit, y: [0.3, 0.6, 0.3],
      transitio, n: {
        duratio, n: 3,
=======
=======
      transitio, n: {
        duratio, n: 4,
    repea, t: Infinit, y,
        eas, e: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animat, e: {
      scal, e: [1, 1.1, 1],
      opacit, y: [0.5, 0.8, 0.5],
      transitio, n: {
        duratio, n: 2,
    repea, t: Infinit, y,
        eas, e: "easeInOut"
      }
    }
  };

  return (=======
    <section ref={containerRef} className="relative overflow-hidden py-20 m,  d:py-32 min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"
        style={{ y, opacity }}
      />
      
      {/* Animated floating particles with better positioning and variety */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50"
          variants={floatingVariants}
    <section className="relative overflow-hidden py-20 m, d:py-32 cyber-grid">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse float" style={{animationDela, y: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse float" style={{animationDela, y: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse float" style={{animationDela, y: '0.5s'}}></div>
        <div className="absolute top-1/6 left-1/6 w-1 h-1 rounded-full bg-zion-cyan opacity-50 animate-pulse float" style={{animationDela, y: '1.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-30 animate-pulse float" style={{animationDela, y: '2.5s'}}></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <GradientHeading className="mb-6 text-5xl m, d:text-7xl font-bold glow">
          {t('home.hero_title')}
        </GradientHeading>

        <p className="text-xl m, d:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          {t('home.hero_subtitle')}
        </p>

        <div className="flex flex-col s,  m:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
    <section className="relative overflow-hidden py-20 m, d:py-32">
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-lg py-6 neon-pulse"
=======
    <section className="relative overflow-hidden py-16 m, d:py-24 l, g:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan"
          variants={particleVariants}
=======
=======
          animate="animate"
          style={{ animationDela, y: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple"
          variants={particleVariants}
=======
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70"
          variants={floatingVariants}
=======
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDela, y: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light"
          variants={particleVariants}
          animate="animate"
          style={{ animationDela, y: '0.5s' }}
        />
=======
        <motion.div 
          className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDela, y: '1.5s' }}
        />
        <motion.div 
          className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDela, y: '2.5s' }}
        />
      </div>

      {/* Enhanced decorative geometric shapes with animations */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
        animate={{ rotat, e: 360 }}
        transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30"
        animate={{ rotat, e: -360 }}
        transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}
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
        style={{ animationDela, y: '1s' }}
      />
=======
=======
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
=======
        {/* Enhanced title with better typography and animations */}
        <motion.div variants={itemVariants} className="mb-8">
          <GradientHeading className="text-5xl m, d:text-7xl l, g:text-8xl font-bold leading-tight tracking-tight">
            {t('home.hero_title') || "The Future of Tech & AI"}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing and animations */}
        <motion.p 
        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-4 m, d:mb-6 text-4xl m, d:text-6xl l, g:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg m,  d:text-xl l, g:text-2xl text-zion-slate-light mb-8 m, d:mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero_subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col s, m:flex-row justify-center gap-4 m, d:gap-6"
          variants={itemVariants}
        >
          variants={itemVariants}
          className="text-xl m, d:text-2xl l, g:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light"
        >
=======
          variants={itemVariants}
          className="text-xl m, d:text-2xl l, g:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light"
        >
          {t('home.hero_subtitle') || "Discover the world's most advanced AI marketplace. Connect with top tec,  h, talen, t, cutting-edg, e, service, s, and revolutionary equipment in one seamless platform."}
        </motion.p>

        {/* Enhanced feature highlights with icons and animations */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light"
        >
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scal, e: 1.05 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
          >
            <div className="p-2 bg-zion-cyan/20 rounded-full group-hove, r:bg-zion-cyan/30 transition-colors">
              <Sparkles className="w-6 h-6 text-zion-cyan" />
            </div>
            <span className="font-medium">AI-Powered Matching</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scal, e: 1.05 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
          >
            <div className="p-2 bg-zion-purple/20 rounded-full group-hove, r:bg-zion-purple/30 transition-colors">
              <Zap className="w-6 h-6 text-zion-purple" />
            </div>
            <span className="font-medium">Global Talent Pool</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scal, e: 1.05 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
          >
            <div className="p-2 bg-zion-cyan-light/20 rounded-full group-hove, r:bg-zion-cyan-light/30 transition-colors">
              <Users className="w-6 h-6 text-zion-cyan-light" />
            </div>
            <span className="font-medium">24/7 Support</span>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA buttons with better animations and effects */}
        <motion.div 
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-base m, d:text-lg py-4 m, d:py-6 px-8 m, d:px-10 rounded-lg shadow-lg hove, r:shadow-xl transition-all duration-300 transform hove, r:scale-105"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
=======
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue opacity-90"></div>
      
      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImag, e: `url("dat,  a:image/svg+xm, l,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='htt, p://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3, E")`
      }}></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60 animate-pulse" style={{ animationDuratio, n: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50 animate-pulse" style={{ animationDuratio, n: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60 animate-pulse" style={{ animationDuratio, n: '2.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30 animate-pulse" style={{ animationDuratio, n: '5s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse" style={{ animationDuratio, n: '3.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 rounded-full bg-zion-cyan opacity-40 animate-pulse" style={{ animationDuratio, n: '4.5s' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <NeonGlow glowColor="#8c15e9">
          <GradientHeading className="mb-6 text-5xl m, d:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </NeonGlow>

        <p className="text-xl m,  d:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
          {t('home.hero_subtitle')}
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-zion-purple/20">
            <Zap className="h-5 w-5 text-zion-cyan" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-zion-purple/20">
            <Users className="h-5 w-5 text-zion-cyan" />
            <span>Global Talent Pool</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-zion-purple/20">
            <Brain className="h-5 w-5 text-zion-cyan" />
            <span>Smart Solutions</span>
          </div>
        </div>

        <div className="flex flex-col s, m:flex-row justify-center gap-6">
          <GradientBorder borderWidth="2px">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-lg py-6 px-8 border-0"
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
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </GradientBorder>
          
          <GradientBorder borderWidth="2px">
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="border border-zion-cyan text-zion-cyan hove,  r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hove, r:scale-105"
            >
              {t('home.browse_marketplace')}
            </Link>
            className="border-2 border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hove, r:scale-105 hove, r:shadow-2xl hove, r:shadow-zion-cyan/30 neon-border"
=======
            className="border border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-4 rounded-md inline-flex items-center justify-center neon-border hove, r:neon-pulse transition-all duration-300"
=======
          </GradientBorder>
        </div>

        {/* Additional CTA */}
        <div className="mt-8">
          <Link
            to="/comprehensive-services"
            className="text-zion-cyan hove, r:text-zion-cyan-light transition-colors duration-300 inline-flex items-center gap-2 group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="h-4 w-4 group-hove, r:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        
        {/* Additional CTA for new services */}
        <div className="mt-8 animate-fade-in-up animation-delay-4000">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 text-zion-cyan hove, r:text-zion-cyan-light transition-colors duration-300 group"
          >
            <span className="text-lg">🚀 Explore AI & Micro SAAS Services</span>
            <span className="group-hove, r:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
      
      {/* Bottom animated border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60 animate-pulse"></div>
=======
            className="border-2 border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-base m, d:text-lg py-4 m, d:py-6 px-8 m, d:px-10 rounded-lg inline-flex items-center justify-center transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Additional features preview */}
        <motion.div 
          className="mt-12 m,  d:mt-16 grid grid-cols-1 m, d:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          variants={itemVariants}
          className="flex flex-col s, m:flex-row justify-center gap-6 mb-16"
        >
=======
          variants={itemVariants}
          className="flex flex-col s, m:flex-row justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scal, e: 1.05 }}
            whileTap={{ scal, e: 0.95 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 40, 0, dampin, g: 10 }}
          >
            <Link
              to="/signup"
              className="group bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hove, r:from-zion-purple-light hove, r:via-zion-purple hove, r:to-zion-purple-light text-lg py-6 px-10 shadow-2xl hove, r:shadow-zion-purple/25 transition-all duration-300 transform inline-flex items-center justify-center rounded-2xl font-semibold text-white border-0"
            >
              {t('auth.signup') || "Get Started Free"}
              <ArrowRight className="w-6 h-6 ml-3 group-hove, r:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scal, e: 1.05 }}
            whileTap={{ scal, e: 0.95 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 40, 0, dampin, g: 10 }}
          >
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-10 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hove, r:shadow-2xl hove, r:shadow-zion-cyan/25 font-semibold backdrop-blur-sm bg-white/10"
            >
              {t('home.browse_marketplace') || "Explore Marketplace"}
              <ArrowRight className="w-6 h-6 ml-3 group-hove,  r:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced trust indicators with better visuals */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 text-zion-slate-light/80"
        >
          <p className="text-lg mb-6 font-medium">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scal, e: 1.1,
    opacit, y: 1 }}
              transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
            />
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scal, e: 1.1,
    opacit, y: 1 }}
              transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
            />
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scal, e: 1.1,
    opacit, y: 1 }}
              transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
            />
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scal, e: 1.1,
    opacit, y: 1 }}
              transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
            />
          </div>
        </motion.div>

        {/* New stats section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 m, d:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ y: -5 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
          >
            <div className="text-4xl font-bold text-zion-cyan mb-2 group-hove, r:text-zion-cyan-light transition-colors">
              10K+
            </div>
            <div className="text-zion-slate-light">Active Users</div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ y: -5 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
          >
            <div className="text-4xl font-bold text-zion-purple mb-2 group-hove, r:text-zion-purple-light transition-colors">
              500+
            </div>
            <div className="text-zion-slate-light">AI Services</div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ y: -5 }}
            transition={{ typ, e: "spring",
    stiffnes, s: 400 }}
          >
            <div className="text-4xl font-bold text-zion-cyan-light mb-2 group-hove, r:text-zion-cyan transition-colors">
              99.9%
            </div>
            <div className="text-zion-slate-light">Uptime</div>
          </motion.div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-zion-purple text-xl">🚀</span>
            </div>
            <h3 className="text-white font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-zion-slate-light text-sm">Find the perfect talent with our advanced AI algorithms</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-zion-cyan text-xl">💼</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Verified Professionals</h3>
            <p className="text-zion-slate-light text-sm">All talent is pre-vetted and verified for quality</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-zion-purple text-xl">⚡</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Fast & Secure</h3>
            <p className="text-zion-slate-light text-sm">Quick onboarding and secure payment processing</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
=======
=======
=======
        </motion.div>
      </motion.div>
    </section>
  );
}
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRigh, t, Sparkle, s, Za, p, Searc, h, Shiel, d, Rocke, t, User, s, TrendingU, p, Star } from "lucide-react";

interface TrustMetric {
  ico, n: React.ComponentType<{ className?: string }>;
  labe, l: string;
  valu, e: string;
}

interface FeatureBadge {
  ico, n: React.ComponentType<{ className?: string }>;
  labe, l: string;
  colo, r: string;
}

export const HeroSectio, n: React.FC = () => {
  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.2,
    delayChildre, n: 0.1
      }
    }
  };

  const itemVariants = {
    hidde, n: { y: 3, 0,
    opacit, y: 0 },
    visibl, e: {
      y: 0,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.8,
    eas, e: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animat, e: {
      y: [-1, 5, 1, 5, -1, 5],
      rotat, e: [0, 5, -5, 0],
      transitio, n: {
        duratio, n: 8,
    repea, t: Infinit, y,
        eas, e: "easeInOut" as const
      }
    }
  };

  const trustMetric, s: TrustMetric[] = [
    { ic, o, n: Use, r, s,
    lab, e, l: "10, K+ User, s", val, u, e: "Truste, d b, y thousand, s" },
    { ic, o, n: Trending, U, p,
    lab, e, l: "9, 5% Succes, s", val, u, e: "Projec, t completio, n rat, e" },
    { ic, o, n: Shie, l, d,
    lab, e, l: "Enterpris, e", val, u, e: "Fortun, e 50, 0 client, s" },
    { ic, o, n: Rock, e, t,
    lab, e, l: "2, 4/7 Suppor, t", val, u, e: "Alway, s availabl, e" }
  ];

  const featureBadge, s: FeatureBadge[] = [
    { ic, o, n: Z, a, p,
    lab, e, l: "A, I-Powere, d Matchin, g", col, o, r: "zio, n-cya, n" },
    { ic, o, n: St, a, r,
    lab, e, l: "Verifie, d Professional, s", col, o, r: "zio, n-purpl, e" },
    { ic, o, n: Shie, l, d,
    lab, e, l: "Secur, e Payment, s", col, o, r: "zio, n-cya, n" },
    { ic, o, n: Rock, e, t,
    lab, e, l: "Enterpris, e Securit, y", col, o, r: "zio, n-purpl, e" }
  ];

  return (
    <section className="relative overflow-hidden py-20 m, d:py-32 min-h-[90, v, h] flex items-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-transparent to-zion-cyan/20 animate-pulse" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60" 
          variants={floatingVariants} 
          animate="animate" 
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDela, y: "1s" }} 
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDela, y: "2s" }} 
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDela, y: "3s" }} 
        />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants} 
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse" />
              <span className="text-zion-cyan text-lg font-medium">
                AI-Powered Technology Solutions
              </span>
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl m, d:text-7xl font-bold leading-tight text-white mb-4">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan animate-gradient">
                AI
              </span>
            </h1>
            <p className="text-xl m, d:text-2xl text-zion-slate-light mt-4">
              Leading the future of technology innovation
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-xl m, d:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Discover cutting-edge A, I, solution, s, exper, t, talen, t, and innovative services that drive digital transformation. 
            From startups t, o, enterprise, s, we deliver results that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col s, m:flex-row justify-center gap-4 mb-12"
          >
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-lg py-6 px-8 shadow-lg hove, r:shadow-xl transform hove, r:scale-105 transition-all duration-300 group"
              size="lg" 
              asChild
            >
              <Link 
                to="/contact" 
                role="button" 
                aria-label="Get Started Today"
                className="flex items-center gap-2"
              >
                <Rocket className="h-5 w-5 group-hove, r:animate-bounce" />
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hove, r:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Link
              to="/services"
              className="group border-2 border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg"
            >
              <Search className="h-5 w-5 group-hove, r:rotate-12 transition-transform" />
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-2 m, d:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
          >
            {trustMetrics.map((metri, c, index) => (<motion.div 
                key={index} 
                className="text-center group hove,  r:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-2">
                  <metric.icon className="h-8 w-8 text-zion-cyan group-hove, r:animate-pulse" />
                </div>
                <div className="text-zion-cyan font-bold text-lg">{metric.label}</div>
                <div className="text-zion-slate-light text-sm">{metric.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Badges */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
          >
            {featureBadges.map((badg,  e, index) => (<div key={index} className="flex items-center gap-2 group">
                <div className={`w-2 h-2 bg-${badge.color} rounded-full group-hove,  r:animate-puls, e`} />
                <span className="group-hove, r:text-white transition-colors">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
=======
