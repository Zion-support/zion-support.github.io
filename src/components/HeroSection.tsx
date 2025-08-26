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

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
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
        
        {/* Enhanced Grid Pattern with better opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Additional floating elements with different sizes */}
        <motion.div 
          className="absolute top-1/6 right-1/6 w-3 h-3 rounded-full bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/6 w-4 h-4 rounded-full bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '5s' }}
        />
        
        {/* Large background circles for depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-zion-purple/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-zion-cyan/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge with better styling */}
        <motion.div 
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/40 rounded-full text-zion-cyan text-sm font-semibold mb-8 backdrop-blur-md hover:from-zion-cyan/30 hover:to-zion-blue/30 transition-all duration-300 shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
          🚀 AI-Powered Technology Solutions
          <span className="text-zion-cyan/60">|</span>
          <span className="text-zion-blue/80">2025 Ready</span>
        </motion.div>

        {/* Enhanced Main Heading with better typography */}
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight tracking-tight"
          variants={itemVariants}
        >
          <span className="text-white drop-shadow-2xl">The Future of</span>
          <br />
          <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
            Tech & AI
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">Marketplace</span>
        </motion.h1>

        {/* Enhanced Subtitle with better readability */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light max-w-5xl mx-auto mb-12 leading-relaxed font-light"
          variants={itemVariants}
        >
          Discover our comprehensive collection of{' '}
          <span className="text-zion-cyan font-semibold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            35+ innovative micro SAAS services
          </span>
          , from AI-powered productivity tools to revolutionary quantum computing platforms. 
          Transform your business with cutting-edge technology solutions.
        </motion.p>

        {/* Enhanced CTA Buttons with better visual hierarchy */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          variants={itemVariants}
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105 hover:from-zion-blue to-zion-cyan overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-zion-blue to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Explore All Services
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Link>
          
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-zion-cyan border-2 border-zion-cyan/50 rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-zion-cyan/20 hover:border-zion-cyan transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              Contact Us
            </span>
          </a>
        </motion.div>

        {/* Enhanced Trust Metrics with gradient backgrounds */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          variants={itemVariants}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="group text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25">
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{metric.icon}</span>
                </div>
                <div className="text-zion-cyan font-bold text-lg mb-2">{metric.label}</div>
                <div className="text-zion-slate-light text-sm">{metric.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Tech Features Section with better cards */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">✨ Technology Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div className="text-zion-cyan font-semibold text-sm mb-2 text-center">{feature.label}</div>
                <div className="text-zion-slate-light text-xs text-center">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Contact Info Card with better styling */}
        <motion.div 
          className="glass max-w-3xl mx-auto p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold text-zion-cyan mb-6 text-center">📞 Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <span className="text-zion-cyan text-xl">📱</span>
                <div>
                  <div className="text-zion-slate-light text-xs">Phone</div>
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <span className="text-zion-cyan text-xl">✉️</span>
                <div>
                  <div className="text-zion-slate-light text-xs">Email</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <span className="text-zion-cyan text-xl">🌐</span>
                <div>
                  <div className="text-zion-slate-light text-xs">Website</div>
                  <div className="text-white font-semibold">ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <span className="text-zion-cyan text-xl">📍</span>
                <div>
                  <div className="text-zion-slate-light text-xs">Address</div>
                  <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Feature Pills with better styling */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mt-10 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/40 rounded-full hover:from-zion-cyan/30 hover:to-zion-blue/30 transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
            <span className="font-medium">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/40 rounded-full hover:from-zion-purple/30 hover:to-zion-cyan/30 transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" />
            <span className="font-medium">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 border border-zion-blue/40 rounded-full hover:from-zion-blue/30 hover:to-zion-cyan/30 transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-zion-blue rounded-full animate-pulse" />
            <span className="font-medium">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-green/20 to-zion-cyan/20 border border-zion-green/40 rounded-full hover:from-zion-green/30 hover:to-zion-cyan/30 transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-zion-green rounded-full animate-pulse" />
            <span className="font-medium">Enterprise Security</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator with better animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 border-2 border-zion-cyan/60 rounded-full flex justify-center hover:border-zion-cyan transition-colors duration-300 cursor-pointer group">
          <div className="w-2 h-4 bg-gradient-to-b from-zion-cyan to-zion-blue rounded-full mt-2 animate-bounce group-hover:animate-pulse" />
        </div>
        <div className="text-center mt-2 text-zion-cyan/60 text-xs font-medium">Scroll to explore</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;