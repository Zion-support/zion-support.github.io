<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Star, 
  Rocket, 
  Infinity, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const RevolutionaryServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalServices: 0,
    totalRevenue: 0,
    happyClients: 0,
    successRate: 0
  });
=======
import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'Revolutionary AI', name: 'Revolutionary AI', icon: <Brain className="w-5 h-5" /> },
    { id: 'Reality Technology', name: 'Reality Tech', icon: <Zap className="w-5 h-5" /> },
    { id: 'Temporal Technology', name: 'Temporal Tech', icon: <Clock className="w-5 h-5" /> },
    { id: 'Consciousness Technology', name: 'Consciousness', icon: <Star className="w-5 h-5" /> },
    { id: 'Communication Technology', name: 'Communication', icon: <Rocket className="w-5 h-5" /> },
    { id: 'Matter Technology', name: 'Matter Tech', icon: <Infinity className="w-5 h-5" /> }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 6);

  useEffect(() => {
    // Calculate stats
    const totalRevenue = COMPREHENSIVE_SERVICES.reduce((sum, service) => sum + service.price, 0);
    const totalReviews = COMPREHENSIVE_SERVICES.reduce((sum, service) => sum + service.reviews.count, 0);
    const avgRating = COMPREHENSIVE_SERVICES.reduce((sum, service) => sum + service.reviews.rating, 0) / COMPREHENSIVE_SERVICES.length;
    
    setStats({
      totalServices: COMPREHENSIVE_SERVICES.length,
      totalRevenue: totalRevenue,
      happyClients: totalReviews,
      successRate: Math.round(avgRating * 20) // Convert 5-star rating to percentage
    });
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Revolutionary AI': return <Brain className="w-6 h-6" />;
      case 'Reality Technology': return <Globe className="w-6 h-6" />;
      case 'Temporal Technology': return <Clock className="w-6 h-6" />;
      case 'Consciousness Technology': return <Star className="w-6 h-6" />;
      case 'Communication Technology': return <Rocket className="w-6 h-6" />;
      case 'Matter Technology': return <Infinity className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Revolutionary AI': return 'from-purple-600 to-pink-600';
      case 'Reality Technology': return 'from-blue-600 to-cyan-600';
      case 'Temporal Technology': return 'from-yellow-600 to-orange-600';
      case 'Consciousness Technology': return 'from-green-600 to-emerald-600';
      case 'Communication Technology': return 'from-red-600 to-pink-600';
      case 'Matter Technology': return 'from-indigo-600 to-purple-600';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge technologies. From AI consciousness to reality manipulation, 
            we offer solutions that were once thought impossible.
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const RevolutionaryServicesShowcase2026 = () => {
  const services = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Deploy intelligent agents that work autonomously to optimize your business processes and drive innovation.",
      icon: Brain,
      features: ["24/7 Autonomous Operation", "Self-Learning Capabilities", "Multi-Task Processing", "Real-time Decision Making"],
      category: "AI Innovation",
      price: "Starting at $2,999/month",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-AI Computing",
      description: "Harness the power of quantum computing combined with AI for unprecedented computational capabilities.",
      icon: Zap,
      features: ["Exponential Speed Increase", "Complex Problem Solving", "Quantum Machine Learning", "Secure Quantum Communication"],
      category: "Quantum Technology",
      price: "Custom Pricing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Systems",
      description: "Connect human consciousness directly with AI systems for seamless human-machine collaboration.",
      icon: Cpu,
      features: ["Thought-to-Computer Control", "Enhanced Cognitive Abilities", "Real-time Data Processing", "Secure Neural Networks"],
      category: "Neural Technology",
      price: "Starting at $4,999/month",
      featured: true
    },
    {
      id: 4,
      title: "Edge AI Solutions",
      description: "Bring artificial intelligence to the edge of your network for real-time, low-latency processing.",
      icon: Smartphone,
      features: ["Real-time Processing", "Offline Capabilities", "Privacy Protection", "Scalable Deployment"],
      category: "Edge Computing",
      price: "Starting at $1,999/month",
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Cybersecurity",
      description: "Advanced AI systems that predict, detect, and neutralize cyber threats in real-time.",
      icon: Shield,
      features: ["Threat Prediction", "Real-time Response", "Zero-day Protection", "Continuous Learning"],
      category: "Cybersecurity",
      price: "Starting at $3,499/month",
      featured: false
    },
    {
      id: 6,
      title: "Quantum Data Analytics",
      description: "Process massive datasets with quantum-enhanced analytics for deeper insights and faster results.",
      icon: Database,
      features: ["Quantum Data Processing", "Advanced Pattern Recognition", "Predictive Analytics", "Real-time Insights"],
      category: "Data Analytics",
      price: "Starting at $2,499/month",
      featured: false
    }
  ];

  const stats = [
    { label: "Clients Served", value: "500+", icon: Globe },
    { label: "Success Rate", value: "99.8%", icon: CheckCircle },
    { label: "Cost Reduction", value: "85%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star }
  ];</p>
</p>
  return (</p>
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 mb-6">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">REVOLUTIONARY SERVICES 2026</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Next-Gen AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"></p>
            Our cutting-edge AI services are designed to revolutionize how you do business, </p>
            providing unprecedented efficiency, intelligence, and competitive advantage.</p>
          </p>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stats.totalServices}
            <div className="text-gray-300">Revolutionary Services
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{formatPrice(stats.totalRevenue)}
            <div className="text-gray-300">Total Value Created
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stats.happyClients}
            <div className="text-gray-300">Happy Clients
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stats.successRate}%
            <div className="text-gray-300">Success Rate
        </motion.div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            ></button>
              {category.icon}</button>
              {category.name}</button>
            </button>
          ))}
        </motion.div>
        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Revolutionary Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  {/* AI Score Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold">
                      <Award className="w-4 h-4" />
                      {service.aiScore}
                  {/* Category Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {getCategoryIcon(service.category)}
                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3"></p>
                    {service.description}</p>
                  </p>
                  {/* Price */}
                  <div className="text-2xl font-bold text-white mb-4">
                    {formatPrice(service.price)}
                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                    ))}
                  {/* Delivery Time */}
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    Delivery: {service.deliveryTime}
                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </motion.div>
        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Revolutionary Services' : `${selectedCategory} Services`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-white`}>
                    {getCategoryIcon(service.category)}
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{formatPrice(service.price)}
                    <div className="text-xs text-gray-400">AI Score: {service.aiScore}
                <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2"></p>
                  {service.description}</p>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.deliveryTime}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    View Details
                  </motion.button>
              </motion.div>
            ))}
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join the revolution and be among the first to experience technologies that will reshape the future.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Transformation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}
                <div className="text-sm text-gray-600">{stat.label}
            );
          })}
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  service.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      FEATURED
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4"></p>
                    {service.description}</p>
                  </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{service.price}
                  <div className="text-sm text-gray-500">Flexible payment options available
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
            );
          })}
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"></p>
            Join hundreds of forward-thinking companies already using our revolutionary AI services </p>
            to gain competitive advantage and drive unprecedented growth.</p>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
<<<<<<< HEAD
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
  );
};

export default RevolutionaryServicesShowcase2026;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
=======
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
