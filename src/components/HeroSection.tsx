import React, { memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Shield, Zap, Brain, Globe, Rocket } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = memo<HeroSectionProps>(({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const features = [
    { icon: Brain, text: 'AI-Powered Solutions', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, text: 'Innovation First', color: 'from-green-500 to-emerald-500' },
    { icon: Globe, text: 'Global Reach', color: 'from-orange-500 to-red-500' },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const scrollToServices = () => {
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"
        style={{ y, opacity }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate/95 to-zion-slate/90" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20" />
      
      {/* Floating Elements */}
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
        className="absolute top-20 left-10"
      >
        <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-60 shadow-lg shadow-zion-cyan/50" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20"
      >
        <div className="w-6 h-6 bg-zion-purple rounded-full opacity-60 shadow-lg shadow-zion-purple/50" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-20"
      >
        <div className="w-3 h-3 bg-zion-blue rounded-full opacity-60 shadow-lg shadow-zion-blue/50" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 500+ Companies Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-zion-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services that transform businesses worldwide
          </motion.p>

          {/* Feature Rotator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-zion-slate-light/50 border border-zion-cyan/20 rounded-full backdrop-blur-sm">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <features[currentFeature].icon className="w-5 h-5 text-zion-cyan" />
                <span className="text-zion-text-primary font-medium">
                  {features[currentFeature].text}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              to="/comprehensive-services" 
              className="group relative px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 hover:shadow-zion-cyan/40"
            >
              <span className="flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              to="/revolutionary-services-2030" 
              className="group relative px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl font-semibold text-white hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-purple/25 hover:shadow-zion-purple/40"
            >
              <span className="flex items-center gap-2">
                Revolutionary 2030
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
            
            <button
              onClick={scrollToServices}
              className="group relative px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap justify-center items-center gap-6 text-zion-text-secondary text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-zion-cyan" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-zion-cyan" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <span>24/7 Global Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center"
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
});

HeroSection.displayName = 'HeroSection';