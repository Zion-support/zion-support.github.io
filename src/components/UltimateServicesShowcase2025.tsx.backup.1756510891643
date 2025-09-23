import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Database, 
  Users, 
  TrendingUp, 
  Globe, 
  Lock,
  Cloud,
  Briefcase,
  Scale,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search
} from 'lucide-react';
import { ULTIMATE_REAL_SERVICES_2025, ULTIMATE_SERVICE_CATEGORIES_2025, ULTIMATE_SERVICE_SUBCATEGORIES_2025, ULTIMATE_PRICING_TIERS_2025, ULTIMATE_CONTACT_INFO_2025, ULTIMATE_SERVICE_GUARANTEES_2025 } from '@/data/ultimateRealServices2025';

export default function UltimateServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Object.keys(ULTIMATE_SERVICE_CATEGORIES_2025)];

  const filteredServices = ULTIMATE_REAL_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return ULTIMATE_SERVICE_CATEGORIES_2025[category]?.icon ? 
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_2025[category].icon}</span> : 
      <Rocket className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Ultimate Innovative Services 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous business, micro SAAS, technology solutions"
        ogImage="/og-image.jpg"
        canonicalUrl="https://ziontechgroup.com"
      />
      
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Ultimate Services Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge AI, quantum computing, and emerging technology solutions designed to transform your business and drive unprecedented growth
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-cyan-400/20 border border-cyan-400/30 rounded-full px-6 py-3">
              <span className="text-cyan-400 font-semibold">🚀 {filteredServices.length} Services</span>
            </div>
            <div className="bg-purple-400/20 border border-purple-400/30 rounded-full px-6 py-3">
              <span className="text-purple-400 font-semibold">⚡ AI-Powered</span>
            </div>
            <div className="bg-pink-400/20 border border-pink-400/30 rounded-full px-6 py-3">
              <span className="text-pink-400 font-semibold">💎 Enterprise Grade</span>
            </div>
            <div className="bg-cyan-400/20 border border-cyan-400/30 rounded-full px-6 py-3">
              <span className="text-cyan-400 font-semibold">💰 ROI: 200-1000%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-lg"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-cyan-400" />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900 shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span className="ml-2 capitalize">{category === 'all' ? 'All Services' : category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-lg">${service.price}</div>
                    <div className="text-gray-400 text-sm">{service.pricingModel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="text-cyan-400 font-semibold">ROI:</span> {service.roi}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our experts to discuss how our innovative services can drive your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-cyan-400" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-cyan-400" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}