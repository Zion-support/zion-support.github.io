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
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Users2,
  Globe2,
  ShieldCheck
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES_2025 } from '../data/enhancedInnovativeServices2025';

export default function ComprehensiveServicesMarketing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = Array.from(new Set(ENHANCED_INNOVATIVE_SERVICES_2025.map(service => service.category)));

  const filteredServices = ENHANCED_INNOVATIVE_SERVICES_2025.filter(service =>
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Advanced AI & Machine Learning': Brain,
      'Emerging Technology Solutions': Rocket,
      'Industry-Specific AI Solutions': Target,
      'Enterprise Automation Services': Building,
      'Cybersecurity & Compliance': Shield,
      'Data & Analytics Services': BarChart3,
      'Cloud & DevOps Solutions': Cloud,
      'Digital Transformation Services': Zap
    };
    return iconMap[category] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Advanced AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Emerging Technology Solutions': 'from-blue-500 to-cyan-500',
      'Industry-Specific AI Solutions': 'from-green-500 to-emerald-500',
      'Enterprise Automation Services': 'from-orange-500 to-yellow-500',
      'Cybersecurity & Compliance': 'from-red-500 to-pink-500',
      'Data & Analytics Services': 'from-indigo-500 to-purple-500',
      'Cloud & DevOps Solutions': 'from-blue-500 to-indigo-500',
      'Digital Transformation Services': 'from-teal-500 to-green-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryStats = (category: string) => {
    const servicesInCategory = ENHANCED_INNOVATIVE_SERVICES_2025.filter(service => service.category === category);
    const totalPrice = servicesInCategory.reduce((sum, service) => sum + service.price, 0);
    const avgPrice = totalPrice / servicesInCategory.length;
    
    return {
      count: servicesInCategory.length,
      avgPrice: Math.round(avgPrice),
      totalValue: totalPrice
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Zion Tech Group
            </span> 
            <br />
            2025 Service Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Leading the future of technology with cutting-edge micro SAAS solutions, AI-powered platforms, and innovative digital transformation services. 
            Transform your business with our comprehensive suite of intelligent solutions.
          </p>
          
          {/* Company Overview */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Globe2 className="w-6 h-6 text-cyan-400 mr-2" />
                  About Zion Tech Group
                </h3>
                <p className="text-gray-300 mb-4">
                  We are a revolutionary technology company specializing in AI-powered solutions, 
                  micro SAAS services, and cutting-edge digital transformation. Our mission is to 
                  democratize advanced technology and make it accessible to businesses of all sizes.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Founded in 2024
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Global reach and expertise
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    24/7 support and monitoring
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-2" />
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                    <span className="text-gray-300 text-sm">Cutting-edge AI and quantum computing solutions</span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                    <span className="text-gray-300 text-sm">Proven track record of successful implementations</span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                    <span className="text-gray-300 text-sm">Competitive pricing with enterprise-grade quality</span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                    <span className="text-gray-300 text-sm">Comprehensive support and training</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-gray-400 block">Phone</span>
                <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-gray-400 block">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-gray-400 block">Address</span>
                <span className="text-white text-sm font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Service Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{ENHANCED_INNOVATIVE_SERVICES_2025.length}</div>
              <div className="text-gray-400 mb-2">Total Services</div>
              <div className="text-sm text-gray-500">Comprehensive solutions</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">{categories.length}</div>
              <div className="text-gray-400 mb-2">Categories</div>
              <div className="text-sm text-gray-500">Specialized domains</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400 mb-2">Support</div>
              <div className="text-sm text-gray-500">Always available</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-orange-400">99.9%</div>
              <div className="text-gray-400 mb-2">Uptime</div>
              <div className="text-sm text-gray-500">Reliable service</div>
            </div>
          </div>
        </div>

        {/* Category Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              const stats = getCategoryStats(category);
              
              return (
                <div
                  key={category}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category === selectedCategory ? 'all' : category)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(category)} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{category}</h3>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-cyan-400">{stats.count}</div>
                    <div className="text-sm text-gray-400">Services</div>
                    <div className="text-sm text-gray-500">Avg: ${stats.avgPrice}/mo</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service, idx) => {
            const IconComponent = getCategoryIcon(service.category);
            const isExpanded = expandedService === service.id;
            
            return (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-cyan-400 font-semibold">
                        {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                      </span>
                      <span className="text-gray-400">
                        {service.estimatedDelivery}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.supportLevel === 'enterprise' 
                          ? 'bg-purple-500/20 text-purple-300' 
                          : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {service.supportLevel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category and Tags */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">
                    <span className="text-cyan-400">{service.category}</span> • {service.subcategory}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 5).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features and Benefits Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-white font-medium mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIdx) => (
                        <div key={featureIdx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleServiceExpansion(service.id)}
                  className="w-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors py-2 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 mb-4"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Less Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show Full Details
                    </>
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="space-y-4 pt-4 border-t border-gray-700">
                    {/* Technology Stack */}
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <Code className="w-4 h-4 text-purple-400 mr-2" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologyStack.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Integration Capabilities */}
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <Network className="w-4 h-4 text-blue-400 mr-2" />
                        Integration Capabilities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.integrationCapabilities.map((integration, intIdx) => (
                          <span
                            key={intIdx}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <Target className="w-4 h-4 text-orange-400 mr-2" />
                        Use Cases
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.useCases.map((useCase, useCaseIdx) => (
                          <div key={useCaseIdx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Price Comparison */}
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                        Pricing & Market Comparison
                      </h4>
                      <div className="text-sm text-gray-300 space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Our Competitive Price:</span>
                          <span className="text-green-400 font-semibold">
                            {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Market Average:</span>
                          <span className="text-gray-400">{service.marketPrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Support Level:</span>
                          <span className="text-cyan-400 capitalize">{service.supportLevel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex space-x-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}