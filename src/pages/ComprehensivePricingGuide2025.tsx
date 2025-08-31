import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  Award,
  Globe2,
  CpuIcon,
  DatabaseIcon,
  ShieldIcon,
  ZapIcon,
  BrainIcon,
  CloudIcon,
  LeafIcon,
  HeartIcon,
  DollarSignIcon,
  FactoryIcon,
  Filter,
  SortAsc,
  SortDesc,
  Download,
  Share2
} from 'lucide-react';
import newInnovativeServices2025 from '../data/newInnovativeServices2025';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = newInnovativeServices2025.flatMap(category => 
    category.items.map(service => ({
      ...service,
      categoryName: category.name,
      categorySlug: category.slug
    }))
  );

  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'low' && parseFloat(service.price.replace('$', '').replace(',', '')) < 1000) ||
      (priceRange === 'medium' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 1000 && parseFloat(service.price.replace('$', '').replace(',', '')) < 3000) ||
      (priceRange === 'high' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 3000);
    const searchMatch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let aValue: any, bValue: any;
    
    switch (sortBy) {
      case 'name':
        aValue = a.title;
        bValue = b.title;
        break;
      case 'price':
        aValue = parseFloat(a.price.replace('$', '').replace(',', ''));
        bValue = parseFloat(b.price.replace('$', '').replace(',', ''));
        break;
      case 'category':
        aValue = a.category;
        bValue = b.category;
        break;
      case 'roi':
        aValue = parseFloat(a.roi?.replace('%', '').replace('within', '').split(' ')[0] || '0');
        bValue = parseFloat(b.roi?.replace('%', '').replace('within', '').split(' ')[0] || '0');
        break;
      default:
        aValue = a.title;
        bValue = b.title;
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getCategoryIcon = (categoryName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI Solutions': BrainIcon,
      'Cybersecurity': ShieldIcon,
      'Cloud & DevOps': CloudIcon,
      'Data & Analytics': DatabaseIcon,
      'Sustainability': LeafIcon,
      'BioTech & Health': HeartIcon,
      'FinTech & DeFi': DollarSignIcon,
      'Manufacturing': FactoryIcon,
      'Micro SaaS': Code,
      'IT Services': Server,
      'Quantum Computing': Atom,
      'Blockchain & Web3': Coins,
      'IoT & Edge': Wifi,
      'Green Tech': Leaf,
      'Space Tech': Satellite,
      'Metaverse & AR/VR': Gamepad2,
      'Autonomous Systems': Bot,
      'Digital Transformation': ZapIcon,
      'Enterprise Solutions': Building2
    };
    return iconMap[categoryName] || Globe;
  };

  const getCategoryColor = (categoryName: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Solutions': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Data & Analytics': 'from-indigo-500 to-purple-500',
      'Sustainability': 'from-green-500 to-emerald-500',
      'BioTech & Health': 'from-pink-500 to-rose-500',
      'FinTech & DeFi': 'from-yellow-500 to-orange-500',
      'Manufacturing': 'from-gray-500 to-slate-500',
      'Micro SaaS': 'from-violet-500 to-purple-500',
      'IT Services': 'from-sky-500 to-blue-500',
      'Quantum Computing': 'from-cyan-500 to-blue-500',
      'Blockchain & Web3': 'from-orange-500 to-red-500',
      'IoT & Edge': 'from-emerald-500 to-green-500',
      'Green Tech': 'from-green-400 to-emerald-400',
      'Space Tech': 'from-indigo-400 to-purple-400',
      'Metaverse & AR/VR': 'from-pink-400 to-purple-400',
      'Autonomous Systems': 'from-blue-400 to-indigo-400',
      'Digital Transformation': 'from-yellow-400 to-orange-400',
      'Enterprise Solutions': 'from-slate-400 to-gray-400'
    };
    return colorMap[categoryName] || 'from-gray-500 to-slate-500';
  };

  const totalMarketValue = allServices.reduce((sum, service) => {
    const marketSize = service.marketSize ? parseFloat(service.marketSize.replace('$', '').replace('B', '')) : 0;
    return sum + marketSize;
  }, 0);

  const averageROI = allServices.reduce((sum, service) => {
    const roi = service.roi ? parseFloat(service.roi.replace('%', '').replace('within', '').split(' ')[0]) : 0;
    return sum + roi;
  }, 0) / allServices.filter(service => service.roi).length;

  return (
    <>
      <Helmet>
        <title>Comprehensive Pricing Guide 2025 - Zion Tech Group</title>
        <meta name="description" content="Complete pricing guide for all our innovative services. Compare prices, ROI, and benefits to find the perfect solution for your business." />
        <meta name="keywords" content="pricing guide, service costs, ROI comparison, business solutions, technology pricing, AI services pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Comprehensive Pricing Guide 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Compare all our innovative services, pricing, and ROI to make informed decisions for your business transformation.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{allServices.length}</p>
                  <p className="text-sm text-gray-400">Total Services</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">${totalMarketValue.toFixed(1)}B</p>
                  <p className="text-sm text-gray-400">Total Market Value</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{averageROI.toFixed(0)}%</p>
                  <p className="text-sm text-gray-400">Average ROI</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-sm text-gray-400">Service Categories</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="https://ziontechgroup.com/new-innovative-services-2025"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === 'all'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    All Categories
                  </button>
                  {Array.from(new Set(allServices.map(service => service.category))).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under $1,000/month</option>
                    <option value="medium">$1,000 - $3,000/month</option>
                    <option value="high">Over $3,000/month</option>
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="category">Category</option>
                    <option value="roi">ROI</option>
                  </select>
                </div>

                {/* Sort Order */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort Order</label>
                  <div className="flex">
                    <button
                      onClick={() => setSortOrder('asc')}
                      className={`flex-1 px-4 py-3 rounded-l-lg border border-white/30 transition-all duration-300 ${
                        sortOrder === 'asc'
                          ? 'bg-cyan-500 text-white border-cyan-500'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      <SortAsc className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => setSortOrder('desc')}
                      className={`flex-1 px-4 py-3 rounded-r-lg border border-white/30 border-l-0 transition-all duration-300 ${
                        sortOrder === 'desc'
                          ? 'bg-cyan-500 text-white border-cyan-500'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      <SortDesc className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Pricing Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {sortedServices.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Service</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Category</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Price</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">ROI</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Implementation</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Market Size</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedServices.map((service, index) => (
                      <motion.tr
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center`}>
                              {React.createElement(getCategoryIcon(service.category), { className: 'w-5 h-5 text-white' })}
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">{service.title}</h4>
                              <p className="text-sm text-gray-400 line-clamp-2">{service.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                            {service.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-center">
                            <p className="text-xl font-bold text-white">{service.price}</p>
                            <p className="text-sm text-gray-400">per {service.billing}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {service.roi ? (
                            <div className="text-center">
                              <p className="text-lg font-semibold text-green-400">{service.roi}</p>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {service.implementationTime ? (
                            <div className="text-center">
                              <p className="text-sm text-white">{service.implementationTime}</p>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {service.marketSize ? (
                            <div className="text-center">
                              <p className="text-sm text-blue-300">{service.marketSize}</p>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <a
                            href={service.href}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                          >
                            {service.ctaLabel}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Comparison Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Pricing Comparison by Category
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newInnovativeServices2025.map((category, index) => {
                const avgPrice = category.items.reduce((sum, item) => {
                  return sum + parseFloat(item.price.replace('$', '').replace(',', ''));
                }, 0) / category.items.length;
                
                const avgROI = category.items.reduce((sum, item) => {
                  const roi = item.roi ? parseFloat(item.roi.replace('%', '').replace('within', '').split(' ')[0]) : 0;
                  return sum + roi;
                }, 0) / category.items.filter(item => item.roi).length;

                return (
                  <motion.div
                    key={category.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(category.items[0]?.category || 'AI Solutions')} flex items-center justify-center mx-auto mb-4`}>
                      {React.createElement(getCategoryIcon(category.items[0]?.category || 'AI Solutions'), { className: 'w-8 h-8 text-white' })}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Services:</span>
                        <span className="text-white font-medium">{category.items.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Avg Price:</span>
                        <span className="text-white font-medium">${avgPrice.toFixed(0)}/mo</span>
                      </div>
                      {!isNaN(avgROI) && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Avg ROI:</span>
                          <span className="text-green-400 font-medium">{avgROI.toFixed(0)}%</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a personalized consultation and custom pricing tailored to your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email for Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Competitive Pricing</h4>
                      <p className="text-gray-400 text-sm">Market-leading prices with flexible payment options</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Proven ROI</h4>
                      <p className="text-gray-400 text-sm">300-800% return on investment within 6-18 months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Fast Implementation</h4>
                      <p className="text-gray-400 text-sm">Deploy solutions in 1-12 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">24/7 Support</h4>
                      <p className="text-gray-400 text-sm">Round-the-clock technical assistance and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                    <span>
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                    <a 
                      href="https://ziontechgroup.com" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a
                    href="https://ziontechgroup.com/new-innovative-services-2025"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    View All Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}