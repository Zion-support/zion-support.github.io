import React, { useState, useMemo } from 'react';
import { Search, Filter, DollarSign, Users, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

// Mock data for cloud DevOps services
const cloudDevOpsServices = [
  {
    id: 1,
    name: 'AWS DevOps Pipeline',
    description: 'Complete CI/CD pipeline setup on AWS',
    category: 'CI/CD',
    pricing: 'Enterprise',
    features: ['Automated testing', 'Blue-green deployment', 'Monitoring'],
    targetAudience: ['Large enterprises', 'DevOps teams'],
    duration: '2-4 weeks',
    price: 15000,
    userLimit: 'Unlimited users',
    deliveryTime: '2-4 weeks',
    contactInfo: {
      website: 'https://zion.app/contact',
      email: 'devops@zion.app',
      phone: '+1-555-0123'
    }
  }
  // Add more services as needed
];

const CloudDevOpsServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  // Extract unique categories and pricing options
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(cloudDevOpsServices.map(service => service.category)))];
    return cats;
  }, []);

  const pricingOptions = useMemo(() => {
    const pricing = ['All', ...Array.from(new Set(cloudDevOpsServices.map(service => service.pricing)))];
    return pricing;
  }, []);

  const filteredServices = cloudDevOpsServices.filter((service: any) => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'All' || service.pricing === selectedPricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'CI/CD': return <Clock className="w-5 h-5" />;
      case 'Monitoring': return <CheckCircle className="w-5 h-5" />;
      case 'Security': return <Users className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Starter': return 'text-green-400 bg-green-500/20';
      case 'Professional': return 'text-blue-400 bg-blue-500/20';
      case 'Enterprise': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Cloud & DevOps Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable cloud infrastructure, automated DevOps pipelines, and container orchestration solutions that accelerate your development cycle
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input type="text" placeholder="Search cloud & DevOps services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              {categories.map(category => (<option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>
            
            <select value={selectedPricing} onChange={(e) => setSelectedPricing(e.target.value)} className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              {pricingOptions.map(pricing => (<option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Tiers' : pricing}
                </option>))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (<div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  ${service.price.toLocaleString()}/month
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (<span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (<span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {audience}
                    </span>))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Delivery: {service.deliveryTime}</span>
                  <a href={service.contactInfo.website} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    Get Started →
                  </a>
                </div>
              </div>
            </div>))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our cloud and DevOps solutions are designed to grow with your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)};
export default CloudDevOpsServices;
