import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Network, 
  Lock, 
  Leaf, 
  Scale, 
  Stethoscope, 
  Rocket, 
  Atom, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Calculator,
  BarChart3,
  PieChart,
  LineChart,
  ArrowRight,
  Award,
  Users,
  Clock,
  Database,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  CircuitBoard,
  Fingerprint,
  Eye,
  Heart,
  Gavel,
  LeafyGreen,
  Wind,
  Sun,
  Droplets,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2027 } from '../data/innovativeServices2027';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES_2027.map(s => s.category)))];
  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'budget', label: 'Budget ($1K-$3K)', min: 1000, max: 3000 },
    { id: 'mid-range', label: 'Mid-Range ($3K-$6K)', min: 3000, max: 6000 },
    { id: 'enterprise', label: 'Enterprise ($6K+)', min: 6000, max: Infinity }
  ];

  const filteredServices = INNOVATIVE_SERVICES_2027.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const selectedPriceRange = priceRanges.find(pr => pr.id === priceRange);
    const matchesPrice = selectedPriceRange ? 
      service.price >= selectedPriceRange.min && service.price <= selectedPriceRange.max : true;
    
    return matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & DevOps': return <Cpu className="w-5 h-5" />;
      case 'Blockchain & Quantum': return <Lock className="w-5 h-5" />;
      case 'AI & Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Edge Computing & AI': return <Network className="w-5 h-5" />;
      case 'AI & Healthcare': return <Stethoscope className="w-5 h-5" />;
      case 'Quantum Computing & AI': return <Brain className="w-5 h-5" />;
      case 'AI & Automation': return <Rocket className="w-5 h-5" />;
      case '5G & Networking': return <Globe className="w-5 h-5" />;
      case 'AI & Legal Tech': return <Scale className="w-5 h-5" />;
      case 'Sustainability & Technology': return <Leaf className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
    }
  };

  const calculateROI = (roi: string) => {
    return parseInt(roi.replace('%', ''));
  };

  const sortedServices = [...filteredServices].sort((a, b) => {
    const roiA = calculateROI(a.roi);
    const roiB = calculateROI(b.roi);
    return roiB - roiA; // Sort by ROI descending
  });

  const marketAnalysis = {
    totalMarketValue: '$610B+',
    averageROI: '350%',
    fastestGrowing: 'Quantum Computing',
    mostDemanded: 'AI Services',
    priceRange: '$1,799 - $7,999/month'
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,799 - $2,999',
      description: 'Essential services for small to medium businesses',
      services: ['AI Legal Tech', 'Sustainability Platform', 'Basic AI Services'],
      features: ['Core functionality', 'Standard support', 'Basic integrations']
    },
    {
      name: 'Professional',
      price: '$2,999 - $4,999',
      description: 'Advanced solutions for growing enterprises',
      services: ['AI DevOps', 'Edge AI', 'Cybersecurity', '5G Networks'],
      features: ['Advanced features', 'Priority support', 'Custom integrations', 'Training included']
    },
    {
      name: 'Enterprise',
      price: '$4,999 - $7,999+',
      description: 'Cutting-edge solutions for large organizations',
      services: ['Quantum Computing', 'Healthcare AI', 'Blockchain Platform'],
      features: ['Full customization', 'Dedicated support', 'White-label options', 'On-premise deployment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-zion-cyan/20 rounded-2xl mb-6">
              <DollarSign className="w-12 h-12 text-zion-cyan" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Comprehensive Pricing Guide 2027
            </h1>
            <p className="text-2xl md:text-3xl text-zion-cyan/90 mb-12 max-w-5xl mx-auto leading-relaxed">
              Transparent pricing for our complete portfolio of innovative technology services. 
              Discover the perfect solution for your business needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan/80 text-lg">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Value Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6" />
                <span>Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Market Analysis & Investment Insights</h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Our services address rapidly growing markets with exceptional return on investment potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(marketAnalysis).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">{value}</div>
              <div className="text-sm text-zion-cyan/70 capitalize">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Pricing Tiers & Service Levels</h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Choose the pricing tier that best fits your business requirements and growth objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 ${
                tier.name === 'Professional' ? 'ring-2 ring-zion-cyan/50 scale-105' : ''
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                <p className="text-zion-cyan/80">{tier.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-zion-cyan mb-3">Included Services</h4>
                <ul className="space-y-2">
                  {tier.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-zion-cyan mb-3">Features</h4>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                      <Star className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Pricing Tier"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-center block"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id} className="bg-zion-slate text-white">
                  {range.label}
                </option>
              ))}
            </select>

            <div className="text-center text-zion-cyan/80">
              <div className="text-sm">Showing {filteredServices.length} services</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-zion-cyan/70">per {service.pricingModel}</div>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* ROI and Market Price */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-zion-cyan/10 rounded-lg">
                  <div className="text-lg font-bold text-zion-cyan">{service.roi}</div>
                  <div className="text-xs text-zion-cyan/70">ROI</div>
                </div>
                <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                  <div className="text-sm font-semibold text-zion-purple">Market Price</div>
                  <div className="text-xs text-zion-purple/70">{service.marketPrice}</div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expandable Details */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between text-zion-cyan hover:text-white transition-colors"
                >
                  <span className="text-sm font-semibold">View Details</span>
                  {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    {/* Features */}
                    <div>
                      <h5 className="text-sm font-semibold text-zion-cyan mb-2">Features</h5>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-xs text-zion-cyan/70">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    {service.technicalSpecs && (
                      <div>
                        <h5 className="text-sm font-semibold text-zion-cyan mb-2">Technology</h5>
                        <div className="flex flex-wrap gap-1">
                          {service.technicalSpecs.technology.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Delivery & Support */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="text-zion-cyan/70">
                        <div className="font-semibold">Delivery</div>
                        <div>{service.estimatedDelivery}</div>
                      </div>
                      <div className="text-zion-cyan/70">
                        <div className="font-semibold">Support</div>
                        <div>{service.supportLevel}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title} - Pricing`}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-center block"
                >
                  Get Pricing Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-cyan/80">Try adjusting your filters</p>
          </motion.div>
        )}
      </div>

      {/* ROI Calculator CTA */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-lg rounded-3xl p-12 text-center"
        >
          <div className="inline-flex p-4 bg-zion-cyan/20 rounded-2xl mb-6">
            <Calculator className="w-12 h-12 text-zion-cyan" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-zion-cyan/90 mb-8 max-w-3xl mx-auto">
            Not sure which service is right for you? Our experts can help calculate the potential return on investment 
            for your specific use case and business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-zion-cyan text-white px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call for ROI Analysis
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=ROI Calculation Request"
              className="flex items-center gap-3 bg-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-zion-purple/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Request ROI Analysis
            </a>
          </div>
          <div className="mt-8 text-zion-cyan/70">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zion-cyan transition-colors"
              >
                Visit our website for more details →
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2027;