import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Atom,
  Satellite,
  Car,
  Bot,
  Eye,
  Calculator,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  ZapIcon,
  ShieldIcon,
  CloudIcon,
  BrainIcon,
  RocketIcon,
  LeafIcon,
  GlobeIcon,
  CodeIcon,
  DatabaseIcon,
  NetworkIcon,
  SmartphoneIcon,
  BarChartIcon,
  MessageSquareIcon,
  FileTextIcon,
  ShoppingCartIcon,
  HeadphonesIcon,
  MailIcon as MailIcon2,
  SearchIcon,
  HelpCircleIcon,
  ShieldCheckIcon,
  Globe2Icon,
  LeafIcon as LeafIcon2,
  SparklesIcon,
  TargetIcon,
  DollarSignIcon,
  ClockIcon,
  AwardIcon,
  PhoneIcon,
  MapPinIcon,
  InfinityIcon
} from 'lucide-react';
import SEO from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '../data/innovativeMicroSaasServices2027';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027 } from '../data/innovativeITInfrastructureServices2027';
import { EMERGING_TECHNOLOGY_SERVICES_2027 } from '../data/emergingTechnologyServices2027';

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('price');

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2027,
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027,
    ...EMERGING_TECHNOLOGY_SERVICES_2027
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];

  // Filter services based on selection
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return a.price - b.price;
    }
  });

  // Calculate statistics
  const totalServices = allServices.length;
  const averagePrice = Math.round(allServices.reduce((acc, s) => acc + s.price, 0) / totalServices);
  const totalValue = allServices.reduce((acc, s) => acc + s.price, 0);
  const averageROI = Math.round(allServices.reduce((acc, s) => acc + parseInt(s.roi), 0) / totalServices);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'AI & Healthcare': <Heart className="w-6 h-6" />,
      'Blockchain & Web3': <Link className="w-6 h-6" />,
      'IoT & Edge Computing': <Network className="w-6 h-6" />,
      'Quantum Computing': <Atom className="w-6 h-6" />,
      'Space Technology': <Satellite className="w-6 h-6" />,
      'Sustainable Technology': <Leaf className="w-6 h-6" />,
      'AI & Legal Tech': <FileText className="w-6 h-6" />,
      'FinTech': <DollarSign className="w-6 h-6" />,
      'AI & Content': <MessageSquare className="w-6 h-6" />,
      'IT Infrastructure': <Database className="w-6 h-6" />,
      'AI & Computing': <Cpu className="w-6 h-6" />,
      'Biotechnology': <Dna className="w-6 h-6" />,
      'Energy Technology': <Zap className="w-6 h-6" />,
      'Metaverse & AR/VR': <Globe className="w-6 h-6" />,
      'Neurotechnology': <Brain className="w-6 h-6" />,
      'Quantum Technology': <Atom className="w-6 h-6" />,
      'Autonomous Systems': <Car className="w-6 h-6" />,
      'Robotics & Automation': <Bot className="w-6 h-6" />
    };
    return iconMap[category] || <Star className="w-6 h-6" />;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const parseROI = (roi: string) => {
    const match = roi.match(/(\d+)%/);
    return match ? parseInt(match[1]) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Explore our complete pricing guide for innovative AI, quantum computing, space technology, and emerging tech services. Get detailed pricing, ROI analysis, and market comparisons."
        keywords="pricing guide, AI services pricing, quantum computing cost, space technology pricing, emerging tech pricing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Pricing
            </span>
            <br />
            <span className="text-white">Guide 2027</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover transparent pricing for our cutting-edge technology services. Compare costs, 
            analyze ROI, and find the perfect solution for your business needs.
          </motion.p>

          {/* Pricing Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Calculator className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{totalServices}</div>
              <div className="text-cyan-400 text-sm">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{formatPrice(averagePrice)}</div>
              <div className="text-green-400 text-sm">Average Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{averageROI}%</div>
              <div className="text-yellow-400 text-sm">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <PieChart className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{formatPrice(totalValue)}</div>
              <div className="text-purple-400 text-sm">Total Value</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-white font-medium mb-3">Price Range</label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <span className="text-white">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                    className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-white font-medium mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating (High to Low)</option>
                  <option value="roi">ROI (High to Low)</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Pricing & ROI Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our innovative services with market alternatives. Each service includes 
              detailed pricing, ROI projections, and competitive analysis.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 line-clamp-3">{service.description}</p>

                {/* Pricing Information */}
                <div className="space-y-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Our Price:</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-green-400 text-sm">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400">{service.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{service.setupTime}</div>
                      <div className="text-xs text-gray-400">Setup Time</div>
                    </div>
                  </div>
                </div>

                {/* Competitors */}
                <div className="mb-6">
                  <div className="text-gray-400 text-sm mb-2">Competitors:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.competitors?.slice(0, 3).map((competitor, compIndex) => (
                      <span
                        key={compIndex}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {competitor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Quote for ${service.title}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {sortedServices.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your filters or search criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ROI Analysis Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Return on Investment Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand the financial impact of our services with detailed ROI calculations 
              and cost-benefit analysis.
            </p>
          </motion.div>

          {/* ROI Chart Placeholder */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <BarChart className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">ROI Comparison Chart</h3>
            <p className="text-gray-300 mb-8">
              Visual representation of expected returns across different service categories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">800%</div>
                <div className="text-white font-medium">AI Services</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">1200%</div>
                <div className="text-white font-medium">Quantum Computing</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">600%</div>
                <div className="text-white font-medium">Infrastructure</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team for a personalized consultation and detailed pricing quote 
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Custom Quote
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Phone</div>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Email</div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Address</div>
                <div className="text-green-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper component for DNA icon
function Dna({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );
}
