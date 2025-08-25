import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { 
  ArrowRightIcon,
  PlayIcon,
  StarIcon
} from '@heroicons/react/24/outline';
=======
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap, Shield, Globe, Cpu, Brain, Star, CheckCircle } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.8
      }
    }
  };
=======
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }), []);

  const floatingVariants = useMemo(() => ({
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }), []);

  const stats = useMemo(() => [
    { icon: Users, label: "10K+ Talents", value: "Verified", color: "text-zion-cyan", ariaLabel: "Over 10,000 verified talents available" },
    { icon: Zap, label: "AI-Powered", value: "Matching", color: "text-zion-purple", ariaLabel: "AI-powered smart matching system" },
    { icon: Shield, label: "Enterprise", value: "Security", color: "text-green-400", ariaLabel: "Enterprise-grade security protocols" },
    { icon: Globe, label: "Global", value: "Reach", color: "text-blue-400", ariaLabel: "Global reach and accessibility" }
  ], []);

  const features = useMemo(() => [
    { icon: Brain, text: "AI-Powered Matching", color: "from-purple-500 to-pink-500", ariaLabel: "AI-powered matching technology" },
    { icon: Cpu, text: "Micro SAAS Solutions", color: "from-blue-500 to-cyan-500", ariaLabel: "Micro SAAS software solutions" },
    { icon: Shield, text: "Enterprise Security", color: "from-green-500 to-emerald-500", ariaLabel: "Enterprise-grade security features" }
  ], []);
>>>>>>> origin/cursor/website-audit-and-enhancement-803a

  const socialProof = [
    { text: "Trusted by 500+ companies worldwide", icon: CheckCircle },
    { text: "98% client satisfaction rate", icon: Star },
    { text: "24/7 expert support available", icon: Shield }
  ];

  return (
<<<<<<< HEAD
    <section className="relative py-20 md:py-32 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-purple opacity-90" />
=======
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center" role="banner" aria-label="Hero Section">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-zion-cyan/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-zion-purple/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-8"
          >
            <StarIcon className="w-4 h-4" />
            Trusted by 500+ Companies Worldwide
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent animate-pulse">
              Transform
            </span>
            <br />
            <span className="text-white">Your Business</span>
            <br />
            <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              with AI
            </span>
          </motion.h1>
          
          {/* Subtitle */}
<<<<<<< HEAD
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            Empowering enterprises with cutting-edge artificial intelligence solutions, 
            quantum computing, and innovative technology services that drive real results.
          </motion.p>
          
=======
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI solutions, connect with top tech talent, and access innovative micro SAAS services 
              that transform your business operations and drive digital transformation.
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socialProof.map((proof, index) => {
                const IconComponent = proof.icon;
                return (
                  <div
                    key={proof.text}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 text-zion-slate-light"
                  >
                    <IconComponent className="w-4 h-4 text-zion-cyan" />
                    <span className="text-sm font-medium">{proof.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.text}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-medium">{feature.text}</span>
                  </div>
 );
              })}
            </div>
          </motion.div>

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/services"
              className="group bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 hover:scale-105 flex items-center gap-3"
            >
<<<<<<< HEAD
              Explore Services
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
=======
              <Link to="/signup" role="button" aria-label="Get Started Today">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Link 
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 backdrop-blur-md bg-white/5"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-59b2
            >
              Get Started
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Video Demo Button */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <button className="inline-flex items-center gap-3 text-zion-slate-light hover:text-white transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-zion-cyan/50 group-hover:bg-zion-cyan/20 transition-all duration-300">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
              <div className="text-left">
                <div className="text-sm text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-300">
                  Watch Demo
                </div>
                <div className="text-xs text-zion-slate-light">
                  2 min overview
                </div>
              </div>
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors duration-300">500+</div>
              <div className="text-zion-slate-light text-sm">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:text-zion-purple-light transition-colors duration-300">50+</div>
              <div className="text-zion-slate-light text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors duration-300">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:text-zion-purple-light transition-colors duration-300">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Shield, Globe, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const features = [
    { icon: Zap, text: 'AI-Powered Solutions', color: 'from-yellow-400 to-orange-500' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-green-400 to-emerald-500' },
    { icon: Globe, text: 'Global Reach', color: 'from-blue-400 to-cyan-500' },
    { icon: Cpu, text: 'Cutting-Edge Tech', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            Trusted by 500+ Companies Worldwide
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-gradient-x">
              Technology
            </span>
            is Here
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Transform your business with cutting-edge AI solutions, enterprise-grade security, 
            and innovative micro SAAS services. Join the digital revolution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-3"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="group px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-zion-slate-light text-sm font-medium group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'AI Solutions' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-zion-slate-light text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
