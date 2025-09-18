import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Atom, 
  Building, 
  BookOpen, 
  Search, 
  Filter,
  Star,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Globe,
  Rocket,
  Leaf,
  Code,
  BarChart3,
  Heart,
  Lock,
  Cpu,
  Database,
  Network,
  Palette,
  Camera,
  Music,
  Video,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { innovativeMicroSaasServices2032 } from '../data/innovativeMicroSaasServices2032';

const InnovativeServicesShowcase2032: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-600 to-purple-700' },
    { id: 'ai-services', name: 'AI Services', icon: Brain, color: 'from-purple-600 to-pink-700' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Code, color: 'from-green-600 to-blue-700' },
    { id: 'it-services', name: 'IT Services', icon: Cpu, color: 'from-blue-600 to-cyan-700' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, color: 'from-orange-600 to-red-700' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-600 to-purple-700' },
    { id: 'blockchain-web3', name: 'Blockchain & Web3', icon: Shield, color: 'from-green-600 to-emerald-700' },
    { id: 'space-tech', name: 'Space Tech', icon: Rocket, color: 'from-indigo-600 to-purple-700' },
    { id: 'fintech', name: 'FinTech', icon: DollarSign, color: 'from-green-600 to-blue-700' },
    { id: 'healthtech', name: 'HealthTech', icon: Heart, color: 'from-red-600 to-pink-700' }
  ];

  const filteredServices = innovativeMicroSaasServices2032.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.pricing.monthly.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.monthly.replace(/[^0-9.]/g, ''));
      case 'innovation':
        return a.innovationLevel.localeCompare(b.innovationLevel);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovative Micro SAAS Services 2032
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI-powered solutions, emerging technologies, and specialized industry services designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>50+ Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>Latest Technology</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation</option>
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Service Header */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{service.pricing.monthly}</p>
                      <p className="text-sm text-gray-600">Market: {service.pricing.marketPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Setup: {service.pricing.setup}</p>
                      <p className="text-sm text-green-600 font-medium">{service.trialDays} days trial</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-sm text-blue-600 font-medium">+{service.features.length - 3} more features</p>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        +{service.technology.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">ROI</p>
                      <p className="text-gray-600 line-clamp-1">{service.roi}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">Market Size</p>
                      <p className="text-gray-600">{service.marketSize}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Service Sidebar (List View) */}
              {viewMode === 'list' && (
                <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
                  <div className="space-y-4">
                    {/* Innovation Level */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Innovation Level</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.innovationLevel === 'Revolutionary' ? 'bg-purple-100 text-purple-800' :
                        service.innovationLevel === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {service.innovationLevel}
                      </span>
                    </div>

                    {/* Setup Time */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Setup Time</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {service.setupTime}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Target Audience</h4>
                      <p className="text-sm text-gray-600 line-clamp-3">{service.targetAudience}</p>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                      <div className="space-y-1">
                        {service.useCases.slice(0, 3).map((useCase, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Target className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${service.contactInfo.mobile}`} className="hover:text-blue-600">
                            {service.contactInfo.mobile}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-blue-600">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{service.contactInfo.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2032;
