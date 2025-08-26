import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
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
      y: [-15, 15, -15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const trustMetrics = [
    { icon: "🚀", label: "35+ Services", value: "Innovative Solutions", color: "from-zion-cyan to-zion-blue" },
    { icon: "💎", label: "Enterprise", value: "Fortune 500 Clients", color: "from-zion-purple to-zion-cyan" },
    { icon: "🔒", label: "Secure", value: "Bank-Level Security", color: "from-zion-green to-zion-cyan" },
    { icon: "⚡", label: "24/7 Support", value: "Always Available", color: "from-zion-orange to-zion-yellow" }
  ];

  const techFeatures = [
    { icon: "🤖", label: "AI-Powered", description: "Advanced AI algorithms", color: "from-zion-cyan to-zion-blue" },
    { icon: "🔮", label: "Quantum Ready", description: "Future-proof technology", color: "from-zion-purple to-zion-cyan" },
    { icon: "🌐", label: "Cloud Native", description: "Scalable architecture", color: "from-zion-blue to-zion-cyan" },
    { icon: "🛡️", label: "Enterprise Grade", description: "Production ready", color: "from-zion-green to-zion-cyan" }
  ];

  const innovativeServices = [
    "QuantumEdge AI Platform",
    "NeuromorphicAI Studio", 
    "Zero-Trust Security",
    "5G Private Networks",
    "SpaceTech AI Platform",
    "GreenTech AI Solutions"
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-zion-gradient">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-zion-cyan/30 to-zion-blue/30"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-zion-blue/40 to-zion-cyan/40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-zion-cyan/25 to-zion-purple/25"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '3s' }}
        />
        
        {/* Enhanced Grid Pattern with Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow" />
        
        {/* Floating Tech Icons */}
        <motion.div 
          className="absolute top-1/6 right-1/6 text-4xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🤖
        </motion.div>
        <motion.div 
          className="absolute bottom-1/6 left-1/6 text-3xl opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          🔮
        </motion.div>
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
          🚀 AI-Powered Technology Solutions
          <span className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" />
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="text-white drop-shadow-lg">The Future of</span>
          <br />
          <span className="gradient-text animate-neon-pulse drop-shadow-2xl">Tech & AI</span>
          <br />
          <span className="text-white drop-shadow-lg">Marketplace</span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Discover our comprehensive collection of{' '}
          <span className="text-zion-cyan font-semibold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            35+ innovative micro SAAS services
          </span>
          , from AI-powered productivity tools to revolutionary quantum computing platforms. 
          Transform your business with cutting-edge technology solutions.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          variants={itemVariants}
        >
          <Link
            to="/services"
            className="btn-primary text-lg py-4 px-8 neon-border hover:scale-105 transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              <span className="group-hover:rotate-12 transition-transform duration-300">🚀</span>
              Explore All Services
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
          
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="btn-secondary text-lg py-4 px-8 hover:scale-105 transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              <span className="group-hover:bounce transition-all duration-300">💬</span>
              Contact Us
            </span>
          </Link>
        </motion.div>

        {/* Enhanced Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16"
          variants={itemVariants}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce-gentle transition-all duration-300">{metric.icon}</div>
              <div className="text-zion-cyan font-bold text-lg mb-2 group-hover:text-zion-purple transition-colors duration-300">{metric.label}</div>
              <div className="text-zion-slate-light text-sm group-hover:text-white transition-colors duration-300">{metric.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Contact Info Card */}
        <motion.div 
          className="glass max-w-3xl mx-auto p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-zion-glow"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold text-zion-cyan mb-6 flex items-center justify-center gap-2">
            📞 Contact Information
            <span className="text-zion-purple">|</span>
            <span className="text-zion-blue">Ready to Connect</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p className="flex items-center gap-3 group">
                <span className="text-zion-cyan group-hover:scale-110 transition-transform duration-300">📱</span>
                <span className="text-zion-slate-light">Phone:</span>
                <span className="text-white font-medium">+1 302 464 0950</span>
              </p>
              <p className="flex items-center gap-3 group">
                <span className="text-zion-cyan group-hover:scale-110 transition-transform duration-300">✉️</span>
                <span className="text-zion-slate-light">Email:</span>
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3 group">
                <span className="text-zion-cyan group-hover:scale-110 transition-transform duration-300">🌐</span>
                <span className="text-zion-slate-light">Website:</span>
                <span className="text-white font-medium">ziontechgroup.com</span>
              </p>
              <p className="flex items-center gap-3 group">
                <span className="text-zion-cyan group-hover:scale-110 transition-transform duration-300">📍</span>
                <span className="text-zion-slate-light">Address:</span>
                <span className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mt-12 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-cyan/30 border border-zion-cyan/40 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
            <span className="font-medium">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-purple/20 to-zion-purple/30 border border-zion-purple/40 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" />
            <span className="font-medium">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-blue/20 to-zion-blue/30 border border-zion-blue/40 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-zion-blue rounded-full animate-pulse" />
            <span className="font-medium">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-cyan/30 border border-zion-cyan/40 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
            <span>Enterprise Security</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-8 h-12 border-2 border-zion-cyan/50 rounded-full flex justify-center hover:border-zion-cyan transition-colors duration-300">
          <div className="w-1 h-4 bg-zion-cyan rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-zion-cyan/70 text-xs mt-2 text-center">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;