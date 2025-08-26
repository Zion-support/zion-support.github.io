import React, { useState } from 'react';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Atom,
  Car,
  Leaf,
  Factory,
  Building2,
  GraduationCap,
  Store,
  Scale,
  Truck,
  Home,
  Utensils,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from '../data/advancedMicroSaasServices2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/specializedITInfrastructureServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';

export default function AdvancedServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'budget') {
      matchesPrice = service.price <= 1000;
    } else if (selectedPriceRange === 'mid-range') {
      matchesPrice = service.price > 1000 && service.price <= 3000;
    } else if (selectedPriceRange === 'enterprise') {
      matchesPrice = service.price > 3000;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Quantum Computing': Atom,
      'Internet of Things': Network,
      'Blockchain & Web3': Shield,
      'Cybersecurity': Lock,
      'Cloud & Infrastructure': Cloud,
      'Edge Computing': Cpu,
      'Network Infrastructure': Globe,
      'Infrastructure': Building2,
      'Sustainability': Leaf,
      'Extended Reality': Eye,
      'Biotechnology': Heart,
      'Renewable Energy': Zap,
      'Space Technology': Rocket
    };
    return iconMap[category] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Quantum Computing': 'from-blue-500 to-cyan-500',
      'Internet of Things': 'from-green-500 to-emerald-500',
      'Blockchain & Web3': 'from-orange-500 to-red-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud & Infrastructure': 'from-blue-500 to-indigo-500',
      'Edge Computing': 'from-teal-500 to-blue-500',
      'Network Infrastructure': 'from-indigo-500 to-purple-500',
      'Infrastructure': 'from-gray-500 to-blue-500',
      'Sustainability': 'from-green-500 to-teal-500',
      'Extended Reality': 'from-purple-500 to-indigo-500',
      'Biotechnology': 'from-pink-500 to-red-500',
      'Renewable Energy': 'from-yellow-500 to-green-500',
      'Space Technology': 'from-purple-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Services Showcase
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2025 Edition
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS solutions, IT infrastructure services, and emerging technology platforms. 
              Built for the future, delivering value today.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $1,000)</option>
                  <option value="mid-range">Mid-Range ($1,000 - $3,000)</option>
                  <option value="enterprise">Enterprise ($3,000+)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {filteredServices.length} Advanced Services Available
          </h2>
          <p className="text-gray-400">
            Filtered by: {selectedCategory !== 'all' ? selectedCategory : 'All Categories'} • {selectedPriceRange !== 'all' ? selectedPriceRange : 'All Prices'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                    {service.category}
                  </span>
                </div>

                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${categoryColor} mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-400">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Delivery */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="text-green-400 font-semibold">
                    ${service.price.toLocaleString()}/{service.pricingModel}
                  </div>
                  <div className="text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.estimatedDelivery}
                  </div>
                </div>

                {/* Market Price */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Market Price Range:</div>
                  <div className="text-sm text-yellow-400 font-semibold">{service.marketPrice}</div>
                </div>

                {/* Support Level */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    service.supportLevel === 'enterprise' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {service.supportLevel === 'enterprise' ? 'Enterprise Support' : 'Premium Support'}
                  </span>
                </div>

                {/* Contact Button */}
                <div className="flex space-x-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get Quote</span>
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm">Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm">Send us your requirements</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm">Learn more about our services</p>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center justify-center">
                  ziontechgroup.com
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-3">Business Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}