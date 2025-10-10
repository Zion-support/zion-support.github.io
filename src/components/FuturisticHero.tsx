import React, { useEffect, useState } from 'react';
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
  Code,
  BarChart3,
  Users,
  Target,
  MessageSquare,
  Eye,
  Settings,
  Lock,
  Cloud,
  Smartphone,
  CheckCircle,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "AI-Powered Enterprise Solutions",
    "Quantum Computing Services",
    "Advanced Cybersecurity",
    "Machine Learning Platforms",
    "Blockchain Technology",
    "Cloud Infrastructure"
  ];

  const services = [
    { icon: Brain, title: "AI Solutions", color: "from-cyan-400 to-blue-500" },
    { icon: Shield, title: "Cybersecurity", color: "from-purple-400 to-pink-500" },
    { icon: Cloud, title: "Cloud Services", color: "from-green-400 to-emerald-500" },
    { icon: Code, title: "Development", color: "from-orange-400 to-red-500" },
    { icon: BarChart3, title: "Analytics", color: "from-violet-400 to-purple-500" },
    { icon: Users, title: "Consulting", color: "from-rose-400 to-pink-500" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-network opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Leading AI Innovation</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-white">Transform Your</span>
              <span className="block cyber-text text-6xl lg:text-8xl">
                {heroTexts[currentText]}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Unlock the power of cutting-edge AI, quantum computing, and advanced cybersecurity 
              solutions. We deliver enterprise-grade technology that drives innovation and growth.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-2 mx-auto">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="futuristic-btn px-8 py-4 text-lg group">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="cyber-button px-8 py-4 text-lg group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Central Hub */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Central Brain Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center quantum-pulse">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              {/* Orbiting Service Cards */}
              {services.map((service, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0, 
                      scale: isVisible ? 1 : 0,
                      x: x,
                      y: y
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex flex-col items-center justify-center p-3 cyber-card hover:scale-110 transition-all duration-300 cursor-pointer group`}>
                      <service.icon className="w-8 h-8 text-white mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-white text-center leading-tight">
                        {service.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {services.map((_, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 120;
                  const x1 = 160 + Math.cos(angle) * radius;
                  const y1 = 160 + Math.sin(angle) * radius;
                  const x2 = 160;
                  const y2 = 160;

                  return (
                    <motion.line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isVisible ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturisticHero;