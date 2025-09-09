import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Lock, 
  Cpu, 
  Code, 
  Users, 
  Globe, 
  Server, 
  Building,
  Zap,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  DollarSign,
  Clock,
  Target,
  Award,
  Lightbulb
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  features: string[];
  benefits: string[];
  innovationLevel: string;
  roi: string;
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
}

export function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum')).length },
    { id: 'emerging-technology', name: 'Emerging Technology', icon: Lightbulb, color: 'from-zion-purple to-zion-orange', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Emerging')).length },
    { id: 'industry-solutions', name: 'Industry Solutions', icon: Building, color: 'from-zion-blue to-zion-green', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Industry')).length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-zion-cyan to-zion-blue', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('IT Infrastructure')).length }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        return a.innovationLevel === 'Cutting-edge' ? -1 : 1;
      case 'roi':
        return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const getInnovationBadge = (level: string) => {
    switch (level) {
      case 'Cutting-edge':
        return 'bg-gradient-to-r from-zion-purple to-zion-pink text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white';
      default:
        return 'bg-zion-slate-light/20 text-zion-slate-light';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-responsive font-bold mb-6">
            <span className="text-gradient">Innovative Technology</span>
            <br />
            <span className="text-white">Services Showcase</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge micro SAAS solutions designed to transform businesses 
            across industries with AI, quantum computing, cybersecurity, and emerging technologies.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-zion-cyan" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="featured">Featured</option>
                <option value="innovation">Most Innovative</option>
                <option value="roi">Highest ROI</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              <span className="ml-1 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          {sortedServices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="card-futuristic group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Innovation Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </div>

                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                        <getCategoryIcon(service.category) className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                        <div className="text-sm text-zion-slate-light">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4 mb-6">
                    {/* Category & ROI */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan font-medium">{service.category}</span>
                      <div className="flex items-center gap-1 text-zion-green">
                        <TrendingUp className="w-4 h-4" />
                        <span>{service.roi}</span>
                      </div>
                    </div>

                    {/* Market Price & Delivery */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-zion-slate-light">
                        Market: {service.marketPrice}
                      </div>
                      <div className="flex items-center gap-1 text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Target className="w-4 h-4 text-zion-cyan" />
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-zion-purple" />
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <Star className="w-3 h-3 text-zion-purple" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{service.supportLevel}</span>
                      </div>
                    </div>
                    
                    <button className="btn-futuristic px-4 py-2 text-sm group-hover:scale-105 transition-transform">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn-futuristic px-6 py-3"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+
              </div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">
                {categories.length}
              </div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">
                $2.5B+
              </div>
              <div className="text-zion-slate-light">Total Market Value</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}