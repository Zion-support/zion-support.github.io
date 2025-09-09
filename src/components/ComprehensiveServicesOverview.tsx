import React, { useState, useMemo } from 'react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '@/data/advancedInnovativeServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '@/data/emergingTechServices2025';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, Globe, ExternalLink, Search, Filter, Star, TrendingUp, Zap, Shield, Brain, Rocket, DollarSign, Clock, Target } from 'lucide-react';

interface ServiceCardProps {
  service: any;
  onContact: (service: any) => void;
  isAdvanced?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContact, isAdvanced = false }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Autonomous Systems': <Brain className="w-5 h-5 text-cyan-400" />,
      'Quantum Computing & AI': <Zap className="w-5 h-5 text-purple-400" />,
      'Cybersecurity': <Shield className="w-5 h-5 text-red-400" />,
      'Healthcare AI': <Brain className="w-5 h-5 text-green-400" />,
      'Financial Services': <TrendingUp className="w-5 h-5 text-yellow-400" />,
      'Manufacturing & Industrial': <Zap className="w-5 h-5 text-blue-400" />,
      'Retail & E-commerce': <TrendingUp className="w-5 h-5 text-pink-400" />,
      'Education & Learning': <Brain className="w-5 h-5 text-indigo-400" />,
      'Transportation & Logistics': <Rocket className="w-5 h-5 text-orange-400" />,
      'Energy & Utilities': <Zap className="w-5 h-5 text-emerald-400" />,
      'Space Technology': <Rocket className="w-5 h-5 text-blue-500" />,
      'Advanced Robotics': <Zap className="w-5 h-5 text-gray-400" />,
      'Biotechnology': <Brain className="w-5 h-5 text-green-500" />,
      'Materials Science': <Zap className="w-5 h-5 text-amber-400" />,
      'Nanotechnology': <Zap className="w-5 h-5 text-slate-400" />,
      'Quantum Communications': <Zap className="w-5 h-5 text-violet-400" />,
      'Neuromorphic Computing': <Brain className="w-5 h-5 text-cyan-500" />,
      'Synthetic Biology': <Brain className="w-5 h-5 text-emerald-500" />,
      'Fusion Energy': <Zap className="w-5 h-5 text-red-500" />,
      'Micro SaaS': <Zap className="w-5 h-5 text-blue-400" />,
      'IT Services': <Shield className="w-5 h-5 text-green-400" />,
      'AI Solutions': <Brain className="w-5 h-5 text-purple-400" />,
      'Data & Analytics': <TrendingUp className="w-5 h-5 text-cyan-400" />,
      'Cloud & DevOps': <Zap className="w-5 h-5 text-blue-400" />
    };
    return iconMap[category] || <Star className="w-5 h-5 text-yellow-400" />;
  };

  const getPriceDisplay = () => {
    if (isAdvanced) {
      return (
        <div className="text-right">
          <div className="text-xl font-bold text-cyan-400">
            {service.currency}{service.price.toLocaleString()}
          </div>
          <div className="text-zinc-400 text-xs capitalize">{service.pricingModel}</div>
        </div>
      );
    } else {
      return (
        <div className="text-right">
          <div className="text-xl font-bold text-cyan-400">{service.price}</div>
          <div className="text-zinc-400 text-xs capitalize">
            {service.billing === 'month' ? 'Monthly' : service.billing === 'hour' ? 'Hourly' : 'Project-based'}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`border border-zinc-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 ${
      isAdvanced ? 'bg-gradient-to-br from-zinc-900 to-zinc-800' : 'bg-zinc-800'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-1">
          {getCategoryIcon(service.category)}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-white truncate">{service.title}</h3>
            <p className="text-zinc-400 text-xs truncate">{service.category}</p>
          </div>
        </div>
        {getPriceDisplay()}
      </div>

      <p className="text-zinc-300 text-sm mb-3 line-clamp-2">{service.description}</p>

      {isAdvanced && (
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="text-zinc-400">
            <span className="font-semibold text-zinc-300">ROI:</span> {service.roi}
          </div>
          <div className="text-zinc-400">
            <span className="font-semibold text-zinc-300">Delivery:</span> {service.estimatedDelivery}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
        <button
          onClick={() => onContact(service)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-medium py-1 px-3 rounded transition-colors"
        >
          Contact
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-zinc-600 space-y-2">
          <div>
            <h4 className="text-white font-semibold text-xs mb-1">Features</h4>
            <ul className="space-y-1">
              {(isAdvanced ? service.features : service.features).slice(0, 3).map((feature: string, idx: number) => (
                <li key={idx} className="text-zinc-400 text-xs flex items-center gap-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const ComprehensiveServicesOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [contactModal, setContactModal] = useState<{ open: boolean; service: any }>({
    open: false,
    service: null
  });

  const allServices = useMemo(() => {
    const advanced = ADVANCED_INNOVATIVE_SERVICES_2025.map(s => ({ ...s, type: 'advanced' }));
    const emerging = EMERGING_TECH_SERVICES_2025.map(s => ({ ...s, type: 'emerging' }));
    const catalog = servicesCatalog.flatMap(cat => 
      cat.items.map(item => ({ ...item, type: 'catalog' }))
    );
    return [...advanced, ...emerging, ...catalog];
  }, []);

  const categories = useMemo(() => {
    return ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  }, [allServices]);

  const types = [
    { value: 'all', label: 'All Services' },
    { value: 'advanced', label: 'Advanced Services' },
    { value: 'emerging', label: 'Emerging Tech' },
    { value: 'catalog', label: 'Core Services' }
  ];

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesType = selectedType === 'all' || service.type === selectedType;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [allServices, selectedCategory, selectedType, searchTerm]);

  const handleContact = (service: any) => {
    setContactModal({ open: true, service });
  };

  const closeContactModal = () => {
    setContactModal({ open: false, service: null });
  };

  const getContactInfo = (service: any) => {
    if (service.contactInfo) {
      return service.contactInfo;
    }
    return {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Portfolio
          </h1>
          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Explore our complete range of micro SAAS services, AI solutions, and emerging technology platforms. 
            From core business solutions to cutting-edge innovations, we have everything to transform your business.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
            <div className="text-zinc-300">Total Services</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400">20+</div>
            <div className="text-zinc-300">Categories</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">$1.2T+</div>
            <div className="text-zinc-300">Market Size</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400">99.9%</div>
            <div className="text-zinc-300">Success Rate</div>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services, features, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {types.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedType === type.value
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 10).map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={`${service.type}-${service.id || index}`}
              service={service}
              onContact={handleContact}
              isAdvanced={service.type === 'advanced' || service.type === 'emerging'}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-zinc-400 text-lg">No services found matching your criteria.</div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Phone</div>
              <div className="text-cyan-400">+1 302 464 0950</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Email</div>
              <div className="text-cyan-400">kleber@ziontechgroup.com</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Website</div>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="text-zinc-400">Address: 364 E Main St STE 1008 Middletown DE 19709</div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {contactModal.open && contactModal.service && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Contact Us About</h2>
              <button
                onClick={closeContactModal}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{contactModal.service.title}</h3>
              <p className="text-zinc-300">{contactModal.service.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-zinc-400 text-sm mb-1">Category</div>
                <div className="text-white font-semibold">{contactModal.service.category}</div>
              </div>
              <div>
                <div className="text-zinc-400 text-sm mb-1">Service Type</div>
                <div className="text-white font-semibold capitalize">{contactModal.service.type || 'Standard'}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-cyan-400">{getContactInfo(contactModal.service).phone}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-cyan-400">{getContactInfo(contactModal.service).email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <Globe className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Visit Website</div>
                  <a 
                    href={getContactInfo(contactModal.service).website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    {getContactInfo(contactModal.service).website}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={closeContactModal}
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComprehensiveServicesOverview;