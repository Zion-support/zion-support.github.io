import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp,
  Info,
  Zap,
  Shield,
  Cpu,
  Brain,
  Rocket,
  Atom,
  Globe,
  Database
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '@/data/emergingTechServices2027';
import { SEO } from '@/components/SEO';

// Service category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  'Quantum Computing & AI': <Atom className="w-5 h-5" />,
  'Space Technology': <Rocket className="w-5 h-5" />,
  'Neural Technology': <Brain className="w-5 h-5" />,
  'Biotechnology': <Database className="w-5 h-5" />,
  'Robotics & Automation': <Cpu className="w-5 h-5" />,
  'Quantum Technology': <Atom className="w-5 h-5" />,
  'Fusion Energy': <Zap className="w-5 h-5" />,
  'Metaverse & VR': <Globe className="w-5 h-5" />,
  'Materials Science': <Shield className="w-5 h-5" />
};

// Pricing tiers
const pricingTiers = [
  {
    name: 'Starter',
    price: '$1,000 - $5,000',
    description: 'Basic services for small businesses and startups',
    features: ['Core functionality', 'Standard support', 'Basic documentation', 'Email support']
  },
  {
    name: 'Professional',
    price: '$5,000 - $25,000',
    description: 'Advanced features for growing businesses',
    features: ['Full functionality', 'Priority support', 'Custom integrations', 'Training included', 'Phone support']
  },
  {
    name: 'Enterprise',
    price: '$25,000+',
    description: 'Full-featured solutions for large organizations',
    features: ['Complete functionality', '24/7 support', 'Custom development', 'Dedicated team', 'SLA guarantees']
  }
];

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...INNOVATIVE_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Get unique innovation levels
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-5000', label: '$0 - $5,000' },
    { value: '5000-15000', label: '$5,000 - $15,000' },
    { value: '15000-30000', label: '$15,000 - $30,000' },
    { value: '30000+', label: '$30,000+' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (selectedPriceRange === '30000+') {
          matchesPrice = service.price >= 30000;
        } else {
          matchesPrice = service.price >= min && service.price < max;
        }
      }
      
      return matchesSearch && matchesCategory && matchesInnovation && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price;
        case 'innovation':
          const innovationOrder = { 'Revolutionary': 3, 'Breakthrough': 2, 'Advanced': 1 };
          return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
                 (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
        case 'roi':
          const roiA = parseInt(a.roi.replace('%', ''));
          const roiB = parseInt(b.roi.replace('%', ''));
          return roiB - roiA;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 5000) return 'text-green-400';
    if (price < 15000) return 'text-yellow-400';
    if (price < 30000) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Complete pricing guide for all our innovative services including Quantum AI, Space Tech, Neural Interfaces, and more breakthrough technologies."
        keywords="pricing guide, service pricing, quantum computing, space technology, neural interfaces, fusion energy, metaverse, materials science"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="text-4xl md:text-5xl">Pricing Guide 2027</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan/90 mb-8 max-w-4xl mx-auto">
                Transparent pricing for all our innovative services with detailed features, benefits, and ROI analysis
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-zion-cyan/80">
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Transparent Pricing
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Competitive Rates
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Value-Driven Solutions
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers Overview */}
        <section className="py-16 bg-black/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Service Tier
              </h2>
              <p className="text-zion-cyan/80 text-lg">
                Flexible pricing options to match your business needs and budget
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                    <p className="text-zion-cyan/70 text-sm">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-zion-cyan/80">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <a
                      href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry - Tier Consultation"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
                    >
                      Get Quote
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-black/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value} className="bg-zion-slate text-white">
                    {range.label}
                  </option>
                ))}
              </select>

              {/* Innovation Level Filter */}
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-zion-slate text-white">
                    {level === 'all' ? 'All Innovation Levels' : level}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation Level</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Pricing Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detailed Service Pricing
              </h2>
              <p className="text-zion-cyan/80 text-lg">
                Compare features, pricing, and ROI across all our innovative services
              </p>
            </motion.div>

            <div className="space-y-6">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300"
                  >
                    {/* Service Header */}
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-zion-cyan/20 rounded-lg">
                              {categoryIcons[service.category]}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                service.innovationLevel === 'Revolutionary' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                                service.innovationLevel === 'Breakthrough' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                                'bg-gradient-to-r from-blue-500 to-cyan-500'
                              } text-white`}>
                                {service.innovationLevel === 'Revolutionary' ? '🔥' : 
                                 service.innovationLevel === 'Breakthrough' ? '⚡' : '🚀'}
                                {service.innovationLevel}
                              </span>
                              <span className="text-sm text-zion-cyan/70">{service.category}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-zion-cyan/80 text-sm mb-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-zion-cyan/70">
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {service.estimatedDelivery}
                            </span>
                            <span className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              {service.supportLevel}
                            </span>
                            <span className="flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              {service.marketPrice}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-3">
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${getPriceRangeColor(service.price)}`}>
                              ${service.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-zion-cyan/70">
                              per {service.pricingModel}
                            </div>
                          </div>
                          
                          <div className="text-center p-2 bg-zion-slate/50 rounded-lg">
                            <div className="text-lg font-bold text-zion-cyan">
                              {service.roi}
                            </div>
                            <div className="text-xs text-zion-cyan/70">ROI</div>
                          </div>
                          
                          <button
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors"
                          >
                            {expandedService === service.id ? 'Show Less' : 'Show Details'}
                            {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Service Details */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-zion-cyan/20 bg-zion-slate/30"
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {/* Features and Benefits */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                                <div className="space-y-2 mb-6">
                                  {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm text-zion-cyan/80">
                                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                                
                                <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                                <div className="space-y-2">
                                  {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm text-zion-cyan/80">
                                      <Target className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                                      {benefit}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Technical Specs and Use Cases */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Use Cases</h4>
                                <div className="space-y-2 mb-6">
                                  {service.useCases.map((useCase, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm text-zion-cyan/80">
                                      <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0"></div>
                                      {useCase}
                                    </div>
                                  ))}
                                </div>
                                
                                {service.technicalSpecs && (
                                  <>
                                    <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                                    <div className="space-y-3 text-sm text-zion-cyan/80">
                                      <div>
                                        <span className="font-semibold">Technology:</span> {service.technicalSpecs.technology.join(', ')}
                                      </div>
                                      <div>
                                        <span className="font-semibold">API Endpoints:</span> {service.technicalSpecs.apiEndpoints}
                                      </div>
                                      <div>
                                        <span className="font-semibold">Uptime:</span> {service.technicalSpecs.uptime}
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            {/* CTA Section */}
                            <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-sm text-zion-cyan/70">
                                  <div>Contact: {service.contactInfo.phone} | {service.contactInfo.email}</div>
                                </div>
                                <div className="flex gap-3">
                                  <a
                                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
                                  >
                                    Get Quote
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                  <a
                                    href="https://ziontechgroup.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                                  >
                                    Learn More
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-cyan/70">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-cyan/90 mb-8">
                Contact us for a personalized consultation and detailed pricing for your specific needs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-zion-cyan/80">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-zion-cyan/80">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-zion-cyan/80">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Quote
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Visit Website
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2027;