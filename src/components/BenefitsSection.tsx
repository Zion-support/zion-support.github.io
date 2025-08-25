<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
<<<<<<< HEAD
import { Bot, Clock, Globe, TrendingDown, Zap, Shield, Users, Award } from "lucide-react";
=======
import { GradientHeading } from "./GradientHeading";
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
=======
import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Sparkles, Shield, Zap, Users, CheckCircle, Star, Award, Rocket } from "lucide-react";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
import { motion } from "framer-motion";
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
import { Bot, Clock, Globe, TrendingDown, Shield, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <Bot className="w-10 h-10" />,
    color: "from-zion-purple to-zion-purple-dark",
    stats: "95% Match Rate"
=======
    icon: <Bot className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    features: ["Smart Algorithms", "Instant Results", "Perfect Matches"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Global Network",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
<<<<<<< HEAD
    icon: <Globe className="w-10 h-10" />,
    color: "from-zion-cyan to-zion-blue",
    stats: "150+ Countries"
=======
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    features: ["150+ Countries", "Local Expertise", "Global Network"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
=======
    icon: <Bot className="w-10 h-10" />,
    color: "from-zion-purple via-zion-purple-light to-zion-purple-dark",
    bgColor: "bg-gradient-to-br from-zion-purple/10 via-zion-purple-light/5 to-zion-purple-dark/10",
    borderColor: "border-zion-purple/30",
    stats: "95% Match Rate",
    features: ["Machine Learning", "Smart Recommendations", "Instant Results"]
  },
  {
    title: "Global Talent Network",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-10 h-10" />,
    color: "from-zion-cyan via-zion-cyan-light to-zion-cyan-dark",
    bgColor: "bg-gradient-to-br from-zion-cyan/10 via-zion-cyan-light/5 to-zion-cyan-dark/10",
    borderColor: "border-zion-cyan/30",
    stats: "150+ Countries",
    features: ["Worldwide Coverage", "Local Expertise", "Cultural Understanding"]
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  },
  {
    title: "24/7 Premium Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <Clock className="w-10 h-10" />,
    color: "from-zion-blue to-zion-blue-dark",
    stats: "<2min Response"
=======
    icon: <Clock className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    features: ["Always Available", "Expert Team", "Instant Response"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
=======
    icon: <Clock className="w-10 h-10" />,
    color: "from-emerald-500 via-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    stats: "< 2min Response",
    features: ["Instant Chat", "Expert Team", "Priority Handling"]
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  },
  {
    title: "Cost Optimization",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <TrendingDown className="w-10 h-10" />,
    color: "from-zion-cyan-light to-zion-cyan",
    stats: "40% Savings"
=======
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/10",
    features: ["40% Savings", "Direct Connect", "No Hidden Fees"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Quality Assurance",
    description: "Every service provider and product is thoroughly vetted and quality-tested to ensure you receive only the best solutions.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    features: ["Background Checks", "Portfolio Reviews", "Client Feedback"]
  },
  {
    title: "Community Network",
    description: "Join a thriving community of tech professionals, share knowledge, and collaborate on innovative projects.",
    icon: <Users className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    features: ["Expert Forums", "Networking Events", "Knowledge Sharing"]
=======
    icon: <TrendingDown className="w-10 h-10" />,
    color: "from-amber-500 via-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10",
    borderColor: "border-amber-500/30",
    stats: "40% Savings",
    features: ["Direct Pricing", "No Hidden Fees", "Volume Discounts"]
  },
];

const additionalBenefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "10K+ Users",
    description: "Trusted by leading companies"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "99.9% Uptime",
    description: "Reliable service guarantee"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "ISO Certified",
    description: "International quality standards"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  }
];
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276

const stats = [
  { number: "50K+", label: "Happy Clients" },
  { number: "100K+", label: "Projects Completed" },
  { number: "150+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime" }
];

const additionalFeatures = [
  {
<<<<<<< HEAD
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance",
=======
    title: "Verified Quality",
    description: "All providers are vetted and quality-assured",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    icon: <Shield className="w-6 h-6" />,
    color: "text-zion-cyan"
  },
  {
<<<<<<< HEAD
    title: "Expert Verification",
    description: "All talents are pre-vetted",
    icon: <Award className="w-6 h-6" />,
    color: "text-zion-purple-light"
  },
  {
    title: "Instant Deployment",
    description: "Get started in minutes",
    icon: <Zap className="w-6 h-6" />,
    color: "text-zion-blue-light"
  },
  {
    title: "Community Driven",
    description: "Built by developers, for developers",
    icon: <Users className="w-6 h-6" />,
    color: "text-zion-cyan-light"
  }
];
=======

import { CheckCircle, Zap, Shield, Users, Globe, TrendingUp } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
    title: "Lightning Fast",
    description: "Get results in minutes, not days",
    icon: <Zap className="w-6 h-6" />,
    color: "text-zion-purple"
  },
  {
    title: "Community Driven",
    description: "Built by tech professionals, for tech professionals",
    icon: <Users className="w-6 h-6" />,
    color: "text-zion-blue"
  },
  {
    title: "Award Winning",
    description: "Recognized for innovation and excellence",
    icon: <Award className="w-6 h-6" />,
    color: "text-zion-purple-light"
  }
];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1,
=======
        staggerChildren: 0.15,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 },
=======
    hidden: { y: 30, opacity: 0 },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    visible: {
      opacity: 1,
<<<<<<< HEAD
<<<<<<< HEAD
      y: 0,
      transition: { duration: 0.5 }
=======
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
<<<<<<< HEAD
        duration: 0.3,
        ease: "easeOut" as const
=======
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      }
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
=======
    <section className="py-20 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
<<<<<<< HEAD
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Why Choose Zion?
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency, 
            security, and value for businesses and individuals worldwide
=======
    <section className="py-24 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zion-cyan/5 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-zion-cyan/20 rotate-45 opacity-30 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-zion-purple/20 rounded-full opacity-25 animate-bounce" style={{ animationDelay: "3s" }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-7 h-7 text-zion-cyan" />
            <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Why Choose Zion</span>
            <Sparkles className="w-7 h-7 text-zion-cyan" />
          </div>
          
          <GradientHeading className="text-5xl md:text-6xl lg:text-7xl mb-8 font-black">
            The Zion Advantage
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the next generation of tech marketplace with cutting-edge features designed to maximize efficiency, security, and value
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          </p>
        </motion.div>
        
        <motion.div 
<<<<<<< HEAD
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20"
          variants={containerVariants}
=======
          className="text-center mb-16"
          variants={headerVariants}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group bg-gradient-to-br from-zion-blue/20 to-zion-blue-dark/20 hover:from-zion-blue/30 hover:to-zion-blue-dark/30 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-purple/50 rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
=======
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div 
                className={`h-full rounded-3xl border-2 ${benefit.borderColor} ${benefit.bgColor} bg-zion-blue/80 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/30 hover:border-zion-purple/60 group-hover:bg-zion-blue/90`}
                variants={cardVariants}
              >
                <motion.div 
                  className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-8 shadow-2xl`}
                  variants={iconVariants}
                >
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </motion.div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
                
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed text-lg">
                  {benefit.description}
                </p>

<<<<<<< HEAD
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full">
                  <span className="text-zion-cyan font-semibold text-sm">{benefit.stats}</span>
                </div>
=======

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "All services and talent are verified and quality-checked"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times for all projects and services"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for your business needs"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to top-tier tech professionals worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with talent and services from anywhere"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your business with flexible, scalable services"
    }
  ];

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We provide the most comprehensive tech marketplace experience with unmatched quality, security, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/build-and-fix-errors-e276
              </div>
            </motion.div>
          ))}
<<<<<<< HEAD
        </motion.div>

        {/* Additional features */}
=======
          <GradientHeading className="mb-4">Why Choose Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency, 
            value, and success in your tech endeavors
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className={`rounded-xl overflow-hidden h-full border border-zion-blue-light/30 ${benefit.bgColor} p-8 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20`}>
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{benefit.description}</p>
                
                {/* Feature highlights */}
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
=======
                {/* Feature highlights */}
                <div className="mb-6 space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-cyan font-semibold bg-zion-cyan/15 px-4 py-2 rounded-full border border-zion-cyan/30">
                    {benefit.stats}
                  </span>
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-zion-purple" />
                  </div>
                </div>
              </motion.div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* Additional features grid */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built for the Future</h3>
=======
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built for Success</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
<<<<<<< HEAD
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-zion-blue-dark/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-blue-light/30`}>
                  {React.createElement(feature.icon, { className: feature.color })}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{feature.title}</h4>
=======
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`w-12 h-12 bg-zion-blue-dark/50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-zion-blue-light/20`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{feature.title}</h4>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
                <p className="text-zion-slate-light text-xs leading-relaxed">{feature.description}</p>
=======
        {/* Enhanced trust indicators */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
                  <div className="text-zion-cyan">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-zion-slate-light">{benefit.description}</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
              </motion.div>
            ))}
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Tech Experience?</h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of companies and developers who trust Zion for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25">
                Start Free Trial
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Schedule Demo
=======
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of tech professionals who trust Zion for their tech needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105">
                Start Exploring
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                Learn More
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
              </button>
            </div>
          </div>
        </motion.div>
<<<<<<< HEAD
=======
        </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>
    </section>
  );
}
=======
        {/* Success metrics */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-12 bg-gradient-to-r from-zion-blue-dark/60 to-zion-purple/20 backdrop-blur-xl px-12 py-8 rounded-3xl border border-zion-purple/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Customer Satisfaction</div>
            </div>
            <div className="w-px h-16 bg-zion-purple/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">10K+</div>
              <div className="text-zion-slate-light">Active Users</div>
            </div>
            <div className="w-px h-16 bg-zion-purple/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan-light mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
