import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Search,;
  Filter, ;
  Star, ;
  Zap, ;
  Brain, ;
  Shield, ;
  Cloud, ;
  Heart, ;
  TrendingUp, ;
  Users, ;
  Globe, ;
  Cpu, ;
  Lock, ;
  Target, ;
  Rocket, ;
  Sparkles,;
  ChevronDown,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  Globe as GlobeIcon,;
  Award,;
  Clock,;
  DollarSign,;
  BarChart3;
} from "lucide-react"
import { INNOVATIVE_SERVICES_2028 } from "../data/innovativeServices2028"
const UltimateServicesShowcase2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [sortBy, setSortBy] = useState('name'),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [expandedService, setExpandedService] = useState<string | null>(null),;

  //[^;]*
  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES_2028.map(service => service.category)))]

  //[^;]*
  const filteredServices = INNOVATIVE_SERVICES_2028;
    .filter(service => ;
      selectedCategory === 'all' || service.category === selectedCategory
    );
    .filter(service => ;
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    );
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return a.price - b.price,;
        case 'category':;
          return a.category.localeCompare(b.category),;
        case 'innovation':;
          return a.innovationLevel === 'revolutionary' ? 1 : -1,
        case 'name':;
        default: return a.title.localeCompare(b.title)
      };
    });
  const getCategoryIcon = (category: string) => {;
    const icons: Record<string, React.ReactNode> = {;
      'AI & Enterprise': <Brain className="w-5 h-5" />,;
      'Quantum Computing': <Zap className="w-5 h-5" />,;
      'Cybersecurity': <Shield className="w-5 h-5" />,;
      'Healthcare Technology': <Heart className="w-5 h-5" />,;
      'Financial Technology': <DollarSign className="w-5 h-5" />,;
      'Supply Chain': <Globe className="w-5 h-5" />,;
      'Content Marketing': <Target className="w-5 h-5" />,;
      'Project Management': <Rocket className="w-5 h-5" />,;
      'Customer Support': <Users className="w-5 h-5" />,;
      'Marketing Automation': <[^>]*/>
    },;
    return icons[category] || <Sparkles className="w-5 h-5" />,
  },;

  const getInnovationLevelColor = (level: string) => {;
    switch (level) {;
      case 'revolutionary':;
        return 'from-purple-500 to-pink-500'
      case 'cutting-edge':;
        return 'from-blue-500 to-cyan-500',;
      default: return 'from-green-500 to-emerald-500'
    };
  };
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1,transition: {;
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 };
    visible: {;
      y: 0,opacity: 1,transition: {;
        duration: 0.5,ease: "easeOut"
      };
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">;
      {/* Futuristic Animated Background */};
      <div className="fixed inset-0 overflow-hidden pointer-events-none">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></[^>]*>
        <div className="absolute inset-0">;
          {[...Array(20)].map((_, i) => (;
            <motion.div
              key={i};
              className="[^"]*"
              animate={{;
                x: [0, 100, 0],;
                y: [0, -100, 0],;
                opacity: [0.3, 1, 0.3],;
                scale: [0.5, 1.5, 0.5]
              }};
              transition={{;
                duration: 6 + i * 0.2,repeat: Infinity,delay: i * 0.1,ease: "easeInOut"
              }};
              style={{;
                left: `${Math.random() * 100}%`
                top: `${Math.random() * 100}%`
              }};
            />;
          ))};
        </[^>]*>
      </[^>]*>

      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              2028 Services;
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Revolutionary AI, Quantum Computing, and Next-Generation Technology Solutions;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4 mb-8">;
              <div className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2">;
                <[^>]*/>
                <span className="text-cyan-400 font-medium">Cutting-Edge Innovation</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2">;
                <[^>]*/>
                <span className="text-purple-400 font-medium">Quantum Technology</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">;
                <[^>]*/>
                <span className="text-green-400 font-medium">AI-Powered Solutions</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filter Section */};
      <section className="px-4 sm:px-6 lg:px-8 mb-12">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">;
            <div className="flex flex-col lg:flex-row gap-4 items-center">;
              {/* Search */};
              <div className="flex-1 relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services, features, or categories..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>

              {/* Category Filter */};
              <div className="relative">;
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>;
                      {category === 'all' ? 'All Categories' : category}
                    </[^>]*>
                  ))};
                </[^>]*>
                <[^>]*/>
              </[^>]*>

              {/* Sort */};
              <div className="relative">;
                <select;
                  value={sortBy};
                  onChange={(e) => setSortBy(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="name">Sort by Name</[^>]*>
                  <option value="price">Sort by Price</[^>]*>
                  <option value="category">Sort by Category</[^>]*>
                  <option value="innovation">Sort by Innovation</[^>]*>
                </[^>]*>
                <[^>]*/>
              </[^>]*>

              {/* View Mode Toggle */};
              <div className="flex bg-slate-700/50 border border-slate-600/50 rounded-xl p-1">;
                <button;
                  onClick={() => setViewMode('grid')};
                  className={`px-3 py-2 rounded-lg transition-colors ${;
                    viewMode === 'grid' ;
                      ? 'bg-cyan-500/20 text-cyan-400' ;
                      : 'text-gray-400 hover:text-white'
                  }`};
                >;
                  Grid;
                </[^>]*>
                <button;
                  onClick={() => setViewMode('list')};
                  className={`px-3 py-2 rounded-lg transition-colors ${;
                    viewMode === 'list' ;
                      ? 'bg-cyan-500/20 text-cyan-400' ;
                      : 'text-gray-400 hover:text-white'
                  }`};
                >;
                  List;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid/List */};
      <section className="px-4 sm:px-6 lg:px-8 mb-20">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            variants={containerVariants};
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ;
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' ;
              : 'space-y-6'
            };
          >;
            {filteredServices.map((service) => (;
              <motion.div
                key={service.id};
                variants={itemVariants};
                className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${;
                  viewMode === 'list' ? 'flex' : ''
                }`};
              >;
                {viewMode === 'grid' ? (;
                  //[^;]*
                  <div className="p-6">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex items-center gap-3">;
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)}`}>;
                          {getCategoryIcon(service.category)};
                        </[^>]*>
                        <div>;
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>;
                            {service.innovationLevel};
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="text-right">;
                        <div className="text-2xl font-bold text-cyan-400">;
                          {service.currency}{service.price.toLocaleString()};
                        </[^>]*>
                        <div className="text-sm text-gray-400">per {service.pricingModel}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</[^>]*>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</[^>]*>

                    <div className="space-y-3 mb-4">;
                      <div className="flex items-center gap-2 text-sm text-gray-400">;
                        <[^>]*/>
                        <span>ROI: {service.roi}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-2 text-sm text-gray-400">;
                        <[^>]*/>
                        <span>Delivery: {service.estimatedDelivery}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-2 text-sm text-gray-400">;
                        <[^>]*/>
                        <span>Support: {service.supportLevel}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div className="flex flex-wrap gap-2 mb-4">;
                      {service.tags.slice(0, 3).map((tag, index) => (;
                        <span;
                          key={index};
                          className="[^"]*"
                        >;
                          {tag};
                        </[^>]*>
                      ))};
                    </[^>]*>

                    <div className="flex items-center justify-between">;
                      <button;
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="[^"]*"
                      >;
                        {expandedService === service.id ? 'Show Less' : 'Learn More'}
                        <[^>]*/>
                      </[^>]*>
                      <Link;
                        to={`/services/${service.id}`};
                        className="[^"]*"
                      >;
                        Get Started;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>

                    {/* Expanded Content */};
                    <AnimatePresence>;
                      {expandedService === service.id && (;&& (; (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }};
                          animate={{ opacity: 1, height: 'auto' }};
                          exit={{ opacity: 0, height: 0 }};
                          transition={{ duration: 0.3 }};
                          className="[^"]*"
                        >;
                          <div className="space-y-4">;
                            <div>;
                              <h4 className="font-semibold text-white mb-2">Key Features</[^>]*>
                              <ul className="space-y-1">;
                                {service.features.slice(0, 5).map((feature, index) => (;
                                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">;
                                    <[^>]*/>
                                    {feature};
                                  </[^>]*>
                                ))};
                              </[^>]*>
                            </[^>]*>
                            <div>;
                              <h4 className="font-semibold text-white mb-2">Benefits</[^>]*>
                              <ul className="space-y-1">;
                                {service.benefits.slice(0, 3).map((benefit, index) => (;
                                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">;
                                    <[^>]*/>
                                    {benefit};
                                  </[^>]*>
                                ))};
                              </[^>]*>
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      )};
                    </[^>]*>
                  </[^>]*>
                ) : (;
                  //[^;]*
                  <div className="flex-1 p-6">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex items-center gap-4">;
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)}`}>;
                          {getCategoryIcon(service.category)};
                        </[^>]*>
                        <div>;
                          <h3 className="text-xl font-bold text-white mb-1">{service.title}</[^>]*>
                          <p className="text-gray-400 text-sm">{service.category}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="text-right">;
                        <div className="text-2xl font-bold text-cyan-400">;
                          {service.currency}{service.price.toLocaleString()};
                        </[^>]*>
                        <div className="text-sm text-gray-400">per {service.pricingModel}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <p className="text-gray-300 mb-4">{service.description}</[^>]*>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">;
                      <div className="text-center">;
                        <div className="text-lg font-bold text-cyan-400">{service.roi}</[^>]*>
                        <div className="text-xs text-gray-400">ROI</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-lg font-bold text-purple-400">{service.estimatedDelivery}</[^>]*>
                        <div className="text-xs text-gray-400">Delivery</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-lg font-bold text-green-400">{service.supportLevel}</[^>]*>
                        <div className="text-xs text-gray-400">Support</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-lg font-bold text-yellow-400">{service.marketPrice}</[^>]*>
                        <div className="text-xs text-gray-400">Market Price</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-2">;
                        {service.tags.slice(0, 4).map((tag, index) => (;
                          <span;
                            key={index};
                            className="[^"]*"
                          >;
                            {tag};
                          </[^>]*>
                        ))};
                      </[^>]*>
                      <Link;
                        to={`/services/${service.id}`};
                        className="[^"]*"
                      >;
                        Get Started;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>

          {filteredServices.length === 0 && (;&& (; (
            <div className="text-center py-20">;
              <div className="text-6xl mb-4">🔍</[^>]*>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</[^>]*>
              <p className="text-gray-400">Try adjusting your search or filter criteria</[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="px-4 sm:px-6 lg:px-8 mb-20">;
        <div className="max-w-4xl mx-auto">;
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Let's discuss how our cutting-edge 2028 services can revolutionize your operations;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                +1 302 464 0950;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            <div className="mt-6 text-sm text-gray-400">;
              <p>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default UltimateServicesShowcase2028;