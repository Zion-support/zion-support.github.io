import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Rocket, 
  Globe,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Lightbulb,
  Sparkles,
  Eye,
  Heart,
  Code,
  Database,
  Network,
  FileText,
  Search,
  Filter,
  Grid,
  List,
  X,
  Phone,
  Mail
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES_2025 } from '@/data/nextGenInnovativeServices2025';

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & quantum computing':
        return <Brain className="w-6 h-6" />;
      case 'ai & automation':
        return <Zap className="w-6 h-6" />;
      case 'blockchain & ai':
        return <Lock className="w-6 h-6" />;
      case 'ai & computing':
        return <Cpu className="w-6 h-6" />;
      case 'ai & biotechnology':
        return <Heart className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & quantum computing':
        return 'from-purple-500 to-cyan-500';
      case 'ai & automation':
        return 'from-blue-500 to-green-500';
      case 'blockchain & ai':
        return 'from-orange-500 to-red-500';
      case 'ai & computing':
        return 'from-indigo-500 to-purple-500';
      case 'ai & biotechnology':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-blue-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
        
        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20`}>
              {getCategoryIcon(service.category)}
            </div>
            <div className="flex items-center space-x-2">
              {service.featured && (
                <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                  FEATURED
                </div>
              )}
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{service.rating}</span>
                <span className="text-zion-slate-light text-xs">({service.reviewCount})</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Category and AI Score */}
          <div className="flex items-center justify-between mb-4">
            <div className="px-3 py-1 bg-zion-cyan/20 rounded-full text-xs font-medium text-zion-cyan">
              {service.category}
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-zion-purple" />
              <span className="text-sm font-medium text-white">AI Score: {service.aiScore}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-zion-slate-light text-sm">Starting from:</span>
              <span className="text-2xl font-bold text-zion-cyan">
                ${service.price.starter.toLocaleString()}
                <span className="text-sm text-zion-slate-light">/month</span>
              </span>
            </div>
            <div className="text-xs text-zion-slate-light mt-1">
              Market Price: {service.marketPrice}
            </div>
          </div>

          {/* Key Features Preview */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <div className="space-y-1">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                  <CheckCircle className="w-3 h-3 text-zion-cyan" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <div className="text-xs text-zion-cyan cursor-pointer hover:underline">
                  +{service.features.length - 3} more features
                </div>
              )}
            </div>
          </div>

          {/* ROI and Benefits */}
          <div className="mb-4 p-3 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-lg border border-zion-cyan/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-4 h-4 text-zion-cyan" />
              <span className="text-sm font-semibold text-white">Expected ROI</span>
            </div>
            <div className="text-lg font-bold text-zion-cyan">{service.roi}</div>
            <div className="text-xs text-zion-slate-light mt-1">
              {service.benefits.length} key benefits available
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </button>
            <Link
              to={`/services/${service.id}`}
              className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-4 pt-4 border-t border-zion-slate-light/20">
            <div className="flex items-center justify-between text-xs text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3" />
                <span>Delivery: {service.estimatedDelivery}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-3 h-3" />
                <span>{service.supportLevel} Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zion-cyan/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-zion-slate-light">{service.category} • {service.subcategory}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-zion-slate-light/20 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                    <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-zion-slate-light/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                    <div className="space-y-2">
                      {service.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-lg border border-zion-cyan/20">
                          <Sparkles className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Pricing Plans</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg border border-zion-cyan/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white">Starter</span>
                          <span className="text-2xl font-bold text-zion-cyan">${service.price.starter}</span>
                        </div>
                        <p className="text-sm text-zion-slate-light">Perfect for small teams and startups</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg border border-zion-purple/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white">Professional</span>
                          <span className="text-2xl font-bold text-zion-purple">${service.price.professional}</span>
                        </div>
                        <p className="text-sm text-zion-slate-light">Ideal for growing businesses</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 rounded-lg border border-zion-blue/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white">Enterprise</span>
                          <span className="text-2xl font-bold text-zion-blue">${service.price.enterprise}</span>
                        </div>
                        <p className="text-sm text-zion-slate-light">For large organizations and enterprises</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Use Cases</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {service.useCases.map((useCase: string, idx: number) => (
                        <div key={idx} className="p-3 bg-zion-slate-light/10 rounded-lg">
                          <span className="text-zion-slate-light">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.map((tech: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-zion-slate-light/10 rounded-lg">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{service.aiScore}</div>
                      <div className="text-sm text-zion-slate-light">AI Score</div>
                    </div>
                    <div className="p-4 bg-zion-slate-light/10 rounded-lg">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{service.rating}</div>
                      <div className="text-sm text-zion-slate-light">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact and CTA */}
              <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-zion-slate-light">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Estimated Delivery: {service.estimatedDelivery} • Support Level: {service.supportLevel}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Get Started</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const NextGenServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'aiScore'>('aiScore');

  const categories = ['all', ...Array.from(new Set(NEXT_GEN_INNOVATIVE_SERVICES_2025.map(s => s.category)))];
  
  const filteredServices = NEXT_GEN_INNOVATIVE_SERVICES_2025
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price.starter - b.price.starter;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
        default:
          return b.aiScore - a.aiScore;
      }
    });

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full border border-zion-cyan/30 mb-6">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">2025 Innovation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Innovative Services
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, quantum computing, blockchain, 
            and emerging technology solutions. Transform your business with unprecedented innovation.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Filters and Controls */}
            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate-dark">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
              >
                <option value="aiScore" className="bg-zion-slate-dark">AI Score</option>
                <option value="rating" className="bg-zion-slate-dark">Rating</option>
                <option value="price" className="bg-zion-slate-dark">Price</option>
                <option value="name" className="bg-zion-slate-dark">Name</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center space-x-1 p-1 bg-zion-slate-light/10 rounded-lg border border-zion-slate-light/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-zion-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all our innovative services.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12 border border-zion-cyan/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the future of technology with our cutting-edge innovative services. 
              Get in touch with our experts to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Our Experts</span>
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextGenServicesShowcase2025;