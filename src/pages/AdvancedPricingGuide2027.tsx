import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  ExternalLink,
  BarChart3,
  Shield,
  Zap,
  Brain,
  Rocket,
  Globe,
  Cpu
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2027 } from '../data/advancedInnovativeServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '../data/emergingTechServices2027';

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
    address: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
    compliance: string[];
  };
  competitors: string[];
  marketTrend: string;
  pricingTiers?: {
    starter: number;
    professional: number;
    enterprise: number;
  };
}

const AdvancedPricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  // Combine all services
  const allServices: Service[] = useMemo(() => {
    return [...ADVANCED_INNOVATIVE_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(allServices.map(service => service.category))];
    return cats;
  }, [allServices]);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      let matchesROI = true;
      if (selectedROI !== 'all') {
        const [min, max] = selectedROI.split('-').map(Number);
        const serviceROI = parseInt(service.roi.split('%')[0]);
        if (max) {
          matchesROI = serviceROI >= min && serviceROI <= max;
        } else {
          matchesROI = serviceROI >= min;
        }
      }
      
      return matchesCategory && matchesPrice && matchesROI;
    });

    return filtered;
  }, [allServices, selectedCategory, selectedPriceRange, selectedROI]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Edge Computing':
        return <Zap className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Brain className="w-5 h-5" />;
      case 'Blockchain':
        return <Globe className="w-5 h-5" />;
      case 'Sustainability':
        return <TrendingUp className="w-5 h-5" />;
      case 'Healthcare':
        return <Star className="w-5 h-5" />;
      case 'FinTech':
        return <DollarSign className="w-5 h-5" />;
      case 'EdTech':
        return <Users className="w-5 h-5" />;
      case 'Smart Cities':
        return <Globe className="w-5 h-5" />;
      case 'Analytics':
        return <BarChart3 className="w-5 h-5" />;
      case 'Space Technology':
        return <Rocket className="w-5 h-5" />;
      case 'Autonomous Systems':
        return <Cpu className="w-5 h-5" />;
      case 'AR/VR':
        return <Globe className="w-5 h-5" />;
      case 'Neuromorphic Computing':
        return <Brain className="w-5 h-5" />;
      case 'Synthetic Biology':
        return <Star className="w-5 h-5" />;
      case 'Advanced Materials':
        return <Zap className="w-5 h-5" />;
      case 'Digital Twin':
        return <Globe className="w-5 h-5" />;
      case 'Energy':
        return <Zap className="w-5 h-5" />;
      case 'Manufacturing':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000' },
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-', label: 'Over $10,000' }
  ];

  const roiRanges = [
    { value: 'all', label: 'All ROI' },
    { value: '0-200', label: 'Under 200%' },
    { value: '200-500', label: '200% - 500%' },
    { value: '500-1000', label: '500% - 1000%' },
    { value: '1000-', label: 'Over 1000%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced Technology
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Pricing Guide 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Comprehensive pricing information for our cutting-edge micro SAAS, IT, and AI services with detailed ROI analysis and market comparisons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Phone className="inline w-5 h-5 mr-2" />
                Get Custom Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-lg hover:text-zion-slate-light transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-lg hover:text-zion-slate-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Website</p>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-zion-slate-light transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value} className="bg-zion-slate-dark text-white">
                  {range.label}
                </option>
              ))}
            </select>

            {/* ROI Filter */}
            <select
              value={selectedROI}
              onChange={(e) => setSelectedROI(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {roiRanges.map(range => (
                <option key={range.value} value={range.value} className="bg-zion-slate-dark text-white">
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>
        </div>

        {/* Services Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4">
                  {service.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-zion-slate-light mb-4">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {service.estimatedDelivery}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {service.supportLevel}
                  </span>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4 text-lg">Pricing Tiers</h4>
                <div className="space-y-3">
                  {service.pricingTiers ? (
                    <>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-zion-slate-light">Starter</span>
                        <span className="text-white font-bold">${service.pricingTiers.starter.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-zion-slate-light">Professional</span>
                        <span className="text-white font-bold">${service.pricingTiers.professional.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white font-semibold">Enterprise</span>
                        <span className="text-zion-cyan font-bold">${service.pricingTiers.enterprise.toLocaleString()}/month</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg border border-zion-cyan/30">
                      <span className="text-white font-semibold">Standard Pricing</span>
                      <span className="text-zion-cyan font-bold text-xl">${service.price.toLocaleString()}/month</span>
                    </div>
                  )}
                </div>
              </div>

              {/* ROI and Market Analysis */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-semibold mb-3">ROI & Market Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-zion-slate-light text-sm">Expected ROI</p>
                    <p className="text-zion-cyan font-bold text-xl">{service.roi}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-zion-slate-light text-sm">Market Price Range</p>
                    <p className="text-zion-purple font-bold text-sm">{service.marketPrice}</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-zion-slate-light text-sm">Market Trend</p>
                  <p className="text-white text-sm">{service.marketTrend}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-zion-slate-light text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>+{service.features.length - 4} more features</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 3).map((useCase, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 text-zion-slate-light text-xs rounded-full">
                      {useCase}
                    </span>
                  ))}
                  {service.useCases.length > 3 && (
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      +{service.useCases.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Contact and Action */}
              <div className="space-y-3">
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-6 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="inline w-5 h-5 mr-2" />
                  Get Started
                </a>
                
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo.email}`}
                    className="flex-1 bg-white/10 text-white py-3 px-4 rounded-lg text-center text-sm hover:bg-white/20 transition-colors"
                  >
                    <Mail className="inline w-4 h-4 mr-1" />
                    Request Quote
                  </a>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 text-white py-3 px-4 rounded-lg text-center text-sm hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="inline w-4 h-4 mr-1" />
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setSelectedROI('all');
              }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Custom Pricing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact our team for personalized pricing and custom solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+13024640950"
              className="bg-white text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              <Phone className="inline w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Mail className="inline w-5 h-5 mr-2" />
              Request Custom Quote
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPricingGuide2027;