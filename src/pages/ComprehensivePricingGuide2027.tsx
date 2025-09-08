import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Globe,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Handshake as HandshakeIcon,
  Target as TargetIcon2,
  Users2 as Users2Icon,
  Briefcase as BriefcaseIcon,
  Building as BuildingIcon,
  Truck as TruckIcon,
  Leaf as LeafIcon2,
  Gamepad2 as Gamepad2Icon2,
  Coins as CoinsIcon2,
  Satellite as SatelliteIcon2,
  Atom as AtomIcon,
  Leaf as LeafIcon3,
  Gamepad2 as Gamepad2Icon3,
  Coins as CoinsIcon3} from 'lucide-react';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');

  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(services.map(s => s.category)))];
    return cats.sort();
  }, [services]);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange === 'low') matchesPrice = service.price <= 2000;
      else if (priceRange === 'medium') matchesPrice = service.price > 2000 && service.price <= 5000;
      else if (priceRange === 'high') matchesPrice = service.price > 5000;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => a.price - b.price);
  }, [services, searchQuery, selectedCategory, priceRange]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-6 h-6" />;
      case 'AI & Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Marketing':
        return <BarChart3 className="w-6 h-6" />;
      case 'AI & Sales':
        return <TrendingUp className="w-6 h-6" />;
      case 'AI & Customer Experience':
        return <MessageSquare className="w-6 h-6" />;
      case 'AI & Analytics':
        return <Database className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Box className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Wallet className="w-6 h-6" />;
      case 'Sustainability & Technology':
        return <Leaf className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getPriceRangeFilter = (range: string) => {
    switch (range) {
      case 'Under $1,000':
        return (service: InnovativeService2025) => service.price < 1000;
      case '$1,000 - $2,999':
        return (service: InnovativeService2025) => service.price >= 1000 && service.price <= 2999;
      case '$3,000 - $4,999':
        return (service: InnovativeService2025) => service.price >= 3000 && service.price <= 4999;
      case '$5,000+':
        return (service: InnovativeService2025) => service.price >= 5000;
      default:
        return () => true;
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }

    setExpandedServices(newExpanded);
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace('%', ''));
    if (roiValue >= 500) return 'text-green-400';
    if (roiValue >= 300) return 'text-blue-400';
    if (roiValue >= 200) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. Get transparent pricing and ROI information for all our services."
        canonical="/pricing"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-400/30 mb-6">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Comprehensive Pricing Guide 2027</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-400">
                & Service Guide
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Transparent pricing for our complete portfolio of innovative micro SAAS services, AI solutions, and revolutionary technology platforms. Find the perfect solution for your business needs and budget.
            </motion.p>
            
            {/* Pricing Tiers Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="bg-slate-800/50 p-6 rounded-xl border border-green-400/20">
                <div className="text-2xl font-bold text-green-400 mb-2">Starter</div>
                <div className="text-3xl font-bold mb-2">$1,299 - $2,000</div>
                <div className="text-sm text-slate-300">Perfect for small businesses and startups</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/20">
                <div className="text-2xl font-bold text-blue-400 mb-2">Professional</div>
                <div className="text-3xl font-bold mb-2">$2,001 - $5,000</div>
                <div className="text-sm text-slate-300">Ideal for growing businesses</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20">
                <div className="text-2xl font-bold text-purple-400 mb-2">Enterprise</div>
                <div className="text-3xl font-bold mb-2">$5,001+</div>
                <div className="text-sm text-slate-300">For large organizations and enterprises</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent appearance-none cursor-pointer">
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent appearance-none cursor-pointer">
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                {/* Service Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-400/30">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-wide text-cyan-300/70 font-medium mb-1">
                          {service.category}
                        </div>
                        {service.subcategory && (
                          <div className="text-xs text-slate-400">
                            {service.subcategory}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getInnovationColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${priceRange.color}`}>
                        {priceRange.label}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing & ROI */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">Monthly Price</div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">
                        {service.pricingModel} billing
                      </div>
                    </div>
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">Expected ROI</div>
                      <div className="text-2xl font-bold text-green-400">
                        {service.roi}
                      </div>
                      <div className="text-xs text-slate-400">
                        Return on investment
                      </div>
                    </div>
                  </div>

                  {/* Market Comparison */}
                  <div className="mb-6 p-4 bg-slate-800/20 rounded-lg border border-slate-600/30">
                    <div className="text-sm text-slate-400 mb-2">Market Price Range</div>
                    <div className="text-lg font-semibold text-slate-200">{service.marketPrice}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      Competitive pricing analysis
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="text-sm uppercase tracking-wide text-slate-400 mb-3">Key Features</div>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 5 && (
                        <div className="text-xs text-slate-400 mt-2">
                          +{service.features.length - 5} more features included
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits & Use Cases */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Key Benefits</div>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Use Cases</div>
                      <div className="space-y-1">
                        {service.useCases.slice(0, 3).map((useCase, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="mb-6 p-4 bg-slate-800/20 rounded-lg border border-slate-600/30">
                      <div className="text-sm uppercase tracking-wide text-slate-400 mb-3">Technical Specifications</div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-slate-400 mb-1">Technology Stack</div>
                          <div className="text-slate-300">{service.technicalSpecs.technology.slice(0, 3).join(', ')}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 mb-1">Uptime</div>
                          <div className="text-slate-300">{service.technicalSpecs.uptime}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 mb-1">API Endpoints</div>
                          <div className="text-slate-300">{service.technicalSpecs.apiEndpoints}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 mb-1">Security</div>
                          <div className="text-slate-300">{service.technicalSpecs.security.slice(0, 2).join(', ')}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delivery & Support */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                      <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-sm text-slate-400">Delivery</div>
                      <div className="text-sm font-medium text-slate-200">{service.estimatedDelivery}</div>
                    </div>
                    <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                      <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-sm text-slate-400">Support</div>
                      <div className="text-sm font-medium text-slate-200 capitalize">{service.supportLevel}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400 border border-slate-600/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Phone className="w-3 h-3" />
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {service.contactInfo.email}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-white transition-all duration-200">
                        Learn More
                      </button>
                      <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria, category filter, or price range.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team of experts is ready to help you choose the right solution and implement it successfully. Get a custom quote tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-400/20">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-slate-300 text-sm">+1 302 464 0950</p>
                <p className="text-xs text-slate-400 mt-1">Available Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/20">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-slate-300 text-sm">kleber@ziontechgroup.com</p>
                <p className="text-xs text-slate-400 mt-1">Response within 2 hours</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="text-xs text-slate-400 mt-1">Schedule an in-person meeting</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://ziontechgroup.com/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-600/30">
              <h3 className="text-lg font-semibold mb-3">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Proven ROI and business impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Expert implementation and support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Custom solutions tailored to your needs</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">ziontechgroup.com</a></p>
              <p className="mt-2">All prices are in USD and subject to change. Contact us for volume discounts and enterprise pricing.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
