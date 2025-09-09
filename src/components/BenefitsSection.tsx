import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, Clock, TrendingUp, Star, Award, Globe, Lock } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Get your projects delivered in record time with our efficient development process",
    color: "from-zion-cyan to-zion-blue",
    bgColor: "from-zion-cyan/20 to-zion-blue/20",
    stats: "3x Faster",
    features: ["Rapid Prototyping", "Quick Deployment", "Fast Iteration"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and applications",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    stats: "99.99% Uptime",
    features: ["SOC 2 Compliant", "GDPR Ready", "End-to-End Encryption"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "Work with certified professionals with years of industry experience",
    color: "from-zion-cyan-light to-zion-cyan",
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    stats: "500+ Experts",
    features: ["Certified Professionals", "Global Network", "Industry Veterans"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need help or have questions",
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    stats: "24/7",
    features: ["Live Chat", "Phone Support", "Email Response"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise",
    color: "from-zion-cyan to-zion-purple",
    bgColor: "from-zion-cyan/20 to-zion-purple/20",
    stats: "10x Growth",
    features: ["Auto-scaling", "Load Balancing", "Performance Monitoring"]
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with our comprehensive testing process",
    color: "from-zion-purple to-zion-cyan",
    bgColor: "from-zion-purple/20 to-zion-cyan/20",
    stats: "100% Success",
    features: ["Comprehensive Testing", "Quality Assurance", "Satisfaction Guarantee"]
  }
];

const additionalStats = [
  { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Customer Rating" },
  { icon: <Award className="w-6 h-6" />, value: "50+", label: "Industry Awards" },
  { icon: <Globe className="w-6 h-6" />, value: "100+", label: "Countries Served" },
  { icon: <Lock className="w-6 h-6" />, value: "1000+", label: "Projects Completed" }
];

export function BenefitsSection() {
  const benefits = [
    {
      icon: '🚀',
      title: 'Fast Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality or features'
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom solutions designed specifically for your business needs'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We deliver exceptional value through innovation, reliability, and customer-focused solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        </motion.div>

import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from "lucide-react";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-500 hover:shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}