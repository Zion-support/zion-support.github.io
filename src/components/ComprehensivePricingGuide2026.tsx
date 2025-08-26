import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Rocket,
  Award,
  Lightbulb,
  ShieldCheck,
  Globe2,
  CpuIcon,
  DatabaseIcon,
  CloudIcon,
  BrainIcon,
  NetworkIcon,
  LeafIcon,
  HeartIcon,
  DollarSignIcon,
  EyeIcon,
  TargetIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
  RocketIcon,
  AwardIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { cuttingEdgeMicroSaasServices2026 } from '../../data/2026-cutting-edge-micro-saas-services';
import { emergingTechnologyServices2026 } from '../../data/2026-emerging-technology-services';

export function ComprehensivePricingGuide2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('comprehensive-pricing-guide-2026');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Combine all services
  const allServices = [...cuttingEdgeMicroSaasServices2026, ...emergingTechnologyServices2026];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple' },
    { id: 'Cybersecurity & AI', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'FinTech & AI', name: 'FinTech', icon: <DollarSign className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare & AI', name: 'Healthcare', icon: <Heart className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Zap className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain & Web3', name: 'Web3', icon: <Network className="h-5 w-5" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'Green Technology', name: 'Green Tech', icon: <Leaf className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Quantum Computing', name: 'Quantum', icon: <Brain className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Space Technology', name: 'Space Tech', icon: <Globe className="h-5 w-5" />, color: 'from-slate-500 to-gray-500' },
    { id: 'Biotechnology & AI', name: 'Biotech', icon: <Cpu className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Autonomous Systems & Robotics', name: 'Robotics', icon: <Rocket className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'Advanced AI & Machine Learning', name: 'AI/ML', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum Machine Learning', name: 'Quantum ML', icon: <Brain className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic', icon: <Brain className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Synthetic Biology', name: 'Synthetic Bio', icon: <Leaf className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Advanced Robotics', name: 'Advanced Robotics', icon: <Rocket className="h-5 w-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'Digital Twin Technology', name: 'Digital Twin', icon: <Globe className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Brain-Computer Interface', name: 'BCI', icon: <Brain className="h-5 w-5" />, color: 'from-violet-500 to-purple-500' },
    { id: 'Quantum Internet', name: 'Quantum Internet', icon: <Globe className="h-5 w-5" />, color: 'from-teal-500 to-cyan-500' }
  ];

  const filteredServices = allServices.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  // Sort services based on selected criteria
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity & AI': return <Shield className="h-6 w-6" />;
      case 'FinTech & AI': return <DollarSign className="h-6 w-6" />;
      case 'Healthcare & AI': return <Heart className="h-6 w-6" />;
      case 'IoT & Edge Computing': return <Zap className="h-6 w-6" />;
      case 'Blockchain & Web3': return <Network className="h-6 w-6" />;
      case 'Green Technology': return <Leaf className="h-6 w-6" />;
      case 'AR/VR & Metaverse': return <Eye className="h-6 w-6" />;
      case 'Quantum Computing': return <Brain className="h-6 w-6" />;
      case 'Space Technology': return <Globe className="h-6 w-6" />;
      case 'Biotechnology & AI': return <Cpu className="h-6 w-6" />;
      case 'Autonomous Systems & Robotics': return <Rocket className="h-6 w-6" />;
      case 'Advanced AI & Machine Learning': return <Brain className="h-6 w-6" />;
      case 'Quantum Machine Learning': return <Brain className="h-6 w-6" />;
      case 'Neuromorphic Computing': return <Brain className="h-6 w-6" />;
      case 'Synthetic Biology': return <Leaf className="h-6 w-6" />;
      case 'Advanced Robotics': return <Rocket className="h-6 w-6" />;
      case 'Digital Twin Technology': return <Globe className="h-6 w-6" />;
      case 'Brain-Computer Interface': return <Brain className="h-6 w-6" />;
      case 'Quantum Internet': return <Globe className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getPriceRange = () => {
    const prices = allServices.map(s => parseInt(s.price.replace('$', '')));
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return { min, max };
  };

  const getAverageRating = () => {
    const ratings = allServices.map(s => s.rating);
    return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  };

  const getTotalCustomers = () => {
    return allServices.reduce((sum, s) => sum + s.customers, 0);
  };

  const priceRange = getPriceRange();

  return (
    <section id="comprehensive-pricing-guide-2026" className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <DollarSign className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Comprehensive Pricing Guide 2026
            </h2>
            <DollarSign className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">
            Transparent pricing for all our cutting-edge micro SAAS services. Compare features, 
            understand market positioning, and find the perfect solution for your business needs.
          </p>
        </motion.div>

        {/* Market Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6 border border-zion-cyan/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}</div>
                <div className="text-zion-gray-light">Total Services</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">${priceRange.min}-${priceRange.max}</div>
                <div className="text-zion-gray-light">Price Range</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{getAverageRating()}</div>
                <div className="text-zion-gray-light">Average Rating</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{getTotalCustomers()}</div>
                <div className="text-zion-gray-light">Total Customers</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white shadow-lg'
                      : 'bg-zion-slate/30 border-zion-cyan/30 text-zion-gray-light hover:border-zion-cyan/50 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <label className="text-zion-gray-light text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate/50 border border-zion-cyan/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="customers">Customers</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zion-slate/30 rounded-2xl border border-zion-cyan/20 overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-zion-slate/50 border-b border-zion-cyan/20 p-6">
            <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-zion-cyan">
              <div className="col-span-3">Service</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1">Price</div>
              <div className="col-span-1">Rating</div>
              <div className="col-span-1">Customers</div>
              <div className="col-span-2">Market Position</div>
              <div className="col-span-1">Setup</div>
              <div className="col-span-1">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-zion-cyan/20">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group hover:bg-zion-slate/40 transition-colors duration-300"
              >
                {/* Main Row */}
                <div className="p-6">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Service Info */}
                    <div className="col-span-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                          <span className="text-lg">{service.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-xs text-zion-gray-light">{service.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(service.category)}
                        <span className="text-sm text-zion-gray-light">{service.category}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-1">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                      <div className="text-xs text-zion-gray-light">{service.period}</div>
                    </div>

                    {/* Rating */}
                    <div className="col-span-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="text-white font-medium">{service.rating}</span>
                      </div>
                      <div className="text-xs text-zion-gray-light">({service.reviews})</div>
                    </div>

                    {/* Customers */}
                    <div className="col-span-1">
                      <div className="text-white font-medium">{service.customers}</div>
                      <div className="text-xs text-zion-gray-light">users</div>
                    </div>

                    {/* Market Position */}
                    <div className="col-span-2">
                      <div className="text-sm text-zion-gray-light leading-tight">
                        {service.marketPosition.length > 100 
                          ? service.marketPosition.substring(0, 100) + '...'
                          : service.marketPosition
                        }
                      </div>
                    </div>

                    {/* Setup Time */}
                    <div className="col-span-1">
                      <div className="text-sm text-white">{service.setupTime}</div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-1">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                          className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-300"
                        >
                          {expandedService === service.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        <Link
                          to={service.link}
                          className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-zion-slate/20 border-t border-zion-cyan/20 p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Info className="h-5 w-5 text-zion-cyan" />
                              Service Details
                            </h4>
                            
                            <div className="space-y-4">
                              <div>
                                <span className="text-zion-gray-light text-sm">Description:</span>
                                <p className="text-white text-sm mt-1">{service.description}</p>
                              </div>
                              
                              <div>
                                <span className="text-zion-gray-light text-sm">ROI:</span>
                                <p className="text-white text-sm mt-1">{service.roi}</p>
                              </div>
                              
                              <div>
                                <span className="text-zion-gray-light text-sm">Market Size:</span>
                                <p className="text-white text-sm mt-1">{service.marketSize}</p>
                              </div>
                              
                              <div>
                                <span className="text-zion-gray-light text-sm">Growth Rate:</span>
                                <p className="text-white text-sm mt-1">{service.growthRate}</p>
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-zion-cyan" />
                              Features & Technology
                            </h4>
                            
                            <div className="space-y-4">
                              <div>
                                <span className="text-zion-gray-light text-sm">Key Features:</span>
                                <div className="mt-2 space-y-1">
                                  {service.features.slice(0, 5).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-white">
                                      <CheckCircle2 className="h-3 w-3 text-zion-cyan" />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                  {service.features.length > 5 && (
                                    <div className="text-xs text-zion-cyan">
                                      +{service.features.length - 5} more features
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div>
                                <span className="text-zion-gray-light text-sm">Technology Stack:</span>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {service.technology.slice(0, 6).map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                  {service.technology.length > 6 && (
                                    <span className="text-xs text-zion-cyan">
                                      +{service.technology.length - 6} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex gap-4">
                          <Link
                            to={service.link}
                            className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
                          >
                            Get Started
                          </Link>
                          <a
                            href="tel:+13024640950"
                            className="border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-lg font-medium hover:bg-zion-cyan/10 transition-all duration-300"
                          >
                            Call for Demo
                          </a>
                          <button
                            onClick={() => setExpandedService(null)}
                            className="border border-zion-gray/30 text-zion-gray px-6 py-3 rounded-lg font-medium hover:bg-zion-gray/10 transition-all duration-300"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-zion-gray-light mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect solution for your business needs. 
              Get personalized recommendations and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}