<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Globe, 
  Zap, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the new service data
import { revolutionary2027AdvancedMicroSaasServices } from '../../data/revolutionary-2027-advanced-micro-saas';
import { revolutionary2027ITInfrastructureCybersecurityServices } from '../../data/revolutionary-2027-it-infrastructure-cybersecurity';
import { revolutionary2027AIInnovationServices } from '../../data/revolutionary-2027-ai-innovation-services';

const serviceCategories = [
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600',
    services: revolutionary2027AdvancedMicroSaasServices
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure & Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-600 to-orange-600',
    services: revolutionary2027ITInfrastructureCybersecurityServices
  },
  {
    id: 'ai-innovation',
    name: 'AI Innovation Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-600',
    services: revolutionary2027AIInnovationServices
  }
];

export function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('micro-saas');
  const [selectedService, setSelectedService] = useState(null);

  const currentCategory = serviceCategories.find(cat => cat.id === selectedCategory);
  const currentServices = currentCategory?.services || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
=======
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network,
  Lock,
  Eye,
  TrendingUp,
  Clock,
  DollarSign,
  Phone,
  Mail,
  ExternalLink,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPANDED_INNOVATIVE_SERVICES_2025 } from '../data/expandedInnovativeServices2025';
import { emergingTechServices2025 } from '../data/emergingTechServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services
  const allServices: Service[] = [
    ...EXPANDED_INNOVATIVE_SERVICES_2025,
    ...emergingTechServices2025
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
    return cats;
  }, [allServices]);

  // Get unique innovation levels
  const innovationLevels = useMemo(() => {
    const levels = ['all', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];
    return levels;
  }, [allServices]);

  // Filter services
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesInnovationLevel && matchesSearch;
    });
  }, [allServices, selectedCategory, selectedInnovationLevel, searchTerm]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Customer Experience':
      case 'AI & Supply Chain':
      case 'AI & Legal Tech':
      case 'AI & Healthcare':
      case 'AI & Financial Services':
      case 'AI & Content Marketing':
        return <Brain className="h-6 w-6" />;
      case 'Cybersecurity & AI':
      case 'Cybersecurity & Quantum':
        return <Shield className="h-6 w-6" />;
      case 'Blockchain & Supply Chain':
        return <Database className="h-6 w-6" />;
      case 'IoT & Edge Computing':
        return <Network className="h-6 w-6" />;
      case 'Quantum Computing':
        return <Cpu className="h-6 w-6" />;
      case 'AR/VR & Immersive Tech':
        return <Eye className="h-6 w-6" />;
      case '5G & Telecommunications':
        return <Globe className="h-6 w-6" />;
      case 'Space Technology':
        return <Rocket className="h-6 w-6" />;
      case 'Neuromorphic Computing':
        return <Brain className="h-6 w-6" />;
      case 'Digital Twin & Simulation':
        return <Settings className="h-6 w-6" />;
      case 'Synthetic Biology':
        return <Target className="h-6 w-6" />;
      case 'Brain-Computer Interface':
        return <Brain className="h-6 w-6" />;
      case 'Sustainability & Energy':
        return <Zap className="h-6 w-6" />;
      case 'Autonomous Vehicles & Fleet Management':
        return <Rocket className="h-6 w-6" />;
      default:
        return <Star className="h-6 w-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Cutting-edge':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Professional':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary 2027 Services
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Discover cutting-edge micro SAAS solutions, advanced IT infrastructure, and innovative AI services 
            designed to transform your business and drive exponential growth.
          </p>
          
          {/* Contact Information */}
          <div className="mt-8 p-6 bg-zion-slate-dark/50 rounded-2xl border border-zion-cyan/20">
            <h3 className="text-2xl font-semibold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-zion-cyan" />
                <span className="text-white">24/7 Support Available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-5 h-5 text-zion-cyan" />
                <span className="text-white">Custom Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-5 h-5 text-zion-cyan" />
                <span className="text-white">Proven Results</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-zion-cyan-light">
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
              </p>
              <p className="text-zion-cyan-light text-sm">
                364 E Main St STE 1008 Middletown DE 19709
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-zion-slate-dark text-zion-cyan-light hover:bg-zion-slate hover:text-zion-cyan border border-zion-cyan/30'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentServices.map((service) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedService(service)}
            >
              <motion.div
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Popular
                    </div>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-zion-cyan-light text-sm mb-4 line-clamp-2">
                  {service.tagline}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-zion-cyan" />
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-zion-cyan-light">{service.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-cyan-light text-sm">({service.reviews})</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-zion-slate/50 text-zion-cyan-light text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-zion-slate/30 rounded-lg">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zion-cyan-light">Market Size:</span>
                    <span className="text-white font-medium">{service.marketSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-zion-cyan-light">Growth Rate:</span>
                    <span className="text-green-400 font-medium">{service.growthRate}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="text-xs text-zion-cyan-light">
                    {service.trialDays} day trial
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 p-8 rounded-2xl border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-cyan-light mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with our revolutionary services. 
              Get expert consultation and custom implementation tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-zion-slate-dark text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover:bg-zion-slate hover:border-zion-cyan/50 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-zion-slate-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">{selectedService.icon}</div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.name}</h2>
              <p className="text-zion-cyan-light text-lg mb-6">{selectedService.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-zion-cyan-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Price:</span>
                      <span className="text-white font-medium">{selectedService.price}{selectedService.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Setup Time:</span>
                      <span className="text-white font-medium">{selectedService.setupTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Trial:</span>
                      <span className="text-white font-medium">{selectedService.trialDays} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Customers:</span>
                      <span className="text-white font-medium">{selectedService.customers.toLocaleString()}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Rating:</span>
                      <span className="text-white font-medium">{selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-2">ROI</h4>
                    <p className="text-zion-cyan-light text-sm">{selectedService.roi}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={selectedService.link}
                    className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Get Started Now
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="bg-zion-slate text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover:bg-zion-slate-dark transition-all duration-300 text-center"
                  >
                    Call for Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
=======
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, 
              AI solutions, and emerging technology platforms designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-zion-cyan" />
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-zion-blue hover:text-zion-cyan transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Innovation:</span>
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zion-cyan/10 rounded-lg text-zion-cyan">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-blue">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">per {service.pricingModel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  {/* Market Price & ROI */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Market Price</div>
                      <div className="font-semibold text-gray-900">{service.marketPrice}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-500">ROI</div>
                      <div className="font-semibold text-green-700">{service.roi}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 5 && (
                        <div className="text-sm text-zion-cyan font-medium">
                          +{service.features.length - 5} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                      Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 5).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="flex-1 bg-zion-cyan text-white text-center py-2 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors font-medium"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 border border-zion-cyan text-zion-cyan text-center py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-colors font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                  setSearchTerm('');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our innovative technology solutions are designed to give you a competitive edge. 
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
  );
}
