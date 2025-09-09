import React, { useState } from 'react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '@/data/advancedInnovativeServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '@/data/emergingTechServices2025';
import { Phone, Mail, Globe, ExternalLink, Star, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react';

interface ServiceCardProps {
  service: any;
  onContact: (service: any) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContact }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Autonomous Systems':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'Quantum Computing & AI':
        return <Zap className="w-6 h-6 text-purple-400" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6 text-red-400" />;
      case 'Healthcare AI':
        return <Brain className="w-6 h-6 text-green-400" />;
      case 'Financial Services':
        return <TrendingUp className="w-6 h-6 text-yellow-400" />;
      case 'Manufacturing & Industrial':
        return <Zap className="w-6 h-6 text-blue-400" />;
      case 'Retail & E-commerce':
        return <TrendingUp className="w-6 h-6 text-pink-400" />;
      case 'Education & Learning':
        return <Brain className="w-6 h-6 text-indigo-400" />;
      case 'Transportation & Logistics':
        return <Rocket className="w-6 h-6 text-orange-400" />;
      case 'Energy & Utilities':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Space Technology':
        return <Rocket className="w-6 h-6 text-blue-500" />;
      case 'Advanced Robotics':
        return <Zap className="w-6 h-6 text-gray-400" />;
      case 'Biotechnology':
        return <Brain className="w-6 h-6 text-green-500" />;
      case 'Materials Science':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Nanotechnology':
        return <Zap className="w-6 h-6 text-slate-400" />;
      case 'Quantum Communications':
        return <Zap className="w-6 h-6 text-violet-400" />;
      case 'Neuromorphic Computing':
        return <Brain className="w-6 h-6 text-cyan-500" />;
      case 'Synthetic Biology':
        return <Brain className="w-6 h-6 text-emerald-500" />;
      case 'Fusion Energy':
        return <Zap className="w-6 h-6 text-red-500" />;
      default:
        return <Star className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {getCategoryIcon(service.category)}
          <div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-zinc-400 text-sm">{service.category}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">
            {service.currency}{service.price.toLocaleString()}
          </div>
          <div className="text-zinc-400 text-sm capitalize">{service.pricingModel}</div>
        </div>
      </div>

      <p className="text-zinc-300 mb-4 leading-relaxed">{service.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="text-zinc-400">
          <span className="font-semibold text-zinc-300">ROI:</span> {service.roi}
        </div>
        <div className="text-zinc-400">
          <span className="font-semibold text-zinc-300">Delivery:</span> {service.estimatedDelivery}
        </div>
        <div className="text-zinc-400">
          <span className="font-semibold text-zinc-300">Market Price:</span> {service.marketPrice}
        </div>
        <div className="text-zinc-400">
          <span className="font-semibold text-zinc-300">Level:</span> {service.innovationLevel}
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
        >
          {expanded ? 'Show Less' : 'Show More Details'}
        </button>
      </div>

      {expanded && (
        <div className="space-y-4 mb-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Key Features</h4>
            <ul className="grid grid-cols-1 gap-1">
              {service.features.slice(0, 5).map((feature: string, idx: number) => (
                <li key={idx} className="text-zinc-400 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Benefits</h4>
            <ul className="grid grid-cols-1 gap-1">
              {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                <li key={idx} className="text-zinc-400 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {service.technicalSpecs && (
            <div>
              <h4 className="text-white font-semibold mb-2">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-zinc-400">
                  <span className="font-semibold text-zinc-300">Uptime:</span> {service.technicalSpecs.uptime}
                </div>
                <div className="text-zinc-400">
                  <span className="font-semibold text-zinc-300">API Endpoints:</span> {service.technicalSpecs.apiEndpoints}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          onClick={() => onContact(service)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Get Started
        </button>
        <div className="text-right">
          <div className="text-zinc-400 text-xs">Contact:</div>
          <div className="text-cyan-400 text-sm font-medium">{service.contactInfo.phone}</div>
        </div>
      </div>
    </div>
  );
};

const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [contactModal, setContactModal] = useState<{ open: boolean; service: any }>({
    open: false,
    service: null
  });

  const allServices = [...ADVANCED_INNOVATIVE_SERVICES_2025, ...EMERGING_TECH_SERVICES_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleContact = (service: any) => {
    setContactModal({ open: true, service });
  };

  const closeContactModal = () => {
    setContactModal({ open: false, service: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Innovative Services 2025
          </h1>
          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge portfolio of revolutionary micro SAAS services, AI solutions, and emerging technology platforms. 
            Each service is designed to deliver unprecedented ROI and competitive advantages in the digital age.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
            <div className="text-zinc-300">Advanced Services</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400">400-1200%</div>
            <div className="text-zinc-300">Average ROI</div>
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

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services, features, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-500 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onContact={handleContact}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-zinc-400 text-lg">No services found matching your criteria.</div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Ready to Transform Your Business?</h2>
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
                <div className="text-zinc-400 text-sm mb-1">Price</div>
                <div className="text-white font-semibold">{contactModal.service.currency}{contactModal.service.price.toLocaleString()}/{contactModal.service.pricingModel}</div>
              </div>
              <div>
                <div className="text-zinc-400 text-sm mb-1">ROI</div>
                <div className="text-white font-semibold">{contactModal.service.roi}</div>
              </div>
              <div>
                <div className="text-zinc-400 text-sm mb-1">Delivery Time</div>
                <div className="text-white font-semibold">{contactModal.service.estimatedDelivery}</div>
              </div>
              <div>
                <div className="text-zinc-400 text-sm mb-1">Innovation Level</div>
                <div className="text-white font-semibold">{contactModal.service.innovationLevel}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-cyan-400">{contactModal.service.contactInfo.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-cyan-400">{contactModal.service.contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                <Globe className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Visit Website</div>
                  <a 
                    href={contactModal.service.contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    {contactModal.service.contactInfo.website}
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

export default AdvancedServicesShowcase;