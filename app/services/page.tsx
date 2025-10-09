'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Play,
  Download,
  Phone,
  Mail
} from 'lucide-react';
import { allServices, getServicesByCategory, getFeaturedServices, getPopularServices, getNewServices, Service } from '../data/servicesData';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const ServiceCard: React.FC<{ service: Service; index: number }> = memo(({ service, index }) => (
  <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group">
    <div className="flex items-start justify-between mb-4">
      <div className="text-4xl mb-3">{service.icon}</div>
      <div className="flex space-x-2">
        {service.popular && (
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            Popular
          </span>
        )}
        {service.new && (
          <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        )}
        {service.featured && (
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
      {service.name}
    </h3>
    
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
      {service.description}
    </p>
    
    <div className="mb-4">
      <div className="text-2xl font-bold text-cyan-400 mb-1">
        Starting at ${service.pricing.starting}/{service.pricing.period}
      </div>
      <div className="text-sm text-gray-400">
        Market range: ${service.marketPrice.min} - ${service.marketPrice.max}/{service.marketPrice.period}
      </div>
    </div>
    
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
      <ul className="text-xs text-gray-300 space-y-1">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="flex space-x-2 mb-4">
      <Link
        to={`/${service.id}`}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
      >
        Learn More
      </Link>
      {service.demoUrl && (
        <a
          href={service.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600 transition-colors"
          title="View Demo"
        >
          <Play className="w-4 h-4" />
        </a>
      )}
    </div>
    
    <div className="text-xs text-gray-400">
      <div className="flex items-center justify-between">
        <span>Support: {service.supportLevel}</span>
        <span className="flex items-center">
          <Users className="w-3 h-3 mr-1" />
          {service.targetAudience.length} audiences
        </span>
      </div>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let filtered = allServices;

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
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'new':
        filtered = filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', count: getServicesByCategory('micro-saas').length },
    { id: 'ai-services', name: 'AI Services', count: getServicesByCategory('ai-services').length },
    { id: 'it-services', name: 'IT Services', count: getServicesByCategory('it-services').length },
    { id: 'emerging-tech', name: 'Emerging Tech', count: getServicesByCategory('emerging-tech').length }
  ];

  const featuredServices = getFeaturedServices();
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive AI, IT, and Emerging Technology Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our extensive portfolio of cutting-edge services designed to transform your business. 
            From micro SAAS solutions to enterprise AI platforms, we provide the tools and expertise you need to succeed.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Services</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">50+</div>
              <div className="text-sm text-gray-300">Micro SAAS</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-16">
          <div className="cyber-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="new">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-400">
              Showing {filteredServices.length} of {allServices.length} services
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('popular');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how our services can help you achieve your goals. 
            Our experts are ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ServicesPage;