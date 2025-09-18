import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Users, 
  Star, 
  TrendingUp, 
  Shield,
  Rocket 
} from 'lucide-react';

const HeroSection = () => {
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
      rotate: [0, 5, 0],
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

  const trustMetrics = [
    { icon: Users, label: "10K+ Users", value: "Trusted by thousands" },
    { icon: TrendingUp, label: "95% Success", value: "Project completion rate" },
    { icon: Shield, label: "Enterprise", value: "Fortune 500 clients" },
    { icon: Rocket, label: "24/7 Support", value: "Always available" }
  ];

  const featureBadges = [
    { icon: Zap, label: "AI-Powered Matching", color: "zion-cyan" },
    { icon: Star, label: "Verified Professionals", color: "zion-purple" },
    { icon: Shield, label: "Secure Payments", color: "zion-cyan" },
    { icon: Rocket, label: "Enterprise Security", color: "zion-purple" }
  ];

const HeroSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">HeroSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default HeroSection;
