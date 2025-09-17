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

const RevolutionaryServicesShowcase2026: React.FC = () => {
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
=======
>>>>>>> origin/merged-prs
import React from 'react';

const COMPONENT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default RevolutionaryServicesShowcase2026;
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
