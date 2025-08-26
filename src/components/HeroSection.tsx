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

  const techFeatures = [
    { icon: "🤖", label: "AI-Powered", description: "Advanced AI algorithms" },
    { icon: "🔮", label: "Quantum Ready", description: "Future-proof technology" },
    { icon: "🌐", label: "Cloud Native", description: "Scalable architecture" },
    { icon: "🛡️", label: "Enterprise Grade", description: "Production ready" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles with enhanced animations */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan/30"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-purple/20"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-blue/40"
          animate={{ 
            y: [-15, 15, -15],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan/25"
          animate={{ 
            y: [15, -15, 15],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Enhanced Grid Pattern with animation */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Additional floating elements with varied animations */}
        <motion.div 
          className="absolute top-1/6 right-1/6 w-2 h-2 rounded-full bg-zion-purple/30"
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/6 w-3 h-3 rounded-full bg-zion-cyan/20"
          animate={{ 
            y: [10, -10, 10],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge with improved animation */}
        <motion.div 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/40 rounded-full text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm hover:bg-zion-cyan/30 transition-all duration-300 shadow-lg"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(34, 221, 210, 0.3)"
          }}
        >
          <motion.span 
            className="w-2 h-2 bg-zion-cyan rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          🚀 AI-Powered Technology Solutions
        </motion.div>

        {/* Enhanced Main Heading with better typography */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="text-white drop-shadow-lg">The Future of</span>
          <br />
          <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent animate-gradient drop-shadow-lg">
            Tech & AI
          </span>
          <br />
          <span className="text-white drop-shadow-lg">Marketplace</span>
        </motion.h1>

        {/* Enhanced Subtitle with better readability */}
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

        {/* Enhanced CTA Buttons with better visual appeal */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold">Explore All Services</span>
              <span className="text-xl">→</span>
            </span>
          </Link>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <span className="font-semibold">Contact Us</span>
            </span>
          </a>
        </motion.div>

        {/* Enhanced Trust Metrics with better layout */}
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

        {/* Enhanced Tech Features Section */}
        <motion.div 
          className="max-w-5xl mx-auto mb-12"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
            <span className="text-3xl">✨</span>
            Technology Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-zion-cyan font-semibold text-sm mb-1">{feature.label}</div>
                <div className="text-zion-slate-light text-xs">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Contact Info Card with better styling */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md max-w-3xl mx-auto p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 shadow-lg"
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

        {/* Enhanced Feature Pills with better visual hierarchy */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mt-12 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          {[
            { text: "AI-Powered Matching", color: "zion-cyan" },
            { text: "Verified Professionals", color: "zion-purple" },
            { text: "Secure Payments", color: "zion-blue" },
            { text: "Enterprise Security", color: "zion-cyan" }
          ].map((pill, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 bg-${pill.color}/20 border border-${pill.color}/30 rounded-full hover:bg-${pill.color}/30 transition-colors duration-300 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-2 h-2 bg-${pill.color} rounded-full animate-pulse`} />
              <span>{pill.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator with better animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center hover:border-zion-cyan transition-colors duration-300 cursor-pointer group">
          <motion.div 
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="text-center mt-2 text-zion-cyan/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;