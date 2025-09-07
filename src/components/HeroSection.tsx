
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Users, Brain, Sparkles, Star, TrendingUp, Shield } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  // const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
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
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
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
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-zion-cyan-light opacity-70"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-purple opacity-40"
          variants={floatingVariants}
          animate="animate"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading with enhanced typography */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              {t("hero.title", "Transform Your Business with AI")}
            </span>
          </motion.h1>

          {/* Subtitle with better readability */}
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("hero.subtitle", "Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services. Accelerate your growth with Zion Tech Group.")}
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contact">
                <Zap className="mr-2 h-5 w-5" />
                {t("hero.get_started", "Get Started")}
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/services">
                <Users className="mr-2 h-5 w-5" />
                {t("hero.explore_services", "Explore Services")}
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-zion-cyan" />
              <span className="text-sm font-medium">500+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-zion-purple" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-zion-cyan-light" />
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
