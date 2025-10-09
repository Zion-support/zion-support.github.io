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
  Mail,
  DollarSign,
  Award,
  Target,
  BarChart
} from 'lucide-react';
import { getServicesByCategory, Service } from '../data/servicesData';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const MicroSaasCard: React.FC<{ service: Service; index: number }> = memo(({ service, index }) => (
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
        {service.features.slice(0, 3).map((feature, idx) => (
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

MicroSaasCard.displayName = 'MicroSaasCard';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const microSaasServices = getServicesByCategory('micro-saas');

  useEffect(() => {
    setIsLoaded(true);
    setFilteredServices(microSaasServices);
  }, []);

  useEffect(() => {
    let filtered = microSaasServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.subcategory === selectedCategory);
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
  }, [searchTerm, selectedCategory, sortBy, microSaasServices]);

  const categories = [
    { id: 'all', name: 'All Micro SAAS', count: microSaasServices.length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.subcategory === 'productivity').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.subcategory === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.subcategory === 'analytics').length },
    { id: 'content-creation', name: 'Content Creation', count: microSaasServices.filter(s => s.subcategory === 'content-creation').length },
    { id: 'customer-service', name: 'Customer Service', count: microSaasServices.filter(s => s.subcategory === 'customer-service').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.subcategory === 'finance').length },
    { id: 'seo', name: 'SEO', count: microSaasServices.filter(s => s.subcategory === 'seo').length }
  ];

  const featuredServices = microSaasServices.filter(service => service.featured);
  const popularServices = microSaasServices.filter(service => service.popular);
  const newServices = microSaasServices.filter(service => service.new);

  const benefits = [
    'Affordable pricing starting from $9/month',
    'No long-term contracts required',
    '14-day free trial on all services',
    '24/7 customer support',
    'Regular updates and new features',
    'Easy integration with existing tools',
    'White-label options available',
    'API access for custom integrations'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 9,
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: ['Basic features', 'Email support', 'Standard templates', '1 user account']
    },
    {
      name: 'Professional',
      price: 29,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: ['Advanced features', 'Priority support', 'Custom templates', '5 user accounts', 'API access']
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'For large organizations',
      features: ['All features', '24/7 support', 'White-label', 'Unlimited users', 'Custom integrations', 'SLA guarantee']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">💻</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our collection of 50+ micro SAAS applications designed to solve specific business problems. 
            From AI-powered project management to intelligent content generation, we provide affordable, 
            easy-to-use tools that deliver immediate value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
              <div className="text-sm text-gray-300">Micro SAAS Apps</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">$9</div>
              <div className="text-sm text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">14</div>
              <div className="text-sm text-gray-300">Day Free Trial</div>
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
            Featured Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service, index) => (
              <MicroSaasCard key={service.id} service={service} index={index} />
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
                  placeholder="Search micro SAAS solutions..."
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
              Showing {filteredServices.length} of {microSaasServices.length} micro SAAS solutions
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <MicroSaasCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No solutions found</h3>
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

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card p-8 relative ${index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    ${tier.price}<span className="text-lg text-gray-400">/{tier.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  index === 1 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who have already revolutionized their operations with our micro SAAS solutions. 
            Start your free trial today and see the difference AI can make.
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

export default MicroSaasPage;