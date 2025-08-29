import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail as MailIcon,
  MapPin,
  Phone,
  Rocket,
  Search,
  Star,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  ArrowUpRight,
  Play,
  BookOpen,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart3,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Satellite,
  Leaf,
  Building,
  FlaskConical,
  Filter,
  SortAsc,
  SortDesc,
  PieChart,
  BarChart,
  LineChart,
  Calculator,
  TrendingDown,
  Percent,
  Timer,
  Calendar,
  CheckSquare,
  XCircle,
  AlertTriangle,
  Info,
  X
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensivePricingGuide2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [priceRange, setPriceRange] = useState('all');
  const [roiRange, setRoiRange] = useState('all');
  const [setupTimeRange, setSetupTimeRange] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Price range filter
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = service.price;
      switch (priceRange) {
        case 'budget':
          matchesPrice = price <= 10000;
          break;
        case 'mid-range':
          matchesPrice = price > 10000 && price <= 50000;
          break;
        case 'enterprise':
          matchesPrice = price > 50000;
          break;
      }
    }

    // ROI range filter
    let matchesROI = true;
    if (roiRange !== 'all') {
      const roi = service.roi;
      if (typeof roi === 'string') {
        const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
        switch (roiRange) {
          case 'low':
            matchesROI = roiNumber <= 300;
            break;
          case 'medium':
            matchesROI = roiNumber > 300 && roiNumber <= 700;
            break;
          case 'high':
            matchesROI = roiNumber > 700;
            break;
        }
      }
    }

    // Setup time filter
    let matchesSetupTime = true;
    if (setupTimeRange !== 'all') {
      const setupTime = service.setupTime;
      if (typeof setupTime === 'string') {
        const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
        switch (setupTimeRange) {
          case 'quick':
            matchesSetupTime = weeks <= 8;
            break;
          case 'standard':
            matchesSetupTime = weeks > 8 && weeks <= 16;
            break;
          case 'extended':
            matchesSetupTime = weeks > 16;
            break;
        }
      }
    }

    return matchesCategory && matchesSearch && matchesPrice && matchesROI && matchesSetupTime;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'rating':
        comparison = b.rating - a.rating;
      case 'reviews':
        comparison = b.reviewCount - a.reviewCount;
        break;
      case 'aiScore':
        comparison = b.aiScore - a.aiScore;
        break;
      case 'roi':
        const roiA = typeof a.roi === 'string' ? parseInt(a.roi.match(/\d+/)?.[0] || '0') : 0;
        const roiB = typeof b.roi === 'string' ? parseInt(b.roi.match(/\d+/)?.[0] || '0') : 0;
        comparison = roiB - roiA;
        break;
      case 'setupTime':
        const timeA = typeof a.setupTime === 'string' ? parseInt(a.setupTime.match(/\d+/)?.[0] || '0') : 0;
        const timeB = typeof b.setupTime === 'string' ? parseInt(b.setupTime.match(/\d+/)?.[0] || '0') : 0;
        comparison = timeA - timeB;
        break;
      default:
        comparison = 0;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'AI & Marketing': <TrendingUp className="w-6 h-6" />,
      'AI & Healthcare': <Monitor className="w-6 h-6" />,
      'AI & Legal Tech': <BookOpen className="w-6 h-6" />,
      'AI & Real Estate': <Building className="w-6 h-6" />,
      'AI & Operations': <Cpu className="w-6 h-6" />,
      'AI & Green Tech': <Leaf className="w-6 h-6" />,
      'AI & Autonomous Systems': <Rocket className="w-6 h-6" />,
      'AI & FinTech': <DollarSign className="w-6 h-6" />,
      'AI & Environmental Tech': <Leaf className="w-6 h-6" />,
      'AI & Content': <Code className="w-6 h-6" />,
      'AI & Customer Support': <Users className="w-6 h-6" />,
      'AI & HR': <Users className="w-6 h-6" />,
      'AI & Research': <FlaskConical className="w-6 h-6" />,
      'AI & Metaverse': <Globe className="w-6 h-6" />,
      'AI & Space Tech': <Satellite className="w-6 h-6" />,
      'AI & Development': <Code className="w-6 h-6" />,
      'AI & Education': <BookOpen className="w-6 h-6" />,
      'AI & Entertainment': <Palette className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'IoT & Edge Computing': <Wifi className="w-6 h-6" />,
      'Blockchain & Web3': <Network className="w-6 h-6" />,
      'Digital Twin': <Eye className="w-6 h-6" />,
      'Space Technology': <Satellite className="w-6 h-6" />,
      'Sustainable Technology': <Leaf className="w-6 h-6" />,
      'IT Infrastructure': <Server className="w-6 h-6" />,
      'Emerging Technology': <Lightbulb className="w-6 h-6" />
    };
    return iconMap[category] || <Rocket className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Marketing': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-pink-500 to-red-500',
      'AI & Legal Tech': 'from-blue-500 to-indigo-500',
      'AI & Real Estate': 'from-yellow-500 to-orange-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & Green Tech': 'from-green-500 to-emerald-500',
      'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'AI & Environmental Tech': 'from-teal-500 to-green-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & Customer Support': 'from-blue-500 to-purple-500',
      'AI & HR': 'from-indigo-500 to-blue-500',
      'AI & Research': 'from-purple-500 to-violet-500',
      'AI & Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Space Tech': 'from-indigo-500 to-purple-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'AI & Education': 'from-blue-500 to-indigo-500',
      'AI & Entertainment': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Space Technology': 'from-purple-500 to-pink-500',
      'Sustainable Technology': 'from-green-500 to-teal-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-violet-500 to-purple-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  const getROIColor = (roi: string) => {
    const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
    if (roiNumber >= 800) return 'text-green-400';
    if (roiNumber >= 500) return 'text-blue-400';
    if (roiNumber >= 300) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSetupTimeColor = (setupTime: string) => {
    const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
    if (weeks <= 8) return 'text-green-400';
    if (weeks <= 16) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPriceRangeColor = (price: number) => {
    if (price <= 10000) return 'text-green-400';
    if (price <= 50000) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Calculate statistics
  const totalValue = COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => sum + service.price, 0);
  const averageROI = COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => {
    const roi = service.roi;
    if (typeof roi === 'string') {
      const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
      return sum + roiNumber;
    }
    return sum;
  }, 0) / COMPREHENSIVE_SERVICES_INDEX_2030.length;

  return (
    <>
      <SEO
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for Zion Tech Group's revolutionary micro SAAS, IT, and AI services for 2030. Compare prices, ROI, and setup times across all service categories."
        keywords="pricing guide 2030, service pricing, ROI analysis, setup times, micro SAAS pricing, AI services pricing, Zion Tech Group"
        image="https://ziontechgroup.com/images/comprehensive-pricing-guide-2030.jpg"
        url="https://ziontechgroup.com/comprehensive-pricing-guide-2030"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive Pricing Guide
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2030
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete pricing transparency for all our revolutionary services. Compare prices, 
                ROI potential, setup times, and make informed decisions for your business transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">{SERVICE_STATISTICS_2030.totalServices}+</span> Services
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">${totalValue.toLocaleString()}+</span> Total Value
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">{Math.round(averageROI)}%</span> Avg ROI
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">${SERVICE_STATISTICS_2030.averagePrice.toLocaleString()}</span> Avg Price
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MailIcon className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="reviews">Sort by Reviews</option>
                    <option value="aiScore">Sort by AI Score</option>
                    <option value="roi">Sort by ROI</option>
                    <option value="setupTime">Sort by Setup Time</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 hover:bg-white/20 transition-colors"
                  >
                    {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES_2030.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $10K)</option>
                  <option value="mid-range">Mid-Range ($10K - $50K)</option>
                  <option value="enterprise">Enterprise ($50K+)</option>
                </select>

                <select
                  value={roiRange}
                  onChange={(e) => setRoiRange(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All ROI</option>
                  <option value="low">Low (≤300%)</option>
                  <option value="medium">Medium (300-700%)</option>
                  <option value="high">High (700%+)</option>
                </select>

                <select
                  value={setupTimeRange}
                  onChange={(e) => setSetupTimeRange(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Setup Times</option>
                  <option value="quick">Quick (≤8 weeks)</option>
                  <option value="standard">Standard (8-16 weeks)</option>
                  <option value="extended">Extended (16+ weeks)</option>
                </select>
              </div>

              {/* Results Summary */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="flex flex-wrap items-center justify-between gap-4 text-white">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-300">Showing {filteredServices.length} of {COMPREHENSIVE_SERVICES_INDEX_2030.length} services</span>
                    {activeCategory !== 'all' && (
                      <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                        {activeCategory}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-300">Total Value:</span>
                    <span className="text-green-400 font-semibold">${filteredServices.reduce((sum, service) => sum + service.price, 0).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/10 border-b border-white/20">
                      <th className="text-left p-6 text-white font-semibold">Service</th>
                      <th className="text-left p-6 text-white font-semibold">Category</th>
                      <th className="text-left p-6 text-white font-semibold">Price</th>
                      <th className="text-left p-6 text-white font-semibold">Market Price</th>
                      <th className="text-left p-6 text-white font-semibold">ROI</th>
                      <th className="text-left p-6 text-white font-semibold">Setup Time</th>
                      <th className="text-left p-6 text-white font-semibold">Rating</th>
                      <th className="text-left p-6 text-white font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentServices.map((service, index) => (
                      <motion.tr
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <td className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                              {getCategoryIcon(service.category)}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                              <p className="text-gray-400 text-sm line-clamp-2 max-w-xs">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                            {service.category}
                          </span>
                        </td>
                        <td className="p-6">
                          <span className={`font-semibold ${getPriceRangeColor(service.price)}`}>
                            ${service.price.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-6">
                          <span className="text-green-400 text-sm">{service.marketPrice}</span>
                        </td>
                        <td className="p-6">
                          <span className={`font-semibold ${getROIColor(service.roi)}`}>
                            {service.roi}
                          </span>
                        </td>
                        <td className="p-6">
                          <span className={`font-semibold ${getSetupTimeColor(service.setupTime)}`}>
                            {service.setupTime}
                          </span>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <button className="text-purple-400 hover:text-purple-300 transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our team for personalized pricing, custom quotes, and expert consultation 
                on which services are right for your business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Request Custom Quote</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Select Service Category</option>
                    {SERVICE_CATEGORIES_2030.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Tell us about your project requirements and budget..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Custom Quote
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-300">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MailIcon className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Address</p>
                        <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Proven ROI with documented results</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Flexible payment options available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Custom solutions tailored to your needs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 support and maintenance</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                  {getCategoryIcon(selectedService.category)}
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{selectedService.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{selectedService.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subcategory:</span>
                      <span className="text-white">{selectedService.subcategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">${selectedService.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-green-400">{selectedService.marketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Setup Time:</span>
                      <span className="text-blue-400">{selectedService.setupTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">AI Score:</span>
                      <span className="text-purple-400 font-semibold">{selectedService.aiScore}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating:</span>
                      <span className="text-white">{selectedService.rating}/5 ({selectedService.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {selectedService.tags.slice(0, 5).map((tag, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 mt-6">ROI & Benefits</h3>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{selectedService.roi}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Competitors</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.competitors.map((competitor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-sm text-red-300"
                    >
                      {competitor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Quote
                </a>
                <a
                  href={`tel:${selectedService.contactInfo.phone}`}
                  className="flex-1 border-2 border-white/30 text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-white/10 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}