import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';
import { SPECIALIZED_MICRO_SAAS_SERVICES_2025 } from '../data/specializedMicroSaasServices2025';
import { EMERGING_TECHNOLOGY_SERVICES_2025 } from '../data/emergingTechnologyServices2025';

const ComprehensiveInnovativeServices2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...ADVANCED_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_MICRO_SAAS_SERVICES_2025,
    ...EMERGING_TECHNOLOGY_SERVICES_2025
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Technology':
        return <Cpu className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'DevOps & Automation':
        return <Code className="w-6 h-6" />;
      case 'Customer Experience':
        return <Users className="w-6 h-6" />;
      case 'Supply Chain & Logistics':
        return <Network className="w-6 h-6" />;
      case 'Financial Technology':
        return <BarChart3 className="w-6 h-6" />;
      case 'Healthcare Technology':
        return <Target className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Database className="w-6 h-6" />;
      case 'Edge Computing & IoT':
        return <Cloud className="w-6 h-6" />;
      case 'Autonomous Vehicles':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Lightbulb className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Services 2025
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions, micro-SaaS platforms, and emerging technology services designed to transform your business in 2025 and beyond
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">25+</div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <div>
                <div className="text-sm text-zion-slate-light">Phone</div>
                <div className="font-semibold">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <div>
                <div className="text-sm text-zion-slate-light">Email</div>
                <div className="font-semibold">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <div>
                <div className="text-sm text-zion-slate-light">Address</div>
                <div className="font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <select
                value={`${priceRange[0]}-${priceRange[1]}`}
                onChange={(e) => {
                  const [min, max] = e.target.value.split('-').map(Number);
                  setPriceRange([min, max]);
                }}
                className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                <option value="0-50000" className="bg-zion-blue-dark">All Prices</option>
                <option value="0-1000" className="bg-zion-blue-dark">Under $1K</option>
                <option value="1000-5000" className="bg-zion-blue-dark">$1K - $5K</option>
                <option value="5000-15000" className="bg-zion-blue-dark">$5K - $15K</option>
                <option value="15000-50000" className="bg-zion-blue-dark">$15K+</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                <option value="name" className="bg-zion-blue-dark">Sort by Name</option>
                <option value="price-low" className="bg-zion-blue-dark">Price: Low to High</option>
                <option value="price-high" className="bg-zion-blue-dark">Price: High to Low</option>
                <option value="category" className="bg-zion-blue-dark">Sort by Category</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 backdrop-blur-sm"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <div className="text-sm text-zion-cyan font-medium">{service.category}</div>
                    <div className="text-xs text-zion-slate-light">{service.subcategory}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">{formatPrice(service.price)}</div>
                  <div className="text-xs text-zion-slate-light">per month</div>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

              {/* Key Features */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-zion-cyan mb-2">Key Features</div>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-zion-slate-light mt-2">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</div>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <div className="text-zion-slate-light">Delivery</div>
                  <div className="font-medium">{service.estimatedDelivery}</div>
                </div>
                <div>
                  <div className="text-zion-slate-light">Support</div>
                  <div className="font-medium capitalize">{service.supportLevel}</div>
                </div>
                <div>
                  <div className="text-zion-slate-light">ROI</div>
                  <div className="font-medium text-zion-cyan">{service.roi}</div>
                </div>
                <div>
                  <div className="text-zion-slate-light">Market Price</div>
                  <div className="font-medium">{service.marketPrice}</div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-zion-cyan mb-2">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  {service.technology.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {service.technology.length > 4 && (
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                      +{service.technology.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full bg-transparent border border-zion-cyan/30 hover:border-zion-cyan text-zion-cyan font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Information */}
              <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                <div className="text-center">
                  <div className="text-sm text-zion-slate-light mb-2">Ready to transform your business?</div>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <a href={`tel:${service.contactInfo.phone}`} className="flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan/80">
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                    <a href={`mailto:${service.contactInfo.email}`} className="flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan/80">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan/80">
                      <Globe className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business. 
              Get in touch today to discuss your needs and discover how our innovative services can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveInnovativeServices2025;