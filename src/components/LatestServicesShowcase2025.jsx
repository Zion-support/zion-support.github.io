import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Globe, 
  Zap, 
  Cpu, 
  Shield, 
  Rocket,
  Star,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
const LatestServicesShowcase2025 = () => {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const latestServices = [
    {
      id: 1,
      title: "Metaverse Business Solutions",
      description: "Complete metaverse integration for virtual commerce and immersive experiences",
      price: "$120,000",
      rating: 4.9,
      reviews: 89,
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      features: ["Virtual Storefronts", "Digital Asset Management", "AR/VR Integration", "Virtual Events"],
      benefits: ["New Revenue Streams", "Immersive Experiences", "Global Reach", "24/7 Operations"],
      category: "Metaverse Technology",
      aiScore: 97,
      deliveryTime: "20-28 weeks"
    },
    {
      id: 2,
      title: "Autonomous AI Agents",
      description: "Self-managing AI teams that lead departments and drive business innovation",
      price: "$85,000",
      rating: 4.8,
      reviews: 67,
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      features: ["Team Leadership AI", "Strategic Planning", "Resource Allocation", "Performance Optimization"],
      benefits: ["Autonomous Management", "Strategic Decisions", "Unprecedented Productivity", "24/7 Operations"],
      category: "Autonomous AI",
      aiScore: 96,
      deliveryTime: "18-24 weeks"
    },
    {
      id: 3,
      title: "Edge Computing Infrastructure",
      description: "Ultra-low latency edge computing for real-time AI processing",
      price: "$75,000",
      rating: 4.8,
      reviews: 156,
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      features: ["Edge AI Deployment", "Real-time Analytics", "Local Processing", "5G Integration"],
      benefits: ["Ultra-low Latency", "Real-time Processing", "Reduced Costs", "Enhanced Security"],
      category: "Edge Computing",
      aiScore: 94,
      deliveryTime: "12-16 weeks"
    },
    {
      id: 4,
      title: "Digital Twin Development",
      description: "Virtual replicas of physical systems for monitoring and optimization",
      price: "$95,000",
      rating: 4.9,
      reviews: 78,
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      features: ["3D Modeling", "Real-time Integration", "Simulation", "Predictive Analytics"],
      benefits: ["Real-time Monitoring", "Predictive Maintenance", "Optimized Performance", "Risk Reduction"],
      category: "Digital Twin Technology",
      aiScore: 98,
      deliveryTime: "16-22 weeks"
    },
    {
      id: 5,
      title: "Quantum AI Integration",
      description: "Quantum computing solutions integrated with AI for exponential speed",
      price: "$200,000",
      rating: 4.9,
      reviews: 45,
      icon: <Rocket className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      features: ["Quantum Algorithms", "AI Acceleration", "Optimization", "Cryptographic Solutions"],
      benefits: ["Exponential Speed", "Complex Problem Solving", "Advanced Optimization", "Future-Proof"],
      category: "Quantum Technology",
      aiScore: 99,
      deliveryTime: "24-32 weeks"
    },
    {
      id: 6,
      title: "AR Business Solutions",
      description: "Augmented Reality applications for enhanced customer experiences",
      price: "$65,000",
      rating: 4.7,
      reviews: 112,
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-600 to-blue-600",
      features: ["AR App Development", "3D Recognition", "Real-time Tracking", "Multi-platform"],
      benefits: ["Enhanced Engagement", "Improved Training", "Streamlined Operations", "Cost Reduction"],
      category: "Augmented Reality",
      aiScore: 92,
      deliveryTime: "10-14 weeks"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % latestServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentService = latestServices[activeService];
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Latest Services
            </span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge AI services that are transforming industries and reshaping the future of business
          </p>
        </div>
        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {latestServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setActiveService(index)}
                className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? `bg-gradient-to-br ${service.color} text-white shadow-2xl`
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`${activeService === index ? 'text-white' : 'text-gray-600'}`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm ${
                      activeService === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Star className={`w-3 h-3 ${
                        activeService === index ? 'text-yellow-300' : 'text-yellow-500'
                      }`} />
                      <span className={`text-xs ${
                        activeService === index ? 'text-white' : 'text-gray-600'
                      }`}>
                        {service.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`text-xs ${
                  activeService === index ? 'text-white opacity-90' : 'text-gray-500'
                }`}>
                  {service.category}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Active Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${currentService.color} p-8 rounded-2xl text-white shadow-2xl`}>
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      {currentService.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold">{currentService.title}</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-300" />
                          <span className="font-semibold">{currentService.rating}</span>
                          <span className="text-sm opacity-75">({currentService.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">AI Score: {currentService.aiScore}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{currentService.price}</div>
                    <div className="text-sm opacity-75">{currentService.deliveryTime}</div>
                  </div>
                </div>
                {/* Description */}
                <p className="text-lg mb-6 opacity-90">
                  {currentService.description}
                </p>
                {/* Features & Benefits */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>Key Features</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentService.features.map((feature, index) => (
                        <li key={index} className="text-sm opacity-90 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Benefits</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentService.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm opacity-90 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* CTA Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "New Services", value: "8", icon: <Rocket className="w-6 h-6" /> },
            { label: "AI Score Avg", value: "96%", icon: <Brain className="w-6 h-6" /> },
            { label: "Client Reviews", value: "547+", icon: <Star className="w-6 h-6" /> },
            { label: "Success Rate", value: "99%", icon: <TrendingUp className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

export default LatestServicesShowcase2025;