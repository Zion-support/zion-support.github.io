import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ExternalLink,
  Play,
  FileText,
  Settings,
  BarChart,
  ShieldCheck,
  Zap as Lightning,
  Globe2,
  Cpu as Chip,
  Database as DataIcon,
  Smartphone,
  Code2
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/advancedInnovativeMicroSaasServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';

export default function AdvancedInnovativeServices2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_IT_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'low') matchesPrice = service.price <= 1000;
    else if (selectedPriceRange === 'medium') matchesPrice = service.price > 1000 && service.price <= 3000;
    else if (selectedPriceRange === 'high') matchesPrice = service.price > 3000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Autonomous Systems':
      case 'AI & Machine Learning':
      case 'AI & Content Creation':
      case 'AI & Research':
      case 'AI & Automation':
        return Brain;
      case 'Quantum Technology':
        return Atom;
      case 'Cybersecurity':
        return Shield;
      case 'Internet of Things':
        return Network;
      case 'Blockchain & Web3':
        return Cpu;
      case 'Cloud Services':
        return Cloud;
      case 'DevOps & Automation':
        return Code;
      case 'Data & Analytics':
        return BarChart3;
      case 'IT Infrastructure':
        return Building2;
      case 'IT Management':
        return Settings;
      case 'API & Integration':
        return Code2;
      case 'Mobile Development':
        return Smartphone;
      case 'Database & Storage':
        return DataIcon;
      case 'Customer Experience':
        return Users;
      case 'Data Management':
        return Database;
      case '5G & Connectivity':
        return Network;
      case 'Compliance & Security':
        return ShieldCheck;
      default:
        return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Autonomous Systems':
      case 'AI & Machine Learning':
      case 'AI & Content Creation':
      case 'AI & Research':
      case 'AI & Automation':
        return 'from-purple-500 to-pink-500';
      case 'Quantum Technology':
        return 'from-blue-500 to-cyan-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Internet of Things':
        return 'from-green-500 to-teal-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Cloud Services':
        return 'from-indigo-500 to-purple-500';
      case 'DevOps & Automation':
        return 'from-blue-500 to-indigo-500';
      case 'Data & Analytics':
        return 'from-emerald-500 to-blue-500';
      case 'IT Infrastructure':
        return 'from-gray-500 to-blue-500';
      case 'IT Management':
        return 'from-slate-500 to-blue-500';
      case 'API & Integration':
        return 'from-violet-500 to-purple-500';
      case 'Mobile Development':
        return 'from-pink-500 to-red-500';
      case 'Database & Storage':
        return 'from-cyan-500 to-blue-500';
      case 'Customer Experience':
        return 'from-rose-500 to-pink-500';
      case 'Data Management':
        return 'from-teal-500 to-green-500';
      case '5G & Connectivity':
        return 'from-blue-600 to-indigo-600';
      case 'Compliance & Security':
        return 'from-red-600 to-pink-600';
      default:
        return 'from-gray-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced Innovative Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover cutting-edge micro SAAS services, IT solutions, and AI-powered platforms that will transform your business in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Price Ranges</option>
                <option value="low">$0 - $1,000/month</option>
                <option value="medium">$1,000 - $3,000/month</option>
                <option value="high">$3,000+/month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6 rounded-t-2xl text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8" />
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {service.subcategory}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">${service.price.toLocaleString()}</span>
                      <span className="text-gray-500 ml-2">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Market Price</p>
                      <p className="text-sm font-medium text-gray-900">{service.marketPrice}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-sm text-gray-500 text-center">
                          +{service.features.length - 3} more features
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Zap className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  {service.technologyStack && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Chip className="w-4 h-4 mr-2 text-purple-500" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologyStack.slice(0, 4).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {service.technologyStack.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            +{service.technologyStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1" />
                      <span className="capitalize">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link
                      to={service.websiteUrl}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.demoUrl && (
                        <a
                          href={service.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      )}
                      
                      {service.documentationUrl && (
                        <a
                          href={service.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Docs
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Ready to get started?</p>
                      <div className="space-y-2">
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {service.contactInfo.phone}
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {service.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters to find the services you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-2">Visit our website for more information</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center justify-center"
            >
              <Globe2 className="w-4 h-4 mr-2" />
              ziontechgroup.com
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}