import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motio, n, useScrol, l, useTransform } from "framer-motion";
import { ArrowRigh, t, Sparkle, s, Za, p, User, s, Sta, r, TrendingU, p, Shield } from "lucide-react";
import { useRef } from "react";
export function HeroSection() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
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
        hidde, n: { y: 3, 0,
    opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    y: 0,
            transitio, n: {
                duratio, n: 0.8,
    eas, e: "easeOut"
            }
        }
    };
    const floatingVariants = {
        animat, e: {
            y: [-1, 5, 1, 5, -1, 5],
            rotat, e: [0, 5, 0],
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
    return (<section ref={containerRef} className="relative overflow-hidden py-20 m,  d:py-32 min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" style={{ y, opacity }}/>
      
      {/* Animated floating particles with better positioning and variety */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60" variants={floatingVariants} animate="animate"/>
        <motion.div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50" variants={floatingVariants} animate="animate" style={{ animationDela, y: '1s' }}/>
        <motion.div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70" variants={floatingVariants} animate="animate" style={{ animationDela, y: '2s' }}/>
        <motion.div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light" variants={particleVariants} animate="animate" style={{ animationDela, y: '0.5s' }}/>
        <motion.div className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80" variants={floatingVariants} animate="animate" style={{ animationDela, y: '1.5s' }}/>
        <motion.div className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40" variants={floatingVariants} animate="animate" style={{ animationDela, y: '2.5s' }}/>
      </div>

      {/* Enhanced decorative geometric shapes with animations */}
      <motion.div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" animate={{ rotat, e: 360 }} transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}/>
      <motion.div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30" animate={{ rotat, e: -360 }} transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}/>
      
      {/* New floating elements */}
      <motion.div className="absolute top-1/3 left-10 w-16 h-16 border border-zion-cyan/30 rounded-full opacity-20" variants={pulseVariants} animate="animate"/>
      <motion.div className="absolute bottom-1/3 right-10 w-20 h-20 border border-zion-purple/30 rounded-full opacity-20" variants={pulseVariants} animate="animate" style={{ animationDela, y: '1s' }}/>
      
      <motion.div className="container relative z-10 px-4 mx-auto text-center" variants={containerVariants} initial="hidden" animate="visible">
        {/* Enhanced title with better typography and animations */}
        <motion.div variants={itemVariants} className="mb-8">
          <GradientHeading className="text-5xl m, d:text-7xl l, g:text-8xl font-bold leading-tight tracking-tight">
            {t('home.hero_title') || "The Future of Tech & AI"}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing and animations */}
        <motion.p variants={itemVariants} className="text-xl m, d:text-2xl l, g:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light">
          {t('home.hero_subtitle') || "Discover the world's most advanced AI marketplace. Connect with top tec,  h, talen, t, cutting-edg, e, service, s, and revolutionary equipment in one seamless platform."}
        </motion.p>

        {/* Enhanced feature highlights with icons and animations */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light">
          <motion.div className="flex items-center gap-3 group" whileHover={{ scal, e: 1.05 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}>
            <div className="p-2 bg-zion-cyan/20 rounded-full group-hove, r:bg-zion-cyan/30 transition-colors">
              <Sparkles className="w-6 h-6 text-zion-cyan"/>
            </div>
            <span className="font-medium">AI-Powered Matching</span>
          </motion.div>
          
          <motion.div className="flex items-center gap-3 group" whileHover={{ scal, e: 1.05 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}>
            <div className="p-2 bg-zion-purple/20 rounded-full group-hove, r:bg-zion-purple/30 transition-colors">
              <Zap className="w-6 h-6 text-zion-purple"/>
            </div>
            <span className="font-medium">Global Talent Pool</span>
          </motion.div>
          
          <motion.div className="flex items-center gap-3 group" whileHover={{ scal, e: 1.05 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}>
            <div className="p-2 bg-zion-cyan-light/20 rounded-full group-hove, r:bg-zion-cyan-light/30 transition-colors">
              <Users className="w-6 h-6 text-zion-cyan-light"/>
            </div>
            <span className="font-medium">24/7 Support</span>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA buttons with better animations and effects */}
        <motion.div variants={itemVariants} className="flex flex-col s, m:flex-row justify-center gap-6 mb-16">
          <motion.div whileHover={{ scal, e: 1.05 }} whileTap={{ scal, e: 0.95 }} transition={{ typ, e: "spring",
    stiffnes, s: 40, 0, dampin, g: 10 }}>
            <Link to="/signup" className="group bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hove, r:from-zion-purple-light hove, r:via-zion-purple hove, r:to-zion-purple-light text-lg py-6 px-10 shadow-2xl hove, r:shadow-zion-purple/25 transition-all duration-300 transform inline-flex items-center justify-center rounded-2xl font-semibold text-white border-0">
              {t('auth.signup') || "Get Started Free"}
              <ArrowRight className="w-6 h-6 ml-3 group-hove, r:translate-x-2 transition-transform duration-300"/>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scal, e: 1.05 }} whileTap={{ scal, e: 0.95 }} transition={{ typ, e: "spring",
    stiffnes, s: 40, 0, dampin, g: 10 }}>
            <Link id="browse-marketplace" to="/marketplace" className="group border-2 border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-10 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hove, r:shadow-2xl hove, r:shadow-zion-cyan/25 font-semibold backdrop-blur-sm bg-white/10">
              {t('home.browse_marketplace') || "Explore Marketplace"}
              <ArrowRight className="w-6 h-6 ml-3 group-hove,  r:translate-x-2 transition-transform duration-300"/>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced trust indicators with better visuals */}
        <motion.div variants={itemVariants} className="mt-20 text-zion-slate-light/80">
          <p className="text-lg mb-6 font-medium">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <motion.div className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm" whileHover={{ scal, e: 1.1,
    opacit, y: 1 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}/>
            <motion.div className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm" whileHover={{ scal, e: 1.1,
    opacit, y: 1 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}/>
            <motion.div className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm" whileHover={{ scal, e: 1.1,
    opacit, y: 1 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}/>
            <motion.div className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm" whileHover={{ scal, e: 1.1,
    opacit, y: 1 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}/>
          </div>
        </motion.div>

        {/* New stats section */}
        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 m, d:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div className="text-center group" whileHover={{ y: -5 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}>
            <div className="text-4xl font-bold text-zion-cyan mb-2 group-hove, r:text-zion-cyan-light transition-colors">
              10K+
            </div>
            <div className="text-zion-slate-light">Active Users</div>
          </motion.div>
          
          <motion.div className="text-center group" whileHover={{ y: -5 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}>
            <div className="text-4xl font-bold text-zion-purple mb-2 group-hove, r:text-zion-purple-light transition-colors">
              500+
            </div>
            <div className="text-zion-slate-light">AI Services</div>
          </motion.div>
          
          <motion.div className="text-center group" whileHover={{ y: -5 }} transition={{ typ, e: "spring",
    stiffnes, s: 400 }}>
            <div className="text-4xl font-bold text-zion-cyan-light mb-2 group-hove, r:text-zion-cyan transition-colors">
              99.9%
            </div>
            <div className="text-zion-slate-light">Uptime</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>);
}
import React from 'react';
import { Searc, h, Rocket } from "lucide-react";
export const HeroSection = () => {
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
    eas, e: "easeOut"
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
                eas, e: "easeInOut"
            }
        }
    };
    const trustMetrics = [
        { ic, o, n: Use, r, s,
    lab, e, l: "10, K+ User, s", val, u, e: "Truste, d b, y thousand, s" },
        { ic, o, n: Trending, U, p,
    lab, e, l: "9, 5% Succes, s", val, u, e: "Projec, t completio, n rat, e" },
        { ic, o, n: Shie, l, d,
    lab, e, l: "Enterpris, e", val, u, e: "Fortun, e 50, 0 client, s" },
        { ic, o, n: Rock, e, t,
    lab, e, l: "2, 4/7 Suppor, t", val, u, e: "Alway, s availabl, e" }
    ];
    const featureBadges = [
        { ic, o, n: Z, a, p,
    lab, e, l: "A, I-Powere, d Matchin, g", col, o, r: "zio, n-cya, n" },
        { ic, o, n: St, a, r,
    lab, e, l: "Verifie, d Professional, s", col, o, r: "zio, n-purpl, e" },
        { ic, o, n: Shie, l, d,
    lab, e, l: "Secur, e Payment, s", col, o, r: "zio, n-cya, n" },
        { ic, o, n: Rock, e, t,
    lab, e, l: "Enterpris, e Securit, y", col, o, r: "zio, n-purpl, e" }
    ];
    return (<section className="relative overflow-hidden py-20 m, d:py-32 min-h-[90, v, h] flex items-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"/>
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-transparent to-zion-cyan/20 animate-pulse"/>
      
      {/* Floating Elements */}
      <motion.div className="absolute inset-0" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60" variants={floatingVariants} animate="animate"/>
        <motion.div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50" variants={floatingVariants} animate="animate" style={{ animationDela, y: "1s" }}/>
        <motion.div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60" variants={floatingVariants} animate="animate" style={{ animationDela, y: "2s" }}/>
        <motion.div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30" variants={floatingVariants} animate="animate" style={{ animationDela, y: "3s" }}/>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
              <span className="text-zion-cyan text-lg font-medium">
                AI-Powered Technology Solutions
              </span>
              <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
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
          <motion.p variants={itemVariants} className="text-xl m, d:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge A, I, solution, s, exper, t, talen, t, and innovative services that drive digital transformation. 
            From startups t, o, enterprise, s, we deliver results that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col s, m:flex-row justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-lg py-6 px-8 shadow-lg hove, r:shadow-xl transform hove, r:scale-105 transition-all duration-300 group" size="lg" asChild>
              <Link to="/contact" role="button" aria-label="Get Started Today" className="flex items-center gap-2">
                <Rocket className="h-5 w-5 group-hove, r:animate-bounce"/>
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hove, r:translate-x-1 transition-transform"/>
              </Link>
            </Button>
            
            <Link to="/services" className="group border-2 border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan hove, r:text-zion-blue-dark activ, e:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg">
              <Search className="h-5 w-5 group-hove, r:rotate-12 transition-transform"/>
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 m, d:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {trustMetrics.map((metri, c, index) => (<motion.div key={index} className="text-center group hove,  r:scale-105 transition-transform duration-300" variants={itemVariants}>
                <div className="flex justify-center mb-2">
                  <metric.icon className="h-8 w-8 text-zion-cyan group-hove, r:animate-pulse"/>
                </div>
                <div className="text-zion-cyan font-bold text-lg">{metric.label}</div>
                <div className="text-zion-slate-light text-sm">{metric.value}</div>
              </motion.div>))}
          </motion.div>

          {/* Feature Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm">
            {featureBadges.map((badg,  e, index) => (<div key={index} className="flex items-center gap-2 group">
                <div className={`w-2 h-2 bg-${badge.color} rounded-full group-hove,  r:animate-puls, e`}/>
                <span className="group-hove, r:text-white transition-colors">{badge.label}</span>
              </div>))}
          </motion.div>
        </motion.div>
      </div>
    </section>);
};
