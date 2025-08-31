import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  BarChart3, 
  Heart, 
  Eye, 
  Atom, 
  Activity, 
  Code, 
  Database, 
  Server, 
  Network, 
  Lock, 
  Cloud, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  MessageCircle,
  PhoneCall,
  VideoCall,
  MailOpen,
  Send,
  Plus,
  Minus,
  X,
  Menu,
  Settings,
  User,
  LogOut,
  LogIn,
  UserPlus,
  UserCheck,
  Key,
  Lock as LockIcon,
  Unlock,
  EyeOff,
  EyeOn,
  Bell,
  BellOff,
  Home as HomeIcon,
  Info,
  HelpCircle,
  AlertCircle,
  AlertTriangle,
  Check,
  XCircle,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Globe as GlobeIcon,
  Building,
  Factory as FactoryIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Van,
  Helicopter,
  Rocket as RocketIcon,
  Satellite as SatelliteIcon,
  Telescope as TelescopeIcon,
  Microscope as MicroscopeIcon,
  Flask as FlaskIcon,
  TestTube,
  Beaker,
  PetriDish,
  DNA,
  Virus,
  Bacteria,
  Cell,
  Organ,
  Heart as HeartIcon,
  Brain as BrainIcon,
  Eye as EyeIcon,
  Ear,
  Nose,
  Mouth,
  Tooth,
  Bone,
  Muscle,
  Skin,
  Hair,
  Nail,
  Blood,
  Oxygen,
  Carbon,
  Hydrogen,
  Nitrogen,
  Helium,
  Neon,
  Argon,
  Krypton,
  Xenon,
  Radon,
  Lithium,
  Sodium,
  Potassium,
  Calcium,
  Magnesium,
  Iron,
  Copper,
  Zinc,
  Gold,
  Silver,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Tungsten,
  Molybdenum,
  Niobium,
  Tantalum,
  Vanadium,
  Chromium,
  Manganese,
  Cobalt,
  Nickel,
  Cadmium,
  Mercury,
  Lead,
  Bismuth,
  Polonium,
  Astatine,
  Radon as RadonIcon,
  Francium,
  Radium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { allInnovativeServices2029 } from '@/data/innovativeServices2029';

const ComprehensivePricingGuide2029: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: 0 },
    { id: 'it', name: 'IT Services', icon: Server, count: 0 },
    { id: 'ai', name: 'AI Services', icon: Brain, count: 0 }
  ];

  // Calculate counts
  useEffect(() => {
    categories[1].count = allInnovativeServices2029.microSaas.length;
    categories[2].count = allInnovativeServices2029.itServices.length;
    categories[3].count = allInnovativeServices2029.aiServices.length;
    categories[0].count = categories[1].count + categories[2].count + categories[3].count;
  }, []);

  const allServices = [
    ...allInnovativeServices2029.microSaas.map(s => ({ ...s, type: 'micro-saas' })),
    ...allInnovativeServices2029.itServices.map(s => ({ ...s, type: 'it' })),
    ...allInnovativeServices2029.aiServices.map(s => ({ ...s, type: 'ai' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        return parseInt(a.roi) - parseInt(b.roi);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI-Powered Workflow Automation':
        return Brain;
      case 'Quantum Computing Integration':
        return Atom;
      case 'Biotechnology AI Solutions':
        return Flask;
      case 'Space Technology Solutions':
        return Satellite;
      case 'Advanced Cybersecurity':
        return Shield;
      case 'Cloud Computing':
        return Cloud;
      case 'DevOps & Automation':
        return Code;
      case 'AI Research & Development':
        return Brain;
      case 'AI Financial Services':
        return DollarSign;
      default:
        return Rocket;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi);
    if (roiValue >= 500) return 'text-green-400';
    if (roiValue >= 300) return 'text-yellow-400';
    return 'text-blue-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Comprehensive Pricing Guide 2029 - Zion Tech Group"
        description="Complete pricing guide for all innovative micro SAAS, IT infrastructure, and AI services for 2029. Compare features, pricing, and ROI across all services."
        keywords="pricing guide 2029, service pricing, micro SAAS pricing, IT services pricing, AI services pricing, ROI comparison"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2029
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Compare all our innovative services with detailed pricing, features, and ROI analysis. 
              Find the perfect solution for your business needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Proven ROI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Feature Comparison</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-white mb-2" />
              <p className="text-white font-medium">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-white mb-2" />
              <p className="text-white font-medium">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-white mb-2" />
              <p className="text-white font-medium">364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'table' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
              >
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Price Range:</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-32"
                />
                <span className="text-gray-300 text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {sortedServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : viewMode === 'grid' ? (
              /* Grid View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                          {React.createElement(getCategoryIcon(service.category), { 
                            className: "w-6 h-6 text-white" 
                          })}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Market: {service.marketPrice}</span>
                        <span>•</span>
                        <span className={getROIColor(service.roi)}>ROI: {service.roi}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Setup Info */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Setup: {service.setupTime}</span>
                      {service.freeTier && (
                        <span className="text-green-400 font-medium">Free Tier Available</span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 group">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Contact:</span>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-400">{service.contactInfo.phone}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Table View */
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ROI</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Setup</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Features</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {sortedServices.map((service, index) => (
                        <motion.tr
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="hover:bg-gray-700/30 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                                {React.createElement(getCategoryIcon(service.category), { 
                                  className: "w-5 h-5 text-white" 
                                })}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-sm text-gray-400">{service.description.substring(0, 60)}...</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-300">{service.category}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-white">${service.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-400">/{service.pricingModel}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-sm font-medium ${getROIColor(service.roi)}`}>
                              {service.roi}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-300">{service.setupTime}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-300">{service.features.length} features</div>
                            <div className="text-xs text-gray-400">{service.benefits.length} benefits</div>
                          </td>
                          <td className="px-6 py-4">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
                              Get Started
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pricing <span className="text-cyan-400">Summary</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get an overview of our pricing structure and find the perfect plan for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Micro SAAS Services",
                price: "$3,499 - $5,999",
                period: "per month",
                features: [
                  "AI-powered automation",
                  "Quantum computing integration",
                  "Space technology solutions",
                  "Advanced cybersecurity",
                  "Unlimited enterprise users",
                  "24/7 support"
                ],
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "IT Infrastructure Services",
                price: "$3,499 - $5,999",
                period: "per month",
                features: [
                  "Quantum cloud infrastructure",
                  "AI-powered DevOps",
                  "Edge computing solutions",
                  "Multi-cloud management",
                  "99.99% uptime guarantee",
                  "Dedicated support"
                ],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "AI Services",
                price: "$3,999 - $4,999",
                period: "per month",
                features: [
                  "Autonomous AI research",
                  "Quantum AI trading",
                  "AI-powered analytics",
                  "Machine learning models",
                  "Custom AI development",
                  "Expert consultation"
                ],
                color: "from-green-500 to-emerald-500"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {index === 0 && <Rocket className="w-8 h-8 text-white" />}
                  {index === 1 && <Server className="w-8 h-8 text-white" />}
                  {index === 2 && <Brain className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-200`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a customized quote. 
              We'll help you find the perfect solution within your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-lg font-medium text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us Now
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 py-4 px-8 rounded-lg font-medium text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Request Custom Quote
              </button>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Call us at <span className="text-cyan-400 font-medium">+1 302 464 0950</span></p>
              <p>Email us at <span className="text-cyan-400 font-medium">kleber@ziontechgroup.com</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative micro SAAS, IT infrastructure, and AI services for 2029 and beyond.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">IT Services</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Services</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Quantum Computing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Financial</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Government</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2029 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensivePricingGuide2029;