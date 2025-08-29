import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  CheckCircle, 
  Rocket,
  Brain,
  Shield,
  Zap
} from 'lucide-react';

interface HeroStat {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface HeroFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export function EnhancedHeroSection() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats: HeroStat[] = [
    {
      value: "500+",
      label: "Projects Delivered",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      icon: Brain,
      color: "from-cyan-400 to-blue-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: Shield,
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      icon: Zap,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const features: HeroFeature[] = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that transforms your business",
      icon: Brain,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Rocket,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Cybersecurity Excellence",
      description: "Advanced threat protection and compliance solutions",
      icon: Shield,
      color: "from-red-400 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    // Here you would typically open a video modal or navigate to video page
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              #1 AI Technology Company 2029
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">
                With AI-Powered
              </span>
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-pink-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Zion Tech Group delivers cutting-edge AI solutions, quantum computing, and cybersecurity services that drive digital transformation and business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                onClick={handleVideoPlay}
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-zion-slate-light/20 to-zion-slate-dark/20 rounded-3xl p-8 backdrop-blur-sm border border-zion-cyan/20">
              {/* Rotating Feature Showcase */}
              <div className="relative h-80 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeatureIndex}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${features[currentFeatureIndex].color} mb-6 shadow-2xl`}>
                      <features[currentFeatureIndex].icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {features[currentFeatureIndex].title}
                    </h3>
                    <p className="text-gray-300 max-w-sm">
                      {features[currentFeatureIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-zion-cyan/30 to-blue-500/30 rounded-2xl animate-float-delayed" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-zion-purple/30 to-pink-500/30 rounded-2xl animate-float" />
              
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 w-16 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent" />
              <div className="absolute top-1/2 right-0 w-16 h-px bg-gradient-to-l from-transparent via-zion-purple to-transparent" />
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders</p>
              <div className="flex items-center justify-center space-x-6 opacity-60">
                <div className="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded animate-pulse" />
                <div className="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded animate-pulse animation-delay-200" />
                <div className="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded animate-pulse animation-delay-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}