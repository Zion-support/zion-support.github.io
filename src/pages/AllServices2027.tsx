import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Zap, 
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  ChevronRight,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Brain as BrainIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '../data/innovativeMicroSaasServices2027';

const AllServices2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'AI Services', 'Cybersecurity', 'Quantum Technology', 'IT Services', 'Blockchain Services', 'IoT Services'];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2027;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <BrainIcon className="w-6 h-6" />;
      case 'Cybersecurity':
        return <ShieldIcon className="w-6 h-6" />;
      case 'Quantum Technology':
        return <CpuIcon className="w-6 h-6" />;
      case 'IT Services':
        return <DatabaseIcon className="w-6 h-6" />;
      case 'Blockchain Services':
        return <GlobeIcon className="w-6 h-6" />;
      case 'IoT Services':
        return <ZapIcon className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Quantum Technology':
        return 'from-blue-500 to-cyan-500';
      case 'IT Services':
        return 'from-green-500 to-emerald-500';
      case 'Blockchain Services':
        return 'from-yellow-500 to-orange-500';
      case 'IoT Services':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'AI Services':
        return 'Artificial Intelligence solutions that transform business operations, automate processes, and provide intelligent insights.';
      case 'Cybersecurity':
        return 'Advanced security solutions protecting against evolving cyber threats with AI-powered detection and response.';
      case 'Quantum Technology':
        return 'Next-generation quantum computing and cryptography solutions for solving complex computational problems.';
      case 'IT Services':
        return 'Comprehensive IT infrastructure, DevOps, and digital transformation services for modern businesses.';
      case 'Blockchain Services':
        return 'Blockchain-based solutions for supply chain transparency, smart contracts, and decentralized applications.';
      case 'IoT Services':
        return 'Internet of Things platforms for connected devices, edge computing, and real-time data processing.';
      default:
        return 'Cutting-edge technology solutions across all categories.';
    }
  };

  const categoryStats = useMemo(() => {
    const stats: Record<string, { count: number; avgPrice: number; avgRating: number; avgAiScore: number }> = {};
    
    INNOVATIVE_MICRO_SAAS_SERVICES_2027.forEach(service => {
      if (!stats[service.category]) {
        stats[service.category] = { count: 0, avgPrice: 0, avgRating: 0, avgAiScore: 0 };
      }
      stats[service.category].count++;
      stats[service.category].avgPrice += service.price;
      stats[service.category].avgRating += service.rating;
      stats[service.category].avgAiScore += service.aiScore;
    });

    Object.keys(stats).forEach(category => {
      const stat = stats[category];
      stat.avgPrice = Math.round(stat.avgPrice / stat.count);
      stat.avgRating = Math.round((stat.avgRating / stat.count) * 10) / 10;
      stat.avgAiScore = Math.round(stat.avgAiScore / stat.count);
    });

    return stats;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              All Services 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's complete portfolio of innovative micro SAAS services. 
              From AI-powered solutions to quantum computing, we have everything you need to transform your business.
            </p>
            
            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Get Started Today</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-gray-400 text-lg">
              Explore our comprehensive range of technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat !== 'All').map((category, index) => {
              const stats = categoryStats[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center mb-4`}>
                    {getCategoryIcon(category)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{category}</h3>
                  <p className="text-gray-300 text-sm mb-6">{getCategoryDescription(category)}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">{stats?.count || 0}</div>
                      <div className="text-gray-400 text-xs">Services</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">${stats?.avgPrice || 0}</div>
                      <div className="text-gray-400 text-xs">Avg Price</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{stats?.avgRating || 0}</div>
                      <div className="text-gray-400 text-xs">Avg Rating</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">Click to view services</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-400">
              {selectedCategory !== 'All' ? `Showing ${selectedCategory} services` : 'All services across all categories'}
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  {/* Service Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        {getCategoryIcon(service.category)}
                        <span>{service.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* AI Score */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">AI Score: {service.aiScore}%</span>
                      </div>
                      <span className="text-green-400 text-sm font-medium">{service.availability}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-white">${service.price}</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <p className="text-gray-400 text-sm">Market: {service.marketPrice}</p>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/10 text-gray-300"
                          >
                            <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Link
                        to={service.website}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Learn More</span>
                      </Link>
                      <a
                        href={`mailto:${service.contactEmail}`}
                        className="bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Image */}
                    <div className="lg:w-64 lg:h-48 w-full h-48 overflow-hidden rounded-lg">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span>{service.category}</span>
                            </div>
                            <span className="text-green-400 text-sm font-medium">{service.availability}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300">{service.description}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">{service.rating}</span>
                            <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Brain className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 text-sm font-medium">AI Score: {service.aiScore}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white">${service.price}</div>
                            <div className="text-gray-400 text-sm">/month</div>
                            <div className="text-gray-400 text-xs">Market: {service.marketPrice}</div>
                          </div>
                        </div>
                      </div>

                      {/* Features and Benefits */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-gray-300 font-medium mb-3">Key Features:</p>
                          <ul className="space-y-2">
                            {service.features.slice(0, 5).map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium mb-3">Key Benefits:</p>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 5).map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <Link
                          to={service.website}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Learn More & Get Started</span>
                        </Link>
                        <a
                          href={`mailto:${service.contactEmail}`}
                          className="bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Contact Sales</span>
                        </a>
                        <a
                          href="tel:+13024640950"
                          className="bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging Zion Tech Group's innovative solutions. 
              Get started today and experience the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-500 text-cyan-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Visit our website for more information:</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-2"
              >
                <span>ziontechgroup.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AllServices2027;