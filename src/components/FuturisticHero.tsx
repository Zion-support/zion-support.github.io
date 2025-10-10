import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  Play, 
  Star,
  Sparkles,
  Cpu,
  Database,
  Cloud,
  Target,
  Users,
  BarChart,
  Code,
  Lock,
  Eye,
  MessageSquare,
  Settings,
  TrendingUp,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "AI-Powered Enterprise Solutions",
    "Quantum Computing Excellence",
    "Autonomous Systems Innovation",
    "Digital Transformation Mastery",
    "Next-Gen Technology Leadership"
  ];

  const features = [
    { icon: Brain, text: "Advanced AI Solutions", color: "text-cyan-400" },
    { icon: Zap, text: "Lightning-Fast Performance", color: "text-yellow-400" },
    { icon: Shield, text: "Enterprise Security", color: "text-green-400" },
    { icon: Globe, text: "Global Reach", color: "text-blue-400" },
    { icon: Cpu, text: "Quantum Computing", color: "text-purple-400" },
    { icon: Database, text: "Big Data Analytics", color: "text-pink-400" }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Building },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Expert Support", icon: Users },
    { number: "300%", label: "Average ROI", icon: TrendingUp }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Leading AI Innovation</span>
            </motion.div>

            {/* Dynamic Hero Text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                <span className="block">Transform Your</span>
                <span className="block holographic text-6xl lg:text-8xl">
                  {heroTexts[currentText]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Unlock the power of AI, quantum computing, and autonomous systems. 
                We deliver cutting-edge solutions that drive 300% ROI and transform 
                enterprises into digital leaders.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    scale: isVisible ? 1 : 0.8 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1 + index * 0.1 
                  }}
                  className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="cyber-button group flex items-center justify-center space-x-2 px-8 py-4 text-lg">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="quantum-button group flex items-center justify-center space-x-2 px-8 py-4 text-lg">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* 3D Card Container */}
            <div className="relative perspective-1000">
              <motion.div
                className="cyber-card p-8 space-y-6"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Excellence</h3>
                  <p className="text-gray-300">
                    Leading the future of artificial intelligence and machine learning
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isVisible ? 1 : 0, 
                        scale: isVisible ? 1 : 0.8 
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.6 + index * 0.1 
                      }}
                      className="text-center p-4 bg-slate-800/50 rounded-lg border border-cyan-400/20"
                    >
                      <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>AI Implementation</span>
                    <span>95%</span>
                  </div>
                  <div className="cyber-progress">
                    <motion.div
                      className="cyber-progress-bar"
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? "95%" : 0 }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Client Satisfaction</span>
                    <span>98%</span>
                  </div>
                  <div className="cyber-progress">
                    <motion.div
                      className="cyber-progress-bar"
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? "98%" : 0 }}
                      transition={{ duration: 2, delay: 2.2 }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>ROI Achievement</span>
                    <span>300%</span>
                  </div>
                  <div className="cyber-progress">
                    <motion.div
                      className="cyber-progress-bar"
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? "100%" : 0 }}
                      transition={{ duration: 2, delay: 2.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-slate-900"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </div>
  );
};

export default FuturisticHero;