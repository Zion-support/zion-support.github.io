import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Cpu, 
  Database,
  Globe,
  Users,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import enhancedInnovativeServices2030 from '../data/enhancedInnovativeServices2030';
import enhancedITandAIServices2030 from '../data/enhancedITandAIServices2030';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints?: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  freeTier?: boolean;
  trialPeriod?: string;
  setupTime?: string;
  growthRate?: string;
  compliance?: string[];
}

const EnhancedServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices: Service[] = [
    ...enhancedInnovativeServices2030,
    ...enhancedITandAIServices2030
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(s => s.innovationLevel)))];

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 border-purple-400';
      case 'Cutting-edge': return 'text-blue-400 border-blue-400';
      case 'Advanced': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise': return 'bg-red-100 text-red-800';
      case 'premium': return 'bg-blue-100 text-blue-800';
      case 'standard': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl font-semibold text-purple-300 mb-4">
              Innovative Micro SAAS, IT & AI Services 2030
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered platforms to quantum-ready infrastructure, 
              we deliver innovative services that drive growth, efficiency, and competitive advantage.
            </p>
            
            {/* Contact Information */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-purple-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Innovation Level Filter */}
            <select
              value={selectedInnovationLevel}
              onChange={(e) => setSelectedInnovationLevel(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {innovationLevels.map(level => (
                <option key={level} value={level} className="bg-slate-800 text-white">
                  {level === 'all' ? 'All Innovation Levels' : level}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
              <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
              <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
              <option value="roi" className="bg-slate-800 text-white">Highest ROI</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel}
                  </span>
                  <span className="text-xs text-gray-400">
                    {service.category} • {service.subcategory}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">
                    {service.currency}{service.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400">
                    {service.pricingModel}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-400">
                    Market: {service.marketPrice}
                  </span>
                  <span className="text-purple-400">
                    ROI: {service.roi}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="text-xs text-slate-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-purple-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 gap-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="text-xs text-slate-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              {service.technicalSpecs && (
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-yellow-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technicalSpecs.technology.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-xs text-white rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technicalSpecs.technology.length > 4 && (
                      <span className="px-2 py-1 bg-white/10 text-xs text-purple-400 rounded">
                        +{service.technicalSpecs.technology.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                <div className="text-center p-2 bg-white/5 rounded">
                  <div className="text-gray-400">Delivery</div>
                  <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                </div>
                {service.setupTime && (
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-gray-400">Setup</div>
                    <div className="text-white font-semibold">{service.setupTime}</div>
                  </div>
                )}
                {service.freeTier && (
                  <div className="text-center p-2 bg-green-500/20 rounded border border-green-500/30">
                    <div className="text-green-400">Free Tier</div>
                    <div className="text-green-300 font-semibold">Available</div>
                  </div>
                )}
                {service.trialPeriod && (
                  <div className="text-center p-2 bg-blue-500/20 rounded border border-blue-500/30">
                    <div className="text-blue-400">Trial</div>
                    <div className="text-blue-300 font-semibold">{service.trialPeriod}</div>
                  </div>
                )}
              </div>

              {/* Market Info */}
              {service.marketSize && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Market Size</div>
                  <div className="text-white font-semibold">{service.marketSize}</div>
                  {service.growthRate && (
                    <div className="text-xs text-green-400 mt-1">
                      Growth: {service.growthRate}
                    </div>
                  )}
                </div>
              )}

              {/* Competitors */}
              {service.competitors && (
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Competitors</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.competitors.slice(0, 3).map((competitor, index) => (
                      <span key={index} className="px-2 py-1 bg-red-500/20 text-xs text-red-300 rounded border border-red-500/30">
                        {competitor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact CTA */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
                
                <div className="mt-3 text-center">
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center gap-1"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Results Count */}
        {filteredServices.length > 0 && (
          <div className="text-center mt-8 text-slate-400">
            Showing {filteredServices.length} of {allServices.length} services
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Schedule Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-slate-400">
            <p>Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;