<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Clock, MapPin, Globe, Shield, Zap, CheckCircle } from "lucide-react";
=======
import { MapPin, Clock, Globe, Shield, ArrowRight } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

export const ITServiceRequestHero = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: Star, value: '4.9/5', label: 'Rating' },
    { icon: Shield, value: '24/7', label: 'Support' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-zion-cyan/10 rounded-full blur-2xl"
        />
      </div>

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
=======
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      transition: { duration: 0.5 }
    }
  };

<<<<<<< HEAD
  const features = [
    { icon: Clock, text: "24/7 Global Support", color: "text-zion-cyan" },
    { icon: Globe, text: "Worldwide Coverage", color: "text-zion-purple-light" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-blue-light" },
    { icon: Zap, text: "Same Day Response", color: "text-zion-cyan-light" }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/30 py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
>>>>>>> origin/main
      </div>

      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-zion-cyan" />
              </div>
              <span className="text-zion-cyan font-semibold text-lg">Premium Service</span>
            </div>
            
            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg md:text-xl text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Our certified experts provide rapid response and reliable solutions for all your IT needs.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-zion-slate-light text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">Get instant quotes from certified technicians</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter service location (city, country)"
                    className="pl-12 bg-zion-blue-dark/50 border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light h-14 text-lg rounded-xl"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 rounded-xl shadow-2xl shadow-zion-purple/25 transition-all duration-300 hover:scale-105 h-14"
                >
                  Get Instant Quote
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-zion-slate-light">
                    Available worldwide, 24 hours a day • Response within 2 hours
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  Play,
  Star
} from 'lucide-react';

export const ITServiceRequestHero: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: '24/7 response times under 2 hours'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption & compliance'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '2hr', label: 'Response Time' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue via-zion-blue-light to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-zion-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-zion-cyan/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zion-blue via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              Trusted by 500+ Companies Worldwide
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-gradient-x">
                Cutting-Edge Tech
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Unlock the power of AI, cloud computing, and digital transformation. 
              Our expert team delivers innovative solutions that drive real business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link to="/request-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
              
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-zion-cyan mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative bg-zion-blue-light/20 backdrop-blur-md border border-zion-purple/20 rounded-3xl p-8 lg:p-12">
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-zion-cyan to-zion-purple p-4 rounded-2xl shadow-2xl shadow-zion-cyan/25"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">AI-Powered</div>
                  <div className="text-sm opacity-90">Solutions</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-zion-purple to-zion-cyan p-4 rounded-2xl shadow-2xl shadow-zion-purple/25"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">Cloud</div>
                  <div className="text-sm opacity-90">Native</div>
                </div>
              </motion.div>

              {/* Central Content */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-zion-cyan/30">
                  <Globe className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Next-Gen Technology
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Experience the future of business technology with our cutting-edge solutions
                </p>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        className="text-center p-3 bg-zion-blue/30 rounded-xl border border-zion-purple/20"
                      >
                        <IconComponent className="w-6 h-6 text-zion-cyan mx-auto mb-2" />
                        <div className="text-sm font-medium text-white mb-1">
                          {feature.title}
                        </div>
                        <div className="text-xs text-zion-slate-light">
                          {feature.description}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-609d
=======
import React from 'react';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          IT Services & AI Solutions
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI chatbots to cloud infrastructure, 
          we deliver results that drive growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-zion-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
            View All Services
          </button>
        </div>
      </div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    </section>
  );
};
=======
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Filter } from 'lucide-react';

export function ITServiceRequestHero() {
  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need IT Services?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Find the perfect IT professional or service for your project. Get started in minutes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-lighter">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 bg-zion-blue-light border-zion-blue-lighter text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                />
              </div>
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple px-8">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Web Development
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Mobile Apps
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cloud Services
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cybersecurity
              </Button>
            </div>
          </div>
        </div>
      </div>
=======
  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-zion-cyan rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zion-purple-light rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">Global IT Services</span>
          </div>
          
          <GradientHeading className="mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight">
            24x7 Global IT Onsite Services
          </GradientHeading>
          
          <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Our global network ensures rapid response times and expert support.
          </p>

          {/* Feature highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-zion-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-white">24/7 Availability</h4>
                <p className="text-sm text-zion-slate-light">Round-the-clock support worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Global Coverage</h4>
                <p className="text-sm text-zion-slate-light">Technicians in 150+ countries</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zion-purple-light/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-zion-purple-light" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Certified Experts</h4>
                <p className="text-sm text-zion-slate-light">Vetted and qualified professionals</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm border border-zion-blue-light/20 p-8 rounded-2xl shadow-2xl"
          variants={rightItemVariants}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
            <p className="text-zion-slate-light">Get a technician at your location</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter service location (city, country)"
                className="bg-zion-blue-dark/50 border-zion-blue-light/30 focus:border-zion-purple focus:ring-zion-purple text-white pl-10 py-4 text-lg placeholder:text-zion-slate-light/60"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-zion-slate-light">
              Available worldwide, 24 hours a day
            </p>
            <div className="flex justify-center items-center gap-4 mt-3 text-xs text-zion-slate-light">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Instant Quote
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Same Day Service
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    </section>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
