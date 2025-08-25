import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Users,
  TrendingUp,
  Zap,
  Globe,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Clock,
  Sparkles,
  Eye,
  Heart,
  Bot,
  Microchip,
  Globe2,
  BarChart,
  ShieldCheck,
  Zap as ZapIcon,
  Search,
  Filter,
  Grid3X3,
  List,
  Scale,
  PenTool,
  Cloud,
  Box,
  RefreshCw,
  Key
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/advancedInnovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

const AdvancedInnovativeServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [...ADVANCED_INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Financial Services': Brain,
      'Cybersecurity & Quantum': Shield,
      'AI & Healthcare': Heart,
      'AI & Supply Chain': Network,
      'Quantum & AI': Microchip,
      'AI & Legal Services': Scale,
      'AI & Energy': Zap,
      'AI & Content Creation': PenTool,
      'Quantum & Cybersecurity': Lock,
      'AI & HR': Users,
      'Infrastructure & Edge Computing': Cpu,
      'Cloud & Infrastructure': Cloud,
      'DevOps & Security': Code,
      'Data Management & Privacy': Database,
      'API Security & Management': Shield,
      'Container Security & Kubernetes': Box,
      'Network Management & Monitoring': BarChart3,
      'Business Continuity & Disaster Recovery': RefreshCw,
      'Identity & Access Management': Key
    };
    return iconMap[category] || Rocket;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Financial Services': 'from-green-500 to-emerald-600',
      'Cybersecurity & Quantum': 'from-red-500 to-pink-600',
      'AI & Healthcare': 'from-blue-500 to-cyan-600',
      'AI & Supply Chain': 'from-purple-500 to-indigo-600',
      'Quantum & AI': 'from-yellow-500 to-orange-600',
      'AI & Legal Services': 'from-indigo-500 to-purple-600',
      'AI & Energy': 'from-yellow-500 to-green-600',
      'AI & Content Creation': 'from-pink-500 to-red-600',
      'Quantum & Cybersecurity': 'from-blue-500 to-purple-600',
      'AI & HR': 'from-green-500 to-blue-600',
      'Infrastructure & Edge Computing': 'from-gray-500 to-blue-600',
      'Cloud & Infrastructure': 'from-blue-500 to-indigo-600',
      'DevOps & Security': 'from-orange-500 to-red-600',
      'Data Management & Privacy': 'from-purple-500 to-pink-600',
      'API Security & Management': 'from-red-500 to-orange-600',
      'Container Security & Kubernetes': 'from-blue-500 to-green-600',
      'Network Management & Monitoring': 'from-indigo-500 to-blue-600',
      'Business Continuity & Disaster Recovery': 'from-green-500 to-teal-600',
      'Identity & Access Management': 'from-purple-500 to-indigo-600'
    };
    return colorMap[category] || 'from-gray-500 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Innovative
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge technology solutions that combine AI, quantum computing, and specialized IT services 
              to transform your business operations and drive innovation across all industries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-400">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => {
                const CategoryIcon = getCategoryIcon(service.category);
                const categoryColor = getCategoryColor(service.category);
                
                return (
                  <div
                    key={service.id}
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                      viewMode === 'list' ? 'p-6' : 'p-6'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-r ${categoryColor} rounded-lg`}>
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">/{service.pricingModel}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-gray-500 mt-2">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    {service.technicalSpecs && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-blue-400" />
                          Technical Specifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technicalSpecs.map((spec, specIndex) => (
                            <span
                              key={specIndex}
                              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Compliance & SLA */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        {service.complianceStandards && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Compliance</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.complianceStandards.slice(0, 2).map((standard, standardIndex) => (
                                <span
                                  key={standardIndex}
                                  className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30"
                                >
                                  {standard}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {service.sla && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-300 mb-2">SLA</h4>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                              {service.sla}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Price & Delivery */}
                    <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Market Price:</span>
                          <div className="text-cyan-400 font-medium">{service.marketPrice}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Delivery:</span>
                          <div className="text-green-400 font-medium">{service.estimatedDelivery}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={service.websiteUrl}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Support Level</div>
                        <div className="text-sm font-medium text-cyan-400 capitalize">{service.supportLevel}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Contact our team of experts to discuss how our advanced innovative services can drive your business forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-8 h-8 text-cyan-400" />
              <div className="text-left">
                <div className="text-white font-medium">Phone</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-8 h-8 text-purple-400" />
              <div className="text-left">
                <div className="text-white font-medium">Address</div>
                <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              Visit Our Website
              <Globe className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedInnovativeServices;