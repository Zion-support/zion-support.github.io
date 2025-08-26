import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const trustMetrics = [
    { icon: "🚀", label: "35+ Services", value: "Innovative Solutions" },
    { icon: "💎", label: "Enterprise", value: "Fortune 500 Clients" },
    { icon: "🔒", label: "Secure", value: "Bank-Level Security" },
    { icon: "⚡", label: "24/7 Support", value: "Always Available" }
  ];

  const techFeatures = [
    { icon: "🤖", label: "AI-Powered", description: "Advanced AI algorithms" },
    { icon: "🔮", label: "Quantum Ready", description: "Future-proof technology" },
    { icon: "🌐", label: "Cloud Native", description: "Scalable architecture" },
    { icon: "🛡️", label: "Enterprise Grade", description: "Production ready" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-zion-gradient">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-purple/20 animate-float floating-delay-1" />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-blue/40 animate-float floating-delay-2" />
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan/25 animate-float floating-delay-3" />
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/6 right-1/6 w-2 h-2 rounded-full bg-zion-purple/30 animate-float floating-delay-4" />
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 rounded-full bg-zion-cyan/20 animate-float floating-delay-5" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6 backdrop-blur-sm hover:bg-zion-cyan/30 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
          🚀 AI-Powered Technology Solutions
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="text-white">The Future of</span>
          <br />
          <span className="gradient-text animate-gradient">Tech & AI</span>
          <br />
          <span className="text-white">Marketplace</span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Discover our comprehensive collection of <span className="text-zion-cyan font-semibold">35+ innovative micro SAAS services</span>, 
          from AI-powered productivity tools to revolutionary quantum computing platforms. 
          Transform your business with cutting-edge technology solutions.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <Link
            to="/services"
            className="btn-primary text-lg py-4 px-8 neon-border hover:scale-105 transition-transform duration-300"
          >
            <span className="flex items-center gap-2">
              <span>🚀</span>
              Explore All Services
              <span>→</span>
            </span>
          </Link>
          
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="btn-secondary text-lg py-4 px-8 hover:scale-105 transition-transform duration-300"
          >
            <span className="flex items-center gap-2">
              <span>💬</span>
              Contact Us
            </span>
          </a>
        </motion.div>

        {/* Enhanced Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-2 group-hover:animate-bounce-gentle">{metric.icon}</div>
              <div className="text-zion-cyan font-bold text-lg mb-1">{metric.label}</div>
              <div className="text-zion-slate-light text-sm">{metric.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* New Tech Features Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">✨ Technology Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-zion-cyan font-semibold text-sm mb-1">{feature.label}</div>
                <div className="text-zion-slate-light text-xs">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Contact Info Card */}
        <motion.div 
          className="glass max-w-2xl mx-auto p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold text-zion-cyan mb-4">📞 Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <a 
                href="tel:+13024640950"
                className="flex items-center gap-2 hover:text-zion-cyan transition-colors duration-300 cursor-pointer"
              >
                <span className="text-zion-cyan">📱</span>
                <span className="text-zion-slate-light">Phone:</span>
                <span className="text-white hover:text-zion-cyan">+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="flex items-center gap-2 hover:text-zion-cyan transition-colors duration-300 cursor-pointer"
              >
                <span className="text-zion-cyan">✉️</span>
                <span className="text-zion-slate-light">Email:</span>
                <span className="text-white hover:text-zion-cyan">kleber@ziontechgroup.com</span>
              </a>
            </div>
            <div className="space-y-2">
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-zion-cyan transition-colors duration-300 cursor-pointer"
              >
                <span className="text-zion-cyan">🌐</span>
                <span className="text-zion-slate-light">Website:</span>
                <span className="text-white hover:text-zion-cyan">ziontechgroup.com</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">📍</span>
                <span className="text-zion-slate-light">Address:</span>
                <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="tel:+13024640950"
              className="flex-1 bg-zion-cyan/20 hover:bg-zion-cyan/30 border border-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
              className="flex-1 bg-zion-purple/20 hover:bg-zion-purple/30 border border-zion-purple/30 text-zion-purple px-4 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105"
            >
              ✉️ Send Email
            </a>
          </div>
        </motion.div>

        {/* Enhanced Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mt-8 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full hover:bg-zion-cyan/30 transition-colors duration-300">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full hover:bg-zion-purple/30 transition-colors duration-300">
            <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" />
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-zion-blue/20 border border-zion-blue/30 rounded-full hover:bg-zion-blue/30 transition-colors duration-300">
            <div className="w-2 h-2 bg-zion-blue rounded-full animate-pulse" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full hover:bg-zion-cyan/30 transition-colors duration-300">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
            <span>Enterprise Security</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center hover:border-zion-cyan transition-colors duration-300">
          <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;