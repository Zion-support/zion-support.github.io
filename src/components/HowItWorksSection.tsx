<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading";
<<<<<<< HEAD
import { Check, Handshake, Search, Send, ArrowRight, Zap, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
=======
import { motion } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
import { Check, Handshake, Search, Send, ArrowRight, Sparkles, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

const steps = [
  {
    title: "Define Your Needs",
    description: "Describe your project requirements, budget, and timeline using our AI-powered intelligent form that adapts to your needs.",
=======
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Create & Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered smart forms that guide you through the process.",
>>>>>>> origin/cursor/build-and-fix-errors-e276
    icon: Send,
    color: "from-zion-purple to-zion-purple-dark",
<<<<<<< HEAD
    features: ["AI-Powered Forms", "Smart Suggestions", "Instant Validation"]
=======
    bgColor: "bg-zion-purple/20",
    features: ["AI-Powered Forms", "Instant Publishing", "Smart Templates"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "AI Matchmaking",
    description: "Our advanced algorithms analyze thousands of profiles and automatically match you with the perfect providers, talents, or equipment.",
    icon: Search,
<<<<<<< HEAD
    color: "from-zion-cyan to-zion-blue",
    features: ["95% Match Rate", "Real-time Analysis", "Quality Scoring"]
=======
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/20",
    features: ["Smart Algorithms", "Perfect Matches", "Instant Results"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Connect & Collaborate",
    description: "Directly connect with matched providers through our secure platform. Review profiles, discuss requirements, and negotiate terms.",
    icon: Handshake,
    color: "from-zion-blue to-zion-blue-dark",
<<<<<<< HEAD
    features: ["Secure Messaging", "Video Calls", "File Sharing"]
=======
    bgColor: "bg-zion-blue/20",
    features: ["Secure Payments", "Direct Connect", "Trusted Partners"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Deliver & Support",
    description: "Complete your project with confidence. Our platform ensures quality delivery and provides ongoing support for all solutions.",
    icon: Check,
<<<<<<< HEAD
<<<<<<< HEAD
    color: "from-zion-cyan-light to-zion-cyan",
    features: ["Quality Assurance", "24/7 Support", "Escrow Protection"]
  },
];

const stats = [
  { number: "10K+", label: "Active Users", icon: Users },
  { number: "150+", label: "Countries", icon: Globe },
  { number: "95%", label: "Success Rate", icon: Check },
  { number: "<2hr", label: "Response Time", icon: Zap }
=======
    color: "from-zion-purple-light to-zion-cyan",
    step: "04"
  },
>>>>>>> origin/cursor/build-and-fix-errors-e276
];

export function HowItWorksSection() {
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
<<<<<<< HEAD
=======
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/20",
    features: ["24/7 Support", "Quality Assurance", "Ongoing Help"]
  },
];

export function HowItWorksSection() {
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
<<<<<<< HEAD
=======
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
=======
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

  const stepVariants = {
<<<<<<< HEAD
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
>>>>>>> origin/cursor/build-and-fix-errors-e276
    }
  };
=======
import React from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project plan',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Our expert team builds your solution using cutting-edge technologies',
      icon: '⚙️'
    },
    {
      number: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards',
      icon: '✅'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance',
      icon: '🚀'
    }
  ];
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802

  return (
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '120px 120px'
        }}></div>
=======
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${'#8c15e9'} 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zion-purple-light rounded-full blur-3xl"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
<<<<<<< HEAD
          className="text-center mb-20"
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
=======
          initial={{ opacity: 0, y: 30 }}
>>>>>>> origin/cursor/build-and-fix-errors-e276
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            How Zion Works
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Experience the future of tech procurement with our intelligent, AI-powered platform that 
            connects you with the perfect solutions in just four simple steps
          </p>
        </motion.div>

        {/* Stats Section */}
=======
          <GradientHeading className="text-4xl md:text-5xl mb-6">How Zion Works</GradientHeading>
          <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            A streamlined four-step process that leverages AI to connect technology providers with clients seamlessly
          </p>
        </motion.div>

>>>>>>> origin/cursor/build-and-fix-errors-e276
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
                <stat.icon className="w-10 h-10 text-zion-cyan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="relative"
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
<<<<<<< HEAD
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden rounded-full"></div>
=======
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan via-zion-blue to-zion-purple-light transform -translate-x-1/2 hidden md:block" />
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
          <GradientHeading className="mb-4">How It Works</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            A simple four-step process to connect technology providers with clients. 
            Get started in minutes and see results immediately.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan via-zion-blue to-zion-purple-light transform -translate-x-1/2 md:block hidden rounded-full"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } relative`}
                variants={itemVariants}
              >
<<<<<<< HEAD
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div className="group">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-medium mb-4`}>
                        Step {index + 1}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features list */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
=======
                {/* Content side */}
                <div className="lg:w-1/2 mb-8 lg:mb-0 lg:px-12 text-center lg:text-left">
                  <motion.div 
                    className="bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20"
                    variants={stepVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Feature highlights */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          <span className="text-zion-slate-light font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
<<<<<<< HEAD
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-zion-blue-dark to-zion-blue border-4 border-zion-purple mx-4 md:mx-0 shadow-2xl shadow-zion-purple/25 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div className="group">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-medium mb-4`}>
                        Step {index + 1}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features list */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
=======
                {/* Step indicator */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-blue-light to-zion-blue border-4 border-zion-purple mx-4 lg:mx-0 shadow-2xl hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white">{index + 1}</div>
                  
                  {/* Decorative elements around step */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-zion-cyan rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-zion-purple-light rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-zion-purple to-zion-cyan"></div>
                )}
              </motion.div>
            ))}
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join the thousands of companies already using Zion to transform their tech procurement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
=======
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join the future of tech marketplace today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
                Watch Demo
              </button>
            </div>
          </div>
<<<<<<< HEAD
=======

          {/* CTA section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
                      <div className="inline-flex items-center gap-3 px-8 py-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full">
            <TrendingUp className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-semibold text-lg">Ready to get started?</span>
            <ArrowRight className="w-5 h-5 text-zion-cyan" />
          </div>
          </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
        </motion.div>
      </div>
    </section>
  );
}
