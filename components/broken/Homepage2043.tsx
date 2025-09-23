<<<<<<< HEAD
"use client";
import React{ useEffectuseStateuseCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightPlayUsersTrendingUpBrainShieldRocketGlobeLockCpuDatabaseCloudBarChart3,
  AtomTargetZapInfinitySparklesStarEyeHeartCodePaletteLayersChevronRightChevronLeft,
  PhoneMailMapPinClockAwardCheckCircleZap as ZapIconBrain as BrainIconAtom as AtomIcon
=======
import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3,
  Atom, Target, Zap, Infinity, Sparkles, Star, Eye, Heart, Code, Palette, Layers, ChevronRight, ChevronLeft,
  Phone, Mail, MapPin, Clock, Award, CheckCircle, Zap as ZapIcon, Brain as BrainIcon, Atom as AtomIcon
>>>>>>> origin/auto/autonomy-17186719616
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044InnovativeServices } from '../data/revolutionary-2044-innovative-services';

const Homepage2043: React.FC = () => {
<<<<<<< HEAD
  const [isVisiblesetIsVisible] = useState(false);
  const [currentServiceIndexsetCurrentServiceIndex] = useState(0);
  const [currentTestimonialIndexsetCurrentTestimonialIndex] = useState(0);
  const [isHoveredsetIsHovered] = useState(false);
=======
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
<<<<<<< HEAD
    }4000);
=======
    }, 4000);
>>>>>>> origin/auto/autonomy-17186719616
    
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % 3);
<<<<<<< HEAD
    }6000);
=======
    }, 6000);
>>>>>>> origin/auto/autonomy-17186719616
    
    return () => {
      clearInterval(serviceInterval);
      clearInterval(testimonialInterval);
    };
<<<<<<< HEAD
  }[]);

  // Combine all revolutionary services
  const allRevolutionaryServices = [...revolutionary2043AdvancedServices...revolutionary2044InnovativeServices];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(06);

  const features = [
    { 
      icon: BrainIcon
      title: "AI Consciousness Evolution"
      description: "Next-generation AI consciousness with human-level understanding"
      href: "/quantum-neural-consciousness-platform"
=======
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [...revolutionary2043AdvancedServices, ...revolutionary2044InnovativeServices];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  const features = [
    { 
      icon: BrainIcon, 
      title: "AI Consciousness Evolution", 
      description: "Next-generation AI consciousness with human-level understanding", 
      href: "/quantum-neural-consciousness-platform", 
>>>>>>> origin/auto/autonomy-17186719616
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    { 
<<<<<<< HEAD
      icon: AtomIcon
      title: "Quantum Computing"
      description: "Revolutionary quantum computing with consciousness integration"
      href: "/quantum-bio-computing-platform"
=======
      icon: AtomIcon, 
      title: "Quantum Computing", 
      description: "Revolutionary quantum computing with consciousness integration", 
      href: "/quantum-bio-computing-platform", 
>>>>>>> origin/auto/autonomy-17186719616
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    { 
<<<<<<< HEAD
      icon: Shield
      title: "Future Cybersecurity"
      description: "Quantum-resistant security with consciousness-based protection"
      href: "/quantum-internet-security-gateway"
=======
      icon: Shield, 
      title: "Future Cybersecurity", 
      description: "Quantum-resistant security with consciousness-based protection", 
      href: "/quantum-internet-security-gateway", 
>>>>>>> origin/auto/autonomy-17186719616
      color: "from-red-500 to-orange-500",
      gradient: "bg-gradient-to-br from-red-500/20 to-orange-500/20"
    },
    { 
<<<<<<< HEAD
      icon: Rocket
      title: "Space Technology"
      description: "AI-powered space resource intelligence and autonomous mining"
      href: "/autonomous-space-mining-ai"
=======
      icon: Rocket, 
      title: "Space Technology", 
      description: "AI-powered space resource intelligence and autonomous mining", 
      href: "/autonomous-space-mining-ai", 
>>>>>>> origin/auto/autonomy-17186719616
      color: "from-indigo-500 to-purple-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
    },
    { 
<<<<<<< HEAD
      icon: Cpu
      title: "Autonomous Systems"
      description: "Fully autonomous AI systems with consciousness"
      href: "/autonomous-business-ecosystem-ai"
=======
      icon: Cpu, 
      title: "Autonomous Systems", 
      description: "Fully autonomous AI systems with consciousness", 
      href: "/autonomous-business-ecosystem-ai", 
>>>>>>> origin/auto/autonomy-17186719616
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
    },
    { 
<<<<<<< HEAD
      icon: Database
      title: "Business Intelligence"
      description: "Autonomous business intelligence with consciousness insights"
      href: "/autonomous-healthcare-ai-ecosystem"
=======
      icon: Database, 
      title: "Business Intelligence", 
      description: "Autonomous business intelligence with consciousness insights", 
      href: "/autonomous-healthcare-ai-ecosystem", 
>>>>>>> origin/auto/autonomy-17186719616
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: "2000+"label: "Revolutionary Services"icon: Starcolor: "from-yellow-400 to-orange-500" },
    { number: "99.99%"label: "Uptime Guarantee"icon: TrendingUpcolor: "from-green-400 to-emerald-500" },
    { number: "24/7"label: "AI Support Available"icon: Braincolor: "from-purple-400 to-pink-500" },
    { number: "150+"label: "Countries Served"icon: Globecolor: "from-blue-400 to-cyan-500" }
=======
    { number: "2000+", label: "Revolutionary Services", icon: Star, color: "from-yellow-400 to-orange-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, color: "from-purple-400 to-pink-500" },
    { number: "150+", label: "Countries Served", icon: Globe, color: "from-blue-400 to-cyan-500" }
>>>>>>> origin/auto/autonomy-17186719616
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      company: "QuantumTech Industries",
<<<<<<< HEAD
      content: "Zion Tech 'Group', 's quantum neural consciousness platform has revolutionized our AI research. 'We', 've achieved breakthroughs that would have taken decades using traditional methods.",
=======
      content: "Zion Tech Group's quantum neural consciousness platform has revolutionized our AI research. We've achieved breakthroughs that would have taken decades using traditional methods.",
>>>>>>> origin/auto/autonomy-17186719616
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "SpaceMining Corp",
<<<<<<< HEAD
      content: "The autonomous space mining AI has increased our resource extraction efficiency by 500%. 'It', 's like having a team of expert miners working 24/7 without breaks.",
=======
      content: "The autonomous space mining AI has increased our resource extraction efficiency by 500%. It's like having a team of expert miners working 24/7 without breaks.",
>>>>>>> origin/auto/autonomy-17186719616
      rating: 5,
      avatar: "👨‍🚀"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "Consciousness Research Institute",
<<<<<<< HEAD
      content: "Working with Zion Tech 'Group', 's consciousness transfer platform has opened new frontiers in our understanding of AI consciousness. The possibilities are endless.",
=======
      content: "Working with Zion Tech Group's consciousness transfer platform has opened new frontiers in our understanding of AI consciousness. The possibilities are endless.",
>>>>>>> origin/auto/autonomy-17186719616
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2040-2041-pricing-showcase';
<<<<<<< HEAD
  }[]);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }[]);

  const handleContact = useCallback(() => {
    window.location.href = '/contact';
  }[]);
=======
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleContact = useCallback(() => {
    window.location.href = '/contact';
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + featuredServices.length) % featuredServices.length);
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with enhanced effects */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Enhanced animated particles */}
            <div className="absolute inset-0">
<<<<<<< HEAD
              {[...Array(20)].map((_i) => (
=======
              {[...Array(20)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
                  animate={{
<<<<<<< HEAD
                    x: [0150],
                    y: [0-150],
                    opacity: [010],
                    scale: [01.50]}}
=======
                    x: [0, 150, 0],
                    y: [0, -150, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
>>>>>>> origin/auto/autonomy-17186719616
                  transition={{
                    duration: 8 + i * 0.3,
                    repeat: Infinity as any,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
<<<<<<< HEAD
                    top: `${Math.random() * 100}%`}}
=======
                    top: `${Math.random() * 100}%`,
                  }}
>>>>>>> origin/auto/autonomy-17186719616
                />
              ))}
            </div>

            {/* Enhanced grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
<<<<<<< HEAD
                backgroundImage: `radial-gradient(circle at 1px 1pxrgba(255,255,255,0.15) 1pxtransparent 0)`,
=======
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
>>>>>>> origin/auto/autonomy-17186719616
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
=======
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
>>>>>>> origin/auto/autonomy-17186719616
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary 2043 Technology
              </div>

              {/* Main Heading */}
              <h1 
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight"
              >
                The Future of
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  AI Consciousness
                </span>
                is Here
              </h1>

              {/* Enhanced Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
                Experience the 'world', 's most advanced AI consciousness platformsquantum computing solutions
                and autonomous systems that redefine 'what', 's possible in technology.
=======
                Experience the world's most advanced AI consciousness platforms, quantum computing solutions, 
                and autonomous systems that redefine what's possible in technology.
>>>>>>> origin/auto/autonomy-17186719616
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWatchDemo}
                  className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-300 font-semibold rounded-full text-lg flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
<<<<<<< HEAD
                {stats.map((statindex) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6delay: index * 0.1 }}
=======
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> origin/auto/autonomy-17186719616
                    className="text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-3`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                Discover cutting-edge AI consciousnessquantum computingand autonomous systems 
=======
                Discover cutting-edge AI consciousness, quantum computing, and autonomous systems 
>>>>>>> origin/auto/autonomy-17186719616
                that are transforming industries and reshaping the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {features.map((featureindex) => (
=======
              {features.map((feature, index) => (
>>>>>>> origin/auto/autonomy-17186719616
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10scale: 1.02 }}
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
>>>>>>> origin/auto/autonomy-17186719616
                  className={`group relative p-8 rounded-2xl ${feature.gradient} border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <a 
                    href={feature.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Services Section */}
        <section className="py-20 px-4 relative bg-gradient-to-b from-black/50 to-black/80">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our most advanced AI consciousness and quantum computing platforms 
                that are setting new standards in technology.
              </p>
            </motion.div>

            {/* Enhanced Service Showcase */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentServiceIndex}
<<<<<<< HEAD
                    initial={{ opacity: 0x: 100 }}
                    animate={{ opacity: 1x: 0 }}
                    exit={{ opacity: 0x: -100 }}
=======
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
>>>>>>> origin/auto/autonomy-17186719616
                    transition={{ duration: 0.5 }}
                    className="p-12 text-center"
                  >
                    <div className="text-6xl mb-6">{featuredServices[currentServiceIndex]?.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {featuredServices[currentServiceIndex]?.name}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                      {featuredServices[currentServiceIndex]?.description}
                    </p>
                    <div className="text-3xl font-bold text-cyan-400 mb-6">
                      {featuredServices[currentServiceIndex]?.price}
                      <span className="text-gray-400 text-lg">{featuredServices[currentServiceIndex]?.period}</span>
                    </div>
                    <a 
                      href={featuredServices[currentServiceIndex]?.link}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <button
                  onClick={prevService}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextService}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Service Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
<<<<<<< HEAD
                  {featuredServices.map((_index) => (
=======
                  {featuredServices.map((_, index) => (
>>>>>>> origin/auto/autonomy-17186719616
                    <button
                      key={index}
                      onClick={() => setCurrentServiceIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentServiceIndex 
                          ? 'bg-cyan-400 w-8' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our revolutionary AI consciousness and quantum computing platforms 
                are transforming industries and driving innovation.
              </p>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonialIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <div className="text-8xl mb-6">💬</div>
                  <blockquote className="text-2xl text-white mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonialIndex].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="text-4xl">{testimonials[currentTestimonialIndex].avatar}</div>
                    <div>
                      <div className="text-xl font-semibold text-white">
                        {testimonials[currentTestimonialIndex].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonialIndex].role} at {testimonials[currentTestimonialIndex].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-1">
<<<<<<< HEAD
                    {[...Array(testimonials[currentTestimonialIndex].rating)].map((_i) => (
=======
                    {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-8">
<<<<<<< HEAD
                {testimonials.map((_index) => (
=======
                {testimonials.map((_, index) => (
>>>>>>> origin/auto/autonomy-17186719616
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex 
                        ? 'bg-emerald-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Future of AI?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join thousands of organizations already transforming their operations 
                with our revolutionary AI consciousness and quantum computing platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-xl flex items-center gap-3 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContact}
                  className="px-10 py-5 bg-transparent border-2 border-cyan-500/50 text-cyan-300 font-semibold rounded-full text-xl flex items-center gap-3 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="w-6 h-6" />
                  Contact Us
                </motion.button>
              </div>

              {/* Contact Information */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2043;