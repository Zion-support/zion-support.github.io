import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Users, Award, Brain, Atom, Rocket, 
  Shield, Cloud, Database, Code, Server, Zap, Palette,
  Cpu, BarChart3, Settings, Target, CheckCircle, Play,
  ChevronRight, ChevronLeft, Phone, Mail, MapPin
} from 'lucide-react';

const Homepage2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroSlides = [
    {
      title: "AI Consciousness Evolution",
      subtitle: "Revolutionary AI consciousness platform with emotional intelligence and self-awareness",
      description: "Experience the future of AI with our groundbreaking consciousness evolution platform that develops emotional intelligence, self-awareness, and advanced cognitive capabilities.",
      icon: <Brain className="w-16 h-16" />,
      color: "from-purple-600 to-indigo-700",
      textColor: "text-purple-400",
      link: "/ai-consciousness-evolution-2040"
    },
    {
      title: "Quantum Neural Ecosystem",
      subtitle: "Hybrid quantum-AI computing for unprecedented computational power",
      description: "Unlock the power of quantum computing combined with advanced AI in our revolutionary neural ecosystem that delivers exponential performance improvements.",
      icon: <Atom className="w-16 h-16" />,
      color: "from-cyan-600 to-blue-700",
      textColor: "text-cyan-400",
      link: "/quantum-neural-ecosystem-2040"
    },
    {
      title: "Space Resource Intelligence",
      subtitle: "Advanced space technology solutions for resource exploration and management",
      description: "Pioneer the future of space exploration with our cutting-edge space resource intelligence platform that revolutionizes how we discover and utilize extraterrestrial resources.",
      icon: <Rocket className="w-16 h-16" />,
      color: "from-pink-600 to-red-700",
      textColor: "text-pink-400",
      link: "/space-resource-intelligence-2040"
    }
  ];

  const featuredServices = [
    {
      name: "AI Autonomous Code Review",
      description: "Automated code quality analysis with AI-powered insights and security scanning",
      icon: <Code className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-700",
      link: "/ai-autonomous-code-review"
    },
    {
      name: "Zero Trust Network Architecture",
      description: "Comprehensive zero-trust security implementation with continuous verification",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-600 to-pink-700",
      link: "/zero-trust-network-architecture"
    },
    {
      name: "Multi-Cloud Orchestration Platform",
      description: "Unified cloud management platform for seamless multi-cloud operations",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-700",
      link: "/multi-cloud-orchestration-platform"
    },
    {
      name: "AI-Powered Content Generation",
      description: "Advanced AI platform for creating high-quality, personalized content at scale",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-pink-700",
      link: "/ai-content-generation-platform"
    }
  ];

  const stats = [
    { number: "25+", label: "Innovative Services", icon: <Zap className="w-6 h-6" /> },
    { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Award className="w-6 h-6" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Combine all revolutionary services
  const allRevolutionaryServices = [...revolutionary2041AdvancedServices];

  const statsData = [
    {
      number: "100+",
      label: "Innovative Services",
      description: "Cutting-edge solutions",
      icon: Sparkles,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300"
    },
    {
      number: "∞",
      label: "Future Possibilities",
      description: "Unlimited potential",
      icon: InfinityIcon,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      number: "10x",
      label: "Performance Boost",
      description: "Quantum enhancement",
      icon: Lightning,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300"
    }
  ];

  // Combine all services for showcase
  const allServices = [...innovativeMicroSaasServices2025V2, ...emergingTechServices2025V2];
  const featuredServices = allServices.filter(service => service.popular).slice(0, 6);

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      count: allServices.filter(s => s.category.includes('AI')).length,
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Quantum Technology",
      icon: Atom,
      count: allServices.filter(s => s.category.includes('Quantum')).length,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Emerging Tech",
      icon: Rocket,
      count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Space')).length,
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cyber')).length,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Elements with reduced animation for better performance */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Company Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              role="banner"
              aria-label="Company recognition"
            >
              Welcome to the
              <br />
              <span className="text-6xl md:text-8xl">Future of Technology</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/comprehensive-2025-services-showcase"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300">
              Join the revolution with Zion Tech Group's cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  <span className="flex items-center gap-3 text-lg">
                    Contact Us
                    <ArrowRight className="w-6 h-6" />
                  </span>
                </button>
              </Link>
              <Link href="/get-started">
                <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage2040;