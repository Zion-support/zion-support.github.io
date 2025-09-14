import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  Globe,
  Atom,
  Leaf,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

// Import the services data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-600' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-blue-500 to-cyan-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'edge', name: 'Edge Computing', icon: Cpu, color: 'from-green-500 to-emerald-600' },
    { id: 'blockchain', name: 'Blockchain', icon: Network, color: 'from-yellow-500 to-orange-600' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-pink-500 to-rose-600' },
    { id: 'energy', name: 'Energy', icon: Leaf, color: 'from-green-500 to-teal-600' },
    { id: 'supply-chain', name: 'Supply Chain', icon: Globe, color: 'from-blue-500 to-indigo-600' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Code, color: 'from-purple-500 to-violet-600' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Shield, color: 'from-gray-500 to-slate-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($500 - $1,500)', range: '500-1500' },
    { id: 'mid-range', name: 'Mid-Range ($1,500 - $3,500)', range: '1500-3500' },
    { id: 'premium', name: 'Premium ($3,500 - $6,000)', range: '3500-6000' },
    { id: 'enterprise', name: 'Enterprise ($6,000+)', range: '6000+' }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.subcategory?.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = priceRange === 'all' || (() => {
      const price = service.price;
      switch (priceRange) {
        case 'budget': return price >= 500 && price <= 1500;
        case 'mid-range': return price > 1500 && price <= 3500;
        case 'premium': return price > 3500 && price <= 6000;
        case 'enterprise': return price > 6000;
        default: return true;
      }
    })();
    
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const totalValue = filteredServices.reduce((sum, service) => sum + service.price, 0);
  const averagePrice = filteredServices.length > 0 ? totalValue / filteredServices.length : 0;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent mb-6">
              Comprehensive Pricing Guide 2025
            </h5>
            <p className="text-xl md:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto">
              Complete pricing information for all our innovative micro SAAS services. 
              Transparent pricing with market-validated rates and ROI projections.
            </p>
            
            {/* Pricing Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {filteredServices.length}
                </div>
                <div className="text-zion-gray-light">Services Available</div>
              </div>
              <div className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-green mb-2">
                  ${averagePrice.toLocaleString()}
                </div>
                <div className="text-zion-gray-light">Average Monthly Price</div>
              </div>
              <div className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-blue mb-2">
                  300-600%
                </div>
                <div className="text-zion-gray-light">Average ROI</div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-6 py-4 bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-full text-zion-gray-light placeholder-zion-gray placeholder-opacity-50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-gray w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold text-zion-cyan mb-3">Filter by Category:</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg shadow-zion-cyan/25`
                      : 'bg-zion-slate-dark/50 border-zion-cyan/30 text-zion-gray-light hover:border-zion-cyan hover:bg-zion-slate-dark/80'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="text-lg font-semibold text-zion-cyan mb-3">Filter by Price Range:</h3>
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setPriceRange(range.id)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    priceRange === range.id
                      ? 'bg-gradient-to-r from-zion-green to-zion-blue border-transparent text-white shadow-lg shadow-zion-green/25'
                      : 'bg-zion-slate-dark/50 border-zion-cyan/30 text-zion-gray-light hover:border-zion-cyan hover:bg-zion-slate-dark/80'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Pricing Table */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Service Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-zion-cyan mb-2">
                        {service.title}
                      </h3>
                      <p className="text-zion-gray-light mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-full text-xs text-zion-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features and Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-zion-gray font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-gray-light text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-green" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-zion-gray font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 4).map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-gray-light text-sm">
                            <Star className="w-4 h-4 text-zion-yellow" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pricing and Contact */}
                <div className="lg:col-span-1">
                  <div className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl p-6">
                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-zion-green mb-2">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-zion-gray-light mb-1">per month</div>
                      <div className="text-sm text-zion-blue font-medium">
                        ROI: {service.roi}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-gray">Market Price:</span>
                        <span className="text-zion-gray-light">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-gray">Delivery:</span>
                        <span className="text-zion-gray-light">{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-gray">Support:</span>
                        <span className="text-zion-gray-light">{service.supportLevel}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-gray">Innovation Level:</span>
                        <span className="text-zion-gray-light">{service.innovationLevel}</span>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-zion-cyan/20 pt-4">
                      <h4 className="text-zion-gray font-semibold mb-3 text-center">Get Started</h4>
                      <div className="space-y-2 text-sm">
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex items-center gap-2 text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          {service.contactInfo.phone}
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex items-center gap-2 text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                        >
                          <Mail className="w-4 h-4" />
                          {service.contactInfo.email}
                        </a>
                        <a
                          href={service.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                        >
                          <Globe className="w-4 h-4" />
                          Visit Website
                        </a>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                      >
                        Get Custom Quote
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-zion-gray-light text-lg mb-4">
              No services found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
                setSearchTerm('');
              }}
              className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-zion-slate-dark to-zion-slate rounded-3xl p-12 text-center border border-zion-cyan/20"
        >
          <h2 className="text-4xl font-bold text-zion-cyan mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-gray-light mb-8 max-w-3xl mx-auto">
            Our team can create a customized solution tailored to your specific business needs. 
            Get in touch to discuss your requirements and receive a personalized quote.
          </p>
          
          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-zion-cyan mb-2">Call Us</h3>
              <p className="text-zion-gray-light text-sm mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-blue transition-colors duration-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6">
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-zion-cyan mb-2">Email Us</h3>
              <p className="text-zion-gray-light text-sm mb-3">Get detailed information and quotes</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-blue transition-colors duration-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6">
              <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-zion-cyan mb-2">Visit Us</h3>
              <p className="text-zion-gray-light text-sm mb-3">Schedule an in-person meeting</p>
              <p className="text-zion-cyan text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-4 px-8 rounded-xl hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Contact Us Today
            </a>
            <a
              href="/request-quote"
              className="border border-zion-cyan text-zion-cyan font-semibold py-4 px-8 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Request Custom Quote
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2025;