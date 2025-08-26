import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Rocket, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
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
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
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
    <section ref={containerRef} className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" 
        style={{ y, opacity }}
      />
      
      {/* Animated floating particles */}
      <motion.div className="absolute inset-0" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60" 
          variants={floatingVariants} 
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-60" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30" 
          variants={floatingVariants} 
          animate="animate" 
          style={{ animationDelay: "3s" }}
        />
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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-4">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan animate-gradient">
                AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mt-4">
              {t('home.hero_subtitle') || "Discover the world's most advanced AI marketplace. Connect with top tech talent, cutting-edge services, and revolutionary equipment in one seamless platform."}
            </p>
          </motion.div>

          {/* Enhanced feature highlights with icons and animations */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light">
            <motion.div 
              className="flex items-center gap-3 group" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="p-2 bg-zion-cyan/20 rounded-full group-hover:bg-zion-cyan/30 transition-colors">
                <Sparkles className="w-6 h-6 text-zion-cyan"/>
              </div>
              <span className="font-medium">AI-Powered Solutions</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 group" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="p-2 bg-zion-purple/20 rounded-full group-hover:bg-zion-purple/30 transition-colors">
                <Zap className="w-6 h-6 text-zion-purple"/>
              </div>
              <span className="font-medium">Expert Talent</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 group" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="p-2 bg-zion-cyan/20 rounded-full group-hover:bg-zion-cyan/30 transition-colors">
                <Shield className="w-6 h-6 text-zion-cyan"/>
              </div>
              <span className="font-medium">Secure Platform</span>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA buttons with better animations */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform transition-all duration-300 group" 
                size="lg" 
                asChild
              >
                <Link to="/contact" role="button" aria-label="Get Started Today" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg py-6 px-8 transition-all duration-300" 
                size="lg" 
                asChild
              >
                <Link to="/services" role="button" aria-label="Explore Services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with enhanced animations */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "10K+ Users", value: "Trusted by thousands" },
              { icon: TrendingUp, label: "95% Success", value: "Project completion rate" },
              { icon: Shield, label: "Enterprise", value: "Fortune 500 clients" },
              { icon: Star, label: "24/7 Support", value: "Always available" }
            ].map((metric, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex justify-center mb-2">
                  <metric.icon className="w-8 h-8 text-zion-cyan group-hover:text-zion-purple transition-colors"/>
                </div>
                <div className="text-white font-bold text-lg mb-1">{metric.label}</div>
                <div className="text-zion-slate-light text-sm">{metric.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
