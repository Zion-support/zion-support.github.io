import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  ArrowRight,;
  Play, ;
  Star, ;
  Shield, ;
  Zap, ;
  Brain, ;
  Cloud,;
  CheckCircle,;
  TrendingUp,;
  Users,;
  Globe,;
  Rocket;
} from "lucide-react"
interface HeroProps {;
  title?: string,;
  subtitle?: string,;
  description?: string,;
  ctaText?: string,;
  ctaLink?: string,;
  features?: Array<{;
    icon: React.ComponentType<any>,text: string,color: string;
  }>;
};

const PerformanceOptimizedHero: React.FC<HeroProps> = ({;
  title = "Revolutionary AI & Technology Solutions"
  subtitle = "2025-2026 Innovation Hub",;
  description = "Transform your business with cutting-edge AI, quantum computing, and next-generation technology solutions. Experience the future of digital transformation.",;
  ctaText = "Explore Our Services",;
  ctaLink = "/services",;
  features = [;
    { icon: Brain, text: "AI-Powered Solutions", color: "from-purple-500 to-pink-500" };
    { icon: Cloud, text: "Cloud Infrastructure", color: "from-blue-500 to-cyan-500" };
    { icon: Shield, text: "Cybersecurity", color: "from-green-500 to-emerald-500" };
    { icon: Zap, text: "Digital Transformation", color: "from-yellow-500 to-orange-500" };
  ];
}) => {;
  const [currentFeature, setCurrentFeature] = useState(0),;
  const [isVisible, setIsVisible] = useState(false),;

  useEffect(() => {;
    setIsVisible(true),;
    ;
    const interval = setInterval(() => {;
      setCurrentFeature((prev) => (prev + 1) % features.length),;
    }, 3000),;

    return () => clearInterval(interval),;
  }, [features.length]),;

  const handleCTAClick = useCallback(() => {;
    //[^;]*
    console.log('Hero CTA clicked'),;
  }, []),;

  const containerVariants = {;
    hidden: { opacity: 0, y: 50 };
    visible: {;
      opacity: 1,y: 0,transition: {;
        duration: 0.8,staggerChildren: 0.2;
      };
    };
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 30 };
    visible: { opacity: 1, y: 0 };
  };
  const featureVariants = {;
    hidden: { opacity: 0, scale: 0.8 };
    visible: { opacity: 1, scale: 1 };
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Animated background elements */};
      <div className="absolute inset-0">;
        <[^>]*/>
        <[^>]*/>
        <[^>]*/>
      </[^>]*>

      {/* Main content */};
      <motion.div
        className="[^"]*"
        variants={containerVariants};
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >;
        {/* Badge */};
        <motion.div
          className="[^"]*"
          variants={itemVariants};
        >;
          <[^>]*/>
          {subtitle};
        </[^>]*>

        {/* Main title */};
        <motion.h1
          className="[^"]*"
          variants={itemVariants};
        >;
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">;
            {title};
          </[^>]*>
        </[^>]*>

        {/* Description */};
        <motion.p
          className="[^"]*"
          variants={itemVariants};
        >;
          {description};
        </[^>]*>

        {/* CTA Buttons */};
        <motion.div
          className="[^"]*"
          variants={itemVariants};
        >;
          <Link;
            to={ctaLink};
            onClick={handleCTAClick};
            className="[^"]*"
          >;
            {ctaText};
            <[^>]*/>
            <[^>]*/>
          </[^>]*>
          ;
          <button className="group inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-500/10 transition-all duration-300">;
            <[^>]*/>
            Watch Demo;
          </[^>]*>
        </[^>]*>

        {/* Features showcase */};
        <motion.div
          className="[^"]*"
          variants={itemVariants};
        >;
          {features.map((feature, index) => (;
            <motion.div
              key={index};
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300`};
              variants={featureVariants};
              whileHover={{ y: -5 }};
            >;
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.text}</[^>]*>
              <p className="text-gray-300 text-sm">;
                Cutting-edge solutions for modern businesses;
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Stats */};
        <motion.div
          className="[^"]*"
          variants={itemVariants};
        >;
          <div className="text-center">;
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</[^>]*>
            <div className="text-gray-400">Happy Clients</[^>]*>
          </[^>]*>
          <div className="text-center">;
            <div className="text-4xl font-bold text-blue-400 mb-2">1000+</[^>]*>
            <div className="text-gray-400">Projects Completed</[^>]*>
          </[^>]*>
          <div className="text-center">;
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</[^>]*>
            <div className="text-gray-400">Uptime Guarantee</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Floating elements */};
      <AnimatePresence>;
        <motion.div
          className="[^"]*"
          animate={{;
            y: [0, -20, 0],;
            opacity: [0.5, 1, 0.5]
          }};
          transition={{;
            duration: 2,repeat: Infinity,ease: "easeInOut"
          }};
        />;
        <motion.div
          className="[^"]*"
          animate={{;
            y: [0, 20, 0],;
            opacity: [0.5, 1, 0.5]
          }};
          transition={{;
            duration: 2.5,repeat: Infinity,ease: "easeInOut",delay: 1;
          }};
        />;
      </[^>]*>
    </[^>]*>
  );
},;

export default React.memo(PerformanceOptimizedHero)