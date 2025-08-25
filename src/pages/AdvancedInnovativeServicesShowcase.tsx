import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Search,
  Filter,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';

export default function AdvancedInnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'innovation' | 'roi'>('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: ADVANCED_INNOVATIVE_SERVICES.length },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Brain, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('AI & IoT')).length },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Scale, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Blockchain')).length },
    { id: 'AI & Customer Experience', name: 'Customer Experience', icon: Users, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Customer Experience')).length },
    { id: 'Quantum Technology & Cloud', name: 'Quantum Tech', icon: Atom, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Quantum Technology')).length },
    { id: 'AI & Financial Services', name: 'Financial Services', icon: DollarSign, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Financial Services')).length },
    { id: 'AI & Autonomous Systems', name: 'Autonomous Systems', icon: Zap, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Autonomous Systems')).length },
    { id: 'AI & Smart Cities', name: 'Smart Cities', icon: Building, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Smart Cities')).length },
    { id: 'Quantum Computing & Healthcare', name: 'Quantum Healthcare', icon: Heart, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Quantum Computing')).length },
    { id: 'AI & Cybersecurity', name: 'Cybersecurity', icon: Shield, count: ADVANCED_INNOVATIVE_SERVICES.filter(s => s.category.includes('Cybersecurity')).length }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & IoT': 'from-blue-500 to-cyan-500',
      'Blockchain & Supply Chain': 'from-green-500 to-emerald-500',
      'AI & Customer Experience': 'from-purple-500 to-pink-500',
      'Quantum Technology & Cloud': 'from-indigo-500 to-purple-500',
      'AI & Financial Services': 'from-yellow-500 to-orange-500',
      'AI & Autonomous Systems': 'from-red-500 to-pink-500',
      'AI & Smart Cities': 'from-teal-500 to-blue-500',
      'Quantum Computing & Healthcare': 'from-pink-500 to-red-500',
      'AI & Cybersecurity': 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const filteredServices = ADVANCED_INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        return b.innovationLevel.length - a.innovationLevel.length;
      case 'roi':
        const aRoi = parseInt(a.roi.split('%')[0]);
        const bRoi = parseInt(b.roi.split('%')[0]);
        return bRoi - aRoi;
      default:
        return 0;
    }
  });

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary') || level.includes('Breakthrough')) return 5;
    if (level.includes('Cutting-edge') || level.includes('Advanced')) return 4;
    if (level.includes('Innovative') || level.includes('Modern')) return 3;
    return 2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Advanced Innovative Services Showcase - Zion Tech Group" 
        description="Discover our cutting-edge portfolio of advanced innovative services including AI-powered solutions, quantum technology, blockchain platforms, and autonomous systems."
        keywords="advanced innovative services, AI solutions, quantum technology, blockchain, autonomous systems, smart cities, cybersecurity, financial services"
        canonical="https://ziontechgroup.com/advanced-innovative-services"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Innovative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Revolutionary micro SAAS solutions, IT services, and AI innovations that transform businesses and drive digital transformation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan">
                <span className="text-zion-cyan font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
                <span className="text-zion-purple font-semibold">Quantum Technology</span>
              </div>
              <div className="bg-zion-green/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-green">
                <span className="text-zion-green font-semibold">Blockchain & IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/70 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan border-zion-cyan text-black'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'innovation' | 'roi')}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              <option value="innovation">Sort by Innovation</option>
              <option value="roi">Sort by ROI</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Services Portfolio
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Explore our comprehensive suite of advanced innovative services designed to give your business a competitive edge in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            const innovationStars = getInnovationLevel(service.innovationLevel);
            
            return (
              <div key={service.id} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-cyan/70">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Innovation Level */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-zion-cyan font-medium">Innovation Level:</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < innovationStars ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-cyan/70">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <TrendingUpIcon className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Delivery */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center gap-2 text-zion-cyan">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.roi}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                  </div>

                  {/* Market Price Comparison */}
                  <div className="mb-4 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                    <div className="text-xs text-zion-cyan/70 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-zion-cyan">{service.marketPrice}</div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-zion-cyan font-medium">Contact Us</div>
                      <div className="text-xs text-zion-slate-light">24/7 Support</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Phone className="w-4 h-4 text-zion-cyan" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Mail className="w-4 h-4 text-zion-cyan" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <MapPin className="w-4 h-4 text-zion-cyan" />
                        <span>Middletown, DE</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold py-3 px-6 rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block">
            <div className="text-2xl font-bold text-white mb-2">
              {sortedServices.length} Advanced Services Available
            </div>
            <div className="text-zion-cyan">
              {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm rounded-3xl p-8 border border-zion-cyan/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold">Middletown, DE</span>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zion-cyan text-black font-semibold py-3 px-8 rounded-lg hover:bg-zion-cyan/90 transition-all duration-300"
            >
              Visit Our Website
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}