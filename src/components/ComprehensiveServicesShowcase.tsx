import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  Blockchain, 
  Smartphone, 
  Building2, 
  FlaskConical,
  TrendingUp,
  Users,
  Globe,
  Lock,
  BarChart3,
  Network,
  Code,
  Server,
  Brain,
  Eye,
  Rocket,
  Target,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { COMPREHENSIVE_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS } from '../data/comprehensiveMicroSaasServices2025';

interface ServiceCardProps {
  service: typeof COMPREHENSIVE_MICRO_SAAS_SERVICES_2025[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity & Compliance':
        return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-6 h-6" />;
      case 'Data Analytics & BI':
        return <BarChart3 className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Blockchain className="w-6 h-6" />;
      case 'Mobile & Web Development':
        return <Smartphone className="w-6 h-6" />;
      case 'Enterprise Software':
        return <Building2 className="w-6 h-6" />;
      case 'Industry Solutions':
        return <Target className="w-6 h-6" />;
      case 'Emerging Technology':
        return <FlaskConical className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return 'from-purple-500 to-pink-600';
      case 'Cybersecurity & Compliance':
        return 'from-red-500 to-orange-600';
      case 'Cloud & DevOps':
        return 'from-blue-500 to-cyan-600';
      case 'Data Analytics & BI':
        return 'from-green-500 to-emerald-600';
      case 'IoT & Edge Computing':
        return 'from-indigo-500 to-purple-600';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-600';
      case 'Mobile & Web Development':
        return 'from-teal-500 to-blue-600';
      case 'Enterprise Software':
        return 'from-gray-500 to-slate-600';
      case 'Industry Solutions':
        return 'from-rose-500 to-pink-600';
      case 'Emerging Technology':
        return 'from-violet-500 to-purple-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl border border-zion-slate-light/20 p-6 h-full transition-all duration-300 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/25">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center text-white`}>
            {getCategoryIcon(service.category)}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-zion-cyan">${service.price}</div>
            <div className="text-sm text-zion-slate-light">per month</div>
          </div>
        </div>

        {/* Title and Category */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
          {service.title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-zion-slate-light">{service.category}</span>
          <span className="text-zion-slate-light">•</span>
          <span className="text-sm text-zion-slate-light">{service.subcategory}</span>
        </div>

        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-zion-cyan">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                <TrendingUp className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-4 border-t border-zion-slate-light/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zion-slate-light" />
              <span className="text-xs text-zion-slate-light">{service.estimatedDelivery}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-xs text-zion-slate-light">Premium</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to={`/services/${service.id}`}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-2 px-4 rounded-lg font-semibold text-center block hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 group-hover:scale-105"
          >
            Get Started
          </Link>

          {/* Contact Info */}
          <div className="mt-3 text-center">
            <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
              <a
                href={`tel:${service.contactInfo.phone}`}
                className="flex items-center gap-1 hover:text-zion-cyan transition-colors duration-300"
              >
                <Phone className="w-3 h-3" />
                Contact
              </a>
              <a
                href={`mailto:${service.contactInfo.email}`}
                className="flex items-center gap-1 hover:text-zion-cyan transition-colors duration-300"
              >
                <Mail className="w-3 h-3" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Beta Badge */}
        {service.betaAccess && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs rounded-full font-semibold">
              BETA
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<string>('All');

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesPricing = selectedPricing === 'All' || 
        (selectedPricing === 'Starter' && service.price <= 299) ||
        (selectedPricing === 'Professional' && service.price > 299 && service.price <= 799) ||
        (selectedPricing === 'Enterprise' && service.price > 799);

      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricing]);

  const pricingRanges = [
    { label: 'All', value: 'All' },
    { label: 'Starter ($149-$299)', value: 'Starter' },
    { label: 'Professional ($299-$799)', value: 'Professional' },
    { label: 'Enterprise ($799+)', value: 'Enterprise' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zion-slate-dark to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Comprehensive <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Micro SAAS Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover our extensive portfolio of innovative technology solutions designed to transform your business and drive digital innovation
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">15+ Services Available</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Global Support</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-slate-light/20">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {SERVICE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Pricing</label>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {pricingRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan">{filteredServices.length}</div>
                    <div className="text-xs text-zion-slate-light">Services Found</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-zion-slate-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-zion-slate-light" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all our services
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPricing('All');
              }}
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 backdrop-blur-sm rounded-3xl p-12 border border-zion-cyan/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p className="text-sm">
                <strong>Contact:</strong> +1 302 464 0950 | <strong>Email:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-sm mt-2">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesShowcase;
