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
    { icon: "🚀", label: "35+ Services", value: "Innovative Solutions", ariaLabel: "Over 35 innovative technology services available" },
    { icon: "💎", label: "Enterprise", value: "Fortune 500 Clients", ariaLabel: "Trusted by Fortune 500 companies" },
    { icon: "🔒", label: "Secure", value: "Bank-Level Security", ariaLabel: "Bank-level security standards" },
    { icon: "⚡", label: "24/7 Support", value: "Always Available", ariaLabel: "24/7 customer support available" }
  ];

  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-zion-gradient"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-purple/20 animate-float floating-delay-1" />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-blue/40 animate-float floating-delay-2" />
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan/25 animate-float floating-delay-3" />
        
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
          role="status"
          aria-label="AI-Powered Technology Solutions badge"
        >
          <span className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
          🚀 AI-Powered Technology Solutions
          <span className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" />
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1 
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
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
          className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed"
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
            className="btn-primary text-lg py-4 px-8 neon-border focus:ring-4 focus:ring-zion-cyan/50 focus:outline-none transition-all duration-300"
            aria-label="Explore all our technology services"
          >
            <span className="flex items-center gap-3">
              <span className="group-hover:rotate-12 transition-transform duration-300">🚀</span>
              Explore All Services
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
          
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="btn-secondary text-lg py-4 px-8 focus:ring-4 focus:ring-zion-purple/50 focus:outline-none transition-all duration-300"
            aria-label="Contact us via email for service inquiries"
          >
            <span className="flex items-center gap-3">
              <span className="group-hover:bounce transition-all duration-300">💬</span>
              Contact Us
            </span>
          </Link>
        </motion.div>

        {/* Enhanced Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
          variants={itemVariants}
          role="region"
          aria-label="Company trust metrics and achievements"
        >
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              tabIndex={0}
              role="article"
              aria-label={metric.ariaLabel}
            >
              <div className="text-2xl sm:text-3xl mb-2 group-hover:animate-bounce-gentle">{metric.icon}</div>
              <div className="text-zion-cyan font-bold text-base sm:text-lg mb-1">{metric.label}</div>
              <div className="text-zion-slate-light text-xs sm:text-sm">{metric.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Contact Info Card */}
        <motion.div 
          className="glass max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl border border-white/20"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          role="region"
          aria-label="Contact information"
        >
          <h3 className="text-lg font-semibold text-zion-cyan mb-4">📞 Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan" aria-hidden="true">📱</span>
                <span className="text-zion-slate-light">Phone:</span>
                <a 
                  href="tel:+13024640950" 
                  className="text-white hover:text-zion-cyan transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 rounded"
                  aria-label="Call us at +1 302 464 0950"
                >
                  +1 302 464 0950
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan" aria-hidden="true">✉️</span>
                <span className="text-zion-slate-light">Email:</span>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                  className="text-white hover:text-zion-cyan transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 rounded"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan" aria-hidden="true">🌐</span>
                <span className="text-zion-slate-light">Website:</span>
                <span className="text-white font-medium">ziontechgroup.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan" aria-hidden="true">📍</span>
                <span className="text-zion-slate-light">Address:</span>
                <span className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8 text-zion-slate-light text-xs sm:text-sm"
          variants={itemVariants}
          role="region"
          aria-label="Key platform features"
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
        aria-hidden="true"
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