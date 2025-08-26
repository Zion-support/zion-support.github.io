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
    { icon: "🚀", label: "500+ Projects", value: "Successfully Delivered" },
    { icon: "💎", label: "Enterprise", value: "Fortune 500 Clients" },
    { icon: "🔒", label: "Bank-Level", value: "Security & Compliance" },
    { icon: "⚡", label: "24/7 Support", value: "Always Available" }
  ];

  const techFeatures = [
    { icon: "🤖", label: "AI-Powered", description: "Advanced AI algorithms" },
    { icon: "🔮", label: "Quantum Ready", description: "Future-proof technology" },
    { icon: "🌐", label: "Cloud Native", description: "Scalable architecture" },
    { icon: "🛡️", label: "Enterprise Grade", description: "Production ready" }
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
          🚀 Leading AI & Quantum Technology Solutions
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="text-white">Transforming Business</span>
          <br />
          <span className="gradient-text animate-gradient">Through Innovation</span>
          <br />
          <span className="text-white">& Technology</span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Zion Tech Group delivers <span className="text-zion-cyan font-semibold">cutting-edge AI, quantum computing, and emerging technology solutions</span> 
          that drive digital transformation and competitive advantage for forward-thinking enterprises worldwide.
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
              Explore Our Solutions
              <span>→</span>
            </span>
          </Link>
          
          <Link
            to="/contact"
            className="btn-secondary text-lg py-4 px-8 hover:scale-105 transition-transform duration-300"
          >
            <span className="flex items-center gap-2">
              <span>💬</span>
              Get Free Consultation
            </span>
          </Link>
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
          <h3 className="text-lg font-semibold text-zion-cyan mb-4">📞 Ready to Get Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan">📱</span>
                <span className="text-zion-slate-light">Phone:</span>
                <span className="text-white">+1 302 464 0950</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan">✉️</span>
                <span className="text-zion-slate-light">Email:</span>
                <span className="text-white">kleber@ziontechgroup.com</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan">🌐</span>
                <span className="text-zion-slate-light">Location:</span>
                <span className="text-white">Global Services</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-zion-cyan">⏰</span>
                <span className="text-zion-slate-light">Response:</span>
                <span className="text-white">Within 2 hours</span>
              </p>
            </div>
          </div>
          
          {/* Quick Contact CTA */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300"
            >
              <span>📋</span>
              Request Free Quote
              <span>→</span>
            </Link>
          </div>
        </motion.div>

        {/* Floating Innovation Highlights */}
        <motion.div 
          className="absolute top-1/4 right-8 hidden lg:block"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="bg-zion-purple/20 backdrop-blur-md p-4 rounded-xl border border-zion-purple/30">
            <div className="text-zion-purple text-sm font-medium">🔮 Quantum Computing</div>
            <div className="text-zion-slate-light text-xs">Next-gen solutions</div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 left-8 hidden lg:block"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="bg-zion-cyan/20 backdrop-blur-md p-4 rounded-xl border border-zion-cyan/30">
            <div className="text-zion-cyan text-sm font-medium">🤖 AI & ML</div>
            <div className="text-zion-slate-light text-xs">Enterprise ready</div>
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