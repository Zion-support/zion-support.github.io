import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Zap, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign,
  Award,
  Clock,
  Target,
  BarChart3,
  Cpu,
  Lock,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  Database,
  Network,
  Server,
  ShieldCheck,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  Users,
  Eye,
  ArrowUpRight,
  Grid,
  List,
  ChevronRight,
  ChevronDown,
  Info,
  Calendar,
  UserCheck,
  Globe,
  Layers,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  Key,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Heart as HeartIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesCatalog } from '../data/servicesCatalog';

// Enhanced pricing tiers
const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: ['Basic features', 'Email support', 'Up to 5 users', 'Standard integrations'],
    color: 'from-green-500 to-emerald-500',
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'month',
    description: 'Ideal for growing businesses',
    features: ['Advanced features', 'Priority support', 'Up to 25 users', 'Premium integrations', 'Analytics dashboard'],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: 'month',
    description: 'For large organizations',
    features: ['All features', '24/7 support', 'Unlimited users', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager'],
    color: 'from-purple-500 to-pink-500',
    popular: false
  }
];

// Service comparison features
const comparisonFeatures = [
  'AI-Powered Analytics',
  'Real-time Monitoring',
  'Custom Integrations',
  'API Access',
  'White-label Options',
  'Advanced Security',
  'Compliance Certifications',
  'Training & Support',
  'SLA Guarantees',
  'Custom Development'
];

// Enhanced service card component
const ServicePricingCard = ({ service, showDetails = false }: { service: any; showDetails?: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, any> = {
      'Micro SaaS': ShoppingCart,
      'IT Services': Server,
      'AI Solutions': Brain,
      'Cybersecurity': Shield,
      'Cloud & DevOps': Cloud,
      'Quantum Computing': Atom,
      'Blockchain & Web3': Lock,
      'IoT & Edge': Cpu,
      'Green Tech': Leaf,
      'Space Tech': Satellite,
      'BioTech & Health': Heart,
      'FinTech & DeFi': DollarSign,
      'Metaverse & AR/VR': Eye,
      'Autonomous Systems': Rocket
    };
    return iconMap[category] || Grid;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'Micro SaaS': 'from-purple-600 to-pink-600',
      'IT Services': 'from-green-600 to-emerald-600',
      'AI Solutions': 'from-indigo-600 to-purple-600',
      'Cybersecurity': 'from-red-600 to-pink-600',
      'Cloud & DevOps': 'from-blue-600 to-cyan-600',
      'Quantum Computing': 'from-purple-600 to-indigo-600',
      'Blockchain & Web3': 'from-yellow-600 to-orange-600',
      'IoT & Edge': 'from-green-600 to-teal-600',
      'Green Tech': 'from-green-600 to-emerald-600',
      'Space Tech': 'from-indigo-600 to-purple-600',
      'BioTech & Health': 'from-red-600 to-pink-600',
      'FinTech & DeFi': 'from-emerald-600 to-teal-600',
      'Metaverse & AR/VR': 'from-purple-600 to-indigo-600',
      'Autonomous Systems': 'from-orange-600 to-red-600'
    };
    return colorMap[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Service Header */}
      <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6' })}
          </div>
          <span className="text-sm font-medium bg-white/20 px-3 py-2 rounded-full">
            {service.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Service Content */}
      <div className="p-6">
        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-3xl font-bold text-gray-900">{service.price}</div>
          <span className="text-sm text-gray-500 capitalize">per {service.billing}</span>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, showDetails ? 5 : 3).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
            {service.features.length > (showDetails ? 5 : 3) && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                {expanded ? 'Show less' : `+${service.features.length - (showDetails ? 5 : 3)} more features`}
                {expanded ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
              </button>
            )}
            {expanded && service.features.slice(showDetails ? 5 : 3).map((feature: string, idx: number) => (
              <div key={idx + (showDetails ? 5 : 3)} className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={service.href}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        >
          {service.ctaLabel}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

// Pricing comparison table
const PricingComparisonTable = ({ services }: { services: any[] }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const filteredServices = services.filter(service => selectedServices.includes(service.id));

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Comparison</h3>
      
      {/* Service Selection */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Select Services to Compare</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`p-3 rounded-lg border transition-all duration-200 text-sm ${
                selectedServices.includes(service.id)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {filteredServices.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-3 font-semibold text-gray-700">Feature</th>
                {filteredServices.map(service => (
                  <th key={service.id} className="text-center p-3 font-semibold text-gray-700">
                    {service.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map(feature => (
                <tr key={feature} className="border-b border-gray-100">
                  <td className="p-3 text-sm text-gray-600">{feature}</td>
                  {filteredServices.map(service => (
                    <td key={service.id} className="text-center p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="p-3 font-semibold text-gray-700">Starting Price</td>
                {filteredServices.map(service => (
                  <td key={service.id} className="text-center p-3 font-semibold text-gray-900">
                    {service.price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Contact information section
const ContactSection = () => {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a customized quote for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-blue-300 hover:text-blue-200">
              {contactInfo.phone}
            </a>
          </div>
          
          <div className="text-center">
            <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-purple-300 hover:text-purple-200">
              {contactInfo.email}
            </a>
          </div>
          
          <div className="text-center">
            <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visit Website</h3>
            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200">
              {contactInfo.website.replace('https://', '')}
            </a>
          </div>
          
          <div className="text-center">
            <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-red-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComprehensivePricingGuide2027() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Flatten all services from the catalog
  const allServices = useMemo(() => {
    return servicesCatalog.flatMap(category => category.items);
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(allServices.map(service => service.category))];
    return cats.sort();
  }, [allServices]);

  // Filter services based on search, category, and price
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const matchesPrice = priceRange === 'all' || (() => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (priceRange) {
          case '0-100': return price <= 100;
          case '100-500': return price > 100 && price <= 500;
          case '500-1000': return price > 500 && price <= 1000;
          case '1000+': return price > 1000;
          default: return true;
        }
      })();
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [allServices, searchQuery, selectedCategory, priceRange]);

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Explore our complete pricing guide for AI solutions, IT services, and Micro SaaS platforms. Get detailed pricing, features, and comparison information for all our services."
        keywords="pricing guide, service pricing, AI solutions pricing, IT services cost, Micro SaaS pricing, technology pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2027
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for all our AI solutions, IT services, and Micro SaaS platforms. 
                Find the perfect solution for your business needs and budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{allServices.length}+ Services</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing Tiers Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                  tier.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Star className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">/{tier.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="0-100">$0 - $100</option>
                  <option value="100-500">$100 - $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000+">$1,000+</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">View Mode:</span>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                    title="Grid View"
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                    title="List View"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                Showing {filteredServices.length} of {allServices.length} services
              </div>
            </div>
          </div>
        </div>

        {/* Services Display */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredServices.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <ServicePricingCard key={service.id} service={service} showDetails={true} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service, index) => (
                  <ServicePricingCard key={service.id} service={service} showDetails={true} />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse all services
              </p>
            </div>
          )}
        </div>

        {/* Service Comparison */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <PricingComparisonTable services={allServices} />
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
