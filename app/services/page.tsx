import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { services, getServicesByCategory, Service } from '../data/services';
import { Search, Filter, Star, Zap, Shield, Cpu, Globe, Lock, Atom, Link as LinkIcon } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'popularity'>('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Services', icon: <Cpu className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'it', name: 'IT Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <LinkIcon className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Lock className="w-5 h-5" /> },
    { id: 'iot', name: 'IoT & Edge', icon: <Globe className="w-5 h-5" /> }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starting - b.pricing.starting;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popularity':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{service.icon}</div>
        <div className="flex gap-2">
          {service.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
          )}
          {service.isPopular && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" />
              POPULAR
            </span>
          )}
          {service.isEnterprise && (
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">ENTERPRISE</span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {service.shortDescription}
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            ${service.pricing.starting.toLocaleString()}
            {service.pricing.custom && '+'}
          </span>
          <span className="text-gray-400 text-sm">/{service.pricing.period}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Market Price: ${service.marketPrice.toLocaleString()}</span>
          <span className="text-green-400 font-semibold">
            Save ${service.savings.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <h4 className="text-white font-semibold text-sm">Key Features:</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              {feature}
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-cyan-400 text-xs">+{service.features.length - 3} more features</li>
          )}
        </ul>
      </div>

      <div className="space-y-2 mb-6">
        <h4 className="text-white font-semibold text-sm">Benefits:</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          {service.benefits.slice(0, 2).map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2">
        <Link
          to={service.link}
          className="flex-1 cyber-button text-center text-sm py-2"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors text-sm"
        >
          Contact
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of AI, IT, and Micro SAAS solutions designed to transform your business
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'popularity')}
                className="px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-300">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can create a tailored solution that perfectly fits your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;