import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Cloud,
  Lock,
  Wifi,
  Smartphone,
  Server,
  Database
} from 'lucide-react';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G speeds up to 10 Gbps for seamless enterprise operations"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Advanced security protocols and encryption for sensitive business data"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming capabilities"
    },
    {
      icon: Cpu,
      title: "Low Latency",
      description: "Ultra-low latency (<1ms) for real-time applications and IoT devices"
    },
    {
      icon: Users,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer"
    },
    {
      icon: Building,
      title: "Enterprise Integration",
      description: "Seamless integration with existing enterprise infrastructure and systems"
    }
  ];

  const solutions = [
    {
      title: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise campuses, factories, and offices",
      features: ["Custom network slicing", "Enhanced security", "Predictable performance", "Full control"]
    },
    {
      title: "5G Edge Computing",
      description: "Distributed computing infrastructure at the network edge for faster processing",
      features: ["Reduced latency", "Bandwidth optimization", "Real-time analytics", "Local processing"]
    },
    {
      title: "5G IoT Platforms",
      description: "Comprehensive IoT management with 5G connectivity",
      features: ["Device management", "Data analytics", "Automation", "Scalability"]
    },
    {
      title: "5G Network Optimization",
      description: "AI-powered network optimization for maximum performance and efficiency",
      features: ["Predictive maintenance", "Traffic optimization", "Resource allocation", "Performance monitoring"]
    }
  ];

  const benefits = [
    "10x faster data transfer speeds",
    "99.9% network reliability",
    "50% reduction in operational costs",
    "Real-time data processing",
    "Enhanced mobile workforce productivity",
    "Future-proof technology infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              ultra-low latency, and massive IoT support for the next generation of business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/5g-network-optimization"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our enterprise-grade 5G solutions deliver unmatched performance, security, and reliability 
              to power your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <>
      <SEOHead 
        title="5G Enterprise Solutions | Next-Generation Connectivity"
        description="Transform your business with Zion Tech Group's 5G enterprise solutions. Private networks, edge computing, IoT integration, and industrial automation."
        keywords="5G enterprise, private 5G networks, edge computing, industrial automation, network slicing, 5G security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <Signal className="w-4 h-4 mr-2" />
                Next-Generation Enterprise Connectivity
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                5G Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Transform your business operations with cutting-edge 5G technology. From private networks to edge computing integration, unlock unprecedented connectivity and performance.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Request Demo
                </Link>
              </motion.div>
