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
    { icon: "🚀", label: "35+ Services", value: "Innovative Solutions", color: "from-zion-cyan to-zion-blue" },
    { icon: "💎", label: "Enterprise", value: "Fortune 500 Clients", color: "from-zion-purple to-zion-cyan" },
    { icon: "🔒", label: "Secure", value: "Bank-Level Security", color: "from-zion-blue to-zion-green" },
    { icon: "⚡", label: "24/7 Support", value: "Always Available", color: "from-zion-orange to-zion-red" }
  ];

  const keyFeatures = [
    { icon: "🤖", title: "AI-Powered Matching", description: "Intelligent service recommendations" },
    { icon: "🔐", title: "Enterprise Security", description: "Bank-level protection for your data" },
    { icon: "📱", title: "Mobile First", description: "Optimized for all devices" },
    { icon: "⚡", title: "Lightning Fast", description: "Sub-second response times" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-purple/20 animate-float floating-delay-1" />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-blue/40 animate-float floating-delay-2" />
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan/25 animate-float floating-delay-3" />
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating Tech Icons */}
        <div className="absolute top-1/5 right-1/6 text-4xl opacity-20 animate-float floating-delay-4">🤖</div>
        <div className="absolute bottom-1/5 left-1/6 text-3xl opacity-20 animate-float floating-delay-5">🔮</div>
        <div className="absolute top-1/3 left-1/4 text-2xl opacity-20 animate-float floating-delay-6">⚡</div>
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
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
          <span className="font-semibold">🚀 AI-Powered Technology Solutions</span>
          <span className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="text-white drop-shadow-lg">The Future of</span>
          <br />
          <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent drop-shadow-lg">
            Tech & AI
          </span>
          <br />
          <span className="text-white drop-shadow-lg">Marketplace</span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light max-w-5xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Discover our comprehensive collection of{' '}
          <span className="text-zion-cyan font-semibold bg-zion-cyan/10 px-2 py-1 rounded-lg">
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
            className="btn-primary text-lg py-5 px-10 neon-border transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold">Explore All Services</span>
              <span className="text-xl">→</span>
            </span>
          </Link>
          
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="btn-secondary text-lg py-5 px-10 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <span className="font-semibold">Contact Us</span>
            </span>
          </a>
        </motion.div>

        {/* Enhanced Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
          variants={itemVariants}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-all duration-300`}>
                <div className="text-4xl group-hover:animate-bounce-gentle">{metric.icon}</div>
              </div>
              <div className="text-zion-cyan font-bold text-xl mb-2">{metric.label}</div>
              <div className="text-zion-slate-light text-sm">{metric.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Key Features Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          variants={itemVariants}
        >
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-3 group-hover:animate-bounce-gentle">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zion-slate-light text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Contact Info Card */}
        <motion.div 
          className="glass max-w-3xl mx-auto p-8 rounded-3xl border border-white/20 shadow-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold text-zion-cyan mb-6 flex items-center gap-3">
            <span className="text-2xl">📞</span>
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <span className="text-zion-cyan text-lg">📱</span>
                <span className="text-zion-slate-light">Phone:</span>
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </p>
              <p className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <span className="text-zion-cyan text-lg">✉️</span>
                <span className="text-zion-slate-light">Email:</span>
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <span className="text-zion-cyan text-lg">🌐</span>
                <span className="text-zion-slate-light">Website:</span>
                <span className="text-white font-semibold">ziontechgroup.com</span>
              </p>
              <p className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <span className="text-zion-cyan text-lg">📍</span>
                <span className="text-zion-slate-light">Address:</span>
                <span className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mt-12 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          {[
            { text: "AI-Powered Matching", color: "from-zion-cyan to-zion-blue" },
            { text: "Verified Professionals", color: "from-zion-purple to-zion-cyan" },
            { text: "Secure Payments", color: "from-zion-blue to-zion-green" },
            { text: "Enterprise Security", color: "from-zion-cyan to-zion-purple" }
          ].map((pill, index) => (
            <div key={index} className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${pill.color} bg-opacity-20 border border-zion-cyan/30 rounded-full hover:scale-105 transition-all duration-300`}>
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
              <span className="font-medium">{pill.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-zion-cyan/50 rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-4 bg-zion-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;