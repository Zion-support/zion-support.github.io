
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle, Clock, Star, Search, Rocket, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function ServicesPage() {
  const [isVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const CheckCircleIcon = CheckCircle;
  const ClockIcon = Clock;
  const StarIcon = Star;
  const MagnifyingGlassIcon = Search;
  const RocketLaunchIcon = Rocket;
  const CurrencyDollarIcon = DollarSign;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🔧', count: 35 },
    { id: 'ai', name: 'AI Solutions', icon: '🤖', count: 15 },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️', count: 12 },
    { id: 'data', name: 'Data Analytics', icon: '📊', count: 8 }
  ];

  const services = [
    { 
      id: 1, 
      name: 'AI Solutions', 
      category: 'ai', 
      status: 'active', 
      price: 99,
      description: 'Advanced AI solutions for modern businesses',
      icon: '🤖',
      count: 15,
      gradient: 'from-blue-500 to-purple-600',
      features: ['Machine Learning', 'Natural Language Processing'],
      technologies: ['Python', 'TensorFlow', 'PyTorch'],
      pricing: { basic: 99, pro: 199, enterprise: 499 },
      route: '/ai-solutions',
      demoUrl: '/demo/ai-solutions',
      launchDate: '2024-01-01',
      lastUpdated: '2024-01-15'
    },
    { 
      id: 2, 
      name: 'Cloud Services', 
      category: 'cloud', 
      status: 'active', 
      price: 149,
      description: 'Scalable cloud infrastructure solutions',
      icon: '☁️',
      count: 12,
      gradient: 'from-green-500 to-blue-600',
      features: ['Auto-scaling', 'Load Balancing'],
      technologies: ['AWS', 'Azure', 'Docker'],
      pricing: { basic: 149, pro: 299, enterprise: 599 },
      route: '/cloud-solutions',
      demoUrl: '/demo/cloud-solutions',
      launchDate: '2024-01-01',
      lastUpdated: '2024-01-15'
    },
    { 
      id: 3, 
      name: 'Data Analytics', 
      category: 'data', 
      status: 'active', 
      price: 199,
      description: 'Comprehensive data analytics platform',
      icon: '📊',
      count: 8,
      gradient: 'from-purple-500 to-pink-600',
      features: ['Real-time Analytics', 'Data Visualization'],
      technologies: ['Python', 'R', 'Tableau'],
      pricing: { basic: 199, pro: 399, enterprise: 799 },
      route: '/data-analytics',
      demoUrl: '/demo/data-analytics',
      launchDate: '2024-01-01',
      lastUpdated: '2024-01-15'
    }
  ];


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'inactive': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const sortedServices = services
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional services solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional services solutions for modern businesses.
          </p>
        </div>

        {/* Service Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <CheckCircleIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{services.length}+</h3>
            <p className="text-gray-300">Services Available</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <ClockIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-300">Support Available</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <StarIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {getCategoryIcon(category)} {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedServices.map((service) => (
            <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  ${service.price}/month
                </div>
                <div className="text-sm text-gray-400">Starting price</div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-300 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We offer custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
            >
              Get Custom Quote
              <Rocket className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link 
              to="/pricing" 
              className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
            >
              View Pricing
              <Currency className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>

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
                    <span className="text-lg mr-2">{category.icon}</span>
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
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} p-4 icon-bounce flex items-center justify-center`}>
                      <span className="text-2xl">{service.icon}</span>
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
}

