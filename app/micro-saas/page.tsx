'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Star,
  Clock,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Zap,
  Brain,
  Shield,
  BarChart3,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Sparkles,
  Target,
  Mail,
  Phone,
  ExternalLink,
  Play,
  Download,
  Share2
} from 'lucide-react';
import { services, getServicesByCategory } from '../data/services';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const microSaasServices = getServicesByCategory('Micro SAAS');

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPricing = selectedPricing === 'all' || 
      (selectedPricing === 'free' && service.pricing.monthly === 0) ||
      (selectedPricing === 'under-50' && service.pricing.monthly > 0 && service.pricing.monthly < 50) ||
      (selectedPricing === 'under-100' && service.pricing.monthly >= 50 && service.pricing.monthly < 100) ||
      (selectedPricing === 'over-100' && service.pricing.monthly >= 100);
    
    return matchesSearch && matchesPricing;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.monthly - b.pricing.monthly;
      case 'price-high':
        return b.pricing.monthly - a.pricing.monthly;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.pricing.monthly - a.pricing.monthly;
    }
  });

  const formatPrice = (pricing: any) => {
    if (pricing.custom) return 'Custom Pricing';
    if (pricing.monthly === 0) return 'Free';
    return `$${pricing.monthly}/month`;
  };

  const getPricingTier = (price: number) => {
    if (price === 0) return { tier: 'Free', color: 'text-green-400', bg: 'bg-green-500/20' };
    if (price < 50) return { tier: 'Starter', color: 'text-blue-400', bg: 'bg-blue-500/20' };
    if (price < 100) return { tier: 'Professional', color: 'text-purple-400', bg: 'bg-purple-500/20' };
    return { tier: 'Enterprise', color: 'text-orange-400', bg: 'bg-orange-500/20' };
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions designed to streamline your business operations. 50+ ready-to-use applications." />
        <meta name="keywords" content="micro saas, AI tools, business automation, productivity tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-text">
              Powerful AI-driven tools for modern businesses. 50+ ready-to-use applications that transform your workflow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">Instant Setup</h3>
                <p className="text-gray-300 text-sm">Get started in minutes, not weeks</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2">Affordable</h3>
                <p className="text-gray-300 text-sm">Starting from $15/month</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-bold text-white mb-2">No Code</h3>
                <p className="text-gray-300 text-sm">Easy-to-use interfaces</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300 text-sm">Average 300% productivity gain</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS tools..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <select
                      value={selectedPricing}
                      onChange={(e) => setSelectedPricing(e.target.value)}
                      className="pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      <option value="all">All Pricing</option>
                      <option value="free">Free</option>
                      <option value="under-50">Under $50</option>
                      <option value="under-100">$50 - $100</option>
                      <option value="over-100">Over $100</option>
                    </select>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white neon-text">
                  Available Micro SAAS Tools
                </h2>
                <p className="text-gray-300 mt-2">
                  {sortedServices.length} tool{sortedServices.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => {
                const pricingTier = getPricingTier(service.pricing.monthly);
                return (
                  <div key={service.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start">
                        <div className="bg-cyan-500/20 p-4 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                          <div className="text-3xl">{service.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-block ${pricingTier.bg} ${pricingTier.color} text-xs px-2 py-1 rounded-full`}>
                              {pricingTier.tier}
                            </span>
                            <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                              {service.subcategory}
                            </span>
                          </div>
                        </div>
                      </div>
                      {service.trial.available && (
                        <div className="text-green-400 text-sm font-semibold">
                          Free Trial
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="cyber-card p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-xs font-semibold text-white">ROI</span>
                        </div>
                        <p className="text-xs text-gray-300">{service.roi.timeToValue}</p>
                      </div>
                      <div className="cyber-card p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-semibold text-white">Setup</span>
                        </div>
                        <p className="text-xs text-gray-300">{service.deployment.setupTime}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                        {formatPrice(service.pricing)}
                      </div>
                      {service.pricing.yearly > 0 && (
                        <div className="text-sm text-gray-300">
                          Save ${((service.pricing.monthly * 12) - service.pricing.yearly).toLocaleString()} annually
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="cyber-button text-center py-3 group-hover:scale-105 transition-all duration-300">
                        {service.trial.available ? 'Start Free Trial' : 'Get Started'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline" />
                      </button>
                      <button className="border border-cyan-500/30 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                    
                    {service.trial.available && (
                      <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold">Free Trial Available</span>
                        </div>
                        <p className="text-xs text-gray-300 mt-1">{service.trial.duration} trial</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">$0</div>
                <p className="text-gray-300 mb-6">Perfect for getting started</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Basic features
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Community support
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Limited usage
                  </li>
                </ul>
                <button className="w-full border border-green-500 text-green-400 font-semibold py-3 px-6 rounded-lg hover:bg-green-500/10 transition-all duration-300">
                  Get Started Free
                </button>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$49</div>
                <p className="text-gray-300 mb-6">For growing businesses</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    All basic features
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Email support
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    API access
                  </li>
                </ul>
                <button className="w-full cyber-button text-center py-3">
                  Start Free Trial
                </button>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$99</div>
                <p className="text-gray-300 mb-6">For established teams</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Everything in Starter
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom workflows
                  </li>
                </ul>
                <button className="w-full border border-purple-500 text-purple-400 font-semibold py-3 px-6 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-orange-400 mb-4">Custom</div>
                <p className="text-gray-300 mb-6">For large organizations</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom development
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full border border-orange-500 text-orange-400 font-semibold py-3 px-6 rounded-lg hover:bg-orange-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our micro SAAS solutions to streamline their operations and increase productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-center py-4 px-8 group-hover:scale-105 transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </button>
                <button className="border border-cyan-500/30 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;