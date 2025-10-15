'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { services, getServicesByCategory, getPricingTiers } from '../data/services';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  CodeBracketIcon,
  CircleStackIcon,
  SignalIcon,
  CogIcon,
  ChartBarIcon,
  EyeIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  StarIcon,
  FireIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, count: services.length },
    { id: 'ai', name: 'AI Services', icon: CpuChipIcon, count: getServicesByCategory('ai').length },
    { id: 'it', name: 'IT Services', icon: CodeBracketIcon, count: getServicesByCategory('it').length },
    { id: 'cloud', name: 'Cloud Solutions', icon: CloudIcon, count: getServicesByCategory('cloud').length },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon, count: getServicesByCategory('security').length },
    { id: 'blockchain', name: 'Blockchain', icon: CircleStackIcon, count: getServicesByCategory('blockchain').length },
    { id: 'iot', name: 'IoT Solutions', icon: SignalIcon, count: getServicesByCategory('iot').length },
    { id: 'devops', name: 'DevOps', icon: CogIcon, count: getServicesByCategory('devops').length },
    { id: 'data', name: 'Data Analytics', icon: ChartBarIcon, count: getServicesByCategory('data').length }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricing.basic - b.pricing.basic;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || SparklesIcon;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'beta':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'coming-soon':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Our Services - AI & IT Solutions | Zion Tech Group"
        description="Explore our comprehensive range of AI services, IT solutions, cloud infrastructure, and enterprise software. Professional services with transparent pricing."
        keywords="AI services, IT solutions, cloud infrastructure, software development, pricing, enterprise solutions"
      />
      
      {/* Enhanced Animated Background */}
      <div className="futuristic-bg"></div>
      <div className="cyber-grid-enhanced"></div>
      <div className="quantum-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="scan-lines"></div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="Our Services">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of AI-powered solutions, IT services, and enterprise software. 
              All services come with transparent pricing, detailed documentation, and dedicated support.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-card px-6 py-3 text-cyan-400">
                <CheckCircleIcon className="h-5 w-5 inline mr-2" />
                {services.length}+ Services Available
              </div>
              <div className="glass-card px-6 py-3 text-green-400">
                <ClockIcon className="h-5 w-5 inline mr-2" />
                24/7 Support
              </div>
              <div className="glass-card px-6 py-3 text-purple-400">
                <StarIcon className="h-5 w-5 inline mr-2" />
                Enterprise Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                    <span className="ml-2 px-2 py-1 bg-gray-700 text-xs rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <div 
                  key={service.id}
                  className={`glass-card p-8 card-hover transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} p-4 icon-bounce`}>
                      <CategoryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(service.status)}`}>
                      {service.status.toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-cyan-400">
                        <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                        <span className="text-3xl font-bold">${service.pricing.basic}</span>
                        <span className="text-sm ml-1">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Starting from</div>
                        <div className="text-xs text-gray-500">Basic Plan</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-gray-800/50 p-2 rounded">
                        <div className="text-xs text-gray-400">Basic</div>
                        <div className="text-sm font-semibold">${service.pricing.basic}</div>
                      </div>
                      <div className="bg-cyan-500/20 border border-cyan-400/30 p-2 rounded">
                        <div className="text-xs text-cyan-400">Pro</div>
                        <div className="text-sm font-semibold text-cyan-400">${service.pricing.pro}</div>
                      </div>
                      <div className="bg-purple-500/20 border border-purple-400/30 p-2 rounded">
                        <div className="text-xs text-purple-400">Enterprise</div>
                        <div className="text-sm font-semibold text-purple-400">${service.pricing.enterprise}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 4 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
                          +{service.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link 
                      to={service.route}
                      className="flex-1 btn-neon text-center py-3 text-sm font-semibold"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to={service.demoUrl || '#'}
                      className="px-4 py-3 glass-card text-cyan-400 hover:text-white transition-colors border border-cyan-400/30"
                    >
                      Demo
                    </Link>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Launched: {new Date(service.launchDate).toLocaleDateString()}</span>
                      <span>Updated: {new Date(service.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <div className="glass-card p-12 max-w-md mx-auto">
                <MagnifyingGlassIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="btn-neon px-6 py-3"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't see exactly what you need? Our team can create custom AI and IT solutions 
              tailored to your specific business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Discuss Your Project
                <RocketLaunchIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/pricing" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                View Pricing
                <CurrencyDollarIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;