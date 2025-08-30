import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Search,
  Filter,
  Target,
  Palette,
  Truck,
  Play,
  Eye,
  MessageSquare,
  TrendingUp as TrendingUpIcon,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from '../data/advancedMicroSaasServices2025';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/advancedITInfrastructureServices2025';
import { ADVANCED_AI_SERVICES_2025 } from '../data/advancedAIServices2025';

export default function AdvancedServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025.map(service => ({
      ...service,
      type: 'Micro SAAS',
      icon: getServiceIcon(service.category)
    })),
    ...ADVANCED_IT_INFRASTRUCTURE_SERVICES_2025.map(service => ({
      ...service,
      type: 'IT Infrastructure',
      icon: getServiceIcon(service.category)
    })),
    ...ADVANCED_AI_SERVICES_2025.map(service => ({
      ...service,
      type: 'AI Services',
      icon: getServiceIcon(service.category)
    }))
  ];

  function getServiceIcon(category: string) {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'AI & Customer Experience': Users,
      'AI & Operations': Truck,
      'AI & Security': Shield,
      'AI & Marketing': Target,
      'Cloud Services': Cloud,
      'DevOps Services': Rocket,
      'Security Services': ShieldCheck,
      'Infrastructure Services': Server,
      'Consulting Services': Lightbulb,
      'AI & Language': MessageSquare,
      'AI & Vision': Eye,
      'AI & Personalization': TrendingUpIcon,
      'AI & Security': Lock,
      'AI & Operations': Truck
    };
    return iconMap[category] || Settings;
  }

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'Micro SAAS', 'IT Infrastructure', 'AI Services'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Advanced Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services. 
              Real solutions for real business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white shadow-lg'
                      : 'bg-zion-slate-light text-zion-slate-dark hover:bg-zion-slate hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-zion-slate-light">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-zion-slate-light text-zion-slate-dark text-xs font-medium rounded-full mb-2">
                        {service.type}
                      </span>
                      {service.badge && (
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs font-medium rounded-full ml-2">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">({service.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-zion-slate-dark mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-slate-dark">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-sm text-zion-slate-light capitalize">
                      {service.pricingModel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <TrendingUpIcon className="w-4 h-4" />
                    <span>Market: {service.marketPrice}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-slate-dark mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-zion-slate-light">
                        +{service.features.length - 3} more features
                      </span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-slate-dark mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Sparkles className="w-4 h-4 text-zion-cyan" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Info */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-zion-slate-light">
                    <Clock className="w-3 h-3" />
                    <span>Setup: {service.setupTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-zion-slate-light">
                    <TrendingUpIcon className="w-3 h-3" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  {service.aiScore && (
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Brain className="w-3 h-3" />
                      <span>AI Score: {service.aiScore}%</span>
                    </div>
                  )}
                  {service.expertiseLevel && (
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Award className="w-3 h-3" />
                      <span>Expertise: {service.expertiseLevel}%</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-4 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-zion-slate-light text-zion-slate-dark py-3 px-4 rounded-lg font-medium hover:bg-zion-slate hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Visit Service</span>
                    <Globe2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-zion-slate-dark mb-2">{selectedService.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-zion-slate-light text-zion-slate-dark text-sm font-medium rounded-full">
                        {selectedService.type}
                      </span>
                      {selectedService.badge && (
                        <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-medium rounded-full">
                          {selectedService.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-zion-slate-dark transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Service Overview</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-6">{selectedService.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-2">Pricing</h4>
                      <div className="bg-zion-slate-light rounded-lg p-4">
                        <div className="text-3xl font-bold text-zion-slate-dark mb-1">
                          {selectedService.currency}{selectedService.price}
                        </div>
                        <div className="text-sm text-zion-slate-light capitalize">
                          {selectedService.pricingModel} • Market: {selectedService.marketPrice}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-2">Key Benefits</h4>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-zion-slate-dark mb-4">Technical Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-2">Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-2">Use Cases</h4>
                      <div className="space-y-1">
                        {selectedService.useCases.map((useCase, idx) => (
                          <div key={idx} className="text-sm text-zion-slate-light">• {useCase}</div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-2">Target Audience</h4>
                      <div className="space-y-1">
                        {selectedService.targetAudience.map((audience, idx) => (
                          <div key={idx} className="text-sm text-zion-slate-light">• {audience}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 p-6 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="text-sm opacity-90">Phone</div>
                      <div className="font-semibold">+1 302 464 0950</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <div className="text-sm opacity-90">Email</div>
                      <div className="font-semibold">kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <div className="text-sm opacity-90">Address</div>
                      <div className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={selectedService.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-zion-blue px-6 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors"
                  >
                    Visit Service Page
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}