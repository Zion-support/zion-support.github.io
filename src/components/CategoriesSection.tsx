
<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
=======
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Star, Zap, Globe, Shield } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-8 h-8" />,
    link: "/services",
<<<<<<< HEAD
    color: "from-purple-500 to-indigo-600",
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Settings, 
  Code, 
  Globe, 
  Zap, 
  Shield,
  LinkIcon,
  Brain,
  Rocket,
  Target,
  Star,
  Lightbulb
} from 'lucide-react';
import { GradientHeading } from './GradientHeading';

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    icon: <Brain className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    link: "/ai-services",
    features: ["Neural Networks", "Computer Vision", "NLP", "Predictive Analytics"]
  },
  {
    title: "Micro SAAS",
    description: "Innovative software solutions and business automation tools",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/micro-saas-services",
    color: "from-emerald-500 to-green-600",
    features: ["AI Solutions", "Business Automation", "Cloud Services", "Enterprise Tools"]
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    borderColor: "border-zion-purple/20",
    features: ["24/7 Support", "Global Coverage", "Expert Teams"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Micro SAAS",
    description: "AI-powered tools, IT services, and business automation solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/micro-saas-services",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-8 h-8" />,
    link: "/talent",
<<<<<<< HEAD
    color: "from-cyan-500 to-blue-600",
<<<<<<< HEAD
=======
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    borderColor: "border-zion-cyan/20",
    features: ["Vetted Experts", "AI Matching", "Instant Connect"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-8 h-8" />,
    link: "/equipment",
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    borderColor: "border-zion-blue/20",
    features: ["Premium Hardware", "Flexible Rental", "Global Shipping"]
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-8 h-8" />,
    link: "/category/innovation",
<<<<<<< HEAD
    color: "from-emerald-500 to-green-600",
=======
    features: ["AI Experts", "Developers", "Tech Specialists", "Consultants"]
=======
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/10",
    borderColor: "border-zion-purple-light/20",
    features: ["Latest Tech", "AI Solutions", "Future Ready"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Mobile Development",
    description: "iOS and Android applications",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    link: "/expanded-services?category=mobile-development",
    features: ["Native Apps", "Cross-Platform", "UI/UX", "App Store Optimization"]
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment solutions",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/expanded-services?category=cloud-devops",
    features: ["AWS", "Docker", "Kubernetes", "CI/CD"]
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
  },
  {
    title: "Cybersecurity",
    description: "Protection and security services",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    link: "/expanded-services?category=cybersecurity",
    features: ["Penetration Testing", "Security Audits", "Incident Response", "Compliance"]
  },
  {
    title: "Data Science",
    description: "Analytics and insights solutions",
    icon: <Target className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    link: "/expanded-services?category=data-science",
    features: ["Big Data", "Business Intelligence", "Data Visualization", "Statistical Analysis"]
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions and smart contracts",
    icon: <LinkIcon className="w-8 h-8" />,
    color: "from-teal-500 to-blue-600",
    link: "/expanded-services?category=blockchain-web3",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Enterprise Solutions",
    description: "Large-scale business applications",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    link: "/expanded-services?category=enterprise",
    features: ["ERP Systems", "CRM", "Workflow Automation", "Integration"]
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
<<<<<<< HEAD
    link: "/it-onsite-services"
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    title: "Comprehensive Services",
    link: "/comprehensive-services"
=======
    title: "Services Overview",
    link: "/services-overview"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
  },
  {
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
    title: "AI Services",
    link: "/ai-services"
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    title: "Cybersecurity Services",
    link: "/cybersecurity-services"
  },
  {
    title: "Micro SAAS",
    link: "/micro-saas"
  },
  {
    title: "All Services",
    link: "/comprehensive-services"
  },
  {
    title: "Pricing",
    link: "/services-pricing"
  },
  {
    title: "Enterprise Solutions",
    link: "/enterprise-solutions"
  },
  {
    title: "Innovative Services",
    link: "/innovative-services"
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
=======
    title: "Blockchain Solutions",
    link: "/blockchain-services"
  },
  {
    title: "IoT Platform",
    link: "/iot-services"
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity-services"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
=======
    title: "Enterprise Services",
    link: "/enhanced-services"
  },
  {
    title: "View Pricing",
    link: "/pricing"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
    link: "/it-onsite-services",
    icon: <Globe className="w-5 h-5" />,
    description: "Global 24/7 support"
  },
  {
    title: "AI Consulting",
    link: "/services/ai-consulting",
    icon: <Zap className="w-5 h-5" />,
    description: "Expert AI guidance"
  },
  {
    title: "Tech Training",
    link: "/services/training",
    icon: <Star className="w-5 h-5" />,
    description: "Professional development"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  }
];

const serviceCategories = [
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and deployment automation",
    icon: <Cloud className="w-8 h-8" />,
    link: "/cloud-services",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Data & Analytics",
    description: "Big data processing, analytics, and business intelligence",
    icon: <Database className="w-8 h-8" />,
    link: "/data-analytics",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    icon: <Cpu className="w-8 h-8" />,
    link: "/ai-solutions",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Cybersecurity",
    description: "Advanced threat protection and security compliance",
    icon: <LinkIcon className="w-8 h-8" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "IoT & Edge Computing",
    description: "Connected devices and edge processing solutions",
    icon: <TrendingUp className="w-8 h-8" />,
    link: "/iot-solutions",
    color: "from-orange-500 to-yellow-600",
  },
  {
    title: "Blockchain",
    description: "Distributed ledger technology and smart contracts",
    icon: <Sparkles className="w-8 h-8" />,
    link: "/blockchain",
    color: "from-indigo-500 to-purple-600",
  },
=======
    title: "AI Chatbot Builder",
    link: "/micro-saas-services#ai-chatbot-builder"
  },
  {
    title: "Cloud Migration Pro",
    link: "/micro-saas-services#cloud-migration-pro"
  },
  {
    title: "Cybersecurity Suite",
    link: "/micro-saas-services#cybersecurity-suite"
  }
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
];

export function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Categories
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover comprehensive solutions across all major technology domains
          </p>
        </motion.div>

        {/* Main Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
<<<<<<< HEAD
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
=======
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block">
                <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]">
=======
export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
=======
import React from 'react';
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Shield, Globe, Database, Network, Zap, Leaf, Eye, CreditCard, ArrowRight, TrendingUp, Sparkles, Clock, Rocket, Target, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Enhanced Services",
    description: "AI, cybersecurity, cloud, and specialized IT solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-purple-500 to-indigo-600",
    features: ["AI Solutions", "Cybersecurity", "Cloud Services", "Data Analytics"]
  },
  {
    title: "Services Pricing",
    description: "Compare pricing and ROI for all our services",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services-pricing",
    color: "from-green-500 to-emerald-600",
    features: ["Transparent Pricing", "ROI Calculator", "Custom Quotes", "Volume Discounts"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and threat protection services",
    icon: <Shield className="w-10 h-10" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
    features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    icon: <Globe className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-blue-500 to-cyan-600",
    features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Data Analytics",
    description: "Big data processing and business intelligence",
    icon: <Database className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-emerald-500 to-green-600",
    features: ["Big Data", "Business Intelligence", "Data Visualization", "Predictive Models"]
  },
];

const specialServices = [
  {
    title: "Comprehensive Services",
    link: "/enhanced-services",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    title: "Services Pricing",
    link: "/services-pricing",
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    title: "AI Services",
    link: "/ai-services",
    icon: <Brain className="w-4 h-4" />
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity-services",
    icon: <Shield className="w-4 h-4" />
  },
  {
    title: "Cloud Solutions",
    link: "/expanded-services",
    icon: <Globe className="w-4 h-4" />
  },
  {
    title: "Advanced Technology",
    link: "/expanded-services",
    icon: <Zap className="w-4 h-4" />
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600",
    features: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600",
    features: ["Zero Trust", "Threat Intelligence", "SOC Services"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600",
    features: ["Multi-Cloud", "Infrastructure as Code", "Monitoring"]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Big data, BI, predictive analytics",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics"]
  },
  {
    title: "IoT & Edge Computing",
    icon: <Network className="w-6 h-6" />,
    description: "Connected devices, real-time processing",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-indigo-500 to-purple-600",
    features: ["IoT Platforms", "Edge Computing", "Sensor Networks"]
  },
  {
    title: "Blockchain & Web3",
    icon: <Zap className="w-6 h-6" />,
    description: "Smart contracts, decentralized solutions",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-yellow-500 to-orange-600",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Quantum Computing",
    icon: <Leaf className="w-6 h-6" />,
    description: "Quantum algorithms, optimization",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-teal-500 to-blue-600",
    features: ["Quantum Algorithms", "Optimization", "Simulation"]
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Immersive experiences, virtual worlds",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-pink-500 to-rose-600",
    features: ["Virtual Reality", "Augmented Reality", "3D Modeling"]
  },
  {
    title: "FinTech & Digital Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600",
    features: ["Digital Banking", "Payment Systems", "Lending Platforms"]
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Pricing & Plans",
    link: "/pricing"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
  className?: string;
}

export function CategoriesSection({ showTitle = true, className = "" }: CategoriesSectionProps) {
  return (
    <section className={`bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white py-16 relative overflow-hidden ${className}`}>
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zion-cyan/5 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-zion-cyan/20 rotate-45 opacity-30 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-zion-purple/20 rounded-full opacity-25 animate-bounce" style={{ animationDelay: "3s" }}></div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
<<<<<<< HEAD
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientHeading className="mb-4">Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation. 
              Everything you need to succeed in the digital age.
=======
    <section className="py-20 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue via-zion-slate to-zion-purple-dark"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading className="text-4xl md:text-5xl">Explore Categories</GradientHeading>
            <p className="text-zion-cyan text-xl mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
            </p>
          </motion.div>
        )}
        
<<<<<<< HEAD
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className={`rounded-xl overflow-hidden h-full border ${category.borderColor} ${category.bgColor} p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20`}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
<<<<<<< HEAD
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                        <Star className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-medium">Explore</span>
                    <div className="w-8 h-8 rounded-full bg-zion-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-4 h-4 text-zion-cyan" />
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              <p className="text-zion-slate-light text-sm mb-4">{category.description}</p>
              <Link 
                to={category.link}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
              >
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD

        {/* Service Categories */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Specialized Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-md p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:bg-white/10 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-zion-purple/20">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
<<<<<<< HEAD
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access Links */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link 
                  to={service.link}
                  className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                >
                  <span className="text-zion-slate-light group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
=======
=======
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">{category.title}</h3>
                <p className="text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">{category.description}</p>
=======
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-zion-cyan" />
              <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Explore Categories</span>
              <Sparkles className="w-7 h-7 text-zion-cyan" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Discover Our Ecosystem</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive tech services, talent, equipment, and innovation solutions
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark/90">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">{category.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">{category.description}</p>
                
                {/* Feature highlights */}
                <div className="mb-4 space-y-2">
                  {category.features?.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
              </div>
            </Link>
          ))}
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/comprehensive-services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <Rocket className="w-5 h-5" />
          </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">{category.description}</p>
                  
                  {/* Feature tags */}
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
=======

        {/* Advanced Technology Services Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-zion-purple" />
              <h3 className="text-2xl font-bold text-white">Advanced Technology Services</h3>
              <Rocket className="w-6 h-6 text-zion-purple" />
            </div>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Cutting-edge micro SAAS solutions and professional IT services designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {advancedCategories.map((category) => (
              <Link 
                key={category.title}
                to={category.link}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden border border-zion-blue-light bg-zion-blue-dark/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark/80">
                  <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2 group-hover:text-zion-cyan transition-colors duration-300">{category.title}</h4>
                  <p className="text-zion-slate-light text-xs leading-relaxed mb-3">{category.description}</p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-1">
                    {category.features?.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-zion-cyan/70">
                        <Star className="w-2 h-2 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/expanded-services">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                Explore All Advanced Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
<<<<<<< HEAD
                className="group px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 flex items-center gap-3 hover:scale-105"
              >
                <span className="text-zion-purple-light group-hover:text-zion-purple transition-colors">
                  {service.icon}
                </span>
                <div className="text-center">
                  <div className="font-semibold">{service.title}</div>
                  <div className="text-xs text-zion-slate-light">{service.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors pb-1 hover:text-zion-cyan-light"
          >
            <span className="font-medium">View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
        </motion.div>
=======
                className="px-6 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/40 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              >
                {service.icon}
                {service.title}
              </Link>
            ))}
            <Link 
              to="/services-pricing"
              className="px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              View Pricing
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/expanded-services" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors hover:text-zion-cyan-light group flex items-center gap-2"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      </div>
    </section>
  );
}
