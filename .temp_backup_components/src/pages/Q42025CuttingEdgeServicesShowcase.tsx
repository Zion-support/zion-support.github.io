import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Cpu,
  Network,
  Lock,
  BarChart3,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Award
} from 'lucide-react';
import { q42025CuttingEdgeServices, Q42025CuttingEdgeService } from '../data/q4-2025-cutting-edge-services';

export default function Q42025CuttingEdgeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = ['all', ...Array.from(new Set(q42025CuttingEdgeServices.map(service => service.category)))];

  const filteredServices = useMemo(() => {
    let filtered = q42025CuttingEdgeServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });

    // Sort services
    switch (sortBy) {
      case 'price':
        filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'innovation':
        // Sort by category complexity
        const categoryOrder = { 'Quantum Computing': 5, 'AI & Automation': 4, 'Cybersecurity': 3, 'Blockchain & Finance': 2, 'IoT & Edge Computing': 1 };
        filtered.sort((a, b) => (categoryOrder[b.category] || 0) - (categoryOrder[a.category] || 0));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing': return Cpu;
      case 'AI & Automation': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Blockchain & Finance': return Globe;
      case 'IoT & Edge Computing': return Network;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Quantum Computing': return 'text-purple-400';
      case 'AI & Automation': return 'text-cyan-400';
      case 'Cybersecurity': return 'text-red-400';
      case 'Blockchain & Finance': return 'text-green-400';
      case 'IoT & Edge Computing': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getPricingColor = (price: number) => {
    if (price >= 25000) return 'text-red-400';
    if (price >= 15000) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Q4 2025 Cutting-Edge Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our revolutionary micro SAAS services, AI solutions, and cutting-edge technology platforms. 
              Transform your business with next-generation solutions designed for the future of innovation.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center text-cyan-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center text-green-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            {/* Search and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = getCategoryIcon(category);
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const Icon = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getCategoryColor(service.category).replace('text-', 'bg-').replace('-400', '-400/20')}`}>
                        <Icon className={`w-6 h-6 ${getCategoryColor(service.category)}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <span className={`text-sm ${getCategoryColor(service.category)}`}>{service.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-2">Pricing</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400">Monthly:</span>
                        <div className={`${getPricingColor(service.pricing.monthly)} font-medium`}>
                          ${service.pricing.monthly.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400">Yearly:</span>
                        <div className="text-green-400 font-medium">
                          ${service.pricing.yearly.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400">Enterprise:</span>
                        <div className="text-cyan-400 font-medium">
                          ${service.pricing.enterprise.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Market Trend */}
                  <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-400">Market Trend:</span>
                      <span className="text-green-400 font-medium">{service.marketTrend}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                      Get Quote
                    </button>
                    <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                      Learn More
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <a 
                        href={`mailto:${service.contactInfo.email}`}
                        className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our cutting-edge services are designed to give you a competitive edge in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}