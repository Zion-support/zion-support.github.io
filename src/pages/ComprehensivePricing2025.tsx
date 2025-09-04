import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Cpu, 
  Lock,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Users
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, InnovativeService } from '../data/innovativeServices2025';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_SERVICES_2025.length },
    { id: 'AI Services', name: 'AI Services', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Services').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS').length },
    { id: 'IT Services', name: 'IT Services', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Services', name: 'Cloud Services', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cloud Services').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Data Analytics').length },
    { id: 'IoT', name: 'IoT', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IoT').length },
    { id: 'Blockchain', name: 'Blockchain', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Blockchain').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Quantum Computing').length }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Pricing Models' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' },
    { id: 'project', name: 'Project-based' },
    { id: 'per-user', name: 'Per User' },
    { id: 'pay-per-use', name: 'Pay-per-Use' }
  ];

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricingModel = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    return matchesCategory && matchesPricingModel;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return <Cpu className="w-5 h-5" />;
      case 'Micro SaaS': return <Zap className="w-5 h-5" />;
      case 'IT Services': return <Database className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud Services': return <Globe className="w-5 h-5" />;
      case 'Data Analytics': return <TrendingUp className="w-5 h-5" />;
      case 'IoT': return <Target className="w-5 h-5" />;
      case 'Blockchain': return <Lock className="w-5 h-5" />;
      case 'Quantum Computing': return <Award className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'cutting-edge': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard': return 'bg-green-100 text-green-800 border-green-200';
      case 'emerging': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') {
      return `${currency}${price.toLocaleString()}/month`;
    } else if (model === 'yearly') {
      return `${currency}${price.toLocaleString()}/year`;
    } else if (model === 'project') {
      return `${currency}${price.toLocaleString()}/project`;
    } else if (model === 'per-user') {
      return `${currency}${price.toLocaleString()}/user`;
    } else if (model === 'pay-per-use') {
      return `${currency}${price.toLocaleString()}/use`;
    }
    return `${currency}${price.toLocaleString()}`;
  };

  const getPricingTier = (price: number) => {
    if (price < 1000) return 'starter';
    if (price < 5000) return 'professional';
    if (price < 15000) return 'enterprise';
    return 'premium';
  };

  const getPricingTierColor = (tier: string) => {
    switch (tier) {
      case 'starter': return 'border-green-200 bg-green-50';
      case 'professional': return 'border-blue-200 bg-blue-50';
      case 'enterprise': return 'border-purple-200 bg-purple-50';
      case 'premium': return 'border-gold-200 bg-gold-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transparent, competitive pricing for our innovative technology services. 
              Choose the perfect solution for your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/innovative-services-2025" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-64">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:w-64">
              <label className="block text-sm font-medium text-gray-700 mb-2">Pricing Model</label>
              <select
                value={selectedPricingModel}
                onChange={(e) => setSelectedPricingModel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {pricingModels.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const pricingTier = getPricingTier(service.price);
            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 ${getPricingTierColor(pricingTier)}`}
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm font-medium text-gray-600">{service.category}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {formatPrice(service.price, service.currency, service.pricingModel)}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      Market Price: {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Expected ROI: {service.roi}
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Delivery Time</span>
                      <span className="font-medium">{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Support Level</span>
                      <span className="font-medium capitalize">{service.supportLevel}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Market Size</span>
                      <span className="font-medium">{service.marketSize}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link
                      to="/contact"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/innovative-services-2025"
                      className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <DollarSign className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria.</p>
          </div>
        )}
      </div>

      {/* Pricing Tiers Explanation */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Tiers Explained</h2>
            <p className="text-xl text-gray-600">Understanding our pricing structure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 text-sm">Perfect for small businesses and startups looking to get started with our services.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 text-sm">Ideal for growing businesses that need more advanced features and support.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 text-sm">Comprehensive solutions for large organizations with complex requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 text-sm">Cutting-edge solutions for industry leaders and innovators.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team can create a tailored solution that perfectly fits your business needs and budget. 
                Contact us for a personalized consultation and custom pricing.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Your Custom Quote</h3>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold transition-colors text-center block"
                >
                  Request Custom Quote
                </Link>
                <a
                  href="tel:+13024640950"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-4 rounded-lg font-semibold transition-colors text-center block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricing2025;